"""The lecture series, in recording order, with per-lecture paths.

Order comes from each mp4's own creation_time. The filesystem dates are useless
here - every file was copied to this disk on the same afternoon.

Lecture 1 was processed before the pipeline was generalised, so its files live
next to its own video rather than under work/.
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
WORK = os.path.join(HERE, "work")
SERIES = os.path.join(HERE, "series")
VIDEO_DIR = r"C:\Users\Admin\Downloads\生物化学课 视频"
L1_DIR = r"C:\Users\Admin\Documents\VooVMeeting\2026-06-27 14.10.06.350"

# no, stem-in-series, video file, date, Chinese title, English title
_ROWS = [
    (1, None, os.path.join(L1_DIR, "meeting_01.mp4"), "2026-06-27",
     "氨基酸 · 蛋白质结构 · 肌红蛋白与血红蛋白",
     "Amino acids, protein structure, myoglobin and hemoglobin"),
    (2, "02_20260704_酶通论——米氏方程01", "20260704_酶通论——米氏方程01.mp4", "2026-07-04",
     "酶通论 · 米氏方程（上）", "Enzymes in general, and the Michaelis-Menten equation (part 1)"),
    (3, "03_20260704_酶通论——米氏方程02", "20260704_酶通论——米氏方程02.mp4", "2026-07-04",
     "酶通论 · 米氏方程（下）", "Enzymes in general, and the Michaelis-Menten equation (part 2)"),
    (4, "04_20260708_米氏方程及抑制剂的推论", "20260708_米氏方程及抑制剂的推论.mp4", "2026-07-08",
     "米氏方程与抑制剂的推论", "The Michaelis-Menten equation and what it implies for inhibitors"),
    (5, "05_酶个论_脂溶性维生素", "酶个论_脂溶性维生素.mp4", "2026-07-13",
     "酶各论 · 脂溶性维生素", "Individual enzymes; the fat-soluble vitamins"),
    (6, "06_20260716_维生素_核酸结构", "20260716_维生素_核酸结构.mp4", "2026-07-16",
     "维生素 · 核酸结构", "Vitamins; the structure of nucleic acids"),
    (7, "07_20260728_核酸_代谢序章", "20260728_核酸_代谢序章.mp4", "2026-07-28",
     "核酸 · 代谢序章", "Nucleic acids; the prelude to metabolism"),
    (8, "08_糖酵解途径", "糖酵解途径.mp4", "2026-08-04",
     "糖酵解途径", "Glycolysis"),
    (9, "09_TCA循环+电子传递链1", "TCA循环+电子传递链1.mp4", "2026-08-08",
     "TCA 循环与电子传递链（上）", "The TCA cycle and the electron transport chain (part 1)"),
    (10, "10_TCA循环+电子传递链2", "TCA循环+电子传递链2.mp4", "2026-08-08",
     "TCA 循环与电子传递链（下）", "The TCA cycle and the electron transport chain (part 2)"),
    (11, "11_20260815_脂质的分解与合成_氨基酸代谢开头",
     "20260815_脂质的分解与合成_氨基酸代谢开头.mp4", "2026-08-15",
     "脂质的分解与合成 · 氨基酸代谢开头",
     "Breakdown and synthesis of lipids; the start of amino acid metabolism"),
    # mp4 creation_time 2026-08-17T14:10:33Z; the file name says 08-18.
    # Dated by the recording, like every other row.
    (12, "12_20260818_尿素循环_核苷酸的代谢",
     "20260818_尿素循环_核苷酸的代谢.mp4", "2026-08-17",
     "尿素循环 · 核苷酸的代谢",
     "The urea cycle; nucleotide metabolism"),
]


class Lecture:
    def __init__(self, no, stem, video, date, zh, en):
        self.no, self.date, self.title_zh, self.title_en = no, date, zh, en
        self.video = video if os.path.isabs(video) else os.path.join(VIDEO_DIR, video)
        self.stem = stem
        self.dir = L1_DIR if no == 1 else os.path.join(WORK, f"{no:02d}")
        self.raw = (os.path.join(HERE, "raw_words.json") if no == 1
                    else os.path.join(SERIES, f"{stem}.raw_words.json"))

    def path(self, *parts):
        return os.path.join(self.dir, *parts)

    def ensure(self):
        for sub in ("", "chunks", "corrections", "outline_chunks", "topics",
                    "quiz_chunks", "quiz_fixed"):
            os.makedirs(self.path(sub) if sub else self.dir, exist_ok=True)

    @property
    def transcribed(self):
        return os.path.exists(self.raw)

    def __repr__(self):
        return f"<L{self.no} {self.date} {self.title_zh}>"


LECTURES = [Lecture(*r) for r in _ROWS]
BY_NO = {l.no: l for l in LECTURES}


def get(no):
    l = BY_NO.get(int(no))
    if l is None:
        raise SystemExit(f"no lecture {no}; have {sorted(BY_NO)}")
    return l


if __name__ == "__main__":
    for l in LECTURES:
        mark = "ok " if l.transcribed else "-- "
        vid = "video ok" if os.path.exists(l.video) else "VIDEO MISSING"
        print(f"{mark}L{l.no:2d}  {l.date}  {l.title_zh[:34]:36s} {vid}")
