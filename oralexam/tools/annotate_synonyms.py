# -*- coding: utf-8 -*-
"""一页纸（app/bones.html）里有别名的东西，在每个主题第一次出现的地方把其它名字标上。

2026-09-29 她：「现在这些同名的在一页纸中出现时都把所有名字都标注」。
起因是「卡尔文循环 = dark reactions = light-independent reactions」这种——
考官换一个名字问，她就认不出是同一个东西。

· 英文段落（.en）里标 ` (also called …)`，音频会跟着念出来。
· 中文段落里的中文名后面标 `（= 英文名 …）`，对上英文名。
· 每个主题每组只标第一次，不然一段话里全是括号。
· 不碰 <h3>（目录和音频标题会跟着变）和 <code>（式子框）。
· 可重复跑：先把上次的 <span class="syn"> 全删掉再标。

跑法：
    python tools/annotate_synonyms.py          # 只报告会标在哪
    python tools/annotate_synonyms.py --write  # 写回 bones.html
"""
import io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'bones.html')

# names：全部英文名（展示顺序）；en：英文里认哪些写法；zh：中文里认哪些写法
G = [
 dict(names=['Calvin cycle', 'Calvin–Benson cycle', 'dark reactions', 'light-independent reactions'],
      en=[r'Calvin(?:[–-]Benson)? cycle', r'dark reactions?', r'light-independent reactions?'],
      zh=[r'卡尔文循环', r'Calvin ?循环', r'暗反应']),
 dict(names=['citric acid cycle', 'TCA cycle', 'tricarboxylic acid cycle', 'Krebs cycle'],
      en=[r'citric acid cycle', r'TCA cycle', r'tricarboxylic acid cycle', r'Krebs cycle'],
      zh=[r'柠檬酸循环', r'三羧酸循环']),
 dict(names=['glycolysis', 'Embden–Meyerhof pathway'],
      en=[r'glycolysis', r'Embden[–-]Meyerhof'], zh=[r'糖酵解']),
 dict(names=['pentose phosphate pathway', 'hexose monophosphate shunt', 'phosphogluconate pathway'],
      en=[r'pentose phosphate pathway', r'hexose monophosphate shunt'], zh=[r'磷酸戊糖途径', r'磷酸戊糖']),
 dict(names=['respiratory chain', 'electron transport chain'],
      en=[r'respiratory chain', r'electron transport chain'], zh=[r'呼吸链', r'电子传递链']),
 dict(names=['β-oxidation', 'fatty acid oxidation'],
      en=[r'β-oxidation', r'beta-oxidation', r'fatty acid oxidation'], zh=[r'β-氧化', r'β 氧化']),
 dict(names=['urea cycle', 'ornithine cycle', 'Krebs–Henseleit cycle'],
      en=[r'urea cycle', r'ornithine cycle'], zh=[r'尿素循环', r'鸟氨酸循环']),
 dict(names=['Cori cycle', 'lactic acid cycle'], en=[r'Cori cycle'], zh=[r'Cori 循环', r'乳酸循环']),
 dict(names=['glucose–alanine cycle', 'Cahill cycle'], en=[r'glucose[–-]alanine cycle', r'alanine cycle'],
      zh=[r'葡萄糖-丙氨酸循环', r'丙氨酸循环']),
 dict(names=['ubiquinone', 'coenzyme Q', 'CoQ'], en=[r'ubiquinone', r'coenzyme Q'], zh=[r'泛醌', r'辅酶 Q']),
 dict(names=['ATP synthase', 'Complex V', 'F₀F₁-ATPase'], en=[r'ATP synthase'], zh=[r'ATP 合酶']),
 dict(names=['Complex II', 'succinate dehydrogenase'], en=[r'Complex II\b'], zh=[]),
 dict(names=['Complex IV', 'cytochrome c oxidase'], en=[r'Complex IV\b'], zh=[]),
 dict(names=['carnitine acyltransferase I', 'carnitine palmitoyltransferase I', 'CPT-1'],
      en=[r'carnitine acyltransferase I\b', r'carnitine palmitoyltransferase'], zh=[r'肉碱酰基转移酶']),
 dict(names=['triacylglycerol', 'triglyceride', 'neutral fat'],
      en=[r'triacylglycerols?', r'triglycerides?'], zh=[r'甘油三酯', r'三酰甘油']),
 dict(names=['phosphatidylcholine', 'lecithin'], en=[r'phosphatidylcholine', r'lecithin'], zh=[r'卵磷脂']),
 dict(names=['glyceraldehyde-3-phosphate', 'GAP', 'G3P'], en=[r'glyceraldehyde-3-phosphate'], zh=[r'甘油醛-3-磷酸']),
 dict(names=['2,3-BPG', '2,3-bisphosphoglycerate', '2,3-DPG'], en=[r'2,3-BPG', r'2,3-bisphosphoglycerate'], zh=[]),
 dict(names=['Km', 'Michaelis constant'], en=[r'Michaelis constant', r'(?-i:\bK<sub>m</sub>)'], zh=[r'米氏常数']),
 dict(names=['kcat', 'turnover number'], en=[r'turnover number', r'\bk<sub>cat</sub>(?!\s*/)'], zh=[r'转换数']),
 dict(names=['specificity constant', 'kcat/Km', 'catalytic efficiency'],
      en=[r'specificity constant', r'catalytic efficiency'], zh=[r'专一性常数', r'催化效率']),
 dict(names=['isoenzyme', 'isozyme'], en=[r'isoenzymes?', r'isozymes?'], zh=[r'同工酶']),
 dict(names=['zymogen', 'proenzyme'], en=[r'zymogens?', r'proenzymes?'], zh=[r'酶原']),
 dict(names=['peptide bond', 'amide bond'], en=[r'peptide bonds?', r'amide bonds?'], zh=[r'肽键']),
 dict(names=['β-sheet', 'β-pleated sheet'], en=[r'β-sheets?', r'β-pleated'], zh=[r'β 折叠', r'β-折叠']),
 dict(names=['β-turn', 'reverse turn', 'β-bend'], en=[r'β-turns?'], zh=[r'β 转角', r'β-转角']),
 dict(names=['T state', 'tense state', 'deoxy form'], en=[r'(?-i:\bT state)'], zh=[r'T 态']),
 dict(names=['R state', 'relaxed state', 'oxy form'], en=[r'(?-i:\bR state)'], zh=[r'R 态']),
 dict(names=['coding strand', 'sense strand', 'non-template strand'], en=[r'coding strand', r'sense strand'], zh=[r'编码链', r'有义链']),
 dict(names=['template strand', 'antisense strand', 'non-coding strand'], en=[r'template strand', r'antisense strand'], zh=[r'模板链', r'反义链']),
 dict(names=['−10 box', 'Pribnow box'], en=[r'−10 box', r'Pribnow box'], zh=[r'−10 区']),
 dict(names=['TATA box', 'Goldberg–Hogness box'], en=[r'TATA box'], zh=[r'TATA 框']),
 dict(names=['Shine–Dalgarno sequence', 'ribosome binding site'], en=[r'Shine[–-]Dalgarno', r'ribosome binding site'], zh=[r'Shine-Dalgarno 序列']),
 dict(names=['stop codon', 'termination codon', 'nonsense codon'], en=[r'stop codons?', r'termination codons?'], zh=[r'终止密码子']),
 dict(names=['intron', 'intervening sequence'], en=[r'introns?'], zh=[r'内含子']),
 dict(names=['CAP', 'CRP', 'catabolite activator protein', 'cAMP receptor protein'], en=[r'(?-i:\bCAP\b)'], zh=[]),
 dict(names=['DNA gyrase', 'topoisomerase II (bacteria)'], en=[r'gyrase'], zh=[r'旋转酶', r'促旋酶']),
 dict(names=['EF-Tu', 'eEF1A in eukaryotes'], en=[r'EF-Tu'], zh=[]),
 dict(names=['EF-G', 'eEF2 in eukaryotes'], en=[r'EF-G\b'], zh=[]),
 dict(names=['signal peptide', 'signal sequence'], en=[r'signal peptides?', r'signal sequences?'], zh=[r'信号肽']),
 dict(names=['propeptide', 'prosequence', 'pro-region'], en=[r'propeptides?'], zh=[r'前肽']),
 dict(names=['Tm', 'melting temperature'], en=[r'melting temperature', r'(?-i:\bT<sub>m</sub>)'], zh=[r'解链温度', r'熔解温度']),
 dict(names=['Western blot', 'immunoblot'], en=[r'Western blot', r'immunoblot'], zh=[]),
 dict(names=['size-exclusion chromatography', 'gel filtration'], en=[r'size[- ]exclusion', r'gel filtration'], zh=[r'凝胶过滤', r'分子筛']),
 dict(names=['Beer–Lambert law', "Beer's law"], en=[r'Beer[–-]Lambert', r'Lambert[–-]Beer'], zh=[]),
 dict(names=['qPCR', 'real-time PCR (≠ RT-PCR)'], en=[r'qPCR', r'real-time PCR'], zh=[]),
 dict(names=['cell-free protein synthesis', 'CFPS', 'in vitro transcription–translation'], en=[r'cell-free'], zh=[r'无细胞']),
 dict(names=['chaperone', 'heat shock protein (many of them)'], en=[r'chaperones?'], zh=[r'分子伴侣']),
]

