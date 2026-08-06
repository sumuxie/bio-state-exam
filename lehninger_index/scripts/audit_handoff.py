# Integrity audit of the handoff files. v2: the first version fired 325 times because it
# checked per-line, and markdown prose is hard-wrapped -- a bold span or a sentence legitimately
# crosses a line break. Check per PARAGRAPH instead, which is the unit that can actually be
# truncated.
import io, os, re

ROOT = r"C:\Users\Admin\Downloads\bio-state-exam"
FILES = ["HANDOFF_LEHNINGER.md", "HANDOFF.md", "lehninger_index/README.md"]
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

p(f"TOTAL: {total}")
out.close()
print("done", total)
