# -*- coding: utf-8 -*-
"""文档卫生检查 —— 每加完一轮东西就跑一遍。

查四件事：
  1. 有没有 md 没在 README 里登记（新文件漏登记 = 下个窗口找不到）
  2. 文件之间有没有重复的大块（重复 = 改一处漏一处，而且白吃 context）
  3. 每份多大、开窗口的固定成本是多少
  4. 有没有指向不存在文件的链接
"""
import io, os, re, glob, sys, hashlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
mds = sorted(glob.glob(os.path.join(D, '*.md')))
readme = io.open(os.path.join(D, 'README.md'), encoding='utf-8').read()
claude = io.open(os.path.join(D, 'CLAUDE.md'), encoding='utf-8').read()

BOOT = {'LOGIC.md', 'STATUS.md'}          # 开窗口必读
LOOKUP = {'PREMISES.md', 'RECIPE.md', 'TOPICS.md', 'DRILL.md', 'QC_jiribank.md'}

print('=' * 74)
print('1 · 登记与体量')
print('=' * 74)
print('%-18s %7s %9s  %-6s %s' % ('文件', 'KB', '~tokens', '登记', '角色'))
boot_cost = 0
missing = []
for f in mds:
    b = os.path.basename(f)
    s = io.open(f, encoding='utf-8').read()
    tok = len(s) // 2
    reg = b in readme or b == 'README.md'
    if not reg: missing.append(b)
    role = '开窗口必读' if b in BOOT else ('查阅' if b in LOOKUP else ('地图' if b == 'README.md' else '?'))
    if b in BOOT or b == 'README.md': boot_cost += tok
    print('%-18s %7.1f %9d  %-6s %s' % (b, os.path.getsize(f)/1024, tok,
                                        '✓' if reg else '✗ 漏', role))
print()
BUDGET = 8000
cost = boot_cost + len(claude) // 2
print('  开窗口固定成本：CLAUDE ＋ README ＋ LOGIC ＋ STATUS ≈ %d tokens（预算 %d）'
      % (cost, BUDGET))
if cost > BUDGET:
    print('  ⚠ **超预算了。** 每一圈都在往 LOGIC / STATUS 里加东西，'
          '到这一步就该砍，而不是继续加。')
else:
    print('  ✓ 在预算内，余量 %d' % (BUDGET - cost))
if missing:
    print('  ⚠ 没在 README 里登记：' + '、'.join(missing))
else:
    print('  ✓ 全部已登记')

print()
print('=' * 74)
print('2 · 跨文件重复（≥ 3 行且 ≥ 80 字符的块）')
print('=' * 74)
blocks = {}
for f in mds + [os.path.join(D, 'CLAUDE.md')]:
    b = os.path.basename(f)
    lines = io.open(f, encoding='utf-8').read().split('\n')
    for i in range(len(lines) - 2):
        chunk = '\n'.join(lines[i:i+3]).strip()
        if len(chunk) < 80: continue
        h = hashlib.md5(chunk.encode()).hexdigest()
        blocks.setdefault(h, {'text': chunk, 'files': set()})['files'].add(b)
dup = [v for v in blocks.values() if len(v['files']) > 1]
if not dup:
    print('  ✓ 没有跨文件重复的大块')
else:
    seen = set()
    for v in sorted(dup, key=lambda x: -len(x['files'])):
        key = frozenset(v['files'])
        if key in seen: continue
        seen.add(key)
        n = sum(1 for w in dup if frozenset(w['files']) == key)
        print('  ⚠ %d 处重复，出现在 %d 个文件：%s'
              % (n, len(v['files']), '、'.join(sorted(v['files']))))
        print('     「%s…」' % v['text'].replace('\n', ' ')[:64])

print()
print('=' * 74)
print('3 · 断链（指向不存在的文件）')
print('=' * 74)
bad = 0
for f in mds:
    s = io.open(f, encoding='utf-8').read()
    for m in re.finditer(r'`([A-Za-z0-9_./-]+\.(?:md|js|py|html|json|txt))`', s):
        t = m.group(1)
        if t.startswith('http'): continue
        if '/' in t and not t.startswith(('app/','book/','tools/','content/','_archive/')): continue  # 别的仓库里的，跳过
        cands = [os.path.join(D, t), os.path.join(D, '..', t),
                 os.path.join(D, 'content', t), os.path.join(D, 'app', 'data', t),
                 os.path.join(D, 'app', t), os.path.join(D, 'book', t),
                 os.path.join(D, 'tools', t), os.path.join(D, '_archive', t)]
        if not (any(os.path.exists(c) for c in cands) or '<' in t or '###' in t):
            print('  ⚠ %-18s → %s' % (os.path.basename(f), t))
            bad += 1
if not bad:
    print('  ✓ 没有断链')

print()
print('=' * 74)
print('4 · 结论')
print('=' * 74)
n_issue = len(missing) + len(set(frozenset(v['files']) for v in dup)) + bad
print('  %d 个问题' % n_issue if n_issue else '  干净')
