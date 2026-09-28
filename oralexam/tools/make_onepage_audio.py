# -*- coding: utf-8 -*-
"""把「一页纸」(app/bones.html) 每个主题合成一条 mp3，本地放，可以拷到手机上。

2026-09-28 她：「把一页纸的音频全部做出来，我可以其他地方点开」「然后随机播放所有主题」。
⚠ 随机播放不用做——文件一多，随便一个手机播放器对着这个文件夹点「随机」就是了，
  跟 `make_cardaudio.py` 那批一样，这边不重复造轮子。

跟 make_cardaudio.py 同一个决定：本地生成、不进 git（audio_out/ 已 .gitignore）。
只念 `.en`（每个主题 MUST SAY / NUMBERS / HOOK 三行的英文正文），
`<code class="eq">` 那些通路式子不念——那是「看着念」的，不是背的（eqBox 同一条判据）。

跑法：
    python tools/make_onepage_audio.py            # 全部主题，缺什么补什么
    python tools/make_onepage_audio.py t-vit t-fas # 只做这几个（按 article id，见 bones.html）
"""
import io, os, re, sys, asyncio, html

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SRC  = os.path.join(ROOT, 'app', 'bones.html')
OUT  = os.path.join(ROOT, 'audio_out', 'onepage')

VOICE = 'en-GB-SoniaNeural'
RATE  = '-10%'

TAG = re.compile(r'<[^>]+>')

# ⚠ 2026-09-28 她：「有些地方可能会读错 ER CoA 这些」「尽量全部给全称」。
# 缩写 edge-tts 十有八九读错（ER 念成语气词 er，CoA 念不成词）。
# 她要的不只是读对——她说了「很多英语到嘴边说不出来」，听全称多几遍，
# 到时候嘴里才有词可用，缩写帮不了这个。
# 先处理带上下标的分子式（跟字母连在一起，普通的单词边界规则抓不到），
# 再处理裸缩写。顺序：先长的/带连字符的复合词，再短的，避免被短词先吃掉一半。
FORMULAS = [
 (u'NADP⁺', 'the oxidized form of nicotinamide adenine dinucleotide phosphate'),
 (u'NAD⁺', 'the oxidized form of nicotinamide adenine dinucleotide'),
 (u'FADH₂', 'reduced flavin adenine dinucleotide'),
 (u'CO₂', 'carbon dioxide'),
 (u'H₂O', 'water'),
 (u'O₂', 'oxygen'),
 (u'H⁺', 'a proton'),
 (u'e⁻', 'an electron'),
 (u'B₁₂', 'B twelve'), (u'B₁', 'B one'), (u'B₂', 'B two'),
 (u'B₃', 'B three'), (u'B₅', 'B five'), (u'B₆', 'B six'),
 (u'B₇', 'B seven'), (u'B₉', 'B nine'),
]
ABBR = [
 ('HMG-CoA', 'hydroxymethylglutaryl coenzyme A'),
 ('EF-Tu', 'elongation factor Tu'), ('EF-G', 'elongation factor G'),
 ('ddNTPs', 'dideoxynucleotides'),
 ('NADPH', 'reduced nicotinamide adenine dinucleotide phosphate'),
 ('NADH', 'reduced nicotinamide adenine dinucleotide'),
 ('NADP', 'nicotinamide adenine dinucleotide phosphate'),
 ('NAD', 'nicotinamide adenine dinucleotide'),
 ('FADH', 'reduced flavin adenine dinucleotide'),
 ('FAD', 'flavin adenine dinucleotide'), ('FMN', 'flavin mononucleotide'),
 ('AMPK', 'AMP-activated protein kinase'),
 ('cAMP', 'cyclic adenosine monophosphate'), ('cGMP', 'cyclic guanosine monophosphate'),
 ('ATP', 'adenosine triphosphate'), ('ADP', 'adenosine diphosphate'),
 ('AMP', 'adenosine monophosphate'),
 ('GTP', 'guanosine triphosphate'), ('GDP', 'guanosine diphosphate'),
 ('UTP', 'uridine triphosphate'), ('UDP', 'uridine diphosphate'),
 ('CTP', 'cytidine triphosphate'),
 ('TPP', 'thiamine pyrophosphate'), ('PLP', 'pyridoxal phosphate'),
 ('THF', 'tetrahydrofolate'), ('SAM', 'S-adenosylmethionine'),
 ('BPG', 'bisphosphoglycerate'), ('PEP', 'phosphoenolpyruvate'),
 ('PDH', 'pyruvate dehydrogenase'), ('ACP', 'acyl carrier protein'),
 ('CPT', 'carnitine palmitoyltransferase'),
 ('SRP', 'signal recognition particle'), ('CAP', 'catabolite activator protein'),
 ('PCR', 'polymerase chain reaction'),
 ('mRNA', 'messenger RNA'), ('tRNA', 'transfer RNA'), ('rRNA', 'ribosomal RNA'),
 ('RNA', 'ribonucleic acid'), ('DNA', 'deoxyribonucleic acid'),
 ('ER', 'endoplasmic reticulum'), ('CoA', 'coenzyme A'),
]
ABBR_RX = re.compile(r'\b(' + '|'.join(re.escape(k) for k, _ in ABBR) + r')(s)?\b')
ABBR_MAP = dict(ABBR)
CODONS = re.compile(r'\b([AUGC]{3})\b')
def spellCodon(m):
    s = m.group(1)
    if s not in ('AUG', 'UAA', 'UAG', 'UGA'): return s   # 只拼起始/终止密码子，别误伤别的三字母
    return ' '.join(s)

