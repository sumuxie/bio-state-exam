# Step 3e: apply the user's scope decision to the Lehninger sections nothing in the Czech
# book points at, and measure which Czech sections are organic-chemistry-heavy.
#
# User, 2026-08-06: of the 32 unclaimed sections, work ch9 (DNA technologies, CRISPR;
# genomics only briefly), 24.2-24.3, 25.2-25.3 and 22.2 properly; everything else gets a
# one-line mention.
#
# But "unclaimed" turned out to mean two different things, and lumping them together would
# have thrown away real material. Some unclaimed sections are genuinely NEW subject matter
# the Czech book never raises; others are the REGULATION layer of a pathway the Czech book
# does teach (it covers glycolysis but not 14.5, glycogen but not 15.3). The second group is
# depth on an in-scope topic, not a new topic, so the "brief mention" ruling should not
# silently swallow it. Flagged separately below.
import io, os, json, re

OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
log = io.open(os.path.join(OUT, "_step3e_scope.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
SEC = {r["section"]: r for r in toc["entries"] if r["kind"] == "section"}
SUB = [r for r in toc["entries"] if r["kind"] == "subheading"]
rows = json.load(io.open(os.path.join(OUT, "master_map.json"), encoding="utf-8"))
claimed = {x for r in rows for x in r["leh_sections"].split(",")}
unclaimed = [k for k in SEC if k not in claimed]

FULL = ["9.1", "9.2", "24.2", "24.3", "25.2", "25.3", "22.2"]
BRIEF_EXPLICIT = ["9.3"]                      # "基因组学可以简单讲"
# regulation/extension of a pathway the Czech book already teaches -- NOT a new topic
DEPTH_LAYER = ["14.5", "15.1", "15.3", "19.4", "19.5", "28.3"]

scope = {}
for k in unclaimed:
    if k in FULL: scope[k] = "full"
    elif k in BRIEF_EXPLICIT: scope[k] = "brief"
    elif k in DEPTH_LAYER: scope[k] = "depth-layer-ASK"
    else: scope[k] = "brief"

out = []
for k in sorted(unclaimed, key=lambda x: [int(v) for v in x.split(".")]):
    s = SEC[k]
    out.append({"leh_section": k, "title": s["title"], "scope": scope[k],
                "page_a_print": s["page_a_print"], "page_a_print_end": s["page_a_print_end"],
                "page_b": s["page_b"], "page_b_end": s["page_b_end"],
                "pages": s["page_a_print_end"] - s["page_a_print"] + 1})
json.dump(out, io.open(os.path.join(OUT, "lehninger_only_scope.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
with io.open(os.path.join(OUT, "lehninger_only_scope.tsv"), "w", encoding="utf-8") as f:
    f.write("leh_section\tscope\tpages\tpage_a_print\tpage_a_print_end\tpage_b\tpage_b_end\ttitle\n")
    for r in out:
        f.write(f'{r["leh_section"]}\t{r["scope"]}\t{r["pages"]}\t{r["page_a_print"]}\t'
                f'{r["page_a_print_end"]}\t{r["page_b"]}\t{r["page_b_end"]}\t{r["title"]}\n')

p("=== Lehninger sections with no Czech counterpart, with the user's scope ruling ===")
for tag, label in (("full", "WORK PROPERLY"), ("brief", "one-line mention"),
                   ("depth-layer-ASK", "NOT a new topic - regulation of something already taught; ASK")):
    rs = [r for r in out if r["scope"] == tag]
    p(f'\n-- {label}: {len(rs)} sections, {sum(r["pages"] for r in rs)} printed pages')
    for r in rs:
        p(f'   {r["leh_section"]:<6} A pp.{r["page_a_print"]}-{r["page_a_print_end"]:<5} '
          f'B {r["page_b"]}-{r["page_b_end"]:<5} {r["title"]}')

p("")
p("Sub-headings inside the FULL ones, so the writing has a target list:")
for k in FULL:
    subs = [x for x in SUB if x["section"] == k]
    p(f'\n  {k} {SEC[k]["title"]}  (A pp.{SEC[k]["page_a_print"]}-{SEC[k]["page_a_print_end"]})')
    for x in subs:
        p(f'      A p.{x["page_a_print"]:<5} {x["title"]}')

# ---------- organic-chemistry load per Czech section ----------
ORG = r"""ester|ether|anhydrid|acyl|aldehyd|keton|hemiacetal|hemiketal|acetal|ketal|tautomer|
isomer|epimer|anomer|enol|carbonyl|hydroxyl group|amide|azide|halide|nucleophil|electrophil|
resonance|chiral|stereochem|configuration|Fischer|Haworth|mutarotation|condensation|
esterification|decarboxylat|Schiff|imine|carbanion|carbocation|alkyl|aromatic ring|
double bond|functional group|substituent|derivative of|epimeris|isomeris|oxidation number|
optical activity|optically active|asymmetric carbon|racem|D-\s|L-\s|alpha-anomer|beta-anomer|
saturated|unsaturated|conjugat|glycosidic bond|ninhydrin|reduction of the|oxidation of the"""
ORG = re.compile("|".join(x.strip() for x in ORG.split("|") if x.strip()), re.I)

cz = json.load(io.open(os.path.join(OUT, "cz_nodes.json"), encoding="utf-8"))
bysec = {}
for n in cz:
    k = (n["chapter"], (n["section"] or "").rstrip("."))
    e = bysec.setdefault(k, {"txt": [], "en": n["enTitle"]})
    for pt in (n["points"] or []):
        e["txt"].append(pt.get("en") or "")
    for t in (n["terms"] or []):
        e["txt"].append(t.get("en") or "")
        e["txt"].append(t.get("def_en") or "")

load = []
for k, e in bysec.items():
    txt = " ".join(e["txt"])
    words = max(1, len(txt.split()))
    hits = ORG.findall(txt)
    load.append({"chapter": k[0], "section": k[1], "enTitle": e["en"],
                 "words": words, "org_hits": len(hits),
                 "per_1k": round(1000 * len(hits) / words, 1),
                 "sample": sorted({h.lower() for h in hits})[:8]})
load.sort(key=lambda r: -r["per_1k"])
json.dump(load, io.open(os.path.join(OUT, "cz_organic_load.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

lehsec = {r["cz_section"]: r["leh_sections"] for r in rows}
p("")
p("")
p("=== how organic-chemistry-heavy each Czech section is ===")
p("per_1k = organic-chemistry vocabulary hits per 1000 words of the node's own English text.")
p("This is a keyword proxy, not a judgement of difficulty -- but the top of the list is")
p("exactly where the user has said they have no ground to stand on.")
p("")
p(f'{"per1k":>6} {"hits":>5}  {"CZ":<9}{"title":<46} Lehninger')
for r in load[:22]:
    p(f'{r["per_1k"]:>6.1f} {r["org_hits"]:>5}  {r["section"]:<9}{r["enTitle"][:44]:<46} '
      f'{lehsec.get(r["section"],"?")}')
p("")
p("sample vocabulary that fired, for the top 6:")
for r in load[:6]:
    p(f'   {r["section"]:<9} {", ".join(r["sample"])}')
p("")
p("OK: wrote lehninger_only_scope.tsv, cz_organic_load.json")
log.close()
print("done")
