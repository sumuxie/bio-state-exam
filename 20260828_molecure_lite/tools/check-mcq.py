# -*- coding: utf-8 -*-
"""Gate the two ways a multiple-choice bank can be answerable without knowing anything.

A handoff note records the parent corpus once measuring 89% of its questions
answerable by picking the longest option. That figure was not taken on trust:
`scratchpad/calibrate_mcq.py` re-ran the measurement over
`biochemie_lite/data/questions.js` as it stands today, and found

    341 items   longest-is-correct 51%   (chance ~25%)
                shortest-is-correct 12%
                answer position  [0]=68  [1]=204  [2]=51  [3]=18
                correct mean 144 chars vs distractor mean 92   (ratio 1.57)

So the length bias is real and still runs at twice chance after a round of fixing —
and **the position bias is worse than the length bias**: 60% of that bank's answers
sit at index 1, which a reader notices long before they notice option lengths.

The length defect happens the same way every time: the correct option gets written
with its justification attached ("Cas9 cuts three bases upstream of the PAM, which
is why the array itself is spared") while the distractors are bare ("Cas9 cuts at
the PAM"). Nobody intends it and everybody does it.

The fix is never to pad the distractors. It is to cut the correct option down to its
bare claim and move the reasoning into why_en / why_cn, where it belongs anyway —
the reader sees it after answering, which is when it teaches.

CHECKS
  LONGEST   share of items whose correct option is the longest. Chance for a 4-option
            item is 25%.
  POSITION  distribution of the answer index. Chance is uniform.
  SHORTEST  share where the correct option is the shortest — the same defect with the
            sign flipped, which appears when someone "fixes" the first one by hand.

WHERE THE THRESHOLDS COME FROM, and what is wrong with them. Both quantities are
continuous and neither has a gap between two separated populations, so these are cuts
on a slope and the exact value is not defensible — it is a judgement, and it is
recorded here as one. LONGEST fails above 40%: chance is 25%, the measured parent
bank is 51%, and 40% is loose enough that eight items are not failed over one
unlucky question. POSITION fails when any single index takes more than half; the
parent bank's 60% is the case it is set to catch. Both print their raw counts, so
the number can be argued with instead of trusted.

A bank under about 12 items is too small for either share to mean much. The gate
still runs, and the counts next to it are what to read.

    python tools/check-mcq.py
"""
import io, pathlib, re, sys, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

APP = pathlib.Path(__file__).resolve().parent.parent
DATA = APP / "data"

LONGEST_MAX = 0.40
POSITION_MAX = 0.50

files = sorted(DATA.glob("questions*.js"))
if not files:
    sys.exit(f"NO QUESTION FILES under {DATA} — fix the path before trusting this.")

# window.BIOLITE_Q["M-6-2"] = [ {...}, {...} ];
BLOCK = re.compile(r'BIOLITE_Q\[\s*"([^"]+)"\s*\]\s*=\s*\[(.*?)\n\];', re.S)
ITEM = re.compile(r"\{(.*?)\n\s*\}", re.S)
OPTIONS = re.compile(r'"options"\s*:\s*\[(.*?)\]', re.S)
STRING = re.compile(r'"((?:[^"\\]|\\.)*)"')
ANSWER = re.compile(r'"answer"\s*:\s*(\d+)')

rows, per_node = [], collections.Counter()
for f in files:
    src = f.read_text(encoding="utf-8")
    for nid, body in BLOCK.findall(src):
        for chunk in ITEM.findall(body):
            mo, ma = OPTIONS.search(chunk), ANSWER.search(chunk)
            if not mo or not ma:
                continue
            opts = STRING.findall(mo.group(1))
            idx = int(ma.group(1))
            if not opts or idx >= len(opts):
                rows.append((f.name, nid, idx, opts, "BAD_INDEX"))
                continue
            rows.append((f.name, nid, idx, opts, None))
            per_node[nid] += 1

if not rows:
    print(f"{len(files)} question file(s), 0 items parsed — nothing to check yet.")
    sys.exit(0)

bad_index = [r for r in rows if r[4]]
lens = [[len(o) for o in r[3]] for r in rows]
longest = sum(1 for r, L in zip(rows, lens) if L[r[2]] == max(L))
shortest = sum(1 for r, L in zip(rows, lens) if L[r[2]] == min(L))
pos = collections.Counter(r[2] for r in rows)
n = len(rows)

print(f"{len(files)} file(s), {n} item(s), {len(per_node)} node(s)")
for nid, c in sorted(per_node.items()):
    print(f"   {nid:8s} {c:3d}")
print()
print(f"LONGEST   correct option is the longest in {longest}/{n} = {longest/n:.0%}"
      f"   (chance ~25%, parent corpus 89%, gate {LONGEST_MAX:.0%})")
print(f"SHORTEST  correct option is the shortest in {shortest}/{n} = {shortest/n:.0%}"
      f"   (chance ~25%)")
print("POSITION  " + "  ".join(f"[{i}]={pos.get(i,0)}" for i in range(max(pos) + 1))
      + f"   (gate: no index above {POSITION_MAX:.0%})")

# Mean length of the correct option against the mean distractor, which says HOW the
# bias is arriving even when the share is under the gate.
dc = [sum(L[r[2]] for r, L in zip(rows, lens)) / n,
      sum((sum(L) - L[r[2]]) / (len(L) - 1) for r, L in zip(rows, lens)) / n]
print(f"LENGTH    correct mean {dc[0]:.0f} chars vs distractor mean {dc[1]:.0f} chars"
      f"   (ratio {dc[0]/dc[1]:.2f}, want close to 1.00)")

fails = []
if longest / n > LONGEST_MAX:
    fails.append(f"LONGEST {longest/n:.0%} over gate {LONGEST_MAX:.0%} — cut the correct "
                 f"option to its bare claim and move the reason into why_en/why_cn. "
                 f"Never pad the distractors.")
for i, c in pos.items():
    if c / n > POSITION_MAX:
        fails.append(f"POSITION index {i} holds {c}/{n} = {c/n:.0%} of answers — "
                     f"redistribute.")
for r in bad_index:
    fails.append(f"{r[0]} {r[1]}: answer index {r[2]} is out of range for "
                 f"{len(r[3])} options")

print()
if fails:
    for f_ in fails:
        print("  FAIL  " + f_)
    print(f"\n{len(fails)} problem(s)")
    sys.exit(1)
print("no problems")
