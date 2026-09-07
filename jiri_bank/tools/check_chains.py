# -*- coding: utf-8 -*-
"""
data/chains.js 的结构检查。

为什么用 Python 而不是 cscript：链的正文大量是中文，cscript 按 ANSI 读 UTF-8
会让任何拿中文做比对的断言假失败（HANDOFF §13.3 记过一次）。Python 显式按
UTF-8 打开，没有这个问题。

检查五件事，全部来自 HANDOFF_stateexam_追问.md：
  1  文件没有被截断（消息被 [bio] 分类器掐断是这个项目的常见故障）
  2  answer_en ≤ 25 词                      §4 硬规矩 3
  3  每层都有 terms[] 和 wrong              §4 硬规矩 2、4
  4  逐层咬合：第 N 层的 q_en 必须含有第 N−1 层 answer_en 里的实词   结论 7
  5  域约束：不出现无机化学/配位场那一类词  结论 8
"""
import re
import sys
import os

try:                      # Windows 控制台默认 cp1252，中文输出会崩
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
# 文件名刻意不叫 chains.js：check_structure.py 用 glob('data/ch*.js') 找节点文件，
# chains.js 会被它捞进去当成节点文件解析然后崩掉。别改回去。
SRC = os.path.join(HERE, '..', 'data', 'followup_chains.js')

# 结论 8 —— 一路咬下去会滑出考纲的方向。出现即报错。
FORBIDDEN = [
    'orbital', 'octahedr', 'ligand field', 'spectrochemical',
    'dative', 'chelat', 'nickel', 'imidazole', 'square planar',
]

STOP = set("""a an the and or but of to in on at by for from with without into
is are was were be been being it its this that these those you your they them
their there here as if then than so not no does do did can could would should
will shall may might must have has had what which who whom whose why
how when where all any some each every both other another same such only just
one two three more most less least own very much many few own i me my we our""".split())


def words(s):
    return [w for w in re.findall(r"[A-Za-z][A-Za-z\-']+", s.lower()) if w not in STOP]


def main():
    with open(SRC, encoding='utf-8') as fh:
        src = fh.read()

    fails, checks = [], 0

    def ck(cond, msg):
        nonlocal checks
        checks += 1
        if not cond:
            fails.append(msg)

    # 1 —— 截断检查
    ck(src.rstrip().endswith(']);'), '文件没有以 "]);" 结尾 —— 很可能是被截断了')
    ck(src.count('{') == src.count('}'), f"花括号不平衡：{src.count('{')} 开 / {src.count('}')} 闭")
    ck(src.count('[') == src.count(']'), f"方括号不平衡：{src.count('[')} 开 / {src.count(']')} 闭")

    chains = re.findall(r"\n\{\n\s*id: '([A-Z]+-\d+)'", src)
    ck(bool(chains), '没有解析到任何链')

    # 逐层取出 n / q_en / answer_en
    lv = re.findall(
        r"n: '([^']+)',\s*\n\s*q_en: '((?:[^'\\]|\\.)*)',"
        r"[\s\S]*?answer_en: '((?:[^'\\]|\\.)*)',",
        src)
    ck(len(lv) >= 5, f'层数 {len(lv)}，不足 5 层（结论 1 的硬下界）')

    prev_ans = None
    for n, q, a in lv:
        # 2 —— 词数
        w = len(re.findall(r"[A-Za-z][A-Za-z\-']*", a))
        ck(w <= 25, f'{n}: answer_en {w} 词，超过 25（§4 硬规矩 3）')

        # 4 —— 咬合
        if prev_ans is not None:
            shared = set(words(q)) & set(words(prev_ans))
            ck(bool(shared), f'{n}: q_en 与上一层 answer_en 没有共享实词 —— 兄弟层，不是下钻（结论 7）')
        prev_ans = a

        # 5 —— 域约束
        for bad in FORBIDDEN:
            ck(bad not in (q + a).lower(), f'{n}: 出现域外词 "{bad}"（结论 8）')

    # 3 —— 每层都有 terms 和 wrong
    ck(src.count('terms: [') >= len(lv), f'terms[] {src.count("terms: [")} 个，层数 {len(lv)} —— 有层缺 terms')
    ck(src.count('wrong: {') >= len(lv) - 1, f'wrong {src.count("wrong: {")} 个 —— 有层缺 wrong')

    # 接线（CARD_LIBRARY.md 的硬约束）
    for f in ('parentCard:', 'drillWord:', 'terminate:', 'skipIt:'):
        ck(f in src, f'缺字段 {f}')

    print(f'链 {len(chains)} 条 · 层 {len(lv)} · 检查 {checks} 项')
    if fails:
        print(f'\n{len(fails)} FAIL')
        for f in fails:
            print('  ✗ ' + f)
        return 1
    print('ALL CHECKS PASSED')
    return 0


if __name__ == '__main__':
    sys.exit(main())
