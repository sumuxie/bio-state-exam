"""Validate and merge the cross-lecture integration sections.

    python check_integration.py            # validate work/integration/sec_*.json
    python check_integration.py --merge    # validate, rotate answers, write data/integration.json

Every rule here exists because the per-lecture quiz pipeline learned it the hard
way; see the handoff. In particular an explanation that names an option by its
slot ("option A", the first one) silently points at the wrong option once the
answers are rotated, so the merge refuses to run if one survives.
"""
import glob
import json
import os
import random
import re
import statistics as st
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "work", "integration")
OUT = os.path.join(HERE, "data", "integration.json")

TAGS = {"整合 Integration", "对比 Contrast", "定量 Numbers",
        "临床 Clinical", "易错 Trap"}

POSITIONAL = [
    r"选项\s*[ABCD1-4一二三四]", r"第[一二三四1-4]\s*个?\s*选项",
    r"[最后前][一二三四]?\s*项", r"以上[都皆全]", r"以上均", r"上述[都皆全]",
    r"\boption\s*[ABCD1-4]\b", r"\bthe (first|second|third|fourth|last) (one|option|choice)\b",
    r"\b(all|none) of the above\b", r"\bboth\s+[ABCD]\s+and\s+[ABCD]\b",
]


def strictly_longest(q, key):
    lens = [len(o[key]) for o in q["options"]]
    top = max(lens)
    return lens[q["answer"]] == top and lens.count(top) == 1


def length_rank(q, key):
    """1 = the answer is the longest option, 4 = the shortest.

    Strictly-longest alone is not enough: an answer that is reliably the
    SHORTEST leaks just as much, and a bank full of four-way ties can score 0%
    while still being obviously patterned. What should look uniform is the
    answer's rank by length, so that is what this reports.
    """
    lens = [len(o[key]) for o in q["options"]]
    mine = lens[q["answer"]]
    return 1 + sum(1 for x in lens if x > mine)


def check(sec, path, problems):
    def bad(msg):
        problems.append(f"{os.path.basename(path)}: {msg}")

    for k in ("id", "title_en", "title_zh", "cards", "quiz"):
        if k not in sec:
            bad(f"missing key {k}")
            return
    for i, c in enumerate(sec["cards"]):
        if not c.get("en", "").strip() or not c.get("zh", "").strip():
            bad(f"card {i} has an empty language")
        if c.get("tag") not in TAGS:
            bad(f"card {i} tag {c.get('tag')!r} not in the allowed set")
    for i, q in enumerate(sec["quiz"]):
        if len(q.get("options", [])) != 4:
            bad(f"q{i} has {len(q.get('options', []))} options")
            continue
        if not (0 <= q.get("answer", -1) < 4):
            bad(f"q{i} answer index {q.get('answer')} out of range")
        for lang in ("en", "zh"):
            texts = [o[lang].strip() for o in q["options"]]
            if len(set(texts)) != 4:
                bad(f"q{i} has duplicate {lang} options")
            if any(not t for t in texts):
                bad(f"q{i} has an empty {lang} option")
        blob = " ".join(str(q.get(k, "")) for k in
                        ("q_en", "q_zh", "explain_en", "explain_zh"))
        for pat in POSITIONAL:
            m = re.search(pat, blob, re.I)
            if m:
                bad(f"q{i} names an option by position ({m.group(0)!r})")
                break


def report(sec, path):
    qs = sec["quiz"]
    if not qs:                       # a section still being written by its agent
        print(f"  {sec['id']:<18} {len(sec['cards']):3d} cards    0 quiz   "
              f"(incomplete — agent still running?)")
        return len(sec["cards"]), 0, 0, 0, 0
    n = len(qs)
    en = sum(1 for q in qs if strictly_longest(q, "en"))
    zh = sum(1 for q in qs if strictly_longest(q, "zh"))
    rel = st.mean([len(q["options"][q["answer"]]["en"])
                   - st.mean([len(o["en"]) for o in q["options"]]) for q in qs])
    pos = Counter(q["answer"] for q in qs)
    rk = Counter(length_rank(q, "en") for q in qs)
    print(f"  {sec['id']:<18} {len(sec['cards']):3d} cards  {len(qs):3d} quiz   "
          f"longest en {en/n*100:4.1f}%  zh {zh/n*100:4.1f}%   len {rel:+.1f}   "
          f"pos {[pos[i] for i in range(4)]}  rank {[rk[i] for i in range(1, 5)]}")
    return len(sec["cards"]), len(qs), en, zh, n


sections, problems = [], []
for p in sorted(glob.glob(os.path.join(SRC, "sec_*.json"))):
    try:
        sec = json.load(open(p, encoding="utf-8"))
    except Exception as e:
        problems.append(f"{os.path.basename(p)}: will not parse — {e}")
        continue
    check(sec, p, problems)
    sections.append(sec)

if not sections:
    raise SystemExit(f"no section files in {SRC}")

print(f"{len(sections)} section(s):")
tot_c = tot_q = tot_en = tot_zh = tot_n = 0
for sec in sections:
    if all(k in sec for k in ("id", "cards", "quiz")):
        c, q, en, zh, n = report(sec, "")
        tot_c += c; tot_q += q; tot_en += en; tot_zh += zh; tot_n += n
incomplete = [sec["id"] for sec in sections if not sec.get("quiz")]
print(f"  {'TOTAL':<18} {tot_c:3d} cards  {tot_q:3d} quiz   "
      f"longest en {tot_en/max(1,tot_n)*100:4.1f}%  zh {tot_zh/max(1,tot_n)*100:4.1f}%"
      f"   (chance is 25%)")

if problems:
    print(f"\n{len(problems)} problem(s):")
    for x in problems[:40]:
        print("   " + x)

if "--merge" not in sys.argv:
    raise SystemExit(0)

assert not problems, "refusing to merge with problems outstanding"
assert not incomplete, f"refusing to merge: {incomplete} have no questions yet"

# Flatten answer positions the same way the per-lecture pipeline does: deal an
# evenly balanced deck, shuffle it with a fixed seed, then rotate each question
# so its answer lands on the dealt target. Rotation keeps the options' relative
# order, which is why explanations must never name one by position.
qs = [q for sec in sections for q in sec["quiz"]]
deck = [i % 4 for i in range(len(qs))]
random.Random(20260827).shuffle(deck)
for q, target in zip(qs, deck):
    shift = (q["answer"] - target) % 4
    q["options"] = q["options"][shift:] + q["options"][:shift]
    q["answer"] = target
pos = Counter(q["answer"] for q in qs)
assert max(pos.values()) - min(pos.values()) <= 1, "answer positions still uneven"
print(f"\nafter rotation: positions {[pos[i] for i in range(4)]}")

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w", encoding="utf-8", newline="\n") as f:
    json.dump({"sections": sections}, f, ensure_ascii=False, indent=1)
print(f"wrote {OUT}  ({os.path.getsize(OUT)/1e6:.2f} MB, "
      f"{tot_c} cards, {tot_q} questions)")
