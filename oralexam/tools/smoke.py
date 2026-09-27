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
 # ⚠ bones.html 没有 #main，所以「渲染 0 字」不算检查 ——
 # 一个总是能过的检查就是个盲区。这里真数一下章节和目录。
 'bones.html': [
   ("一页纸 章节",  "if(document.querySelectorAll('article[id]').length < 20) throw new Error('章节太少');"),
   ("一页纸 目录",  "if(document.querySelectorAll('#toc a').length < 20) throw new Error('目录没生成');"),
   ("一页纸 三块",  "if(document.querySelectorAll('.row.must').length < 20) throw new Error('MUST SAY 块太少');"),
   # ⚠ 朝读必须**真调一次** —— 上次 earSay 引用了不存在的 unspell，
   #   就是因为我只测了周边函数、没真叫。单次调用不会进循环。
   ("一页纸 切句",  "if(window.bonesCount() < 60) throw new Error('句子切少了: '+window.bonesCount());"),
   ("一页纸 念一句","window.bonesSay('test one two', function(){});"),
   ("一页纸 标签没断","if(document.querySelectorAll('.en b').length < 200) throw new Error('切句把加粗标签切坏了');"),
 ],
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
   # ⚠ 2026-09-24 她：「我不敢点回主页」—— 接着上次那一份
   ("存位置",     "saveSpot();"),
   ("接着上次",   "home(); resumeSpot();"),
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
   # ⚠ 2026-09-24：磨耳朵**不能在这里真启动**。它是一条 setTimeout 链，
   #   而无头浏览器的 --virtual-time-budget 会把定时器快进，于是循环永远跑不完，
   #   Chrome 挂住、smoke 超时 180 秒。（第一次加进来就是这么挂的。）
   #   所以只调用它的各个函数、渲染它的那一块，**不进入播放循环**。
   ("磨耳朵 池子", "earPool(true).length + earPool(false).length;"),
   ("磨耳朵 化学池","earPool('chem').length + earPool('chemdone').length;"),
   ("磨耳朵 那一块","earBox();"),
   ("磨耳朵 选嗓子","pickTwoVoices();"),
   # ⚠ 2026-09-24：必须**真的调一次 earSay**。上一版只测了周边函数，
   #   结果 earSay 里引用了演练台没有的 `unspell`，一播放就 ReferenceError，
   #   而 smoke 全绿 —— 她点了没声音才发现。单次调用不会进循环，安全。
   ("磨耳朵 念一句","earSay('test one two', null, 1, function(){});"),
   # ⚠ 2026-09-24 她要的「挑句」：屏 ＋ 计数 ＋ 挑/取消
   ("挑句屏",     "pickPage('all');"),
   ("挑句 计数",   "pkCount(); pickCount();"),
   # ⚠ 2026-09-24 她要的「循环 / 再放一遍 / 多停一会儿」。
   #   这几个的验证要小心：**不能让它们真的进播放链**（同上，定时器会被快进）。
   #   所以先搭一个假 EAR，渲染那一屏，再单独调三个控制；
   #   earReplay 把 earStep 暂时换掉—— 这样它自己的那几行真跑了，又不会掉进循环。
   ("磨耳朵 假屏",  "EAR = {list:[{card:CARDS[0], item:{q:'q', ez:'hello there friend'}}], i:0, on:false, v:{m:null,f:null}, gap:2000, loop:false, extra:0, gen:0}; earScreen();"),
   ("磨耳朵 循环",  "earLoop(); earLoop();"),
   ("磨耳朵 多停",  "earHold(); earHold();"),
   ("磨耳朵 间隔",  "earGap(5); earGap(2);"),
   ("磨耳朵 再放",  "var _os = earStep; earStep = function(){ window.__rp = 1; }; earReplay(); earStep = _os; window.__rp;"),
   # ⚠ 2026-09-24 她要的「日戳 / 听过几遍 / 自标多听」
   ("磨耳朵 倒推日戳","backfillDays(st());"),
   ("磨耳朵 分堆",  "earDays().length; earDayRow();"),
   ("磨耳朵 标多听","earStarToggle(); earPool('star').length; earStarToggle();"),
   ("磨耳朵 计遍数","earCount(EAR.list[0]);"),
   ("磨耳朵 按天池","earPool('day:_none').length + earPool('day:2026-09-23').length;"),
   ("磨耳朵 停",  "earStop();"),
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
    # ⚠ 有些页没有 #main（例如 bones.html 是一页静态文），那就只看探针过没过。
    has_main = ('id="main"' in t)
    ok = not bad and ((n > 200) or not has_main)
    for x in bad:
        print('  ❌ ' + x)
    if not bad:
        print('  ✅ %d 步全过%s' % (len(steps),
              (' · #main 渲染 %d 字' % n) if has_main else ' · 静态页'))
    elif n <= 200 and has_main:
        print('  ❌ #main 只有 %d 字 —— 首页多半没渲染出来' % n)
    return ok


def main():
    if not CHROME:
        print('❌ 找不到 Chrome 或 Edge，跑不了。')
        return 2
    want = [a for a in sys.argv[1:] if not a.startswith('-')]
    pages = [p for p in ['index.html', 'drill.html', 'map.html', 'exam.html', 'bones.html']
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
