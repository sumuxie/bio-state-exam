# -*- coding: utf-8 -*-
"""给卡上每个英文词配一条释义，写成 app/data/_gloss.js。

起因（2026-09-14 Ruojin）：
  「在能点单词发音的基础上把单词的意思也显现，然后就是如果我点了单词的收藏，
    单词单独作为需要背诵的单词本被记录在册，内嵌单词本 app，类似墨墨背单词。」
  （2026-09-15）「我现在点词汇会出声但是大部分都没有翻译」

三层，按优先级取，取到就停。这个顺序是她拍板的，理由是**词典给的是通用义**：
  reduction 在词典里是「减少」，在她这儿是**还原**；base 是「基础」，这儿是**碱/碱基**；
  charge 是「收费」，这儿是**电荷**；residue 是「残渣」，这儿是**残基**。

  第 1 层 · 她自己的词库（按生化写的，最准）
      C:/Users/Admin/Documents/trae_projects/recombinants_trae_independant/vocab/out
      **那个目录只读，一个字都不写**（她原话：污染严重，谨慎，不要碰里面的东西）。
      三个来源按可信度排：app_data.js 的 cards（人工过过，全部有中文）→ 同文件的 gloss → vocab.json。
  第 2 层 · 通用英汉词典 ECDICT（开源，约 340 万词条，带中文、音标、词形变化）
      文件不进仓库（66 MB）。放在仓库外面：C:/Users/Admin/Downloads/ecdict.csv
      没有就下：curl -sL -o ecdict.csv https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv

**每条都标来源**（字段 s：1 = 她的词库，2 = 通用词典）。app 里小字写出来，
她看见「通用词典」就知道这条要打折听。这一步比选对词义更管用。

**例句一律用她自己卡上的那一句**（字段 ex ＋ c 卡号）。这是防误导的主力：
即使词典给的是「减少」，她眼睛先看到的是自己卡上 “Reduction is the gain of electrons”。

词形还原：先用 ECDICT 的 exchange 字段（那里有权威的原形），再退回后缀规则。

跑法：
    python tools/make_gloss.py                         # 重建 _gloss.js
    python tools/make_gloss.py --dict D:/path/ecdict.csv
    python tools/make_gloss.py --risky                 # 列「危险词」候选：
                                                       #   常用词但在生化里换了意思，需要人工写
"""
import io, os, re, sys, json, glob, csv

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
csv.field_size_limit(10 ** 7)
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(ROOT, 'app', 'data')
BANK = os.path.join('C:' + os.sep, 'Users', 'Admin', 'Documents', 'trae_projects',
                    'recombinants_trae_independant', 'vocab', 'out')
DICT = os.path.join('C:' + os.sep, 'Users', 'Admin', 'Downloads', 'ecdict.csv')
for i, a in enumerate(sys.argv):
    if a == '--dict' and i + 1 < len(sys.argv): DICT = sys.argv[i + 1]

SUF = [('s', ''), ('es', ''), ('ies', 'y'), ('ed', ''), ('ed', 'e'), ('ing', ''), ('ing', 'e'),
       ('er', ''), ('est', ''), ('ly', ''), ('ations', 'ate'), ('ation', 'ate'),
       ('ally', 'al'), ('ised', 'ise'), ('ized', 'ize'), ('ises', 'ise'), ('izes', 'ize'),
       ('ated', 'ate'), ('ates', 'ate'), ('ating', 'ate'),
       ('ical', 'ic'), ('ically', 'ic'), ('ive', 'e'), ('ives', 'ive'),
       ('ities', 'ity'), ('ness', ''), ('ments', 'ment')]


def variants(w):
    # 所有格：卡上写 arginine’s、Crick’s、ATP’s，词库里只有原形
    if w.endswith(("’s", "'s")) and len(w) > 4:
        w = w[:-2]
    yield w
    for suf, rep in SUF:
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            yield w[:-len(suf)] + rep
    if '-' in w:
        for p in w.split('-'):
            if len(p) > 4: yield p


