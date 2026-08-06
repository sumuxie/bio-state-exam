# Step 5 check: there is no node/deno/bun on this machine, so the rewritten validator cannot
# be executed here -- but CI runs it and `deploy` is `needs: validate`, so shipping a broken
# one silently stops the site updating. Two things are checked instead:
#   1. the file parses as JavaScript (esprima), so CI will not die on a syntax error
#   2. its logic, re-implemented here against the REAL data, produces zero problems for
#      biochemie_basic and biochemie_pro -- including the new checks
import io, os, re, json, glob, sys
import esprima

ROOT = r"C:\Users\Admin\Downloads\bio-state-exam"
OUT = os.path.join(ROOT, "lehninger_index")
log = io.open(os.path.join(OUT, "_step5_report.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

# --- 1. does the validator parse? ---
vsrc = io.open(os.path.join(ROOT, "tools", "validate-data.js"), encoding="utf-8").read()
try:
    esprima.parseScript(vsrc)
    p("tools/validate-data.js parses as JavaScript: OK (%d lines)" % len(vsrc.splitlines()))
except Exception as e:
    p("SYNTAX ERROR in validate-data.js:", e); log.close(); print("FAILED"); sys.exit(1)

# --- 2. re-implement its checks against the real data ---
def lit(node):
    t = node.type
    if t == "Literal": return node.value
    if t == "ArrayExpression": return [lit(e) for e in node.elements if e is not None]
    if t == "ObjectExpression":
        d = {}
        for pr in node.properties:
            k = pr.key.name if pr.key.type == "Identifier" else pr.key.value
            d[k] = lit(pr.value)
        return d
    if t == "UnaryExpression" and node.operator == "-": return -lit(node.argument)
    if t == "TemplateLiteral" and not node.expressions:
        return "".join(q.value.cooked for q in node.quasis)
    return None

def parse_nodes(src):
    tree = esprima.parseScript(src)
    found = []
    def walk(n):
        if isinstance(n, list):
            for x in n: walk(x)
            return
        if not hasattr(n, "type"): return
        if n.type == "ObjectExpression":
            keys = {pr.key.name if pr.key.type == "Identifier" else pr.key.value
                    for pr in n.properties}
            if {"id", "chapter", "section"} <= keys:
                found.append(lit(n)); return
        for k in dir(n):
            if k.startswith("_") or k == "type": continue
            try: v = getattr(n, k)
            except Exception: continue
            if isinstance(v, list) or hasattr(v, "type"): walk(v)
    walk(tree.body)
    return found

REQUIRED = ["id","chapter","section","czTitle","enTitle","cnTitle","coverage","summary"]
BOOKS = ["cz", "lehninger"]
TAG = re.compile(r'<script\s+src="data/([^"]+\.js)"\s*>')

def validate(app):
    problems = []
    html = io.open(os.path.join(ROOT, app, "index.html"), encoding="utf-8").read()
    tagged = TAG.findall(html)
    ddir = os.path.join(ROOT, app, "data")
    on_disk = sorted(f for f in os.listdir(ddir) if f.endswith(".js"))
    for f in tagged:
        if f not in on_disk: problems.append(f"index.html loads data/{f} but it does not exist")
    for f in on_disk:
        if f not in tagged: problems.append(f"data/{f} exists but no <script> tag loads it")
    if not tagged: problems.append("index.html loads no data files at all")

    T = []
    for name in tagged:
        T.extend(parse_nodes(io.open(os.path.join(ddir, name), encoding="utf-8").read()))
    if not T: problems.append("no topics loaded")

    for t in T:
        for k in REQUIRED:
            if not t.get(k): problems.append(f'{t.get("id")}: missing {k}')
        s = t.get("summary") or {}
        if not s.get("en") or not s.get("cn"):
            problems.append(f'{t.get("id")}: summary missing a language')
        if "book" in t and t["book"] not in BOOKS:
            problems.append(f'{t["id"]}: bad book {t["book"]!r}')
        for i, x in enumerate(t.get("points") or []):
            if not x.get("en") or not x.get("cn"):
                problems.append(f'{t["id"]}: points[{i}] missing a language')
        for i, m in enumerate(t.get("terms") or []):
            if not (m.get("en") and m.get("cn") and m.get("def_en") and m.get("def_cn")):
                problems.append(f'{t["id"]}: terms[{i}] incomplete')
        for i, q in enumerate(t.get("quiz") or []):
            if not q.get("q_en") or not q.get("q_cn"):
                problems.append(f'{t["id"]}: quiz[{i}] missing a language')
            if q.get("type") == "mcq":
                o, a = q.get("options"), q.get("answer")
                if not isinstance(o, list) or not isinstance(a, int) or a < 0 or a >= len(o):
                    problems.append(f'{t["id"]}: quiz[{i}] bad mcq answer index')
            elif not q.get("answer_en") or not q.get("accept"):
                problems.append(f'{t["id"]}: quiz[{i}] written question incomplete')
        o = t.get("oral")
        if o and (not o.get("model_en") or not o.get("checklist")):
            problems.append(f'{t["id"]}: bad oral block')

    for name in ("book", "topicKey"):
        got = sum(1 for t in T if t.get(name))
        if got not in (0, len(T)):
            problems.append(f"{name}: {got} of {len(T)} topics have it -- all or none")

    ids = [t["id"] for t in T]
    for d in sorted({i for i in ids if ids.count(i) > 1}):
        problems.append(f"duplicate id {d}")

    by = {}
    for t in T:
        if (t.get("book") or "cz") != "cz": continue
        by.setdefault(f'cz/{t["chapter"]}', set()).update(t.get("pages") or [])
    for k in sorted(by):
        pg = sorted(by[k])
        gaps = [x for x in range(pg[0], pg[-1] + 1) if x not in by[k]]
        if gaps: problems.append(f'{k}: page gaps {",".join(map(str,gaps))}')

    cz = [t for t in T if (t.get("book") or "cz") == "cz"]
    leh = [t for t in T if t.get("book") == "lehninger"]
    pages = [x for t in cz for x in (t.get("pages") or [])]
    keys = {t["topicKey"] for t in T if t.get("topicKey")}
    terms = sum(len(t.get("terms") or []) for t in T)
    qs = sum(len(t.get("quiz") or []) for t in T)
    if problems:
        p(f"FAIL {app}")
        for x in problems[:40]: p("   " + x)
        return False
    p(f'ok {app}: {len(T)} topics ({len(cz)} cz, {len(leh)} lehninger), '
      f'cz book pages {min(pages)}-{max(pages)}, {len(keys)} topicKeys, '
      f'{terms} terms, {qs} questions')
    return True

p("")
p("simulating the validator's logic against the real data:")
ok = all([validate("biochemie_basic"), validate("biochemie_pro")])

# --- 3. the new checks must actually FIRE when they should ---
p("")
p("negative tests -- a check that never fails is not a check:")
T = []
for f in sorted(glob.glob(os.path.join(ROOT, "biochemie_pro", "data", "ch*.js"))):
    T.extend(parse_nodes(io.open(f, encoding="utf-8").read()))

half = [dict(t) for t in T]
del half[0]["book"]
got = sum(1 for t in half if t.get("book"))
p(f"  half-migrated app (one node missing `book`): got={got}, len={len(half)} -> "
  f"{'FIRES' if got not in (0, len(half)) else 'DOES NOT FIRE (bug)'}")
assert got not in (0, len(half))

leh = [dict(t) for t in T]
for t in leh[:5]:
    t["book"] = "lehninger"; t["pages"] = [1, 50, 900]      # deliberately gappy
by = {}
for t in leh:
    if (t.get("book") or "cz") != "cz": continue
    by.setdefault(f'cz/{t["chapter"]}', set()).update(t.get("pages") or [])
gaps = []
for k in by:
    pg = sorted(by[k])
    gaps += [x for x in range(pg[0], pg[-1] + 1) if x not in by[k]]
p(f"  lehninger nodes with wildly gappy pages: gap check reports {len(gaps)} gaps -> "
  f"{'correctly ignored' if not gaps else 'LEAKED (bug)'}")
assert not gaps

# and the cz gap check must still bite if a cz page really goes missing.
# Pick the page to remove rather than guessing one: Czech sections overlap, so deleting a
# page that a neighbouring node also covers leaves no gap and the test proves nothing.
# It must be a page held by exactly ONE node, and not the first or last of its chapter.
owners = {}
for t in T:
    for pg in (t.get("pages") or []):
        owners.setdefault(pg, []).append(t["id"])
span = {}
for t in T:
    for pg in (t.get("pages") or []):
        a, b = span.get(t["chapter"], (pg, pg))
        span[t["chapter"]] = (min(a, pg), max(b, pg))
victim = None
for t in T:
    for pg in (t.get("pages") or []):
        lo, hi = span[t["chapter"]]
        if len(owners[pg]) == 1 and lo < pg < hi:
            victim = (t["id"], pg); break
    if victim: break
assert victim, "no uniquely-owned interior page exists to test with"
p(f"  (test page chosen by search: p.{victim[1]}, held only by node {victim[0]})")
broke = [dict(t) for t in T]
for t in broke:
    if t["id"] == victim[0]:
        t["pages"] = [x for x in t["pages"] if x != victim[1]]
by = {}
for t in broke:
    if (t.get("book") or "cz") != "cz": continue
    by.setdefault(f'cz/{t["chapter"]}', set()).update(t.get("pages") or [])
allg = []
for k in by:
    pg = sorted(by[k])
    allg += [x for x in range(pg[0], pg[-1] + 1) if x not in by[k]]
p(f"  cz node with a page removed: gap check reports {allg} -> "
  f"{'still bites' if allg else 'WENT QUIET (bug)'}")

p("")
p("RESULT:", "all checks pass" if ok else "VALIDATION FAILED")
log.close()
print("done" if ok else "FAILED")
