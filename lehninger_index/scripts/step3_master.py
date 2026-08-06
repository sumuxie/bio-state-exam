# Step 3: the master table.
#
# Skeleton = the CZECH TEXTBOOK'S OWN TOC (user decision, 2026-08-06, HANDOFF_LEHNINGER.md
# section 8 open decision 1). One row per Czech section, 113 of them.
#
# The Czech -> Lehninger column is written by hand below. It is then cross-checked against
# step3_match.py, which proposes the same mapping from term-hit density and heading overlap
# with no knowledge of this table. Agreement between two independent methods is the evidence;
# every disagreement is printed in full so it can be judged rather than averaged away.
import io, os, json, math

OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
log = io.open(os.path.join(OUT, "_step3_report.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
SEC = {r["section"]: r for r in toc["entries"] if r["kind"] == "section"}
cz = json.load(io.open(os.path.join(OUT, "cz_skeleton.json"), encoding="utf-8"))
auto = {(r["chapter"], r["section"]): r
        for r in json.load(io.open(os.path.join(OUT, "cz_to_lehninger_proposed.json"),
                                   encoding="utf-8"))}

# Czech section -> Lehninger sections. Ordered: the first one is the primary place to read.
MAP = {
 # ch1 -- general introduction
 "1.1": ["1.1"], "1.2": ["1.1"], "1.3": ["1.1", "1.2"],
 "1.4": ["1.3", "13.1"], "1.5": ["1.3", "13.1"], "1.6": ["1.5"],
 # ch2 -- amino acids and proteins
 "2.1.1": ["3.1"], "2.1.2": ["3.1", "2.2"], "2.1.3": ["3.1"], "2.1.4": ["3.2"],
 "2.2.1": ["3.4"], "2.2.2": ["4.1", "4.2"], "2.2.3": ["4.3"], "2.2.4": ["4.3"],
 "2.2.5": ["3.2", "4.3"], "2.2.6": ["3.3", "4.4"],
 # ch3 -- enzymes
 "3.1": ["6.1"], "3.2": ["6.1", "6.2", "13.4"], "3.3.1": ["6.3"], "3.3.2": ["6.3"],
 "3.3.3": ["6.3"], "3.4": ["6.3"], "3.5": ["6.3"], "3.6": ["6.2", "6.4"], "3.7": ["6.5"],
 # ch4 -- nucleic acids and protein synthesis
 "4.1": ["8.1", "1.4"], "4.1.1.1": ["22.4"], "4.1.1.2": ["22.4"], "4.1.2": ["8.1", "8.2"],
 "4.1.3": ["25.1", "24.1"], "4.1.4": ["26.1", "26.2"], "4.1.5": ["22.4", "8.3"],
 "4.2.1": ["27.1"], "4.2.2": ["27.2"], "4.2.3": ["27.2"], "4.2.4": ["28.1", "28.2"],
 "4.3.1": ["4.4"], "4.3.2": ["27.3"], "4.3.3": ["27.3", "6.5"],
 # ch5 -- protein degradation and amino acid catabolism
 "5.1": ["27.3", "18.1"], "5.2": ["18.1"], "5.2.1": ["18.1"], "5.2.2": ["18.2"],
 "5.2.3": ["18.3"],
 # ch6 -- bioenergetics
 "6.1": ["13.1"], "6.1.1": ["13.1"], "6.1.2": ["13.3"], "6.1.3": ["13.2", "13.5"],
 "6.2.1": ["13.4"], "6.2.2": ["16.1", "16.2", "16.4"], "6.2.3": ["20.6"],
 "6.2.4": ["19.1", "19.2", "19.3"], "6.3": ["22.3", "5.1"],
 # ch7 -- carbohydrates
 "7.1": ["7.1"], "7.1.1": ["7.1"], "7.1.2": ["7.1"], "7.1.3": ["7.1"], "7.1.4": ["7.1"],
 "7.2.1": ["7.1"], "7.2.2": ["7.1"], "7.2.3": ["7.1"], "7.2.4": ["7.1"], "7.2.5": ["7.1"],
 "7.2.6": ["7.1"], "7.3": ["7.1"], "7.4": ["7.2"], "7.4.1": ["7.2"],
 "7.4.2": ["7.2", "7.3"], "7.5": ["7.3", "7.4"],
 "7.6": ["14.2"], "7.6.1": ["14.2"], "7.6.2": ["14.6"], "7.6.3": ["14.6"], "7.7": ["14.6"],
 "7.8": ["14.1"], "7.8.1": ["14.3"], "7.9": ["14.4"], "7.9.1": ["14.4", "18.3"],
 "7.10": ["14.2", "7.5"], "7.11.1": ["14.2"], "7.11.2": ["15.2"], "7.12": ["15.2", "20.6"],
 # ch8 -- lipids and membranes
 "8.1": ["10.1"], "8.2.1": ["10.1"], "8.2.2": ["10.1"], "8.2.3": ["10.2"],
 "8.2.4": ["10.3", "21.4"], "8.3": ["21.1", "21.2", "21.3", "21.4"],
 "8.4.1": ["17.1"], "8.4.2": ["10.4", "21.3"], "8.4.3": ["21.4"],
 "8.4.4": ["17.1", "17.2", "17.3"],
 "8.5": ["11.1"], "8.5.1": ["11.1"], "8.5.2": ["11.1", "11.2"], "8.5.3": ["11.3"],
 # ch9 -- photosynthesis and nitrogen fixation
 "9": ["20.1"], "9.1": ["20.1"], "9.1.1": ["20.1"], "9.1.2": ["20.2"],
 "9.1.3": ["20.2", "20.3"], "9.1.4": ["20.4"], "9.2": ["20.5"], "9.3": ["20.5"],
 "9.4": ["22.1"], "9.5": ["21.4", "22.3"],
 # ch10 -- intermediary metabolism and hormones
 "10.1": ["13.2", "23.2"], "10.1.1": ["14.1", "15.2"], "10.1.2": ["17.2", "17.3"],
 "10.1.3": ["23.2", "16.3"], "10.1.4": ["16.3"], "10.2": ["13.5", "6.5"],
 "10.3": ["23.1", "23.3", "12.7"],
}

missing = [s["section"] for s in cz if s["section"] not in MAP]
assert not missing, "Czech sections with no mapping: %s" % missing
extra = [k for k in MAP if k not in {s["section"] for s in cz}]
assert not extra, "mapped sections that do not exist: %s" % extra
badsec = sorted({x for v in MAP.values() for x in v if x not in SEC})
assert not badsec, "mapped to non-existent Lehninger sections: %s" % badsec
p("mapping covers all %d Czech sections; every target is a real Lehninger section" % len(MAP))

rows = []
for s in cz:
    ls = [SEC[x] for x in MAP[s["section"]]]
    a_pp = sum(x["page_a_print_end"] - x["page_a_print"] + 1 for x in ls)
    a = auto.get((s["chapter"], s["section"]))
    auto_top = a["proposals"][0]["section"] if a and a["proposals"] else None
    rows.append({
        "cz_chapter": s["chapter"], "cz_section": s["section"],
        "enTitle": s["enTitle"], "czTitle": s["czTitle"],
        "cz_pages": f'{s["pages"][0]}-{s["pages"][-1]}' if len(s["pages"]) > 1 else str(s["pages"][0]),
        "cz_page_count": s["page_count"], "cz_nodes": s["nodes"],
        "node_ids": ",".join(s["node_ids"]),
        "leh_sections": ",".join(MAP[s["section"]]),
        "leh_titles": " | ".join(x["title"] for x in ls),
        "leh_pages_A": "; ".join(f'{x["section"]}:{x["page_a_print"]}-{x["page_a_print_end"]}' for x in ls),
        "leh_pages_B": "; ".join(f'{x["section"]}:{x["page_b"]}-{x["page_b_end"]}' for x in ls),
        "leh_page_count": a_pp,
        "depth_ratio": round(a_pp / s["page_count"], 1),
        "auto_top": auto_top,
        "auto_agrees": (auto_top in MAP[s["section"]]) if auto_top else None,
        "auto_margin": a["margin"] if a else None,
    })

COLS = ("cz_chapter","cz_section","enTitle","cz_pages","cz_page_count","cz_nodes",
        "leh_sections","leh_page_count","depth_ratio","leh_pages_A","leh_pages_B",
        "auto_top","auto_agrees","auto_margin","leh_titles","node_ids","czTitle")
with io.open(os.path.join(OUT, "master_map.tsv"), "w", encoding="utf-8") as f:
    f.write("\t".join(COLS) + "\n")
    for r in rows:
        f.write("\t".join("" if r[c] is None else str(r[c]) for c in COLS) + "\n")
json.dump(rows, io.open(os.path.join(OUT, "master_map.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

# ---- cross-check ----
agree = [r for r in rows if r["auto_agrees"]]
disagree = [r for r in rows if r["auto_agrees"] is False]
p("")
p("=== cross-check against the independent automatic matcher ===")
p("agrees on %d of %d Czech sections (%.0f%%); disagrees on %d"
  % (len(agree), len(rows), 100*len(agree)/len(rows), len(disagree)))
strong = [r for r in disagree if (r["auto_margin"] or 0) >= 1.25]
p("of the disagreements, %d had a confident automatic proposal (margin >= 1.25) "
  "-- those are the ones worth re-reading:" % len(strong))
for r in strong:
    p(f'   ch{r["cz_chapter"]} {r["cz_section"]:<8} {r["enTitle"][:44]:<44} '
      f'hand={r["leh_sections"]:<14} auto={r["auto_top"]} (m={r["auto_margin"]})')

# ---- chapter rollup ----
p("")
p("=== chapter rollup: where the Czech book is thin ===")
p(f'{"CZ ch":<6}{"pages":>7}{"nodes":>7}{"LEH pp":>8}{"ratio":>7}  Lehninger chapters')
for c in range(1, 11):
    rs = [r for r in rows if r["cz_chapter"] == c]
    czp = sum(r["cz_page_count"] for r in rs)
    lsecs = sorted({x for r in rs for x in r["leh_sections"].split(",")},
                   key=lambda x: [int(v) for v in x.split(".")])
    lpp = sum(SEC[x]["page_a_print_end"] - SEC[x]["page_a_print"] + 1 for x in lsecs)
    lch = sorted({int(x.split(".")[0]) for x in lsecs})
    p(f'{c:<6}{czp:>7}{sum(r["cz_nodes"] for r in rs):>7}{lpp:>8}{lpp/czp:>7.1f}  '
      + ",".join(str(x) for x in lch))

# ---- the depth queue (user picked: do all the high-ratio ones) ----
p("")
p("=== depth queue: Czech sections ranked by how much more Lehninger has to say ===")
p("ratio = Lehninger printed pages / Czech pages, for that section's own mapping.")
p("")
p(f'{"ratio":>6}  {"CZ":<9}{"pages":>8}  {"title":<44} Lehninger')
q = sorted(rows, key=lambda r: -r["depth_ratio"])
for r in q[:30]:
    p(f'{r["depth_ratio"]:>6.1f}  {r["cz_section"]:<9}{r["cz_pages"]:>8}  '
      f'{r["enTitle"][:42]:<44} {r["leh_sections"]}')

# ---- what nothing points at ----
claimed = {x for r in rows for x in r["leh_sections"].split(",")}
p("")
p("=== Lehninger sections nothing in the Czech book points at (%d of %d) ==="
  % (len(SEC) - len(claimed), len(SEC)))
for k in sorted(SEC, key=lambda x: [int(v) for v in x.split(".")]):
    if k not in claimed:
        r = SEC[k]
        p(f'  {k:<6} A pp.{r["page_a_print"]}-{r["page_a_print_end"]:<5} {r["title"]}')
tot_in = sum(SEC[x]["page_a_print_end"] - SEC[x]["page_a_print"] + 1 for x in claimed)
tot_all = sum(SEC[x]["page_a_print_end"] - SEC[x]["page_a_print"] + 1 for x in SEC)
p("")
p(f"in scope: {tot_in} of {tot_all} Lehninger printed pages ({100*tot_in//tot_all}%), "
  f"{len(claimed)} of {len(SEC)} sections")
p("")
p("OK: wrote master_map.tsv / master_map.json")
log.close()
print("done")