EN_P = re.compile(r'<p class="en">.*?</p>', re.S)
# 广度层的标题（wmove）和折叠摘要也不标：她要「标题一眼就能背」，塞括号就背不了了。
SKIP = re.compile(r'<h3>.*?</h3>|<code\b.*?</code>|<p class="h">.*?</p>|<p class="t">.*?</p>'
                  r'|<p class="wmove">.*?</p>|<summary>.*?</summary>', re.S)

def masks(body):
    """每个字符：能不能插（不在标签里、不在跳过区）＋ 是不是英文段落。"""
    ok = [True] * len(body)
    for m in re.finditer(r'<[^>]*>', body):
        for i in range(m.start(), m.end()): ok[i] = False
    for m in SKIP.finditer(body):
        for i in range(m.start(), m.end()): ok[i] = False
    en = [False] * len(body)
    for m in EN_P.finditer(body):
        for i in range(m.start(), m.end()): en[i] = True
    return ok, en

def first(body, pats, ok, en, want_en, flags):
    best = None
    for p in pats:
        for m in re.finditer(p, body, flags):
            s, e = m.start(), m.end()
            if not all(ok[i] or body[i] == '<' for i in range(s, e)):  # 允许 K<sub>m</sub> 这种跨标签
                if not (ok[s] and ok[e - 1] or body[e - 1] == '>'):
                    continue
            if en[s] != want_en or not ok[s]:
                continue
            if best is None or s < best[0]:
                best = (s, e, m.group(0))
            break
    return best

