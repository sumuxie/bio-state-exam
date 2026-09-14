# -*- coding: utf-8 -*-
"""把卡上出现的每个英文单词预先合成成音频，随项目走。

为什么：浏览器自带的朗读用的是**每台设备自己的语音库**，Windows、iPhone、
安卓各念各的。预先合成好的音频文件是同一个声音，任何设备打开都一样。

只做**单词**，不做整句：整句合起来约 131 MB，单词只有约 17 MB。
句子仍然用设备自带的声音（app 里可以在「不会念的」页挑）。

少数词这个声音念错（ester 念成 Esther 那一类），改念法的表在
tools/say_as.py：键是**真词**，值只是喂给合成器的那串字。文件名、清单、
app 里看到的都还是真词，只有送进合成器的文本变了。表里改过的词下次
重跑会自动重做，其余的词行为和以前一模一样。

跑法：
    python tools/make_audio.py            # 缺什么补什么，可中断可重跑
    python tools/make_audio.py --voice en-GB-RyanNeural
"""
import io, os, re, sys, glob, json, asyncio

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from say_as import SAY_AS

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(ROOT, 'app', 'data')
OUT = os.path.join(ROOT, 'app', 'audio', 'w')
# 哪个 mp3 是用哪串改写文本做的 —— 改写变了就重做，没变就跳过
STAMP = os.path.join(ROOT, 'app', 'audio', 'say_as_stamp.json')
VOICE = 'en-GB-SoniaNeural'
for i, a in enumerate(sys.argv):
    if a == '--voice' and i + 1 < len(sys.argv): VOICE = sys.argv[i + 1]


def slug(w):
    """文件名：只留 a-z0-9，其余换成 -。app 里用同一个规则。"""
    return re.sub(r'[^a-z0-9]+', '-', w.lower()).strip('-')


def collect():
    words = set()
    for f in sorted(glob.glob(os.path.join(DATA, '*.js'))):
        if f.endswith('_index.js'): continue
        s = io.open(f, encoding='utf-8').read()
        for e in re.findall(r"\b(?:en|say|big|p):'(.*?)'(?=,\s*\n|\}|\s*\n)", s, re.S):
            t = re.sub(r'<[^>]+>', ' ', e)
            for w in re.findall(r"[A-Za-z][A-Za-z’'\-]*", t):
                w = w.strip("’'-")
                if len(w) > 1: words.add(w.lower())
    return sorted(words)


def load_stamp():
    try:
        return json.load(io.open(STAMP, encoding='utf-8'))
    except Exception:
        return {}


def stale(w, stamp):
    """这个词要不要（重）做：没文件要做，改念法和上次不一样也要做。"""
    if not os.path.exists(os.path.join(OUT, slug(w) + '.mp3')): return True
    return stamp.get(slug(w)) != SAY_AS.get(w)


async def main():
    import edge_tts
    os.makedirs(OUT, exist_ok=True)
    words = collect()
    stamp = load_stamp()
    todo = [w for w in words if stale(w, stamp)]
    redo = [w for w in todo if os.path.exists(os.path.join(OUT, slug(w) + '.mp3'))]
    print('单词 %d 个，要做 %d 个（其中改念法重做 %d 个），声音 %s'
          % (len(words), len(todo), len(redo), VOICE))
    sem = asyncio.Semaphore(8)
    done = [0]

    async def one(w):
        async with sem:
            path = os.path.join(OUT, slug(w) + '.mp3')
            said = SAY_AS.get(w, w)   # 只有喂给合成器的文本会变，文件名还是真词
            for attempt in range(3):
                try:
                    c = edge_tts.Communicate(said, VOICE, rate='-10%')
                    await c.save(path)
                    if os.path.getsize(path) > 200:
                        if w in SAY_AS: stamp[slug(w)] = SAY_AS[w]
                        else: stamp.pop(slug(w), None)
                        break
                except Exception:
                    await asyncio.sleep(1 + attempt)
            done[0] += 1
            if done[0] % 200 == 0: print('  %d / %d' % (done[0], len(todo)), flush=True)

    await asyncio.gather(*[one(w) for w in todo])
    io.open(STAMP, 'w', encoding='utf-8').write(
        json.dumps(stamp, ensure_ascii=False, indent=1, sort_keys=True))
    have = sorted(w for w in words if os.path.exists(os.path.join(OUT, slug(w) + '.mp3')))
    payload = json.dumps({'voice': VOICE, 'words': have}, ensure_ascii=False)
    io.open(os.path.join(ROOT, 'app', 'audio', 'words.json'), 'w', encoding='utf-8').write(payload)
    # file:// 打开时 fetch 会被浏览器拦掉，所以再写一份 script 形式的清单
    io.open(os.path.join(ROOT, 'app', 'audio', 'words.js'), 'w', encoding='utf-8').write(
        'window.AUDIO_WORDS=' + payload + ';\n')
    mb = sum(os.path.getsize(os.path.join(OUT, f)) for f in os.listdir(OUT)) / 1048576
    print('好了：%d 个文件，%.1f MB，清单 app/audio/words.json' % (len(have), mb))

asyncio.run(main())
