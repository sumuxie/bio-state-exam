# How much of each node is actually under citation? verify_citations.py answers "is every
# citation right"; this answers the question that sits UNDER it -- "is there a citation to be
# right about, and does it speak for the whole node or for one page of eleven".
#
# Why it exists: L-13-3-1 was written with ZERO `A p.N` citations. verify_citations therefore
# had nothing to check, never emitted a row for it, and the run still ended
# "OK 809 | ELSEWHERE 0 | UNCHECKED 0". The clean total was true and also said nothing at all
# about that node. That is the same trap verify_citations' own comments keep documenting --
# "a checker that quietly covers part of its input is worse than no checker, because the clean
# run gets quoted as evidence" -- except the coverage loss was in the DATA, not the checker,
# so no amount of fixing the checker could have surfaced it.
#
# Fixing that one node does not fix the class. A node with a single citation is still green,
# and still says nothing about the other pages it claims. So this script measures presence and
# spread, never correctness:
#   SILENT  - the node carries no citation at all. verify_citations cannot see it. This is the
#             L-13-3-1 failure and it is the one that matters.
#   THIN    - 1 or 2 citations standing in for a whole section.
#   Coverage - distinct printed pages cited, over the pages the node's own `pages:` field
#             claims. A node claiming eleven pages and citing one is 9% checked, not 100%.
#
# It deliberately does NOT open the PDF. Whether a citation is CORRECT is verify_citations'
# job and duplicating it here would create a second, drifting definition of the same thing.
# The node parser and the citation regex are imported from verify_citations for exactly that
# reason: "what is a node" and "what is a citation" stay defined in one place.
#
# Usage:  python lehninger_index/scripts/citation_coverage.py
# Output: lehninger_index/_citation_coverage.txt
import io, os, re, sys

ROOT = r"C:\Users\Admin\Downloads\bio-state-exam"
OUT = os.path.join(ROOT, "lehninger_index")

import esprima

# ---------------------------------------------------------------- shared with verify_citations
# Imported rather than re-implemented. verify_citations opens the 1,300-page PDF at import
# time, which this script has no use for, so the three definitions it needs are kept in step
# with it by hand and asserted against it below instead.
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

CITE = re.compile(r"A\s+pp?\.\s*(\d{1,4})(?:\s*[-\u2013]\s*(\d{1,4}))?")

# The three definitions above are copied from verify_citations.py. If that file's versions
# change and these do not, the two scripts silently start disagreeing about what they are
# counting -- and this one would report coverage for a set of nodes the checker no longer
# reads. Cheap guard: the citation regex is the one most likely to be edited, so assert the
# source text of the checker still contains it verbatim.
_vc = io.open(os.path.join(OUT, "scripts", "verify_citations.py"), encoding="utf-8").read()
assert CITE.pattern.replace("\\u2013", "\u2013") in _vc or CITE.pattern in _vc, (
    "CITE regex has drifted from verify_citations.py -- re-sync before trusting this report")

def walk_strings(obj, path=""):
    if isinstance(obj, str):
        yield path, obj
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            for r in walk_strings(v, "%s[%d]" % (path, i)): yield r
    elif isinstance(obj, dict):
        for k, v in obj.items():
            for r in walk_strings(v, (path + "." + k) if path else k): yield r

# ---------------------------------------------------------------- collect
# Same input the checker uses: whatever index.html actually loads. A data file present on disk
# but not referenced by index.html is dead to the app and dead to the checker, so counting it
# here would report coverage the user can never see.
html = io.open(os.path.join(ROOT, "biochemie_pro", "index.html"), encoding="utf-8").read()
files = re.findall(r'<script src="data/([^"]+\.js)"', html)

rows = []
for f in files:
    src = io.open(os.path.join(ROOT, "biochemie_pro", "data", f), encoding="utf-8").read()
    for n in nodes(src):
        cites, pages_cited, fields = 0, set(), {}
        for ch in (n.get("chains") or []):
            for st in (ch.get("steps") or []):
                for m in CITE.finditer(st.get("src") or ""):
                    cites += 1
                    fields["chains.src"] = fields.get("chains.src", 0) + 1
                    pages_cited.update(range(int(m.group(1)),
                                             int(m.group(2) or m.group(1)) + 1))
        singles = []          # single-page citations only -- see the outside-range section
        for path, s in walk_strings(n):
            if path.startswith("chains"): continue
            for m in CITE.finditer(s):
                cites += 1
                key = re.sub(r"\[\d+\]", "[]", path)
                fields[key] = fields.get(key, 0) + 1
                lo = int(m.group(1)); hi = int(m.group(2) or lo)
                pages_cited.update(range(lo, hi + 1))
                if lo == hi:
                    singles.append((lo, key))
        rows.append(dict(id=n.get("id"), file=f, book=n.get("book"), cites=cites,
                         pages=set(n.get("pages") or []), cited=pages_cited, fields=fields,
                         singles=singles,
                         apparatus="IN THE BOOK'S OWN WORDS" in src))

