# -*- coding: utf-8 -*-
"""把每张卡做成可以拷到手机上的 mp3。**只在本地，不进 git。**

2026-09-20 Ruojin：「纯音频/并且任何地方任何时候都可点开，模式就是选一张卡然后播放，
不是一个问题而是一整张卡，只在标题显示『本内容 refer xx 原文』」，
以及「那不然你就在本地跑。让它可以被拷贝，我到时候复制粘贴到手机里
或者自己想办法上传到云端播放器」。

**为什么不进仓库。** 全部句子合成约 530 MB。Pages 的硬上限是 1 GB，塞得下，
但 git 历史是永久的——英文改一个词就多一个 mp3，旧的删不掉，几轮之后仓库就废了。
她自己说在本地跑、她来拷，这个决定把问题整个绕开了，所以 audio_out/ 进 .gitignore。

**三个模式，对应她的三种时间。**
  1-提问：问题 → **8 秒真静音** → 答案。走路、做饭、睡醒那五分钟用。
         这个模式是有理由的：她说「脑子里是轮廓而不是内容甚至框架」，
         那是只输入不提取的症状，先想一下再听答案才能把轮廓变成框架。
  2-跟读：一句英文 → 等长静音，她跟一句。**这个才算出声。**
  3-纯播：四段逐字稿连着放，不停。睡前躺着用。

**静音是真静音。** 纯标点喂给 edge-tts 会报 NoAudioReceived（试过），
所以解码成 PCM、插 numpy 零、再整段编码。这台机器上没有 ffmpeg 可执行文件，
但装了 PyAV（faster-whisper 带来的），那就是 ffmpeg 的库，够用。

**码率压到 32 kbps。** edge-tts 出来的是 48 kbps，对朗读来说是浪费。

跑法：
    python tools/make_cardaudio.py                 # 全部卡，缺什么补什么
    python tools/make_cardaudio.py 02 gly mb-int   # 只做这几张
    python tools/make_cardaudio.py --mode 1        # 只做提问那一档
    python tools/make_cardaudio.py --gap 6         # 提问的思考停顿改成 6 秒
"""
import io, os, re, sys, glob, json, hashlib, asyncio

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(ROOT, 'app', 'data')
OUT  = os.path.join(ROOT, 'audio_out')
CACHE = os.path.join(OUT, '.cache')

VOICE = 'en-GB-SoniaNeural'
RATE  = '-10%'
SR    = 24000          # edge-tts 出来就是 24 kHz 单声道
KBPS  = 32

# 出处按科目填。她要的那句「本内容 refer xx 原文」。
SRC = {
 'pe': 'her own lecture notes for protein engineering and synthetic biology',
 'mb': 'Modern Molecular Biology, fifth edition',
 '':   'the Czech biochemistry textbook used for this exam',
}
SRC_CN = {
 'pe': '她自己的 PESB 讲义',
 'mb': '《现代分子生物学》第五版',
 '':   '捷克生物化学教材',
}

# ---------------------------------------------------------------- 读卡
def subj(cid):
    if cid.startswith('pe-'): return 'pe'
    if cid.startswith('mb-'): return 'mb'
    return ''

def ev(node):
    """esprima 的 AST 求值成 Python。只处理卡里真的会出现的那几种节点。
       字符串拼接 '…' + '…' 必须求值——2026-09-19 栽过一次，
       拿一个不求值的匹配器去数，数出来 61 个问题，真数是 0。"""
    t = node.type
    if t == 'Literal': return node.value
    if t == 'ObjectExpression':
        d = {}
        for p in node.properties:
            k = p.key.name if p.key.type == 'Identifier' else p.key.value
            d[k] = ev(p.value)
        return d
    if t == 'ArrayExpression': return [ev(e) for e in node.elements if e is not None]
    if t == 'BinaryExpression' and node.operator == '+':
        a, b = ev(node.left), ev(node.right)
        if isinstance(a, str) and isinstance(b, str): return a + b
        return (a or 0) + (b or 0)
    if t == 'UnaryExpression' and node.operator == '-': return -ev(node.argument)
    return None

def load_card(path):
    import esprima
    s = io.open(path, encoding='utf-8').read()
    tree = esprima.parseScript(s, {'tolerant': True})
    for st in tree.body:
        e = getattr(st, 'expression', None)
        if e is not None and e.type == 'CallExpression' and e.arguments:
            return ev(e.arguments[0])
    return None

