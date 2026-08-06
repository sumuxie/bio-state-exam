# Step 3a: pull the Czech app's 207 nodes out of data/ch*.js with esprima (HANDOFF.md 9a --
# brace counting silently lies, so parse for real).
#
# v2: also keep `terms` and the point `cz` anchors. The skeleton is the Czech book's own TOC
# (user decision 2026-08-06), so the Czech section is now the unit of the master table, and
# its glossary terms are what gets searched in Lehninger to find the matching section.
import io, os, json, glob
import esprima

SRC = r"C:\Users\Admin\Downloads\bio-state-exam\biochemie_pro\data"
OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
log = io.open(os.path.join(OUT, "_step3a_report.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

WANT = ("id", "chapter", "section", "czTitle", "enTitle", "cnTitle", "pages", "cnNote",
        "terms", "points", "coverage")

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

nodes = []
for f in sorted(glob.glob(os.path.join(SRC, "ch*.js")),
                key=lambda s: int("".join(c for c in os.path.basename(s) if c.isdigit()))):
    src = io.open(f, encoding="utf-8").read()
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
                d = lit(n)
                found.append({k: d.get(k) for k in WANT})
                return
        for k in dir(n):
            if k.startswith("_") or k == "type": continue
            try: v = getattr(n, k)
            except Exception: continue
            if isinstance(v, list) or hasattr(v, "type"): walk(v)
    walk(tree.body)
    p(f"{os.path.basename(f):>8}: {len(found):>3} nodes")
    nodes.extend(found)

p("total nodes:", len(nodes))
assert len(nodes) == 207, len(nodes)
ids = [n["id"] for n in nodes]
assert len(set(ids)) == len(ids), "duplicate ids"
allpages = sorted({pg for n in nodes for pg in (n["pages"] or [])})
p("book pages covered:", allpages[0], "-", allpages[-1],
  " gaps:", [x for x in range(allpages[0], allpages[-1]+1) if x not in set(allpages)])
nterms = sum(len(n.get("terms") or []) for n in nodes)
npoints = sum(len(n.get("points") or []) for n in nodes)
p("glossary terms:", nterms, " points:", npoints)
assert nterms > 400, nterms

json.dump(nodes, io.open(os.path.join(OUT, "cz_nodes.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

# --- the skeleton: the Czech book's own TOC, section by section ---
secs = {}
for n in nodes:
    k = (n["chapter"], (n["section"] or "").rstrip("."))
    e = secs.setdefault(k, {"chapter": n["chapter"], "section": k[1], "en": n["enTitle"],
                            "cz": n["czTitle"], "pages": set(), "ids": [], "terms": []})
    e["pages"].update(n["pages"] or [])
    e["ids"].append(n["id"])
    for t in (n.get("terms") or []):
        if t.get("en"): e["terms"].append(t["en"])

def keyf(k):
    return (k[0], [int(x) for x in k[1].replace(".", " ").split()] if k[1] else [])
skeleton = []
for k in sorted(secs, key=keyf):
    e = secs[k]
    pgs = sorted(e["pages"])
    skeleton.append({"chapter": e["chapter"], "section": e["section"],
                     "enTitle": e["en"], "czTitle": e["cz"],
                     "pages": pgs, "page_count": len(pgs),
                     "nodes": len(e["ids"]), "node_ids": e["ids"],
                     "terms": sorted(set(e["terms"]))})
json.dump(skeleton, io.open(os.path.join(OUT, "cz_skeleton.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

p("")
p("=== the skeleton: %d Czech sections across 10 chapters ===" % len(skeleton))
for c in range(1, 11):
    ss = [s for s in skeleton if s["chapter"] == c]
    pgs = sorted({x for s in ss for x in s["pages"]})
    p(f'  ch{c:>2}: {len(ss):>3} sections, {sum(s["nodes"] for s in ss):>3} nodes, '
      f'pp.{pgs[0]}-{pgs[-1]} ({len(pgs)} pages), '
      f'{sum(len(s["terms"]) for s in ss):>3} glossary terms')
p("")
p("OK: wrote cz_nodes.json and cz_skeleton.json")
log.close()
print("done")