leh = [r for r in rows if r["book"] == "lehninger"]

# ---------------------------------------------------------------- report
log = io.open(os.path.join(OUT, "_citation_coverage.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

p("Citation COVERAGE, not correctness. verify_citations.py checks that every `A p.N` in the")
p("data points at a page that really says what the node claims. This checks whether a node")
p("carries a citation AT ALL, and how much of its own declared page range those citations")
p("speak for. A node with no citation is invisible to the checker and its silence is scored")
p("as a clean run -- that is what this exists to surface. See the header for the L-13-3-1 case.")
p("")
p("%d nodes parsed from %d data files; %d are book=lehninger and carry `A p.N` citations by"
  % (len(rows), len(files), len(leh)))
p("convention. The Czech layer does not cite A pages and is not scored here.")
p("")

silent = sorted([r for r in leh if r["cites"] == 0], key=lambda r: r["id"])
p("=" * 78)
p("SILENT NODES -- zero citations, invisible to verify_citations: %d" % len(silent))
p("=" * 78)
if not silent:
    p("  none. Every lehninger node carries at least one citation, so every one of them")
    p("  appears in _citation_audit.txt and a clean run there is a statement about all of them.")
else:
    for r in silent:
        p("  %-14s %-16s claims %d pages, cites none  <-- WRITE CITATIONS"
          % (r["id"], r["file"], len(r["pages"])))
p("")

thin = sorted([r for r in leh if 0 < r["cites"] <= 2], key=lambda r: (r["cites"], r["id"]))
p("=" * 78)
p("THIN NODES -- 1 or 2 citations standing in for a whole section: %d" % len(thin))
p("=" * 78)
p("Green, but green about one page. Not an error and not necessarily worth fixing -- a short")
p("node with one well-chosen quote is fine. Listed so the count is never mistaken for cover.")
for r in thin:
    p("  %-14s %-16s %d cite(s), %d/%d claimed pages, fields: %s"
      % (r["id"], r["file"], r["cites"], len(r["pages"] & r["cited"]), len(r["pages"]),
         ", ".join(sorted(r["fields"]))))
p("")

p("=" * 78)
p("PAGE COVERAGE -- distinct claimed pages carrying at least one citation")
p("=" * 78)
p("A node's `pages:` field is its own claim about what it read. This measures how much of")
p("that claim is anchored. Low is not wrong: a node may legitimately draw its argument from")
p("two pages of a ten-page section. It does mean the other eight are unverified prose.")
p("")
scored = [r for r in leh if r["pages"]]
for r in sorted(scored, key=lambda r: (len(r["pages"] & r["cited"]) / len(r["pages"]), r["id"])):
    hit, tot = len(r["pages"] & r["cited"]), len(r["pages"])
    miss = sorted(r["pages"] - r["cited"])
    p("  %-14s %-16s %2d/%2d (%3.0f%%)  apparatus=%s  uncited: %s"
      % (r["id"], r["file"], hit, tot, 100.0 * hit / tot, "yes" if r["apparatus"] else "NO ",
         miss if len(miss) <= 10 else str(miss[:10])[:-1] + ", ...+%d]" % (len(miss) - 10)))
p("")

# A citation OUTSIDE the node's own declared range can mean the `pages:` field is stale -- the
# same class of error as the L-13-3-1 header's 478-vs-479 correction. But scoring it by
# EXPANDED PAGE COUNT, as the first version of this script did, measures the wrong thing and
# manufactures findings out of correct data.
#
# What it did: a RANGE citation is how a node points at its neighbours ("this node stops where
# section 19.2 (A pp.675-686) begins"). Expanding that one deliberate scope statement into 12
# pages put L-19-1-1 at the top of the list, ahead of everything real, when all seven of its
# actual content anchors sit inside 660-674 exactly as declared. L-8-3-1 and L-3-4-1 were the
# same shape -- pointers at the very sections that L-8-4-1 and the next node already cover.
# Reporting those as suspects would have sent someone to re-check five citations that were
# right, which is precisely the "checker reporting its own limitation as a finding" failure
# verify_citations' comments describe twice.
#
# So: only SINGLE-PAGE citations count here. A single page is a content anchor -- it says "this
# claim is on this page" -- and one sitting outside the declared range means either the claim
# or the range is wrong. A range is a cross-reference and is reported separately, as context,
# never as a suspect.
# One more exclusion, for the same reason as the range one. A citation inside `coverageNote`
# is usually not a content anchor at all -- coverageNote is where a node argues about its own
# scope, and the standing house rule is that a page range is MEASURED rather than taken from
# the tsv. Making that argument requires citing the page you are ruling OUT: L-25-1-1 cites
# A p.914 to show the toc's interpolated start is wrong because 914 is the chapter opener, so
# the section really begins at 915. Its `pages:` field is right BECAUSE of that citation.
# L-13-3-1's header makes the identical 478-vs-479 argument. Flagging these as suspects would
# mean flagging the very evidence that the range was checked.
p("=" * 78)
p("SINGLE-PAGE CITATIONS OUTSIDE THE NODE'S OWN `pages:` RANGE")
p("=" * 78)
p("A single-page citation is a content anchor: it claims something sits on that page. One")
p("landing outside the node's declared range means either the anchor or `pages:` is wrong.")
p("Two kinds are excluded, both because flagging them would report correct data as suspect:")
p("  - RANGE citations (`A pp.675-686`) -- that is how a node points at a neighbouring section")
p("  - citations inside `coverageNote` -- that is where a node ARGUES its range, which often")
p("    means citing the page it is ruling out (L-25-1-1 on p.914, L-13-3-1's header on p.478)")
p("See the comment above this section for what counting them cost the first version.")
outside, noted = [], []
for r in scored:
    anchors = set(pg for pg, f in r["singles"] if not f.startswith("coverageNote"))
    scope   = set(pg for pg, f in r["singles"] if f.startswith("coverageNote")) - r["pages"]
    out_singles = sorted(anchors - r["pages"])
    if out_singles:
        outside.append((len(out_singles) / max(1, len(anchors)), r, out_singles, len(anchors)))
    if scope:
        noted.append((r, sorted(scope)))
for _frac, r, out_singles, n_anchor in sorted(outside, reverse=True)[:15]:
    p("  %-14s %-16s %d of %d content anchors outside %s-%s: %s"
      % (r["id"], r["file"], len(out_singles), n_anchor, min(r["pages"]), max(r["pages"]),
         out_singles if len(out_singles) <= 10 else str(out_singles[:10])[:-1] + ", ...]"))
if not outside:
    p("  none. Every content anchor in every node sits inside the range that node claims.")
p("")
p("For context only -- pages cited in `coverageNote` from outside the range, i.e. a node")
p("showing its work on where the section really starts or stops:")
for r, scope in sorted(noted, key=lambda t: t[0]["id"]):
    p("    %-14s %-16s declares %d-%d, cites %s while arguing the range"
      % (r["id"], r["file"], min(r["pages"]), max(r["pages"]), scope))
if not noted:
    p("    none.")
p("")

p("For context only -- range citations pointing outside the declared range. These are")
p("cross-references to neighbouring sections and are expected:")
xref = []
for r in scored:
    wide = sorted(r["cited"] - r["pages"] - set(pg for pg, _f in r["singles"]))
    if wide:
        xref.append((r, wide))
for r, wide in sorted(xref, key=lambda t: t[0]["id"]):
    p("    %-14s %-16s -> pp.%d-%d" % (r["id"], r["file"], min(wide), max(wide)))
if not xref:
    p("    none.")
p("")

no_app = [r for r in leh if not r["apparatus"]]
p("=" * 78)
p("SUMMARY")
p("=" * 78)
p("  lehninger nodes            %d" % len(leh))
p("  silent (0 citations)       %d" % len(silent))
p("  thin (1-2 citations)       %d" % len(thin))
p("  total citations            %d" % sum(r["cites"] for r in leh))
p("  median citations per node  %d" % sorted(r["cites"] for r in leh)[len(leh) // 2])
p("  nodes in a file without an IN THE BOOK'S OWN WORDS block  %d" % len(no_app))
p("")
p("The last line is a style count, not a defect count: the block is the convention introduced")
p("with L-24-2-1 and applied to later nodes, so earlier ones lack it by age rather than by")
p("oversight. It is here because that block is what produces citations in bulk, and the thin")
p("list above is drawn almost entirely from nodes that do not have one.")
log.close()

print("done: %d lehninger nodes, %d silent, %d thin" % (len(leh), len(silent), len(thin)))
if silent:
    print("SILENT NODES PRESENT -- these are invisible to verify_citations:")
    for r in silent:
        print("  %s (%s)" % (r["id"], r["file"]))
    sys.exit(1)
