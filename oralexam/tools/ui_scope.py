# -*- coding: utf-8 -*-
"""查 app 里「按名单找正文」的地方，有没有漏掉某个正文字段。

**为什么要有这个。** 2026-09-20 一天里同一个形状的 bug 出现了五次：
喇叭没了、点读不动、逐句高亮不跟、挖空不管、鼠标指针不对。
根因都是一个——**加了 `ez` 这个新字段、渲染成新的 `.ezb` 块之后，
每一个「靠列清单决定去哪里找正文」的功能都得被单独告知一遍**，漏一个就整块静默失效。
不报错、不崩溃，页面看着完全正常。

Ruojin 当天的原话：「我焦虑的是这种类似的被漏掉的东西是不是还有很多」。
这份工具把那句话变成一个数：**每个名单里，少了哪个正文 class。**

判据很窄，只认「逗号分隔、且含 `.en` 的选择器字符串」——
`.en` 是最老的那个正文 class，所以任何一张正文名单都该有它。
有 `.en` 却没有别的某个正文 class，就报出来。

⚠ 它查的是**名单**，不是**缺陷**。名单少一项不一定是 bug
（挖空模式的 JS 和 CSS 就是故意保持一致的），所以报出来的每一条都要回去看一眼再改。
2026-09-20 我自己就是因为把「选择器个数」当成「缺陷个数」报给她，被她当场问住。

跑法：
    python tools/ui_scope.py
"""
import io, os, re, sys

OUT = io.TextIOWrapper(io.FileIO(1, 'w', closefd=False), encoding='utf-8', newline='\n')


def say(s=''):
    OUT.write(s + '\n')


HERE = os.path.dirname(os.path.abspath(__file__))
PAGE = os.path.join(HERE, '..', 'app', 'index.html')

# **兄弟字段**：新字段 → 它对应的那个老字段。
# 判据就一条：**一张名单里出现了老的那个、却没有新的那个，就报出来。**
# 为什么不是「列出所有正文 class，谁缺谁报」——第一版那么写，8 张名单报了 7 张，
# 而其中大半是对的：`.ezcn` 是中文，本来就不该进朗读名单；`.ez` 里没有加粗，
# 也不该进挖空名单。**按兄弟关系查，才是在问「加新字段时漏告诉了谁」。**
# ⚠ 老字段要挑**标记性强**的那个。第二版用 `.en` 当「英文正文」的标记，
#    结果挖空的三张名单全被报了——那三张是按「里面有没有加粗」组织的，
#    而 `.ez` 里一个 <b> 都没有，本来就不该进去。换成 `.pt-en`／`.pt-big`
#    这一对之后，7 张名单只剩 1 张被报，而那 1 张是真的。
SIBLINGS = {
    '.ez':   '.pt-en',     # 要出声念的英文：完整版有 → 最短版也该有
    '.ezcn': '.pt-big',    # 中文那一行：大字中文有 → 最短版中文也该有
}

# 一串逗号分隔的选择器，里面出现过 .en
LIST = re.compile(r"['\"]([^'\"\n]*\.en\b[^'\"\n]*)['\"]")
CSSLIST = re.compile(r'^([^{\n]*\.en\b[^{\n]*)\{', re.M)


def classes_in(s):
    return set(re.findall(r'\.[a-zA-Z][\w-]*', s))


def looks_like_selectors(s):
    """每一段都得像个选择器。挡掉 `q:it[k].q, a:it[k].en` 那种 JS 代码。"""
    for part in s.split(','):
        part = part.strip()
        if not part or not re.match(r'^[.#a-zA-Z][\w .#:>\[\]="-]*$', part):
            return False
    return True


def main():
    src = io.open(PAGE, encoding='utf-8').read()
    lines = src.split('\n')
    hits = []
    for m in list(LIST.finditer(src)) + list(CSSLIST.finditer(src)):
        sel = m.group(1).strip()
        if ',' not in sel or not looks_like_selectors(sel):
            continue
        ln = src.count('\n', 0, m.start()) + 1
        have = classes_in(sel)
        missing = [new for new, old in SIBLINGS.items()
                   if old in have and new not in have]
        hits.append((ln, sel, missing))
    say('=' * 74)
    say('正文名单体检 · app/index.html')
    say('=' * 74)
    say('找到 %d 张正文名单。查的是：有老字段、却漏了它的新兄弟。' % len(hits))
    say('兄弟关系：' + ' · '.join('%s ← %s' % (n, o) for n, o in SIBLINGS.items()))
    say('⚠ 报出来的每一条都要回去看那一行在做什么再改——漏了不一定是 bug。')
    say('')
    bad = 0
    for ln, sel, missing in hits:
        flag = '   ' if not missing else '!! '
        if missing:
            bad += 1
        say('%s%5d  %s' % (flag, ln, sel[:88]))
        if missing:
            say('           漏了：' + ' '.join(missing))
    say('')
    say('%d / %d 张名单是满的。' % (len(hits) - bad, len(hits)))
    return 0


if __name__ == '__main__':
    sys.exit(main() or 0)
