# -*- coding: utf-8 -*-
"""口试即时老师 · 本机小服务

2026-09-29 Ruojin：「主要是我挑到什么 你立马就可以和我发生追问 每个题给我两分钟
我必须说满 也在锻炼我的应变能力」「但是我要的是即时反馈啊」「如果能自动最好」。

一页纸（app/bones.html）识别完她说的话之后，自动 POST 到这里；这里调用
VSCode 扩展自带的 claude.exe（非交互 -p 模式），4 秒左右把反馈发回页面，
直接显示在那一段下面。

⚠ 用的是她现有的 Claude Code 登录，不需要 API key。但是**烧额度** ——
⚠ 实测 Haiku 又慢又漏（76 秒还漏掉致命错），所以默认 Sonnet 5；页面上可以切。

⚠ cwd 一定放临时目录：在仓库里跑会把 CLAUDE.md 整份读进去，既慢又跑偏。

跑法：双击 tools/coach.bat，或者
    python oralexam/tools/coach.py
停：Ctrl+C
"""
import glob
import json
import os
import subprocess
import sys
import tempfile
import time
from http.server import BaseHTTPRequestHandler, HTTPServer

PORT = 8787
TIMEOUT = 150


def find_claude():
    pats = [
        os.path.join(os.path.expanduser('~'), '.vscode', 'extensions',
                     'anthropic.claude-code-*', 'resources', 'native-binary', 'claude.exe'),
        os.path.join(os.path.expanduser('~'), '.vscode-insiders', 'extensions',
                     'anthropic.claude-code-*', 'resources', 'native-binary', 'claude.exe'),
    ]
    hits = []
    for p in pats:
        hits += glob.glob(p)
    if not hits:
        for name in ('claude.cmd', 'claude.exe', 'claude'):
            for d in os.environ.get('PATH', '').split(os.pathsep):
                c = os.path.join(d, name)
                if os.path.isfile(c):
                    return c
        return None
    hits.sort(key=os.path.getmtime)
    return hits[-1]


CLAUDE = find_claude()
WORKDIR = tempfile.mkdtemp(prefix='coach_')

RULES = """你是她的口试考官兼教练。她 2026-10-05 在布拉格查理大学用英语口试生物化学国考。
今天 2026-09-29。她刚刚对着麦克风把一段背了出来，下面给你三样东西：她该说的原文、
她实际说出口的（语音识别的文字，可能有识别错误）、以及页面自动算出她漏掉的要点。

⚠ 第一步，最重要的一步：**只要她用字母、缩写或简称列举了一组东西**（比如
"C T U"、"G C"、"A T"、"NADH FADH2"、"Pol I II III"），你必须**把每一个字母／缩写
单独摊开、逐个核对归类对不对**，并且把核对过程写出来。
⚠ **绝对不许把列举当成「简化说法」放过** —— 她会把一个字母放错族，而那一个字母
就是整道题。如果她列的那一组里有一个不该在里面，或少了一个该在里面的，
**这就是最致命的错，必须写在第一行**，格式是「你说的是 X，应该是 Y」。
⚠ 常见的几组，核对时用得上：嘌呤只有 A 和 G；嘧啶是 C、U、T；DNA 用 T 不用 U。
但不要只查这几组 —— 任何列举都要摊开查。

⚠ 第二步：**把她说出口的每一个分子名、字母、数字、酶名，
逐个和原文核对是不是归对了类、配对了对象。** 归类错、配对错（比如把某个碱基
归进错的一族、把某个酶安在错的一步、把两个相似的名字说反）是**最致命的错**，
因为口试里答反一个字整道题就丢了。**只要发现这种错，它必须是第一行**，而且
要写清「你说的是 X，应该是 Y」。没发现这种错，第一行就写「没有归类错」。

⚠ 其余规矩：
- 用中文回答，关键术语带英文。
- 最多 6 行，不要客套，不要表扬，不要复述原文。
- 识别软件听错的（比如同音）不算她的错，别当成错。
- 如果她说的其实对、只是换了说法，明说「这样说也行」。
- 最后一行给一句她现在就该重说出口的英文。
"""

FOLLOWUP = """你是她的口试考官。她 2026-10-05 在布拉格查理大学用英语口试生物化学国考。
下面是她刚背完的那一段原文和她实际说出口的话。

⚠ 现在扮演考官追问，目标是**问出她说不出来的地方**：
- 出 3 个英文追问，一行一个，从容易到难，最后一个要真的难。
- 每一问都从她刚说的话里长出来（抓她用了但没解释的名词、抓她说得含糊的因果）。
- 然后用中文写一行：这三问里她最可能卡在哪一个，为什么。
- 不要给答案。不要客套。
"""


def run_claude(prompt, model):
    if not CLAUDE:
        return False, '找不到 claude.exe —— VSCode 的 Claude Code 扩展装了吗？'
    cmd = [CLAUDE, '-p', prompt]
    if model:
        cmd += ['--model', model]
    t0 = time.time()
    try:
        r = subprocess.run(cmd, cwd=WORKDIR, capture_output=True, timeout=TIMEOUT)
    except subprocess.TimeoutExpired:
        return False, '超时了（%d 秒）。额度断了？' % TIMEOUT
    out = (r.stdout or b'').decode('utf-8', 'replace').strip()
    err = (r.stderr or b'').decode('utf-8', 'replace').strip()
    secs = round(time.time() - t0, 1)
    if r.returncode != 0 or not out:
        return False, ('claude 返回 %d\n%s' % (r.returncode, err or out))[:900]
    print('  → %s 秒 · %d 字' % (secs, len(out)))
    return True, out


def build(d):
    mode = d.get('mode', 'check')
    head = FOLLOWUP if mode == 'followup' else RULES
    L = [head, '', '【主题】' + (d.get('topic') or '?'), '', '【她该说的原文】', d.get('ref') or '（没给）', '',
         '【她实际说出口的】', d.get('said') or '（没听到）']
    if mode != 'followup':
        L += ['', '【页面算出她漏掉的要点】', d.get('missed') or '（一个没漏）']
    return '\n'.join(L)


class H(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        body = json.dumps({'ok': True, 'claude': bool(CLAUDE)}).encode()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self._cors()
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        try:
            n = int(self.headers.get('Content-Length') or 0)
            d = json.loads(self.rfile.read(n).decode('utf-8'))
        except Exception as e:
            d = {}
            print('  ⚠ 请求读不了:', e)
        mode = d.get('mode', 'check')
        print('[%s] %s · %s' % (time.strftime('%H:%M:%S'), mode, (d.get('topic') or '?')[:40]))
        ok, text = run_claude(build(d), d.get('model') or 'claude-sonnet-5')
        body = json.dumps({'ok': ok, 'text': text}, ensure_ascii=False).encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self._cors()
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *a):
        pass


if __name__ == '__main__':
    if sys.platform == 'win32':
        try:
            sys.stdout.reconfigure(encoding='utf-8')
        except Exception:
            pass
    print('=' * 58)
    print(' 口试即时老师 · http://localhost:%d' % PORT)
    print(' claude.exe : %s' % (CLAUDE or '⚠ 没找到！'))
    print(' 这个窗口别关。停：Ctrl+C')
    print(' 一页纸上打开「🎧 实时老师」开关就能用了。')
    print('=' * 58)
    HTTPServer(('127.0.0.1', PORT), H).serve_forever()
