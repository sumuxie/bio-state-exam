# -*- coding: utf-8 -*-
"""给卡上每个英文词配一条释义，写成 app/data/_gloss.js。

起因（2026-09-14 Ruojin）：
  「在能点单词发音的基础上把单词的意思也显现，然后就是如果我点了单词的收藏，
    单词单独作为需要背诵的单词本被记录在册，内嵌单词本 app，类似墨墨背单词。」

料从哪来：她自己以前建过一个词库，在
  C:/Users/Admin/Documents/trae_projects/recombinants_trae_independant/vocab/out
**那个目录只读，一个字都不写**（她原话：污染严重，谨慎，不要碰里面的东西）。
需要的部分提取进本项目，之后 app 不再依赖那个目录。

三个来源，按可信度排：
  1. app_data.js 里的 cards —— 她人工过过的词卡，4099 张，**全部有中文**，带音标和例句
  2. app_data.js 里的 gloss —— 3581 条，中英释义都有
  3. vocab.json —— 36629 条，英文释义多，中文少，但音标覆盖最广

词形还原是必须的：卡上是 accelerates，词库里是 accelerate。

跑法：
    python tools/make_gloss.py            # 重建 app/data/_gloss.js
    python tools/make_gloss.py --missing  # 只列没有中文的词，供以后补
"""
import io, os, re, sys, json, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(ROOT, 'app', 'data')
SRC = os.path.join('C:' + os.sep, 'Users', 'Admin', 'Documents',
                   'trae_projects', 'recombinants_trae_independant', 'vocab', 'out')


def variants(w):
    yield w
    for suf, rep in (('s', ''), ('es', ''), ('ies', 'y'), ('ed', ''), ('ed', 'e'),
                     ('ing', ''), ('ing', 'e'), ('er', ''), ('est', ''), ('ly', ''),
                     ('ations', 'ate'), ('ation', 'ate'), ('ally', 'al'),
                     ('ised', 'ise'), ('ized', 'ize'), ('ises', 'ise'), ('izes', 'ize')):
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            yield w[:-len(suf)] + rep
    if '-' in w:
        for p in w.split('-'):
            if len(p) > 4: yield p


def card_words():
    """卡上出声念的英文词，跟 make_audio.py 用同一个口径。"""
    out = set()
    for f in sorted(glob.glob(os.path.join(DATA, '*.js'))):
        if os.path.basename(f).startswith('_'): continue
        s = io.open(f, encoding='utf-8').read()
        for e in re.findall(r"\b(?:en|say|big|p):'(.*?)'(?=,\s*\n|\}|\s*\n)", s, re.S):
            t = re.sub(r'<[^>]+>', ' ', e)
            for w in re.findall(r"[A-Za-z][A-Za-z\u2019'\-]*", t):
                w = w.strip("\u2019'-")
                if len(w) > 1: out.add(w.lower())
    return out


def load_sources():
    idx = {}
    def put(k, rec):
        k = (k or '').lower()
        if k and k not in idx: idx[k] = rec
    s = io.open(os.path.join(SRC, 'app_data.js'), encoding='utf-8').read()
    V = json.loads(s[s.index('=') + 1:].strip().rstrip(';'))
    for c in V.get('cards', []):
        rec = {'t': c.get('t') or '', 'ipa': c.get('ipa') or '', 'cn': c.get('cn') or '',
               'en': c.get('def') or '', 'ex': c.get('quote') or '', 'src': 'card'}
        put(c.get('k'), rec); put(c.get('t'), rec)
    for k, g in (V.get('gloss') or {}).items():
        rec = {'t': g.get('t') or k, 'ipa': '', 'cn': g.get('cn') or '',
               'en': g.get('den') or g.get('d') or '', 'ex': '', 'src': 'gloss'}
        put(k, rec); put(g.get('t'), rec)
    for x in json.load(io.open(os.path.join(SRC, 'vocab.json'), encoding='utf-8')):
        rec = {'t': x.get('term') or '', 'ipa': x.get('ipa') or '',
               'cn': x.get('def_cn') or x.get('cn') or '', 'en': x.get('def_en') or '',
               'ex': '', 'src': 'vocab'}
        put(x.get('key'), rec); put(x.get('term'), rec)
    return idx


def main():
    words = card_words()
    idx = load_sources()
    out, missing = {}, []
    for w in sorted(words):
        rec = None
        for v in variants(w):
            if v in idx: rec = idx[v]; break
        if not rec:
            missing.append(w); continue
        e = {}
        if rec['cn']: e['cn'] = rec['cn']
        if rec['en']: e['en'] = rec['en'][:400]
        if rec['ipa']: e['ipa'] = rec['ipa']
        if rec['ex']: e['ex'] = rec['ex'][:300]
        if e: out[w] = e
        if not rec['cn']: missing.append(w)
    if '--missing' in sys.argv:
        print('\n'.join(missing)); return
    body = json.dumps(out, ensure_ascii=False, separators=(',', ':'))
    head = ('/* 单词释义表 —— tools/make_gloss.py 生成，别手改。\n'
            '   料来自她自己以前建的词库（trae_projects 那个目录，只读）。\n'
            '   键是卡上出现的小写词形，值 cn 中文 · en 英文释义 · ipa 音标 · ex 例句。*/\n')
    io.open(os.path.join(DATA, '_gloss.js'), 'w', encoding='utf-8', newline='\n').write(
        head + 'window.GLOSS = ' + body + ';\n')
    have_cn = sum(1 for v in out.values() if v.get('cn'))
    print('卡上 %d 词 · 写进 %d 条（%.0f%%）· 其中有中文 %d（%.0f%%）· 还缺中文 %d'
          % (len(words), len(out), 100 * len(out) / len(words),
             have_cn, 100 * have_cn / len(words), len(words) - have_cn))
    print('文件 %.0f KB' % (os.path.getsize(os.path.join(DATA, '_gloss.js')) / 1024))


main()
