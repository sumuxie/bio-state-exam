/* =========================================================================
   Biochemie — state exam trainer
   All content comes from window.BIOCHEM.topics (data/ch*.js). Nothing in
   this file hardcodes subject matter; add a topic to the data and every
   mode — study, flashcards, quiz, oral — picks it up automatically.
   ========================================================================= */

(function () {
  'use strict';

  const TOPICS = (window.BIOCHEM && window.BIOCHEM.topics) || [];

  const CHAPTER_TITLES = {
    1: { cz: 'Obecné zákonitosti živých soustav', en: 'General principles of living systems', cn: '生命系统的普遍规律' },
    2: { cz: 'Aminokyseliny a proteiny',          en: 'Amino acids and proteins',            cn: '氨基酸与蛋白质' },
    3: { cz: 'Enzymy',                            en: 'Enzymes',                             cn: '酶' },
    4: { cz: 'Nukleové kyseliny a proteosyntéza',  en: 'Nucleic acids and protein synthesis', cn: '核酸与蛋白质合成' },
    5: { cz: 'Další metabolismus proteinů a vzájemné přeměny aminokyselin', en: 'Further protein metabolism and amino acid interconversions', cn: '蛋白质代谢续篇与氨基酸互变' },
    6: { cz: 'Bioenergetika', en: 'Bioenergetics', cn: '生物能学' },
    7: { cz: 'Sacharidy', en: 'Carbohydrates', cn: '糖类' }
  };

  /* ----------------------------------------------------------- persistence */
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem('bio.' + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('bio.' + key, JSON.stringify(value)); } catch (e) { /* private mode */ }
    }
  };

  const state = {
    lang:    store.get('lang', 'both'),
    theme:   store.get('theme', 'dark'),
    bionic:  store.get('bionic', false),
    studied: new Set(store.get('studied', [])),
    boxes:   store.get('boxes', {}),      // cardKey -> Leitner box 1..5
    scores:  store.get('scores', {}),     // topicId -> {correct,total}
    topicId: null,
    filter:  ''
  };

  /* ---------------------------------------------------------------- helpers */
  const $  = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // Renders an EN/CN pair honouring the current language setting.
  function bi(en, cn, cls) {
    const c = cls ? ' ' + cls : '';
    let out = '';
    if (state.lang !== 'cn' && en) out += `<div class="t-en${c}">${esc(en)}</div>`;
    if (state.lang !== 'en' && cn) out += `<div class="t-cn${c}">${esc(cn)}</div>`;
    return out;
  }

  // ---------------------------------------------------------- pronunciation
  // Browser-synthesised speech (Web Speech API) — NOT a recorded human
  // voice. A static site with no backend has no way to host real audio for
  // 150+ terms across three languages; this is the pragmatic substitute.
  // Modern Chrome/Edge/Safari voices are serviceable for pronunciation
  // checking, but they are synthesis, not a recording — said plainly so
  // nobody mistakes one for the other.
  const speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window;
  let activeSayBtn = null;

  function pickVoice(lang) {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    const short = lang.split('-')[0].toLowerCase();
    return voices.find((v) => v.lang === lang) ||
           voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(short)) ||
           null;
  }

  // Chrome silently cuts off a single very long utterance after a few
  // seconds; queued short utterances play through in full, so long text is
  // always split on sentence boundaries first.
  function speak(text, lang, btn) {
    if (!speechAvailable || !text) return;
    // Clicking the button that is already speaking cancels it. cancel() does
    // not reliably fire onend in every browser, so the visual state is
    // cleared here explicitly rather than left to depend on that event.
    if (btn && btn === activeSayBtn) {
      window.speechSynthesis.cancel();
      btn.classList.remove('speaking');
      activeSayBtn = null;
      return;
    }
    window.speechSynthesis.cancel();
    if (activeSayBtn) { activeSayBtn.classList.remove('speaking'); activeSayBtn = null; }

    const chunks = (String(text).match(/[^.!?。！？]+[.!?。！？]*/g) || [String(text)])
      .map((c) => c.trim()).filter(Boolean);
    if (!chunks.length) return;

    const clearActive = () => { if (btn) btn.classList.remove('speaking'); if (activeSayBtn === btn) activeSayBtn = null; };

    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = lang;
      u.rate = lang.startsWith('zh') ? 1.0 : 0.94;
      const v = pickVoice(lang);
      if (v) u.voice = v;
      if (i === 0) u.onstart = () => { if (btn) { btn.classList.add('speaking'); activeSayBtn = btn; } };
      if (i === chunks.length - 1) { u.onend = clearActive; u.onerror = clearActive; }
      window.speechSynthesis.speak(u);
    });
  }

  function speakBtn(text, lang) {
    if (!speechAvailable || !text) return '';
    return `<button type="button" class="say-btn" data-say="${esc(text)}" data-lang="${lang}"
              aria-label="Pronounce" title="Pronounce (synthesised speech, not a recording)">🔊</button>`;
  }

  // Speaks whichever language is currently on screen.
  function speakPairBtn(en, cn) {
    if (state.lang === 'cn') return speakBtn(cn || en, cn ? 'zh-CN' : 'en-US');
    return speakBtn(en || cn, en ? 'en-US' : 'zh-CN');
  }

  // A click on a .say-btn must not also flip a flashcard or toggle a
  // <details> it happens to sit inside — stopPropagation/preventDefault
  // handle both, mirroring how every other button in this file gets its
  // listener rebound after each render rather than delegated globally.
  function wireSayButtons(root) {
    if (!root) return;
    // Some render paths (e.g. answering a quiz question) rewire the same
    // container without rebuilding every node in it, so a button that
    // survived from the previous pass must not get a second listener.
    root.querySelectorAll('.say-btn:not([data-wired])').forEach((btn) => {
      btn.dataset.wired = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        speak(btn.dataset.say, btn.dataset.lang, btn);
      });
    });
  }

  // ---------------------------------------------------------- bionic reading
  // Bolds the leading fraction of each Latin-script word so the eye can
  // "complete" the rest — a well-known reading-speed aid for ADHD/dyslexic
  // readers. Applied only to Latin script; Chinese is left untouched since
  // the technique doesn't transfer to a logographic script.
  const BIONIC_SKIP_CLASSES = ['badge', 'th-sec', 'q-meta', 'fc-tag', 'opt-key', 'kw', 'ma-label', 'cz-anchor', 'ti-sec'];

  function bionicApply(root) {
    if (!root || !document.createTreeWalker) return;
    const skipTags = new Set(['SCRIPT', 'STYLE', 'BUTTON', 'SELECT', 'OPTION', 'TEXTAREA', 'INPUT']);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        let el = node.parentElement;
        while (el) {
          if (skipTags.has(el.tagName)) return NodeFilter.FILTER_REJECT;
          if (el.classList && BIONIC_SKIP_CLASSES.some((c) => el.classList.contains(c))) return NodeFilter.FILTER_REJECT;
          if (el === root) break;
          el = el.parentElement;
        }
        return /\p{Script=Latin}/u.test(node.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach((node) => {
      const text = node.nodeValue;
      const re = /\p{Script=Latin}+/gu;
      let last = 0, m, any = false;
      const frag = document.createDocumentFragment();
      while ((m = re.exec(text))) {
        any = true;
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const w = m[0];
        const boldLen = w.length <= 1 ? 1 : Math.max(1, Math.round(w.length * 0.5));
        const b = document.createElement('b');
        b.className = 'bionic-b';
        b.textContent = w.slice(0, boldLen);
        frag.appendChild(b);
        frag.appendChild(document.createTextNode(w.slice(boldLen)));
        last = re.lastIndex;
      }
      if (!any) return;
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  // Unwrapping <b class="bionic-b"> is always a clean reverse of applying
  // it — no character was ever added or removed, so toggling off never
  // needs a fresh render.
  function bionicRemove(root) {
    if (!root) return;
    root.querySelectorAll('b.bionic-b').forEach((b) => {
      const parent = b.parentNode;
      while (b.firstChild) parent.insertBefore(b.firstChild, b);
      parent.removeChild(b);
      parent.normalize();
    });
  }

  // Called at the end of every render function so a fresh render always
  // reflects the current toggle state.
  function bionicRefresh() {
    ['#study-body', '#flashcard', '#qcard', '#quiz-result', '#oral-stage'].forEach((sel) => {
      const el = $(sel);
      if (!el) return;
      bionicRemove(el);
      if (state.bionic) bionicApply(el);
    });
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const topicById = (id) => TOPICS.find((t) => t.id === id);
  const cardKey = (topic, term) => topic.id + '::' + (term.cz || term.en);

  function allCards() {
    const out = [];
    TOPICS.forEach((t) => (t.terms || []).forEach((term) => out.push({ topic: t, term: term })));
    return out;
  }

  function allQuestions() {
    const out = [];
    TOPICS.forEach((t) => (t.quiz || []).forEach((q) => out.push({ topic: t, q: q })));
    return out;
  }

  // Scope selects share one shape: "all", "ch:N" or a topic id.
  function inScope(topic, scope) {
    if (!scope || scope === 'all') return true;
    if (scope.startsWith('ch:')) return String(topic.chapter) === scope.slice(3);
    return topic.id === scope;
  }

  function fillScopeSelect(sel, allLabel) {
    let html = `<option value="all">${esc(allLabel)}</option>`;
    [1, 2, 3, 4, 5, 6, 7].forEach((ch) => {
      const list = TOPICS.filter((t) => t.chapter === ch);
      if (!list.length) return;
      html += `<optgroup label="${esc('Ch. ' + ch + ' — ' + CHAPTER_TITLES[ch].en)}">`;
      html += `<option value="ch:${ch}">Whole chapter ${ch}</option>`;
      list.forEach((t) => {
        html += `<option value="${esc(t.id)}">${esc(t.section + '  ' + t.enTitle)}</option>`;
      });
      html += `</optgroup>`;
    });
    sel.innerHTML = html;
  }

  /* ------------------------------------------------------------- chrome/UI */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
  }

  function applyLang() {
    $$('#lang-toggle button').forEach((b) =>
      b.classList.toggle('active', b.dataset.lang === state.lang));
  }

  function setMode(mode) {
    $$('.mode-btn').forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
    $$('.panel').forEach((p) => p.classList.toggle('active', p.id === 'panel-' + mode));
    if (mode === 'cards') renderCard();
    if (mode === 'oral' && !$('#oral-stage').innerHTML.trim()) nextOral();
    closeSidebarOnMobile();
  }

  function closeSidebarOnMobile() {
    if (window.matchMedia('(max-width: 900px)').matches) {
      $('#sidebar').classList.remove('open');
      $('#scrim').classList.remove('show');
    }
  }

  /* --------------------------------------------------------------- sidebar */
  function topicMatches(t, needle) {
    if (!needle) return true;
    const hay = [
      t.section, t.czTitle, t.enTitle, t.cnTitle,
      (t.terms || []).map((x) => [x.cz, x.en, x.cn].join(' ')).join(' ')
    ].join(' ').toLowerCase();
    return hay.includes(needle);
  }

  function renderSidebar() {
    const needle = state.filter.trim().toLowerCase();
    let html = '';

    [1, 2, 3, 4, 5, 6, 7].forEach((ch) => {
      const list = TOPICS.filter((t) => t.chapter === ch && topicMatches(t, needle));
      if (!list.length) return;
      const info = CHAPTER_TITLES[ch];
      html += `<div class="chap-head">
                 <span class="chap-no">${ch}</span>
                 <span class="chap-cz">${esc(info.cz)}</span>
                 <span class="chap-cn">${esc(info.cn)}</span>
               </div>`;
      list.forEach((t) => {
        const done = state.studied.has(t.id);
        const label = state.lang === 'cn' ? t.cnTitle : t.enTitle;
        html += `<button class="topic-item${t.id === state.topicId ? ' current' : ''}" data-id="${esc(t.id)}">
                   <span class="ti-sec">${esc(t.section)}</span>
                   <span class="ti-title">${esc(label)}</span>
                   ${done ? '<span class="ti-done">✓</span>' : ''}
                 </button>`;
      });
    });

    if (!html) html = '<p class="no-results">No topic matches that search.</p>';
    $('#topic-list').innerHTML = html;

    $$('.topic-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.topicId = btn.dataset.id;
        setMode('study');
        renderStudy();
        renderSidebar();
        $('.content').scrollTop = 0;
      });
    });

    const pct = TOPICS.length ? Math.round((state.studied.size / TOPICS.length) * 100) : 0;
    $('#overall-progress').style.width = pct + '%';
    $('#progress-label').textContent = `${state.studied.size} / ${TOPICS.length} studied`;
  }

  /* ----------------------------------------------------------------- study */
  const COVERAGE_LABEL = {
    full:    { text: 'verified against scan', cls: 'cov-full' },
    partial: { text: 'partial — see note',    cls: 'cov-partial' }
  };

  function renderStudy() {
    const t = topicById(state.topicId);
    const body = $('#study-body');

    if (!t) {
      body.innerHTML = `
        <div class="welcome">
          <h1>Biochemie — Základní kurz</h1>
          <p class="lede">Chapters 1–3, paired section by section with the Czech textbook.
             Pick a topic on the left to begin.</p>
          <div class="welcome-grid">
            <div><strong>${TOPICS.length}</strong><span>topics</span></div>
            <div><strong>${allCards().length}</strong><span>glossary terms</span></div>
            <div><strong>${allQuestions().length}</strong><span>questions</span></div>
            <div><strong>${TOPICS.filter((x) => x.oral).length}</strong><span>oral answers</span></div>
          </div>
          <p class="welcome-note">Every section carries a coverage flag. <span class="badge cov-full">verified against scan</span>
             means the page images were read directly; <span class="badge cov-partial">partial</span> means some pages
             were missing from the extraction, and anything filled in from standard course material is marked
             <span class="badge badge-gap">not in scan</span> so you always know what came from the book.</p>
          <p class="welcome-note">🔊 A speaker icon next to a term plays browser-synthesised speech — not a recording — so
             you can check pronunciation. 🧬 <em>Bionic</em> in the top bar bolds the lead of each Latin-script word, a
             scanning aid some ADHD and dyslexic readers find helps them read faster; Chinese text is left alone since
             the technique doesn't transfer to a logographic script.</p>
        </div>`;
      bionicRefresh();
      return;
    }

    const cov = COVERAGE_LABEL[t.coverage] || COVERAGE_LABEL.partial;
    const pages = t.pages && t.pages.length
      ? (t.pages.length === 1 ? 'p. ' + t.pages[0] : 'pp. ' + t.pages[0] + '–' + t.pages[t.pages.length - 1])
      : '';

    let html = `
      <article class="topic">
        <div class="topic-head">
          <div class="th-meta">
            <span class="th-sec">${esc(t.section)}</span>
            <span class="badge ${cov.cls}">${esc(cov.text)}</span>
            ${pages ? `<span class="badge badge-page">${esc(pages)}</span>` : ''}
            ${t.cnNote && t.cnNote.status === 'mapped'
              ? `<span class="badge badge-note">中文笔记 ${esc(t.cnNote.topic)}. ${esc(t.cnNote.title)}</span>`
              : `<span class="badge badge-pending">中文笔记待对应</span>`}
          </div>
          <h1 class="th-cz">${esc(t.czTitle)} ${speakBtn(t.czTitle, 'cs-CZ')}</h1>
          <p class="th-en">${esc(t.enTitle)} ${speakBtn(t.enTitle, 'en-US')}</p>
          <p class="th-cn">${esc(t.cnTitle)} ${speakBtn(t.cnTitle, 'zh-CN')}</p>
        </div>

        ${t.coverageNote ? `<p class="cov-note">${esc(t.coverageNote)}</p>` : ''}

        <section class="block">
          <h2>Summary <span class="muted">概要</span> ${speakPairBtn(t.summary && t.summary.en, t.summary && t.summary.cn)}</h2>
          <div class="summary">${bi(t.summary && t.summary.en, t.summary && t.summary.cn)}</div>
        </section>`;

    if (t.points && t.points.length) {
      html += `<section class="block"><h2>Point by point <span class="muted">逐条要点</span></h2><ol class="points">`;
      t.points.forEach((p) => {
        html += `<li>${p.cz ? `<span class="cz-anchor">${esc(p.cz)}</span>` : ''}${bi(p.en, p.cn)}</li>`;
      });
      html += `</ol></section>`;
    }

    if (t.gapPoints && t.gapPoints.length) {
      html += `<section class="block block-gap">
                 <h2>Not in the extracted scan <span class="muted">扫描件缺页部分</span>
                     <span class="badge badge-gap">verify against the book</span></h2>
                 <p class="gap-warn">These pages were missing from the extraction, so the following is standard
                    course material rather than text read off this textbook. Check it against the printed pages.</p>
                 <ol class="points">`;
      t.gapPoints.forEach((p) => { html += `<li>${bi(p.en, p.cn)}</li>`; });
      html += `</ol></section>`;
    }

    if (t.terms && t.terms.length) {
      html += `<section class="block"><h2>Glossary <span class="muted">术语表</span></h2>
               <div class="term-grid">`;
      t.terms.forEach((term) => {
        html += `<div class="term">
                   <div class="term-en">${esc(term.en || '')} ${speakBtn(term.en, 'en-US')}</div>
                   <div class="term-cn">${esc(term.cn || '')} ${speakBtn(term.cn, 'zh-CN')}</div>
                   ${term.cz ? `<div><span class="cz-anchor">${esc(term.cz)}</span> ${speakBtn(term.cz, 'cs-CZ')}</div>` : ''}
                   <div class="term-def">${bi(term.def_en, term.def_cn)}</div>
                 </div>`;
      });
      html += `</div></section>`;
    }

    const sc = state.scores[t.id];
    html += `<section class="block topic-actions">
               <button class="btn-primary" data-act="quiz">✏️ Quiz this section${sc ? ` <span class="muted">(best ${sc.correct}/${sc.total})</span>` : ''}</button>
               <button class="btn-ghost" data-act="oral">🎙 Oral question</button>
               <button class="btn-ghost" data-act="studied">${state.studied.has(t.id) ? '✓ Studied' : 'Mark as studied'}</button>
             </section></article>`;

    body.innerHTML = html;

    body.querySelector('[data-act="quiz"]').addEventListener('click', () => {
      $('#quiz-scope').value = t.id;
      setMode('quiz');
      startQuiz();
    });
    body.querySelector('[data-act="oral"]').addEventListener('click', () => {
      $('#oral-scope').value = t.id;
      setMode('oral');
      nextOral();
    });
    body.querySelector('[data-act="studied"]').addEventListener('click', () => {
      if (state.studied.has(t.id)) state.studied.delete(t.id); else state.studied.add(t.id);
      store.set('studied', Array.from(state.studied));
      renderStudy();
      renderSidebar();
    });

    wireSayButtons(body);
    bionicRefresh();
  }

  /* ------------------------------------------------------------ flashcards */
  let cardQueue = [];
  let currentCard = null;

  function boxOf(c) { return state.boxes[cardKey(c.topic, c.term)] || 1; }

  function buildQueue() {
    const scope = $('#card-scope').value;
    const pool = allCards().filter((c) => inScope(c.topic, scope) && boxOf(c) < 5);
    // Lowest Leitner box first, shuffled within each box.
    const byBox = [1, 2, 3, 4].map((b) => shuffle(pool.filter((c) => boxOf(c) === b)));
    cardQueue = [].concat.apply([], byBox);
    currentCard = cardQueue.shift() || null;
  }

  function renderLeitner() {
    const scope = $('#card-scope').value;
    const pool = allCards().filter((c) => inScope(c.topic, scope));
    let html = '';
    for (let b = 1; b <= 5; b++) {
      const n = pool.filter((c) => boxOf(c) === b).length;
      html += `<div class="leitner-box${b === 5 ? ' mastered' : ''}">
                 <span class="lb-n">${n}</span><span class="lb-l">Box ${b}${b === 5 ? ' ✓' : ''}</span>
               </div>`;
    }
    $('#leitner-row').innerHTML = html;
  }

  function renderCard() {
    renderLeitner();
    if (!currentCard) buildQueue();

    const has = !!currentCard;
    $('#card-stage').hidden = !has;
    $('#card-empty').hidden = has;
    if (!has) return;

    const { topic, term } = currentCard;
    $('#flashcard').classList.remove('flipped');
    const tag = `${topic.section} · Box ${boxOf(currentCard)}`;
    $('#fc-tag').textContent = tag;
    $('#fc-tag-back').textContent = tag;
    $('#fc-front-term').innerHTML = `${esc(term.en || term.cz || '')} ${speakBtn(term.en || term.cz, 'en-US')}`;
    $('#fc-cz-ref').innerHTML = term.cz ? `<span class="cz-anchor">${esc(term.cz)}</span> ${speakBtn(term.cz, 'cs-CZ')}` : '';
    $('#fc-cn').innerHTML = `${esc(term.cn || '')} ${speakBtn(term.cn, 'zh-CN')}`;
    $('#fc-def').innerHTML = bi(term.def_en, term.def_cn);
    $('#card-counter').textContent = `${cardQueue.length} more in this round`;

    wireSayButtons($('#flashcard'));
    bionicRefresh();
  }

  function gradeCard(good) {
    if (!currentCard) return;
    const key = cardKey(currentCard.topic, currentCard.term);
    const box = state.boxes[key] || 1;
    state.boxes[key] = good ? Math.min(5, box + 1) : 1;
    store.set('boxes', state.boxes);
    if (!good) cardQueue.push(currentCard);        // missed cards come back this round
    currentCard = cardQueue.shift() || null;
    if (!currentCard) buildQueue();
    renderCard();
  }

  /* ------------------------------------------------------------------ quiz */
  let quizItems = [], quizIndex = 0, quizCorrect = 0, quizAnswered = false, quizWrong = [];

  function startQuiz() {
    const scope = $('#quiz-scope').value;
    quizItems = shuffle(allQuestions().filter((item) => inScope(item.topic, scope)));
    quizIndex = 0; quizCorrect = 0; quizWrong = [];
    $('#quiz-intro').hidden = true;
    $('#quiz-result').hidden = true;
    $('#quiz-stage').hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    if (quizIndex >= quizItems.length) return finishQuiz();
    quizAnswered = false;

    const { topic, q } = quizItems[quizIndex];
    $('#quiz-count').textContent = `${quizIndex + 1} / ${quizItems.length}`;
    $('#quiz-score').textContent = `${quizCorrect} correct`;
    $('#quiz-progress-bar').style.width = ((quizIndex / quizItems.length) * 100) + '%';

    let html = `<div class="q-meta">${esc(topic.section)} · ${esc(topic.enTitle)}</div>
                <div class="q-text">${bi(q.q_en, q.q_cn)} ${speakPairBtn(q.q_en, q.q_cn)}</div>`;

    if (q.type === 'mcq') {
      html += `<div class="options">`;
      q.options.forEach((opt, i) => {
        html += `<button class="option" data-i="${i}">
                   <span class="opt-key">${String.fromCharCode(65 + i)}</span>
                   <span class="opt-text">${esc(opt)}</span>
                 </button>`;
      });
      html += `</div>`;
    } else {
      html += `<textarea id="short-input" class="short-input" rows="4"
                 placeholder="Type your answer, then check it…"></textarea>
               <div class="short-actions"><button class="btn-primary" id="short-check">Check answer</button></div>`;
    }

    html += `<div class="feedback" id="feedback" hidden></div>
             <div class="q-nav"><button class="btn-primary" id="q-next" hidden>Next →</button></div>`;

    $('#qcard').innerHTML = html;

    if (q.type === 'mcq') {
      $$('#qcard .option').forEach((btn) =>
        btn.addEventListener('click', () => answerMcq(parseInt(btn.dataset.i, 10))));
    } else {
      $('#short-check').addEventListener('click', answerShort);
    }
    $('#q-next').addEventListener('click', () => { quizIndex++; renderQuestion(); });

    wireSayButtons($('#qcard'));
    bionicRefresh();
  }

  function revealNext() {
    $('#q-next').hidden = false;
    $('#q-next').textContent = quizIndex + 1 >= quizItems.length ? 'See results →' : 'Next →';
  }

  function answerMcq(choice) {
    if (quizAnswered) return;
    quizAnswered = true;
    const { topic, q } = quizItems[quizIndex];
    const ok = choice === q.answer;
    if (ok) quizCorrect++; else quizWrong.push({ topic, q });

    $$('#qcard .option').forEach((btn) => {
      const i = parseInt(btn.dataset.i, 10);
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === choice) btn.classList.add('wrong');
    });

    const fb = $('#feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.innerHTML = `<strong>${ok ? '✓ Correct' : '✕ Not quite'}</strong>${bi(q.why_en, q.why_cn)}`;
    $('#quiz-score').textContent = `${quizCorrect} correct`;
    revealNext();
    wireSayButtons($('#qcard'));
    bionicRefresh();
  }

  function answerShort() {
    if (quizAnswered) return;
    quizAnswered = true;
    const { topic, q } = quizItems[quizIndex];
    const typed = ($('#short-input').value || '').toLowerCase();
    const keys = q.accept || [];
    const hit = keys.filter((k) => typed.includes(String(k).toLowerCase()));
    const ok = keys.length ? hit.length >= Math.ceil(keys.length / 2) : false;
    if (ok) quizCorrect++; else quizWrong.push({ topic, q });

    const fb = $('#feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.innerHTML =
      `<strong>${ok ? '✓ Key terms covered' : '△ Some key terms missing'}</strong>
       <p class="kw-line">Matched ${hit.length} of ${keys.length} key terms:
         ${keys.map((k) => `<span class="kw${hit.includes(k) ? ' kw-hit' : ''}">${esc(k)}</span>`).join('')}</p>
       <div class="model-answer"><span class="ma-label">Model answer · 参考答案 ${speakPairBtn(q.answer_en, q.answer_cn)}</span>
         ${bi(q.answer_en, q.answer_cn)}</div>`;
    $('#quiz-score').textContent = `${quizCorrect} correct`;
    revealNext();
    wireSayButtons($('#qcard'));
    bionicRefresh();
  }

  function finishQuiz() {
    $('#quiz-stage').hidden = true;
    const total = quizItems.length;
    const pct = total ? Math.round((quizCorrect / total) * 100) : 0;

    const scope = $('#quiz-scope').value;
    if (!scope.startsWith('ch:') && scope !== 'all') {
      const prev = state.scores[scope];
      if (!prev || quizCorrect > prev.correct) {
        state.scores[scope] = { correct: quizCorrect, total: total };
        store.set('scores', state.scores);
      }
    }

    let html = `<h2>${pct}% <span class="muted">${quizCorrect} / ${total}</span></h2>`;
    if (quizWrong.length) {
      html += `<h3>Worth another look <span class="muted">需再复习</span></h3><ul class="review-list">`;
      quizWrong.forEach(({ topic, q }) => {
        html += `<li><button class="link-btn" data-id="${esc(topic.id)}">${esc(topic.section)}</button>
                 ${esc(q.q_en)}</li>`;
      });
      html += `</ul>`;
    } else if (total) {
      html += `<p>Clean sweep — every question correct. 全对。</p>`;
    }
    html += `<button class="btn-primary" id="quiz-again">Run it again</button>`;

    const box = $('#quiz-result');
    box.innerHTML = html;
    box.hidden = false;
    $('#quiz-again').addEventListener('click', startQuiz);
    box.querySelectorAll('.link-btn').forEach((b) =>
      b.addEventListener('click', () => {
        state.topicId = b.dataset.id;
        setMode('study'); renderStudy(); renderSidebar();
      }));
    renderSidebar();
    bionicRefresh();
  }

  /* ------------------------------------------------------------------ oral */
  let timerId = null, timerLeft = 120;

  function nextOral() {
    const scope = $('#oral-scope').value;
    const pool = TOPICS.filter((t) => t.oral && inScope(t, scope));
    if (!pool.length) { $('#oral-stage').innerHTML = '<p class="empty-state">No oral question in this scope.</p>'; return; }
    const t = pool[Math.floor(Math.random() * pool.length)];

    $('#oral-stage').innerHTML = `
      <article class="oral">
        <div class="q-meta">${esc(t.section)} · ${esc(t.czTitle)}</div>
        <div class="oral-q">${bi(t.oral.q_en, t.oral.q_cn)} ${speakPairBtn(t.oral.q_en, t.oral.q_cn)}</div>

        <div class="timer">
          <div class="timer-face" id="timer-face">02:00</div>
          <div class="timer-btns">
            <button class="btn-ghost" id="t-start">▶ Start</button>
            <button class="btn-ghost" id="t-pause">⏸ Pause</button>
            <button class="btn-ghost" id="t-reset">↺ Reset</button>
          </div>
        </div>

        <section class="block">
          <h2>Tick these off as you speak <span class="muted">口述要点自查</span></h2>
          <ul class="checklist">
            ${t.oral.checklist.map((c, i) =>
              `<li><label><input type="checkbox" data-i="${i}"><span>${esc(c)}</span></label></li>`).join('')}
          </ul>
          <div class="check-progress"><span id="check-count">0</span> / ${t.oral.checklist.length} covered</div>
        </section>

        <details class="model-details">
          <summary>Reveal the model answer · 查看范答 ${speakBtn(t.oral.model_en, 'en-US')}</summary>
          <div class="model-answer">${esc(t.oral.model_en)}</div>
        </details>
      </article>`;

    resetTimer();
    $('#t-start').addEventListener('click', startTimer);
    $('#t-pause').addEventListener('click', pauseTimer);
    $('#t-reset').addEventListener('click', resetTimer);
    $$('#oral-stage .checklist input').forEach((cb) =>
      cb.addEventListener('change', () => {
        $('#check-count').textContent = $$('#oral-stage .checklist input:checked').length;
      }));

    wireSayButtons($('#oral-stage'));
    bionicRefresh();
  }

  function paintTimer() {
    const m = String(Math.floor(timerLeft / 60)).padStart(2, '0');
    const s = String(timerLeft % 60).padStart(2, '0');
    const face = $('#timer-face');
    if (face) {
      face.textContent = `${m}:${s}`;
      face.classList.toggle('low', timerLeft <= 30);
    }
  }
  function startTimer() {
    if (timerId) return;
    timerId = setInterval(() => {
      timerLeft = Math.max(0, timerLeft - 1);
      paintTimer();
      if (timerLeft === 0) { clearInterval(timerId); timerId = null; }
    }, 1000);
  }
  function pauseTimer() { clearInterval(timerId); timerId = null; }
  function resetTimer() { pauseTimer(); timerLeft = 120; paintTimer(); }

  /* ------------------------------------------------------------------ init */
  function init() {
    if (!TOPICS.length) {
      document.body.innerHTML = '<p style="padding:2rem;font:16px system-ui">No topic data loaded — check that data/ch1.js, ch2.js and ch3.js are present.</p>';
      return;
    }

    applyTheme();
    applyLang();

    document.body.classList.toggle('bionic-on', state.bionic);
    $('#bionic-toggle').classList.toggle('active', state.bionic);

    // Voices load asynchronously in Chrome; warm the cache so the first
    // click on a speaker icon already has a matching voice to pick from.
    if (speechAvailable) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }

    fillScopeSelect($('#card-scope'), 'All chapters');
    fillScopeSelect($('#quiz-scope'), 'All chapters');
    fillScopeSelect($('#oral-scope'), 'All chapters');

    $('#stat-terms').textContent = allCards().length;
    $('#stat-questions').textContent = allQuestions().length;

    renderSidebar();
    renderStudy();

    $$('.mode-btn').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));

    $('#lang-toggle').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      state.lang = btn.dataset.lang;
      store.set('lang', state.lang);
      applyLang(); renderSidebar(); renderStudy();
      if (currentCard) renderCard();
    });

    $('#theme-toggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      store.set('theme', state.theme);
      applyTheme();
    });

    $('#bionic-toggle').addEventListener('click', () => {
      state.bionic = !state.bionic;
      store.set('bionic', state.bionic);
      document.body.classList.toggle('bionic-on', state.bionic);
      $('#bionic-toggle').classList.toggle('active', state.bionic);
      bionicRefresh();
    });

    $('#search').addEventListener('input', (e) => {
      state.filter = e.target.value;
      renderSidebar();
    });

    $('#menu-toggle').addEventListener('click', () => {
      $('#sidebar').classList.toggle('open');
      $('#scrim').classList.toggle('show');
    });
    $('#scrim').addEventListener('click', closeSidebarOnMobile);

    // Flashcards
    $('#flashcard').addEventListener('click', () => $('#flashcard').classList.toggle('flipped'));
    $('#card-hit').addEventListener('click', () => gradeCard(true));
    $('#card-miss').addEventListener('click', () => gradeCard(false));
    $('#card-scope').addEventListener('change', () => { buildQueue(); renderCard(); });
    $('#card-reset').addEventListener('click', () => {
      if (!confirm('Reset flashcard progress for every card?')) return;
      state.boxes = {}; store.set('boxes', state.boxes);
      buildQueue(); renderCard();
    });
    $('#card-restudy').addEventListener('click', () => {
      const scope = $('#card-scope').value;
      allCards().filter((c) => inScope(c.topic, scope))
        .forEach((c) => { state.boxes[cardKey(c.topic, c.term)] = 1; });
      store.set('boxes', state.boxes);
      buildQueue(); renderCard();
    });

    // Quiz + oral
    $('#quiz-start').addEventListener('click', startQuiz);
    $('#oral-next').addEventListener('click', nextOral);

    // Keyboard: space flips a card, 1/2 grade it.
    document.addEventListener('keydown', (e) => {
      if (!$('#panel-cards').classList.contains('active')) return;
      // A focused button (e.g. a speaker icon, or "Got it"/"Missed it")
      // should get its own native Space/Enter activation, not have it
      // hijacked into flipping the card.
      if (/^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(document.activeElement.tagName)) return;
      if (e.code === 'Space') { e.preventDefault(); $('#flashcard').classList.toggle('flipped'); }
      if (e.key === '1') gradeCard(false);
      if (e.key === '2') gradeCard(true);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
