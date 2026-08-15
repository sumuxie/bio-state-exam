"""Per-lecture pipeline stages.

    python stages.py cues     <no>   raw words -> cues.json + a .srt beside the video
    python stages.py chunks   <no>   cues -> chunks/ for the proofreading pass
    python stages.py applyfix <no>   corrections/ -> cues.json, and a change log
    python stages.py outline  <no>   cues -> outline_chunks/ for the notes pass
    python stages.py topics   <no>   topics/part_*.json -> topics.json, seams checked
    python stages.py quizout  <no>   topics.json -> quiz_chunks/ for the rebalance pass
    python stages.py quizin   <no>   quiz_fixed/ -> topics.json, biases measured
    python stages.py status   <no>   what exists so far

Every stage is re-runnable and asserts on its own output. The reasoning behind
the cue splitter, and the two approaches rejected before it, is in build_cues.py.
"""
import glob
import json
import os
import random
import re
import statistics as st
import sys
from collections import Counter

import jieba

from lectures import get, LECTURES

MIN_CHARS, TARGET_CHARS, MAX_CHARS, HARD_MAX = 8, 15, 20, 26
GAP_WEIGHT, LEN_WEIGHT = 3.0, 0.08
COMMA_GAP, PERIOD_GAP = 0.25, 0.60
CHUNK_SIZE, CHUNK_OVERLAP = 330, 25
OUTLINE_PARTS = 6
QUIZ_PARTS = 5

TERMS = """甘氨酸 丙氨酸 缬氨酸 亮氨酸 异亮氨酸 脯氨酸 苯丙氨酸 色氨酸 甲硫氨酸 半胱氨酸
丝氨酸 苏氨酸 酪氨酸 天冬酰胺 谷氨酰胺 天冬氨酸 谷氨酸 赖氨酸 精氨酸 组氨酸 谷胱甘肽
侧链 主链 疏水 亲水 疏水腔 极性 非极性 羟基 巯基 羧基 氨基 羰基 酰胺 氢键 盐桥 二硫键
肽键 肽链 多肽 二级结构 三级结构 四级结构 α螺旋 β折叠 无规卷曲 二面角 拉氏图 残基 构象
结构域 变性 复性 折叠 亚基 寡聚体 四聚体 复合物 肌红蛋白 血红蛋白 血红素 卟啉环 配位键
别构效应 协同效应 氧解离曲线 氧分压 饱和度 波尔效应 等电点 冷冻电镜 热休克蛋白 朊病毒
米氏方程 米氏常数 酶动力学 底物 产物 活性位点 竞争性抑制 非竞争性抑制 反竞争性抑制
不可逆抑制 别构酶 辅酶 辅基 辅因子 同工酶 酶原 周转数 双倒数作图 电泳 层析 亲和柱
维生素 脂溶性维生素 水溶性维生素 视黄醇 钙化醇 生育酚 叶绿醌 硫胺素 核黄素 烟酰胺
吡哆醇 生物素 叶酸 钴胺素 抗坏血酸 核酸 核苷 核苷酸 碱基 嘌呤 嘧啶 磷酸二酯键 双螺旋
超螺旋 拓扑异构酶 端粒 核小体 糖酵解 己糖激酶 磷酸果糖激酶 丙酮酸激酶 丙酮酸 乳酸 底物水平磷酸化
三羧酸循环 柠檬酸 异柠檬酸 α酮戊二酸 琥珀酰辅酶A 琥珀酸 延胡索酸 苹果酸 草酰乙酸
电子传递链 氧化磷酸化 泛醌 细胞色素 铁硫簇 质子梯度 ATP合酶 化学渗透 解偶联
脂肪酸 β氧化 酮体 甘油三酯 脂蛋白 胆固醇 氨基酸代谢 转氨基 脱氨基 尿素循环 氨""".split()
for _t in TERMS:
    jieba.add_word(_t, freq=100000)

