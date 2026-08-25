# -*- coding: utf-8 -*-
"""HANDOFF_PESB.md §5 layer-1 structural check, plus the comprehension layer.

Run from inside pesbexplain/ (or pesbpro/ — it works on both):

    python tools/check_structure.py

Handles the §12 trap: `explain` / `mustKnow` / `skipIt` all sit BEFORE `points`,
so truncating a node at them would cut off the quiz too and report core=0 for
every explained node. They are excised instead, not truncated at.

Exits non-zero if anything is wrong, so it can be used in a pre-commit hook.
"""
import re, glob, os, io, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

CJK = r'一-鿿'
# A Latin word directly adjacent to a CJK character with no space. Legitimate
# technical terms in Chinese prose are essentially always space-separated
# ("Ni-NTA 柱", not "Ni-NTA柱"), so this has no false positives across the
# corpus — and it caught 少randomise几个位点 in ch4. See §7.
MIX = re.compile(rf'([{CJK}][a-z]{{3,}})|([a-z]{{3,}}[{CJK}])')
CYRILLIC = re.compile(r'[Ѐ-ӿ]')
TRACE_ORDER = ['what', 'from', 'to', 'family', 'numbers']

REQUIRED = ("cnTitle:", "summary:", "points:", "terms:", "quiz:", "oral:",
            "model_en:", "checklist:")

failures = 0
all_ids = []
tot = dict(must=0, skip=0, expl=0, items=0, trace=0, recap=0, judged=0)

for path in sorted(glob.glob('data/ch*.js')):
    src = open(path, encoding='utf-8').read()
    starts = [m.start() for m in re.finditer(r"^  id: '", src, re.M)] + [len(src)]
    bad = 0
    for i in range(len(starts) - 1):
        blk = src[starts[i]:starts[i + 1]]
        nid = re.search(r"id: '([^']+)'", blk).group(1)
        all_ids.append(nid)
        f = []

        # ---- core quiz: exactly 4, on `quiz` only. Cut at `bank:` (§10) and
        # ---- excise the comprehension blocks (§12) rather than truncating.
        core = blk.split('\n  bank:')[0]
        for fld in ('\n  explain:', '\n  mustKnow:', '\n  skipIt:'):
            if fld in core:
                head, rest = core.split(fld, 1)
                core = head + '\n  points:' + rest.split('\n  points:', 1)[1]
        m = len(re.findall(r"type: 'mcq'", core))
        s = len(re.findall(r"type: 'short'", core))
        if m + s != 4:
            f.append(f"core quiz={m+s} (must be 4)")
        for fld in REQUIRED:
            if fld not in blk:
                f.append("missing " + fld)
        if len(re.findall(r"why_en:", core)) != m:
            f.append("mcq why_en count")
        if len(re.findall(r"accept:", core)) != s:
            f.append("short accept count")
        if len(re.findall(r"answer_cn:", core)) != s:
            f.append("short answer_cn count")

        # ---- comprehension layer (§12) ----
        if 'mustKnow:' in blk:
            tot['must'] += 1
        sk = re.search(r"\n  skipIt: '(.*?)',\n", blk, re.S)
        if sk:
            tot['skip'] += 1
            t = sk.group(1)
            # §12: skipIt may cite the professor's own slides. It may NOT cite
            # the `!!! exam` markers or the §21 question list — those are an
            # earlier session's inference, not the professor's word.
            if any(x in t for x in ('!!!', '第 21 节', '21 节', 'exam 标记')):
                f.append("skipIt cites inferred markers")
            if 'RECAP' in t:
                tot['recap'] += 1
            if '判断' in t:
                tot['judged'] += 1
        exp = re.search(r"\n  explain: \[\n(.*?)\n  \],\n", blk, re.S)
        if exp:
            tot['expl'] += 1
            if 'mustKnow:' not in blk:
                # Writing explain without mustKnow rebuilds the very problem
                # this fork exists to solve. See §12.
                f.append("explain without mustKnow")
            items = re.split(r'\n    \},\n    \{\n', exp.group(1))
            tot['items'] += len(items)
            tot['trace'] += exp.group(1).count('trace: {')
            for j, it in enumerate(items):
                if not re.search(r"^      q: '", it, re.M):
                    f.append(f"explain[{j}] no q")
                if not re.search(r"^      a: '", it, re.M) and 'trace: {' not in it:
                    f.append(f"explain[{j}] neither a nor trace")
        for tm in re.finditer(r"trace: \{(.*?)\n      \},?\n", blk, re.S):
            keys = re.findall(r"^        (\w+):", tm.group(1), re.M)
            if keys != [k for k in TRACE_ORDER if k in keys]:
                f.append(f"trace rows out of order: {keys}")

        if f:
            bad += 1
            print("  BAD", nid, "; ".join(f))

    hits = [x.group(0) for x in MIX.finditer(src)]
    cyr = CYRILLIC.findall(src)
    note = ''
    if hits:
        note += f" | MIXED {hits[:4]}"
    if cyr:
        note += f" | CYRILLIC {cyr[:4]}"
    print(f"{path}: {len(starts)-1} nodes, {bad} problems{note}")
    failures += bad + (1 if hits or cyr else 0)

