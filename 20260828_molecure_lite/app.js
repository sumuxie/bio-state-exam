/* 分子生物学 速通简洁版 — the spine, and three things around it.
   Engine forked from biochemie_lite; see HANDOFF.md for every change made to it.

   WHAT THIS APP IS. Not another copy of a textbook: a gap list. Two scanned books
   were measured against the six trainers that already existed — pesbexplain,
   pesbpro, labhandbook, the biochemistry layer including its 68 leh_*.js files,
   exam30 and jiri_bank, about 19 M characters — on two counts, raw keyword hits and
   whether any node TITLE names the topic. Only the second decides: a topic mentioned
   three hundred times as a step is still a topic nobody taught. What is loaded here
   is what came back thin or absent. What came back covered was deliberately left out.
   COVERAGE_AUDIT.md carries the result for all 51 sections of the source book.

   The app is the thread: one chain per node, each step one claim, in order. Around
   it, only 题目, 星标, 语音.

   Unlike biochemie_lite, NOTHING here is generated from a sibling app — there is no
   sibling app. The source is a 353-page scan with no text layer, every spine is
   hand-written from a transcript of it, and each step carries the printed page it
   was read from.

   Storage prefix `molbiolite.` — its own box, and deliberately neither the folder
   name nor dated; see the note above `store` for why that matters. */

