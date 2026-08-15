"""Transcribe the whole lecture series to word-level JSON, in recording order.

Ordering comes from the mp4's own creation_time, not the filesystem timestamp:
the files were all copied to this disk on the same afternoon, so their filesystem
dates carry no information about which lecture came first.

Writes <scratchpad>/series/NN_<name>.raw_words.json and skips whatever is already
there, so the run can be interrupted and restarted.
"""
import glob
import json
import os
import time

import numpy as np
import av
import nvidia

for _d in {os.path.dirname(p) for p in glob.glob(os.path.join(list(nvidia.__path__)[0], "**", "*.dll"), recursive=True)}:
    os.add_dll_directory(_d)

from faster_whisper import WhisperModel, BatchedInferencePipeline
from faster_whisper.audio import decode_audio

HERE = os.path.dirname(os.path.abspath(__file__))
SERIES = os.path.join(HERE, "series")
os.makedirs(SERIES, exist_ok=True)
SRC = r"C:\Users\Admin\Downloads\生物化学课 视频"
SR = 16000

vids = []
for p in glob.glob(os.path.join(SRC, "*.mp4")):
    with av.open(p) as c:
        md = {k.lower(): v for k, v in c.metadata.items()}
        vids.append((md.get("creation_time", ""), p, c.duration / av.time_base))
vids.sort()
assert all(v[0] for v in vids), "a video has no creation_time; ordering would be arbitrary"

print(f"{len(vids)} lectures, {sum(v[2] for v in vids)/3600:.1f} h of audio")
for i, (t, p, d) in enumerate(vids, 2):      # lecture 1 is the 2026-06-27 recording
    print(f"  {i:2d}  {t[:10]}  {d/60:6.1f} min  {os.path.basename(p)}")

model = WhisperModel("large-v3", device="cuda", compute_type="float16")
pipe = BatchedInferencePipeline(model=model)

for i, (ctime, path, _) in enumerate(vids, 2):
    stem = f"{i:02d}_{os.path.splitext(os.path.basename(path))[0]}"
    out = os.path.join(SERIES, stem + ".raw_words.json")
    if os.path.exists(out):
        print(f"skip {stem}", flush=True)
        continue

    print(f"\n=== {stem} ===", flush=True)
    t0 = time.time()
    audio = decode_audio(path, sampling_rate=SR)
    dur = len(audio) / SR
    print(f"  {dur/60:.1f} min decoded in {time.time()-t0:.0f}s", flush=True)

    t1 = time.time()
    segments, _ = pipe.transcribe(audio, batch_size=8, language="zh",
                                  vad_filter=True, word_timestamps=True)
    blocks, nw, nxt = [], 0, 0.0
    for s in segments:
        blocks.append({"start": s.start, "end": s.end, "text": s.text.strip(),
                       "no_speech_prob": s.no_speech_prob, "avg_logprob": s.avg_logprob,
                       "words": [{"start": w.start, "end": w.end, "word": w.word,
                                  "prob": w.probability} for w in (s.words or [])]})
        nw += len(blocks[-1]["words"])
        if s.end >= nxt:
            el = time.time() - t1
            print(f"  {s.end/dur*100:5.1f}%  {el/60:5.1f} min  {s.end/el:5.1f}x realtime", flush=True)
            nxt = s.end + 1200

    assert blocks, f"nothing decoded from {path}"
    assert blocks[-1]["end"] > dur * 0.9, f"stopped at {blocks[-1]['end']:.0f}s of {dur:.0f}s"
    assert nw > dur * 2, f"only {nw} words for {dur/60:.0f} min - suspiciously sparse"

    tmp = out + ".part"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump({"duration": dur, "source": path, "recorded": ctime, "blocks": blocks},
                  f, ensure_ascii=False)
    os.replace(tmp, out)      # never leave a half-written file that a rerun would skip
    print(f"  {len(blocks)} blocks / {nw} words in {(time.time()-t1)/60:.1f} min -> {stem}", flush=True)

print("\nall lectures transcribed")
