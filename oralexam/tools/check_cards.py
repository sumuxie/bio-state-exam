# -*- coding: utf-8 -*-
"""Syntax-sanity check every app/data/*.js card file.
   Catches the failure mode that makes the page silently go blank:
   an unterminated string or an unbalanced brace inside a card.

   括号/引号扫描抓不到「单引号字符串里有真实换行」——JS 里这是语法错，
   而这一条会让整张卡从列表里消失（2026-09-14 Kd 卡就是这么没的）。
   所以最后一列用 esprima 真解析一遍。"""
import io, os, glob, sys
try:
    import esprima
except ImportError:
    esprima = None
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')
BACKSLASH = chr(92)

def scan(path):
    s = io.open(path, encoding='utf-8').read()
    instr = False
    quote = ''
    incomment = False
    i = 0
    depth_brace = depth_brack = 0
    while i < len(s):
        c = s[i]
        nxt = s[i+1] if i + 1 < len(s) else ''
        if incomment:
            if c == '*' and nxt == '/':
                incomment = False
                i += 2
                continue
            i += 1
            continue
        if instr:
            if c == BACKSLASH:
                i += 2
                continue
            if c == quote:
                instr = False
            i += 1
            continue
        if c == '/' and nxt == '*':
            incomment = True
            i += 2
            continue
        if c in ("'", '"'):
            instr = True
            quote = c
            i += 1
            continue
        if c == '{': depth_brace += 1
        elif c == '}': depth_brace -= 1
        elif c == '[': depth_brack += 1
        elif c == ']': depth_brack -= 1
        i += 1
    if esprima is None:
        js = 'no esprima'
    else:
        try:
            esprima.parseScript(s)
            js = 'ok'
        except Exception as e:
            js = str(e)[:40]
    return dict(size=len(s.encode('utf-8')),
                brace=depth_brace, brack=depth_brack,
                unterminated=instr, cards=s.count('window.CARDS.push'), js=js)

bad = 0
print('%-16s %8s %7s %8s %8s %6s  %s' % ('file', 'KB', 'braces', 'brackets', 'strings', 'cards', 'JS 语法'))
for f in sorted(glob.glob(os.path.join(D, '*.js'))):
    r = scan(f)
    ok = (r['brace'] == 0 and r['brack'] == 0 and not r['unterminated']
          and r['js'] in ('ok', 'no esprima'))
    if not ok: bad += 1
    print('%-16s %8.0f %7s %8s %8s %6d  %s%s'
          % (os.path.basename(f), r['size']/1024,
             'ok' if r['brace'] == 0 else r['brace'],
             'ok' if r['brack'] == 0 else r['brack'],
             'ok' if not r['unterminated'] else 'UNTERMINATED',
             r['cards'], r['js'], '' if ok else '  ← 有问题'))
print()

# ── ask 条目必须有 en ────────────────────────────────────────────────────
# 2026-09-20：mb_ko 和 mb_reg 是我新写的两张，ask 里漏了 en，
# 而别的 38 张卡一条都不漏。en 是「出声完整版」，ez 只是它的最短版；
# 少了 en，那一条追问就没有完整答案可说，而且四个检查一个都不会报。
# 所以在这里立一道闸：这个比例只许是 100%。
import re as _re
_HEAD = _re.compile(r"\{r:'")
_noen = []
for f in sorted(glob.glob(os.path.join(D, '*.js'))):
    b0 = os.path.basename(f)
    if b0.startswith('_'):
        continue
    s0 = io.open(f, encoding='utf-8').read()
    pos = [m.start() for m in _HEAD.finditer(s0)] + [len(s0)]
    k = 0
    for i in range(len(pos) - 1):
        if " en:'" not in s0[pos[i]:pos[i + 1]]:
            k += 1
    if k:
        _noen.append((b0, k))
if _noen:
    bad += len(_noen)
    print('⚠ 有 ask 条目缺 en（出声完整版），这一列必须是 0：')
    for b0, k in _noen:
        print('   %-16s %d 条' % (b0, k))
    print()

if esprima is None:
    print('⚠ 没装 esprima，最要命的那一类（字符串里有真实换行）查不了：pip install esprima')
print('全部通过' if bad == 0 else
      '%d 个文件有问题。语法错会让整张卡从列表里消失；'
      '缺 en 不会，但那一条追问就没有完整答案可说。' % bad)
sys.exit(1 if bad else 0)