# Whisper's stock filler over silence. Two tiers, because the single words are not
# safe on their own: 转发 cost a real line in lecture 9 ("我刚刚发是不是就转发给你"),
# and 关注/订阅 are ordinary words a teacher can say. A bare word only counts when
# it keeps company with another from the same canned phrase.
HALLUCINATION_RE = re.compile("|".join([
    r"字幕", r"明鏡與點點", r"明镜与点点", r"點點欄目", r"点点栏目",
    r"謝謝觀看", r"谢谢观看", r"感謝觀看", r"感谢观看", r"感謝收看", r"感谢收看",
    r"Amara\.org", r"MING PAO", r"哔哩哔哩", r"嗶哩嗶哩", r"未經允許", r"未经允许",
    r"请不吝", r"請不吝", r"下集再见", r"下次再見",
]), re.I)
SOLICIT = [r"點贊", r"点赞", r"訂閱", r"订阅", r"轉發", r"转发", r"打賞", r"打赏",
           r"关注我们", r"關注我們", r"支持明鏡", r"支持明镜"]


def is_hallucination(text):
    if HALLUCINATION_RE.search(text):
        return True
    return sum(1 for p in SOLICIT if re.search(p, text, re.I)) >= 2

# Unambiguous: these can only mean an option, and rotation would make them point at
# the wrong one. Hard block.
POSITIONAL = [
    r"选项[一二三四1-4ABCD]", r"第[一二三四1-4]个?选项", r"[（(][ABCD][)）]",
    r"\boption\s*[ABCD1-4]\b",
    r"\bthe\s+(first|second|third|fourth|last)\s+(option|choice|answer)\b",
    r"\b[ABCD]\s*项",
]

# Ambiguous: 「第二项」 is the second TERM of an expression as often as it is the second
# option — in the Lineweaver-Burk derivation it is always the former. Blocking these
# outright rejects correct work; ignoring them lets a real one through. So they are
# printed for a human to read, and the run continues.
AMBIGUOUS = [r"第[一二三四]项", r"最后一项", r"前一项", r"后一项"]


def ts(x):
    h, r = divmod(x, 3600)
    m, s = divmod(r, 60)
    return f"{int(h):02d}:{int(m):02d}:{int(s):02d},{int(round((s % 1) * 1000)):03d}"


def hms(x):
    return f"{int(x//3600):02d}:{int(x%3600//60):02d}:{int(x%60):02d}"


def _load(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)


def _save(p, o, indent=None):
    with open(p, "w", encoding="utf-8") as f:
        json.dump(o, f, ensure_ascii=False, indent=indent)


# --------------------------------------------------------------------- cues
def stage_cues(L):
    L.ensure()
    data = _load(L.raw)
    words = [w for b in data["blocks"] for w in b["words"]]
    dur = data["duration"]
    text = "".join(w["word"] for w in words)

    owner, gap_at, off = [], {}, 0
    for i, w in enumerate(words):
        owner.extend([i] * len(w["word"]))
        off += len(w["word"])
        gap_at[off] = (words[i + 1]["start"] - w["end"]) if i + 1 < len(words) else 99.0
    assert len(owner) == len(text)

    breaks, pos = set(), 0
    for tok in jieba.cut(text, HMM=True):
        pos += len(tok)
        breaks.add(pos)

    cues, start, forced = [], 0, 0
    while start < len(text):
        best = None
        for o in range(start + MIN_CHARS, min(start + HARD_MAX, len(text)) + 1):
            if o not in breaks:
                continue
            n = o - start
            score = gap_at.get(o, 0.0) * GAP_WEIGHT - abs(n - TARGET_CHARS) * LEN_WEIGHT
            if n > MAX_CHARS:
                score -= 1.0
            if best is None or score > best[0]:
                best = (score, o)
        if best is None:
            o, forced = min(start + MAX_CHARS, len(text)), forced + 1
        else:
            o = best[1]
        a, b = owner[start], owner[o - 1]
        seg = text[start:o].strip()
        if seg:
            grp = words[a:b + 1]
            cues.append({"start": words[a]["start"], "end": words[b]["end"], "text": seg,
                         "prob": sum(w["prob"] for w in grp) / len(grp)})
        start = o

    dropped = [c for c in cues if is_hallucination(c["text"])]
    cues = [c for c in cues if not is_hallucination(c["text"])]
    # The next cue's start is a hard ceiling: a cue can never outlast its successor.
    # Padding short cues first and clamping second (with a floor) left an overlap
    # whenever the next cue began within the floor, so the ceiling is applied last
    # and without a floor.
    for i, c in enumerate(cues):
        ceiling = cues[i + 1]["start"] - 0.02 if i + 1 < len(cues) else float("inf")
        if c["end"] - c["start"] < 0.7:
            c["end"] = c["start"] + 0.7
        c["end"] = min(c["end"], ceiling)
        if c["end"] <= c["start"]:
            c["end"] = c["start"] + 0.01      # cues this tight are back to back speech

    _save(L.path("cues.json"), cues)
    _write_outputs(L, cues)
    print(f"L{L.no}: {len(words)} words -> {len(cues)} cues, "
          f"mean {sum(len(c['text']) for c in cues)/len(cues):.1f} chars, "
          f"{forced} forced cuts, {len(dropped)} hallucinations dropped")
    for c in dropped:
        print(f"    dropped [{hms(c['start'])}] {c['text']}")
    assert cues and cues[-1]["end"] > dur * 0.9, "cues stop before the end of the audio"
    assert all(c["start"] < c["end"] for c in cues)
    assert all(cues[i]["end"] <= cues[i + 1]["start"] for i in range(len(cues) - 1))


