"""Coverage check for ch1 against section 21 of the source markdown.

The structural check proves nodes are well-formed, not that they cover the
material. Each question below is reduced to keywords that can only co-occur
in one node if the *explanation* is present, not merely the topic. When a
check fails it prints which nodes contain each keyword separately, which is
what distinguishes "material missing" from "material split across nodes".
"""
import re, sys, io, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

QUESTIONS = [
    ("1  why recombinant DNA at all",        ["central dogma", "amplif"]),
    ("2  eukaryotic gene in E. coli",        ["intron", "spliceosome"]),
    ("3  why EPO not in E. coli",            ["erythropoietin", "glycosyl"]),
    ("4  codon optimisation",                ["synonymous", "amino-acid sequence"]),
    ("5  Taq vs Phusion",                    ["3′→5′ exo", "fidelity", "3′-A overhang"]),
    ("6  blue-white screening + IPTG",       ["alpha-complementation", "X-gal", "IPTG"]),
    ("7  vector dephosphorylation",          ["dephosphoryl", "self-ligat"]),
    ("8  Golden Gate in one tube",           ["destroys the recognition site", "regenerat"]),
    ("9  the single-dNTP trick in LIC",      ["exonuclease", "dGTP", "stall"]),
    ("10 Gibson enzymes + heat-labile T5",   ["T5 exonuclease", "Phusion", "Taq DNA ligase", "heat-labile"]),
    ("11 TOPO without ATP or ligase",        ["phosphotyrosyl", "no ATP"]),
    ("12 ccdB and Gateway >95%",             ["ccdB", "counter-selection", "gyrase"]),
    ("13 authentic N-terminus ruled out",    ["authentic", "eight", "scar"]),
    ("14 digest of a miniprep fails",        ["Dam", "Dcm", "fragment end"]),
    ("15 tiny colonies around big ones",     ["satellite"]),
    ("16 two plasmids in one cell",          ["ORI", "compatib"]),
]


def load_nodes(path):
    src = open(path, encoding='utf-8').read()
    starts = [m.start() for m in re.finditer(r"^  id: '", src, re.M)] + [len(src)]
    return [(re.search(r"id: '([^']+)'", src[starts[i]:starts[i+1]]).group(1),
             src[starts[i]:starts[i+1]])
            for i in range(len(starts) - 1)]


def main():
    nodes = load_nodes(os.path.join(HERE, 'data', 'ch1.js'))
    print("%d nodes in ch1.js\n" % len(nodes))
    ok = 0
    for label, kws in QUESTIONS:
        hits = [nid for nid, blk in nodes if all(k.lower() in blk.lower() for k in kws)]
        if hits:
            ok += 1
            print("OK   %-36s -> %s" % (label, ", ".join(hits[:3])))
        else:
            print("GAP  %-36s" % label)
            for k in kws:
                where = [nid for nid, blk in nodes if k.lower() in blk.lower()]
                print("       %-28s %s" % ('"' + k + '"', ", ".join(where[:6]) or "NOWHERE"))
    print("\n%d / %d covered" % (ok, len(QUESTIONS)))
    return 0 if ok == len(QUESTIONS) else 1


if __name__ == "__main__":
    sys.exit(main())
