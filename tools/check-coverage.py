"""Did the merge lose anything the reader can no longer reach?

    python tools/check-coverage.py                       # every merged topic
    python tools/check-coverage.py key:citric-acid-cycle # one

WHY THIS EXISTS
A merged `key:` spine SHADOWS the per-node spines of its member nodes — `spineOf()`
prefers `SPINE['key:' + topicKey]` — so anything that was in a member node's spine and
is not in the merged one becomes unreachable in this app the moment the topic merges.
Compressing 48 steps into 16 is the point of the exercise, but it has to drop
restatement, not content. The reader's words: 不然我学半天发现很多内容缺失我会很头大.

Note what is NOT at risk: the full app keeps every point, and a member node that never
had a spine of its own loses nothing by being merged — the merged chain is the first
time that material appears here at all.

WHAT IT CHECKS, and why these two things
  SHADOWED CLAIMS  For each member node that had its own spine, each of that spine's
                   steps is scored by how much of its distinctive vocabulary survives
                   in the merged text. A step scoring low is a claim the reader used to
                   be able to reach and now cannot.
  NUMBERS          Every number in the source material — the member spines and the full
                   app's own point-by-point content — checked against the merged text.
                   Numbers are the most examinable thing on a page and the easiest to
                   drop silently, and they compare across languages without a matcher
                   that can be fooled by 乙酰-CoA against 乙酰辅酶A.

A FIRST VERSION OF THIS TOOL matched glossary term NAMES and reported 55% coverage on
a chain that had in fact kept the material: the glossary writes 辅酶A where the spines
write CoA, so it was measuring transliteration, not content. If this one ever starts
reporting losses that reading disproves, distrust the tool before the spine.

It reports; it does not gate. Exit code is always 0.
"""
import collections, importlib.util, json, pathlib, re, sys, unicodedata

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

spines, _bad = cs.load_spines()
nodes = json.loads(re.search(r"=\s*(\[.*\]);",
                   (LITE / "data" / "nodes.js").read_text(encoding="utf-8"), re.S).group(1))
topics = {n["id"]: n for n in json.loads((ROOT / "tools" / "topics.json").read_text(encoding="utf-8"))}

members = collections.defaultdict(list)
for n in nodes:
    if n.get("kind") != "entity" and n.get("topicKey"):
        members[n["topicKey"]].append(n["id"])

STOP = set("""about above after again against along among and are because been before being
below between both but came come could does doing during each either else every from
further gives given goes going have having here how into itself just like made make
many more most much must never once only other over same seen since some still such
take taken than that the their them then there these they thing this those three
through thus together took toward two under until upon very what when where which
while will with within without would your""".split())


def norm(s):
    return unicodedata.normalize("NFKC", s or "").lower()


def words(s):
    return set(w for w in re.findall(r"[a-z][a-z-]{4,}", norm(s)) if w not in STOP)


WORD_NUM = {"two": "2", "three": "3", "four": "4", "five": "5", "six": "6",
            "seven": "7", "eight": "8", "nine": "9", "ten": "10", "eleven": "11",
            "twelve": "12", "thirteen": "13", "fourteen": "14", "fifteen": "15",
            "sixteen": "16", "seventeen": "17", "eighteen": "18", "nineteen": "19",
            "twenty": "20", "thirty": "30", "forty": "40", "fifty": "50",
            "hundred": "100", "thousand": "1000"}


def numbers(s):
    """Numbers as the reader would quote them, with 1,000 and 1000 the same thing.

    Small counts get spelled out in prose — a chain saying "sixteen exist" carries the
    same fact as a source saying "16", and reporting that as a loss is a false alarm
    that teaches the reader to ignore this tool."""
    out = set()
    low = norm(s)
    for w, v in WORD_NUM.items():
        if re.search(r"\b" + w + r"\b", low):
            out.add(v)
    for m in re.findall(r"\d[\d,\.]*", norm(s)):
        v = m.rstrip(".,").replace(",", "")
        if v and v not in {"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"}:
            out.add(v)
    return out


def merged_text(sp):
    out = []
    for f in ("title_en", "title_cn", "nodeTitle_en", "nodeTitle_cn"):
        out.append(sp.get(f) or "")
    for t in sp.get("terms") or []:
        for f in ("en", "cn", "def_en", "def_cn"):
            out.append(t.get(f) or "")
    for s in sp.get("steps") or []:
        for f in ("en", "cn", "link_en", "link_cn", "recall_en", "recall_cn",
                  "beyondNote", "openQuestion_en", "openQuestion_cn"):
            out.append(s.get(f) or "")
    return " ".join(out)


def claim_of(text):
    a = text.find("**")
    b = text.find("**", a + 2)
    return text[a + 2:b] if a >= 0 and b > a else text


def source_text(nid):
    """Everything the full app holds for this node, for the number check."""
    out = []
    n = topics.get(nid)
    if n:
        for f in ("summary", "mustKnow"):
            v = n.get(f)
            if isinstance(v, str):
                out.append(v)
            elif isinstance(v, list):
                out.extend(str(x) for x in v)
            elif isinstance(v, dict):
                out.extend(str(x) for x in v.values())
        for p in n.get("points") or []:
            if isinstance(p, dict):
                out.append(" ".join(str(p.get(k) or "") for k in ("en", "cn", "cz")))
        for t in n.get("terms") or []:
            if isinstance(t, dict):
                out.append(" ".join(str(t.get(k) or "") for k in ("def_en", "def_cn")))
    return " ".join(out)


def reachable_text(nid, node_topic):
    """What the reader actually sees when they open this node: the merged chain if the
    topic is merged, otherwise the node's own spine."""
    tk = node_topic.get(nid)
    sp = spines.get("key:" + tk) if tk and ("key:" + tk) in spines else spines.get(nid)
    return merged_text(sp) if sp else ""