def _write_outputs(L, cues):
    base = os.path.splitext(L.video)[0]
    with open(base + ".srt", "w", encoding="utf-8-sig") as f:
        for n, c in enumerate(cues, 1):
            f.write(f"{n}\n{ts(c['start'])} --> {ts(c['end'])}\n{c['text']}\n\n")
    with open(base + ".txt", "w", encoding="utf-8") as f:
        f.write("# 逗号句号由停顿时长推断（>=0.25s 逗号，>=0.60s 句号），非讲者所说；.srt 保留原文。\n\n")
        para, s0 = [], cues[0]["start"]
        for i, c in enumerate(cues):
            nxt = cues[i + 1] if i + 1 < len(cues) else None
            gap = (nxt["start"] - c["end"]) if nxt else 99.0
            para.append(c["text"] + ("。" if gap >= PERIOD_GAP else "，" if gap >= COMMA_GAP else ""))
            if sum(len(p) for p in para) > 200 or nxt is None or gap > 1.5:
                f.write(f"[{hms(s0)}] {''.join(para)}\n\n")
                para = []
                if nxt:
                    s0 = nxt["start"]
    low = [c for c in cues if c["prob"] < 0.55]
    with open(base + "_review.txt", "w", encoding="utf-8") as f:
        f.write(f"# {len(low)} of {len(cues)} lines have mean word confidence < 0.55.\n\n")
        for c in low:
            f.write(f"[{hms(c['start'])}] p={c['prob']:.2f}  {c['text']}\n")


# ------------------------------------------------------------------- chunks
def stage_chunks(L):
    cues = _load(L.path("cues.json"))
    n = 0
    for i in range(0, len(cues), CHUNK_SIZE):
        lo, hi = max(0, i - CHUNK_OVERLAP), min(len(cues), i + CHUNK_SIZE + CHUNK_OVERLAP)
        own_hi = min(len(cues), i + CHUNK_SIZE)
        with open(L.path("chunks", f"chunk_{n:02d}.txt"), "w", encoding="utf-8") as f:
            f.write(f"# chunk {n}: you own lines {i}..{own_hi-1}; "
                    f"the rest are context only, do not correct them\n")
            for j in range(lo, hi):
                f.write(f"{j}{' ' if i <= j < own_hi else '.'}{cues[j]['text']}\n")
        n += 1
    print(f"L{L.no}: {len(cues)} cues -> {n} chunks in {L.path('chunks')}")
    return n


