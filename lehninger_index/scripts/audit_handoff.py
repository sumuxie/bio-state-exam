# Integrity audit of the handoff files. v2: the first version fired 325 times because it
# checked per-line, and markdown prose is hard-wrapped -- a bold span or a sentence legitimately
# crosses a line break. Check per PARAGRAPH instead, which is the unit that can actually be
# truncated.
import io, os, re

ROOT = r"C:\Users\Admin\Downloads\bio-state-exam"
# This list is hard-coded, so a new handoff file is NOT audited until it is added
# here -- CORE2_DEPTH_RUN.md scored 0 hits on its first audit run, meaning nothing
# would have caught it rotting. Add every new handoff file to this list.
FILES = ["HANDOFF_LEHNINGER.md", "HANDOFF.md", "lehninger_index/README.md",
         "CORE_HANDOFF.md", "CORE1_APP.md", "CORE2_LEHNINGER.md", "CORE3_STRUCTURES.md",
         "CORE2_DEPTH_RUN.md"]
out = io.open(os.path.join(ROOT, "lehninger_index", "_audit.txt"), "w", encoding="utf-8")
def p(*a): out.write(" ".join(str(x) for x in a) + "\n")

ENDS_OK = tuple(".:!?*`)]—。：、>-")
total = 0
for fn in FILES:
    lines = io.open(os.path.join(ROOT, fn), encoding="utf-8").read().split("\n")
    p("=" * 78); p(f"{fn}  ({len(lines)} lines)"); p("=" * 78)
    issues = []

    # ---- mask out fenced code blocks first: a ```js schema block contains lines ending in
    #      "]," and comments, which look like truncated prose but are not ----
    fenced = [False] * (len(lines) + 1)
    in_fence = False
    for i, ln in enumerate(lines, 1):
        if ln.strip().startswith("```"):
            fenced[i] = True
            in_fence = not in_fence
            continue
        fenced[i] = in_fence

    # ---- paragraphs: group consecutive non-blank, non-fenced lines ----
    paras, cur, start = [], [], None
    for i, ln in enumerate(lines, 1):
        if ln.strip() and not fenced[i]:
            if start is None: start = i
            cur.append(ln)
        else:
            if cur: paras.append((start, cur)); cur, start = [], None
    if cur: paras.append((start, cur))

    for start, blk in paras:
        joined = "\n".join(blk)
        is_table = all(l.strip().startswith("|") for l in blk if l.strip())
        if is_table:
            counts = [l.count("|") for l in blk]
            mode = max(set(counts), key=counts.count)
            for k, c in enumerate(counts):
                if c != mode:
                    issues.append((start + k, f"TABLE ROW malformed: {c} pipes vs {mode}",
                                   blk[k].strip()[:70]))
            continue
        # bold must balance across the whole paragraph. Strip inline code spans first --
        # `claude/**` is a glob in backticks, not an unclosed bold marker.
        nocode = re.sub(r"`[^`]*`", "", joined)
        if nocode.count("**") % 2 != 0:
            issues.append((start, "UNBALANCED ** across paragraph", blk[0].strip()[:70]))
        # last line of a prose paragraph must not stop mid-sentence
        last = blk[-1].rstrip()
        if last.startswith(("|", "#", "```")): continue
        if not last.endswith(ENDS_OK) and not re.search(r"\|\s*$", last):
            issues.append((start + len(blk) - 1, "PARAGRAPH TRUNCATED (no terminal punctuation)",
                           last[-75:]))

    # ---- duplicate headings ----
    heads = {}
    for i, ln in enumerate(lines, 1):
        if re.match(r"^#{1,4} ", ln): heads.setdefault(ln.strip(), []).append(i)
    for h, ii in heads.items():
        if len(ii) > 1:
            issues.append((ii[0], f"DUPLICATE HEADING at lines {ii}", h[:65]))

    # ---- section numbering must be monotonic within a level ----
    secs = [(i, m.group(1)) for i, ln in enumerate(lines, 1)
            for m in [re.match(r"^## (\d+)\.", ln)] if m]
    nums = [int(n) for _, n in secs]
    if nums != sorted(nums):
        issues.append((secs[0][0], f"SECTION ORDER not monotonic: {nums}", ""))
    subs = {}
    for i, ln in enumerate(lines, 1):
        m = re.match(r"^### (\d+)([a-z])\.", ln)
        if m: subs.setdefault(m.group(1), []).append((i, m.group(2)))
    for parent, lst in subs.items():
        letters = [l for _, l in lst]
        if letters != sorted(letters):
            issues.append((lst[0][0], f"SUBSECTION ORDER {parent}: {letters} not alphabetical", ""))

    # ---- code fences ----
    if sum(1 for ln in lines if ln.strip().startswith("```")) % 2 != 0:
        issues.append((0, "UNBALANCED CODE FENCES", ""))

    issues.sort()
    if not issues: p("  clean")
    for ln, what, ctx in issues:
        p(f"  L{ln:<5} {what}")
        if ctx: p(f"          ...{ctx}")
    total += len(issues)
    p("")

