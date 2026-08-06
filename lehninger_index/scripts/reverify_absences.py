# URGENT re-verification: locate.py's substring search missed real content because B's text
# layer uses Unicode ligatures (ff/fi/fl/ffi/ffl as single glyphs: U+FB00-FB04). "coefficient"
# in the PDF is literally "coeﬀicient" (U+FB00 + icient), which a plain "coefficient" substring
# search never matches. Found while reading B p.369-370 for the tryptophan card: Lehninger DOES
# have a full boxed section "METHODS: Absorption of Light by Molecules: The Lambert-Beer Law"
# (Box 3-1, right after the Trp 280nm passage) -- directly contradicting the "0 hits" claim
# committed to HANDOFF_LEHNINGER.md section 6 multiple times today.
#
# Also: I searched "Beer-Lambert" but the book writes "Lambert-Beer" (reversed order) -- a
# second, independent bug in the same claim.
#
# This script normalizes ligatures and re-checks every "absent" claim made today.
import io, os, pickle, re

OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
B_TEXT = pickle.load(open(os.path.join(OUT, "_B_text.pkl"), "rb"))

LIG = {"\ufb00": "ff", "\ufb01": "fi", "\ufb02": "fl", "\ufb03": "ffi", "\ufb04": "ffl"}
def normalize(t):
    for k, v in LIG.items():
        t = t.replace(k, v)
    return t

log = io.open(os.path.join(OUT, "_reverify_report.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

NORM = [normalize(t) for t in B_TEXT]

p("=== ligature scope: how many of B's 4893 pages are affected ===")
lig_pages = sum(1 for t in B_TEXT if any(c in t for c in LIG))
p("pages containing at least one ligature glyph: %d of %d (%.0f%%)"
  % (lig_pages, len(B_TEXT), 100 * lig_pages / len(B_TEXT)))
p("-> every substring search run before this fix was silently blind on any word")
p("   containing fi/fl/ff/ffi/ffl on an affected page. That is not a rare edge case.")

CLAIMS = [
    ("Beer-Lambert", "Beer-Lambert law"),
    ("Lambert-Beer", "Lambert-Beer law (the book's actual word order)"),
    ("Beer's law", "Beer's law"),
    ("molar extinction coefficient", "molar extinction coefficient"),
    ("molar absorption coefficient", "molar absorption coefficient"),
    ("ninhydrin", "ninhydrin reaction"),
    ("Merrifield", "Merrifield solid-phase synthesis"),
    ("sedimentation coefficient", "sedimentation coefficient"),
    ("colloid", "colloid"),
    ("Tyndall", "Tyndall effect"),
    ("Svedberg", "Svedberg"),
    ("creationism", "creationism"),
    ("intelligent design", "intelligent design"),
]

p("")
p("=== every 'absent' claim re-checked against the NORMALIZED text ===")
p(f'{"term":<32}{"OLD (buggy)":>14}{"NEW (fixed)":>14}   first hit')
for term, label in CLAIMS:
    old = sum(1 for t in B_TEXT if term.lower() in t.lower())
    new_pages = [i + 1 for i, t in enumerate(NORM) if term.lower() in t.lower()]
    new = len(new_pages)
    flag = "  <-- WAS WRONG" if old == 0 and new > 0 else ""
    where = f"B p.{new_pages[0]}" if new_pages else ""
    p(f'{label:<32}{old:>14}{new:>14}   {where}{flag}')

p("")
p("=== full context for the ones that flipped ===")
for term, label in CLAIMS:
    new_pages = [i + 1 for i, t in enumerate(NORM) if term.lower() in t.lower()]
    old = sum(1 for t in B_TEXT if term.lower() in t.lower())
    if old == 0 and new_pages:
        pb = new_pages[0]
        p(f'\n--- "{label}" first appears B p.{pb} ---')
        t = normalize(B_TEXT[pb - 1])
        idx = t.lower().find(term.lower())
        p("   " + " ".join(t[max(0, idx - 150):idx + 250].split()))
log.close()
print("done")
