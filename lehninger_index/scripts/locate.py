# Reusable locator: given a phrase, report which Lehninger section it lives in, with the
# page to open in A (printed) and in B (pdf index). Uses B's clean text layer for the search
# and the step-2 anchor map for the A page. Density-based: the section with the most hits.
import io, os, sys, re, json, bisect, pickle
import fitz

LEH = r"C:\Users\Admin\Downloads\lehninger书"
B_PDF = os.path.join(LEH, r"LehningerPrinciplesofBiochemistry8thedDavidLNel.pdf")
OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
CACHE = os.path.join(OUT, "_B_text.pkl")

if os.path.exists(CACHE):
    B_TEXT = pickle.load(open(CACHE, "rb"))
else:
    d = fitz.open(B_PDF)
    B_TEXT = [" ".join(d[i].get_text().split()) for i in range(d.page_count)]
    d.close()
    pickle.dump(B_TEXT, open(CACHE, "wb"))

toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
SECS = [r for r in toc["entries"] if r["kind"] == "section"]
SECS.sort(key=lambda r: r["page_b"])
SEC_START = [r["page_b"] for r in SECS]

LAST_BODY_PAGE = max(r["page_b_end"] for r in SECS)

def section_of(pb):
    # a section must actually CONTAIN the page. Without the upper bound every page after
    # section 28.3 -- Solutions, Glossary and a 348-page Index -- is attributed to 28.3,
    # which made every single query look like it had a big hit there.
    j = bisect.bisect_right(SEC_START, pb) - 1
    if j < 0:
        return None
    return SECS[j] if pb <= SECS[j]["page_b_end"] else None

def find(phrase, max_report=6):
    pat = re.compile(re.escape(phrase), re.I)
    hits = [(i + 1, len(pat.findall(t))) for i, t in enumerate(B_TEXT) if pat.search(t)]
    total = sum(n for _, n in hits)
    by_sec = {}
    for pb, n in hits:
        s = section_of(pb)
        k = s["section"] if s else "(front/back matter)"
        e = by_sec.setdefault(k, {"n": 0, "pages": [], "title": s["title"] if s else "",
                                  "a0": s["page_a_print"] if s else None,
                                  "a1": s["page_a_print_end"] if s else None})
        e["n"] += n
        e["pages"].append(pb)
    ranked = sorted(by_sec.items(), key=lambda kv: -kv[1]["n"])
    return {"phrase": phrase, "pages_hit": len(hits), "occurrences": total,
            "sections": ranked[:max_report]}

def report(phrase, log):
    r = find(phrase)
    log.write(f'\n### "{phrase}"  -- {r["pages_hit"]} pages, {r["occurrences"]} occurrences\n')
    if not r["sections"]:
        log.write("    NOT FOUND anywhere in B\n")
        return r
    for sec, e in r["sections"]:
        a = f'A pp.{e["a0"]}-{e["a1"]}' if e["a0"] else ""
        log.write(f'    {e["n"]:>4} hits  {sec or "-":<7} {e["title"][:58]:<58} {a}  '
                  f'B first hit p.{min(e["pages"])}\n')
    return r

if __name__ == "__main__":
    QUERIES = [
        # things the mapping decision actually hangs on
        "glyoxylate cycle", "nitrogen fixation", "nitrogenase",
        "heme biosynthesis", "porphyrin", "urea cycle",
        "lac operon", "trp operon", "Michaelis-Menten", "allosteric",
        "mutarotation", "Haworth", "glycosaminoglycan", "peptidoglycan",
        "Ramachandran", "hydrophobic core", "280 nm", "260 nm",
        "isoelectric point", "Cori cycle", "ketone bodies", "eicosanoid",
        "terpene", "isoprenoid", "phospholipase", "lipid bilayer",
        "facilitated diffusion", "second messenger", "adenylyl cyclase",
        "photorespiration", "Hatch", "C4 plants", "secondary metabolite",
        # documented absences -- re-confirm rather than trust the note
        "Beer-Lambert", "Beer's law", "molar extinction coefficient",
        "molar absorption coefficient",
    ]
    log = io.open(os.path.join(OUT, "_step3b_locate.txt"), "w", encoding="utf-8")
    log.write("Locating exam topics in Lehninger 8 (search in B's text layer, A page via the "
              "step-2 anchor map).\nSection = the numbered section the hit page falls inside.\n")
    for q in QUERIES:
        report(q, log)
    log.close()
    print("done")
