# -*- coding: utf-8 -*-
"""实跑四个页面 —— 用无头 Chrome，抓控制台报错，再逐个按钮点一遍。

⚠ 为什么必须有这个工具（2026-09-23 一天之内栽了两次）：

她说「drill.html 打不开了」。我当时的验收是 `esprima.parseScript`，全绿。
但那是**语法检查**，而坏的是**运行时**：
  · `Uncaught ReferenceError: PERROUND is not defined` —— 首页一渲染就抛，#main 空白
  · `Uncaught ReferenceError: WK is not defined`      —— 「跟读这一份」一点就没反应
两次都是同一个死法：我重构时用「从 `function X(` **切到下一个 `function`**」删代码，
而 **夹在两个函数之间的 `var`** 被连带切掉了。一天之内砍掉了三个变量
（PERROUND · WK · WREC），**语法一次都没报错**。

所以这个工具做两件 esprima 做不到的事：
  ① 真的把页面跑起来，把控制台的 Uncaught 抓出来；
  ② 真的去**调用页面上的按钮**（onclick 里那些函数），看点下去会不会抛。

跑法：
    python tools/smoke.py                 # 四个页面全跑
    python tools/smoke.py drill           # 只跑演练台
返回码非 0 ＝ 有问题，**别推**。
"""
import io, os, re, sys, glob, json, shutil, subprocess, tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.normpath(os.path.join(HERE, '..', 'app'))

CHROME = None
for c in [r'C:\Program Files\Google\Chrome\Application\chrome.exe',
          r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
          r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe']:
    if os.path.exists(c):
        CHROME = c
        break

# 每个页面：进去之后要点的东西。函数名照 onclick 里写的来。
# ⚠ 只放「点了不会跳走、不会开麦」的；开麦的那些（wkGo）在无头里没有权限，不点。
PROBE = {
 'index.html': [],
 'map.html':   [],
 'exam.html':  [],
 'drill.html': [
   ("选一张卡",   "document.getElementById('onecard').value='01';"),
   ("paintThirds", "paintThirds();"),
   ("整张卡 份1", "walkThird('all',1);"),
   ("主问题",     "walkThird('main',1);"),
   ("速背 份1",   "walkThird('cram',1);"),
   ("追问 份1",   "walkThird('ask',1);"),
   # ⚠ 2026-09-23 她要的「上一题」按钮，加进实跑，以后每次都会被点到
   ("跟读 下一条", "walkNext();"),
   ("跟读 上一条", "walkPrev();"),
   ("回首页",     "home();"),
   ("拷问式",     "oneStart();"),
   ("拷问 说完了", "doneAnswer();"),
   ("拷问 上一题", "backQ();"),
   ("回首页2",    "home();"),
   ("化学专练",   "chemStart();"),
   ("回首页3",    "home();"),
   ("轮1",       "walkRound(1);"),
   ("回首页4",    "home();"),
   ("分析",       "statsPage();"),
   ("练过的",     "histPage();"),
   ("上次结果",   "report(true);"),
   ("回首页5",    "home();"),
 ],
}


def run(page):
    src = os.path.join(APP, page)
    if not os.path.exists(src):
        print('  跳过（没有这个文件）')
        return True
    t = io.open(src, encoding='utf-8').read()
    steps = PROBE.get(page, [])
    js = ["<script>window.__smoke=[];window.addEventListener('error',function(e){",
          "window.__smoke.push('CONSOLE!! '+(e.message||e.type));},true);",
          "window.addEventListener('load',function(){var O=[];"]
    for name, code in steps:
        js.append("try{%s O.push('%s=OK');}catch(e){O.push('%s!! '+e.name+': '+e.message);}"
                  % (code, name, name))
    js.append("O.push('mainLen='+((document.getElementById('main')||{innerHTML:''}).innerHTML.length));")
    js.append("document.title=window.__smoke.concat(O).join(' | ');});</script>")
    probe = ''.join(js)
    tmp = os.path.join(APP, '_smoke_tmp.html')
    io.open(tmp, 'w', encoding='utf-8', newline='\n').write(
        t.replace('</body>', probe + '</body>', 1) if '</body>' in t else t + probe)
    prof = os.path.join(tempfile.gettempdir(), 'oralexam_smoke_profile')
    try:
        out = subprocess.run(
            [CHROME, '--headless=new', '--disable-gpu', '--no-sandbox',
             '--user-data-dir=' + prof, '--virtual-time-budget=20000', '--dump-dom',
             'file:///' + tmp.replace('\\', '/')],
            capture_output=True, timeout=180)
        dom = out.stdout.decode('utf-8', 'replace')
    finally:
        try:
            os.remove(tmp)
        except OSError:
            pass
    m = re.search(r'<title>(.*?)</title>', dom, re.S)
    if not m:
        print('  ❌ 页面没跑起来（抓不到 title）')
        return False
    title = m.group(1)
    bad = [x.strip() for x in title.split('|') if '!!' in x]
    mlen = re.search(r'mainLen=(\d+)', title)
    n = int(mlen.group(1)) if mlen else 0
    ok = not bad and (n > 200 or not steps)
    for x in bad:
        print('  ❌ ' + x)
    if not bad:
        print('  ✅ %d 步全过 · #main 渲染 %d 字' % (len(steps), n))
    elif n <= 200 and steps:
        print('  ❌ #main 只有 %d 字 —— 首页多半没渲染出来' % n)
    return ok


def main():
    if not CHROME:
        print('❌ 找不到 Chrome 或 Edge，跑不了。')
        return 2
    want = [a for a in sys.argv[1:] if not a.startswith('-')]
    pages = [p for p in ['index.html', 'drill.html', 'map.html', 'exam.html']
             if not want or any(w in p for w in want)]
    print('=' * 70)
    print('实跑 —— 无头浏览器把页面跑起来，抓 Uncaught，再逐个按钮点一遍')
    print('=' * 70)
    bad = 0
    for p in pages:
        print()
        print('■ ' + p)
        if not run(p):
            bad += 1
    print()
    if bad:
        print('⚠ %d 个页面有问题 —— **别推**。' % bad)
    else:
        print('四个页面都跑得起来，按钮点得动。')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