# ---------------------------------------------------------------------------------------
# STALENESS. Added 2026-08-07. The formatting checks above cannot see the failure that
# actually costs a session time: a number in the handoff that WAS true and no longer is.
# Two had rotted by the eleventh node -- LEHNINGER_START.md understated the archive's size by
# 15%, weakening the one warning that stops a session reading 42k tokens of it, and section 14c
# froze "208 topics (207 cz, 1 lehninger)" into the text as what a clean run "currently prints",
# eleven nodes out of date. A reader who trusts either wastes a turn. So: recompute the live
# figures and report any current-state claim that disagrees.
p("=" * 78); p("STALENESS (live data vs what the handoffs claim)"); p("=" * 78)
stale = 0

start = io.open(os.path.join(ROOT, "LEHNINGER_START.md"), encoding="utf-8").read()
for fn, pat in (("HANDOFF_LEHNINGER.md", r"it is (\d+) KB"),
                ("HANDOFF.md", r"`HANDOFF\.md` \((\d+) KB")):
    real = os.path.getsize(os.path.join(ROOT, fn)) // 1024
    m = re.search(pat, start)
    if not m:
        p("  SIZE CLAIM MISSING for %s -- the do-not-read warning may have been dropped" % fn)
        stale += 1
    elif abs(int(m.group(1)) - real) > 5:
        p("  SIZE STALE   %s: handoff says %s KB, actually %d KB" % (fn, m.group(1), real))
        stale += 1

# Only the CURRENT-STATE block at the top of LEHNINGER_START.md is checked. The per-node
# sections 13a..13m record counts as they were when each node was written; that is history.
try:
    import sys
    sys.path.insert(0, os.path.join(ROOT, "lehninger_index", "scripts"))
    from step5_check import parse_nodes
    html = io.open(os.path.join(ROOT, "biochemie_pro", "index.html"), encoding="utf-8").read()
    T = []
    for f in re.findall(r'<script src="data/([^"]+\.js)"', html):
        T.extend(parse_nodes(io.open(os.path.join(ROOT, "biochemie_pro", "data", f),
                                     encoding="utf-8").read()))
    keys = {}
    for t in T:
        k = t.get("topicKey")
        if k:
            keys.setdefault(k, set()).add(t.get("book")
                                          or ("entity" if t.get("kind") == "entity" else "cz"))
    live = {"topics": len(T),
            "lehninger": sum(1 for t in T if t.get("book") == "lehninger"),
            "topicKeys": len(keys),
            "multi": sum(1 for v in keys.values() if len(v) > 1)}
    p("  live: %d topics, %d lehninger, %d topicKeys, %d joining both books"
      % (live["topics"], live["lehninger"], live["topicKeys"], live["multi"]))
    head = start.split("## The rules that actually bite")[0]
    for pat, key in ((r"over \*\*(\d+)\*\* nodes", "topics"),
                     (r"\+ (\d+) lehninger", "lehninger"),
                     (r"\*\*(\d+)\*\* distinct", "topicKeys"),
                     (r"Exactly (\d+) keys join", "multi")):
        m = re.search(pat, head)
        if not m:
            p("  COUNT MISSING  LEHNINGER_START.md no longer states %s" % key); stale += 1
        elif int(m.group(1)) != live[key]:
            p("  COUNT STALE    LEHNINGER_START.md says %s=%s, live is %d"
              % (key, m.group(1), live[key])); stale += 1
    if "| Lehninger depth layer |" in head:
        row = head.split("| Lehninger depth layer |")[1].split("|")[0]
        listed = len(re.findall(r"`L-\d+-\d+-\d+`", row))
        if listed != live["lehninger"]:
            p("  LIST STALE     depth-layer row lists %d node ids, live is %d"
              % (listed, live["lehninger"])); stale += 1
except Exception as e:
    p("  could not recompute live counts: %s" % e); stale += 1

