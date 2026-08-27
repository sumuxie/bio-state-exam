"""Locate, measure and re-mark the bold span of a spine step field.

The 极简 view renders only the bold run of a step, so a bold run that is a whole
paragraph makes that view a wall of text. Re-marking is a pure `**`-only edit: not one
other byte of the file may change, and the check is mechanical --

    original.replace("**", "") == new.replace("**", "")

Strings are located by brace/bracket depth, never by a flat regex, so `link_*`,
`recall_*`, `title_*`, `beyond*`, `openQuestion_*`, the `terms[]` definitions and the
short `en`/`cn` labels inside `see:` entries are structurally out of reach: only a
string whose enclosing-key path is exactly ["steps", "en"] (or ["steps", "cn"]) is a
candidate.

    python tools/spine_spans.py stats                 # distribution per file
    python tools/spine_spans.py dump <file> <out.json>   # work list for re-marking
    python tools/spine_spans.py apply <edits.json>    # anchor pair -> one bold run
"""
import json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "biochemie_lite" / "data"


# ------------------------------------------------------------------ the scanner
class Frame:
    __slots__ = ("kind", "key")

    def __init__(self, kind):
        self.kind = kind          # "{" or "["
        self.key = None           # for objects: the key currently being assigned


def scan(js):
    """Yield (path, topic_key, start, end) for every string literal in the file.

    `path` is the list of keys of the enclosing object frames, outermost first, so a
    step's English text is exactly ["steps", "en"]. `start`/`end` bracket the literal's
    CONTENT, excluding the quotes. `topic_key` is the window.BIOLITE_SPINE["key:..."]
    the string belongs to, for reporting.
    """
    out, stack, i, n = [], [], 0, len(js)
    ident, topic, pending_assign = "", None, None
    while i < n:
        c = js[i]

        # comments
        if c == "/" and i + 1 < n and js[i + 1] == "/":
            i = js.find("\n", i)
            if i < 0:
                break
            continue
        if c == "/" and i + 1 < n and js[i + 1] == "*":
            i = js.find("*/", i + 2)
            if i < 0:
                raise SystemExit("unterminated block comment")
            i += 2
            continue

        # string literal
        if c in "\"'":
            q, j = c, i + 1
            while j < n:
                if js[j] == "\\":
                    j += 2
                    continue
                if js[j] == q:
                    break
                j += 1
            if j >= n:
                raise SystemExit("unterminated string at offset %d" % i)
            path = [f.key for f in stack if f.kind == "{"]
            content = js[i + 1:j]
            # window.BIOLITE_SPINE["key:foo"] = { ... }  -- a string at depth 0
            if not stack and content.startswith("key:"):
                topic = content
            out.append((path, topic, i + 1, j))
            i = j + 1
            ident = ""
            continue

        if c == "{" or c == "[":
            stack.append(Frame(c))
            ident = ""
        elif c == "}" or c == "]":
            if stack:
                stack.pop()
            ident = ""
        elif c == ":":
            if stack and stack[-1].kind == "{" and ident:
                stack[-1].key = ident
            ident = ""
        elif c == ",":
            if stack and stack[-1].kind == "{":
                stack[-1].key = None
            ident = ""
        elif c.isalnum() or c in "_$":
            ident += c
        elif c in " \t\r\n":
            if ident and js[i:].lstrip()[:1] != ":":
                ident = ident
            # keep ident across whitespace so `en :` still works
        else:
            ident = ""
        i += 1
    return out


def step_fields(path, field):
    return path == ["steps", field]


def load(fp):
    with open(fp, "r", encoding="utf-8", newline="") as fh:
        return fh.read()


def store(fp, text):
    with open(fp, "w", encoding="utf-8", newline="") as fh:
        fh.write(text)


def spans_of(text):
    """The bold runs of one field, as (start, end) offsets into `text`."""
    out, i = [], 0
    while True:
        a = text.find("**", i)
        if a < 0:
            return out
        b = text.find("**", a + 2)
        if b < 0:
            return out
        out.append((a + 2, b))
        i = b + 2


def items(fp, field="en"):
    js = load(fp)
    got = []
    for path, topic, s, e in scan(js):
        if step_fields(path, field):
            got.append({"topic": topic, "start": s, "end": e, "text": js[s:e]})
    return js, got


