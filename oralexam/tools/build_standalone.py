# -*- coding: utf-8 -*-
"""把 app/index.html 打成单文件 app/standalone.html。

为什么要它：index.html 要另外抓十几个 data/*.js，用在线预览打开时经常半路卡住。
单文件只有一次请求，任何设备、任何方式打开都完整。

单词音频不内联（38 MB），改成指向 jsDelivr 上仓库里的同一批文件——
所以单文件版的单词发音跟本地版一模一样。

跑法：python tools/build_standalone.py
"""
import io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
APP = os.path.join(ROOT, 'app')
CDN = 'https://cdn.jsdelivr.net/gh/sumuxie/bio-state-exam@main/oralexam/app/'

s = io.open(os.path.join(APP, 'index.html'), encoding='utf-8').read()


def inline(m):
    path = os.path.join(APP, m.group(1))
    body = io.open(path, encoding='utf-8').read()
    return '<script>\n/* %s */\n%s\n</script>' % (m.group(1), body)


s = re.sub(r'<script src="((?:data|audio)/[a-z0-9_]+\.js)"></script>', inline, s)
left = re.findall(r'<script src="([^"]+)"', s)
if left:
    print('ABORT: 还有没内联的脚本', left); sys.exit(1)

# 音频走 CDN（单文件没法带 38 MB mp3）
if "var AUDIO_BASE = ''" not in s:
    print("ABORT: index.html 里没有 AUDIO_BASE"); sys.exit(1)
s = s.replace("var AUDIO_BASE = ''", "var AUDIO_BASE = '%s'" % CDN, 1)
# 图同理：单文件带不动 jpg，指到 CDN
s = s.replace("var IMG_BASE = ''", "var IMG_BASE = '%s'" % CDN, 1)

out = os.path.join(APP, 'standalone.html')
io.open(out, 'w', encoding='utf-8', newline='\n').write(s)
print('standalone.html %.1f MB · 音频指向 %s' % (len(s.encode()) / 1048576, CDN))
