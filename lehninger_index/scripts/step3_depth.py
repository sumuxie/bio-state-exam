# Step 3c: the depth queue, computed so it cannot double-count.
#
# The per-Czech-section ratio in master_map.tsv is NOT usable as a ranking: thirteen Czech
# sections point at Lehninger 7.1, and each was credited with all 12 of its pages, so
# "Sugar esters, 1 page -> 12 pages" reads as a 12x gap when the Czech book actually spends
# 13 pages on that same material. Same failure mode as the frequency table in CLAUDE.md.
#
# Fix: allocate fractionally. A Czech section with n Lehninger targets contributes
# page_count/n to each. Czech pages then sum to exactly the book's 221, and the comparison
# is made per Lehninger section, which is the unit you would actually sit down and read.
import io, os, json, math

OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
log = io.open(os.path.join(OUT, "_step3c_depth.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
SEC = {r["section"]: r for r in toc["entries"] if r["kind"] == "section"}
rows = json.load(io.open(os.path.join(OUT, "master_map.json"), encoding="utf-8"))

alloc, sources = {}, {}
for r in rows:
    ls = r["leh_sections"].split(",")
    share = r["cz_page_count"] / len(ls)
    for x in ls:
        alloc[x] = alloc.get(x, 0.0) + share
        sources.setdefault(x, []).append((r["cz_section"], r["enTitle"], round(share, 1)))

total_cz = sum(r["cz_page_count"] for r in rows)
assert abs(sum(alloc.values()) - total_cz) < 1e-6, (sum(alloc.values()), total_cz)

# Be precise about what this does and does not fix. The allocation stops ONE Lehninger
# section from being credited to several Czech sections at full weight. It does NOT make
# the Czech side a clean page budget: the Czech sections' own page ranges overlap (7.1.3 is
# pp.149-152 and 7.1.4 is p.151), so their page counts sum to more than the book has.
cz_nodes = json.load(io.open(os.path.join(OUT, "cz_nodes.json"), encoding="utf-8"))
unique_cz = len({pg for n in cz_nodes for pg in (n["pages"] or [])})
p("Czech section page-counts sum to %.0f; the book itself is %d distinct pages "
  "(sections overlap, factor %.2f)." % (sum(alloc.values()), unique_cz, total_cz / unique_cz))
p("So `ratio` is a RELATIVE ranking of where Lehninger has more to say, not an absolute")
p("page budget. Comparing two rows is valid; reading a row as 'n pages owed' is not.")

out = []
for k, czp in alloc.items():
    s = SEC[k]
    lp = s["page_a_print_end"] - s["page_a_print"] + 1
    out.append({"leh_section": k, "title": s["title"],
                "page_a_print": s["page_a_print"], "page_a_print_end": s["page_a_print_end"],
                "page_b": s["page_b"], "page_b_end": s["page_b_end"],
                "leh_pages": lp, "cz_pages_allocated": round(czp, 1),
                "ratio": round(lp / czp, 1),
                "cz_sources": sources[k]})
out.sort(key=lambda r: -r["ratio"])
json.dump(out, io.open(os.path.join(OUT, "depth_queue.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
with io.open(os.path.join(OUT, "depth_queue.tsv"), "w", encoding="utf-8") as f:
    f.write("rank\tleh_section\tratio\tleh_pages\tcz_pages_allocated\tpage_a_print\t"
            "page_a_print_end\tpage_b\tpage_b_end\tcz_sections\ttitle\n")
    for i, r in enumerate(out, 1):
        f.write(f'{i}\t{r["leh_section"]}\t{r["ratio"]}\t{r["leh_pages"]}\t'
                f'{r["cz_pages_allocated"]}\t{r["page_a_print"]}\t{r["page_a_print_end"]}\t'
                f'{r["page_b"]}\t{r["page_b_end"]}\t'
                f'{",".join(c for c, _, _ in r["cz_sources"])}\t{r["title"]}\n')

p("")
p("=== depth queue: Lehninger sections ranked by how much more they say ===")
p("ratio = Lehninger printed pages / Czech pages spent on the same material.")
p("ratio ~1 means the Czech book already covers it at comparable length.")
p("")
p(f'{"#":>3} {"ratio":>6} {"L sec":<7}{"A pages":>11}{"LEHpp":>6}{"CZpp":>6}  {"title":<52} from CZ')
for i, r in enumerate(out, 1):
    p(f'{i:>3} {r["ratio"]:>6.1f} {r["leh_section"]:<7}'
      f'{str(r["page_a_print"])+"-"+str(r["page_a_print_end"]):>11}'
      f'{r["leh_pages"]:>6}{r["cz_pages_allocated"]:>6.1f}  {r["title"][:50]:<52} '
      + ",".join(c for c, _, _ in r["cz_sources"]))

# the six the user named, expressed in this table
p("")
p("=== the six topics the user chose, resolved to Lehninger sections ===")
NAMED = {
 "脂类的生物合成 lipid biosynthesis": ["21.1", "21.2", "21.3", "21.4"],
 "氧化磷酸化 oxidative phosphorylation": ["19.1", "19.2", "19.3"],
 "激素 hormones": ["23.1", "23.3", "12.7"],
 "核酸 nucleic acids": ["8.1", "8.2", "8.3", "24.1", "25.1", "26.1", "26.2"],
 "糖酵解 glycolysis": ["14.1", "14.3", "14.4"],
 "柠檬酸循环 citric acid cycle": ["16.1", "16.2", "16.3", "16.4"],
}
byk = {r["leh_section"]: r for r in out}
p(f'{"topic":<38}{"LEHpp":>6}{"CZpp":>6}{"ratio":>7}  read in A')
for name, secs in NAMED.items():
    lp = sum(SEC[s]["page_a_print_end"] - SEC[s]["page_a_print"] + 1 for s in secs)
    czp = sum(byk[s]["cz_pages_allocated"] for s in secs if s in byk)
    apg = ", ".join(f'{s}:{SEC[s]["page_a_print"]}-{SEC[s]["page_a_print_end"]}' for s in secs)
    p(f'{name:<38}{lp:>6}{czp:>6.1f}{(lp/czp if czp else 0):>7.1f}  {apg}')
    for s in secs:
        if s not in byk:
            p(f'      NOTE: {s} "{SEC[s]["title"]}" is claimed by no Czech section at all '
              f'-- pure Lehninger addition')
p("")
p("OK: wrote depth_queue.tsv / depth_queue.json")
log.close()
print("done")
