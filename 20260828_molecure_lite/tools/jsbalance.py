"""Delimiter balance for JS, aware of strings, template literals, comments
and regex literals. Not a parser — calibrated by running it against the
known-good pesborigin/app.js, which must report "balanced"."""
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

BS = chr(92)  # backslash

def scan(path):
    s = open(path, encoding='utf-8').read()
    i, n = 0, len(s)
    stack = []
    line = 1
    prev = ''
    while i < n:
        c = s[i]
        if c == '\n':
            line += 1; i += 1; continue
        if c == '/' and i + 1 < n and s[i+1] == '/':
            while i < n and s[i] != '\n':
                i += 1
            continue
        if c == '/' and i + 1 < n and s[i+1] == '*':
            j = s.find('*/', i + 2)
            if j < 0:
                return "unterminated block comment at line %d" % line
            line += s.count('\n', i, j); i = j + 2; continue
        if c == '/' and prev in '(,=:[!&|?{};+-*%~^':
            j = i + 1
            inclass = False
            while j < n and s[j] != '\n':
                if s[j] == BS:
                    j += 2; continue
                if s[j] == '[':
                    inclass = True
                elif s[j] == ']':
                    inclass = False
                elif s[j] == '/' and not inclass:
                    break
                j += 1
            i = j + 1
            while i < n and s[i].isalpha():
                i += 1
            prev = '/'
            continue
        if c == '"' or c == "'":
            q = c; i += 1
            while i < n and s[i] != q:
                if s[i] == BS:
                    i += 1
                if i < n and s[i] == '\n':
                    line += 1
                i += 1
            i += 1; prev = q; continue
        if c == '`':
            i += 1
            while i < n:
                if s[i] == BS:
                    i += 2; continue
                if s[i] == '\n':
                    line += 1
                if s[i] == '`':
                    break
                if s[i] == '$' and i + 1 < n and s[i+1] == '{':
                    depth = 1; i += 2
                    while i < n and depth:
                        ch = s[i]
                        if ch == '{':
                            depth += 1
                        elif ch == '}':
                            depth -= 1
                        elif ch == '\n':
                            line += 1
                        elif ch == '"' or ch == "'":
                            q = ch; i += 1
                            while i < n and s[i] != q:
                                if s[i] == BS:
                                    i += 1
                                i += 1
                        i += 1
                    continue
                i += 1
            i += 1; prev = '`'; continue
        if c in '({[':
            stack.append((c, line))
        elif c in ')}]':
            if not stack:
                return "line %d: unexpected closing %r" % (line, c)
            o, ol = stack.pop()
            if '({['.index(o) != ')}]'.index(c):
                return "line %d: %r closes %r opened at line %d" % (line, c, o, ol)
        if not c.isspace():
            prev = c
        i += 1
    if stack:
        o, ol = stack[-1]
        return "unclosed %r opened at line %d" % (o, ol)
    return "balanced"

for p in sys.argv[1:]:
    print("%-28s %s" % (p, scan(p)))
