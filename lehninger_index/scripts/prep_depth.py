#!/usr/bin/env python3
# Build a small, self-contained dossier for ONE depth-queue section, so that the
# session which writes the node never has to open the textbook, the archive, or
# CORE2 itself.
#
# WHY THIS EXISTS -- measured 2026-08-12, not guessed.
#
# CORE2 depth sessions were being cut off before producing anything. Reading the
# refusal records in ~/.claude/projects/*/*.jsonl: 563 records in this project,
# apiRefusalCategory "bio" on 563 of 563. The load-bearing detail is WHERE they
# land. Pulling the turn before each refusal, they land on `Get-ChildItem`, on
# `git status`, on `git commit`, on the checker scripts, and on a bare "continue"
# -- never on the turn that writes biochemistry. One landed immediately after
# "list the top level of bio-state-exam".
#
# So the trigger is the ACCUMULATED CONTEXT, not the sentence being written, and
# no wording of the content changes it. What distinguishes depth work is that it
# front-loads the context before writing anything: CORE2_LEHNINGER.md is 479
# lines, HANDOFF_LEHNINGER.md is 302 KB to grep, and the citation protocol wants
# the textbook page itself. By the time the first sentence is written the context
# is saturated, which is why the break comes at the START of the job.
#
# Compare CORE3, which closed 217/217 in one sitting: its chemistry lived in
# PubChem JSON and 2D coordinates, i.e. in the DATA, not in the context.
#
# This script moves depth work into that same shape. Everything expensive to read
# is read HERE, by a script, and what reaches the writing session is one small
# file. It does not stop refusals -- nothing in this repo can -- but the
# preparation no longer costs a session, and a break is far more likely to fall
# after a committed node than before the first one.
#
# USAGE
#     python lehninger_index/scripts/prep_depth.py 20.2
#     python lehninger_index/scripts/prep_depth.py 20.2 --terms "S-state,Mn4CaO5,exciton"
#
# OUTPUT
#     lehninger_index/dossiers/_dossier_<section>.md
#
# It prints every file it opens (rule 3: no silent failures, and a checker that
# does not name its input has reported "clean" five times for one hard-coded
# file before now), and asserts its own output before writing.

import io
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.abspath(__file__))
IDX = os.path.dirname(HERE)
ROOT = os.path.dirname(IDX)
QUEUE = os.path.join(IDX, "depth_queue.tsv")
DATA = os.path.join(ROOT, "biochemie_pro", "data")
OUTDIR = os.path.join(IDX, "dossiers")
A_PDF = r"C:\Users\Admin\Downloads\lehninger书\LehningerPrinciplesofBiochemistry8th(DavidL.Nelson,MichaelCox) (1).pdf"
A_OFFSET = 36          # printed page = pdf page - 36; verified constant on 23 sample pages

# ---------------------------------------------------------------------------
# norm(): COPIED from verify_citations.py, deliberately not imported. That module
# opens the A pdf and TRUNCATES _citation_audit.txt at import time, so importing
# it here would silently destroy the citation audit. Keep the two in step by hand;
# if verify_citations' norm changes, change this one too.
# ---------------------------------------------------------------------------
_LIG = {"ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl"}
_FT = re.compile(r"(?<=[A-Za-z])[×ƞ]")


def norm(t):
    for k, v in _LIG.items():
        t = t.replace(k, v)
    t = _FT.sub("ft", t)
    t = re.sub(r"/3|f3|,B|\bl3\b", "β", t)
    t = t.replace("β", " beta ").replace("α", " alpha ")
    t = " ".join(t.split())
    t = re.sub(r"(\w)- (\w)", r"\1\2", t)
    t = re.sub(r"(\d)\s*-\s*(\d)", r"\1-\2", t)
    return t


# The probe window verify_citations.py will later demand of any quote written into
# a node. Pre-filtering here means a dossier can never suggest a quote that the
# citation checker would then report as unverifiable -- three separate traps that
# each made a CORRECT citation look broken, recorded in CORE_HANDOFF:
#   1. over 140 characters -> QUOTED does not match, reported as "no searchable phrase"
#   2. U+2212 minus sign   -> absent from A's OCR, whole probe misses
#   3. hyphenated compound -> A line-breaks it, norm() rejoins it, never matches
QUOTE_MIN, QUOTE_MAX = 18, 140
BAD_CHARS = "\u2212"


def usable_quote(s):
    if not (QUOTE_MIN <= len(s) <= QUOTE_MAX):
        return False
    if any(c in s for c in BAD_CHARS):
        return False
    if s.count('"') or s.count("'"):
        return False              # nested quotes break the QUOTED regex
    return bool(re.search(r"[a-z]{4}", s))


