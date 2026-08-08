#!/usr/bin/env python3
"""Assert every cross-app link resolves to a topic that still exists.

WHY. The two apps are deliberately separate directories with separate storage
prefixes, so the only thing joining them is a URL. There is no sync tooling in
this repo - the PESB handoff says so in as many words - which means a topic id
renamed in biochemie_pro breaks an inbound link with NO error: the visitor
lands on the default view and nothing anywhere reports it. That is exactly the
silent-failure class LEHNINGER_START.md exists to prevent, so the link is
asserted rather than trusted.

Run it from biochemie_struct/. Exits non-zero on a dead link.
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.abspath(__file__))
STRUCT = os.path.dirname(HERE)
ROOT = os.path.dirname(STRUCT)
PRO_DATA = os.path.join(ROOT, "biochemie_pro", "data")

assert os.path.isdir(PRO_DATA), "cannot find biochemie_pro/data at %s" % PRO_DATA


def pro_topic_ids():
    ids = set()
    files = sorted(glob.glob(os.path.join(PRO_DATA, "*.js")))
    assert files, "no data files in %s" % PRO_DATA
    for f in files:
        src = io.open(f, encoding="utf-8").read()
        ids |= set(re.findall(r'^\s*id:\s*"([^"]+)"', src, re.M))
    return ids, len(files)


def main():
    known, nfiles = pro_topic_ids()
    print("biochemie_pro: %d topic ids across %d data files" % (len(known), nfiles))
    assert known, "parsed zero topic ids - the regex is wrong, not the data"

    dead = 0
    total = 0
    files = sorted(glob.glob(os.path.join(STRUCT, "data", "*.js")))
    assert files, "no structure data files found"

    for path in files:
        # Always name the input; a checker that does not say what it opened
        # has reported "clean" for the wrong file in this project before.
        print("=== %s" % os.path.basename(path))
        src = io.open(path, encoding="utf-8").read()
        links = re.findall(r'\{\s*app:\s*"pro",\s*topic:\s*"([^"]+)"', src)
        for t in links:
            total += 1
            if t not in known:
                dead += 1
                print("  DEAD LINK -> %s (no such topic in biochemie_pro)" % t)
        print("  %d links checked" % len(links))

    print()
    print("cross-app links: %d checked, %d dead" % (total, dead))
    if dead:
        sys.exit(1)
    print("RESULT: every cross-app link resolves")


if __name__ == "__main__":
    main()
