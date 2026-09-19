# -*- coding: utf-8 -*-
"""锚点普查 —— 书里印了、而 30 张卡一次都没提过的东西。

起因（2026-09-19 Ruojin）：
  「这本书里还有什么我们没有涉及到的考点吗？其实我感觉挺全面了，
    但是比如我学到 dna 那章的时候就感觉好像我知道一些可以更加延伸的点。」

她的直觉是对的，而且指出的是一类**现有工具看不见**的漏洞。
`tools/uncovered.py` 算的是「哪些**书页**没有任何一道题落在上面」，是页级的。
她发现的 p066「嘧啶碱基以互变异构形式存在（内酰胺式／内酰亚胺式）（图 4.1）」
在一张**有题落在**的页上，页级工具永远看不见它。**漏的不是一页书，是一页书里的一句话。**

所以这个脚本是**锚点级**的：把书里所有「被命名过的东西」抽出来，逐个查卡上有没有。

锚点是什么（判据见 LOGIC.md §16 和 memory 里那条）：
  · 节标题 N.N / N.N.N
  · 图注 Obr. N.N ...
  · 表注 Tab. N.N ...
  · 命名句 nazývá se / označuje se / tzv.（「称为」「叫做」「所谓」）
  · 书自称重要 nejdůležitější / zásadní / hlavní（「最重要的」）

**最难的一步是语言。** 书是捷克语，卡上现在一个捷克字母都没有（2026-09-15 清干净的），
所以不能直接拿捷克词去搜。这里的做法是**规则转写**：捷克语的生化术语跟英语高度规则地对应
（-asa→-ase、-osa→-ose、-ace→-ation、k→c、f→ph、去变音符），
给每个捷克词生成一组英文候选，任一候选命中就算卡上讲过。

**转写会有漏网的，所以输出是「候选清单」不是「判决」。** 没命中的要人再看一眼：
真的漏了，还是只是转写没转对。宁可多报，不要少报。

跑法：
    python tools/anchors.py               # 只列没命中的，按类型和页码排
    python tools/anchors.py --all         # 连命中的也列，用来检查转写准不准
    python tools/anchors.py --term glykogen   # 查一个词转写成了什么、命中没有
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.join(D, '..', 'book', 'pages')
DATA = os.path.join(D, '..', 'app', 'data')

DIA = {'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i', 'ň': 'n', 'ó': 'o',
       'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u', 'ů': 'u', 'ý': 'y', 'ž': 'z'}

# 太常见，命中了也说明不了什么，不当锚点
STOP = set("""
a i v na se je do od za po pro ale nebo jako tak tedy pak jen již také více méně
ktery ktera ktere kteri jsou byt ma maji muze mohou vsak proto jeho jejich tento tato toto
strana kapitola obrazek tabulka cast prvni druhy treti dalsi jine jiny nasledujici
molekula molekuly atom atomy latka latky slouceniny reakce reakci proces
""".split())


def deacc(t):
    return ''.join(DIA.get(c, c) for c in t.lower())


def variants(w):
    """捷克术语 → 英文候选。规则是经验的，宁可多生成几个。"""
    b = deacc(w).strip('-–—,.;:()[]„“"\'')
    if len(b) < 4: return []
    out = {b}
    reps = [('asa', 'ase'), ('asy', 'ase'), ('osa', 'ose'), ('osy', 'ose'),
            ('ace', 'ation'), ('aci', 'ation'), ('ie', 'y'), ('ium', 'ium'),
            ('id', 'ide'), ('idy', 'ide'), ('in', 'ine'), ('yl', 'yl'),
            ('ni', ''), ('ny', ''), ('na', ''), ('ova', ''), ('ove', ''), ('ovy', '')]
    for a, z in reps:
        if b.endswith(a) and len(b) - len(a) >= 3:
            out.add(b[:-len(a)] + z)
    more = set()
    for x in out:
        more.add(x)
        more.add(x.replace('k', 'c'))
        more.add(x.replace('z', 's'))
        more.add(x.replace('k', 'c').replace('z', 's'))
        if x.startswith('f'): more.add('ph' + x[1:])
        more.add(x.replace('fosf', 'phosph').replace('fosph', 'phosph'))
        more.add(x.replace('ch', 'k'))
    # 词干：前 6 个字母，用来兜住词尾变化
    stems = set(x[:6] for x in more if len(x) >= 7)
    return sorted(more | stems)


def card_text():
    parts = []
    for f in sorted(glob.glob(os.path.join(DATA, '*.js'))):
        if os.path.basename(f).startswith('_'): continue
        parts.append(io.open(f, encoding='utf-8').read())
    t = re.sub(r'<[^>]+>', ' ', ' '.join(parts))
    return re.sub(r'\s+', ' ', deacc(t))


ANCH = [
    ('图', re.compile(r'Obr\.\s*(\d+\.\d+[a-z]?)\s+([^\n]{4,90})')),
    ('表', re.compile(r'Tab\.\s*(\d+\.\d+)\s+([^\n]{4,90})')),
    ('节', re.compile(r'^\s*(\d+\.\d+(?:\.\d+)*)\s+([A-ZÁ-Žáéěíóúůýčďňřšťž][^\n]{3,70})', re.M)),
    ('命名', re.compile(r'(?:nazýv[aá]\s+se|označuje\s+se|tzv\.)\s+([^\n,.;]{3,50})')),
    ('书称重要', re.compile(r'(?:nejd[uů]le[žz]it[eě]j[sš][ií]|z[aá]sadn[ií]|hlavn[ií])\s+([^\n,.;]{3,50})')),
]


def collect():
    rows = []
    for p in sorted(glob.glob(os.path.join(BOOK, 'p*.txt'))):
        page = os.path.basename(p)[1:-4]
        s = io.open(p, encoding='utf-8').read()
        for kind, rx in ANCH:
            for m in rx.finditer(s):
                g = m.groups()
                num, txt = (g[0], g[1]) if len(g) == 2 else ('', g[0])
                txt = re.sub(r'\s+', ' ', txt).strip(' .:|—–-')
                if len(txt) < 4: continue
                rows.append((kind, page, num, txt))
    return rows


def key_words(txt):
    """从锚点文字里挑出值得查的词：长的、不是功能词的。"""
    ws = re.findall(r"[A-Za-zÁ-Žá-ž][A-Za-zÁ-Žá-ž0-9\-]{3,}", txt)
    out = []
    for w in ws:
        if deacc(w) in STOP: continue
        if len(deacc(w)) < 5: continue
        out.append(w)
    return out[:4]


def main():
    CT = card_text()
    if '--term' in sys.argv:
        q = sys.argv[sys.argv.index('--term') + 1]
        v = variants(q)
        hit = [x for x in v if x in CT]
        print('捷克词：%s' % q)
        print('英文候选：%s' % ', '.join(v))
        print('命中：%s' % (', '.join(hit) if hit else '（一个都没有）'))
        return

    rows = collect()
    seen, miss, hit = set(), [], 0
    for kind, page, num, txt in rows:
        kws = key_words(txt)
        if not kws: continue
        k = (kind, txt.lower())
        if k in seen: continue
        seen.add(k)
        got = False
        for w in kws:
            for v in variants(w):
                if v and v in CT: got = True; break
            if got: break
        if got: hit += 1
        else: miss.append((kind, page, num, txt))

    if '--all' in sys.argv:
        print('锚点 %d 个 · 命中 %d · 没命中 %d' % (len(seen), hit, len(miss)))
        return

    order = {'表': 0, '图': 1, '书称重要': 2, '节': 3, '命名': 4}
    miss.sort(key=lambda r: (order.get(r[0], 9), r[1]))
    print('=' * 78)
    print('书里印了、而 30 张卡一次都没提过的锚点')
    print('=' * 78)
    print('抽出锚点 %d 个 · 卡上找得到 %d 个（%.0f%%）· 找不到 %d 个' %
          (len(seen), hit, 100.0 * hit / max(1, len(seen)), len(miss)))
    print()
    print('⚠ 这是**候选清单**，不是判决。书是捷克语、卡是英文，靠规则转写对上，')
    print('  转写会有漏网。每一条要人再看一眼：真的漏了，还是只是没转对。')
    print()
    cur = None
    for kind, page, num, txt in miss:
        if kind != cur:
            cur = kind
            print()
            print('── %s ' % kind + '─' * 60)
        print('  p%s  %-8s %s' % (page, num, txt[:82]))
    print()
    print('%d 条。' % len(miss))


main()
