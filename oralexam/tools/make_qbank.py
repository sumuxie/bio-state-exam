# -*- coding: utf-8 -*-
"""把导师三张题目单的**另外两科**抽出来，写成 app/data/_qbank.js。

起因 2026-09-15 Ruojin：
  「麻烦你整理一下把另外那些问题也弄出来 然后就是分别在这个app里开两个分支吧
    只写主题 就是除了题目以外什么都不要写」

背景：`jiri_bank/_qindex.json` 是导师三张题目单的全部 **98 道题**，分三个标题：
    Basic Lab Techniques 34 · Microbiology 32 · Biochemistry 32
oralexam 从头只按 **Biochemistry** 建（`_index.js` 就叫「30 道生化题」，
32 道里 #10 并入 #5、#30 并入 #11）。另外 66 道在这个 app 里一张卡都没有。

**这个文件只放题目，不放任何答案、要点、笔记。** 她的原话：除了题目以外什么都不要写。
放进去的只有：英文题面、中文题面、它出现在哪张卷子上。

卷面权重 w 的含义见 TOPICS.md：**不是「三张卷子都出现」，是「出现在第一张卷子上」**
（S1→3，否则 S2→2，否则 1）。第一张只有 19 题，是导师的核心清单。

跑法：
    python tools/make_qbank.py
"""
import io, os, sys, json, ast

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SRC = os.path.join(ROOT, '..', 'jiri_bank', '_qindex.json')
OUT = os.path.join(ROOT, 'app', 'data', '_qbank.js')

SECT = {'Basic Lab Techniques': 'basic', 'Microbiology': 'micro', 'Biochemistry': 'biochem'}


def lit(v):
    """_qindex 里有些字段是 python repr 的字符串，有些已经是列表。"""
    if isinstance(v, (list, dict)): return v
    try: return ast.literal_eval(v)
    except Exception: return []


def main():
    d = json.load(io.open(SRC, encoding='utf-8'))
    out = {'basic': [], 'micro': [], 'biochem': []}
    for x in d:
        key = SECT.get(x.get('section') or '')
        if not key: continue
        refs = [str(r) for r in lit(x.get('refs'))]
        out[key].append({'en': x.get('en') or '', 'cn': x.get('cn') or '',
                         'w': int(x.get('weight') or 1), 'refs': refs})
    for k in out:
        # 先按卷面权重（他会不会问），再按题面字母序
        out[k].sort(key=lambda q: (-q['w'], q['en'].lower()))
    head = ('/* 导师三张题目单的全部 98 道题 —— tools/make_qbank.py 生成，别手改。\n'
            '   **只有题面**，没有答案、要点或笔记（2026-09-15 Ruojin：除了题目以外什么都不要写）。\n'
            '   w 是卷面权重：3 ＝ 出现在第一张卷子上（导师的核心清单），见 TOPICS.md。*/\n')
    io.open(OUT, 'w', encoding='utf-8', newline='\n').write(
        head + 'window.QBANK = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print('写好 %s' % OUT)
    for k, name in (('basic', 'Basic Lab Techniques'), ('micro', 'Microbiology'), ('biochem', 'Biochemistry')):
        w3 = sum(1 for q in out[k] if q['w'] == 3)
        print('  %-22s %2d 道（第一张卷子上的 %d 道）' % (name, len(out[k]), w3))
    print('文件 %.0f KB' % (os.path.getsize(OUT) / 1024))


main()
