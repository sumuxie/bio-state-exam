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
P = os.path.join(APP, 'index.html')

t = io.open(P, encoding='utf-8').read()
PAT = re.compile(r'(<script src="(data/[^"?]+\.js)(?:\?v=[0-9a-f]+)?"></script>)')

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


t2 = PAT.sub(sub, t)
if t2 != t:
    io.open(P, 'w', encoding='utf-8', newline='\n').write(t2)
print(u'盖了 %d 个数据文件的版本号，其中 %d 个变了' % (n, changed))