(function () {
  'use strict';

  const NODES = window.BIOLITE_NODES || [];
  const SPINE = window.BIOLITE_SPINE || {};
  const QUIZ  = window.BIOLITE_Q || {};
  const AUDIO = window.BIOLITE_AUDIO || null;

  const $  = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));


  /* This app has no 完整版 to link to -- its source is a scanned textbook, not a
     sibling app, so a link into biochemie_pro would 404 there and land on whatever
     node that app had open last. Each node instead declares where it was read from,
     and that is what the three former "完整版" affordances now show. */
  /* First printed page of a node's range: "211–218" -> "211". Both hyphen and en
     dash appear in nodes.js, so split on either. */
  function startPage(n) {
    if (!n || !n.src || !n.src.pages) return '?';
    return String(n.src.pages).split(/[–\-]/)[0].trim();
  }

  function srcLabel(n) {
    if (!n || !n.src) return '';
    return '<p class="to-full"><span class="btn-ghost" style="cursor:default">📖 源书 · '
      + esc(n.src.book) + '　§' + esc(String(n.section)) + '　印刷页 ' + esc(n.src.pages)
      + '</span></p>';
  }

  /* The storage prefix is deliberately NOT the folder name, and deliberately carries
     no date. Seven trainers share one file:// origin, so the prefix has to be unique
     — 'molbiolite.' is — but it also has to be STABLE, because everything the reader
     owns hangs off it: stars, notes, wrong-answer sets, quiz progress. This app's
     folder is date-stamped (20260828_molecure_lite) the way its siblings are, and a
     date-stamped folder gets re-dated. If the prefix tracked the folder, that rename
     would silently orphan the reader's saved work, and it would look exactly like the
     data having vanished. Rename the folder freely; leave this string alone. */
  const store = {
    get(k, d) {
      try { const r = localStorage.getItem('molbiolite.' + k); return r === null ? d : JSON.parse(r); }
      catch (e) { return d; }
    },
    set(k, v) {
      try { localStorage.setItem('molbiolite.' + k, JSON.stringify(v)); } catch (e) {}
    }
  };

  const state = {
    lang:  store.get('lang', 'both'),
    theme: store.get('theme', 'dark'),
    marks: store.get('marks', {}),          // markKey -> pen id
    pen:   store.get('pen', 'y'),
    onlyMarked: store.get('onlyMarked', false),
    voice: store.get('voice', {}),
    rate:  store.get('rate', 0.94),
    mode:  store.get('mode', 'min'),         // 'min' | 'spine' | 'quiz'
    id:    null,
    filter: ''
  };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Same **bold** handling as the full app, split rather than paired with a regex:
     the corpus writes adjacent bold runs with no separator, which an
     open-run-close regex cannot express. An odd marker count means one has no
     partner, so the text renders as written rather than guessed at. */
  function mdBold(s) {
    const parts = esc(s).split('**');
    if (parts.length % 2 === 0) return esc(s);
    return parts.map((p, i) => (i % 2 ? (p ? '<strong>' + p + '</strong>' : '') : p)).join('');
  }
  function stripMd(s) {
    const parts = String(s == null ? '' : s).split('**');
    return parts.length % 2 === 0 ? String(s == null ? '' : s) : parts.join('');
  }
  function bi(en, cn) {
    let out = '';
    if (state.lang !== 'cn' && en) out += '<div class="t-en">' + mdBold(en) + '</div>';
    if (state.lang !== 'en' && cn) out += '<div class="t-cn">' + mdBold(cn) + '</div>';
    return out;
  }

  /* ------------------------------------------------------------------- 语音 */
  const speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window;
  let activeSayBtn = null, clipPlayer = null;

  const VOICE_GOOD = /natural|neural|online|premium|enhanced|siri|google/i;
  const VOICE_POOR = /espeak|compact|david|zira|mark|huihui|kangkang|yaoyao/i;
  const VOICE_PREFERRED = { en: ['Google UK English Female'], zh: ['Google 普通话（中国大陆）'] };

  /* Never compare voice names with ===. Chrome reports "Google 普通话（中国大陆）" with a
     NON-BREAKING space after "Google" and "Google 國語（臺灣）" in the same list with an
     ordinary one, so a hand-written literal matches one and not the other — silently. */
  const voiceKey = (s) => String(s || '').replace(/\s+/g, ' ').trim().toLowerCase();
  const sameVoice = (a, b) => voiceKey(a) === voiceKey(b);

  function preferredRank(v, lang) {
    const list = VOICE_PREFERRED[lang.split('-')[0].toLowerCase()] || [];
    const i = list.findIndex((n) => sameVoice(n, v.name));
    return i === -1 ? 0 : 100 - i;
  }
  function voiceScore(v, lang) {
    let s = preferredRank(v, lang);
    if (v.lang === lang) s += 40;
    else if (v.lang && v.lang.toLowerCase().startsWith(lang.split('-')[0].toLowerCase())) s += 20;
    if (VOICE_GOOD.test(v.name)) s += 30;
    if (VOICE_POOR.test(v.name)) s -= 25;
    if (!v.localService) s += 5;
    return s;
  }
  function pickVoice(lang) {
    const all = (window.speechSynthesis.getVoices() || []);
    const short = lang.split('-')[0].toLowerCase();
    const list = all.filter((v) => v.lang && v.lang.toLowerCase().startsWith(short))
                    .sort((a, b) => voiceScore(b, lang) - voiceScore(a, lang));
    if (!list.length) return null;
    const chosen = state.voice[short];
    if (chosen) {
      const hit = list.find((v) => v.voiceURI === chosen || sameVoice(v.name, chosen));
      if (hit) return hit;
    }
    return list[0];
  }

  /* Pre-rendered clips, looked up by a hash of the text the button would have
     spoken. Identical scheme to the full app so tools/render-audio.py can serve
     both. AUDIO_SEP is built from its character code, never typed: a literal
     control byte in source is invisible and unreviewable. */
  const AUDIO_SEP = String.fromCharCode(31);
  function norm(s) {
    return String(s).normalize('NFC').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  }
  function fnv1a(s) {
    let h = 0x811c9dc5;
    const bytes = new TextEncoder().encode(s);
    for (let i = 0; i < bytes.length; i++) {
      h ^= bytes[i];
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return ('0000000' + h.toString(16)).slice(-8);
  }
  function clipFor(text, lang) {
    if (!AUDIO || !text) return null;
    const f = AUDIO[fnv1a(String(lang).split('-')[0].toLowerCase() + AUDIO_SEP + norm(text))];
    if (!f) return null;
    return f.indexOf('data:') === 0 ? f : 'audio/' + f;
  }

  /* Exposed so a check can compare the key this app derives against the one the
     renderer wrote. A one-byte disagreement makes every lookup miss and the app fall
     back to the browser voice with no error — on an iPad, that is the entire problem
     the audio exists to solve, failing silently. */
  window.__liteClipFor = clipFor;
  window.__liteClipKey = (t, l) =>
    fnv1a(String(l).split('-')[0].toLowerCase() + AUDIO_SEP + norm(t));

  function speak(text, lang, btn) {
    if (!text) return;
    const src = clipFor(text, lang);
    if (src) {
      if (btn && btn === activeSayBtn && clipPlayer && !clipPlayer.paused) {
        clipPlayer.pause(); btn.classList.remove('speaking'); activeSayBtn = null; return;
      }
      if (speechAvailable) window.speechSynthesis.cancel();
      if (activeSayBtn) { activeSayBtn.classList.remove('speaking'); activeSayBtn = null; }
      playClip(src, btn, () => speakSynth(text, lang, btn));
      return;
    }
    if (clipPlayer) clipPlayer.pause();
    speakSynth(text, lang, btn);
  }

  /* onFail matters: Safari rejects play() outside a user gesture, and a clip listed
     in the manifest can still 404. Without a fallback the button lights up, plays
     nothing and clears — quieter than having no audio at all. */
  function playClip(src, btn, onFail) {
    if (!clipPlayer) clipPlayer = new Audio();
    clipPlayer.pause();
    clipPlayer.src = src;
    clipPlayer.playbackRate = Math.min(4, Math.max(0.5, state.rate));
    let done = false;
    const clear = () => { if (btn) btn.classList.remove('speaking'); if (activeSayBtn === btn) activeSayBtn = null; };
    const fail = () => { if (done) return; done = true; clear(); if (onFail) onFail(); };
    clipPlayer.onended = () => { done = true; clear(); };
    clipPlayer.onerror = fail;
    if (btn) { btn.classList.add('speaking'); activeSayBtn = btn; }
    const p = clipPlayer.play();
    if (p && p.catch) p.catch(fail);
  }

  function speakSynth(text, lang, btn) {
    if (!speechAvailable) return;
    if (btn && btn === activeSayBtn) {
      window.speechSynthesis.cancel(); btn.classList.remove('speaking'); activeSayBtn = null; return;
    }
    window.speechSynthesis.cancel();
    if (activeSayBtn) { activeSayBtn.classList.remove('speaking'); activeSayBtn = null; }
    // Chrome cuts off a single long utterance after a few seconds; queued short ones
    // play through, so long text is split on sentence boundaries first.
    const chunks = (String(text).match(/[^.!?。！？]+[.!?。！？]*/g) || [String(text)])
      .map((c) => c.trim()).filter(Boolean);
    const clear = () => { if (btn) btn.classList.remove('speaking'); if (activeSayBtn === btn) activeSayBtn = null; };
    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = lang;
      u.rate = (lang.startsWith('zh') ? 1.06 : 1) * state.rate;
      const v = pickVoice(lang);
      if (v) u.voice = v;
      if (i === 0) u.onstart = () => { if (btn) { btn.classList.add('speaking'); activeSayBtn = btn; } };
      if (i === chunks.length - 1) { u.onend = clear; u.onerror = clear; }
      window.speechSynthesis.speak(u);
    });
  }

  function sayBtn(text, lang) {
    if (!text || (!speechAvailable && !clipFor(text, lang))) return '';
    return '<button type="button" class="say-btn" data-say="' + esc(stripMd(text))
         + '" data-lang="' + lang + '" aria-label="Pronounce" title="朗读">🔊</button>';
  }
  function sayPairBtn(en, cn) {
    if (state.lang === 'cn') return sayBtn(cn || en, cn ? 'zh-CN' : 'en-US');
    return sayBtn(en || cn, en ? 'en-US' : 'zh-CN');
  }
  function wireSay(root) {
    (root || document).querySelectorAll('.say-btn:not([data-wired])').forEach((b) => {
      b.setAttribute('data-wired', '1');
      b.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        speak(b.dataset.say, b.dataset.lang, b);
      });
    });
  }

  /* The picker. The device decides what exists — Edge on Windows has the Natural
     voices, Chrome often only the legacy ones, Safari neither — so it reports what it
     found rather than pretending the choice is the same everywhere. */
  function voicesFor(lang) {
    const short = lang.split('-')[0].toLowerCase();
    return (window.speechSynthesis.getVoices() || [])
      .filter((v) => v.lang && v.lang.toLowerCase().startsWith(short))
      .sort((a, b) => voiceScore(b, lang) - voiceScore(a, lang));
  }
  function labelVoice(v, lang) {
    if (preferredRank(v, lang)) return v.name + ' (' + v.lang + ') ★ 推荐';
    return v.name + ' (' + v.lang + ')' + (VOICE_GOOD.test(v.name) ? ' ★' : '');
  }
  function fillVoicePickers() {
    if (!speechAvailable) return;
    [['en', 'en-US', '#voice-en'], ['zh', 'zh-CN', '#voice-zh']].forEach(([short, lang, sel]) => {
      const el = $(sel);
      if (!el) return;
      const list = voicesFor(lang);
      if (!list.length) {
        el.innerHTML = '<option value="">这台设备上没有 ' + short + ' 语音</option>';
        el.disabled = true;
        return;
      }
      el.disabled = false;
      const cur = state.voice[short];
      el.innerHTML = list.map((v) =>
        '<option value="' + esc(v.voiceURI) + '"'
        + ((v.voiceURI === cur || sameVoice(v.name, cur)) ? ' selected' : '') + '>'
        + esc(labelVoice(v, lang)) + '</option>').join('');
      if (!cur) el.value = list[0].voiceURI;
      /* Say when the named first choice is missing rather than substituting quietly.
         The Google voices are Chrome's own and are synthesised on Google's servers,
         so they are absent in Safari and silent with no network — which is exactly
         when the reader would otherwise wonder why it sounds different. */
      const want = (VOICE_PREFERRED[short] || [])[0];
      const note = $(sel + '-note');
      if (note) {
        const have = want && list.some((v) => sameVoice(v.name, want));
        note.textContent = (!want || have) ? ''
          : '这个浏览器里没有 ' + want + '，改用 ' + list[0].name;
      }
    });
    const r = $('#voice-rate');
    if (r) { r.value = state.rate; $('#voice-rate-val').textContent = Number(state.rate).toFixed(2) + '×'; }
  }
  const VOICE_SAMPLE = {
    'en-US': 'Stacking between successive GC pairs is stronger than between AT pairs.',
    'zh-CN': '相邻 GC 对之间的堆积强于 AT 对。'
  };
  function wireVoicePanel() {
    const panel = $('#voice-panel'), toggle = $('#voice-toggle');
    if (!panel || !toggle) return;
    toggle.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) fillVoicePickers();
    });
    $('#voice-close').addEventListener('click', () => { panel.hidden = true; });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) panel.hidden = true;
    });
    [['en', '#voice-en'], ['zh', '#voice-zh']].forEach(([short, sel]) => {
      const el = $(sel);
      if (el) el.addEventListener('change', () => {
        state.voice[short] = el.value; store.set('voice', state.voice);
      });
    });
    $$('.vp-test').forEach((b) =>
      b.addEventListener('click', () => speak(VOICE_SAMPLE[b.dataset.lang], b.dataset.lang, null)));
    const r = $('#voice-rate');
    if (r) r.addEventListener('input', () => {
      state.rate = parseFloat(r.value); store.set('rate', state.rate);
      $('#voice-rate-val').textContent = state.rate.toFixed(2) + '×';
    });
    // getVoices() is empty on first call in Chrome until this fires.
    if (speechAvailable) window.speechSynthesis.onvoiceschanged = fillVoicePickers;
  }

  /* ------------------------------------------------------------------- 星标 */
  const PENS = [
    { id: 'y', hex: '#ffd54a' }, { id: 'g', hex: '#7ee787' },
    { id: 'b', hex: '#79c0ff' }, { id: 'p', hex: '#ff9ecd' }
  ];
  const PEN_IDS = PENS.map((p) => p.id);
  const penHex = (id) => (PENS.find((x) => x.id === id) || PENS[0]).hex;
  const markOf = (k) => state.marks[k] || '';

  function toggleMark(k) {
    if (state.marks[k]) delete state.marks[k]; else state.marks[k] = state.pen;
    store.set('marks', state.marks);
    return state.marks[k] || '';
  }
  function cyclePen(k) {
    if (!state.marks[k]) return '';
    state.marks[k] = PEN_IDS[(PEN_IDS.indexOf(state.marks[k]) + 1) % PEN_IDS.length];
    store.set('marks', state.marks);
    return state.marks[k];
  }
  /* Two buttons rather than one whose meaning depends on the current pen: the star
     collects, the dot recolours what is already collected. Inherited from the full
     app, where trying the single-control version first is what settled it. */
  function markBtn(k) {
    const m = markOf(k);
    return '<span class="mark-wrap">'
      + '<button type="button" class="mark-btn' + (m ? ' on' : '') + '" data-mark="' + esc(k)
      + '" title="收录 · star this step">' + (m ? '★' : '☆') + '</button>'
      + (m ? '<button type="button" class="pen-dot" data-pen-for="' + esc(k)
           + '" style="background:' + penHex(m) + '" title="换颜色 · recolour"></button>' : '')
      + '</span>';
  }
  function markCountOf(id) {
    const sp = SPINE[id];
    if (!sp) return 0;
    let n = 0;
    (sp.steps || []).forEach((_s, i) => { if (state.marks[id + ':s' + i]) n++; });
    (sp.terms || []).forEach((t) => { if (state.marks[id + '::' + (t.en || t.cn)]) n++; });
    return n;
  }
  function wireMarks(root) {
    (root || document).querySelectorAll('.mark-btn').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        toggleMark(b.dataset.mark);
        renderStudy(); renderSidebar();
      }));
    (root || document).querySelectorAll('.pen-dot').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        cyclePen(b.dataset.penFor);
        renderStudy();
      }));
  }

  /* ------------------------------------------------------- topic grouping 按主题 */
  /* ------------------------------------------------- ONE SUBJECT, ONE SPINE 按主题
     Inherited from the parent app, where two textbooks covered the same subjects and
     a topicKey merged their two accounts into one chain so the reader was not made to
     choose between them. This app reads ONE book, so nothing is merged today and every
     spine is keyed by node — but several nodes still share a topicKey (§6.3, §6.4 and
     §6.5 are all `interaction-methods`), so they group under one heading, and the
     merge path stays live in case a second source is ever added. */
  const spineOf = (n) => (n && (SPINE['key:' + n.topicKey] || SPINE[n.id])) || null;
  const hasSpine = (n) => !!spineOf(n);
  const isMerged = (n) => !!(n && SPINE['key:' + n.topicKey]);
  const sectionNodes = () => NODES.filter((n) => n.kind !== 'entity');

  /* A spine may carry its own short title. The full app's titles say what a node
     adds relative to the other book, so they run to 240 characters and contain the
     very commentary this app leaves out. */
  function titleOf(n, lang) {
    const sp = spineOf(n) || {};
    if (lang === 'cn') return sp.nodeTitle_cn || n.cnTitle;
    return sp.nodeTitle_en || n.enTitle;
  }

  function secKey(n) {
    return String(n.section || '').split('.').map((x) => String(x).padStart(3, '0')).join('.');
  }

  /* Grouped by topicKey, then ordered by the book's own chapter and section numbers.
     The parent app sorted Lehninger nodes ahead of Czech ones inside each group; with
     one source that term was always zero, so it is gone — the sort now says what it
     does, which is: follow the textbook's order. */
  function groups() {
    const by = new Map();
    sectionNodes().forEach((n) => {
      const k = n.topicKey || ('_' + n.id);
      if (!by.has(k)) by.set(k, []);
      by.get(k).push(n);
    });
    const out = [];
    by.forEach((members, key) => {
      members.sort((a, b) => secKey(a).localeCompare(secKey(b)));
      out.push({ key: key, members: members });
    });
    // Order the groups by their leading member, so the sidebar is stable.
    out.sort((a, b) => {
      const A = a.members[0], B = b.members[0];
      return (A.chapter || 0) - (B.chapter || 0) ||
             secKey(A).localeCompare(secKey(B));
    });
    return out;
  }

  /* The sidebar is 78 rows once every topic is merged, which is a long flat list to
     hunt through when you know only that you want "the lipid one". These are the
     subject blocks the reader asked for. Order is a study order, not the books' —
     foundations, then the three classes of molecule, then what is done with them.
     Every topicKey appears exactly once; anything not listed falls through to a final
     block, so adding a topic to nodes.js can never make it disappear from the sidebar. */
  const AREAS = [
    { cn: '基因功能研究技术', en: 'Studying gene function', keys: [
      'genome-editing', 'interaction-methods'] },
    { cn: '真核基因表达调控', en: 'Eukaryotic gene regulation', keys: [
      'eukaryotic-regulation-overview', 'chromatin-epigenetics', 'noncoding-rna'] },
    { cn: '原核基因表达调控', en: 'Prokaryotic gene regulation', keys: [
      'prokaryotic-regulation'] },
    { cn: '基因组的可动性与 RNA 加工', en: 'Mobile DNA and RNA processing', keys: [
      'dna-transposition', 'snp-variation', 'rna-editing-transport'] }
  ];

  function groupsByArea() {
    const byKey = new Map();
    groups().forEach((g) => byKey.set(g.key, g));
    const out = [], placed = new Set();
    AREAS.forEach((a) => {
      const gs = a.keys.map((k) => byKey.get(k)).filter(Boolean);
      gs.forEach((g) => placed.add(g.key));
      if (gs.length) out.push({ area: a, gs: gs });
    });
    const rest = groups().filter((g) => !placed.has(g.key));
    if (rest.length) out.push({ area: { cn: '其他', en: 'Other' }, gs: rest });
    return out;
  }

  function groupLabel(g) {
    const lead = g.members.find(hasSpine) || g.members[0];
    return titleOf(lead, state.lang === 'cn' ? 'cn' : 'en');
  }

  function matches(n) {
    if (!state.filter) return true;
    return (String(n.section) + ' ' + titleOf(n, 'en') + ' ' + titleOf(n, 'cn'))
      .toLowerCase().includes(state.filter);
  }

  /* A merged topic is ONE row. An unmerged one still lists its sections, so the
     sidebar shows exactly what has been unified and what has not — 78 rows when the
     merge is finished, against 281 before it. */
  function renderSidebar() {
    let html = '';
    groupsByArea().forEach((block) => {
      /* Count first, emit the heading only if something in the block survives the
         filter — otherwise a search leaves a column of empty headings. */
      const live = block.gs.filter((g) => g.members.some(matches));
      if (!live.length) return;
      html += '<div class="area-head"><span class="area-name">'
            + esc(state.lang === 'en' ? block.area.en : block.area.cn)
            + '</span><span class="area-count">' + live.length + '</span></div>';
      live.forEach((g) => {
      const shown = g.members.filter(matches);
      if (!shown.length) return;
      const lead = g.members.find(isMerged);
      if (lead) {
        const stars = g.members.reduce((a, n) => a + markCountOf(n.id), 0);
        const secs = g.members.map((n) => n.section).join(' · ');
        html += '<button class="topic-item merged' + (g.members.some((n) => n.id === state.id) ? ' current' : '')
              + '" data-id="' + esc(lead.id) + '" title="' + esc(secs) + '">'
              + '<span class="ti-src src-merged">合</span>'
              + '<span class="ti-title">' + mdBold(titleOf(lead, state.lang === 'cn' ? 'cn' : 'en')) + '</span>'
              + '<span class="ti-secs">' + esc(g.members.length) + ' 节</span>'
              + (stars ? '<span class="ti-stars">★' + stars + '</span>' : '')
              + '<span class="ti-done">●</span></button>';
        return;
      }
      const have = g.members.filter(hasSpine).length;
      html += '<div class="tk-head' + (g.members.length > 1 ? ' tk-joined' : '') + '">'
            + '<span class="tk-name">' + mdBold(groupLabel(g)) + '</span>'
            + '<span class="tk-count">' + have + '/' + g.members.length + '</span></div>';
      shown.forEach((n) => {
        const stars = markCountOf(n.id);
        html += '<button class="topic-item' + (n.id === state.id ? ' current' : '')
              + (hasSpine(n) ? '' : ' no-spine') + '" data-id="' + esc(n.id) + '">'
              /* The parent app put a book badge here (LEH / CZ) because it drew on two
                 textbooks. Every node in this app comes from the same one, so a book
                 badge would print the same word on every row — noise in the slot with
                 the least room. The printed start page goes here instead: it is
                 different for every node, and it is the thing you need in order to
                 find the passage in the scanned PDF, which nothing else on screen
                 gives you. Section number sits next to it and supplies the chapter. */
              + '<span class="ti-src src-page">'
              + esc(startPage(n)) + '</span>'
              + '<span class="ti-sec">' + esc(n.section) + '</span>'
              + '<span class="ti-title">' + mdBold(titleOf(n, state.lang === 'cn' ? 'cn' : 'en')) + '</span>'
              + (stars ? '<span class="ti-stars">★' + stars + '</span>' : '')
              + (hasSpine(n) ? '<span class="ti-done">●</span>' : '') + '</button>';
      });
      });
    });
    $('#topic-list').innerHTML = html || '<p class="no-results">No match 没有匹配</p>';
    $$('#topic-list .topic-item').forEach((b) =>
      b.addEventListener('click', () => open(b.dataset.id)));

    // Progress is counted in SUBJECTS, because that is the unit now.
    const gs = groups();
    const done = gs.filter((g) => g.members.some(hasSpine)).length;
    const merged = gs.filter((g) => g.members.some(isMerged)).length;
    $('#spine-count').textContent = done + ' / ' + gs.length + ' 主题'
      + (merged ? '（' + merged + ' 已合并）' : '');
    $('#spine-bar').style.width = (100 * done / gs.length) + '%';
  }

  /* "这些东西一般有啥用？…有没有 app 其他章节都在什么地方有详细讲解？"

     A step states a fact and then stops, and the reader is left holding something
     with no idea what it is for or where the rest of it lives. So a step may carry
     `see`: pointers to the nodes that actually develop the subject. They were chosen
     by searching the corpus and ranking by how much each node says about the term,
     not by guessing — a cross-reference to a node that mentions the word once is
     worse than none.

     A target that has its own spine opens HERE; one that does not is shown as plain
     app, because that is where its detail is. */
  /* "如果之前讲过某个类似的/同类/相反的概念，再提起就可以加强" — house rule 7. A step
     that is the parallel or the opposite of an earlier one says so, so the reader
     attaches it to something already held instead of learning it cold. */
  const recallOf = (s) => state.lang === 'cn' ? (s.recall_cn || s.recall_en)
                                              : (s.recall_en || s.recall_cn);
  const openOf   = (s) => state.lang === 'cn' ? (s.openQuestion_cn || s.openQuestion_en)
                                              : (s.openQuestion_en || s.openQuestion_cn);

  function seeHtml(s) {
    const refs = (s.see || []).filter((r) => NODES.some((n) => n.id === r.id));
    if (!refs.length) return '';
    return '<span class="ch-see"><span class="see-label">详见</span>' + refs.map((r) => {
      const n = NODES.find((x) => x.id === r.id);
      const note = state.lang === 'cn' ? (r.cn || r.en) : (r.en || r.cn);
      const here = !!SPINE[r.id];
      const tag = here ? 'a' : 'span';
      const href = here ? ' href="#' + encodeURIComponent(r.id) + '"' : '';
      return '<' + tag + ' class="see-link' + (here ? ' see-here' : ' see-nospine') + '"' + href
        + ' data-goto="' + (here ? esc(r.id) : '') + '" title="' + esc(n.enTitle || '') + '">'
        + '<span class="see-sec">' + esc(n.section) + '</span> ' + esc(note)
        + (here ? '' : ' <span class="see-full">未写</span>') + '</' + tag + '>';
    }).join('') + '</span>';
  }

  /* ------------------------------------------------------------------ 极简 ⚡
     Removing every cold start made the prose correct and long. Both are true: a step
     now introduces the nouns it uses, and a page of introductions is a page you have
     to wade through when you already know them.

     So this mode shows ONLY the claim of each step, and keeps everything else one tap
     away. It costs no new writing, because the claim is already marked: `**bold**`
     was applied to exactly that, 7,517 spans across 74 spines. A cold start is fine
     here — the introduction that answers it is in the same step, folded.

     Nothing is bolded in this view. What is shown IS the emphasis; bolding all of it
     would be the "everything bold is nothing bold" failure in a new place. */
  function firstSentence(text) {
    const m = String(text || '').replace(/\*\*/g, '').match(/^[^.!?。！？]+[.!?。！？]?/);
    return (m ? m[0] : String(text || '').replace(/\*\*/g, '')).trim();
  }

  function claimOf(text) {
    const parts = String(text || '').split('**');
    if (parts.length < 3 || parts.length % 2 === 0) return firstSentence(text);
    const spans = parts.filter((_, i) => i % 2).map((s) => s.replace(/\s+/g, ' ').trim())
                       .filter(Boolean);
    if (!spans.length) return firstSentence(text);
    if (spans.length === 1) return spans[0];

    /* Several spans, which means the step never designated one claim. Measured over
       the Lehninger spines — written before this mode existed, so their bold marks
       emphasis inside prose rather than the takeaway — joining them all gives a
       median of 393 characters and a worst case of 904. That is not a minimal view.
       No extraction rule recovers the intended claim, because the author never
       picked one; the fix is in the content, and those spines are being re-bolded to
       one claim per step, as the Czech ones already are.

       Until then: join while it stays short enough to read at a glance, and fall back
       to the longest single span when it does not. */
    const joined = spans.join(' · ');
    if (joined.length <= 200) return joined.length < 30 ? firstSentence(text) : joined;
    return spans.reduce((a, b) => (b.length > a.length ? b : a));
  }

  function renderMinimal(n, sp, head) {
    const pane = $('#panel-study');
    let html = head + '<section class="block min-block"><h2>'
      + esc(claimOf(sp.title_en) || sp.title_en) + ' <span class="muted">'
      + esc(claimOf(sp.title_cn) || sp.title_cn || '') + '</span>'
      + '<button type="button" id="min-collapse" class="btn-ghost min-collapse-all">'
      + '▲ 全部收起</button></h2><ol class="chain min">';
    let hidden = 0;
    (sp.steps || []).forEach((s, i) => {
      const k = n.id + ':s' + i, m = markOf(k);
      if (state.onlyMarked && !m) { hidden++; return; }
      /* The connectors stay. Dropping them made 极简 a list of fifteen bullets where
         the 主线 view had been an argument — and the thread is the thing the reader
         said they were there for. They cost a line of small type each. */
      const link = state.lang === 'cn' ? (s.link_cn || s.link_en) : (s.link_en || s.link_cn);
      if (i > 0 && link && !state.onlyMarked) {
        html += '<li class="ch-link"><span>' + esc(link) + '</span></li>';
      }
      const en = claimOf(s.en), cn = claimOf(s.cn);
      /* The claim itself is the expand control, and the control carries a WORD.
         The first version was a 22px ＋ sitting in a row with 🔊 and ☆, and it read
         as a third icon rather than as a way in — reported as "其实我没太看见", and
         mistaken for the 详见 cross-references, which are a different thing entirely
         (they leave for another node; this opens what is folded inside this step). */
      html += '<li' + (m ? ' class="hl-' + m + '"' : '') + ' data-step="' + i + '">'
        + '<div class="min-claim" data-more="' + i + '" role="button" tabindex="0">'
        + (state.lang === 'cn' ? '' : '<span class="ch-en">' + esc(en) + '</span>')
        + (state.lang === 'en' ? '' : '<span class="ch-cn">' + esc(cn) + '</span>')
        + '<span class="min-more" data-more="' + i + '">▾ 为什么</span>'
        + '</div>'
        /* Reads the claim, not the whole step. The button sits beside the one
           sentence 极简 is showing, so reading the folded text instead was heard as
           the wrong sentence entirely — reported as 它会念被折叠的地方. Pre-rendered
           audio is keyed on the full text and will not match a claim, so this falls
           back to speech synthesis until the clips are re-rendered per claim. */
        + '<span class="step-tools">' + sayPairBtn(en, cn) + markBtn(k) + '</span>'
        /* The full step, folded. This is where a cold start is answered: the noun's
           introduction, the source, the cross-references, the caveats. */
        + '<div class="min-full" id="mf-' + i + '" hidden>'
        + (state.lang === 'cn' ? '' : '<span class="ch-en">' + mdBold(s.en) + '</span>')
        + (state.lang === 'en' ? '' : '<span class="ch-cn">' + mdBold(s.cn || '') + '</span>')
        + (s.src ? '<span class="ch-src">' + esc(s.src) + '</span>' : '')
        + (s.beyond ? '<span class="beyond-flag" title="' + esc(s.beyondNote || '')
            + '">补充 · not on the cited pages</span>' : '')
        + (recallOf(s) ? '<span class="ch-recall">↑ ' + esc(recallOf(s)) + '</span>' : '')
        + (openOf(s) ? '<span class="ch-open">? ' + esc(openOf(s)) + '</span>' : '')
        + seeHtml(s)
        /* A second way out, at the BOTTOM. The ＋ that opened this sits above the
           whole expanded block, and once the block is a screen tall that button is
           off-screen — reported as "no way back to the short version". */
        + '<button type="button" class="min-close" data-close="' + i + '">▲ 收起</button>'
        + '</div>'
        + '</li>';
    });
    html += '</ol>';
    if (hidden) html += '<p class="muted only-marked-note">只看星标：隐藏了 ' + hidden + ' 步</p>';
    html += '</section>';

    if (sp.terms && sp.terms.length) {
      html += '<section class="block"><h2>词 <span class="muted">tap for the definition</span></h2>'
            + '<div class="min-terms">';
      sp.terms.forEach((t) => {
        const k = n.id + '::' + (t.en || t.cn), m = markOf(k);
        if (state.onlyMarked && !m) return;
        html += '<details class="min-term' + (m ? ' hl-' + m + '' : '') + '">'
          + '<summary>' + mdBold(t.en) + ' <span class="muted">' + mdBold(t.cn || '') + '</span></summary>'
          + '<div class="term-def">' + bi(t.def_en, t.def_cn) + '</div></details>';
      });
      html += '</div></section>';
    }

    html += srcLabel(n);
    pane.innerHTML = html + '</article>';
    wireSay(pane); wireMarks(pane);

    function setOpen(i, open) {
      const box = $('#mf-' + i);
      if (!box) return;
      box.hidden = !open;
      const btn = pane.querySelector('.min-more[data-more="' + i + '"]');
      if (btn) btn.textContent = open ? '▴ 收起' : '▾ 为什么';
      const li = box.closest('li');
      li.classList.toggle('open', open);
      if (open) wireSay(box);
      // Collapsing from the bottom leaves the reader looking at whatever slid up into
      // that spot; bring the step they were reading back under the cursor.
      if (!open) li.scrollIntoView({ block: 'nearest' });
    }

    // The whole claim toggles, not just the label — a folded block should open where
    // you are already looking. Guarded so that selecting the text does not open it.
    pane.querySelectorAll('.min-claim').forEach((c) => {
      const go = (e) => {
        if (String(window.getSelection() || '').length) return;
        e.preventDefault(); e.stopPropagation();
        setOpen(c.dataset.more, $('#mf-' + c.dataset.more).hidden);
      };
      c.addEventListener('click', go);
      c.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') go(e);
      });
    });
    pane.querySelectorAll('.min-close').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        setOpen(b.dataset.close, false);
      }));
    const collapseAll = $('#min-collapse');
    if (collapseAll) collapseAll.addEventListener('click', () => {
      pane.querySelectorAll('.min-full').forEach((box) =>
        setOpen(box.id.replace('mf-', ''), false));
      pane.scrollIntoView({ block: 'start' });
    });
    pane.querySelectorAll('.see-link[data-goto]:not([data-goto=""])').forEach((a) =>
      a.addEventListener('click', (e) => { e.preventDefault(); open(a.dataset.goto); }));
  }

  /* --------------------------------------------------------------- 主线 render */
  function renderStudy() {
    const n = NODES.find((x) => x.id === state.id);
    const pane = $('#panel-study');
    if (!n) {
      pane.innerHTML = '<div class="empty-state"><h2>速通简洁版</h2>'
        + '<p>每个小节一条主线，一步一个结论，按顺序读下来。</p></div>';
      return;
    }
    const sp = spineOf(n);
    /* A merged topic names every section it covers —
       so unifying the two books never hides which page a claim came from. */
    const family = isMerged(n)
      ? sectionNodes().filter((x) => x.topicKey === n.topicKey)
      : [n];

    let html = '<article class="topic"><div class="topic-head"><div class="th-meta">'
      + (isMerged(n)
          ? '<span class="book-pill is-merged">两书合并 · merged</span>'
            + family.map((x) => '<span class="th-secref"'
                + ' title="' + esc(x.enTitle || '') + '">'
                + esc(x.section) + '</span>').join('')
          /* Was 'Czech textbook' / 'Lehninger 8' — the parent app's two sources,
             neither of which this app reads. Name the book this node was actually
             transcribed from. */
          : '<span class="book-pill">'
            + esc((n.src && n.src.book) || '') + '</span>'
            + '<span class="th-sec">' + esc(n.section) + '</span>')
      + '</div>'
      + '<h1 class="th-en">' + mdBold(titleOf(n, 'en')) + ' ' + sayBtn(titleOf(n, 'en'), 'en-US') + '</h1>'
      + '<p class="th-cn">' + mdBold(titleOf(n, 'cn')) + '</p></div>';

    if (!sp) {
      html += '<div class="no-spine-note"><p><strong>这一节的主线还没写。</strong></p>'
        + '<p class="muted">源书：' + esc(n.src ? n.src.book : '') + '　§' + esc(String(n.section))
        + '　印刷页 ' + esc(n.src ? n.src.pages : '?') + '。</p></div>';
      pane.innerHTML = html + '</article>';
      wireSay(pane);
      return;
    }

    if (state.mode === 'quiz') { renderQuiz(n, sp, html); return; }
    if (state.mode === 'min')  { renderMinimal(n, sp, html); return; }

    html += '<section class="block"><h2>' + mdBold(sp.title_en)
          + ' <span class="muted">' + mdBold(sp.title_cn || '') + '</span></h2><ol class="chain">';
    let hidden = 0;
    (sp.steps || []).forEach((s, i) => {
      const k = n.id + ':s' + i, m = markOf(k);
      if (state.onlyMarked && !m) { hidden++; return; }

      /* The connector between two steps. Written only where one step genuinely
         forces the next — "所以", "但是", "另一面". Where there is no real link it
         is omitted and the arrow means nothing more than "next", because a
         connective invented to make a list look like an argument is worse than a
         list: it tells the reader a causal claim that is not there. */
      const link = state.lang === 'cn' ? (s.link_cn || s.link_en)
                 : (s.link_en || s.link_cn);
      if (i > 0 && link) {
        html += '<li class="ch-link"><span>' + esc(link) + '</span></li>';
      }

      html += '<li' + (m ? ' class="hl-' + m + '"' : '') + '>'
        + '<span class="ch-en">' + (state.lang === 'cn' ? '' : mdBold(s.en))
        + (s.src ? '<span class="ch-src">' + esc(s.src) + '</span>' : '') + '</span>'
        + (state.lang === 'en' ? '' : '<span class="ch-cn">' + mdBold(s.cn || '') + '</span>')
        /* Detail that is standard and examinable but NOT on the pages this node
           cites is marked, never passed off as sourced. */
        + (s.beyond ? '<span class="beyond-flag" title="' + esc(s.beyondNote || '')
            + '">补充 · not on the cited pages</span>' : '')
        /* A question the subject has not settled, said plainly instead of being
           answered anyway. "为什么内含子会存在" has no agreed answer, and inventing
           one would be the worst kind of thing this app could do. */
        + (recallOf(s) ? '<span class="ch-recall">↑ ' + esc(recallOf(s)) + '</span>' : '')
        + (openOf(s) ? '<span class="ch-open">? ' + esc(openOf(s)) + '</span>' : '')
        + seeHtml(s)
        + '<span class="step-tools">' + sayPairBtn(s.en, s.cn) + markBtn(k) + '</span>'
        + '</li>';
    });
    html += '</ol>';
    if (hidden) html += '<p class="muted only-marked-note">只看星标：隐藏了 ' + hidden + ' 步</p>';
    html += '</section>';

    if (sp.terms && sp.terms.length) {
      html += '<section class="block"><h2>用到的词 <span class="muted">terms used above</span></h2>'
            + '<div class="term-grid">';
      sp.terms.forEach((t) => {
        const k = n.id + '::' + (t.en || t.cn), m = markOf(k);
        if (state.onlyMarked && !m) return;
        html += '<div class="term' + (m ? ' hl-' + m : '') + '">'
          + '<div class="term-en">' + mdBold(t.en) + ' ' + sayBtn(t.en, 'en-US') + ' ' + markBtn(k) + '</div>'
          + '<div class="term-cn">' + mdBold(t.cn || '') + '</div>'
          + '<div class="term-def">' + bi(t.def_en, t.def_cn) + '</div></div>';
      });
      html += '</div></section>';
    }

    html += srcLabel(n);
    pane.innerHTML = html + '</article>';
    wireSay(pane); wireMarks(pane);
    // A "详见" pointing at a node that has its own spine stays in this app.
    pane.querySelectorAll('.see-link[data-goto]:not([data-goto=""])').forEach((a) =>
      a.addEventListener('click', (e) => { e.preventDefault(); open(a.dataset.goto); }));
  }

  /* -------------------------------------------------------------------- 题目 */
  let quizState = null;

  /* A merged topic draws questions from EVERY section it covers, not just the one it
     happens to be keyed on. The question bank is keyed by node id, so enzyme-kinetics
     — six nodes merged into one — was showing only the lead node's eight and silently
     dropping the other five nodes' questions. Reported by the agent that did the merge;
     the bank did not need re-keying, only pooling. */
  function questionsFor(n) {
    if (!isMerged(n)) return QUIZ[n.id] || [];
    const seen = new Set(), out = [];
    sectionNodes().filter((x) => x.topicKey === n.topicKey).forEach((x) => {
      (QUIZ[x.id] || []).forEach((q) => {
        const k = (q.q_en || '') + '|' + (q.q_cn || '');
        if (seen.has(k)) return;          // the two books can ask the same thing
        seen.add(k);
        out.push(q);
      });
    });
    return out;
  }

  function renderQuiz(n, sp, head) {
    const pane = $('#panel-study');
    const qs = questionsFor(n);
    if (!qs.length) {
      pane.innerHTML = head + '<div class="no-spine-note"><p><strong>这一节还没有题目。</strong></p>'
        + srcLabel(n) + '</div></article>';
      wireSay(pane);
      return;
    }
    if (!quizState || quizState.id !== n.id) {
      quizState = { id: n.id, i: 0, answered: null, right: 0 };
    }
    const q = qs[quizState.i];
    let html = head + '<section class="block"><h2>题目 <span class="muted">'
      + (quizState.i + 1) + ' / ' + qs.length + '</span></h2>';
    html += '<div class="q-text">' + bi(q.q_en, q.q_cn) + ' ' + sayPairBtn(q.q_en, q.q_cn) + '</div>';
    html += '<ol class="opts">';
    (q.options || []).forEach((opt, i) => {
      let cls = '';
      if (quizState.answered !== null) {
        if (i === q.answer) cls = ' right';
        else if (i === quizState.answered) cls = ' wrong';
      }
      html += '<li><button class="opt' + cls + '" data-i="' + i + '">'
            + '<span class="opt-letter">' + 'ABCD'[i] + '</span>'
            + '<span class="opt-text">' + mdBold(opt) + '</span></button></li>';
    });
    html += '</ol>';
    if (quizState.answered !== null) {
      html += '<div class="why">' + bi(q.why_en, q.why_cn) + '</div>';
      html += '<div class="q-nav"><button class="btn-primary" id="q-next">'
            + (quizState.i + 1 < qs.length ? '下一题 →' : '重来 ↺') + '</button></div>';
    }
    html += '</section></article>';
    pane.innerHTML = html;
    wireSay(pane);
    pane.querySelectorAll('.opt').forEach((b) =>
      b.addEventListener('click', () => {
        if (quizState.answered !== null) return;
        quizState.answered = Number(b.dataset.i);
        if (quizState.answered === q.answer) quizState.right++;
        renderStudy();
      }));
    const nx = $('#q-next');
    if (nx) nx.addEventListener('click', () => {
      if (quizState.i + 1 < qs.length) { quizState.i++; quizState.answered = null; }
      else { quizState = { id: n.id, i: 0, answered: null, right: 0 }; }
      renderStudy();
    });
  }

  /* -------------------------------------------------------------------- shell */
  function open(id) {
    state.id = id;
    store.set('last', id);
    quizState = null;
    renderSidebar(); renderStudy();
    $('.content').scrollTop = 0;
    if (window.matchMedia('(max-width: 900px)').matches) $('#sidebar').classList.remove('open');
  }

  function applyLang() {
    document.documentElement.setAttribute('data-lang', state.lang);
    $$('#lang-toggle button').forEach((b) =>
      b.classList.toggle('active', b.dataset.lang === state.lang));
  }
  function applyMode() {
    $$('#mode-toggle button').forEach((b) =>
      b.classList.toggle('active', b.dataset.mode === state.mode));
  }
  function applyTheme() { document.documentElement.setAttribute('data-theme', state.theme); }
  function applyPens() {
    $('#pen-row').innerHTML = PENS.map((p) =>
      '<button class="pen' + (p.id === state.pen ? ' active' : '') + '" data-pen="' + p.id
      + '" style="background:' + p.hex + '" title="新星标用这个颜色"></button>').join('');
    $$('#pen-row .pen').forEach((b) => b.addEventListener('click', () => {
      state.pen = b.dataset.pen; store.set('pen', state.pen); applyPens();
    }));
  }

  function init() {
    applyTheme(); applyLang(); applyMode(); applyPens();

    $('#lang-toggle').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      state.lang = b.dataset.lang; store.set('lang', state.lang);
      applyLang(); renderSidebar(); renderStudy();
    });
    $('#mode-toggle').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      state.mode = b.dataset.mode;
      store.set('mode', state.mode);
      applyMode(); renderStudy();
    });
    $('#theme-toggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      store.set('theme', state.theme); applyTheme();
    });
    $('#only-marked').addEventListener('click', () => {
      state.onlyMarked = !state.onlyMarked;
      store.set('onlyMarked', state.onlyMarked);
      $('#only-marked').classList.toggle('on', state.onlyMarked);
      renderStudy();
    });
    $('#only-marked').classList.toggle('on', state.onlyMarked);
    $('#menu-toggle').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
    $('#search').addEventListener('input', (e) => {
      state.filter = e.target.value.trim().toLowerCase(); renderSidebar();
    });
    wireVoicePanel();

    const last = store.get('last', null);
    const first = groups().flatMap((g) => g.members).find(hasSpine);
    state.id = (last && NODES.some((n) => n.id === last)) ? last : (first ? first.id : null);
    renderSidebar(); renderStudy();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