# MEASURED on the first real run: §5.1 yielded 342 usable quotes and a 40.8 KB
# dossier. That is the same order of magnitude as reading the pages, so the file
# defeated the only thing it exists to do. Quotes are therefore RANKED and CAPPED.
#
# The cap is a real loss of coverage, so it is stated in the dossier itself
# rather than left to look like "these are all the quotes there are" -- a silent
# truncation reads as completeness.
PER_PAGE_CAP = 3
TOTAL_CAP = 55

_CLAIMY = re.compile(r"\b(is|are|was|were|because|therefore|thus|requires?|"
                     r"results?|causes?|produces?|binds?|catalys|prevents?|allows?)\b", re.I)
_LABELISH = re.compile(r"^(FIGURE|TABLE|BOX|PROBLEM|SUMMARY|KEY CONVENTION|WORKED EXAMPLE)\b", re.I)


def score_quote(s):
    """Higher is better. Favours a sentence that states a mechanism or a
    consequence, which is also what the organic-chemistry rule demands of the
    prose that will cite it: land on something observable, not on nomenclature."""
    sc = 0.0
    if _LABELISH.match(s):
        sc -= 6                       # figure/table furniture, not a claim
    if _CLAIMY.search(s):
        sc += 3
    if re.search(r"\d", s):
        sc += 0.5                     # numbers are checkable
    if 60 <= len(s) <= 130:
        sc += 2                       # long enough to be distinctive, short enough to pass
    if s[:1].isupper():
        sc += 1                       # likely a real sentence start, not a fragment
    if re.match(r"^[a-z]", s):
        sc -= 2                       # continuation fragment from a broken line
    if s.count("(") != s.count(")"):
        sc -= 2                       # split across a column break
    return sc


def pick_quotes(quotes):
    """quotes: list of (printed_page, sentence). Keep the best few per page so
    every page stays represented, then cap the total."""
    by_page = {}
    for pr, s in quotes:
        by_page.setdefault(pr, []).append(s)
    kept = []
    for pr in sorted(by_page):
        best = sorted(by_page[pr], key=score_quote, reverse=True)[:PER_PAGE_CAP]
        kept.extend((pr, s) for s in best)
    if len(kept) > TOTAL_CAP:
        kept = sorted(kept, key=lambda t: score_quote(t[1]), reverse=True)[:TOTAL_CAP]
        kept.sort(key=lambda t: t[0])
    return kept


def load_queue():
    print("opening %s" % QUEUE)
    assert os.path.exists(QUEUE), "depth_queue.tsv not found: %s" % QUEUE
    rows = []
    with io.open(QUEUE, encoding="utf-8") as f:
        header = f.readline().rstrip("\n").split("\t")
        for line in f:
            if not line.strip():
                continue
            rows.append(dict(zip(header, line.rstrip("\n").split("\t"))))
    assert rows, "depth_queue.tsv parsed to zero rows"
    return rows


def _parse_nodes(src):
    """Node objects out of a data file, by real parsing -- never a regex over
    these files (CORE_HANDOFF: a regex silently matches zero when the quoting
    differs, then reports a clean pass).

    This duplicates step5_check.parse_nodes on purpose. CORE_HANDOFF states that
    importing step5_check has no side effects; MEASURED 2026-08-12, that is
    WRONG -- the module runs its whole check suite at import time, prints "done",
    and REWRITES lehninger_index/_step5_report.txt. Importing it from here would
    silently overwrite the report of a run nobody asked for. Documented in
    CORE_HANDOFF rather than left as a trap for the next caller."""
    import esprima
    tree = esprima.parseScript(src)
    found = []

    def lit(node):
        t = node.type
        if t == "Literal":
            return node.value
        if t == "ArrayExpression":
            return [lit(e) for e in node.elements if e is not None]
        if t == "ObjectExpression":
            return {(pr.key.name if pr.key.type == "Identifier" else pr.key.value): lit(pr.value)
                    for pr in node.properties}
        return None

    def walk(n):
        if isinstance(n, list):
            for x in n:
                walk(x)
            return
        if not hasattr(n, "type"):
            return
        if n.type == "ObjectExpression":
            keys = {pr.key.name if pr.key.type == "Identifier" else pr.key.value
                    for pr in n.properties}
            # Section nodes carry id+chapter+section. Entity cards deliberately
            # carry NEITHER chapter nor section, so testing only those three
            # silently drops every integration card -- step5_check already paid
            # for this once ("the simulation said 208 topics while the browser
            # would load 209"), and this copy reproduced the bug: 259 nodes
            # against step5_check's 262, exactly the 3 entity cards. Both halves
            # of the test are required.
            if {"id", "chapter", "section"} <= keys or {"id", "kind", "topicKey"} <= keys:
                found.append(lit(n))
                return
        for k in getattr(n, "__dict__", {}):
            walk(getattr(n, k))

    walk(tree.body)
    return found


