# -*- coding: utf-8 -*-
"""The MCQ length-bias gate, as a script.

HANDOFF §6 says to re-run this after every node, but there was never a tool:
it was being computed by hand, per node, which is why `1-7` reached 6/6
longest-is-correct before anyone noticed.

The defect it measures, from the parent corpus: correct options written as
full explanatory sentences and distractors as short noun phrases, so 89% of
questions were answerable by picking the longest option without reading any
biology.

Two numbers per node:

    longest    how many items have the correct option as the single longest
    ratio>=1.3 how many have the correct option at least 1.3x the next longest

The fix is always to cut the correct option to its bare claim -- the reason
belongs in why_en, which the app reveals on answering -- or to raise a
distractor's specificity. NEVER to pad the correct option.

Option order is shuffled at run time by shuffleOptions(), so this measures the
text, not the position.

Usage:
    python tools/check_length_bias.py data/ch4.js          # every node
    python tools/check_length_bias.py data/ch4.js 4-3      # one node
    python tools/check_length_bias.py --fail-over 0.5 data/ch1b.js

Exits non-zero if any node exceeds --fail-over (default: report only).
"""
import io
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

NODE = re.compile(r"^\s*id:\s*['\"]([^'\"]+)['\"]")
OPTS = re.compile(r'^\s*options:\s*\[\s*$')
OPTS1 = re.compile(r'^\s*options:\s*\[(.*)\],?\s*$')
ANS = re.compile(r'^\s*answer:\s*(\d+)')
STR = re.compile(r"""^\s*(['"])(.*)\1\s*,?\s*$""")


def strings_in(line):
    """Every quoted string on one line, either quote style."""
    return [m.group(2) for m in re.finditer(r"""(['"])((?:\\.|(?!\1).)*)\1""", line)]


def parse(path):
    """Yield (node_id, [options], answer_index)."""
    node, opts, collecting = '?', None, False
    for raw in open(path, encoding='utf-8'):
        m = NODE.match(raw)
        if m:
            node = m.group(1)
            continue
        if collecting:
            if re.match(r'^\s*\],?\s*$', raw):
                collecting = False
                continue
            m = STR.match(raw)
            if m:
                opts.append(m.group(2))
            continue
        m = OPTS1.match(raw)
        if m:
            opts = strings_in(m.group(1))
            continue
        if OPTS.match(raw):
            opts, collecting = [], True
            continue
        m = ANS.match(raw)
        if m and opts:
            yield node, opts, int(m.group(1))
            opts = None


def main():
    argv = sys.argv[1:]
    fail_over = None
    if '--fail-over' in argv:
        i = argv.index('--fail-over')
        fail_over = float(argv[i + 1])
        del argv[i:i + 2]
    paths = [a for a in argv if a.endswith('.js')]
    only = [a for a in argv if not a.endswith('.js')]

    worst = 0.0
    for path in paths:
        per = {}
        for node, opts, ans in parse(path):
            if only and node not in only:
                continue
            if not (0 <= ans < len(opts)) or len(opts) < 2:
                continue
            lens = [len(o) for o in opts]
            correct = lens[ans]
            others = [l for j, l in enumerate(lens) if j != ans]
            longest = correct > max(others)
            ratio = correct / max(others) if max(others) else float('inf')
            d = per.setdefault(node, {'n': 0, 'long': 0, 'ratio': 0})
            d['n'] += 1
            d['long'] += longest
            d['ratio'] += ratio >= 1.3

        print('\n%s' % path)
        for node, d in sorted(per.items()):
            share = d['long'] / d['n'] if d['n'] else 0
            worst = max(worst, share)
            flag = '  <-- FAILS' if fail_over is not None and share > fail_over else ''
            print('  %-8s %2d items   longest %d/%d   ratio>=1.3 %d/%d%s'
                  % (node, d['n'], d['long'], d['n'], d['ratio'], d['n'], flag))
        if not per:
            print('  no mcq items found')

    if fail_over is not None and worst > fail_over:
        print('\nRESULT: FAIL -- a node exceeds %.2f longest-is-correct' % fail_over)
        return 1
    print('\nRESULT: PASS' if fail_over is not None else '\n(report only; pass --fail-over N to gate)')
    return 0


sys.exit(main())
