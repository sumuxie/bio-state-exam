"""Attach extracted slide figures to every node in data/ch*.js.

Each node already states which slides it came from, e.g. slides: 'L2 s.20-21'
or 'L7 s.13, s.28-29'. That citation is the mapping — nothing here guesses
which picture belongs to which node. For each node this script parses the
citation, extracts the keeper images from exactly those slides, and writes a
`slideFigures` array into the node.

Deliberately separate from `figures`, which is hand-picked and hand-captioned.
`slideFigures` is raw and uncaptioned, and merging the two would lose that
distinction the way merging `points` into `beyondPoints` would.

Run from inside pesbpro/:
    python tools/attach_figures.py --dry     # report, write nothing
    python tools/attach_figures.py
"""
import sys, os, re, io, glob

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
# extract_figures already replaces sys.stdout with a UTF-8 wrapper on import.
# Wrapping a second time here would detach and close the first one, so do not.
import extract_figures as ex

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NODE_RE = re.compile(r"^  id: '([^']+)'", re.M)


def parse_slides(cit):
    """'L7 s.13, s.28-29' -> ('L7', [13, 28, 29]). Handles the en dash the
    data files actually use as well as a plain hyphen."""
    m = re.match(r'\s*(L\d+[AB]?)\s+(.*)', cit)
    if not m:
        return None, []
    lec, rest = m.group(1), m.group(2)
    pages = []
    for part in rest.split(','):
        nums = re.findall(r'\d+', part)
        if not nums:
            continue
        for n in range(int(nums[0]), int(nums[-1]) + 1):
            if n not in pages:
                pages.append(n)
    return lec, pages


def build_block(paths, lec, page_of):
    """Render the slideFigures literal, or '' when a node has no figures."""
    if not paths:
        return ''
    lines = ["  // Picture parts only, cut out of the slides by tools/extract_figures.py",
             "  // and attached by tools/attach_figures.py from this node's own `slides`",
             "  // citation. Uncaptioned by design — read them against the points above.",
             "  slideFigures: ["]
    for i, p in enumerate(paths):
        comma = ',' if i < len(paths) - 1 else ''
        lines.append("    { slide: '%s s.%d', src: '%s' }%s" % (lec, page_of[p], p, comma))
    lines.append("  ],")
    return "\n".join(lines) + "\n"


def main(dry=False):
    os.chdir(HERE)
    decks = {}          # lecture -> (pages, verdicts), harvested once each

    total_nodes = total_figs = with_figs = 0
    for path in sorted(glob.glob('data/ch*.js')):
        src = open(path, encoding='utf-8').read()
        starts = [m.start() for m in NODE_RE.finditer(src)] + [len(src)]
        out, changed = [src[:starts[0]]], 0

        for i in range(len(starts) - 1):
            blk = src[starts[i]:starts[i + 1]]
            nid = NODE_RE.search(blk).group(1)
            total_nodes += 1

            # Drop any slideFigures block already present, with its comments,
            # so re-running is idempotent rather than additive.
            blk = re.sub(r"\n(?:  //[^\n]*\n)*  slideFigures: \[.*?\n  \],\n", "\n", blk, flags=re.S)

            cit = re.search(r"slides: '([^']*)'", blk)
            lec, pages = parse_slides(cit.group(1)) if cit else (None, [])
            if not lec or lec not in ex.LECTURE:
                out.append(blk)
                if cit:
                    print("  %-8s no usable slide citation: %r" % (nid, cit.group(1) if cit else ''))
                continue

            if lec not in decks:
                srcfile, harvested = ex.harvest(lec)
                decks[lec] = (harvested, ex.classify(harvested))
                print("harvested %-4s from %s (%d slides)" % (lec, os.path.basename(srcfile), len(harvested)))
            deck, verdicts = decks[lec]

            paths, page_of = [], {}
            for pno in pages:
                if pno not in deck:
                    print("  %-8s cites %s s.%d which is not in the deck — skipped" % (nid, lec, pno))
                    continue
                for rel in ex.write_slide(lec, pno, deck[pno], verdicts, dry=dry, log=False):
                    if rel not in paths:          # same image cited twice
                        paths.append(rel)
                        page_of[rel] = pno

            block = build_block(paths, lec, page_of)
            if block:
                # Insert immediately before `points:`, which every node has.
                m = re.search(r"^  points: \[", blk, re.M)
                assert m, "%s has no points array to anchor against" % nid
                blk = blk[:m.start()] + block + blk[m.start():]
                changed += 1
                with_figs += 1
                total_figs += len(paths)
            out.append(blk)

        new = "".join(out)
        print("%s: %d nodes given slideFigures" % (path, changed))
        if not dry:
            open(path, 'w', encoding='utf-8', newline='').write(new)

    print("\n%d/%d nodes have figures, %d figure references in total%s"
          % (with_figs, total_nodes, total_figs, "  (dry run)" if dry else ""))
    # Every referenced file must exist, or the app shows a broken image.
    if not dry:
        missing = []
        for path in glob.glob('data/ch*.js'):
            for rel in re.findall(r"src: '(img/[^']+)'", open(path, encoding='utf-8').read()):
                if not os.path.exists(rel):
                    missing.append(rel)
        assert not missing, "referenced but not on disk: %s" % missing[:5]
        print("all referenced image files exist")


if __name__ == "__main__":
    main(dry="--dry" in sys.argv)
