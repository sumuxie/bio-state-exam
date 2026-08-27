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


def numbers(s):
    """Numbers as the reader would quote them, with 1,000 and 1000 the same thing."""
    out = set()
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


def main(argv):
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