def stage_applyfix(L):
    cues = _load(L.path("cues.json"))
    got, applied, rejected, seen = [], [], [], set()
    for p in sorted(glob.glob(L.path("corrections", "*.json"))):
        got.extend(_load(p))
    for c in got:
        i = c.get("index")
        if not isinstance(i, int) or not 0 <= i < len(cues):
            rejected.append((c, "index out of range"))
        elif cues[i]["text"] != c.get("old"):
            rejected.append((c, f"old text does not match line {i}"))
        elif not str(c.get("new", "")).strip():
            rejected.append((c, "empty replacement"))
        elif i in seen:
            rejected.append((c, "duplicate index"))
        else:
            seen.add(i)
            applied.append(c)
    originals = {c["index"]: cues[c["index"]]["text"] for c in applied}
    for c in applied:
        cues[c["index"]]["text"] = c["new"]
    _save(L.path("cues.json"), cues)
    _write_outputs(L, cues)
    with open(os.path.splitext(L.video)[0] + "_corrections.txt", "w", encoding="utf-8") as f:
        f.write(f"# {len(applied)} 处修正，共 {len(cues)} 行。时间戳 / 识别到的 / 改成 / 理由。\n\n")
        for c in sorted(applied, key=lambda x: x["index"]):
            f.write(f"[{hms(cues[c['index']]['start'])}] {originals[c['index']]}\n"
                    f"        -> {c['new']}\n           ({c.get('reason','无')})\n\n")
    print(f"L{L.no}: applied {len(applied)}, rejected {len(rejected)}")
    for c, why in rejected[:20]:
        print(f"    idx={c.get('index')} {why}")
    assert not rejected, "some corrections did not verify"


# ------------------------------------------------------------------ outline
def stage_outline(L):
    cues = _load(L.path("cues.json"))
    paras, buf, s0 = [], [], cues[0]["start"]
    for i, c in enumerate(cues):
        buf.append(c["text"])
        nxt = cues[i + 1] if i + 1 < len(cues) else None
        if nxt is None or nxt["start"] - s0 >= 30.0:
            paras.append((s0, "".join(buf)))
            buf = []
            if nxt:
                s0 = nxt["start"]
    per = (len(paras) + OUTLINE_PARTS - 1) // OUTLINE_PARTS
    for n in range(OUTLINE_PARTS):
        lo, hi = n * per, min((n + 1) * per, len(paras))
        if lo >= hi:
            continue
        ctx = max(0, lo - 2)
        with open(L.path("outline_chunks", f"outline_{n:02d}.txt"), "w", encoding="utf-8") as f:
            f.write(f"# part {n} of {OUTLINE_PARTS}: you own {hms(paras[lo][0])} to {hms(paras[hi-1][0])}\n")
            if ctx < lo:
                f.write(f"# the first {lo-ctx} paragraphs are context from the previous part\n")
            f.write("\n")
            for t, txt in paras[ctx:hi]:
                f.write(f"[{hms(t)}] {txt}\n\n")
    print(f"L{L.no}: {len(paras)} paragraphs -> {OUTLINE_PARTS} outline files")


def stage_topics(L):
    cues = _load(L.path("cues.json"))
    end = cues[-1]["end"]
    topics = []
    for p in sorted(glob.glob(L.path("topics", "part_*.json"))):
        topics.extend(_load(p))
    topics.sort(key=lambda t: t["start"])
    problems = []
    for i, t in enumerate(topics):
        if t["end"] <= t["start"]:
            problems.append(f"topic {i} ends before it starts")
    for i in range(len(topics) - 1):
        gap = topics[i + 1]["start"] - topics[i]["end"]
        if gap == 0:
            continue
        if abs(gap) <= 45:
            mid = round((topics[i]["end"] + topics[i + 1]["start"]) / 2)
            topics[i]["end"] = topics[i + 1]["start"] = mid
        else:
            problems.append(f"{abs(gap):.0f}s {'gap' if gap>0 else 'overlap'} before "
                            f"'{topics[i+1]['title_zh']}'")
    topics[0]["start"] = 0
    topics[-1]["end"] = max(topics[-1]["end"], round(end))
    _save(L.path("topics.json"), topics, indent=1)
    cov = sum(t["end"] - t["start"] for t in topics)
    print(f"L{L.no}: {len(topics)} topics covering {cov/60:.1f}/{end/60:.1f} min, "
          f"{sum(len(t.get('points',[])) for t in topics)} points, "
          f"{sum(len(t.get('extra',[])) for t in topics)} extra, "
          f"{sum(len(t.get('quiz',[])) for t in topics)} quiz")
    for p in problems:
        print("    " + p)
    assert not problems and abs(cov - end) < 60