TAG = re.compile(r'<[^>]+>')
PG = re.compile(r'<span class="pg">(.*?)</span>', re.S)
def refof(*fields):
    """这一条的具体出处。卡上用 <span class="pg"> 标，p.221 或者 L9B s.5 这种。"""
    for f in fields:
        if not f: continue
        m = PG.findall(str(f))
        if m: return re.sub(r'\s+', ' ', TAG.sub('', m[0])).strip()
    return ''

def plain(t):
    """去标签、去引号、把中文标点换掉。给合成器的必须是干净的英文。"""
    if not t: return ''
    t = TAG.sub(' ', str(t))
    t = (t.replace(u'“', ' ').replace(u'”', ' ')
          .replace(u'’', "'").replace(u'‘', "'")
          .replace(u'—', ', ').replace(u'–', ', ')
          .replace(u'·', '. ').replace(u'…', '. '))
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def is_en(t):
    """只念英文。中文那一层是给眼睛的，英语声音念中文很难听。"""
    if not t: return False
    zh = sum(1 for c in t if u'一' <= c <= u'鿿')
    la = sum(1 for c in t if c.isascii() and c.isalpha())
    return la >= 12 and zh == 0

def quoted(t):
    """取引号里那句——那才是她要出声说的。没有引号就整句拿。"""
    if not t: return []
    outs = re.findall(u'“(.+?)”', str(t), re.S)
    if outs: return [plain(x) for x in outs]
    p = plain(t)
    return [p] if is_en(p) else []

# ---------------------------------------------------------------- 三条轨
def track_ask(c):
    """提问：一问一答。sib 的提示也算问，它本来就是对答案那一屏用的。"""
    out = []
    for g in (c.get('ask') or []):
        for it in (g.get('items') or []):
            q, a = plain(it.get('q')), quoted(it.get('en'))
            r = refof(it.get('cn'), it.get('good'), it.get('warn'))
            if is_en(q) and a: out.append((q, ' '.join(a), r))
    for x in (c.get('recog') or []):
        q, a = plain(x.get('q')), quoted(x.get('say'))
        r = refof(x.get('mean'), x.get('tail'))
        if is_en(q) and a: out.append((q, ' '.join(a), r))
    for row in (c.get('sib') or []):
        if len(row) >= 2:
            q, a = plain(row[0]), quoted(row[1])
            r = refof(row[2] if len(row) > 2 else '')
            if is_en(q) and a: out.append((q, ' '.join(a), r))
    return out

def track_cram(c):
    """跟读：速背里引号中的英文，按卡上的顺序。"""
    out = []
    for p in (c.get('cram') or []):
        if p.get('g'): continue
        r = refof(p.get('note'), p.get('good'), p.get('warn'))
        for s in quoted(p.get('en')): out.append((s, r))
    return out

def track_segs(c):
    """纯播：四段逐字稿连起来。"""
    out = []
    for sg in (c.get('segs') or []):
        r = refof(sg.get('note'))
        tag = plain(sg.get('tag'))
        for p in (sg.get('p') or []):
            for s in quoted(p): out.append((s, r or tag))
    return out

def head(c):
    """开头只报卡号和题面。具体出处不在这里——她 09-20 更正过：
       「不是开头，而是它读到某个内容时会显示具体的 reference」，
       所以出处走 .lrc，一行一个，跟着播放走。"""
    q = plain(c.get('q'))
    if not is_en(q): q = 'card ' + str(c.get('id'))
    return 'Card %s. %s.' % (c.get('id'), q)