# A frozen count is "currently prints ... <N> topics". Prose that merely DISCUSSES the
# anti-pattern -- as the comment above and section 13m both do -- says "currently prints" with no
# count after it. Requiring an actual topic count in the span is what separates the two; without
# it this check fired three times on the very text explaining why it exists, which is the same
# reporting-its-own-limitation failure the citation checker kept producing.
for fn in ("HANDOFF_LEHNINGER.md", "LEHNINGER_START.md"):
    txt = io.open(os.path.join(ROOT, fn), encoding="utf-8").read()
    for m in re.finditer(r"currently (?:prints|reports)[^.]{0,120}", txt):
        if not re.search(r"\d+\s+topics", m.group(0)):
            continue
        p("  PRESENT TENSE  %s: %s" % (fn, m.group(0)[:96]))
        p("                 counts move with every node -- point at where to look, do not freeze")
        stale += 1

# The four CORE_* files, added 2026-08-08. Until now this checker watched only the files
# CORE_HANDOFF.md tells every session NOT to read, and ignored the four it tells them to read
# instead -- so the staleness guard was pointed at the archive while the live entry point drifted
# unchecked. That is exactly backwards. `live` was computed above; reuse it.
#
# Only counts that MUST track the data are checked. CORE2's prose deliberately contains historical
# numbers ("前 20 个", "第 64-67 个"), so the patterns below are anchored to the current-state
# sentences and nothing else.
CORE_COUNTS = [
    ("CORE_HANDOFF.md",   r"117 个 section 做了 (\d+) 个",      "lehninger"),
    ("CORE2_LEHNINGER.md", r"\*\*已写 (\d+) 个 L- 节点",          "lehninger"),
    ("CORE2_LEHNINGER.md", r"`mustKnow` \*\*(\d+)/\d+，零缺口",   "topics"),
    ("CORE2_LEHNINGER.md", r"`topicKey` \*\*(\d+)\*\* 个",        "topicKeys"),
]
try:
    for fn, pat, key in CORE_COUNTS:
        txt = io.open(os.path.join(ROOT, fn), encoding="utf-8").read()
        m = re.search(pat, txt)
        if not m:
            p("  COUNT MISSING  %s no longer states %s (pattern %r)" % (fn, key, pat))
            stale += 1
        elif int(m.group(1)) != live[key]:
            p("  COUNT STALE    %s says %s=%s, live is %d"
              % (fn, key, m.group(1), live[key]))
            stale += 1
except NameError:
    p("  CORE counts not checked -- live figures unavailable"); stale += 1

# CORE_HANDOFF.md is the entry point, so the thing that must never rot is its own claim about
# how big the files it forbids are. A session that reads "302 KB" and skips the archive is
# behaving correctly; one that reads an understated number may decide to open it.
core = io.open(os.path.join(ROOT, "CORE_HANDOFF.md"), encoding="utf-8").read()
for fn, pat in (("HANDOFF_LEHNINGER.md", r"`HANDOFF_LEHNINGER\.md` (\d+) KB"),
                ("HANDOFF.md", r"`HANDOFF\.md` (\d+) KB")):
    real = os.path.getsize(os.path.join(ROOT, fn)) // 1024
    m = re.search(pat, core)
    if not m:
        p("  SIZE CLAIM MISSING in CORE_HANDOFF.md for %s" % fn); stale += 1
    elif abs(int(m.group(1)) - real) > 5:
        p("  SIZE STALE   CORE_HANDOFF.md says %s is %s KB, actually %d KB"
          % (fn, m.group(1), real)); stale += 1

# Every data file on disk must have a <script> tag, or the node exists and silently never loads.
# This is the trap CORE2 warns about in prose; warning about it is not the same as catching it.
try:
    import glob as _glob
    html_src = io.open(os.path.join(ROOT, "biochemie_pro", "index.html"), encoding="utf-8").read()
    tagged = set(re.findall(r'<script src="data/([^"]+\.js)"', html_src))
    on_disk = {os.path.basename(f)
               for f in _glob.glob(os.path.join(ROOT, "biochemie_pro", "data", "*.js"))}
    for miss in sorted(on_disk - tagged):
        p("  NOT LOADED     biochemie_pro/data/%s has no <script> tag in index.html" % miss)
        stale += 1
    for ghost in sorted(tagged - on_disk):
        p("  MISSING FILE   index.html loads data/%s, which is not on disk" % ghost)
        stale += 1
except Exception as e:
    p("  could not cross-check index.html against data/: %s" % e); stale += 1

if not stale: p("  clean")
p("")
total += stale

p(f"TOTAL: {total}")
out.close()
print("done", total)
