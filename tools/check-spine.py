"""Lint the 速通简洁版 spines against the seven house rules.

    python tools/check-spine.py            # every spine
    python tools/check-spine.py L-8-2-1    # one

WHY THIS EXISTS
Every complaint the reader has made about this material has been the same defect
wearing a different coat: a concept used before it is established. "很模糊",
"突然冒出来一个前面也没讲过的概念", "the model 指的是什么模型", "配上对是和谁配",
"为啥突然开始说内含子". Five reports, one bug.

Re-reading does not catch it — I read one spine four times and missed `phage`, used
three times in a sentence without ever being called a virus, and `stacking`, defined
in terms of itself. A machine catches it in a second, so the reader should never have
to be the linter.

WHAT IT CHECKS
  COLD      a technical noun used before this spine introduces or defines it. The
            vocabulary is the full app's own 3,060 glossary terms, so it knows what
            counts as technical without a hand-kept list.
  CIRCULAR  a term defined using itself ("the stacked bases hold each other by stacking").
  RULE 1    rhetorical inversion — "not X, but Y", "并不是…而是".
  RULE 2    an unbound definite reference — "the model", "this section", "that sentence".
  RULE 4    commentary about the textbook — the Czech node, what an examiner asks.
  RULE 6    a scope word with no scope — "the stretches that", "那些片段".
  FORMAT    ** parity per field; `****`, two bold runs with nothing between them,
            which renders as an empty <strong> and loses the boundary the author
            meant — it happens almost only in Chinese, which has no space to put
            between them; en and cn both present; a missing `src`; and a `see` that
            points at a node id that does not exist.

A spine may also declare an `assumed` list — what it takes the reader to already
hold. The linter honours it, so an omission is on the record instead of invisible.
Use it for a noun that is NAMED AS AN EXAMPLE (the ligand an affinity tag binds) and
not for one the step actually leans on; that one gets introduced in the prose.

RULES 1, 2, 6 AND CIRCULAR ARE DELIBERATELY NARROW. The first, broader versions
flagged correct prose — "the point of maximum buffering power", an ordinary
contrastive clause, a definition that names a family member after defining the
family. A linter with false positives is one the author learns to ignore, which is
the exact failure it exists to prevent. When it flags something, fix the prose.

Exit code is non-zero if anything is flagged, so it can gate a commit.
"""
import json, pathlib, re, sys, collections

ROOT = pathlib.Path(__file__).resolve().parent.parent
LITE = ROOT / "biochemie_lite"
TOPICS = ROOT / "tools" / "topics.json"

# ---------------------------------------------------------------- load the spines
def strip_comments(js):
    """Remove // and /* */ comments, but never inside a string. The spine files carry
    explanatory comments inside the object literal, and a naive regex would also eat
    the `//` in a URL or the `/*` in a sequence written in prose."""
    out, i, n, instr, esc_ = [], 0, len(js), None, False
    while i < n:
        c = js[i]
        if instr:
            out.append(c)
            if esc_: esc_ = False
            elif c == "\\": esc_ = True
            elif c == instr: instr = None
            i += 1
            continue
        if c in '"\'':
            instr = c; out.append(c); i += 1; continue
        if c == "/" and i + 1 < n and js[i+1] == "/":
            j = js.find("\n", i); i = n if j < 0 else j; continue
        if c == "/" and i + 1 < n and js[i+1] == "*":
            j = js.find("*/", i + 2); i = n if j < 0 else j + 2; continue
        out.append(c); i += 1
    return "".join(out)

def js_to_json(blob):
    """A spine object literal as JSON: bare keys quoted, trailing commas dropped.

    The keys are quoted with the STRINGS MASKED OUT first. Doing it on the raw text
    with a line-anchored regex missed the inline `{ id: …, en: … }` of a `see` entry,
    and doing it un-anchored would rewrite anything inside the prose that happens to
    look like `word:` after a comma — which biochemistry prose does constantly."""
    blob = strip_comments(blob)
    strings, masked, i, n = [], [], 0, len(blob)
    while i < n:
        c = blob[i]
        if c in '"\'':
            q, j, esc_ = c, i + 1, False
            while j < n:
                if esc_: esc_ = False
                elif blob[j] == "\\": esc_ = True
                elif blob[j] == q: break
                j += 1
            raw = blob[i:j+1]
            masked.append("\x00%d\x00" % len(strings))
            # normalise single-quoted literals to double-quoted JSON
            strings.append('"' + raw[1:-1].replace('"', '\\"') + '"' if q == "'" else raw)
            i = j + 1
            continue
        masked.append(c)
        i += 1
    js = "".join(masked)
    js = re.sub(r"([{,]\s*|^\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:", r'\1"\2":', js, flags=re.M)
    js = re.sub(r",(\s*[}\]])", r"\1", js)
    return re.sub(r"\x00(\d+)\x00", lambda m: strings[int(m.group(1))], js)

