# Step 4a: decide a topicKey for every Czech section, and show the result for review
# BEFORE touching any data file.
#
# Design: topicKey = a slug for the PRIMARY Lehninger section that Czech section maps to
# (the first entry in master_map's leh_sections). Rationale -- topicKey has to be a join key
# that a future Lehninger node lands on by itself. A Lehninger node is written against a
# Lehninger section, so keying on that section makes the join automatic instead of relying on
# somebody remembering which name was used. Czech sections that share a Lehninger section
# share a topicKey, which is exactly the grouping the topic view wants.
import io, os, json, re

OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
log = io.open(os.path.join(OUT, "_step4_topickeys.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

rows = json.load(io.open(os.path.join(OUT, "master_map.json"), encoding="utf-8"))
toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
SEC = {r["section"]: r for r in toc["entries"] if r["kind"] == "section"}

# Short, exam-shaped slugs. Auto-slugging the Lehninger titles gives things like
# "coordinated-regulation-of-glycolysis-and-gluconeogenesis"; these are hand-written so the
# key reads as a topic a person would be asked about.
SLUG = {
 "1.1": "cells-and-biomolecules",       "1.2": "chemical-foundations",
 "1.3": "bioenergetics-basics",         "1.4": "genetic-foundations",
 "1.5": "origin-and-evolution-of-life",
 "2.2": "ionization-weak-acids",
 "3.1": "amino-acids",                  "3.2": "peptides-and-proteins",
 "3.3": "working-with-proteins",        "3.4": "protein-primary-structure",
 "4.1": "protein-structure-overview",   "4.2": "protein-secondary-structure",
 "4.3": "protein-tertiary-quaternary",  "4.4": "protein-folding-and-denaturation",
 "5.1": "oxygen-binding-proteins",
 "6.1": "enzymes-introduction",         "6.2": "enzyme-mechanism",
 "6.3": "enzyme-kinetics",              "6.4": "enzyme-reaction-examples",
 "6.5": "regulatory-enzymes",
 "7.1": "monosaccharides",              "7.2": "polysaccharides",
 "7.3": "glycoconjugates",              "7.4": "sugar-code",
 "7.5": "working-with-carbohydrates",
 "8.1": "nucleotides",                  "8.2": "nucleic-acid-structure",
 "8.3": "nucleic-acid-chemistry",
 "10.1": "storage-lipids",              "10.2": "membrane-lipids",
 "10.3": "lipid-signals-and-pigments",  "10.4": "working-with-lipids",
 "11.1": "membrane-architecture",       "11.2": "membrane-dynamics",
 "11.3": "membrane-transport",
 "12.7": "nuclear-hormone-receptors",
 "13.1": "bioenergetics-and-thermodynamics", "13.2": "biochemical-reaction-logic",
 "13.3": "atp-and-phosphoryl-transfer",      "13.4": "biological-redox",
 "13.5": "metabolic-regulation",
 "14.1": "glycolysis",                  "14.2": "feeder-pathways-glycolysis",
 "14.3": "fates-of-pyruvate",           "14.4": "gluconeogenesis",
 "14.6": "pentose-phosphate-pathway",
 "15.2": "glycogen-metabolism",
 "16.1": "acetyl-coa-production",       "16.2": "citric-acid-cycle",
 "16.3": "intermediary-metabolism-hub", "16.4": "citric-acid-cycle-regulation",
 "17.1": "fat-mobilization",            "17.2": "fatty-acid-oxidation",
 "17.3": "ketone-bodies",
 "18.1": "amino-group-metabolism",      "18.2": "urea-cycle",
 "18.3": "amino-acid-degradation",
 "19.1": "respiratory-chain",           "19.2": "atp-synthesis",
 "19.3": "oxidative-phosphorylation-regulation",
 "20.1": "photosynthetic-pigments",     "20.2": "photochemical-reaction-centers",
 "20.3": "photophosphorylation",        "20.4": "co2-assimilation",
 "20.5": "photorespiration-c4-cam",     "20.6": "starch-sucrose-biosynthesis",
 "21.1": "fatty-acid-biosynthesis",     "21.2": "triacylglycerol-biosynthesis",
 "21.3": "phospholipid-biosynthesis",   "21.4": "cholesterol-and-isoprenoids",
 "22.1": "nitrogen-metabolism",         "22.3": "amino-acid-derived-molecules",
 "22.4": "nucleotide-metabolism",
 "23.1": "hormone-structure-and-action","23.2": "tissue-specific-metabolism",
 "23.3": "hormonal-regulation-of-fuel",
 "24.1": "chromosomal-elements",
 "25.1": "dna-replication",
 "26.1": "transcription",               "26.2": "rna-processing",
 "27.1": "genetic-code",                "27.2": "translation",
 "27.3": "protein-targeting-and-degradation",
 "28.1": "gene-regulation-proteins",    "28.2": "bacterial-gene-regulation",
}

claimed = []
for r in rows:
    for x in r["leh_sections"].split(","):
        if x not in claimed:
            claimed.append(x)
missing = [x for x in claimed if x not in SLUG]
assert not missing, "Lehninger sections with no slug: %s" % missing
dupe = [v for v in SLUG.values() if list(SLUG.values()).count(v) > 1]
assert not dupe, "duplicate slugs: %s" % set(dupe)
p("slugs defined: %d; every one of the %d claimed sections has one; all distinct"
  % (len(SLUG), len(claimed)))

assign = {}
for r in rows:
    primary = r["leh_sections"].split(",")[0]
    assign[(r["cz_chapter"], r["cz_section"])] = {
        "topicKey": SLUG[primary], "primary": primary,
        "primary_title": SEC[primary]["title"],
        "page_a": f'{SEC[primary]["page_a_print"]}-{SEC[primary]["page_a_print_end"]}',
        "enTitle": r["enTitle"], "nodes": r["node_ids"].split(","),
        "cz_pages": r["cz_pages"],
    }
json.dump({f'{k[0]}|{k[1]}': v for k, v in assign.items()},
          io.open(os.path.join(OUT, "topickey_assignment.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

# node id -> topicKey, which is what the rewrite actually needs
node_key = {}
for v in assign.values():
    for nid in v["nodes"]:
        node_key[nid] = v["topicKey"]
json.dump(node_key, io.open(os.path.join(OUT, "topickey_by_node.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
p("nodes assigned:", len(node_key))
assert len(node_key) == 207, len(node_key)

# ---- review output: group Czech sections by the topicKey they land on ----
groups = {}
for (ch, sec), v in assign.items():
    groups.setdefault(v["topicKey"], []).append((ch, sec, v))
p("")
p("distinct topicKeys in use: %d, over %d Czech sections and %d nodes"
  % (len(groups), len(assign), len(node_key)))
p("")
p("=== every topicKey, and the Czech sections that join on it ===")
for k in sorted(groups, key=lambda k: (-len(groups[k]), k)):
    g = sorted(groups[k], key=lambda x: (x[0], x[1]))
    v0 = g[0][2]
    nn = sum(len(x[2]["nodes"]) for x in g)
    p(f'\n  {k}   [L{v0["primary"]} A pp.{v0["page_a"]}]  {len(g)} CZ sections, {nn} nodes')
    for ch, sec, v in g:
        p(f'      CZ {sec:<8} pp.{v["cz_pages"]:<9} {v["enTitle"][:56]}')

p("")
p("=== sanity: topicKeys carrying an unusually large or small load ===")
big = [(k, len(v)) for k, v in groups.items() if len(v) >= 5]
p("  5+ Czech sections on one key:", big if big else "none")
solo = sum(1 for v in groups.values() if len(v) == 1)
p("  keys used by exactly one Czech section:", solo, "of", len(groups))
p("")
p("OK: wrote topickey_assignment.json, topickey_by_node.json")
log.close()
print("done")
