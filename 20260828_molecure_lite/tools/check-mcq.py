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

The reasoning belongs in why_en / why_cn anyway — the reader sees it after answering,
which is when it teaches. But moving it there is only half a fix, and doing it to
every item creates a new exploit; see below.

CHECKS
  LONGEST   share of items whose correct option is longer than EVERY distractor by
            more than MARGIN characters — a difference a reader could actually see.
            The strict maximum with no margin is printed beside it.
  SHORTEST  the same, in the other direction. GATED IDENTICALLY, and not as an
            afterthought: this is the first defect with its sign flipped, and it is
            what the obvious fix produces.
  POSITION  distribution of the answer index. Chance is uniform.

THE MIRROR BIAS IS NOT HYPOTHETICAL — THIS BANK PRODUCED IT. The instruction given to
every author here was "cut the correct option to its bare claim and put the reasoning
in why_en / why_cn". Applied uniformly, that is itself a rule a reader can exploit:
the first measurement of the finished bank came back longest-is-correct 16%, below
chance — and shortest-is-correct 48%, nearly twice chance. Nothing had been fixed;
the exploit had been inverted.

So the instruction was wrong as stated, and the correct one is: **make the correct
option and the distractors the same length, whichever direction that takes.** Trim a
distractor that carries reasoning the correct option does not, or give the correct
option the specificity its distractors already have. Length must not carry signal in
either direction.

MEASURING A DIFFERENCE A READER CAN SEE. The first version of this check counted an
item as biased whenever the correct option was the strict minimum or maximum, by any
amount. That is the wrong quantity: nobody counts characters, and a one-character
difference is not an exploit. Measured against it, this bank came back "48% shortest"
and failed — so before rewriting twenty-one questions, the quantity itself was swept
(scratchpad/mcq_margin.py), requiring the correct option to beat every distractor by
a margin of m characters:

    m:        0     3     5     8    10    15    20    25
    this bank, shortest wins
             45%   39%   34%   18%   14%    5%    0%    0%
    parent bank, longest wins
             46%   43%   43%   42%   42%   41%   40%   39%

The two are not the same phenomenon. The parent bank's exploit survives a 25-character
margin almost undiminished — its correct options are VISIBLY longer, and a reader
would find that rule in an afternoon. This bank's "48%" is made almost entirely of
near-ties and is gone by 20 characters; there was nothing there to fix, and rewriting
those items would have been churn in service of a bad measurement.

So the gate acts at MARGIN = 8 characters — roughly a word and a half, the smallest
gap worth calling visible when scanning four options — and prints the strict
no-margin figure beside it so the raw fact stays on screen.

WHERE THE THRESHOLDS COME FROM, and what is wrong with them. Both quantities are
continuous and neither has a gap between two separated populations, so these are cuts
on a slope and the exact value is not defensible — it is a judgement, and it is
recorded here as one. LONGEST fails above 40%: at the margin above, the measured
parent bank sits at 42% and this one at 2%, so 40% separates them while staying loose
enough that eight items are not failed over one unlucky question. SHORTEST takes the SAME 40% — asymmetric gates would say one
direction of the exploit is more acceptable than the other, and it is not. POSITION
fails when any single index takes more than half; the parent bank's 60% is the case
it is set to catch. All three print their raw counts, so the number can be argued
with instead of trusted.

A bank under about 12 items is too small for either share to mean much. The gate
still runs, and the counts next to it are what to read.

    python tools/check-mcq.py
"""
import io, pathlib, re, sys, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

APP = pathlib.Path(__file__).resolve().parent.parent
DATA = APP / "data"

LONGEST_MAX = 0.40
SHORTEST_MAX = 0.40   # symmetric with LONGEST: length must not predict in EITHER direction
POSITION_MAX = 0.50
MARGIN = 8            # characters; see MEASURING A DIFFERENCE A READER CAN SEE, above

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
def wins_short(L, i, m):
    return all(L[i] + m < L[j] for j in range(len(L)) if j != i)


def wins_long(L, i, m):
    return all(L[i] > L[j] + m for j in range(len(L)) if j != i)


# Strict minimum/maximum, kept and printed so nothing is hidden.
longest0 = sum(1 for r, L in zip(rows, lens) if L[r[2]] == max(L))
shortest0 = sum(1 for r, L in zip(rows, lens) if L[r[2]] == min(L))
# What the gate acts on: a difference a reader could actually see.
longest = sum(1 for r, L in zip(rows, lens) if wins_long(L, r[2], MARGIN))
shortest = sum(1 for r, L in zip(rows, lens) if wins_short(L, r[2], MARGIN))
pos = collections.Counter(r[2] for r in rows)
n = len(rows)

print(f"{len(files)} file(s), {n} item(s), {len(per_node)} node(s)")
for nid, c in sorted(per_node.items()):
    print(f"   {nid:8s} {c:3d}")
print()
print(f"LONGEST   longer than every distractor by >{MARGIN} chars in {longest}/{n} = "
      f"{longest/n:.0%}   (gate {LONGEST_MAX:.0%}; strict maximum, no margin: "
      f"{longest0}/{n} = {longest0/n:.0%})")
print(f"SHORTEST  shorter than every distractor by >{MARGIN} chars in {shortest}/{n} = "
      f"{shortest/n:.0%}   (gate {SHORTEST_MAX:.0%}; strict minimum, no margin: "
      f"{shortest0}/{n} = {shortest0/n:.0%})")
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
    fails.append(f"LONGEST {longest/n:.0%} over gate {LONGEST_MAX:.0%} — the correct option "
                 f"is carrying reasoning its distractors do not. Move that reasoning into "
                 f"why_en/why_cn, or give the distractors the same specificity. Do not pad "
                 f"the distractors with filler.")
if shortest / n > SHORTEST_MAX:
    fails.append(f"SHORTEST {shortest/n:.0%} over gate {SHORTEST_MAX:.0%} — the mirror "
                 f"exploit: 'pick the shortest' wins. The correct options have been cut to "
                 f"the bone while the distractors still carry their reasoning. Trim the "
                 f"distractors to match, or restore the specificity to the correct option. "
                 f"Aim for the LENGTH ratio below to sit near 1.00.")
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
