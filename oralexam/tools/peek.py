# -*- coding: utf-8 -*-
"""只看一张卡的「开口」：cram 第一组 ＋ 段 1，每行截断，不把整卡读进对话。
用法：python peek.py 18 06 ...   （可加 --recog 列 recog 的 q，--groups 列 ask 组名）"""
import io, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
D = r"C:\Users\Admin\Downloads\bio-state-exam\oralexam\app\data"
flags = [a for a in sys.argv[1:] if a.startswith("--")]
ids = [a for a in sys.argv[1:] if not a.startswith("--")]
W = 420
def cut(t, w=W): t = t.rstrip("\n"); return t if len(t) <= w else t[:w] + " …"
for i in ids:
    s = io.open(os.path.join(D, i + ".js"), encoding="utf-8").read()
    print("=" * 30, i, "=" * 30)
    m = re.search(r"cram:\[(.*?)\n\],", s, re.S)
    cram = m.group(1) if m else ""
    parts = cram.split("{g:'")
    first = "{g:'" + parts[1] if len(parts) > 1 else cram
    print("--- cram 第一组 ---")
    for ln in first.split("\n"):
        if ln.strip(): print(cut(ln))
    m = re.search(r"segs:\[\s*\{tag:'([^']*)', h:'([^']*)',\s*\n\s*p:\[(.*?)\],", s, re.S)
    print("--- 段 1 ---")
    if m:
        print("tag:", m.group(1), "| h:", m.group(2))
        for ln in m.group(3).split("\n"):
            if ln.strip(): print(cut(ln))
    else:
        print("(no segs)")
    if "--recog" in flags:
        m = re.search(r"recog:\[(.*?)\n\],", s, re.S)
        qs = re.findall(r"\{q:'([^']*)'", m.group(1)) if m else []
        print("--- recog q (%d) ---" % len(qs))
        for q in qs: print("  ", q)
    if "--groups" in flags:
        m = re.search(r"ask:\[(.*)", s, re.S)
        gs = re.findall(r"\{g:'([^']*)'", m.group(1)) if m else []
        print("--- ask groups ---", gs)