# ------------------------------------------------------------------- sub-commands
def cmd_stats(argv):
    files = sorted(DATA.glob("spine_*.js"))
    if argv:
        files = [DATA / a if not a.startswith("/") else pathlib.Path(a) for a in argv]
    print("%-34s %5s %6s %5s %5s %5s %6s" %
          ("file", "n", "median", "mean", "max", ">250", ">180"))
    for fp in files:
        for field in ("en",):
            _, got = items(fp, field)
            lens = []
            for g in got:
                sp = spans_of(g["text"])
                lens.append(sum(e - s for s, e in sp) if sp else len(g["text"]))
            if not lens:
                continue
            lens_sorted = sorted(lens)
            med = lens_sorted[len(lens) // 2]
            print("%-34s %5d %6d %5d %5d %5d %6d" %
                  (fp.name, len(lens), med, sum(lens) // len(lens), max(lens),
                   sum(1 for x in lens if x > 250), sum(1 for x in lens if x > 180)))


def cmd_dump(argv):
    """Print every step whose bold run is too long, as text: the field with its
    existing `**` left in place, so the chosen claim can be seen next to the prose it
    has to be cut out of. Anchors are matched against the field WITHOUT the markers,
    so an anchor must not straddle a `**`."""
    fp = DATA / argv[0]
    out = pathlib.Path(argv[1])
    limit = int(argv[2]) if len(argv) > 2 else 180
    lo = int(argv[3]) if len(argv) > 3 else 0
    hi = int(argv[4]) if len(argv) > 4 else 10 ** 6
    _, got = items(fp, "en")
    shown, buf = 0, []
    for idx, g in enumerate(got):
        if not (lo <= idx < hi):
            continue
        sp = spans_of(g["text"])
        cur = " · ".join(g["text"][s:e] for s, e in sp)
        if len(cur) <= limit and len(sp) == 1:
            continue
        shown += 1
        buf.append("#%d  [%s]  bold=%d runs=%d" % (idx, g["topic"], len(cur), len(sp)))
        buf.append(g["text"])
        buf.append("")
    store(out, "\n".join(buf) + "\n")
    print("-- %s: %d fields written of %d, limit %d, window %d..%d -> %s"
          % (fp.name, shown, len(got), limit, lo, hi, out))


def cmd_apply(argv):
    """edits.json: [{"file":..,"i":N,"start":"anchor","end":"anchor"}, ...]"""
    edits = json.loads(pathlib.Path(argv[0]).read_text(encoding="utf-8"))
    by_file = {}
    for e in edits:
        by_file.setdefault(e["file"], []).append(e)

    total, problems = 0, []
    for fname, group in by_file.items():
        fp = DATA / fname
        js = load(fp)
        original = js
        _, got = items(fp, "en")
        # apply back-to-front so earlier offsets stay valid
        group = sorted(group, key=lambda e: -got[e["i"]]["start"])
        for e in group:
            g = got[e["i"]]
            plain = g["text"].replace("**", "")
            a = plain.find(e["start"])
            if a < 0:
                problems.append("%s #%d: start anchor not found: %r" % (fname, e["i"], e["start"][:40]))
                continue
            if plain.find(e["start"], a + 1) >= 0:
                problems.append("%s #%d: start anchor not unique: %r" % (fname, e["i"], e["start"][:40]))
                continue
            b = plain.find(e["end"], a)
            if b < 0:
                problems.append("%s #%d: end anchor not found after start: %r" % (fname, e["i"], e["end"][:40]))
                continue
            if plain.find(e["end"], b + 1) >= 0:
                problems.append("%s #%d: end anchor not unique: %r" % (fname, e["i"], e["end"][:40]))
                continue
            b += len(e["end"])
            new_field = plain[:a] + "**" + plain[a:b] + "**" + plain[b:]
            if new_field.count("**") != 2:
                problems.append("%s #%d: parity" % (fname, e["i"]))
                continue
            js = js[:g["start"]] + new_field + js[g["end"]:]
            total += 1
        if js != original:
            assert original.replace("**", "") == js.replace("**", ""), \
                "%s: a non-** byte changed" % fname
            store(fp, js)
            # re-read and re-check on disk
            back = load(fp)
            assert back == js, "%s: readback differs" % fname
            assert original.replace("**", "") == back.replace("**", ""), \
                "%s: readback differs outside **" % fname
            _, again = items(fp, "en")
            for k, g in enumerate(again):
                if g["text"].count("**") != 2:
                    problems.append("%s #%d: %d ** on disk" % (fname, k, g["text"].count("**")))
        print("%-34s %3d edits applied" % (fname, len(group)))

    for p in problems:
        print("PROBLEM " + p)
    print("%d fields re-marked, %d problems" % (total, len(problems)))
    return 1 if problems else 0


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "stats"
    fn = {"stats": cmd_stats, "dump": cmd_dump, "apply": cmd_apply}[cmd]
    sys.exit(fn(sys.argv[2:]) or 0)