def after_close(body, e):
    """匹配的词如果正好在 </b> 前面结束，把标注挪到 </b> 后面——不然跟读涂掉 <b> 时会连括号一起涂。"""
    m = re.match(r'(</(?:b|i|u|span)>)+', body[e:])
    return e + (m.end() if m else 0)

def annotate(body, report):
    ok, en = masks(body)
    ins = []
    for g in G:
        for want_en, pats, flags in ((True, g['en'], re.I), (False, g['zh'], 0), (False, g['en'], re.I)):
            if not pats: continue
            hit = first(body, pats, ok, en, want_en, flags)
            if not hit: continue
            s, e, txt = hit
            plain = re.sub(r'<[^>]+>', '', txt).lower()
            others = [n for n in g['names'] if n.lower() != plain and n.lower().rstrip('s') != plain.rstrip('s')]
            if want_en:
                tag = ' <span class="syn">(also called %s)</span>' % ', '.join(others)
            else:
                tag = '<span class="syn">（= %s）</span>' % ' = '.join(g['names'])
            pos = after_close(body, e)
            ins.append((pos, tag))
            report.append(('EN' if want_en else 'ZH', txt, tag))
            if not want_en: break          # 中文区只标一次（中文名或英文名，谁先出现标谁）
    for pos, tag in sorted(ins, reverse=True):
        body = body[:pos] + tag + body[pos:]
    return body

def main():
    write = '--write' in sys.argv
    src = io.open(SRC, encoding='utf-8').read()
    src = re.sub(r' ?<span class="syn">.*?</span>', '', src)
    total = 0
    def rep(m):
        nonlocal total
        report = []
        body = annotate(m.group(2), report)
        for kind, txt, tag in report:
            total += 1
            print('%-10s %s  %-34s %s' % (m.group(1), kind, re.sub(r'<[^>]+>', '', txt)[:34], re.sub(r'<[^>]+>', '', tag)[:80]))
        return '<article id="%s">%s</article>' % (m.group(1), body)
    out = re.sub(r'<article id="([^"]+)">(.*?)</article>', rep, src, flags=re.S)
    print('total', total)
    if write:
        io.open(SRC, 'w', encoding='utf-8', newline='').write(out)
        print('written')

if __name__ == '__main__':
    main()