def lrc_time(sec):
    m = int(sec // 60); s2 = sec - m * 60
    return '[%02d:%05.2f]' % (m, s2)

def lrc_line(t, ref, fallback):
    t = t if len(t) <= 78 else t[:76] + '..'
    return t + '   —— ' + (ref or fallback)

# ---------------------------------------------------------------- 合成
def key(t):
    return hashlib.sha1((VOICE + RATE + t).encode('utf-8')).hexdigest()

async def tts(t, sem):
    import edge_tts
    p = os.path.join(CACHE, key(t) + '.mp3')
    if os.path.exists(p) and os.path.getsize(p) > 400: return p
    async with sem:
        for attempt in range(3):
            try:
                await edge_tts.Communicate(t, VOICE, rate=RATE).save(p)
                if os.path.getsize(p) > 400: return p
            except Exception as e:
                if attempt == 2:
                    print('   合成失败，跳过：%s … (%s)' % (t[:48], e))
                    return None
                await asyncio.sleep(1.5)
    return None

def pcm(path):
    """mp3 → 单声道 int16 的 numpy 数组。"""
    import av, numpy as np
    con = av.open(path)
    res = av.audio.resampler.AudioResampler(format='s16', layout='mono', rate=SR)
    chunks = []
    for fr in con.decode(audio=0):
        for out in res.resample(fr):
            chunks.append(out.to_ndarray().reshape(-1))
    for out in res.resample(None):
        chunks.append(out.to_ndarray().reshape(-1))
    con.close()
    return np.concatenate(chunks) if chunks else np.zeros(0, dtype='int16')

def write_mp3(samples, path):
    import av, numpy as np
    con = av.open(path, 'w')
    st = con.add_stream('mp3', rate=SR)
    st.bit_rate = KBPS * 1000
    try: st.layout = 'mono'
    except Exception: pass
    N = 1152
    for i in range(0, len(samples), N):
        blk = samples[i:i+N]
        if len(blk) < N:
            blk = np.concatenate([blk, np.zeros(N - len(blk), dtype='int16')])
        fr = av.AudioFrame.from_ndarray(blk.reshape(1, -1), format='s16', layout='mono')
        fr.rate = SR; fr.pts = i
        for pk in st.encode(fr): con.mux(pk)
    for pk in st.encode(None): con.mux(pk)
    con.close()

# ---------------------------------------------------------------- 主
def main():
    import numpy as np
    args = sys.argv[1:]
    gap = 8.0
    only_mode = None
    ids = []
    i = 0
    while i < len(args):
        a = args[i]
        if a == '--gap': gap = float(args[i+1]); i += 2; continue
        if a == '--mode': only_mode = args[i+1]; i += 2; continue
        ids.append(a); i += 1

    os.makedirs(CACHE, exist_ok=True)
    files = sorted(glob.glob(os.path.join(DATA, '*.js')))
    files = [f for f in files if not os.path.basename(f).startswith('_')]

    cards = []
    for f in files:
        c = load_card(f)
        if not c or not c.get('id'): continue
        if ids and c['id'] not in ids and os.path.basename(f)[:-3] not in ids: continue
        cards.append(c)
    if not cards:
        print('没有匹配的卡'); return

    modes = [('1-提问', 'ask'), ('2-跟读', 'cram'), ('3-纯播', 'segs')]
    if only_mode: modes = [m for m in modes if m[0].startswith(only_mode)]

    total_bytes = 0; total_sec = 0.0
    manifest = []

    for c in cards:
        cid = str(c['id'])
        for folder, kind in modes:
            rows = {'ask': track_ask, 'cram': track_cram, 'segs': track_segs}[kind](c)
            if not rows: continue
            d = os.path.join(OUT, folder)
            os.makedirs(d, exist_ok=True)
            name = '%s_%s.mp3' % (cid.replace('-', ''), folder.split('-')[1])
            path = os.path.join(d, name)
            if os.path.exists(path) and not ids:
                total_bytes += os.path.getsize(path); continue

            # 要合成的所有句子。rows 的形状：提问是 (问, 答, 出处)，另外两轨是 (句, 出处)。
            fb = SRC_CN[subj(cid)]
            texts = [head(c)]
            if kind == 'ask':
                for q, a, r in rows: texts += [q, a]
            else:
                texts += [t for t, r in rows]

            async def run():
                # Semaphore 必须在它要用的那个事件循环里建。建在外面，
                # 第二次 asyncio.run 就会报 bound to a different event loop。
                sem = asyncio.Semaphore(6)
                return await asyncio.gather(*[tts(t, sem) for t in texts])
            got = asyncio.run(run())

            sil_think = np.zeros(int(SR * gap), dtype='int16')
            sil_short = np.zeros(int(SR * 0.9), dtype='int16')
            parts = []; lrc = []; pos = 0.0

            def push(arr, line=None):
                """往轨上接一段，同时记下它开始的时刻——.lrc 的时间戳就是这么来的，
                   是拼出来的精确值，不是估的。"""
                global_pos = None
                if line is not None: lrc.append((pos, line))
                parts.append(arr)
                return len(arr) / float(SR)

            if got[0]:
                seg = pcm(got[0])
                lrc.append((pos, plain(c.get('q'))[:78] + '   —— ' + fb))
                parts.append(seg); pos += len(seg) / float(SR)
                pad = np.zeros(int(SR * 1.4), dtype='int16')
                parts.append(pad); pos += 1.4

            k = 1
            if kind == 'ask':
                for q, a, r in rows:
                    qf, af = got[k], got[k+1]; k += 2
                    if not qf or not af: continue
                    sq = pcm(qf)
                    lrc.append((pos, lrc_line(q, r, fb)))
                    parts.append(sq); pos += len(sq) / float(SR)
                    lrc.append((pos, '(' + str(int(gap)) + ' \u79d2 \u2014 \u5148\u5728\u8111\u5b50\u91cc\u60f3\u4e00\u4e0b)'))
                    parts.append(sil_think); pos += gap
                    sa = pcm(af)
                    lrc.append((pos, lrc_line(a, r, fb)))
                    parts.append(sa); pos += len(sa) / float(SR)
                    parts.append(sil_short); pos += 0.9
            else:
                for t, r in rows:
                    f = got[k]; k += 1
                    if not f: continue
                    seg = pcm(f)
                    lrc.append((pos, lrc_line(t, r, fb)))
                    parts.append(seg); pos += len(seg) / float(SR)
                    if kind == 'cram':
                        lrc.append((pos, '(\u8df3\u8bfb\u4e00\u904d)'))
                        parts.append(np.zeros(len(seg), dtype='int16')); pos += len(seg) / float(SR)
                    else:
                        parts.append(sil_short); pos += 0.9

            if not parts: continue
            buf = np.concatenate(parts)
            write_mp3(buf, path)

            # 字幕。手机播放器和多数云端播放器认同名 .lrc，会跟着播放高亮当前这一行。
            # 她 09-20 的原话：「不是开头，而是它读到某个内容时会显示具体的 reference」。
            L = ['[ti:' + cid + ' ' + folder + ']', '[ar:' + fb + ']', '[by:oralexam]']
            for t0, line in lrc: L.append(lrc_time(t0) + line)
            io.open(path[:-4] + '.lrc', 'w', encoding='utf-8').write('\n'.join(L) + '\n')

            sec = len(buf) / float(SR)
            sz = os.path.getsize(path)
            total_bytes += sz; total_sec += sec
            manifest.append({'card': cid, 'mode': folder, 'file': folder + '/' + name,
                             'seconds': round(sec, 1), 'items': len(rows)})
            print('  %-10s %-8s %5.1f \u5206\u949f  %6.1f MB  %s' %
                  (cid, folder, sec/60, sz/1048576.0, name))

    io.open(os.path.join(OUT, 'manifest.json'), 'w', encoding='utf-8').write(
        json.dumps(manifest, ensure_ascii=False, indent=1))
    readme = u'''这个文件夹是拷到手机上用的，不在 git 里。

1-提问   问题 → 8 秒静音 → 答案。走路、做饭、睡醒那五分钟用。
         **停顿里在脑子里想一下答案再听**，这一下就是「模糊轮廓」和「框架」的区别。
2-跟读   一句英文 → 一段等长的静音。你跟着说那一句。这个才算出声。
3-纯播   四段逐字稿连着放，不停。睡前躺着用。

⚠ 睡着之后听基本没用，而且会让睡眠变浅。15 天里睡好比多听 8 小时值钱。
   真正有用的是睡前那十分钟和睡醒那五分钟。

每个 mp3 旁边有一个同名的 .lrc 字幕。播放器如果认它（大部分都认），
会跟着音频高亮当前这一句，行尾是这句话的**具体出处**（p.221 / L9B s.5 这种）。
不认 .lrc 的播放器就当它不存在，音频照放。
'''
    io.open(os.path.join(OUT, 'README.txt'), 'w', encoding='utf-8').write(readme)
    print('-' * 62)
    print('共 %.0f 分钟，%.1f MB，清单 audio_out/manifest.json' % (total_sec/60, total_bytes/1048576.0))

if __name__ == '__main__':
    main()