def load_spines():
    """Read the spine files without a JS engine: they are plain object literals, so
    pull each `window.BIOLITE_SPINE["id"] = { ... };` block and hand it to a very
    small JS-object-to-JSON conversion. Anything it cannot parse is reported, not
    skipped silently."""
    out, bad = {}, []
    for f in sorted((LITE / "data").glob("spine_*.js")):
        # Comments must go BEFORE the braces are counted, not after. An object-level
        # comment containing an apostrophe ("the full app's title") made the scanner
        # think a string had opened, and from there every brace was miscounted.
        src = strip_comments(f.read_text(encoding="utf-8"))
        for m in re.finditer(r'window\.BIOLITE_SPINE\["([^"]+)"\]\s*=\s*', src):
            nid, i = m.group(1), m.end()
            depth, j, instr, esc_ = 0, i, None, False
            while j < len(src):
                c = src[j]
                if instr:
                    if esc_: esc_ = False
                    elif c == "\\": esc_ = True
                    elif c == instr: instr = None
                elif c in '"\'': instr = c
                elif c == "{": depth += 1
                elif c == "}":
                    depth -= 1
                    if depth == 0: break
                j += 1
            try:
                out[nid] = json.loads(js_to_json(src[i:j+1]))
            except Exception as e:
                bad.append((f.name, nid, str(e)[:120]))
    return out, bad

# ------------------------------------------------------------- technical vocabulary
def glossary_terms():
    """Every term the full app defines anywhere — what counts as a technical noun."""
    if not TOPICS.exists():
        return set()
    terms = set()
    for t in json.loads(TOPICS.read_text(encoding="utf-8")):
        for x in t.get("terms") or []:
            for k in ("en", "cz"):
                v = (x.get(k) or "").strip()
                if 3 < len(v) < 40:
                    terms.add(v.lower())
    return terms

# Rule 1 is about a sentence whose MAIN FRAME is the inversion — "双螺旋不是谁宣布的，
# 是四组实验逼出来的". It is not about an ordinary contrastive clause: "the extension
# does not anneal to the target, but it is copied into the product anyway" is plain
# English, and "它是表中唯一一个不是酶、而是化学试剂的条目" is plain Chinese. The broad
# version flagged both, so it is anchored to the start of a sentence.
RULE1 = re.compile(r"(?:^|[.。！？!?;；]\s*)(?:It is not|This is not|That is not)\b[^.]{0,60}?,\s*but\b"
                   r"|(?:^|[。！？；])\s*[^。！？；]{0,10}?(?:并不是|不是)[^。！？；]{0,20}?，\s*(?:而)?是")
# Rule 2 is about a definite reference to something never named. "the point of maximum
# buffering power" and "the table collects them" are ordinary noun phrases, so `point`,
# `table` and `figure` came out of the list — they fired on correct prose far more often
# than on the defect.
RULE2 = re.compile(r"\bthe (?:model|section|node|correction)\b(?!\s+(?:above|below|here|is called))"
                   r"|这一节|上面那句|那个模型")
RULE4 = re.compile(r"\bCzech\b|捷克|\bexaminer\b|考官|\bthis section (?:supplies|adds)\b|\bLehninger(?:'s)? (?:table|node|section)\b")
# Narrowed after its first run. The broad version — `the (parts|regions|stretches)
# that` — flagged two sentences that were correct, including the very sentence that
# DEFINES an intron ("the stretches that get cut out are introns"). A linter with
# false positives is one the author learns to ignore, which is the failure it exists
# to prevent, so it only matches the vague constructions actually seen in the wild.
RULE6 = re.compile(r"配上对的那些|那些片段(?!叫|是)"
                   r"|\bthe stretches that do\b|\bthe (?:parts|bits) that do\b")

def sentences(s):
    return [x for x in re.split(r"(?<=[.!?。！？])\s*", str(s or "")) if x.strip()]

NODE_TOPIC = {}   # node id -> topicKey, filled in main(); used by the SEE check