# --------------------------------------------------------------------- quiz
def _strictly_longest(q, key):
    lens = [len(o[key]) for o in q["options"]]
    top = max(lens)
    return lens[q["answer"]] == top and lens.count(top) == 1


def _measure(topics, label):
    qs = [q for t in topics for q in t.get("quiz", [])]
    n = max(1, len(qs))
    zh = sum(1 for q in qs if _strictly_longest(q, "zh"))
    en = sum(1 for q in qs if _strictly_longest(q, "en"))
    rel = [len(q["options"][q["answer"]]["zh"]) - st.mean([len(o["zh"]) for o in q["options"]])
           for q in qs]
    pos = Counter(q["answer"] for q in qs)
    print(f"  {label}: longest zh {zh}/{n} ({zh/n*100:.1f}%) en {en}/{n} ({en/n*100:.1f}%), "
          f"len {st.mean(rel):+.1f}, positions {[pos[i] for i in range(4)]}")
    return zh / n, abs(st.mean(rel))


def stage_quizout(L):
    topics = _load(L.path("topics.json"))
    rows = [{"ti": ti, "qi": qi, "topic_zh": t["title_zh"], "topic_en": t["title_en"], "q": q}
            for ti, t in enumerate(topics) for qi, q in enumerate(t.get("quiz", []))]
    _measure(topics, "current")
    per = (len(rows) + QUIZ_PARTS - 1) // QUIZ_PARTS
    for n in range(QUIZ_PARTS):
        part = rows[n * per:(n + 1) * per]
        if part:
            _save(L.path("quiz_chunks", f"quiz_{n:02d}.json"), part, indent=1)
    print(f"L{L.no}: {len(rows)} questions -> {QUIZ_PARTS} files")


def stage_quizin(L):
    topics = _load(L.path("topics.json"))
    before_zh, before_rel = _measure(topics, "BEFORE")
    fixed = {}
    for p in sorted(glob.glob(L.path("quiz_fixed", "*.json"))):
        for r in _load(p):
            fixed[(r["ti"], r["qi"])] = r["q"]
    problems = []
    for ti, t in enumerate(topics):
        for qi, old in enumerate(t.get("quiz", [])):
            new = fixed.get((ti, qi))
            if new is None:
                problems.append(f"t{ti} q{qi} missing")
                continue
            if len(new["options"]) != len(old["options"]):
                problems.append(f"t{ti} q{qi} option count changed")
            if not (0 <= new.get("answer", -1) < len(new["options"])):
                problems.append(f"t{ti} q{qi} bad answer index")
            texts = [o["zh"].strip() for o in new["options"]]
            if len(set(texts)) != len(texts):
                problems.append(f"t{ti} q{qi} duplicate options")
            if any(not o["zh"].strip() or not o["en"].strip() for o in new["options"]):
                problems.append(f"t{ti} q{qi} empty option")
            blob = " ".join(str(new.get(k, "")) for k in ("q_zh", "q_en", "explain_zh", "explain_en"))
            for pat in POSITIONAL:
                m = re.search(pat, blob, re.I)
                if m:
                    problems.append(f"t{ti} q{qi} names an option by position ({m.group(0)!r})")
                    break
    if problems:
        print(f"  {len(problems)} problems:")
        for p in problems[:25]:
            print("    " + p)
    assert not problems, "rewritten quiz did not verify"

    for ti, t in enumerate(topics):
        for qi in range(len(t.get("quiz", []))):
            t["quiz"][qi] = fixed[(ti, qi)]
    qs = [q for t in topics for q in t.get("quiz", [])]
    deck = [i % 4 for i in range(len(qs))]
    random.Random(20260627 + L.no).shuffle(deck)
    for q, target in zip(qs, deck):
        n = len(q["options"])
        target %= n
        shift = (q["answer"] - target) % n
        q["options"] = q["options"][shift:] + q["options"][:shift]
        q["answer"] = target
    after_zh, after_rel = _measure(topics, "AFTER ")
    _save(L.path("topics.json"), topics, indent=1)
    pos = Counter(q["answer"] for q in qs)
    assert max(pos.values()) - min(pos.values()) <= 1, "answer positions still uneven"
    assert after_zh < 0.40, "answer is still usually the longest option"
    assert after_rel <= before_rel, "answer length is no closer to the mean"


