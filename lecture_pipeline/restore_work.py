r"""Put the working tree back after the scratch directory has been cleared.

    python restore_work.py [<no> ...]      default: every lecture in data/

`lectures.py` keeps its intermediates under %TEMP%, which Windows empties. It
did, ten days after the course was finished, taking every cues.json and
topics.json with it. Those two files per lecture are the only ones the app and
the later pipeline stages actually read, and both are preserved in `data/` here,
so this script copies them back where `stages.py` and `build_app_all.py` expect
them.

What this does NOT restore, because it is genuinely gone:

  series/*.raw_words.json   the word-level Whisper output. Re-transcribing would
                            regenerate it, but the result is the RAW text -- the
                            6142 hand-checked corrections live only in the
                            cues.json restored here. Do not re-run `stages.py
                            cues`: it rebuilds cues.json from raw_words and would
                            overwrite corrected subtitles with uncorrected ones.
  work/NN/chunks/           agent inputs, regenerable from cues.json
  work/NN/corrections/      the per-chunk correction JSON. Already applied; the
                            human-readable audit trail survives as
                            <video>_corrections.txt next to each video.
  work/NN/topics/part_*.json  merged into topics.json already
  work/NN/teacher_errors*   the proofreaders' notes, already turned into cards

The per-cue `prob` field is also absent: the app never carried it, and only the
stage-2 _review.txt low-confidence report used it.
"""
import json
import os
import shutil
import sys

from lectures import LECTURES, get

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")


def targets(L):
    """Where stages.py and build_app_all.py look for this lecture's two files."""
    if L.no == 1:                      # lecture 1 predates the work/NN layout
        return {"cues.json": os.path.join(HERE, "cues.json"),
                "topics.json": os.path.join(HERE, "topics.json")}
    return {"cues.json": L.path("cues.json"),
            "topics.json": L.path("topics.json")}


wanted = [get(n) for n in sys.argv[1:]] if len(sys.argv) > 1 else LECTURES
restored = skipped = 0
for L in wanted:
    src_dir = os.path.join(DATA, f"{L.no:02d}")
    if not os.path.isdir(src_dir):
        print(f"  L{L.no:2d} no backup in data/, skipped")
        skipped += 1
        continue
    L.ensure()
    for name, dst in targets(L).items():
        src = os.path.join(src_dir, name)
        assert os.path.exists(src), f"{src} missing"
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copyfile(src, dst)
        with open(dst, encoding="utf-8") as f:      # never restore a broken file
            json.load(f)
    print(f"  L{L.no:2d} {L.date}  cues.json + topics.json -> {os.path.dirname(dst)}")
    restored += 1

print(f"\n{restored} lecture(s) restored"
      + (f", {skipped} without a backup" if skipped else ""))
print("build_app_all.py will work again; stages.py cues will NOT "
      "(raw_words.json is gone, and re-running it would undo the corrections).")