def check(nid, sp, vocab, all_nodes):
    problems = []
    steps = sp.get("steps") or []
    if not steps:
        problems.append(("FORMAT", 0, "no steps"))
    # A spine may DECLARE what it assumes the reader already has, in `assumed`. That
    # is better than the linter quietly not noticing: an assumption written down can
    # be argued with, and when the reader says "this came from nowhere" the list is
    # the first place to look.
    defined = set(x.lower() for x in sp.get("assumed") or [])
    for t in sp.get("terms") or []:
        for k in ("en", "cn"):
            v = (t.get(k) or "").lower()
            for part in re.split(r"[／/,，]| and ", v):
                if part.strip():
                    defined.add(part.strip())
        # Circular definition — but only if the term appears in the FIRST sentence,
        # before anything has said what it is. "A family of plasma membrane lectins…
        # P-selectin on endothelium…" defines selectin and then names a member, which
        # is correct; the whole-definition version flagged it and several others.
        name = (t.get("en") or "").lower().strip()
        d = (t.get("def_en") or "").lower()
        first = re.split(r"(?<=[.!?])\s", d)[0] if d else ""
        if name and len(name) > 3 and re.search(r"\b" + re.escape(name) + r"\b", first):
            problems.append(("CIRCULAR", 0, f"term '{t.get('en')}' defined using itself"))

    seen_text = ""
    for i, s in enumerate(steps, 1):
        en, cn = s.get("en") or "", s.get("cn") or ""
        if not en or not cn:
            problems.append(("FORMAT", i, "step is missing en or cn"))
        for field, val in (("en", en), ("cn", cn)):
            if val.count("**") % 2:
                problems.append(("FORMAT", i, f"odd ** count in {field}"))
            # Two bold runs with nothing between them. Renders as an empty <strong>
            # and loses the boundary the author meant; Chinese has no space to
            # separate them with, so it happens there most.
            if "****" in val:
                k = val.index("****")
                problems.append(("FORMAT", i,
                                 f"adjacent bold runs (****) in {field}: …{val[max(0,k-30):k+34]}…"))
            # NOT CHECKED, and the attempt is recorded so it is not made again:
            #
            #   `**A** **B**`  is CORRECT. Two bold runs with a space between them
            #                  render as two bold runs. Flagging it produced hundreds
            #                  of false positives on prose that was right.
            #   >75% bolded    is not a defect either. A spine step often IS one
            #                  claim, and bolding nearly all of it is the house style.
            #
            # Nested `**A **B** C**` is a genuine defect — the markers toggle, so B
            # renders PLAIN, inside-out from what was meant — but it has an even
            # marker count and no reliable signature, so no check here can separate it
            # from correct prose. One agent found four by hand and said so. Until
            # there is a test that does not cry wolf, this stays a reading job: a
            # linter with false positives is one its author learns to ignore.
        if not s.get("src"):
            problems.append(("FORMAT", i, "no src"))

        blob = en + " " + cn
        for label, rx in (("RULE1", RULE1), ("RULE2", RULE2), ("RULE4", RULE4), ("RULE6", RULE6)):
            m = rx.search(blob)
            if m:
                problems.append((label, i, f"…{blob[max(0,m.start()-40):m.end()+40]}…"))

        # cold start: a glossary term used here, not defined in this spine, and not
        # explained in the sentence that first uses it
        low = en.lower()
        for term in vocab:
            if len(term) < 5 or term in defined:
                continue
            if not re.search(r"(?<![a-z])" + re.escape(term) + r"(?![a-z])", low):
                continue
            if term in seen_text:
                continue                      # introduced in an earlier step
            first = next((x for x in sentences(en) if term in x.lower()), en)
            explained = re.search(
                r"\b(?:is|are|means?|called|named)\b|\bwhich is\b|—|:|，即|就是|叫", first)
            if not explained:
                problems.append(("COLD", i, f"'{term}' used with no introduction"))
        seen_text += " " + low

        for r in s.get("see") or []:
            if r.get("id") not in all_nodes:
                problems.append(("FORMAT", i, f"see points at a node that does not exist: {r.get('id')}"))
            # A merged topic shadows its own members, so a 详见 pointing at one of them
            # renders the very chain the reader is already reading. Not a broken link —
            # a link that promises more and delivers the same page, which is worse,
            # because the material it promised is genuinely unreachable. Deterministic,
            # so this cannot cry wolf: same topicKey, same rendered spine.
            elif nid.startswith("key:") and NODE_TOPIC.get(r.get("id")) == nid[4:]:
                problems.append(("SEE", i, f"see points at {r.get('id')}, a node this "
                                           f"same merged topic shadows — it lands back here"))
    return problems

def main():
    want = sys.argv[1:] if len(sys.argv) > 1 else None
    spines, bad = load_spines()
    if bad:
        for f, nid, e in bad:
            print(f"UNPARSEABLE  {f}  {nid}: {e}")
    nodes = set()
    idx = LITE / "data" / "nodes.js"
    if idx.exists():
        m = re.search(r"=\s*(\[.*\]);", idx.read_text(encoding="utf-8"), re.S)
        if m:
            js = json.loads(m.group(1))
            nodes = {n["id"] for n in js}
            NODE_TOPIC.update({n["id"]: n.get("topicKey") for n in js})
    vocab = glossary_terms()
    print(f"{len(spines)} spine(s), vocabulary of {len(vocab)} glossary terms\n")

    total = 0
    for nid, sp in sorted(spines.items()):
        if want and nid not in want:
            continue
        probs = check(nid, sp, vocab, nodes)
        n_steps = len(sp.get("steps") or [])
        if not probs:
            print(f"  OK    {nid:12s} {n_steps:2d} steps")
            continue
        total += len(probs)
        print(f"  {len(probs):3d}   {nid:12s} {n_steps:2d} steps")
        for kind, step, msg in probs:
            print(f"          {kind:9s} step {step:2d}  {msg}")
    print(f"\n{total} problem(s)" if total else "\nno problems")
    return 1 if (total or bad) else 0

if __name__ == "__main__":
    sys.exit(main())