def _rotate_positions(topics, seed):
    qs = [q for t in topics for q in t.get("quiz", [])]
    deck = [i % 4 for i in range(len(qs))]
    random.Random(seed).shuffle(deck)
    for q, target in zip(qs, deck):
        n = len(q["options"])
        target %= n
        shift = (q["answer"] - target) % n
        q["options"] = q["options"][shift:] + q["options"][:shift]
        q["answer"] = target
    return qs


def stage_quizpos(L):
    """Flatten answer positions when the length bias is already acceptable.

    Writing the two constraints into the generation prompt worked from lecture 2
    on - the answer was the strictly longest option in 15.5% of questions, below
    the 25% chance rate - so the rewrite pass those lectures would otherwise need
    can be skipped. Position still has to be dealt with, and that needs no
    rewriting at all.
    """
    topics = _load(L.path("topics.json"))
    zh, rel = _measure(topics, "BEFORE")
    assert zh < 0.40, ("the answer is the longest option too often to skip the "
                       "rewrite pass; run quizout and have it rewritten")
    blocked, review = [], []
    for ti, t in enumerate(topics):
        for qi, q in enumerate(t.get("quiz", [])):
            blob = " ".join(str(q.get(k, "")) for k in ("q_zh", "q_en", "explain_zh", "explain_en"))
            for pat in POSITIONAL:
                m = re.search(pat, blob, re.I)
                if m:
                    blocked.append(f"t{ti} q{qi} names an option by position ({m.group(0)!r})")
                    break
            else:
                for pat in AMBIGUOUS:
                    m = re.search(pat, blob, re.I)
                    if m:
                        review.append(f"t{ti} q{qi} {m.group(0)!r} — term of an expression, or an option?")
                        break
    for b in blocked:
        print("    BLOCK  " + b)
    if review:
        print(f"    {len(review)} phrase(s) to read before trusting this run:")
        for r in review:
            print("    CHECK  " + r)
    assert not blocked, "rotation would invalidate these explanations"

    qs = _rotate_positions(topics, 20260627 + L.no)
    _measure(topics, "AFTER ")
    _save(L.path("topics.json"), topics, indent=1)
    pos = Counter(q["answer"] for q in qs)
    assert max(pos.values()) - min(pos.values()) <= 1, "answer positions still uneven"


def stage_status(L):
    def n(pat):
        return len(glob.glob(L.path(*pat)))
    print(f"L{L.no} {L.date} {L.title_zh}")
    print(f"  transcribed {L.transcribed}  cues {os.path.exists(L.path('cues.json'))}  "
          f"chunks {n(('chunks','*.txt'))}  corrections {n(('corrections','*.json'))}  "
          f"outline {n(('outline_chunks','*.txt'))}  topicparts {n(('topics','part_*.json'))}  "
          f"topics {os.path.exists(L.path('topics.json'))}  "
          f"quizchunks {n(('quiz_chunks','*.json'))}  quizfixed {n(('quiz_fixed','*.json'))}")


STAGES = {"cues": stage_cues, "chunks": stage_chunks, "applyfix": stage_applyfix,
          "outline": stage_outline, "topics": stage_topics, "quizout": stage_quizout,
          "quizin": stage_quizin, "quizpos": stage_quizpos, "status": stage_status}

if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in STAGES:
        raise SystemExit(__doc__)
    stage = STAGES[sys.argv[1]]
    nos = sys.argv[2:] or [str(l.no) for l in LECTURES]
    for no in nos:
        stage(get(no))