# ---------------- 卡上的词，和每个词在卡上的那一句 ----------------
def card_words():
    words, ex = set(), {}
    for f in sorted(glob.glob(os.path.join(DATA, '*.js'))):
        if os.path.basename(f).startswith('_'): continue
        s = io.open(f, encoding='utf-8').read()
        m = re.search(r"id:'([^']+)'", s)
        cid = m.group(1) if m else ''
        for span in re.findall('\u201c(.*?)\u201d', s, re.S):
            t = re.sub(r"'\s*\+\s*'", ' ', span)
            t = re.sub(r'<[^>]+>', ' ', t)
            t = re.sub(r'\s+', ' ', t).strip()
            for sent in re.split(r'(?<=[.!?])\s+', t):
                sent = sent.strip()
                if not (20 <= len(sent) <= 190): continue
                for w in set(x.strip("\u2019'-").lower()
                             for x in re.findall(r"[A-Za-z][A-Za-z\u2019'\-]*", sent)):
                    if len(w) < 2: continue
                    words.add(w)
                    old = ex.get(w)
                    # 留最短的那句：短句她一眼能读完
                    if old is None or len(sent) < len(old[0]): ex[w] = (sent, cid)
    # 没进例句表的词（只出现在超长/超短句里）也要收进来
    for f in sorted(glob.glob(os.path.join(DATA, '*.js'))):
        if os.path.basename(f).startswith('_'): continue
        s = io.open(f, encoding='utf-8').read()
        for e in re.findall(r"\b(?:en|say|big|p):'(.*?)'(?=,\s*\n|\}|\s*\n)", s, re.S):
            t = re.sub(r'<[^>]+>', ' ', e)
            for w in re.findall(r"[A-Za-z][A-Za-z\u2019'\-]*", t):
                w = w.strip("\u2019'-").lower()
                if len(w) > 1: words.add(w)
    return words, ex


# ---------------- 第 1 层 · 她自己的词库 ----------------
def load_bank():
    idx = {}
    def put(k, rec):
        k = (k or '').lower()
        if k and k not in idx: idx[k] = rec
    s = io.open(os.path.join(BANK, 'app_data.js'), encoding='utf-8').read()
    V = json.loads(s[s.index('=') + 1:].strip().rstrip(';'))
    for c in V.get('cards', []):
        rec = {'t': c.get('t') or '', 'ipa': c.get('ipa') or '', 'cn': c.get('cn') or '',
               'en': c.get('def') or ''}
        put(c.get('k'), rec); put(c.get('t'), rec)
    for k, g in (V.get('gloss') or {}).items():
        rec = {'t': g.get('t') or k, 'ipa': '', 'cn': g.get('cn') or '',
               'en': g.get('den') or g.get('d') or ''}
        put(k, rec); put(g.get('t'), rec)
    for x in json.load(io.open(os.path.join(BANK, 'vocab.json'), encoding='utf-8')):
        rec = {'t': x.get('term') or '', 'ipa': x.get('ipa') or '',
               'cn': x.get('def_cn') or x.get('cn') or '', 'en': x.get('def_en') or ''}
        put(x.get('key'), rec); put(x.get('term'), rec)
    return idx


# ---------------- 第 2 层 · 通用词典 ----------------
def clean_cn(t):
    """ECDICT 的 translation 一行一个义项，还夹着 [网络] 那种噪音。取前两行干净的。"""
    out = []
    for line in (t or '').split('\\n'):
        line = line.strip()
        if not line or line.startswith('[网络]') or line.startswith('['): continue
        out.append(line)
        if len(out) == 2: break
    return ' · '.join(out)


def load_dict(need):
    """只读需要的词，省内存。同时把 exchange 里的原形登记成别名。"""
    if not os.path.exists(DICT):
        print('⚠ 没有词典：%s' % DICT)
        print('  下载：curl -sL -o ecdict.csv https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv')
        return {}, {}
    d, lemma = {}, {}
    with io.open(DICT, encoding='utf-8', newline='') as fh:
        for row in csv.DictReader(fh):
            w = (row.get('word') or '').strip().lower()
            if not w: continue
            ex = row.get('exchange') or ''
            if '0:' in ex:
                base = ex.split('0:')[1].split('/')[0].strip().lower()
                if base and w in need: lemma[w] = base
            if w not in need and w not in lemma.values(): continue
            d[w] = {'ipa': (row.get('phonetic') or '').strip(),
                    'cn': clean_cn(row.get('translation')),
                    'en': re.sub(r'\s+', ' ', (row.get('definition') or '').replace('\\n', '; ')).strip(),
                    'tag': (row.get('tag') or '').strip(),
                    'frq': (row.get('frq') or '0').strip()}
    return d, lemma


CZECH = 'ěščřžýáíéúůňťďó'
def strip_czech(t):
    """她的词库里有些英文释义夹着捷克原词。她的话：一点捷克语都不要。
    先剥掉带捷克字母的引号／括号片段；剥不干净的整条丢弃，宁可没有也不要留捷克语。"""
    if not t: return t
    if not any(c in t for c in CZECH): return t
    for pat in (r"'[^']*[" + CZECH + r"][^']*'", r'\([^()]*[' + CZECH + r'][^()]*\)',
                r'“[^”]*[' + CZECH + r'][^”]*”'):
        t = re.sub(pat, '', t)
    t = re.sub(r'\s{2,}', ' ', t).strip(' ,;:')
    if any(c in t for c in CZECH): return ''
    return t


def load_extra():
    """人工补的那张表，优先级最高。见 tools/gloss_extra.py。"""
    try:
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        from gloss_extra import EXTRA
        return {k.lower(): v for k, v in EXTRA.items()}
    except Exception as e:
        print('（没读到 gloss_extra：%s）' % e)
        return {}


