# -*- coding: utf-8 -*-
"""ez 该比原文短。量一量到底短没短。

起因：2026-09-20 Ruojin 贴了卡 08 信号肽那一条的 ez 和 en，说——

    「新生成的句子比原文长太多了。。。。。」

她说得对，而且这不是个别现象。R14 的 ez 规矩是「每句 ≤15 词 · 不许从句 ·
不许破折号分号」——**那是把长句拆成短句，不是把内容压少**。拆完句子变多、
虚词变多，总词数反而可能比原文还高。于是「先背这句」就不再是「先背这句」了。

所以这里量的是一件很具体的事：**ez 的总词数 ÷ en 的总词数**。
· 超过 100%：ez 比原文还长 —— 这一条一定要改。
· 85%～100%：没压下来多少，属于「拆句了但没精简」。
· 低于 85%：算合格。

只量成对出现的（同一条答案既有 en 又有 ez）。中文那行（ezcn）不量，
它本来就是给她理解用的，长一点无所谓。

跑法：
    python tools/ezlen.py              # 汇总 ＋ 最差的 25 条
    python tools/ezlen.py --worst 60   # 看更多
    python tools/ezlen.py 08 aa        # 只看这几张
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')

OK = 0.85            # 到这个比例才算真的压下来了


def plain(s):
    s = re.sub(r"'\s*\+\s*'", ' ', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = s.replace('“', '').replace('”', '')
    return re.sub(r'\s+', ' ', s).strip()


# ⚠ ez 里缩写是拆开写的（N A D H），为的是让 TTS 念对字母。
# 直接数词，它会算成 4 个词，而 en 里的 NADH 只算 1 个——ez 就被凭空撑长了。
# 所以数之前先把「连续的单字母」合回去。数字词（two、three）不动：
# 那是真的多出来的音节，她确实要多念。
RUN = re.compile(r'(?:(?<=^)|(?<= ))(?:[A-Za-z] ){1,9}[A-Za-z](?= |$)')


def words(s):
    p = plain(s)
    p = RUN.sub(lambda m: m.group(0).replace(' ', ''), p)
    return len([w for w in p.split() if re.search(r'[A-Za-z0-9]', w)])


FIELD = r"%s:'((?:[^'\\]|\\.)*)'"


def pairs(src):
    """把 (ez, en) 成对拿出来。ez 和它对应的 en 挨在同一个对象里，
    所以按出现顺序配：每遇到一个 ez，就往后找最近的一个 en/say。"""
    out = []
    toks = []
    for m in re.finditer(r"\b(ez|en|say)\s*:\s*'((?:[^'\\]|\\.)*)'", src):
        toks.append((m.group(1), m.group(2), m.start()))
    for i, (k, v, pos) in enumerate(toks):
        if k != 'ez':
            continue
        for k2, v2, _ in toks[i + 1:i + 3]:
            if k2 in ('en', 'say'):
                out.append((v, v2))
                break
    return out


# ⚠ --worst 后面那个数字不能被当成卡名。2026-09-20 就是这么把统计范围
# 悄悄缩到「文件名里带 0 的卡」，报出来的 172 条是错的。
worst = 25
argv = sys.argv[1:]
if '--worst' in argv:
    i = argv.index('--worst')
    worst = int(argv[i + 1])
    argv = argv[:i] + argv[i + 2:]
want = [a for a in argv if not a.startswith('--')]

# ── 真注水的形状 ─────────────────────────────────────────────────────────
# 2026-09-20 把最长的几十条对着原文看了一遍，结论是：
# **ez 比原文长，多数不是注水**，是两件事造成的假象——
#   ① en 那一侧用 · 和连字符（glucose-6-phosphate 算 1 个词，ez 里是 4 个）；
#   ② 名词短语改成主谓宾，必须补出 It is / That one is。
# 真注水只有一个很具体的形状：**开头announce一遍，结尾又说一遍同一件事**。
# 例：16 卡「Three properties of the double helix explain everything here.」
#     …「Those three are the whole reason replication looks the way it does.」
# 这一类才值得改，改了她少背一整句。
STOPW = set('the a an and or of to in is are it that this those these for on'
            ' with as by be they them their there here one two three'.split())


def content(s):
    # ⚠ 单字母要滤掉：ez 里缩写是拆开写的，m R N A 会让首尾「重合」三个字母，
    # 报出来全是假阳性。2026-09-20 第一版就是这么把 5 条里的 4 条报错的。
    ws = (w.strip('.,:;()').lower() for w in plain(s).split())
    return set(w for w in ws if len(w) > 1) - STOPW


def echo(ez):
    """开头那句和结尾那句是不是在说同一件事。返回重合的实词。"""
    ss = [x.strip() for x in re.split(r'(?<=[.!?])\s+', plain(ez)) if x.strip()]
    if len(ss) < 3:
        return set()
    a, b = content(ss[0]), content(ss[-1])
    if len(a) < 3 or len(b) < 3:
        return set()
    both = a & b
    return both if len(both) >= 3 else set()


rows, tot_ez, tot_en, echoes = [], 0, 0, []
print('=' * 74)
print('ez 该比原文短 —— 量的是总词数之比（ez ÷ en）')
print('=' * 74)
for f in sorted(glob.glob(os.path.join(D, '*.js'))):
    b = os.path.basename(f)
    if b.startswith('_') and not (want and any(w in b for w in want)):
        continue
    if want and not any(w in b for w in want):
        continue
    src = io.open(f, encoding='utf-8').read()
    n_over = n_pair = 0
    s_ez = s_en = 0
    for ez, en in pairs(src):
        we, wn = words(ez), words(en)
        if wn < 12:            # 原文本来就很短，比例没意义
            continue
        n_pair += 1
        s_ez += we
        s_en += wn
        r = we / float(wn)
        if r > OK:
            n_over += 1
        rows.append((r, b, we, wn, plain(ez)[:110]))
        ov = echo(ez)
        if ov:
            echoes.append((b, sorted(ov), plain(ez)))
    if not n_pair:
        continue
    tot_ez += s_ez
    tot_en += s_en
    print('%-14s %4d 对 · 总体 %3.0f%% · 没压下来的 %3d 条 %s'
          % (b, n_pair, 100.0 * s_ez / max(s_en, 1), n_over,
             '' if not n_pair else '%3.0f%%' % (100.0 * n_over / n_pair)))

print()
print('合计 %d 词 ez ÷ %d 词 en = %.0f%%' % (tot_ez, tot_en, 100.0 * tot_ez / max(tot_en, 1)))
over = [r for r in rows if r[0] > 1.0]
print('其中 %d 条 ez **比原文还长**。' % len(over))
print()
print('开头和结尾说了同一件事的：%d 条（这一类才是真注水）' % len(echoes))
if '--echo' in sys.argv:
    for b, ov, txt in echoes:
        print('  [%s] 重复：%s' % (b, ' '.join(ov)))
        print('      %s' % txt)
if worst:
    print()
    print('最离谱的 %d 条：' % worst)
    for r, b, we, wn, txt in sorted(rows, reverse=True)[:worst]:
        print('  [%s] %.0f%%  ez %d 词 / en %d 词' % (b, 100 * r, we, wn))
        print('      %s' % txt)
