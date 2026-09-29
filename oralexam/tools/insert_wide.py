# -*- coding: utf-8 -*-
"""把每个主题的「广度」折叠块放进一页纸（app/bones.html）。

2026-09-29 她：「每个主题加一层折叠的广度内容 ＋ 定义……要像一页纸一样写顺溜，有 hook」
「防止我在考试中突然停顿、空白，我要把所有时间都用广度内容填满」。
写法她定了四条：只写广度（标题一眼就能背）· 要背的正文不用比喻 · 不含糊，东西直接写名字 ·
先写名字再说它是什么。

每块是一个 <details class="wide">，放在 <article> 的最后。已经有的就整块替换，所以可以重复跑。
块的源文件放在一个目录里，一个主题一个文件：<article id>.html。

跑法：
    python tools/insert_wide.py <块所在目录>            # 全部
    python tools/insert_wide.py <块所在目录> t-tca t-aa # 只放这几个
"""
import io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'bones.html')

NAME = r'[A-ZÁ-Ž][a-zá-žěščřžýáíéúůňťď]+'

def star_summary(block):
    """2026-09-29 她：「我看见你标注了星号，和老师有关系，这个在折叠标题上直接点出来有几个」。
    数这一块里 ⭐ 后面跟着的考官名，写进 <summary> 末尾。可重复跑。"""
    names = []
    for t in re.findall(r'<p class="wmove">(.*?)</p>', block, re.S):
        for n in re.findall(u'⭐\\s*(' + NAME + r'(?:\s*[、,/·&]\s*' + NAME + r')*)', t):
            for x in re.split(r'\s*[、,/·&]\s*', n):
                if x not in names: names.append(x)
    block = re.sub(r'\s*<span class="wstar">.*?</span>', '', block)
    if names:
        tag = ' <span class="wstar">⭐ %d 位考官：%s</span>' % (len(names), '、'.join(names))
        block = block.replace('</summary>', tag + '</summary>', 1)
    return block

def main():
    d, only = sys.argv[1], set(sys.argv[2:])
    s = io.open(SRC, encoding='utf-8').read()
    done = []
    for fn in sorted(os.listdir(d)):
        if not fn.endswith('.html'): continue
        tid = fn[:-5]
        if only and tid not in only: continue
        block = io.open(os.path.join(d, fn), encoding='utf-8').read().strip()
        assert block.startswith('<details class="wide">') and block.endswith('</details>'), fn
        block = star_summary(block)
        a = s.find('<article id="%s">' % tid)
        if a < 0:
            print('no article:', tid); continue
        b = s.index('</article>', a)
        seg = s[a:b]
        seg = re.sub(r'\n*<details class="wide">.*?</details>\n*', '\n', seg, flags=re.S)
        seg = seg.rstrip('\n') + '\n\n' + block + '\n'
        s = s[:a] + seg + s[b:]
        done.append(tid)
    io.open(SRC, 'w', encoding='utf-8', newline='').write(s)
    print('inserted %d: %s' % (len(done), ' '.join(done)))

if __name__ == '__main__':
    main()