dupes = {x for x in all_ids if all_ids.count(x) > 1}
print("duplicates:", dupes or "none", "| total:", len(all_ids))
if dupes:
    failures += 1

# ---- optionRefs: a wrong mcq option may carry a pointer to the node where the
# ---- concept it names is actually taught. A pointer to a node that does not
# ---- exist, or back to the question's own node, is worse than no pointer at
# ---- all — it sends the reader somewhere useless and costs trust in every
# ---- other hook. app.js validateTopics() enforces the same two rules at load.
known = set(all_ids)
hooks = 0
for path in sorted(glob.glob('data/ch*.js')):
    src = open(path, encoding='utf-8').read()
    starts = [m.start() for m in re.finditer(r"^  id: '", src, re.M)] + [len(src)]
    for i in range(len(starts) - 1):
        blk = src[starts[i]:starts[i + 1]]
        nid = re.search(r"id: '([^']+)'", blk).group(1)
        for m in re.finditer(r"optionRefs: \{([^}]*)\}", blk):
            for oi, tgt in re.findall(r"(\d+):\s*'([^']+)'", m.group(1)):
                hooks += 1
                if tgt not in known:
                    print("  BAD", nid, "optionRefs ->", tgt, "(no such node)")
                    failures += 1
                elif tgt == nid:
                    print("  BAD", nid, "optionRefs points at its own node")
                    failures += 1
print(f"optionRefs: {hooks} hooks into {len(known)} nodes")

# ---- optionNotes: prose naming the misconception a wrong option encodes.
# ---- Both languages are mandatory. A note in English only would render as a
# ---- blank line for a reader with the Chinese view on, which is the same
# ---- failure as the placeholder-Chinese rule (§3) exists to prevent. The
# ---- MIX and CYRILLIC scans above already cover the prose itself.
notes = 0
for path in sorted(glob.glob('data/ch*.js')):
    src = open(path, encoding='utf-8').read()
    for m in re.finditer(r"optionNotes: \{(.*?)\n\s*\},\n", src, re.S):
        for oi, entry in re.findall(r"(\d+): \{(.*?)\}", m.group(1), re.S):
            notes += 1
            if "en: '" not in entry or "cn: '" not in entry:
                print("  BAD optionNotes entry", oi, "is missing en or cn")
                failures += 1
print(f"optionNotes: {notes} notes")

print(f"comprehension: mustKnow {tot['must']} | skipIt {tot['skip']} "
      f"({tot['recap']} cite a RECAP/primary slide, {tot['judged']} labelled a judgement) "
      f"| explain {tot['expl']} nodes, {tot['items']} items, {tot['trace']} trace tables")

refs = set()
for path in glob.glob('data/ch*.js'):
    refs |= set(re.findall(r"src: '(img/[^']+)'",
                           open(path, encoding='utf-8').read()))
missing = [r for r in sorted(refs) if not os.path.exists(r)]
print(f"figures: {len(refs)} referenced, {len(missing)} missing", missing or '')
failures += len(missing)

print("\nRESULT:", "PASS" if failures == 0 else f"FAIL ({failures} problems)")
sys.exit(0 if failures == 0 else 1)
