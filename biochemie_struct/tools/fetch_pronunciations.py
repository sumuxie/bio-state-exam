# Fetch REAL HUMAN pronunciation recordings for structure names from Wiktionary
# / Wikimedia Commons, with provenance, and write biochemie_struct/audio/.
#
# WHY THIS EXISTS. Ruojin asked for 真人发音 (a real human voice), not TTS. The
# other three apps in this repo use window.speechSynthesis, which is synthetic.
# Real recordings exist for some of these names, so we fetch those and let the
# app fall back to speech synthesis for the rest.
#
# MEASURED COVERAGE (2026-08-09, en.wiktionary batch query over 186 cleaned
# names): 62 have a human recording, 49 have an entry with no audio, 75 have no
# Wiktionary entry at all. The third that HAS audio is the ordinary-English
# third -- the amino acids, bases, hormones, cholesterol, urea. Everything
# systematic (alpha-D-glucopyranose, 3-phosphoglycerate, acetyl-CoA) has none.
# So this script can never be the whole answer, and the app must not pretend
# it is.
#
# THE ASSERTION THAT MATTERS IS THE LANGUAGE ONE. A Wiktionary page carries
# audio for EVERY language that spells the word that way: en.wiktionary's
# "glucose" page has French and Portuguese recordings sitting next to the
# English one. Nothing about a .ogg file's size, duration or checksum reveals
# which language it is -- a French recording would pass every other check in
# this script and ship as an English pronunciation. So the filename convention
# is the only signal, and it is applied as a WHITELIST (reject unless it
# matches a known English pattern) rather than a blacklist.
#
# Usage:   python tools/fetch_pronunciations.py           (skips existing)
#          python tools/fetch_pronunciations.py --force   (re-downloads)

import io, json, os, re, sys, time, urllib.parse, urllib.request, urllib.error

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA = os.path.join(ROOT, "data")
AUDIO = os.path.join(ROOT, "audio")
MANIFEST = os.path.join(ROOT, "data", "pronunciations.js")
RETRIEVED = "2026-08-10"
DOWNLOAD_DELAY = float(os.environ.get("PRON_DELAY", "1.2"))  # raise it if 429s bite

UA = {"User-Agent": "bio-state-exam/1.0 (personal study app; github.com/sumuxie/bio-state-exam)"}
API = "https://en.wiktionary.org/w/api.php"
COMMONS = "https://commons.wikimedia.org/w/api.php"

# English-only whitelist. En-us-x.ogg / en-uk-x.ogg / LL-Q1860 (eng)-Speaker-x.wav
EN_PATTERNS = [
    (re.compile(r"^File:En-", re.I), "En-* prefix"),
    (re.compile(r"^File:LL-Q1860\s*\(eng\)", re.I), "LL-Q1860 (eng)"),
]
AUDIO_EXT = (".ogg", ".oga", ".mp3", ".wav", ".flac", ".opus")


def get(url):
    # NOTE: do NOT strip the query string here -- for the API calls the query
    # string IS the request. Only the file downloads get stripped, at the call
    # site, because the API appends its own ?utm_source=... to asset URLs.
    # Retries are deliberately SHALLOW for downloads. upload.wikimedia.org
    # hands this egress a hard quota, and grinding through six exponential
    # backoffs per file turns a 61-file run into hours while still failing.
    # Failing fast to `pending` and re-running later gets more files per unit
    # of wall-clock, because the script is resumable. Override with PRON_TRIES.
    tries = int(os.environ.get("PRON_TRIES", "3"))
    delay = 4
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=45) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < tries - 1:
                time.sleep(delay); delay = min(delay * 2, 30); continue
            raise
        except Exception:
            if attempt == tries - 1:
                raise
            time.sleep(delay); delay = min(delay * 2, 30)
    raise RuntimeError("gave up after repeated 429s: " + url)


def get_json(url):
    return json.loads(get(url).decode("utf-8"))


