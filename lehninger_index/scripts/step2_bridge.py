# Step 2: build the A <-> B page correspondence.
#
# A's text layer is OCR of a scan (median 4295 chars/page but "dehy:Jrogenase",
# "lnternembrane"), so matching prose across the two books is unreliable. FIGURE/TABLE/BOX
# labels are short, numeric and chapter-scoped, which survives OCR far better -- use those
# as anchors, then enforce monotonicity so cross-references (which appear pages away from
# the actual figure) get discarded rather than corrupting the map.
import io, os, re, json, bisect
import fitz

LEH = r"C:\Users\Admin\Downloads\lehninger书"
A_PDF = os.path.join(LEH, r"LehningerPrinciplesofBiochemistry8th(DavidL.Nelson,MichaelCox) (1).pdf")
B_PDF = os.path.join(LEH, r"LehningerPrinciplesofBiochemistry8thedDavidLNel.pdf")
OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
os.makedirs(OUT, exist_ok=True)

log = io.open(os.path.join(OUT, "_step2_report.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

A_OFFSET = -36   # printed page = pdf index + A_OFFSET; measured on 612 pages in probe_A

# tolerate OCR damage in the keyword, not in the digits
LABEL = re.compile(r"\b(F[I1l!]GURE|TABLE|BOX)\s+(\d{1,2})\s*[-\u2010-\u2015]\s*(\d{1,3})\b", re.I)
def labels(text):
    out = set()
    for m in LABEL.finditer(text):
        kind = m.group(1).upper()
        kind = "FIGURE" if kind.startswith(("F", "1", "L", "!")) else kind
        out.add((kind, int(m.group(2)), int(m.group(3))))
    return out

def scan(path, name):
    d = fitz.open(path)
    occ = {}          # label -> [pages...]
    for i in range(d.page_count):
        for lab in labels(d[i].get_text()):
            occ.setdefault(lab, []).append(i + 1)
    d.close()
    p(f"{name}: {len(occ)} distinct labels, "
      f"{sum(len(v) for v in occ.values())} occurrences")
    return occ

occA = scan(A_PDF, "A")
occB = scan(B_PDF, "B")

shared = sorted(set(occA) & set(occB), key=lambda l: (l[1], l[2], l[0]))
p("labels present in both:", len(shared),
  " A-only:", len(set(occA) - set(occB)), " B-only:", len(set(occB) - set(occA)))

# --- pick one (a,b) per label, then keep only a monotonically increasing subset ---
# For each label, prefer the occurrence pair that is closest to the running trend; formally:
# build every candidate pair and take the longest chain increasing in BOTH coordinates.
cands = []
for k, lab in enumerate(shared):
    for a in occA[lab]:
        for b in occB[lab]:
            cands.append((b, a, lab))      # sort by B, then find LIS on A
cands.sort(key=lambda c: (c[0], c[1]))
p("candidate (a,b) pairs:", len(cands))

# LIS on the A coordinate, strictly increasing in b too, and one pair per label
best_len = [0] * len(cands)
best_prev = [-1] * len(cands)
# O(n^2) is too slow for ~1e5; use patience sorting on a, requiring b strictly greater.
# Sorted by (b,a) already, so a plain non-decreasing-a LIS gives a monotone chain in both.
tails, tails_idx, prev = [], [], [-1] * len(cands)
for i, (b, a, lab) in enumerate(cands):
    j = bisect.bisect_left(tails, a)
    if j > 0:
        prev[i] = tails_idx[j - 1]
    if j == len(tails):
        tails.append(a); tails_idx.append(i)
    else:
        tails[j] = a; tails_idx[j] = i
chain = []
i = tails_idx[-1]
while i != -1:
    chain.append(cands[i]); i = prev[i]
chain.reverse()

# one pair per label (the chain may reuse a label if it appeared twice); keep first
seen, anchors = set(), []
for b, a, lab in chain:
    if lab in seen:
        continue
    seen.add(lab)
    anchors.append({"label": f"{lab[0]} {lab[1]}-{lab[2]}", "kind": lab[0],
                    "ch": lab[1], "num": lab[2],
                    "page_a_pdf": a, "page_a_print": a + A_OFFSET, "page_b": b})
p("monotone anchors kept:", len(anchors), f"({len(anchors)*100//max(1,len(shared))}% of shared labels)")

# --- sanity checks -------------------------------------------------------------
assert all(anchors[i]["page_b"] <= anchors[i+1]["page_b"] for i in range(len(anchors)-1))
assert all(anchors[i]["page_a_pdf"] <= anchors[i+1]["page_a_pdf"] for i in range(len(anchors)-1))

known = [a for a in anchors if a["label"] == "FIGURE 19-16"]
p("")
p("documented bridge FIGURE 19-16 -> A p.708, B p.2401:", known)
assert known and known[0]["page_a_pdf"] == 708 and known[0]["page_b"] == 2401, known

# chapter numbers must advance with the pages
bad_ch = [ (anchors[i]["label"], anchors[i+1]["label"]) for i in range(len(anchors)-1)
           if anchors[i+1]["ch"] < anchors[i]["ch"] ]
p("anchors whose chapter number goes backwards:", len(bad_ch), bad_ch[:5])

# density
gapsB = [anchors[i+1]["page_b"] - anchors[i]["page_b"] for i in range(len(anchors)-1)]
gapsB.sort()
p("B-page gap between consecutive anchors: median", gapsB[len(gapsB)//2],
  " p90", gapsB[int(len(gapsB)*.9)], " max", gapsB[-1])
p("anchor coverage in B: from page", anchors[0]["page_b"], "to", anchors[-1]["page_b"])

# --- the map: any B page -> A page, by piecewise-linear interpolation -----------
bs = [a["page_b"] for a in anchors]
as_pdf = [a["page_a_pdf"] for a in anchors]
def b_to_a(pb):
    j = bisect.bisect_left(bs, pb)
    if j == 0: return as_pdf[0], "extrapolated"
    if j >= len(bs): return as_pdf[-1], "extrapolated"
    b0, b1, a0, a1 = bs[j-1], bs[j], as_pdf[j-1], as_pdf[j]
    if b1 == b0: return a0, "anchor"
    frac = (pb - b0) / (b1 - b0)
    return int(round(a0 + frac * (a1 - a0))), ("anchor" if pb in (b0, b1) else "interpolated")

# leave-one-out accuracy: how well does the map predict a held-out anchor?
errs = []
for k in range(1, len(anchors)-1):
    b0, b1 = anchors[k-1]["page_b"], anchors[k+1]["page_b"]
    a0, a1 = anchors[k-1]["page_a_pdf"], anchors[k+1]["page_a_pdf"]
    if b1 == b0: continue
    pred = a0 + (anchors[k]["page_b"] - b0) / (b1 - b0) * (a1 - a0)
    errs.append(abs(pred - anchors[k]["page_a_pdf"]))
errs.sort()
p("")
p("leave-one-out A-page prediction error (pdf pages): median %.2f  p90 %.2f  p99 %.2f  max %.2f"
  % (errs[len(errs)//2], errs[int(len(errs)*.9)], errs[int(len(errs)*.99)], errs[-1]))

# --- apply to the step-1 TOC ---------------------------------------------------
toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
for r in toc["entries"]:
    a, how = b_to_a(r["page_b"])
    ae, _ = b_to_a(r["page_b_end"])
    r["page_a_pdf"], r["page_a_print"] = a, a + A_OFFSET
    r["page_a_pdf_end"], r["page_a_print_end"] = ae, ae + A_OFFSET
    r["a_confidence"] = how
for k, v in toc["chapters"].items():
    a, _ = b_to_a(v["page_b"]); ae, _ = b_to_a(v["page_b_end"])
    v["page_a_pdf"], v["page_a_print"] = a, a + A_OFFSET
    v["page_a_pdf_end"], v["page_a_print_end"] = ae, ae + A_OFFSET
toc["a_offset"] = A_OFFSET
toc["note"] = ("page_a_print = printed page number in the paper book; page_a_pdf = page index "
               "in PDF A. B page numbers are ebook-reflow artefacts, useful only as PDF indices.")

json.dump({"anchors": anchors}, io.open(os.path.join(OUT, "lehninger_AB_anchors.json"), "w",
          encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(toc, io.open(os.path.join(OUT, "lehninger_B_toc.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

with io.open(os.path.join(OUT, "lehninger_toc.tsv"), "w", encoding="utf-8") as f:
    cols = ("level","kind","chapter_num","section","title","page_a_print","page_a_print_end",
            "page_a_pdf","page_b","page_b_end","a_confidence")
    f.write("\t".join(cols) + "\n")
    for r in toc["entries"]:
        f.write("\t".join("" if r.get(c) is None else str(r[c]) for c in cols) + "\n")

p("")
p("=== chapters, with printed page numbers in A ===")
p(f'{"ch":>3}  {"printed A":>11} {"pp":>4}   {"B":>11}   title')
for n in range(1, 29):
    v = toc["chapters"][str(n)]
    p(f'{n:>3}  {v["page_a_print"]:>5}-{v["page_a_print_end"]:<5} '
      f'{v["page_a_print_end"]-v["page_a_print"]+1:>4}   {v["page_b"]:>5}-{v["page_b_end"]:<5}  {v["title"]}')
tot = sum(toc["chapters"][str(n)]["page_a_print_end"] - toc["chapters"][str(n)]["page_a_print"] + 1
          for n in range(1, 29))
p("total printed pages across the 28 chapters:", tot)
p("")
p("OK: wrote lehninger_AB_anchors.json, lehninger_toc.tsv, updated lehninger_B_toc.json")
log.close()
print("done")
