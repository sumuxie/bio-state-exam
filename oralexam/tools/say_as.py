# -*- coding: utf-8 -*-
"""念错的词，换一串字喂给合成器。

起因（2026-09-14 Ruojin）：
  「你再检查一下所有词的发音，比如 ester/diester/phosphodiester 发音不准确」

为什么会错：tools/make_audio.py 把**孤零零一个单词**送进 edge-tts。
没有句子上下文，这个声音碰到不熟的化学词就自己猜——猜重音、猜元音、
猜一串它没见过的字母该怎么读。diester 就被它念成「DYE-aster」。

这张表怎么用：
  · **键是真词**，值**只是喂给合成器的那串字**。
    文件名（slug）、app/audio/words.json 清单、app 里显示的词、她看到的、
    搜索到的，全都还是键上那个真词。改的只有送进合成器的文本。
  · 不在表里的词一个字都不变，和以前一模一样。

加一条怎么加：
  1. 先听证据：把这个词现有的 mp3 转写回文字，看它到底念成了什么
     （做法见下）。转写出来离原词很远，才值得动。
  2. 想一串让这个声音念对的拼法：加连字符切音节、把元音写成英语里
     常见的拼法（dye / ess / eye / ko / zyme）、必要时把重音那一节
     单独写出来。不要用 SSML——edge-tts 会把尖括号转义掉。
  3. 试出来，别猜。合成候选串 → 转写 → 只有比原来更接近真词才留下。
  4. 写上注释，说明**默认念成了什么**。那是改它的唯一证据，
     后来的人听不到当时那个音。

怎么验证（一个词大概十秒）：
    python - <<EOF
    import asyncio, edge_tts
    from faster_whisper import WhisperModel
    asyncio.run(edge_tts.Communicate('dye-ester', 'en-GB-SoniaNeural',
                                     rate='-10%').save('t.mp3'))
    m = WhisperModel('small.en', device='cpu', compute_type='int8')
    segs, _ = m.transcribe('t.mp3', beam_size=5, language='en',
                           condition_on_previous_text=False)
    print(''.join(s.text for s in segs))
    EOF
  转写器本身也会写错字（ester 念对了它写成 Esther，dimer 写成 DYMA），
  所以转写是**证据**不是判决：它离真词远才去查，改不改自己判断。

改完这张表之后跑一次 `python tools/make_audio.py`：
表里变过的词会自动重做，别的词照旧跳过。
"""

SAY_AS = {
    # 2026-09-14 · 证据是转写：合成出来的音频转回文字，看它到底念成了什么。

    # 默认念成 “DYASTER”（dye-aster），第二个音节的元音是错的。
    # 候选里 dye-ess-ter 和 die-ess-ter 转写都回到 Diester，取前者。
    'diester': 'dye-ess-ter',

    # 她点名说不准。默认转写虽然回到 Phosphodiester，但那多半是转写器
    # 就近取词——它内部含 diester，而 diester 已证实是坏的。
    # 所以套用同一个验证过的拼法。
    'phosphodiester': 'phospho-dye-ess-ter',

    # ——以下是查过、确认不用改的，写在这里免得后来的人白改一遍——
    # 'ester'：三个候选拼法转写全是 “Esther”，跟默认一模一样。
    #          说明这个声音念的就是 /ˈɛstə/，是转写器爱写成人名，不是发音错。
}
