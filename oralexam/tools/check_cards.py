# -*- coding: utf-8 -*-
"""Syntax-sanity check every app/data/*.js card file.
   Catches the failure mode that makes the page silently go blank:
   an unterminated string or an unbalanced brace inside a card."""
import io, os, glob, sys
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
    return dict(size=len(s.encode('utf-8')),
                brace=depth_brace, brack=depth_brack,
                unterminated=instr, cards=s.count('window.CARDS.push'))

bad = 0
print('%-16s %8s %7s %8s %8s %6s' % ('file', 'KB', 'braces', 'brackets', 'strings', 'cards'))
for f in sorted(glob.glob(os.path.join(D, '*.js'))):
    r = scan(f)
    ok = (r['brace'] == 0 and r['brack'] == 0 and not r['unterminated'])
    if not ok: bad += 1
    print('%-16s %8.0f %7s %8s %8s %6d %s'
          % (os.path.basename(f), r['size']/1024,
             'ok' if r['brace'] == 0 else r['brace'],
             'ok' if r['brack'] == 0 else r['brack'],
             'ok' if not r['unterminated'] else 'UNTERMINATED',
             r['cards'], '' if ok else '  ← 有问题'))
print()
print('全部通过' if bad == 0 else '%d 个文件有问题，页面会白屏' % bad)
sys.exit(1 if bad else 0)
