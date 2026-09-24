# -*- coding: utf-8 -*-
"""给 data/*.js 的 script 标签盖版本号，破缓存。

2026-09-21：mb_int 被我写坏过一次（8 条追问落在组外面），修好推上去之后
Ruojin 说「还是打不开」。查下来两份线上文件结构都是对的——
**坏的是她浏览器里缓存的那一份**。

因为 index.html 里写的是 <script src="data/mb_int.js"></script>，
不带任何版本号，浏览器没有理由去重新下载。于是「我修好了」和
「她那边好了」之间隔着一个不确定的缓存周期。

这里按**文件内容**算一个短哈希盖上去：<script src="data/mb_int.js?v=ab12cd34">。
内容没变的文件哈希不变，不会白白让缓存失效；改过的文件立刻换新地址。

跑法：python tools/stamp.py      # 每次改完卡、build_standalone 之前跑
"""
import io, os, re, sys, hashlib

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.join(HERE, '..', 'app')
# 2026-09-22：演练台 drill.html 装的是同一批 data/*.js，所以它也必须盖版本号，
# 否则她那边永远打不到新数据 —— 9/21 mb_int「打不开」就是这么来的（推上去了，她看到的是旧的）。
PAGES = [os.path.join(APP, 'index.html'), os.path.join(APP, 'drill.html'),
         os.path.join(APP, 'map.html'), os.path.join(APP, 'exam.html')]
# ⚠ 2026-09-24：eq.js（公式排版）也必须盖版本号 —— 它跟 data/*.js 一样被三个
# 页面直接引用，不盖的话改了之后她的浏览器还吃旧的那一份。
PAT = re.compile(r'(<script src="((?:data/[^"?]+|eq)\.js)(?:\?v=[0-9a-f]+)?"></script>)')

n = changed = 0


def sub(m):
    global n, changed
    whole, rel = m.group(1), m.group(2)
    path = os.path.join(APP, rel.replace('/', os.sep))
    if not os.path.exists(path):
        return whole
    h = hashlib.md5(io.open(path, 'rb').read()).hexdigest()[:8]
    new = '<script src="' + rel + '?v=' + h + '"></script>'
    n += 1
    if new != whole:
        changed += 1
    return new


pages = 0
for P in PAGES:
    if not os.path.exists(P):
        continue
    pages += 1
    t = io.open(P, encoding='utf-8').read()
    t2 = PAT.sub(sub, t)
    if t2 != t:
        io.open(P, 'w', encoding='utf-8', newline='\n').write(t2)
# ⚠ 2026-09-23：页面本身的地址不带版本号，所以「推上去了」跟「她看到了」中间
# 隔着一个缓存周期。把每个页面自己的短哈希印进页面（占位符 __BUILD__ 或上一次的值），
# 这样她报一眼版本号就知道手里是不是新的。
import re as _re2
_BV = _re2.compile(r'版本 <b>[0-9a-f]{7}|__BUILD__</b>')
for P in PAGES:
    if not os.path.exists(P):
        continue
    t = io.open(P, encoding='utf-8').read()
    if '版本 <b>' not in t:
        continue
    base = _re2.sub(r"版本 <b>[0-9a-f]{7}</b>", "版本 <b>__BUILD__</b>", t)
    h = hashlib.md5(base.encode('utf-8')).hexdigest()[:7]
    t2 = base.replace('__BUILD__', h)
    if t2 != t:
        io.open(P, 'w', encoding='utf-8', newline=chr(10)).write(t2)
    print(u'  %s 构建号 %s' % (os.path.basename(P), h))

print(u'盖了 %d 个数据文件的版本号，其中 %d 个变了（%d 个页面）' % (n, changed, pages))
