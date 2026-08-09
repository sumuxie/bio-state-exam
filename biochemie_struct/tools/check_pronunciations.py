# Assert the pronunciation manifest and the audio/ directory agree, and that
# every recording carries the attribution its licence requires.
#
# WHY. These are other people's recordings, fetched from Wikimedia under CC
# licences. Three things can rot independently and none of them is visible in
# the browser -- a card just clicks and stays silent, or worse, plays while
# crediting nobody:
#   1. the manifest names a file that is not on disk        -> silent button
#   2. a file is on disk that no manifest entry claims      -> unattributed blob
#   3. an entry lost its artist/licence/source              -> licence breach
#
# It also re-checks the ENGLISH-ONLY rule. en.wiktionary pages carry recordings
# in every language that spells the word the same way, and nothing about the
# audio bytes says which language it is -- the filename is the only signal, so
# it is asserted here as well as at fetch time.

import io, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
AUDIO = os.path.join(ROOT, "audio")
MANIFEST = os.path.join(ROOT, "data", "pronunciations.js")
INDEX = os.path.join(ROOT, "index.html")

EN_OK = re.compile(r"^File:(En-|LL-Q1860\s*\(eng\))", re.I)
REQUIRED = ("term", "keys", "file", "file_title", "src_url", "artist", "license", "page", "retrieved")


def main():
    print("manifest : %s" % MANIFEST)
    print("audio dir: %s" % AUDIO)

    if not os.path.exists(MANIFEST):
        print("no manifest -- the app falls back to synthesis for everything.")
        print("RESULT: nothing to check")
        return

    src = io.open(MANIFEST, encoding="utf-8").read()
    m = re.search(r"window\.STRUCT\.pronunciations\s*=\s*(\{.*\});\s*$", src, re.S)
    assert m, "could not find the assignment in %s -- was it hand-edited?" % MANIFEST
    data = json.loads(m.group(1))
    items = data.get("items", [])
    assert items, "manifest has no items -- refusing to call that a pass"

    # index.html must actually load it, or the whole thing is inert.
    idx = io.open(INDEX, encoding="utf-8").read()
    assert "data/pronunciations.js" in idx, \
        "index.html has no <script> tag for data/pronunciations.js -- it would never load"

    fails = 0
    claimed = set()
    seen_keys = {}
    for it in items:
        term = it.get("term", "<no term>")
        for f in REQUIRED:
            if not it.get(f):
                print("  FAIL %-22s missing field: %s" % (term, f)); fails += 1
        if not it.get("file"):
            continue
        claimed.add(it["file"])
        path = os.path.join(AUDIO, it["file"])
        if not os.path.exists(path):
            print("  FAIL %-22s manifest names %s but it is not on disk" % (term, it["file"]))
            fails += 1
            continue
        size = os.path.getsize(path)
        if size <= 512:
            print("  FAIL %-22s %s is %d bytes, that is not audio" % (term, it["file"], size))
            fails += 1
        if not EN_OK.match(it.get("file_title", "")):
            print("  FAIL %-22s %s is not a recognised ENGLISH recording"
                  % (term, it.get("file_title"))); fails += 1
        for k in it.get("keys", []):
            if k in seen_keys:
                print("  FAIL key %s claimed by both %s and %s" % (k, seen_keys[k], term))
                fails += 1
            seen_keys[k] = term

    on_disk = set(f for f in os.listdir(AUDIO)) if os.path.isdir(AUDIO) else set()
    orphans = sorted(on_disk - claimed)
    for o in orphans:
        print("  FAIL orphan file with no manifest entry (so nobody is credited): %s" % o)
        fails += 1

    total_bytes = sum(os.path.getsize(os.path.join(AUDIO, f)) for f in on_disk)
    print()
    print("recordings claimed : %d" % len(items))
    print("files on disk      : %d  (%.1f MB)" % (len(on_disk), total_bytes / 1048576.0))
    print("structure keys     : %d covered by a human recording" % len(seen_keys))
    print("failures           : %d" % fails)
    print("covered    : manifest<->disk agreement, non-empty audio, English-only")
    print("             filenames, unique key ownership, attribution completeness,")
    print("             and that index.html actually loads the manifest")
    print("NOT covered: that the recording says the right word, or is intelligible.")
    if fails:
        sys.exit(1)
    print("RESULT: pronunciations consistent and attributed")


if __name__ == "__main__":
    main()