def cmd_by_node(argv):
    """Every node of both books, scored against the full app's own point-by-point content.

    This is the audit the reader asked for: 按着 pro 的两本书所有节点查. For each node it
    takes the points the full app holds and asks how many are represented in whatever
    this app shows at that node. A node scoring low is one where opening it in the lite
    app gives less than the full app has — which is the point of a thread, up to a
    point, and a loss past it.
    """
    node_topic = {n["id"]: n.get("topicKey") for n in nodes}
    rows = []
    for n in nodes:
        nid = n["id"]
        pts = (topics.get(nid) or {}).get("points") or []
        if not pts:
            continue
        text = reachable_text(nid, node_topic)
        twords = words(text)
        missed = []
        for p in pts:
            if not isinstance(p, dict):
                continue
            w = words(p.get("en") or "")
            if len(w) < 5:
                continue
            if len(w & twords) / len(w) < 0.35:
                missed.append((p.get("cz") or p.get("en") or "")[:70])
        rows.append((len(missed), len(pts), nid, node_topic.get(nid), missed))
    rows.sort(reverse=True)
    worst = [r for r in rows if r[0]]
    print("%d node(s) with point-by-point content; %d have at least one point that does "
          "not appear where the reader lands" % (len(rows), len(worst)))
    for miss, tot, nid, tk, missed in worst[:int(argv[0]) if argv else 25]:
        print("\n%-10s %-32s %d of %d points not represented" % (nid, tk or "-", miss, tot))
        for m in missed[:6]:
            print("     - %s" % m)
    return 0


def cmd_missing(argv):
    """Print, in full, the source material a merged topic does not carry.

    This is what you hand an agent that has been told to fill a gap in: the exact
    points and term definitions the full app holds for each member node and the merged
    chain does not represent, in both languages, with the node id and page to cite.
    """
    topic = argv[0][4:] if argv[0].startswith("key:") else argv[0]
    node_topic = {n["id"]: n.get("topicKey") for n in nodes}
    sp = spines.get("key:" + topic)
    if not sp:
        print("!! no merged spine for %s" % topic)
        return 1
    twords = words(merged_text(sp))
    print("======== key:%s — %d steps now" % (topic, len(sp.get("steps") or [])))
    for nid in [n["id"] for n in nodes if node_topic.get(n["id"]) == topic]:
        pro = topics.get(nid) or {}
        out = []
        for p in pro.get("points") or []:
            if not isinstance(p, dict):
                continue
            w = words(p.get("en") or "")
            if len(w) >= 5 and len(w & twords) / len(w) < 0.35:
                out.append(("POINT", p.get("cz") or "", p.get("en") or "", p.get("cn") or ""))
        for t in pro.get("terms") or []:
            if not isinstance(t, dict):
                continue
            w = words(t.get("def_en") or "")
            if len(w) >= 5 and len(w & twords) / len(w) < 0.35:
                out.append(("TERM", t.get("cz") or t.get("en") or "",
                            t.get("def_en") or "", t.get("def_cn") or ""))
        if not out:
            continue
        print("\n---- %s   pages %s   (%d item(s) not carried)"
              % (nid, pro.get("pages"), len(out)))
        for kind, label, en, cn in out:
            print("\n  [%s] %s" % (kind, label))
            print("    EN: %s" % en)
            print("    CN: %s" % cn)
    return 0


def main(argv):
    if argv and argv[0] == "--by-node":
        return cmd_by_node(argv[1:])
    if argv and argv[0] == "--missing":
        return cmd_missing(argv[1:])
    keys = sorted(k for k in spines if k.startswith("key:"))
    if argv:
        keys = argv
    tot_lost, tot_nums = 0, 0
    for key in keys:
        sp = spines.get(key)
        if not sp:
            print("!! no spine %s" % key)
            continue
        topic = key[4:]
        mtext = merged_text(sp)
        mwords, mnums = words(mtext), numbers(mtext)

        shadowed = [m for m in members.get(topic, []) if m in spines]
        weak = []
        for nid in shadowed:
            for i, st in enumerate(spines[nid].get("steps") or []):
                claim = claim_of(st.get("en") or "")
                w = words(claim)
                if len(w) < 4:
                    continue
                kept = len(w & mwords) / len(w)
                if kept < 0.45:
                    weak.append((kept, nid, i, claim))

        lost_nums = []
        for nid in members.get(topic, []):
            src = source_text(nid)
            if nid in spines:
                src += " " + " ".join((s.get("en") or "") + " " + (s.get("cn") or "")
                                      for s in spines[nid].get("steps") or [])
            for v in sorted(numbers(src)):
                if v not in mnums:
                    lost_nums.append((nid, v))

        print("%-30s %2d member(s), %d shadowed spine(s) | %d claim(s) thinned, %d number(s) not carried"
              % (topic, len(members.get(topic, [])), len(shadowed), len(weak), len(lost_nums)))
        for kept, nid, i, claim in sorted(weak)[:8]:
            print("      thinned %2d%%  %s step %d: %s" % (kept * 100, nid, i, claim[:120]))
        if lost_nums:
            by = collections.defaultdict(list)
            for nid, v in lost_nums:
                by[nid].append(v)
            for nid, vs in by.items():
                print("      numbers not in merged text, %s: %s" % (nid, ", ".join(vs[:18])))
        tot_lost += len(weak)
        tot_nums += len(lost_nums)
    print("\n%d thinned claim(s), %d number(s) not carried across %d topic(s)"
          % (tot_lost, tot_nums, len(keys)))
    return 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main(sys.argv[1:]))
