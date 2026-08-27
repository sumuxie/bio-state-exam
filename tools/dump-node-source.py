"""Print the full app's source material for one node, for writing a merged spine from.

    python tools/dump-node-source.py 6-2-2-1 6-2-2-2 > out.txt

`tools/topics.json` is 10 MB, so reading it whole to find three nodes wastes a context
window. This pulls out exactly the nodes asked for: title, pages, coverage note, the
point-by-point content, the glossary terms and the must-know list.

Use it for a member node that has no spine of its own. A topic that is being merged does
not need a per-node spine written first — the merged `key:` spine shadows the per-node
ones anyway, so writing one to throw away is the dead work the handoff warns about.
"""
import json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
TOPICS = ROOT / "tools" / "topics.json"


def render(n):
    out = []
    out.append("======== %s   [%s %s]  pages %s" %
               (n["id"], n.get("book"), n.get("section"), n.get("pages")))
    for f in ("czTitle", "enTitle", "cnTitle"):
        if n.get(f):
            out.append("%s: %s" % (f, n[f]))
    if n.get("coverage") or n.get("coverageNote"):
        out.append("coverage: %s — %s" % (n.get("coverage"), n.get("coverageNote") or ""))
    if n.get("cnNote"):
        out.append("cnNote: %s" % n["cnNote"])
    if n.get("summary"):
        out.append("\nSUMMARY\n%s" % n["summary"])
    if n.get("mustKnow"):
        out.append("\nMUST KNOW")
        mk = n["mustKnow"]
        for item in (mk if isinstance(mk, list) else [mk]):
            out.append("  - %s" % item)
    if n.get("terms"):
        out.append("\nTERMS")
        for t in n["terms"]:
            if isinstance(t, dict):
                out.append("  %s / %s :: %s" % (t.get("cz") or t.get("en"), t.get("cn"),
                                                t.get("def_en") or t.get("def") or ""))
            else:
                out.append("  %s" % t)
    if n.get("points"):
        out.append("\nPOINTS (%d)" % len(n["points"]))
        for i, p in enumerate(n["points"]):
            if isinstance(p, dict):
                out.append("\n-- point %d" % i)
                for k in ("cz", "en", "cn", "src", "page"):
                    if p.get(k):
                        out.append("  %-4s %s" % (k + ":", p[k]))
            else:
                out.append("  %s" % p)
    return "\n".join(out)


if __name__ == "__main__":
    want = sys.argv[1:]
    if not want:
        raise SystemExit(__doc__)
    nodes = json.loads(TOPICS.read_text(encoding="utf-8"))
    by_id = {n["id"]: n for n in nodes}
    sys.stdout.reconfigure(encoding="utf-8")
    for w in want:
        n = by_id.get(w)
        print(render(n) if n else "!! no node %s in topics.json" % w)
        print()
