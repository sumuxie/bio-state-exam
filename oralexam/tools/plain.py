# -*- coding: utf-8 -*-
"""出声念的英文，句子结构检查。

起因：2026-09-13 Ruojin 背了一下午背不通这一句——

    A dissociation constant is the equilibrium constant of a dissociation reaction
    — a complex, say a protein and its ligand, coming apart into its two free
    partners — the ratio their concentrations settle at once the complex is
    falling apart as fast as it forms.

她的判断（当天下午两句话定的）：
  1. 「一句不超过 12 个词 · 一句只说一件事 · 不用破折号和从句」
  2. 「**不用逐句吧。。。有些挺好的，但是确实得注意**」

所以这个脚本**不追求每句都短**。十五个词的主谓宾句子很好念，不动它。
只揪真正说不顺的：**插入语套插入语、比较结构、太长、需要回头重读**。

判据分两层：
  硬伤（犯一条就算）：两个以上破折号 · 超过 38 词 · as…as · 分号
  软伤（犯两条以上才算）：一个破折号 · 超过 28 词 · 从句 · 括号

阈值是拿她自己认可的句子校准的。她说下面这句「比较好」，判据必须放它过去：

    It is the equilibrium constant of the dissociation reaction — free protein
    times free ligand over the complex. Because it is a ratio of concentrations
    over a concentration, it has units of concentration, and numerically it is the
    free-ligand concentration at which half the binding sites are occupied.

差别不在长度，在**会不会把句子吊在半空**：
破折号出现在**句尾**、补充一句就完了 → 好念；
破折号**一开一合插在中间**、后面还要接回主句 → 念不动。33 个词一路往前读没问题，
45 个词套两层插入语就不行。

术语、数字、页码一个不动——难的应该是概念，不是句法。

跑法：
    python tools/plain.py            # 全部卡
    python tools/plain.py 02 gly     # 只看这两张
    python tools/plain.py --worst 20 # 最难念的 20 句
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(D, 'app', 'data')

HARD_WORDS = 38          # 超过这个词数，一条就算硬伤
SOFT_WORDS = 28          # 超过这个词数，算一条软伤


def spoken(src):
    """卡文件里所有 “ ” 之间的英文。"""
    return re.findall(r'“(.*?)”', src, re.S)


def clean(t):
    t = re.sub(r'<[^>]+>', '', t)
    t = re.sub(r'\\(.)', r'\1', t)
    return re.sub(r'\s+', ' ', t).strip()


def sentences(t):
    t = re.sub(r'([.!?])\s+(?=[A-Z“(])', r'\1', t)
    return [x.strip() for x in t.split('') if x.strip()]


def judge(s):
    """返回 (要不要改, 犯了哪几条)。"""
    n = len(s.split())
    dashes = s.count('—') + s.count('–')
    hard, soft = [], []
    if dashes >= 2: hard.append('%d 个破折号' % dashes)
    elif dashes == 1: soft.append('破折号')
    if n > HARD_WORDS: hard.append('%d 词' % n)
    elif n > SOFT_WORDS: soft.append('%d 词' % n)
    if re.search(r'\bas \w+ as\b', s): hard.append('as…as')
    if ';' in s: hard.append('分号')
    if re.search(r',\s+(which|where|whose|whom)\b', s): soft.append('从句')
    if re.search(r'\([^)]*\)', s): soft.append('括号')
    bad = bool(hard) or len(soft) >= 2
    return bad, hard + soft


def scan(path):
    src = io.open(path, encoding='utf-8').read()
    rows, total = [], 0
    for blob in spoken(src):
        for s in sentences(clean(blob)):
            if not re.search(r'[A-Za-z]', s): continue
            total += 1
            bad, why = judge(s)
            if bad: rows.append((len(s.split()) + 12 * len(why), s, why))
    return total, rows


want = [a for a in sys.argv[1:] if not a.startswith('--')]
worst = 0
if '--worst' in sys.argv:
    i = sys.argv.index('--worst')
    worst = int(sys.argv[i + 1]) if i + 1 < len(sys.argv) else 15

files = sorted(glob.glob(os.path.join(DATA, '*.js')))
allrows, gt, gb = [], 0, 0
print('=' * 78)
print('出声念的英文 —— 只揪说不顺的：插入语套插入语 · 比较结构 · 太长 · 要回头重读')
print('=' * 78)
for f in files:
    b = os.path.basename(f)
    if b == '_index.js': continue
    if want and not any(w in b for w in want): continue
    total, rows = scan(f)
    gt += total; gb += len(rows)
    allrows += [(r[0], b, r[1], r[2]) for r in rows]
    print('%-12s %4d 句 · 要改 %3d %s' % (b, total, len(rows),
          '' if not total else '%3.0f%%' % (100.0 * len(rows) / total)))

print()
print('合计 %d 句，其中 %d 句要改（%.0f%%）。其余不动。' % (gt, gb, 100.0 * gb / max(gt, 1)))
if worst:
    print()
    print('最难念的 %d 句：' % worst)
    for sc, b, s, why in sorted(allrows, reverse=True)[:worst]:
        print('  [%s] %s' % (b, '·'.join(why)))
        print('      %s' % (s if len(s) < 160 else s[:160] + ' …'))