def czech_nodes():
    out = []
    for fn in sorted(os.listdir(DATA)):
        if not fn.endswith(".js"):
            continue
        path = os.path.join(DATA, fn)
        src = io.open(path, encoding="utf-8").read()
        for n in _parse_nodes(src):
            n["_file"] = fn
            out.append(n)
    sections = sum(1 for n in out if n.get("section"))
    entities = len(out) - sections
    print("parsed %d nodes from %s (%d section, %d entity)"
          % (len(out), DATA, sections, entities))
    assert out, "parsed zero nodes -- did the data shape change?"
    # This count silently disagreed with step5_check by exactly the entity cards
    # once already. Cross-check against the report so a future divergence is an
    # error, not a number nobody compares.
    rep = os.path.join(IDX, "_step5_report.txt")
    if os.path.exists(rep):
        m = re.search(r"ok biochemie_pro: (\d+) topics", io.open(rep, encoding="utf-8").read())
        if m:
            want = int(m.group(1))
            assert len(out) == want, (
                "parsed %d nodes but _step5_report.txt says %d -- the two parsers "
                "disagree; do NOT trust this dossier until they match "
                "(last time the gap was the 3 entity cards)" % (len(out), want))
            print("cross-check vs _step5_report.txt: %d == %d OK" % (len(out), want))
    return out


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    assert args, "usage: prep_depth.py <section>   e.g. prep_depth.py 20.2"
    section = args[0]

    extra_terms = []
    global TOTAL_CAP, PER_PAGE_CAP
    for i, a in enumerate(sys.argv):
        if a == "--terms" and i + 1 < len(sys.argv):
            extra_terms = [t.strip() for t in sys.argv[i + 1].split(",") if t.strip()]
        if a == "--max" and i + 1 < len(sys.argv):
            # The dossier tells the reader this flag exists, so it has to work.
            TOTAL_CAP = int(sys.argv[i + 1])
            PER_PAGE_CAP = max(PER_PAGE_CAP, TOTAL_CAP // 8 or 1)

    rows = load_queue()
    row = next((r for r in rows if r["leh_section"] == section), None)
    assert row, ("section %s is not in depth_queue.tsv. Sections present include: %s"
                 % (section, ", ".join(r["leh_section"] for r in rows[:12])))

    p_start, p_end = int(row["page_a_print"]), int(row["page_a_print_end"])
    print("section %s -> A printed pages %d-%d" % (section, p_start, p_end))

    # ---- textbook text, read HERE so the writing session never opens it -------
    import fitz
    print("opening %s" % A_PDF)
    assert os.path.exists(A_PDF), "Lehninger A pdf not found: %s" % A_PDF
    doc = fitz.open(A_PDF)

    pages = {}
    for pr in range(p_start, p_end + 1):
        i = pr + A_OFFSET
        pages[pr] = norm(doc[i - 1].get_text()) if 1 <= i <= doc.page_count else ""
    got = sum(1 for v in pages.values() if v.strip())
    print("read %d printed pages, %d non-empty" % (len(pages), got))
    assert got, "every page in %d-%d came back empty -- check A_OFFSET" % (p_start, p_end)

    # ---- candidate quotes, already passing the citation checker's probe rules --
    all_quotes = []
    for pr in sorted(pages):
        for sent in re.split(r"(?<=[.!?])\s+", pages[pr]):
            s = sent.strip()
            if usable_quote(s):
                all_quotes.append((pr, s))
    quotes = pick_quotes(all_quotes)
    print("quotes passing the probe rules: %d, kept %d after ranking (cap %d/page, %d total)"
          % (len(all_quotes), len(quotes), PER_PAGE_CAP, TOTAL_CAP))

    # ---- what the Czech layer already covers ---------------------------------
    nodes = czech_nodes()
    probes = list(extra_terms)
    if not probes:
        # crude but honest default: content words out of the section title
        probes = [w for w in re.findall(r"[A-Za-z][A-Za-z-]{4,}", row["title"])
                  if w.lower() not in ("their", "these", "which", "there", "other")]
    hits = {}
    for t in probes:
        rx = re.compile(re.escape(t), re.I)
        found = []
        for n in nodes:
            blob = " ".join(str(n.get(k, "")) for k in ("enTitle", "czTitle", "cnTitle"))
            blob += " " + str(n.get("points", "")) + " " + str(n.get("terms", ""))
            if rx.search(blob):
                found.append("%s %s" % (n.get("id"), n.get("enTitle", ""))[:70])
        hits[t] = found

    existing_keys = sorted({n.get("topicKey") for n in nodes if n.get("topicKey")})

    # ---- write the dossier ---------------------------------------------------
    if not os.path.isdir(OUTDIR):
        os.makedirs(OUTDIR)
    dest = os.path.join(OUTDIR, "_dossier_%s.md" % section.replace(".", "_"))

    L = []
    L.append("# Dossier — Lehninger §%s" % section)
    L.append("")
    L.append("> Generated by `prep_depth.py`. **This file is the whole brief.**")
    L.append("> Do not open `CORE2_LEHNINGER.md`, `HANDOFF_LEHNINGER.md` or the textbook")
    L.append("> to write this node — that is what this file exists to avoid, and the reason")
    L.append("> is measured, not stylistic (see the header of `prep_depth.py`).")
    L.append("")
    L.append("| | |")
    L.append("|---|---|")
    L.append("| Section | %s |" % row["title"])
    L.append("| A printed pages | **%d–%d** |" % (p_start, p_end))
    L.append("| queue rank / ratio | %s / %s |" % (row["rank"], row["ratio"]))
    L.append("| Czech sections pointing here | %s |" % (row["cz_sections"] or "—"))
    L.append("")
    L.append("⚠️ **The page range comes from the tsv, which has been wrong 7 times.**")
    L.append("Confirm the first and last page really belong to this section before citing them.")
    L.append("")

    L.append("## What the Czech layer already has")
    L.append("")
    L.append("Probes: %s" % ", ".join("`%s`" % t for t in probes))
    L.append("")
    L.append("⚠️ **This is a keyword probe, not a coverage verdict.** Coverage claims in this")
    L.append("project have been overturned five times, always by someone trusting a count.")
    L.append("A hit may be a false positive in an unrelated context; a miss may still be covered")
    L.append("under different wording. Confirm before writing anything as a gap.")
    L.append("")
    for t in probes:
        f = hits[t]
        if f:
            L.append("- `%s` — %d hit(s): %s" % (t, len(f), "; ".join(f[:6])))
        else:
            L.append("- `%s` — **0 hits**" % t)
    L.append("")

    L.append("## topicKey")
    L.append("")
    L.append("Merge into an existing key, do not start a new one unless nothing fits.")
    L.append("Cross-book joins may or may not go up afterwards — both are normal.")
    L.append("")
    L.append("<details><summary>%d existing keys</summary>" % len(existing_keys))
    L.append("")
    L.append(", ".join("`%s`" % k for k in existing_keys))
    L.append("")
    L.append("</details>")
    L.append("")

    L.append("## Candidate quotes — showing %d of %d" % (len(quotes), len(all_quotes)))
    L.append("")
    L.append("Every line below already satisfies `verify_citations.py`'s probe: 18–140 chars,")
    L.append("no U+2212, no nested quotes. Quoting one of these verbatim with its page cannot")
    L.append("produce an UNCHECKED row. Anything you write yourself must meet the same rules.")
    L.append("")
    L.append("⚠️ **%d of %d candidates were dropped** (kept the best %d per page, %d overall)."
             % (len(all_quotes) - len(quotes), len(all_quotes), PER_PAGE_CAP, TOTAL_CAP))
    L.append("**This is not the full set and the ranking is a heuristic, not a judgement of")
    L.append("importance.** If nothing here carries the point you need, re-run with a larger")
    L.append("cap rather than opening the textbook:")
    L.append("`python lehninger_index/scripts/prep_depth.py %s --max %d`" % (section, TOTAL_CAP * 3))
    L.append("")
    for pr, s in quotes:
        L.append("- **p.%d** — %s" % (pr, s))
    L.append("")

    body = "\n".join(L) + "\n"
    assert len(body) > 400, "dossier came out suspiciously small (%d chars)" % len(body)
    io.open(dest, "w", encoding="utf-8", newline="\n").write(body)

    print("wrote %s  (%.1f KB, %d quotes, %d probes)"
          % (dest, len(body) / 1024.0, len(quotes), len(probes)))
    print("")
    print("Next session's ENTIRE opening instruction:")
    print("  读 %s，按里面的范围写 L-%s-1 这个节点，写完立刻 commit。"
          % (os.path.relpath(dest, ROOT).replace("\\", "/"), section.replace(".", "-")))
    print("  不要读 CORE2_LEHNINGER.md / HANDOFF_LEHNINGER.md，不要打开教材。")


if __name__ == "__main__":
    main()