def expandAbbr(t):
    for k, v in FORMULAS: t = t.replace(k, ' ' + v + ' ')
    t = re.sub(r'\bComplex IV\b', 'Complex four', t)
    t = re.sub(r'\bComplex III\b', 'Complex three', t)
    t = re.sub(r'\bComplex II\b', 'Complex two', t)
    t = re.sub(r'\bComplex I\b', 'Complex one', t)
    t = CODONS.sub(spellCodon, t)
    t = ABBR_RX.sub(lambda m: ABBR_MAP[m.group(1)] + ('s' if m.group(2) else ''), t)
    # 兜底：漏网的上下标数字，好过原样喂给合成器
    sub = u'₀₁₂₃₄₅₆₇₈₉'
    sup = u'⁰¹²³⁴⁵⁶⁷⁸⁹'
    for i, c in enumerate(sub): t = t.replace(c, str(i))
    for i, c in enumerate(sup): t = t.replace(c, str(i))
    return t

def sayWords(t):
    """符号换人话，跟 bones.html 里的 sayWords() 是同一套替换（保持声音一致）。"""
    t = (t.replace(u'⟶', ' turns to ').replace(u'→', ' turns to ')
          .replace(u'➔', ' turns to ').replace(u'➜', ' turns to ')
          .replace(u'⇌', ' is in equilibrium with ').replace(u'⇄', ' is in equilibrium with ')
          .replace(u'↔', ' is in equilibrium with ').replace(u'⇋', ' is in equilibrium with ')
          .replace(u'⟵', ' comes from ').replace(u'←', ' comes from ')
          .replace(u'＋', ' plus ').replace(u'⁻', ' minus ')
          .replace(u'⁺', ' plus ').replace(u'−', ' minus ')
          .replace(u'·', ', '))
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def plain(h):
    t = TAG.sub(' ', h)
    t = html.unescape(t)
    t = t.replace(u'“', ' ').replace(u'”', ' ').replace(u'’', "'").replace(u'‘', "'")
    t = expandAbbr(t)
    return sayWords(t)

def parse_articles(src):
    out = []
    for am in re.finditer(r'<article id="([^"]+)">(.*?)</article>', src, re.S):
        aid, body = am.group(1), am.group(2)
        h3 = re.search(r'<h3>(.*?)</h3>', body, re.S)
        title = plain(h3.group(1)) if h3 else aid
        ens = re.findall(r'<p class="en">(.*?)</p>', body, re.S)
        text = ' '.join(plain(e) for e in ens if plain(e).strip())
        out.append({'id': aid, 'title': title, 'text': text})
    return out

async def synth(text, path):
    import edge_tts
    for attempt in range(3):
        try:
            await edge_tts.Communicate(text, VOICE, rate=RATE).save(path)
            if os.path.getsize(path) > 400:
                return True
        except Exception as e:
            if attempt == 2:
                print(u'   合成失败：%s' % e)
                return False
            await asyncio.sleep(1.5)
    return False

async def main_async(ids):
    src = io.open(SRC, encoding='utf-8').read()
    arts = parse_articles(src)
    if ids:
        arts = [a for a in arts if a['id'] in ids]
    os.makedirs(OUT, exist_ok=True)
    ok = 0
    for i, a in enumerate(arts):
        if not a['text']:
            print(u'  跳过（没有英文正文）：%s' % a['id'])
            continue
        fn = '%02d_%s.mp3' % (i + 1, a['id'])
        path = os.path.join(OUT, fn)
        if os.path.exists(path) and os.path.getsize(path) > 400:
            print(u'%2d/%2d  %-12s 已有，跳过' % (i + 1, len(arts), a['id']))
            ok += 1
            continue
        print(u'%2d/%2d  %-12s %s' % (i + 1, len(arts), a['id'], a['title'][:60]))
        good = await synth(a['title'] + '. ' + a['text'], path)
        if good:
            ok += 1
    print(u'done: %d / %d  ->  %s' % (ok, len(arts), OUT))

def main():
    ids = sys.argv[1:]
    asyncio.run(main_async(ids))

if __name__ == '__main__':
    main()
