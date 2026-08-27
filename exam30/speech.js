/* ============================================================
   exam30 — 发音 / speech
   Reads the rendered answer aloud with the voices installed on the
   machine (Web Speech API). Deliberately decoupled from app.js:
   it takes its text from the DOM through a MutationObserver, so
   app.js needed no changes at all.

   Controls: accent, gender, voice, rate, and a panel that collapses
   to a header bar and can be hidden completely to a floating button.
   Everything is remembered in localStorage under exam30.speech.
   ============================================================ */
(function () {
  'use strict';

  var synth = window.speechSynthesis;
  if (!synth) return;                       // no support -> no panel at all

  /* ---------- persisted settings ---------- */
  var S = {
    voiceURI: '', accent: 'all', gender: 'all', rate: 1, pitch: 1,
    cn: false, collapsed: false, hidden: false, para: true
  };
  try {
    var saved = JSON.parse(localStorage.getItem('exam30.speech') || '{}');
    for (var k in saved) if (k in S) S[k] = saved[k];
  } catch (e) {}
  function save() {
    try { localStorage.setItem('exam30.speech', JSON.stringify(S)); } catch (e) {}
  }

  /* ---------- voice metadata ----------
     The API exposes no gender, so it is inferred from the name.
     Names cover the Windows (legacy + natural), Google and Apple sets. */
  var FEMALE = ('zira hazel susan linda heera catherine ava emma jenny michelle aria ' +
    'sonia libby maisie natasha clara nancy amber ashley cora elizabeth jane monica sara ' +
    'samantha karen moira tessa fiona victoria allison ava serena zoe female').split(' ');
  var MALE = ('david mark george james ravi richard andrew brian guy christopher eric ' +
    'roger steffan ryan thomas liam william connor jason tony brandon daniel alex fred ' +
    'rishi oliver arthur aaron male').split(' ');

  function genderOf(v) {
    var n = (v.name || '').toLowerCase();
    if (/\bfemale\b/.test(n)) return 'f';
    if (/\bmale\b/.test(n)) return 'm';
    for (var i = 0; i < FEMALE.length; i++) if (n.indexOf(FEMALE[i]) > -1) return 'f';
    for (var j = 0; j < MALE.length; j++) if (n.indexOf(MALE[j]) > -1) return 'm';
    return '?';
  }
  /* "Natural"/"Online" (Microsoft neural) and Google voices are the ones that
     actually sound human; they are marked and sorted first. */
  function isNatural(v) {
    return /natural|online|neural|google|premium|enhanced|siri/i.test(v.name || '');
  }
  function accentOf(v) {
    var l = (v.lang || '').replace('_', '-');
    return l;
  }
  var ACCENT_LABEL = {
    'en-US': '美 US', 'en-GB': '英 UK', 'en-AU': '澳 AU', 'en-IN': '印 IN',
    'en-IE': '爱 IE', 'en-CA': '加 CA', 'en-NZ': 'NZ', 'en-ZA': 'ZA'
  };

  var voices = [], enVoices = [], zhVoices = [];
  function loadVoices() {
    voices = synth.getVoices() || [];
    enVoices = voices.filter(function (v) { return /^en/i.test(v.lang || ''); });
    zhVoices = voices.filter(function (v) { return /^zh/i.test(v.lang || ''); });
    enVoices.sort(function (a, b) {
      var na = isNatural(a) ? 0 : 1, nb = isNatural(b) ? 0 : 1;
      if (na !== nb) return na - nb;
      return (a.lang + a.name).localeCompare(b.lang + b.name);
    });
    fillVoiceSelect();
  }
  synth.addEventListener ? synth.addEventListener('voiceschanged', loadVoices)
                         : (synth.onvoiceschanged = loadVoices);

  function shortName(v) {
    return (v.name || '')
      .replace(/^Microsoft\s+/i, '').replace(/^Google\s+/i, 'Google ')
      .replace(/\s*-\s*(English|Chinese).*$/i, '')
      .replace(/\((Natural|Online.*?)\)/ig, '')
      .replace(/\s+/g, ' ').trim();
  }
  function filtered() {
    return enVoices.filter(function (v) {
      if (S.accent !== 'all' && accentOf(v) !== S.accent) return false;
      if (S.gender !== 'all' && genderOf(v) !== S.gender) return false;
      return true;
    });
  }
  function currentVoice() {
    var list = filtered().length ? filtered() : enVoices;
    var byUri = list.filter(function (v) { return v.voiceURI === S.voiceURI; })[0];
    return byUri || list[0] || enVoices[0] || null;
  }

  /* ---------- text preparation ---------- */
  var CJK = /[　-〿㐀-䶿一-鿿豈-﫿＀-￯]/;
  var CJK_G = new RegExp(CJK.source, 'g');

  function isChinese(t) {
    var cjk = (t.match(CJK_G) || []).length;
    var lat = (t.match(/[A-Za-z]/g) || []).length;
    return cjk > 2 && cjk > lat;
  }
  function englishOnly(t) {
    /* 10.6–13.3 kPa 里的 en dash 是范围，读成 "to"；它在化学名里不会出现，
       所以只对 en/em dash 生效，Michaelis–Menten 那种仍然读成停顿。 */
    var s = t.replace(/(\d)\s*[—–]\s*(\d)/g, '$1 to $2')
             .replace(CJK_G, ' ').replace(/[·•—–…]+/g, ' ')
             .replace(/\s+([,.;:!?)])/g, '$1').replace(/\s+/g, ' ').trim();
    return /[A-Za-z0-9]/.test(s) ? s : '';
  }
  /* Chrome cuts an utterance short after ~15 s, so everything is spoken in
     sentence-sized pieces anyway — which is also what shadowing needs. */
  function chunks(t, max) {
    max = max || 180;
    var sents = t.match(/[^.!?;]+[.!?;]*\s*/g) || [t];
    var out = [], cur = '';
    sents.forEach(function (s) {
      if ((cur + s).length > max && cur) { out.push(cur.trim()); cur = s; }
      else cur += s;
    });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  /* ---------- building the queue from what is on screen ----------
     textContent would swallow the injected 🔊 buttons, so the tree is
     walked with those skipped. */
  function textOf(node) {
    if (node.nodeType === 3) return node.nodeValue;
    if (node.nodeType !== 1) return '';
    if (node.classList && node.classList.contains('spk')) return '';
    var s = '';
    for (var i = 0; i < node.childNodes.length; i++) s += textOf(node.childNodes[i]);
    return s;
  }
  /* 中译 / 临床 收起来的东西不该被读出来 */
  function visible(el) {
    return !!(el.getClientRects && el.getClientRects().length);
  }
  function rawOf(el) {
    if (el.tagName === 'TR') {
      return Array.prototype.map.call(el.cells, function (td) { return textOf(td).trim(); })
        .filter(Boolean).join(' — ');
    }
    return textOf(el).replace(/^\s*开口第一句：/, '');
  }

  /* zhOk: 点某一段自己的喇叭是明确的指令，所以中文照读，
     不受面板上『也读中文串讲』那个总开关的限制。 */
  function push(list, el, raw, zhOk) {
    var t = (raw == null ? textOf(el) : raw).replace(/\s+/g, ' ').trim();
    if (!t) return;
    if (isChinese(t)) {
      if (!(zhOk || S.cn) || !zhVoices.length) return;
      list.push({ el: el, text: t, zh: true });
      return;
    }
    var en = englishOnly(t);
    if (!en) return;
    chunks(en).forEach(function (c) { list.push({ el: el, text: c, zh: false }); });
  }

  /* 一半题里所有可朗读的段落，按文档顺序 —— 朗读顺序和小喇叭的位置一致 */
  var PARA = '.opener, .spine li, .bh, .block ul li, .bgloss, .chem li, .ex ul li';
  /* 词汇卡片不进整题队列，只由『词汇』那一节的喇叭单独读 */

  function queueForHalf(half) {
    var list = [];
    half.querySelectorAll(PARA).forEach(function (el) {
      if (el.closest('.block.shut') && !el.classList.contains('bh')) return;  // 骨架模式下只读标题
      if (!visible(el)) return;
      push(list, el, rawOf(el));
    });
    return list;
  }
  function indexOf(list, el) {
    for (var i = 0; i < list.length; i++) if (list[i].el === el) return i;
    return -1;
  }
  function queueForPara(el) {
    var list = [];
    push(list, el, rawOf(el), true);
    return list;
  }
  /* 一整节：骨架 / 重点补充 / 数字 / 临床 / 易错 / 词汇，
     或检验值与结构式页面上 <h2> 到下一个 <h2> 之间的内容 */
  function queueForSection(h) {
    var list = [];
    if (h.tagName === 'H2') {
      var el = h.nextElementSibling;
      while (el && el.tagName !== 'H2') {
        if (visible(el)) {
          if (/^(P|DIV)$/.test(el.tagName) && !el.querySelector('li, tr')) push(list, el, rawOf(el));
          el.querySelectorAll('li, tbody tr').forEach(function (x) {
            if (visible(x)) push(list, x, rawOf(x));
          });
        }
        el = el.nextElementSibling;
      }
      return list;
    }
    var sec = h.parentElement;
    if (sec.querySelector('.terms')) {
      sec.querySelectorAll('.term').forEach(function (t) { push(list, t, textOf(t)); });
      return list;
    }
    sec.querySelectorAll('li').forEach(function (li) { if (visible(li)) push(list, li, rawOf(li)); });
    return list;
  }

  function queueForMain(scope) {
    var list = [], root = scope || document;
    var halves = root.querySelectorAll('.half');
    if (halves.length) {
      halves.forEach(function (h) { list = list.concat(queueForHalf(h)); });
      return list;
    }
    root.querySelectorAll('.page h1, .page h2, .page p, .page .note, .page li, .page tbody tr')
      .forEach(function (el) { if (visible(el)) push(list, el, rawOf(el)); });
    return list;
  }

  /* ---------- the player ---------- */
  var queue = [], qi = -1, playing = false, marked = null;

  function mark(el) {
    if (marked) marked.classList.remove('speaking');
    marked = el || null;
    if (marked) {
      marked.classList.add('speaking');
      var r = marked.getBoundingClientRect();
      if (r.top < 60 || r.bottom > window.innerHeight - 40) {
        marked.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }
  }
  /* a click that produces no sound must say why, not fail silently */
  var toastEl = null, toastT = 0;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'stoast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('on');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('on'); }, 3200);
  }
  function status() {
    var el = document.getElementById('spPos');
    if (el) el.textContent = queue.length ? (Math.min(qi + 1, queue.length) + ' / ' + queue.length) : '–';
    var pp = document.getElementById('spPlay');
    if (pp) pp.textContent = (playing && !synth.paused) ? '⏸' : '▶';
  }
  function speakItem() {
    if (qi < 0 || qi >= queue.length) { stop(); return; }
    var it = queue[qi];
    mark(it.el);
    var u = new SpeechSynthesisUtterance(it.text);
    var v = it.zh ? (zhVoices[0] || null) : currentVoice();
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = S.rate; u.pitch = S.pitch;
    u.onend = function () { if (playing) { qi++; if (qi < queue.length) speakItem(); else stop(); } };
    u.onerror = function (e) {
      if (!playing) return;
      if (e && e.error === 'interrupted') return;
      qi++; if (qi < queue.length) speakItem(); else stop();
    };
    synth.speak(u);
    status();
  }
  function play(list, from) {
    synth.cancel();
    if (list && !list.length) {
      mark(null);
      toast(zhVoices.length ? '这一段没有可朗读的文字。'
                            : '这一段是中文，系统里没有装中文语音。');
      return;
    }
    queue = list || queue;
    if (!queue.length) return;
    qi = typeof from === 'number' ? from : 0;
    playing = true;
    speakItem();
  }
  function stop() {
    playing = false;
    synth.cancel();
    mark(null);
    status();
  }
  function toggle() {
    if (!playing) { play(queueForMain(document.getElementById('main'))); return; }
    if (synth.paused) synth.resume(); else synth.pause();
    status();
  }
  function step(d) {
    if (!queue.length) return;
    var to = qi + d;
    if (to < 0) to = 0;
    if (to >= queue.length) { stop(); return; }
    play(queue, to);
  }
  function repeat() { if (queue.length) play(queue, qi < 0 ? 0 : qi); }

  /* Chrome sometimes leaves the engine paused after long silences. */
  setInterval(function () {
    if (playing && synth.paused && !document.body.dataset.spUserPaused) synth.resume();
  }, 8000);
  window.addEventListener('beforeunload', function () { synth.cancel(); });

  /* ---------- the panel ---------- */
  var panel = document.createElement('div');
  panel.className = 'spanel';
  panel.innerHTML =
    '<div class="sp-head">' +
      '<b>🔊 发音</b>' +
      '<span class="sp-note" id="spVoiceNow"></span>' +
      '<button id="spCollapse" title="收起面板">–</button>' +
      '<button id="spHide" title="隐藏面板（左下角小喇叭可恢复）">✕</button>' +
    '</div>' +
    '<div class="sp-body">' +
      '<div class="sp-row"><span class="sp-lab">口音</span><span class="sp-chips" id="spAccent"></span></div>' +
      '<div class="sp-row"><span class="sp-lab">性别</span><span class="sp-chips" id="spGender">' +
        '<button data-g="all">全部</button><button data-g="f">女</button><button data-g="m">男</button>' +
      '</span></div>' +
      '<div class="sp-row"><span class="sp-lab">声音</span><select id="spVoice"></select></div>' +
      '<div class="sp-row"><span class="sp-lab">语速</span>' +
        '<input type="range" id="spRate" min="0.5" max="1.6" step="0.05">' +
        '<span class="sp-val" id="spRateVal">1.00×</span></div>' +
      '<div class="sp-row"><label class="sp-cn"><input type="checkbox" id="spCn"> 也读中文</label>' +
        '<label class="sp-cn"><input type="checkbox" id="spPara"> 每段小喇叭</label>' +
        '<button id="spTest" class="sp-btn">试听</button></div>' +
      '<div class="sp-row sp-transport">' +
        '<button id="spAll" class="sp-btn sp-main">▶ 朗读本题</button>' +
        '<button id="spPrev" title="上一句">⏮</button>' +
        '<button id="spPlay" title="播放 / 暂停 (S)">▶</button>' +
        '<button id="spNext" title="下一句">⏭</button>' +
        '<button id="spRep" title="重复本句">🔁</button>' +
        '<button id="spStop" title="停止 (Esc)">⏹</button>' +
        '<span class="sp-val" id="spPos">–</span>' +
      '</div>' +
      '<div class="sp-hint" id="spHint"></div>' +
    '</div>';
  document.body.appendChild(panel);

  var fab = document.createElement('button');
  fab.className = 'sfab';
  fab.title = '发音面板';
  fab.textContent = '🔊';
  document.body.appendChild(fab);

  function applyVisibility() {
    panel.classList.toggle('is-collapsed', !!S.collapsed);
    panel.hidden = !!S.hidden;
    fab.hidden = !S.hidden;
    document.getElementById('spCollapse').textContent = S.collapsed ? '+' : '–';
  }

  /* accent chips are built from the voices that actually exist */
  function fillAccents() {
    var box = document.getElementById('spAccent');
    var langs = [];
    enVoices.forEach(function (v) { if (langs.indexOf(accentOf(v)) < 0) langs.push(accentOf(v)); });
    langs.sort();
    box.innerHTML = '<button data-a="all">全部</button>' + langs.map(function (l) {
      return '<button data-a="' + l + '">' + (ACCENT_LABEL[l] || l) + '</button>';
    }).join('');
    if (S.accent !== 'all' && langs.indexOf(S.accent) < 0) S.accent = 'all';
    syncChips();
  }
  function syncChips() {
    document.querySelectorAll('#spAccent button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.a === S.accent);
    });
    document.querySelectorAll('#spGender button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.g === S.gender);
    });
  }
  function fillVoiceSelect() {
    var sel = document.getElementById('spVoice');
    if (!sel) return;
    fillAccents();
    var list = filtered();
    var fallback = !list.length;
    if (fallback) list = enVoices;
    sel.innerHTML = list.map(function (v) {
      var g = genderOf(v), gl = g === 'f' ? '女' : g === 'm' ? '男' : '—';
      return '<option value="' + v.voiceURI + '">' +
        (isNatural(v) ? '⭐ ' : '') + shortName(v) +
        ' · ' + (ACCENT_LABEL[accentOf(v)] || accentOf(v)) + ' · ' + gl + '</option>';
    }).join('');
    var v = currentVoice();
    if (v) { sel.value = v.voiceURI; S.voiceURI = v.voiceURI; }
    var now = document.getElementById('spVoiceNow');
    if (now) now.textContent = v ? shortName(v) : '无可用语音';

    var hint = document.getElementById('spHint');
    if (!enVoices.length) {
      hint.innerHTML = '这个浏览器没有找到英语语音。用 <b>Edge</b> 打开本页，或在 Windows 设置 → 时间和语言 → 语音 → 添加语音 里装一个。';
    } else if (!enVoices.some(isNatural)) {
      hint.innerHTML = '⭐ = 神经网络（接近真人）语音。当前一个也没有：用 <b>Edge</b> 打开本页通常就会出现 Natural 语音，或在 Windows 设置里添加。';
    } else if (fallback) {
      hint.textContent = '当前筛选没有匹配的语音，已显示全部。';
    } else {
      hint.innerHTML = '⭐ = 神经网络语音，最接近真人。中文串讲需要系统里有中文语音。';
    }
    status();
  }

  /* ---------- wiring ---------- */
  document.getElementById('spAccent').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    S.accent = b.dataset.a; S.voiceURI = ''; save(); syncChips(); fillVoiceSelect();
  });
  document.getElementById('spGender').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    S.gender = b.dataset.g; S.voiceURI = ''; save(); syncChips(); fillVoiceSelect();
  });
  document.getElementById('spVoice').addEventListener('change', function (e) {
    S.voiceURI = e.target.value; save();
    var v = currentVoice();
    document.getElementById('spVoiceNow').textContent = v ? shortName(v) : '';
  });
  var rate = document.getElementById('spRate');
  rate.value = S.rate;
  document.getElementById('spRateVal').textContent = Number(S.rate).toFixed(2) + '×';
  rate.addEventListener('input', function () {
    S.rate = Number(rate.value);
    document.getElementById('spRateVal').textContent = S.rate.toFixed(2) + '×';
    save();
  });
  var cn = document.getElementById('spCn');
  cn.checked = !!S.cn;
  cn.addEventListener('change', function () { S.cn = cn.checked; save(); });

  var para = document.getElementById('spPara');
  function applyPara() { document.body.classList.toggle('no-spk-para', !S.para); }
  para.checked = !!S.para;
  para.addEventListener('change', function () { S.para = para.checked; save(); applyPara(); });

  document.getElementById('spTest').onclick = function () {
    synth.cancel(); playing = false; mark(null);
    var u = new SpeechSynthesisUtterance(
      'Enzymes lower the activation energy of a reaction without changing its equilibrium.');
    var v = currentVoice(); if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = S.rate; u.pitch = S.pitch; synth.speak(u);
  };
  document.getElementById('spAll').onclick = function () {
    play(queueForMain(document.getElementById('main')));
  };
  document.getElementById('spPlay').onclick = function () {
    if (playing && !synth.paused) { document.body.dataset.spUserPaused = '1'; }
    else { delete document.body.dataset.spUserPaused; }
    toggle();
  };
  document.getElementById('spPrev').onclick = function () { step(-1); };
  document.getElementById('spNext').onclick = function () { step(1); };
  document.getElementById('spRep').onclick = repeat;
  document.getElementById('spStop').onclick = function () { delete document.body.dataset.spUserPaused; stop(); };
  document.getElementById('spCollapse').onclick = function () { S.collapsed = !S.collapsed; save(); applyVisibility(); };
  document.getElementById('spHide').onclick = function () { S.hidden = true; save(); applyVisibility(); };
  fab.onclick = function () { S.hidden = false; S.collapsed = false; save(); applyVisibility(); };

  /* ---------- 🔊 buttons, injected after every render ----------
     Four levels: 半题 · 一块 · 一节 · 一段. The paragraph ones sit at the
     end of the paragraph they read, which is what makes shadowing single
     sentences possible without hunting for the transport bar. */
  var SHIFT_HINT = '（Shift+点：从这里一直往下读）';
  var PARA_INJECT = '.opener, .spine li, .block ul li, .bgloss, .chem li, .ex ul li, ' +
                    '.page p, .page .note, .page li, .page tbody tr';

  function btn(kind, title, cls) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'spk' + (cls ? ' ' + cls : '');
    b.textContent = '🔊';
    b.title = title;
    b.dataset.spk = kind;
    return b;
  }
  function inject() {
    document.querySelectorAll('#main .half-head').forEach(function (h) {
      if (!h.querySelector('.spk')) h.appendChild(btn('half', '朗读这半题'));
    });
    document.querySelectorAll('#main .bh').forEach(function (h) {
      if (!h.querySelector('.spk')) h.appendChild(btn('block', '朗读这一块' + SHIFT_HINT));
    });
    document.querySelectorAll('#main .spine h3, #main .chem h3, #main .ex h3, #main .page h2')
      .forEach(function (h) {
        if (!h.querySelector('.spk')) h.appendChild(btn('section', '朗读这一节', 'spk-sec'));
      });
    document.querySelectorAll('#main ' + PARA_INJECT).forEach(function (el) {
      if (el.querySelector('.spk')) return;
      var host = el.tagName === 'TR' ? el.cells[el.cells.length - 1] : el;
      if (host) host.appendChild(btn('para', '朗读这一段' + SHIFT_HINT, 'spk-para'));
    });
  }
  new MutationObserver(inject).observe(document.getElementById('main'), { childList: true, subtree: true });
  inject();

  /* 从这一段接着往下读到本半题结束 */
  function fromHere(half, el) {
    var list = queueForHalf(half), at = indexOf(list, el);
    if (at < 0) { play(queueForPara(el)); return; }   // 这一段本身被跳过了（例如收起的中译）
    play(list, at);
  }

  /* capture phase, so app.js's own click handlers never see these clicks */
  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.spk') : null;
    if (!b) return;
    e.stopPropagation(); e.preventDefault();
    var kind = b.dataset.spk;

    if (kind === 'half') { play(queueForHalf(b.closest('.half'))); return; }

    if (kind === 'section') { play(queueForSection(b.parentElement)); return; }

    if (kind === 'block') {
      var block = b.closest('.block');
      block.classList.remove('shut');                 // 骨架模式下先展开，否则只有标题可读
      var bh = block.querySelector('.bh');
      if (e.shiftKey && block.closest('.half')) { fromHere(block.closest('.half'), bh); return; }
      var list = [];
      block.querySelectorAll('.bh, ul li, .bgloss').forEach(function (el) {
        if (visible(el)) push(list, el, rawOf(el), true);
      });
      play(list);
      return;
    }

    var host = b.closest('.opener, .bgloss, .note, li, tr, p');
    if (!host) return;
    var half = host.closest('.half');
    if (e.shiftKey && half) { fromHere(half, host); return; }
    play(queueForPara(host));
  }, true);

  /* stop when the topic changes */
  window.addEventListener('hashchange', stop);

  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 's') { e.preventDefault(); document.getElementById('spPlay').click(); }
    else if (e.key === 'Escape') stop();
    else if (e.key === 'n') step(1);
    else if (e.key === 'b') step(-1);
  });

  applyVisibility();
  applyPara();
  loadVoices();
  /* some engines populate the list only after a first call */
  setTimeout(loadVoices, 300);
  setTimeout(loadVoices, 1200);
})();
