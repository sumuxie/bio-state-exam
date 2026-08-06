# Probe A: text layer, printed page numbers, and the known A<->B bridge.
import io, os, re, time
import fitz

A = r"C:\Users\Admin\Downloads\lehninger书\LehningerPrinciplesofBiochemistry8th(DavidL.Nelson,MichaelCox) (1).pdf"
dst = r"C:\Users\Admin\AppData\Local\Temp\claude\c--Users-Admin-Documents-trae-projects-recombinants-trae-independant\fdb9697a-89dd-431c-a6d3-98f7db4acb28\scratchpad\probe_A.txt"
out = io.open(dst, "w", encoding="utf-8")
def p(*a): out.write(" ".join(str(x) for x in a) + "\n")

t0 = time.time()
doc = fitz.open(A)
p("open:", round(time.time()-t0, 1), "s  pages:", doc.page_count)

t0 = time.time()
texts = [doc[i].get_text() for i in range(doc.page_count)]
p("full text extract:", round(time.time()-t0, 1), "s")
lens = sorted(len(t) for t in texts)
p("chars/page: median", lens[len(lens)//2], " min", lens[0], " max", lens[-1])
p("pages with <200 chars:", sum(1 for t in texts if len(t) < 200))

# printed page number: look for a bare integer on its own line near the top or bottom
def printed_num(t):
    lines = [l.strip() for l in t.splitlines() if l.strip()]
    cands = []
    for l in lines[:3] + lines[-3:]:
        m = re.fullmatch(r"(\d{1,4})", l)
        if m:
            cands.append(int(m.group(1)))
    return cands

hits = 0
offsets = {}
for i, t in enumerate(texts):
    for n in printed_num(t):
        if 1 <= n <= 1300:
            offsets[n - (i + 1)] = offsets.get(n - (i + 1), 0) + 1
            hits += 1
            break
p("pages where a printed number was found:", hits)
p("top printed_page - pdf_index offsets:",
  sorted(offsets.items(), key=lambda kv: -kv[1])[:6])

# the documented bridge: FIGURE 19-16 -> A p.708
for i, t in enumerate(texts):
    if "FIGURE 19-16" in t:
        p("FIGURE 19-16 found at A pdf page", i+1, " printed nums on that page:", printed_num(t))

# what does A pdf page 708 look like
for probe in (708, 707, 709):
    t = texts[probe-1]
    p(f"--- A pdf page {probe}: printed {printed_num(t)}, {len(t)} chars, head: "
      + " ".join(t.split())[:120])
out.close()
doc.close()
print("done")
