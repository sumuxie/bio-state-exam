# lecture_pipeline

Turns the recorded 生物化学 lectures (VooV recordings, 11 of them, ~20 h) into
subtitles, a timestamped topic outline, bilingual notes, and a quiz — and then
into one local study app with the video embedded.

Everything here is **source**: the pipeline scripts and the reasoning behind
them. The outputs are not in the repo and should not be:

| output | where it lives | why not committed |
|---|---|---|
| `*.srt` / `*.txt` / `*_review.txt` / `*_corrections.txt` | next to each video | regenerable; ~200 KB × 11 |
| `*_app.html` | next to the video | build artefact, same rule as `*_offline.html` |
| `raw_words.json`, `cues.json`, `topics.json` | scratchpad / `work/` | intermediate, large |
| the `.mp4` files themselves | `~/Downloads/生物化学课 视频/` and `~/Documents/VooVMeeting/` | 6.6 GB |

Read `HANDOFF_lecture_video_pipeline_20260815.md` before changing anything. It
records which approaches were measured and rejected, which matters more than the
code — three of the obvious ideas here are wrong for this material, and the
scripts look arbitrary without knowing that.

## Requirements

```
pip install faster-whisper nvidia-cublas-cu12 nvidia-cudnn-cu12 jieba
```

No ffmpeg binary is needed: faster-whisper decodes through PyAV, which also reads
VooV's raw `.wemta` audio track directly.

## Running it

```
python lectures.py                    # registry: which lectures exist, what is transcribed
python transcribe_all.py              # GPU, ~13x realtime, skips finished lectures
python stages.py cues     <no>        # words -> subtitle cues -> .srt/.txt/_review.txt
python stages.py chunks   <no>        # cues -> chunks/ for the proofreading pass
#   ... dispatch proofreading agents over chunks/, they write corrections/*.json
python stages.py applyfix <no>        # verified corrections -> cues + _corrections.txt
python stages.py outline  <no>        # cues -> outline_chunks/ for the notes pass
#   ... dispatch notes agents, they write topics/part_*.json
python stages.py topics   <no>        # merge parts, check the seams
python stages.py quizout  <no>        # topics.json -> quiz_chunks/ for the rebalance pass
#   ... dispatch quiz agents, they write quiz_fixed/*.json
python stages.py quizin   <no>        # verify, merge, redistribute answer positions
python stages.py status   <no>        # what exists so far
```

Stages are re-runnable and each asserts on its own output. A stage that stops
with a message has done its job; a stage that reports success having written
nothing is the failure mode being guarded against.

## Caveat on paths

`lectures.py` and `stages.py` are parameterised by lecture number and are the
current entry points. `build_app.py` and `apply_translations.py` predate that
refactor and still hardcode lecture 1's paths — they are committed because the
HTML template and the translation merge logic are worth keeping, not because
they run as-is on another lecture. Folding them into `stages.py` is the next
change; the combined multi-lecture app has to be written anyway.

The scripts also assume this machine's layout (the video directories above, and
CUDA libraries installed as pip wheels under `site-packages/nvidia`, added via
`os.add_dll_directory` because ctranslate2 loads `cublas64_12.dll` by name and
pip does not put it on PATH).
