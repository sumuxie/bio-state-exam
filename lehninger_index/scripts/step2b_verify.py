# Step 2b: drop chapter-order-violating anchors, then verify the map INDEPENDENTLY --
# take each numbered section heading from B and check it really appears in A near the
# predicted page. A's text is OCR, so match on a damage-tolerant normalised form.
import io, os, re, json, bisect, difflib
import fitz

LEH = r"C:\Users\Admin\Downloads\lehninger书"
A_PDF = os.path.join(LEH, r"LehningerPrinciplesofBiochemistry8th(DavidL.Nelson,MichaelCox) (1).pdf")
OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
A_OFFSET = -36

log = io.open(os.path.join(OUT, "_step2b_report.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

anchors = json.load(io.open(os.path.join(OUT, "lehninger_AB_anchors.json"), encoding="utf-8"))["anchors"]
p("anchors in:", len(anchors))

# longest non-decreasing subsequence on chapter number (keeps the consistent backbone)
ch = [a["ch"] for a in anchors]
tails, tails_idx, prev = [], [], [-1]*len(ch)
for i, c in enumerate(ch):
    j = bisect.bisect_right(tails, c)
    if j > 0: prev[i] = tails_idx[j-1]
    if j == len(tails): tails.append(c); tails_idx.append(i)
    else: tails[j] = c; tails_idx[j] = i
keep, i = [], tails_idx[-1]
while i != -1: keep.append(i); i = prev[i]
keep.reverse()
dropped = [anchors[i]["label"] for i in range(len(anchors)) if i not in set(keep)]
anchors = [anchors[i] for i in keep]
p("dropped for chapter-order violation:", len(dropped), dropped[:25])
p("anchors kept:", len(anchors))
assert all(anchors[i]["ch"] <= anchors[i+1]["ch"] for i in range(len(anchors)-1))

bs  = [a["page_b"] for a in anchors]
ap  = [a["page_a_pdf"] for a in anchors]
def b_to_a(pb):
    j = bisect.bisect_left(bs, pb)
    if j == 0: return ap[0]
    if j >= len(bs): return ap[-1]
    b0, b1, a0, a1 = bs[j-1], bs[j], ap[j-1], ap[j]
    return a0 if b1 == b0 else int(round(a0 + (pb-b0)/(b1-b0)*(a1-a0)))

errs = []
for k in range(1, len(anchors)-1):
    b0, b1 = anchors[k-1]["page_b"], anchors[k+1]["page_b"]
    a0, a1 = anchors[k-1]["page_a_pdf"], anchors[k+1]["page_a_pdf"]
    if b1 == b0: continue
    errs.append(abs(a0 + (anchors[k]["page_b"]-b0)/(b1-b0)*(a1-a0) - anchors[k]["page_a_pdf"]))
errs.sort()
p("leave-one-out error after filtering: median %.2f p90 %.2f p99 %.2f max %.2f"
  % (errs[len(errs)//2], errs[int(len(errs)*.9)], errs[int(len(errs)*.99)], errs[-1]))

# ---- independent check: do the section headings land where the map says? ----
toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
secs = [r for r in toc["entries"] if r["kind"] == "section"]
p("")
p("numbered sections to check:", len(secs))

doc = fitz.open(A_PDF)
def norm(s):
    s = s.lower()
    s = s.replace("1","l").replace("0","o").replace("5","s").replace("8","b")  # common OCR swaps
    return re.sub(r"[^a-z]", "", s)
pages_norm = {}
def pg(i):
    if i not in pages_norm:
        pages_norm[i] = norm(doc[i-1].get_text()) if 1 <= i <= doc.page_count else ""
    return pages_norm[i]

WINDOW = 3
found_at, misses = [], []
for r in secs:
    pred = b_to_a(r["page_b"])
    # heading text without the "3.1" number prefix; keep it long enough to be unique
    title = re.sub(r"^\d+\.\d+\s*", "", r["title"])
    key = norm(title)[:40]
    if len(key) < 12:
        continue
    hit = None
    for d in sorted(range(-WINDOW, WINDOW+1), key=abs):
        t = pg(pred + d)
        if key in t:
            hit = d; break
        # OCR-tolerant: best fuzzy window
        if len(t) > 100:
            sm = difflib.SequenceMatcher(None, key, t)
            m = sm.find_longest_match(0, len(key), 0, len(t))
            if m.size >= max(12, int(len(key)*0.75)):
                hit = d; break
    if hit is None:
        misses.append((r["section"], title[:50], pred, pred + A_OFFSET))
    else:
        found_at.append(hit)

n = len(found_at) + len(misses)
p("checked: %d   located in A within +-%d pages: %d (%.0f%%)   not located: %d"
  % (n, WINDOW, len(found_at), 100*len(found_at)/n, len(misses)))
dist = {}
for d in found_at: dist[d] = dist.get(d, 0) + 1
p("offset of the true page from the predicted page:",
  json.dumps({str(k): dist[k] for k in sorted(dist)}))
p("exact hits: %.0f%%   within +-1: %.0f%%"
  % (100*dist.get(0,0)/n, 100*sum(dist.get(d,0) for d in (-1,0,1))/n))
p("")
p("sections NOT located (heading text may be OCR-mangled in A, or split across a page break):")
for s in misses[:40]:
    p("   %-6s %-52s pred A pdf %d / printed %d" % s)

# rewrite the map with the filtered anchors
for r in toc["entries"]:
    a, ae = b_to_a(r["page_b"]), b_to_a(r["page_b_end"])
    r["page_a_pdf"], r["page_a_print"] = a, a + A_OFFSET
    r["page_a_pdf_end"], r["page_a_print_end"] = ae, ae + A_OFFSET
for k, v in toc["chapters"].items():
    a, ae = b_to_a(v["page_b"]), b_to_a(v["page_b_end"])
    v["page_a_pdf"], v["page_a_print"] = a, a + A_OFFSET
    v["page_a_pdf_end"], v["page_a_print_end"] = ae, ae + A_OFFSET
json.dump(toc, io.open(os.path.join(OUT, "lehninger_B_toc.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
json.dump({"anchors": anchors, "a_offset": A_OFFSET},
          io.open(os.path.join(OUT, "lehninger_AB_anchors.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
with io.open(os.path.join(OUT, "lehninger_toc.tsv"), "w", encoding="utf-8") as f:
    cols = ("level","kind","chapter_num","section","title","page_a_print","page_a_print_end",
            "page_a_pdf","page_b","page_b_end")
    f.write("\t".join(cols) + "\n")
    for r in toc["entries"]:
        f.write("\t".join("" if r.get(c) is None else str(r[c]) for c in cols) + "\n")
p("")
p("OK: map rewritten with", len(anchors), "anchors")
log.close(); doc.close()
print("done")
