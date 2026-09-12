# -*- coding: utf-8 -*-
"""Measure how much the Czech book invests in each exam topic."""
import glob, re, io, os, sys, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

BD = r'C:\Users\Admin\Downloads\bio-state-exam\oralexam\book\pages'
pages = {}
for f in sorted(glob.glob(os.path.join(BD, 'p*.txt'))):
    n = int(re.search(r'p(\d+)', f).group(1))
    pages[n] = io.open(f, encoding='utf-8').read()

CAP = 'A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ'
RE_HEAD = re.compile(r'^\s*\|?\s*(\d{1,2}(?:\.\d{1,2}){1,2})\s+[%s]' % CAP, re.M)
RE_OBR  = re.compile(r'Obr\.\s*\d+\.\d+')
RE_TAB  = re.compile(r'Tab\.\s*\d+\.\d+')
RE_NAME = re.compile(r'naz[ýy]v|označuj|tzv\.', re.I)
RE_IMP  = re.compile(r'nejd[ůu]le[žz]it|nejv[ýy]znamn|z[áa]sadn|kl[íi][čc]ov', re.I)
RE_ENZ  = re.compile(r'\b([a-záčďéěíňóřšťúůýž0-9,\-]{4,}(?:as|áz)(?:a|y|e|ou|ami|ách))\b', re.I)
ENZ_OK  = re.compile(r'(kin|transfer|dehydrogen|synth|synt|lyas|ligas|isomer|izomer|epimer|mutas|'
                     r'hydrol|oxid|reduk|karboxyl|esteras|peptid|proteas|nukleas|polymer|fosfat|'
                     r'fosforyl|aldol|enol|amin|racem|glykosid|amylas|lipas|hydratas|dismut|katal|cyklas)', re.I)

# 题号 -> (页范围, 备注)
TOPIC = {
 1:  [(21, 26),   'ch2.1 氨基酸'],
 2:  [(164, 170), 'ch7.8 糖酵解'],
 3:  [(66, 75),   'ch4.1 核酸结构'],
 4:  [(54, 62),   'ch3.3 动力学 ＋ 3.5/3.6 抑制（Ki 在 p060）'],
 5:  [None,       'Taq / Kapa —— 全书 0 命中'],
 6:  [(148, 152), 'ch7.1 单糖、投影式'],
 7:  [None,       'fitness / folding landscape —— 全书 0 命中'],
 8:  [(110, 112), 'ch4.3.2 preproinsulin 那一段'],
 9:  [(110, 112), 'ch4.3.2 signální sekvence'],
 11: [(26, 35),   'ch2.2 蛋白质结构'],
 12: [(102, 107), 'ch4.2.4 蛋白合成的调控'],
 13: [(108, 115), 'ch4.3 翻译后修饰与转运'],
 14: [None,       'transformation 系列 —— 只有 transformace 1 页'],
 15: [(66, 91),   'ch4.1 全章'],
 16: [(76, 85),   'ch4.1.3 DNA 复制'],
 17: [(39, 42),   'ch3.1 酶是什么'],
 18: [(42, 53),   'ch3.2 酶分子结构 ＋ 辅酶'],
 19: [(59, 62),   'ch3.5/3.6 抑制'],
 20: [(54, 58),   'ch3.3 动力学'],
 21: [(54, 57),   'ch3.3.1 Michaelis-Menten'],
 22: [(148, 160), 'ch7.1–7.6 糖'],
 23: [(176, 197), 'ch8 脂与膜'],
 24: [(136, 141), 'ch6.2.2 柠檬酸循环'],
 25: [(141, 146), 'ch6.2 呼吸链'],
 26: [(141, 146), 'ch6.2 呼吸链（与 #25 同段）'],
 27: [(202, 212), 'ch9.1 光合'],
 28: [(212, 215), 'ch9.2–9.3 光呼吸、C4'],
 29: [(26, 38),   'ch2.2 蛋白质结构与性质'],
 31: [(43, 53),   'ch3.2 辅酶 ＋ ch8 脂溶性维生素 p183–187'],
 32: [(218, 224), 'ch10 中间代谢与调控'],
}

def measure(rng):
    if rng is None:
        return dict(pg=0, head=0, obr=0, tab=0, name=0, imp=0, enz=0, top=[])
    lo, hi = rng
    txt = '\n'.join(pages.get(n, '') for n in range(lo, hi + 1))
    enz = {}
    for m in RE_ENZ.finditer(txt):
        w = m.group(1).lower()
        if ENZ_OK.search(w):
            enz[w] = enz.get(w, 0) + 1
    top = sorted(enz.items(), key=lambda x: -x[1])[:5]
    return dict(pg=hi - lo + 1,
                head=len(RE_HEAD.findall(txt)),
                obr=len(set(RE_OBR.findall(txt))),
                tab=len(set(RE_TAB.findall(txt))),
                name=len(RE_NAME.findall(txt)),
                imp=len(RE_IMP.findall(txt)),
                enz=len(enz),
                top=[t[0] for t in top])

IDX = os.path.join(r'C:\Users\Admin\Downloads\bio-state-exam\oralexam\app\data', '_index.js')
_raw = io.open(IDX, encoding='utf-8').read()
_k = _raw.index('window.QINDEX')
QI = json.loads(_raw[_raw.index('=', _k) + 1:_raw.rindex(';')])

res = []
for q in QI:
    n = q['n']
    rng, note = TOPIC.get(n, [None, '未映射'])
    m = measure(rng)
    # 书本权重：小节 ×3 ＋ 图 ×2 ＋ 表 ×2 ＋ 命名句 ×1 ＋ 书自称重要 ×2 ＋ 酶名 ×1，按页数归一化后再乘规模
    raw = m['head']*3 + m['obr']*2 + m['tab']*2 + m['name'] + m['imp']*2 + m['enz']
    res.append(dict(n=n, en=q['en'], cn=q['cn'], w=q['w'], rng=rng, note=note, raw=raw, **m))

mx = max(r['raw'] for r in res) or 1
for r in res:
    r['bw'] = round(r['raw'] / mx * 100)

print('%-3s %-2s %-4s %-9s %-4s %-3s %-3s %-3s %-4s %-4s %s'
      % ('#', 'w', '书重', '页范围', '页数', '节', '图', '表', '命名', '酶', '题'))
for r in sorted(res, key=lambda x: (-x['bw'], -x['w'])):
    rg = ('p%03d–p%03d' % r['rng']) if r['rng'] else '—'
    print('%-3d w%-1d %-4d %-9s %-4d %-3d %-3d %-3d %-4d %-4d %s'
          % (r['n'], r['w'], r['bw'], rg, r['pg'], r['head'], r['obr'], r['tab'],
             r['name'], r['enz'], r['en'][:44]))

io.open(r'C:\Users\Admin\AppData\Local\Temp\claude\c--Users-Admin-Downloads-bio-state-exam-oralexam\78dab588-1377-49b1-acb9-bd95eb936406\scratchpad\topics.json',
        'w', encoding='utf-8').write(json.dumps(res, ensure_ascii=False, indent=1))
print('\nsaved topics.json')
