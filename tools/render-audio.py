"""Pre-render the 🔊 text of chosen nodes to audio files, so the reading works on a
device that has no good voice of its own.

    python tools/render-audio.py 1-1 1-2 ...
    python tools/render-audio.py --topics tools/topics.json --voice-en bf_isabella 1-1
    python tools/render-audio.py --verify

WHY THIS EXISTS
`speechSynthesis` is not a file, it is whatever the device happens to have. Chrome's
"Google UK English Female" is a NETWORK voice on Google's servers, so it cannot be
bundled, and it does not exist at all on an iPad — where Safari offers only Apple's
voices. Reading on the iPad was the thing that did not work.

So the audio is rendered here, once, and shipped as ordinary files. Any browser can
play an .m4a.

WHICH ENGINE, AND WHY IT MATTERS THAT IT IS THIS ONE
Kokoro-82M, Apache-2.0, weights included. That licence is the point: the audio it
produces is ours to publish, which is what makes committing it to a public repo and
serving it from GitHub Pages legitimate. Capturing Chrome's Google voice off the wire
would sound closer to what you are used to and would be republishing Google's audio.

MATCHING AT RUNTIME
The app looks a clip up by hashing the same text it would otherwise have spoken, so
nothing has to be wired per field. `norm()` and `fnv1a()` here MUST stay identical to
their twins in app.js — if they drift, every lookup misses silently and the app just
goes back to the browser voice, which is a very quiet way to fail. `--verify` re-reads
the manifest and checks every file is present.
"""
import argparse, hashlib, json, os, pathlib, re, subprocess, sys, unicodedata

ROOT = pathlib.Path(__file__).resolve().parent.parent
APP = ROOT / "biochemie_pro"
AUDIO = APP / "audio"
MODEL_DIR = pathlib.Path(os.environ.get("KOKORO_DIR", ROOT / ".kokoro"))

# ---------------------------------------------------------------- key derivation
BOLD = re.compile(r"\*\*")

