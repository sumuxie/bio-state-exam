# -*- coding: utf-8 -*-
"""Stand-in for a JS parser: verify every single-quoted string literal closes.

    python tools/check_strings.py            # all data/ch*.js
    python tools/check_strings.py ch4        # just one

With no JS runtime on this machine, an unescaped apostrophe inside Chinese
prose shows up only as a blank page in the browser (§6). This walks the file
tracking whether it is inside a string, so a stray quote desyncs it visibly.
`jsbalance.py` catches the same class of error via brace counting; this is the
more direct check and it names the offending line.

It ALWAYS prints the filename it opened. A previous version was pointed at
ch1.js by a hard-coded path and cheerfully reported "clean" for all five
chapters — five passes that were all the same file. See §5.
"""
import re, io, os, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
BS = chr(92)


def scan(path):
    src = open(path, encoding='utf-8').read()
    i, n, line = 0, len(src), 1
    instr = esc = False
    depth = 0
    bad = []
    while i < n:
        c = src[i]
        if c == '\n':
            line += 1
        if instr:
            if esc:
                esc = False
            elif c == BS:
                esc = True
            elif c == "'":
                instr = False
            elif c == '\n':
                bad.append(('unterminated string', line))
                instr = False
        else:
            if c == "'":
                instr = True
            elif c == '/' and src[i + 1:i + 2] == '/':
                j = src.find('\n', i)
                i = j if j > 0 else n
                continue
            elif c == '/' and src[i + 1:i + 2] == '*':
                j = src.find('*/', i + 2)
                line += src.count('\n', i, j if j > 0 else n)
                i = (j + 2) if j > 0 else n
                continue
            elif c in '[{(':
                depth += 1
            elif c in ']})':
                depth -= 1
        i += 1
    ok = (not instr) and depth == 0 and not bad
    print(f"{os.path.basename(path):12} "
          f"ends-inside-string={instr} depth={depth} "
          f"anomalies={bad[:3] or 'none'}  ->  {'PASS' if ok else 'FAIL'}")
    return ok


targets = ([os.path.join('data', a + '.js') for a in sys.argv[1:]]
           if len(sys.argv) > 1 else sorted(glob.glob('data/ch*.js')))
sys.exit(0 if all(scan(p) for p in targets) else 1)
