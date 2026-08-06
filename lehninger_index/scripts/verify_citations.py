# Verify every A-page citation in the app data against what PDF A actually says on that page.
#
# Why this exists: the tryptophan card was written from the section-12 dossier, and a spot
# check of six citations found THREE wrong -- FIGURE 3-6 cited at p.73 when it is on p.75,
# FIGURE 11-15 at p.396-397 when it is on p.375-376 (off by 21 pages), and the
# "more polar than phenylalanine" sentence at p.72-73 when it is on p.75. The quotes
# themselves were accurate; only the page numbers were wrong. A wrong page number is not a
# harmless typo here: the user is meant to open the paper book at that page, and section 15
# plans to CROP FIGURES from these pages, where a wrong number silently crops the wrong
# content.
#
# Method: for each `src:` citation carrying an A page or range, pull a distinctive phrase out
# of the accompanying `en` text and check it appears within the cited range. Reports three
# outcomes, and the third is the one that matters:
#   OK      - phrase found inside the cited range
#   ELSEWHERE - phrase found in A, but NOT in the cited range (prints where it really is)
#   UNCHECKED - no phrase distinctive enough to search on; needs a human
#
# Usage:  python lehninger_index/scripts/verify_citations.py
# Output: lehninger_index/_citation_audit.txt
import io, os, re, sys
import fitz
import esprima

ROOT = r"C:\Users\Admin\Downloads\bio-state-exam"
OUT = os.path.join(ROOT, "lehninger_index")
A_PDF = r"C:\Users\Admin\Downloads\lehninger书\LehningerPrinciplesofBiochemistry8th(DavidL.Nelson,MichaelCox) (1).pdf"
A_OFFSET = 36          # printed page = pdf page - 36; verified constant on 23 sample pages
SEARCH_PAD = 40        # how far either side of a cited range to look before giving up

