"""Sanity-check the generated term drill without a JS runtime.

app.js builds one multiple-choice question per glossary term at load time.
There is no JS engine on this machine, so this mirrors the same selection
rules in Python against the data files and reports what the generator will
actually produce: how many questions, how many terms get skipped and why,
and whether any question ends up with a duplicate or ambiguous option set.

It is a model of app.js:termQuestions(), not the code itself. If the rules
there change, change them here too — or delete this file rather than let it
quietly describe something that is no longer true.
"""
import re, glob, sys, io, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

FIELD = re.compile(
    r"\{\s*en:\s*'((?:[^'\\]|\\.)*)',\s*cn:\s*'((?:[^'\\]|\\.)*)',\s*"
    r"def_en:\s*'((?:[^'\\]|\\.)*)',\s*def_cn:\s*'((?:[^'\\]|\\.)*)'\s*\}")


def load_terms():
    """-> [(chapter, node id, en, cn, def_en, def_cn), ...] in file order."""
    rows = []
    for path in sorted(glob.glob('data/ch*.js')):
        src = open(path, encoding='utf-8').read()
        starts = [m.start() for m in re.finditer(r"^  id: '", src, re.M)] + [len(src)]
        for i in range(len(starts) - 1):
            blk = src[starts[i]:starts[i + 1]]
            nid = re.search(r"id: '([^']+)'", blk).group(1)
            ch = int(re.search(r"chapter: (\d+)", blk).group(1))
            m = re.search(r"\n  terms: \[(.*?)\n  \],", blk, re.S)
            if not m:
                continue
            for t in FIELD.finditer(m.group(1)):
                rows.append((ch, nid) + t.groups())
    return rows


def main():
    rows = load_terms()
    by_ch = {}
    for r in rows:
        by_ch.setdefault(r[0], []).append(r)

    print("%d term entries parsed across %d chapters\n" % (len(rows), len(by_ch)))

    made = skipped_incomplete = skipped_pool = 0
    ambiguous = []
    for ch in sorted(by_ch):
        pool = by_ch[ch]
        n_ch = 0
        for i, r in enumerate(pool):
            _ch, nid, en, cn, def_en, def_cn = r
            if not (en and cn and def_en and def_cn):
                skipped_incomplete += 1
                continue
            others = []
            k = 1
            while len(others) < 3 and k < len(pool):
                c = pool[(i + k * 7 + 1) % len(pool)]
                k += 1
                if c is r or not c[2] or not c[4]:
                    continue
                if c[4] == def_en or c[2] == en:
                    continue
                if any(o[2] == c[2] for o in others):
                    continue
                others.append(c)
            if len(others) < 3:
                skipped_pool += 1
                continue
            for direction, right, wrong in (
                    ('to_def', def_en, [o[4] for o in others]),
                    ('to_term', en, [o[2] for o in others])):
                if direction != ('to_def' if i % 2 == 0 else 'to_term'):
                    continue
                opts = [right] + wrong
                if len(set(opts)) != 4:
                    ambiguous.append((nid, en, direction))
            made += 1
            n_ch += 1
        print("  chapter %d: %3d terms -> %3d questions" % (ch, len(pool), n_ch))

    print("\ngenerated       %d" % made)
    print("skipped, incomplete term (missing en/cn/def_en/def_cn)  %d" % skipped_incomplete)
    print("skipped, chapter pool too small to find 3 distractors   %d" % skipped_pool)
    print("questions with a duplicate option                       %d" % len(ambiguous))
    for a in ambiguous[:10]:
        print("   ", a)
    return 0 if not ambiguous else 1


if __name__ == "__main__":
    sys.exit(main())
