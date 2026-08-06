# How much did the ligature bug actually corrupt? step3_match.py (the auto matcher that
# cross-checked master_map.tsv) searched B_TEXT.lower() for every Czech glossary term without
# de-ligaturing. Any term containing a substring that commonly ligatures (ffi/ffl/ff/fi/fl)
# would have undercounted its hits on ~66% of pages. Quantify before deciding whether to redo
# the cross-check.
import io, os, json, pickle, re

OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
log = io.open(os.path.join(OUT, "_ligature_impact.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

cz = json.load(io.open(os.path.join(OUT, "cz_skeleton.json"), encoding="utf-8"))
terms = sorted({re.sub(r"\([^)]*\)", " ", t).strip().lower()
               for s in cz for t in s["terms"]})
terms = [re.sub(r"[^a-z0-9\- ]", " ", t) for t in terms]
terms = [" ".join(t.split()) for t in terms if len(" ".join(t.split())) >= 6]

RISK = re.compile(r"ff|fi|fl")   # any substring that COULD have been ligatured
at_risk = [t for t in terms if RISK.search(t)]
p("glossary terms used for matching: %d total, %d contain ff/fi/fl (%.0f%%)"
  % (len(terms), len(at_risk), 100 * len(at_risk) / len(terms)))
p("")
p("sample of at-risk terms:")
for t in at_risk[:40]:
    p("   " + t)

# Now actually re-run the hit count for every at-risk term, buggy vs fixed, and see how many
# terms' hit COUNT changes at all (not just zero-vs-nonzero).
B_RAW = pickle.load(open(os.path.join(OUT, "_B_text.pkl"), "rb"))
# _B_text.pkl was just overwritten by locate.py's fixed loader on the last run -- rebuild the
# buggy version fresh here for a fair before/after, from the PDF, so this comparison is honest.
import fitz
B_PDF = r"C:\Users\Admin\Downloads\lehninger书\LehningerPrinciplesofBiochemistry8thedDavidLNel.pdf"
d = fitz.open(B_PDF)
B_BUGGY = [" ".join(d[i].get_text().split()).lower() for i in range(d.page_count)]
d.close()
LIG = {"\ufb00": "ff", "\ufb01": "fi", "\ufb02": "fl", "\ufb03": "ffi", "\ufb04": "ffl"}
def delig(t):
    for k, v in LIG.items(): t = t.replace(k, v)
    return t
B_FIXED = [delig(t) for t in B_BUGGY]

changed, unchanged = [], 0
for t in at_risk:
    old = sum(1 for pg in B_BUGGY if t in pg)
    new = sum(1 for pg in B_FIXED if t in pg)
    if new != old:
        changed.append((t, old, new))
    else:
        unchanged += 1
p("")
p("of the %d at-risk terms: %d have a DIFFERENT hit count after the fix, %d unchanged"
  % (len(at_risk), len(changed), unchanged))
p("")
p("terms whose hit count changed (old -> new):")
for t, old, new in sorted(changed, key=lambda x: -(x[2]-x[1]))[:40]:
    p(f'   {old:>4} -> {new:>4}   {t}')
log.close()
print("done")