log = io.open(os.path.join(OUT, "_citation_audit.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

# ---------------------------------------------------------------- A's text, de-ligatured
# Same trap as locate.py: A is OCR of a scan and B uses real ligature glyphs. A's OCR also
# splits words across line breaks with hyphens ("sig- nificantly"), so strip those too.
_LIG = {"ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl"}
_FT = re.compile(r"(?<=[A-Za-z])[×ƞ]")

def norm(t):
    for k, v in _LIG.items():
        t = t.replace(k, v)
    t = _FT.sub("ft", t)
    # A is OCR of a scan and Greek letters do not survive it: beta comes through as "/3",
    # "f3", ",B" or "13", alpha as "a". Fold the Greek in the app text and the OCR
    # mangling in A's text onto the same token so a quote containing beta can match.
    # Without this, "in β strands of membrane proteins" -- which is verbatim on p.375 --
    # reported as not-found anywhere in the book.
    t = re.sub(r"/3|f3|,B|\bl3\b", "β", t)
    t = t.replace("β", " beta ").replace("α", " alpha ")
    t = " ".join(t.split())
    t = re.sub(r"(\w)- (\w)", r"\1\2", t)      # rejoin OCR line-break hyphenation
    return t.lower()

doc = fitz.open(A_PDF)
_cache = {}
def page_text(printed):
    if printed in _cache:
        return _cache[printed]
    i = printed + A_OFFSET
    _cache[printed] = norm(doc[i - 1].get_text()) if 1 <= i <= doc.page_count else ""
    return _cache[printed]

# ---------------------------------------------------------------- parse the data files
def lit(n):
    t = n.type
    if t == "Literal": return n.value
    if t == "ArrayExpression": return [lit(e) for e in n.elements if e is not None]
    if t == "ObjectExpression":
        d = {}
        for pr in n.properties:
            k = pr.key.name if pr.key.type == "Identifier" else pr.key.value
            d[k] = lit(pr.value)
        return d
    if t == "UnaryExpression" and n.operator == "-": return -lit(n.argument)
    if t == "TemplateLiteral" and not n.expressions:
        return "".join(q.value.cooked for q in n.quasis)
    return None

def nodes(src):
    out = []
    def walk(n):
        if isinstance(n, list):
            for x in n: walk(x)
            return
        if not hasattr(n, "type"): return
        if n.type == "ObjectExpression":
            keys = {pr.key.name if pr.key.type == "Identifier" else pr.key.value
                    for pr in n.properties}
            if {"id", "chapter", "section"} <= keys or {"id", "kind", "topicKey"} <= keys:
                out.append(lit(n)); return
        for k in dir(n):
            if k.startswith("_") or k == "type": continue
            try: v = getattr(n, k)
            except Exception: continue
            if isinstance(v, list) or hasattr(v, "type"): walk(v)
    walk(esprima.parseScript(src).body)
    return out

# ---------------------------------------------------------------- citations to check
# "A p.75", "A p.375-376", "A pp.91-95" -> (lo, hi)
CITE = re.compile(r"A\s+pp?\.\s*(\d{1,4})(?:\s*[-–]\s*(\d{1,4}))?")

def cited_range(src):
    m = CITE.search(src or "")
    if not m: return None
    lo = int(m.group(1))
    hi = int(m.group(2)) if m.group(2) else lo
    return (lo, hi)

# A phrase worth searching on: a quoted span if there is one, else the longest run of
# ordinary words. Anything shorter than 4 words is too weak to prove a page.
QUOTED = re.compile(r"['\u2018\u2019\u201c\u201d]([^'\u2018\u2019\u201c\u201d]{18,140})['\u2018\u2019\u201c\u201d]")
FIGREF = re.compile(r"\b(FIGURE|Fig\.|TABLE|Tab\.|Box)\s*(\d{1,2}[-–]\d{1,3})", re.I)

def probes(text, src):
    out = []
    # a figure/table/box label named in the citation itself is the strongest probe
    m = FIGREF.search(src or "")
    if m:
        kind = m.group(1).lower().rstrip('.')
        kind = {"fig": "figure", "tab": "table"}.get(kind, kind)
        out.append((kind + " " + m.group(2).replace("–", "-"), "label"))
    for q in QUOTED.findall(text or ""):
        q = norm(q)
        # A quote written with an ellipsis is not contiguous in the book, so a substring
        # test can never match it. Both of the first run's "probe not found" results were
        # this, and both citations turned out to be CORRECT -- i.e. the checker was
        # reporting its own limitation as if it were a finding. Split on the ellipsis and
        # require every fragment to be on the page instead.
        frags = [f.strip() for f in re.split(r"\.{3}|…", q) if len(f.strip().split()) >= 4]
        if len(frags) > 1:
            out.append((tuple(frags), "quote(split)"))
        elif len(q.split()) >= 4:
            out.append((q, "quote"))
    return out

def find_in(phrase, lo, hi):
    if isinstance(phrase, tuple):
        return [pg for pg in range(lo, hi + 1)
                if all(f in page_text(pg) for f in phrase)]
    return [pg for pg in range(lo, hi + 1) if phrase in page_text(pg)]

# ---------------------------------------------------------------- run
p("Citation audit: every `A p.N` in the app data, checked against what that page of PDF A")
p("actually contains. printed page = pdf page - %d." % A_OFFSET)
p("A's text layer is OCR, so it is de-ligatured and de-hyphenated before matching.")
p("")

files = []
for app in ("biochemie_pro",):
    html = io.open(os.path.join(ROOT, app, "index.html"), encoding="utf-8").read()
    for f in re.findall(r'<script src="data/([^"]+\.js)"', html):
        files.append((app, f))

# Citations come in two shapes and BOTH must be walked. An entity card puts them in a
# dedicated `chains[].steps[].src` field; a section node writes them inline in its own prose
# ("...the fragmentation table (Table 3-6, A p.92) is worth knowing..."). Until 2026-08-06
# this loop read only the first shape, so every citation in `L-3-4-1` -- the only Lehninger
# node that exists -- was silently unchecked while the report said it had found them all.
# A checker that quietly covers half the data is worse than no checker, because the clean
# run gets quoted as evidence.

def walk_strings(obj, path=""):
    """Every string in a node, with a dotted path, so a finding can name its field."""
    if isinstance(obj, str):
        yield path, obj
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            for r in walk_strings(v, "%s[%d]" % (path, i)): yield r
    elif isinstance(obj, dict):
        for k, v in obj.items():
            for r in walk_strings(v, (path + "." + k) if path else k): yield r

# How much text around an inline "A p.92" counts as its source context. A figure or table
# label is what makes a citation checkable, and it sits just BEFORE the page number
# ("Fig. 3-28, A p.94"), so the window has to reach back far enough to catch it.
CTX_BACK, CTX_FWD = 90, 15

rows = []
for app, f in files:
    for n in nodes(io.open(os.path.join(ROOT, app, "data", f), encoding="utf-8").read()):
        for ch in (n.get("chains") or []):
            for st in (ch.get("steps") or []):
                if st.get("src"):
                    rows.append((n["id"], f, st["src"], st.get("en") or "", "chains.src"))
        # inline prose. The dedupe exists because an en/cn pair can carry the SAME citation
        # twice ("...(Fig. 3-28, A p.94)" in `en`, "...(Fig. 3-28，A 第 94 页)" in `cn`) and
        # only one of them needs checking.
        #
        # 2026-08-06: the key used to be `path.split("[")[0]`, which throws the index away, so
        # every element of an array field collapsed into one bucket -- `points[1]` and
        # `points[4]` both keyed as "points". Any node citing the same page from two different
        # points therefore had the second one SILENTLY DROPPED, never checked, and never
        # reported as skipped. Found writing `L-1-3-1`, which cites A p.24 twice (Worked
        # Example 1-1 and Fig. 1-26), A p.25 twice and A p.26 twice: 9 citations in the file,
        # 6 rows in the audit, no warning. This is the same failure shape as the `chains`-only
        # bug in a0a825c and section 16a's rule applies unchanged -- a checker that quietly
        # covers part of its input is worse than no checker, because the clean run gets quoted
        # as evidence. Keeping the index (`points[4]`) while still dropping the final field
        # name preserves the original en/cn intent exactly and stops the over-collapse.
        seen = set()
        for path, s in walk_strings(n):
            if path.startswith("chains"): continue
            for m in CITE.finditer(s):
                ctx = s[max(0, m.start() - CTX_BACK): m.end() + CTX_FWD]
                key = (m.group(0), path.rsplit(".", 1)[0])
                if key in seen: continue
                seen.add(key)
                rows.append((n["id"], f, ctx.strip(), s, path))

p("found %d citations -- %d in a `src` field, %d written inline in prose"
  % (len(rows), sum(1 for r in rows if r[4] == "chains.src"),
     sum(1 for r in rows if r[4] != "chains.src")))
p("")

n_ok = n_else = n_unchecked = 0
for nid, f, src, text, path in rows:
    rng = cited_range(src)
    # An inline citation's `src` is a window of surrounding prose, too long to print. Show
    # the citation and the field it sits in -- that is what someone has to go and edit.
    m = CITE.search(src or "")
    label = ("%s  %s" % (m.group(0), path)) if (m and path != "chains.src") else src
    if not rng:
        p("SKIP      %-14s %-28s (no A page in citation)" % (nid, label)); continue
    lo, hi = rng
    pr = probes(text, src)
    if not pr:
        n_unchecked += 1
        p("UNCHECKED %-14s %-28s no searchable phrase -- verify by hand" % (nid, label))
        continue
    verdict = None
    for phrase, kind in pr:
        inside = find_in(phrase, lo, hi)
        if inside:
            verdict = ("OK", phrase, kind, inside); break
        wide = find_in(phrase, max(1, lo - SEARCH_PAD), hi + SEARCH_PAD)
        if wide:
            verdict = ("ELSEWHERE", phrase, kind, wide); break
    if verdict is None:
        n_unchecked += 1
        p("UNCHECKED %-14s %-28s probe not found even +-%d pages: %r"
          % (nid, label, SEARCH_PAD, str(pr[0][0])[:60]))
        continue
    tag, phrase, kind, where = verdict
    if tag == "OK":
        n_ok += 1
        p("OK        %-14s %-28s %s found on %s" % (nid, label, kind, where))
    else:
        n_else += 1
        p("ELSEWHERE %-14s %-28s %s is actually on %s  <-- FIX THE CITATION"
          % (nid, label, kind, where))
        p("             probe: %r" % str(phrase)[:80])

p("")
p("OK %d | ELSEWHERE %d | UNCHECKED %d" % (n_ok, n_else, n_unchecked))
if n_else:
    p("")
    p("ELSEWHERE means the quote is real but the page number is wrong. Fix the citation,")
    p("not the quote. Three such errors were found the first time this ran (2026-08-06).")
doc.close()
log.close()
print("done: %d ok, %d elsewhere, %d unchecked" % (n_ok, n_else, n_unchecked))
