# Step 1: export B's outline as a structured TOC.
#
# Measured structure of B's 879-entry outline (NOT what HANDOFF_LEHNINGER.md assumed):
#   level 1 = 11 entries: "About this Book", "Chapter 1 ...", the three Parts, and back matter
#   level 2 = 45 entries: front-matter pieces, chapter 1's own sections, and Chapters 2..28
#   level 3 = 174, level 4 = 649
# So "chapter" lives at level 1 for ch1 and level 2 for ch2-28. Normalise that here.
import io, os, json, re
import fitz

B = r"C:\Users\Admin\Downloads\lehninger书\LehningerPrinciplesofBiochemistry8thedDavidLNel.pdf"
OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
os.makedirs(OUT, exist_ok=True)

doc = fitz.open(B)
toc = [[l, " ".join(t.split()), p] for l, t, p in doc.get_toc(simple=True)]

log = io.open(os.path.join(OUT, "_step1_report.txt"), "w", encoding="utf-8")
def p(*a):
    log.write(" ".join(str(x) for x in a) + "\n")

p("source: B =", os.path.basename(B))
p("B pages:", doc.page_count, " outline entries:", len(toc))
lv = {}
for l, t, pg in toc:
    lv[l] = lv.get(l, 0) + 1
p("levels:", json.dumps(lv, sort_keys=True))
p("non-monotonic page jumps:",
  sum(1 for i in range(1, len(toc)) if toc[i][2] < toc[i-1][2]))

CH_RE = re.compile(r"^Chapter (\d{1,2})\b\s*(.*)$")
SEC_RE = re.compile(r"^(\d{1,2})\.(\d{1,2})\b\s*(.*)$")

# --- pass 1: locate every chapter start, at whatever level it sits ---
ch_starts = []   # (idx, num, title, page)
for i, (level, title, page) in enumerate(toc):
    m = CH_RE.match(title)
    if m:
        ch_starts.append((i, int(m.group(1)), m.group(2).strip(), page))
assert [c[1] for c in ch_starts] == list(range(1, 29)), [c[1] for c in ch_starts]

# a chapter runs until the next chapter starts; chapter 28 until the first back-matter entry
back_matter_pages = [pg for l, t, pg in toc
                     if l == 1 and t.startswith(("Note", "Abbreviated Solutions"))]
ch_range = {}
for k, (i, num, title, page) in enumerate(ch_starts):
    end = ch_starts[k+1][3] - 1 if k + 1 < len(ch_starts) else min(back_matter_pages) - 1
    ch_range[num] = (title, page, end)

# --- pass 2: flatten every entry, attributed to its chapter + numbered section ---
rows = []
cur_ch = None
cur_sec = None
for i, (level, title, page) in enumerate(toc):
    m = CH_RE.match(title)
    if m:
        cur_ch, cur_sec = int(m.group(1)), None
        kind = "chapter"
    else:
        s = SEC_RE.match(title)
        if s and cur_ch is not None and int(s.group(1)) == cur_ch:
            cur_sec, kind = f"{s.group(1)}.{s.group(2)}", "section"
        else:
            kind = "subheading" if cur_ch is not None else "frontmatter"
    # end page = next entry at the same or shallower level, minus 1
    end = None
    for j in range(i + 1, len(toc)):
        if toc[j][0] <= level:
            end = toc[j][2] - 1
            break
    if end is None:
        end = doc.page_count
    if end < page:
        end = page
    rows.append({
        "idx": i, "level": level, "kind": kind,
        "chapter_num": cur_ch if kind != "frontmatter" else None,
        "chapter_title": ch_range[cur_ch][0] if cur_ch else None,
        "section": cur_sec if kind != "chapter" else None,
        "title": title,
        "page_b": page, "page_b_end": end, "span_b": end - page + 1,
    })

with io.open(os.path.join(OUT, "lehninger_B_toc.json"), "w", encoding="utf-8") as f:
    json.dump({"chapters": {str(k): {"title": v[0], "page_b": v[1], "page_b_end": v[2]}
                            for k, v in ch_range.items()},
               "entries": rows}, f, ensure_ascii=False, indent=1)

with io.open(os.path.join(OUT, "lehninger_B_toc.tsv"), "w", encoding="utf-8") as f:
    cols = ("idx","level","kind","chapter_num","section","title","page_b","page_b_end","span_b")
    f.write("\t".join(cols) + "\n")
    for r in rows:
        f.write("\t".join("" if r[c] is None else str(r[c]) for c in cols) + "\n")

p("")
p("=== 28 chapters, as located in B ===")
p(f'{"ch":>3}  {"page_b":>10}  {"span":>5} {"sec":>4} {"sub":>4}  title')
tot = 0
for n in range(1, 29):
    t, a, b = ch_range[n]
    nsec = sum(1 for r in rows if r["chapter_num"] == n and r["kind"] == "section")
    nsub = sum(1 for r in rows if r["chapter_num"] == n and r["kind"] == "subheading")
    tot += b - a + 1
    p(f'{n:>3}  {a:>5}-{b:<5} {b-a+1:>5} {nsec:>4} {nsub:>4}  {t}')
p(f'    total B pages inside chapters: {tot}')

nosec = [n for n in range(1, 29)
         if not any(r["chapter_num"] == n and r["kind"] == "section" for r in rows)]
p("chapters with zero numbered sections:", nosec)
unattributed = [r for r in rows if r["kind"] == "subheading" and r["section"] is None]
p("subheadings not under any numbered section:", len(unattributed))

assert len(rows) == len(toc)
assert len(ch_range) == 28
p("")
p("OK: wrote lehninger_B_toc.json / .tsv,", len(rows), "entries,", len(ch_range), "chapters")
log.close()
doc.close()
print("done")