def norm(s):
    """The exact string the app hashes. Keep in step with norm() in app.js."""
    s = unicodedata.normalize("NFC", str(s))
    s = BOLD.sub("", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()

def fnv1a(s):
    """32-bit FNV-1a over UTF-8, hex. Chosen because it is four lines in both
    languages and needs no library on either side."""
    h = 0x811c9dc5
    for b in s.encode("utf-8"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")

# Unit separator between the language tag and the text, so "en" + "glucose" can never
# collide with "e" + "nglucose". Built from its character code rather than typed: a
# literal control byte in source is invisible, unreviewable, and cannot be matched by
# an editor -- this line was written with a raw one three times before it stuck, and
# the first attempt embedded a NUL, which Python refuses to parse at all.
SEP = chr(31)

def clip_key(text, lang):
    return fnv1a(lang.split("-")[0].lower() + SEP + norm(text))

# ------------------------------------------------------------------ node fields
def speakable(topic, langs):
    """Every string the app puts behind a 🔊 button, with the lang it asks for.

    Mirrors the speakBtn/speakPairBtn call sites in app.js. Czech is included only
    if asked for: Kokoro has no Czech, so those stay on the browser voice."""
    out = []
    def add(text, lang):
        if text and lang.split("-")[0] in langs:
            out.append((str(text), lang))

    add(topic.get("czTitle"), "cs-CZ")
    add(topic.get("enTitle"), "en-US")
    add(topic.get("cnTitle"), "zh-CN")
    for block in ("summary", "mustKnow"):
        b = topic.get(block) or {}
        if isinstance(b, dict):
            add(b.get("en"), "en-US")
            add(b.get("cn"), "zh-CN")
    for key in ("points", "gapPoints", "beyondPoints"):
        for p in topic.get(key) or []:
            add(p.get("en"), "en-US")
            add(p.get("cn"), "zh-CN")
    for ch in topic.get("chains") or []:
        add(ch.get("title_en"), "en-US")
        for s in ch.get("steps") or []:
            add(s.get("en"), "en-US")
            add(s.get("cn"), "zh-CN")
    for t in topic.get("terms") or []:
        add(t.get("en"), "en-US")
        add(t.get("cn"), "zh-CN")
        add(t.get("cz"), "cs-CZ")
        add(t.get("def_en"), "en-US")
        add(t.get("def_cn"), "zh-CN")
    o = topic.get("oral") or {}
    add(o.get("q_en"), "en-US")
    add(o.get("q_cn"), "zh-CN")
    add(o.get("model_en"), "en-US")
    add(topic.get("coverageNote"), "en-US")
    add(topic.get("coverageNoteCn"), "zh-CN")
    return out

# ------------------------------------------------------------------------ main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("nodes", nargs="*", help="node ids, e.g. 1-1")
    ap.add_argument("--voice-en", default="bf_emma")
    ap.add_argument("--voice-zh", default="zf_xiaoxiao")
    ap.add_argument("--langs", default="en", help="comma list: en,zh,cs")
    ap.add_argument("--bitrate", default="64k")
    ap.add_argument("--speakables", default=str(ROOT / "tools" / "speakables.json"),
                    help="what to render, harvested from the rendered DOM by "
                         "tools/dump-speakables.py -- exact, unlike a hand-kept field list")
    ap.add_argument("--topics", default=None,
                    help="DEPRECATED field-guessing path; --speakables is exact")
    ap.add_argument("--verify", action="store_true", help="check the manifest only")
    args = ap.parse_args()

    AUDIO.mkdir(exist_ok=True)
    man_path = AUDIO / "manifest.js"
    manifest = {}
    if man_path.exists():
        raw = man_path.read_text(encoding="utf-8")
        m = re.search(r"=\s*(\{.*\});?\s*$", raw, re.S)
        if m:
            manifest = json.loads(m.group(1))

    if args.verify:
        missing = [k for k, v in manifest.items() if not (AUDIO / v).exists()]
        print(f"manifest entries: {len(manifest)}   missing files: {len(missing)}")
        for k in missing[:20]:
            print("  missing", k, manifest[k])
        return 1 if missing else 0

    langs = set(args.langs.split(","))
    pairs = []                                    # (text, lang)
    if args.topics:
        topics = json.loads(pathlib.Path(args.topics).read_text(encoding="utf-8"))
        by_id = {t["id"]: t for t in topics}
        for nid in args.nodes:
            if nid not in by_id:
                sys.exit(f"no node {nid}")
            pairs += speakable(by_id[nid], langs)
        nodes = set(args.nodes)
    else:
        sp = pathlib.Path(args.speakables)
        if not sp.exists():
            sys.exit(f"{sp} not found — run tools/dump-speakables.py <node ids> first")
        rows = json.loads(sp.read_text(encoding="utf-8"))
        if args.nodes:
            rows = [r for r in rows if r["id"] in set(args.nodes)]
        pairs = [(r["text"], r["lang"]) for r in rows
                 if r["lang"].split("-")[0] in langs]
        nodes = set(r["id"] for r in rows)
        if not pairs:
            sys.exit("nothing to render — check the node ids and --langs")

    jobs = {}
    for text, lang in pairs:
        k = clip_key(text, lang)
        if k not in manifest and k not in jobs:
            jobs[k] = (norm(text), lang)
    print(f"{len(nodes)} node(s), {len(pairs)} button(s) -> {len(jobs)} new clip(s)")
    if not jobs:
        return 0

    from kokoro_onnx import Kokoro
    import soundfile as sf
    import imageio_ffmpeg
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    kok = Kokoro(str(MODEL_DIR / "kokoro-v1.0.onnx"), str(MODEL_DIR / "voices-v1.0.bin"))

    total = 0
    for i, (k, (text, lang)) in enumerate(sorted(jobs.items()), 1):
        short = lang.split("-")[0]
        voice = args.voice_zh if short == "zh" else args.voice_en
        # espeak-ng calls Mandarin "cmn"; "zh" and "zh-cn" are both rejected outright.
        # Its Mandarin g2p is much weaker than its English one, so the Chinese clips
        # are worth listening to before committing a whole chapter of them.
        klang = "cmn" if short == "zh" else "en-gb"
        samples, rate = kok.create(text, voice=voice, speed=1.0, lang=klang)
        wav = AUDIO / (k + ".wav")
        sf.write(wav, samples, rate)
        out = AUDIO / (k + ".m4a")
        subprocess.run([ff, "-y", "-loglevel", "error", "-i", str(wav),
                        "-c:a", "aac", "-b:a", args.bitrate, "-ar", "24000",
                        "-ac", "1", str(out)], check=True)
        wav.unlink()
        manifest[k] = out.name
        total += out.stat().st_size
        print(f"  [{i}/{len(jobs)}] {k}  {len(samples)/rate:5.1f}s  "
              f"{out.stat().st_size/1024:6.0f} KB  {text[:56]}")

    header = (
        "/* Pre-rendered reading audio. Generated by tools/render-audio.py --\n"
        "   do not edit by hand.\n\n"
        "   Maps fnv1a32(lang + U+001F + normalised text) to a file in this folder. The\n"
        "   app hashes the same text it would have spoken and plays the file if there\n"
        "   is one, otherwise it falls back to the browser's own voice. That is what\n"
        "   lets the iPad, which has no Google voice and no good English one, read\n"
        "   these pages in the same voice as everywhere else.\n\n"
        "   Voice: Kokoro-82M (Apache-2.0), British female. The licence is why this\n"
        "   audio can be committed and served publicly. */\n"
        "window.BIOPRO_AUDIO = ")
    man_path.write_text(header + json.dumps(manifest, indent=0, sort_keys=True) + ";\n",
                        encoding="utf-8")
    print(f"\nmanifest: {len(manifest)} clips, {total/1024/1024:.1f} MB added")
    print(f"wrote {man_path}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
