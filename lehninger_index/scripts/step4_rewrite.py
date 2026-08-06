# Step 4b: add `book: "cz"` and `topicKey` to all 207 nodes in biochemie_pro/data/ch*.js.
#
# biochemie_basic is FROZEN and is not touched -- the script refuses to look at it.
#
# Verification, because a bad regex here silently corrupts the study tool:
#   - parse every file with esprima BEFORE and AFTER
#   - node count unchanged, ids unchanged and in the same order
#   - every pre-existing field deep-equal afterwards
#   - the only new keys are exactly {book, topicKey}
# Any failure restores the originals from memory and exits non-zero.
import io, os, re, json, glob, sys
import esprima

PRO = r"C:\Users\Admin\Downloads\bio-state-exam\biochemie_pro\data"
OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
assert "biochemie_basic" not in PRO

log = io.open(os.path.join(OUT, "_step4_rewrite.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

NODE_KEY = json.load(io.open(os.path.join(OUT, "topickey_by_node.json"), encoding="utf-8"))

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

FILES = sorted(glob.glob(os.path.join(PRO, "ch*.js")),
               key=lambda s: int("".join(c for c in os.path.basename(s) if c.isdigit())))
ID_LINE = re.compile(r'^(\s*)id:\s*"([^"]+)",\s*$')

originals, before, after_src = {}, {}, {}
total_ins = 0
for f in FILES:
    src = io.open(f, encoding="utf-8", newline="").read()
    originals[f] = src
    before[f] = parse_nodes(src)

    # detect the line ending actually used, and preserve it
    nl = "\r\n" if "\r\n" in src else "\n"
    lines = src.split(nl)
    out, ins = [], 0
    for ln in lines:
        out.append(ln)
        m = ID_LINE.match(ln)
        if m:
            indent, nid = m.group(1), m.group(2)
            if nid not in NODE_KEY:
                p("FATAL: node id with no topicKey:", nid); log.close(); sys.exit(1)
            out.append(f'{indent}book: "cz",')
            out.append(f'{indent}topicKey: "{NODE_KEY[nid]}",')
            ins += 1
    after_src[f] = nl.join(out)
    total_ins += ins
    p(f'{os.path.basename(f):>8}: {len(before[f]):>3} nodes parsed, {ins:>3} insertions')

assert total_ins == 207, total_ins
p("total insertions:", total_ins)

# ---- verify by parsing the NEW text before writing anything to disk ----
problems = []
for f in FILES:
    aft = parse_nodes(after_src[f])
    bef = before[f]
    if len(aft) != len(bef):
        problems.append(f"{f}: node count {len(bef)} -> {len(aft)}"); continue
    for b, a in zip(bef, aft):
        if b["id"] != a["id"]:
            problems.append(f'{f}: id order changed {b["id"]} -> {a["id"]}'); continue
        newk = set(a) - set(b)
        if newk != {"book", "topicKey"}:
            problems.append(f'{a["id"]}: unexpected new keys {sorted(newk)}')
        if a.get("book") != "cz":
            problems.append(f'{a["id"]}: book is {a.get("book")!r}')
        if a.get("topicKey") != NODE_KEY[a["id"]]:
            problems.append(f'{a["id"]}: topicKey is {a.get("topicKey")!r}')
        for k in b:
            if b[k] != a[k]:
                problems.append(f'{a["id"]}: field {k} CHANGED')

if problems:
    p("")
    p("REFUSING TO WRITE -- %d problems:" % len(problems))
    for x in problems[:30]: p("   " + x)
    log.close(); print("FAILED"); sys.exit(1)

p("verification passed: 207 nodes, ids and order intact, every pre-existing field identical,")
p("only new keys are book and topicKey")

for f in FILES:
    io.open(f, "w", encoding="utf-8", newline="").write(after_src[f])
p("")
p("written:", len(FILES), "files")

# ---- re-read from disk and check once more ----
final = []
for f in FILES:
    final.extend(parse_nodes(io.open(f, encoding="utf-8", newline="").read()))
assert len(final) == 207, len(final)
assert all(n.get("book") == "cz" for n in final)
assert all(n.get("topicKey") for n in final)
keys = sorted({n["topicKey"] for n in final})
p("re-read from disk: 207 nodes, all have book=cz, %d distinct topicKeys" % len(keys))
p("")
p("topicKeys in the data:")
for k in keys:
    p(f'   {sum(1 for n in final if n["topicKey"] == k):>3}  {k}')
log.close()
print("done")