def main():
    words, exmap = card_words()
    extra = load_extra()
    bank = load_bank()
    need = set(words)
    for w in list(words):
        for v in variants(w): need.add(v)
    dic, lemma = load_dict(need)

    out, risky = {}, []
    n_bank = n_dict = 0
    n_extra = 0
    for w in sorted(words):
        rec, src = None, 0
        if w in extra:
            cn, en = (list(extra[w]) + [''])[:2]
            if cn:
                rec, src = {'cn': cn, 'en': en, 'ipa': ''}, 5
                n_extra += 1
        for v in ([] if rec else variants(w)):
            if v in bank and (bank[v]['cn'] or bank[v]['en']):
                rec, src = bank[v], 1; break
        drec = None
        for v in [w, lemma.get(w, '')] + list(variants(w)):
            if v and v in dic and dic[v]['cn']: drec = dic[v]; break
        if rec is None and drec is not None:
            rec, src = drec, 2; n_dict += 1
        elif rec is not None:
            n_bank += 1
            # 她的词库只有英文释义、没中文的，中文借词典的，来源标 3（混合），
            # app 里会写明「中文来自通用词典」。
            if not rec.get('cn') and drec is not None and drec.get('cn'):
                rec = dict(rec); rec['cn'] = drec['cn']; src = 3
            # 两边都有 → 常用词在生化里可能换了意思，登记成候选让人工看
            # 只有两边**说得不一样**才算危险。她那个词库有一部分本身就是从同一个
            # 词典来的，两边一字不差的那些是噪音，排掉。
            if drec is not None and rec.get('cn') and drec.get('cn'):
                import difflib
                sim = difflib.SequenceMatcher(None, rec['cn'][:80], drec['cn'][:80]).ratio()
                if sim < 0.45:
                    risky.append((round(1 - sim, 3), w, rec['cn'][:70], drec['cn'][:70]))
        # 连字符复合词（acid-base、side-chain）：每一段都查得到就拼出来，来源标 4
        if rec is None and '-' in w:
            parts = [x for x in w.split('-') if x]
            got = []
            for pp in parts:
                pr = None
                for v in variants(pp):
                    if v in bank and bank[v].get('cn'): pr = bank[v]; break
                    if v in dic and dic[v].get('cn'): pr = dic[v]; break
                if not pr: got = []; break
                got.append(pr['cn'].split(' · ')[0])
            if got:
                rec = {'cn': ' · '.join(got), 'en': '', 'ipa': ''}
                src = 4
        if rec is None: continue
        e = {}
        cnv = strip_czech(rec.get('cn') or '')
        env = strip_czech(rec.get('en') or '')
        if cnv: e['cn'] = cnv[:160]
        if env: e['en'] = env[:220]
        ipa = rec.get('ipa') or (drec or {}).get('ipa') or ''
        if ipa: e['ipa'] = ipa[:60]
        if w in exmap:
            e['ex'] = exmap[w][0][:190]
            if exmap[w][1]: e['c'] = exmap[w][1]
        e['s'] = src
        out[w] = e

    if '--risky' in sys.argv:
        risky.sort(reverse=True)
        print('两边说得不一样的词 %d 个 —— 生化义和通用义分叉了。按分叉程度排：' % len(risky))
        for d, w, a, b in risky[:120]:
            print('%-20s 你的词库：%-32s 通用词典：%s' % (w, a, b))
        return

    body = json.dumps(out, ensure_ascii=False, separators=(',', ':'))
    head = ('/* 单词释义表 —— tools/make_gloss.py 生成，别手改。\n'
            '   s:1 是她自己的生化词库，s:2 是通用英汉词典（通用义，要打折听）。\n'
            '   ex 是这个词在她卡上的那一句，c 是卡号。*/\n')
    io.open(os.path.join(DATA, '_gloss.js'), 'w', encoding='utf-8', newline='\n').write(
        head + 'window.GLOSS = ' + body + ';\n')
    mix = sum(1 for v in out.values() if v.get('s') == 3)
    cn = sum(1 for v in out.values() if v.get('cn'))
    ex = sum(1 for v in out.values() if v.get('ex'))
    print('卡上 %d 词 · 写进 %d 条（%.0f%%）· 有中文 %d（%.0f%%）· 带卡上原句 %d'
          % (len(words), len(out), 100 * len(out) / len(words), cn, 100 * cn / len(words), ex))
    print('  人工补的 %d · 来自她的词库 %d（其中中文借词典的 %d）· 全部来自通用词典 %d · 危险词候选 %d（--risky 看）'
          % (n_extra, n_bank, mix, n_dict, len(risky)))
    print('文件 %.0f KB' % (os.path.getsize(os.path.join(DATA, '_gloss.js')) / 1024))


main()
