"""Write the full catalogue of the corpus as one markdown file.

    python tools/make-catalogue.py 20260828biochemiepro目录.md

Ten subject areas, the 78 topics inside them, and under each topic every member node
with its book, section number, page range, and how much each app holds for it. It is
the map: which sections a topic covers, which book they come from, and where the
material lives now.

Reads nodes.js, topics.json (the full app's own content) and the spine files, so it
cannot drift from what the apps actually contain — regenerate it rather than editing it.
"""
import importlib.util, json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
LITE = ROOT / "biochemie_lite"

spec = importlib.util.spec_from_file_location("cs", ROOT / "tools" / "check-spine.py")
cs = importlib.util.module_from_spec(spec)
_argv, sys.argv = sys.argv, ["check-spine.py"]
try:
    spec.loader.exec_module(cs)
except SystemExit:
    pass
sys.argv = _argv

spines, _ = cs.load_spines()
nodes = json.loads(re.search(r"=\s*(\[.*\]);",
                   (LITE / "data" / "nodes.js").read_text(encoding="utf-8"), re.S).group(1))
topics = {n["id"]: n for n in json.loads((ROOT / "tools" / "topics.json").read_text(encoding="utf-8"))}

# the subject areas, read from the app so the two orders can never disagree
js = (LITE / "app.js").read_text(encoding="utf-8")
blk = js[js.index("const AREAS = ["):js.index("function groupsByArea")]
AREAS = [(m.group(1), m.group(2), re.findall(r"'([a-z0-9-]+)'", m.group(3)))
         for m in re.finditer(r"\{ cn: '([^']+)', en: '([^']+)', keys: \[(.*?)\] \}", blk, re.S)]

members = {}
for n in nodes:
    members.setdefault(n.get("topicKey"), []).append(n)
for v in members.values():
    v.sort(key=lambda n: (0 if n.get("book") == "lehninger" else 1, str(n.get("section") or "")))

BOOK = {"lehninger": "Lehninger", "cz": "Biochemie", "entity": "词条"}


def steps_of(key, nid):
    sp = spines.get("key:" + key) if ("key:" + key) in spines else spines.get(nid)
    return len(sp.get("steps") or []) if sp else 0


def title(n, lang):
    t = (n.get("cnTitle") if lang == "cn" else n.get("enTitle")) or ""
    return t.split("——")[0].split(" — ")[0].strip()


out = ["# 生物化学 · 全部内容目录", "",
       "两本教材的每一节，按十个大类组织。**主题**是 speed-run app 里合并后的一条链，",
       "**节点**是它覆盖的原始小节。「pro 条目」是完整版里该节点的逐条内容数（points + terms），",
       "「主线步数」是精简版里那条链的步数。", "",
       "由 `tools/make-catalogue.py` 从 `nodes.js`、`topics.json` 和 spine 文件生成 —— ",
       "要更新请重新生成，不要手改。", ""]

tot_nodes = sum(len(members.get(k, [])) for _, _, ks in AREAS for k in ks)
tot_items = 0
for _, _, ks in AREAS:
    for k in ks:
        for n in members.get(k, []):
            pro = topics.get(n["id"]) or {}
            tot_items += len(pro.get("points") or []) + len(pro.get("terms") or [])
out += ["| | |", "|---|---|",
        "| 大类 | %d |" % len(AREAS),
        "| 主题（合并后的链） | %d |" % sum(len(ks) for _, _, ks in AREAS),
        "| 节点（教材小节） | %d |" % tot_nodes,
        "| 完整版逐条内容 | %d |" % tot_items,
        "| 精简版总步数 | %d |" % sum(len(sp.get("steps") or [])
                                 for k, sp in spines.items() if k.startswith("key:")),
        ""]

for i, (cn, en, keys) in enumerate(AREAS, 1):
    n_nodes = sum(len(members.get(k, [])) for k in keys)
    out += ["", "---", "", "## %d. %s · %s" % (i, cn, en),
            "", "%d 个主题，%d 个节点" % (len(keys), n_nodes), ""]
    for k in keys:
        ms = members.get(k, [])
        sp = spines.get("key:" + k)
        head = (sp.get("title_cn") or sp.get("nodeTitle_cn") or "") if sp else ""
        out += ["### `%s` — %d 步" % (k, steps_of(k, ms[0]["id"] if ms else "")),
                ""]
        if head:
            out += ["> " + head.replace("**", ""), ""]
        out += ["| 节点 | 教材 | 小节 | 页 | pro 条目 | 标题 |",
                "|---|---|---|---|---|---|"]
        for n in ms:
            pro = topics.get(n["id"]) or {}
            items = len(pro.get("points") or []) + len(pro.get("terms") or [])
            pages = pro.get("pages")
            pg = "%s–%s" % (pages[0], pages[-1]) if isinstance(pages, list) and pages else "—"
            out.append("| `%s` | %s | %s | %s | %d | %s |"
                       % (n["id"], BOOK.get(n.get("book"), n.get("book") or "—"),
                          n.get("section") or "—", pg, items,
                          (title(n, "cn") or title(n, "en") or "—")[:60]))
        out.append("")

path = ROOT / (sys.argv[1] if len(sys.argv) > 1 else "catalogue.md")
path.write_text("\n".join(out), encoding="utf-8")
print("%s: %d areas, %d topics, %d nodes" %
      (path.name, len(AREAS), sum(len(ks) for _, _, ks in AREAS), tot_nodes))