def entries():
    """(key, en) for every structure entry, read out of the data files."""
    out = []
    for fn in sorted(os.listdir(DATA)):
        if not fn.endswith(".js") or fn == "pronunciations.js":
            continue
        s = io.open(os.path.join(DATA, fn), encoding="utf-8").read()
        for m in re.finditer(r'\{\s*key:\s*"([^"]+)"\s*,\s*cn:\s*"([^"]+)"\s*,\s*en:\s*"([^"]+)"', s):
            out.append((m.group(1), m.group(3), fn))
    assert out, "no entries parsed out of %s -- did the data shape change?" % DATA
    return out


def lookup_term(en):
    """The word to search Wiktionary for: drop parenthetical aliases, lowercase."""
    return re.sub(r"\s*\(.*?\)\s*", " ", en).strip().lower()


def main():
    force = "--force" in sys.argv
    print("reading entries from : %s" % DATA)
    ents = entries()
    print("structure entries    : %d" % len(ents))

    # term -> [keys], so several entries can share one recording
    by_term = {}
    for key, en, fn in ents:
        by_term.setdefault(lookup_term(en), []).append(key)
    terms = sorted(by_term)
    print("distinct lookup terms: %d" % len(terms))

    # ---- 1. which pages have English audio, batched 40 at a time ------------
    page_audio = {}
    for i in range(0, len(terms), 40):
        chunk = terms[i:i + 40]
        url = (API + "?action=query&format=json&prop=images&imlimit=max&titles="
               + urllib.parse.quote("|".join(c.replace(" ", "_") for c in chunk), safe="|"))
        d = get_json(url)
        q = d.get("query", {})
        norm = {n["to"]: n["from"] for n in q.get("normalized", [])}
        for _, pg in q.get("pages", {}).items():
            title = pg.get("title", "")
            orig = norm.get(title, title).replace("_", " ").lower()
            if "missing" in pg:
                continue
            for im in pg.get("images", []):
                t = im["title"]
                if not t.lower().endswith(AUDIO_EXT):
                    continue
                why = next((lbl for rx, lbl in EN_PATTERNS if rx.match(t)), None)
                if why is None:
                    continue  # other-language recording on the same page
                page_audio.setdefault(orig, []).append((t, why))
        time.sleep(1.5)

    print("terms with EN audio  : %d / %d" % (len(page_audio), len(terms)))

    # ---- 2. resolve each chosen file to a URL + author + licence -----------
    if not os.path.isdir(AUDIO):
        os.makedirs(AUDIO)

    records, skipped = [], []
    chosen = {}
    for term in sorted(page_audio):
        # prefer en-us, then en-uk/gb, then whatever else is English
        files = page_audio[term]
        def rank(ft):
            t = ft[0].lower()
            return (0 if "en-us" in t else 1 if ("en-uk" in t or "en-gb" in t) else 2, len(t))
        chosen[term] = sorted(files, key=rank)[0]

    items = sorted(chosen.items())
    for i in range(0, len(items), 20):
        batch = items[i:i + 20]
        url = (COMMONS + "?action=query&format=json&prop=imageinfo"
               "&iiprop=url|extmetadata|mime&titles="
               + urllib.parse.quote("|".join(t for _, (t, _w) in batch), safe="|"))
        d = get_json(url)
        info = {}
        for _, pg in d.get("query", {}).get("pages", {}).items():
            ii = (pg.get("imageinfo") or [{}])[0]
            info[pg.get("title", "")] = ii
        for term, (ftitle, why) in batch:
            ii = info.get(ftitle) or {}
            src = ii.get("url")
            if not src:
                skipped.append((term, ftitle, "no imageinfo url")); continue
            ext = ii.get("extmetadata", {}) or {}
            def meta(k):
                # Commons Artist fields are HTML and frequently multi-line
                # ("Speaker: X\nRecorder: Y"). Strip tags AND collapse
                # whitespace, or the credits list renders with hard breaks
                # inside a single <li>.
                v = (ext.get(k) or {}).get("value", "")
                return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", str(v))).strip()
            records.append({
                "term": term, "keys": sorted(by_term[term]),
                "file_title": ftitle, "src_url": src,
                "matched_by": why,
                "artist": meta("Artist") or "(not stated on Commons)",
                "license": meta("LicenseShortName") or "(not stated)",
                "license_url": meta("LicenseUrl"),
                "page": "https://en.wiktionary.org/wiki/" + urllib.parse.quote(term.replace(" ", "_")),
                "retrieved": RETRIEVED,
            })
        time.sleep(1.5)

    # ---- 3. download -------------------------------------------------------
    # upload.wikimedia.org applies a hard quota to this egress: a handful of
    # files go through, then it 429s for minutes regardless of backoff. So a
    # failed download is NOT fatal -- it is recorded as pending and the run
    # continues. The script is resumable (existing files are skipped), so
    # re-running it finishes the job. What must never happen is a manifest
    # that claims a recording whose file is not on disk, which is why the
    # pending ones are dropped from `records` before the assertions below.
    got, pending = 0, []
    for r in list(records):
        ext = os.path.splitext(r["src_url"].split("?")[0])[1].lower() or ".ogg"
        local = r["term"].replace(" ", "_").replace("/", "_") + ext
        r["file"] = local
        dest = os.path.join(AUDIO, local)
        if os.path.exists(dest) and not force:
            r["bytes"] = os.path.getsize(dest); continue
        try:
            blob = get(r["src_url"].split("?")[0])
        except Exception as ex:
            pending.append(r["term"]); records.remove(r)
            print("  ! %-30s pending (%s)" % (local, type(ex).__name__))
            time.sleep(DOWNLOAD_DELAY)
            continue
        assert len(blob) > 512, "%s: downloaded %d bytes, that is not audio" % (local, len(blob))
        io.open(dest, "wb").write(blob)
        r["bytes"] = len(blob)
        got += 1
        print("  + %-34s %6d bytes" % (local, len(blob)))
        time.sleep(DOWNLOAD_DELAY)

    # ---- 4. assert before writing -----------------------------------------
    assert records, "resolved zero recordings -- refusing to write an empty manifest"
    for r in records:
        assert r["file"] and os.path.exists(os.path.join(AUDIO, r["file"])), r["term"]
        assert r["bytes"] > 512, r["term"]
        assert r["keys"], r["term"]
        assert any(rx.match(r["file_title"]) for rx, _ in EN_PATTERNS), \
            "%s: %s is not a recognised ENGLISH recording" % (r["term"], r["file_title"])

    payload = {"retrieved": RETRIEVED,
               "source": "en.wiktionary.org / commons.wikimedia.org",
               "note": ("Real human recordings. Coverage is partial by nature: systematic "
                        "chemical names have no dictionary entry. The app falls back to "
                        "speech synthesis and says so in the UI."),
               "items": sorted(records, key=lambda r: r["term"])}

    body = ("/* GENERATED by tools/fetch_pronunciations.py on %s -- do not hand-edit.\n"
            "   Real human pronunciation recordings from en.wiktionary / Wikimedia Commons.\n"
            "   Every entry carries its source URL, author and licence: these are other\n"
            "   people's recordings and the attribution travels with them.\n"
            "   Coverage is PARTIAL (%d of %d lookup terms). Names with no recording fall\n"
            "   back to speech synthesis in app.js, which labels itself as synthetic. */\n"
            "window.STRUCT = window.STRUCT || {};\n"
            "window.STRUCT.pronunciations = %s;\n"
            % (RETRIEVED, len(records), len(terms), json.dumps(payload, ensure_ascii=False, indent=1)))
    io.open(MANIFEST, "w", encoding="utf-8", newline="").write(body)

    print("downloaded new       : %d" % got)
    print("recordings in manifest: %d  (covering %d structure keys)"
          % (len(records), sum(len(r["keys"]) for r in records)))
    if skipped:
        print("SKIPPED (%d): %s" % (len(skipped), skipped[:5]))
    if pending:
        print("PENDING (%d) -- rate-limited, RE-RUN THIS SCRIPT to finish them:" % len(pending))
        print("   " + ", ".join(pending))
        print("   (tip: PRON_DELAY=8 python tools/fetch_pronunciations.py)")
    print("wrote                : %s" % MANIFEST)
    print("audio dir            : %s" % AUDIO)


if __name__ == "__main__":
    main()
