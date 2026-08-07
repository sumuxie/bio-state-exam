/* =========================================================================
   Biochemie — state exam trainer
   All content comes from window.BIOCHEM.topics (data/ch*.js). Nothing in
   this file hardcodes subject matter; add a topic to the data and every
   mode — study, flashcards, quiz, oral — picks it up automatically.
   ========================================================================= */

(function () {
  'use strict';

  const TOPICS = (window.BIOCHEM && window.BIOCHEM.topics) || [];

  /* Chapter numbering is BOOK-LOCAL: chapter 3 is Enzymy in the Czech textbook and
     Amino Acids, Peptides, and Proteins in Lehninger. Keying this map on the number
     alone filed every Lehninger node under a Czech chapter name, and any node with
     chapter > 10 did not render at all. See HANDOFF_LEHNINGER.md section 13b. */
  const BOOK_TITLES = {
    cz:        { short: 'CZ',  en: 'Czech textbook',  cn: '捷克教材' },
    lehninger: { short: 'LEH', en: 'Lehninger 8',     cn: 'Lehninger 第8版' }
  };

  const CHAPTER_TITLES = {
    cz: {
      1: { cz: 'Obecné zákonitosti živých soustav', en: 'General principles of living systems', cn: '生命系统的普遍规律' },
      2: { cz: 'Aminokyseliny a proteiny',          en: 'Amino acids and proteins',            cn: '氨基酸与蛋白质' },
      3: { cz: 'Enzymy',                            en: 'Enzymes',                             cn: '酶' },
      4: { cz: 'Nukleové kyseliny a proteosyntéza',  en: 'Nucleic acids and protein synthesis', cn: '核酸与蛋白质合成' },
      5: { cz: 'Další metabolismus proteinů a vzájemné přeměny aminokyselin', en: 'Further protein metabolism and amino acid interconversions', cn: '蛋白质代谢续篇与氨基酸互变' },
      6: { cz: 'Bioenergetika', en: 'Bioenergetics', cn: '生物能学' },
      7: { cz: 'Sacharidy', en: 'Carbohydrates', cn: '糖类' },
      8: { cz: 'Lipidy', en: 'Lipids', cn: '脂质' },
      9: { cz: 'Fotosyntéza a další biosyntetické pochody fotoautotrofů', en: 'Photosynthesis and other biosynthetic processes of photoautotrophs', cn: '光合作用与光合自养生物的其他生物合成过程' },
      10: { cz: 'Vzájemné vztahy v intermediárním metabolismu a regulační mechanismy', en: 'Interrelationships in intermediary metabolism and regulatory mechanisms', cn: '中间代谢的相互关系与调节机制' }
    },
    /* Lehninger 8th ed. Titles are the book's own; `cz` here holds the Czech chapter
       this depth material most often attaches to, so the sidebar still reads in the
       language priority set by HANDOFF.md section 2. Only chapters that actually have
       nodes need an entry, but the whole list is kept so a new node never lands in an
       undefined slot -- that was the crash mode being fixed. */
    lehninger: {
      1:  { cz: '—', en: 'The Foundations of Biochemistry',            cn: '生物化学基础' },
      2:  { cz: '—', en: 'Water, the Solvent of Life',                  cn: '水——生命的溶剂' },
      3:  { cz: 'Aminokyseliny a proteiny', en: 'Amino Acids, Peptides, and Proteins', cn: '氨基酸、肽与蛋白质' },
      4:  { cz: '—', en: 'The Three-Dimensional Structure of Proteins', cn: '蛋白质的三维结构' },
      5:  { cz: '—', en: 'Protein Function',                            cn: '蛋白质的功能' },
      6:  { cz: 'Enzymy', en: 'Enzymes',                                cn: '酶' },
      7:  { cz: 'Sacharidy', en: 'Carbohydrates and Glycobiology',      cn: '糖类与糖生物学' },
      8:  { cz: '—', en: 'Nucleotides and Nucleic Acids',               cn: '核苷酸与核酸' },
      9:  { cz: '—', en: 'DNA-Based Information Technologies',          cn: 'DNA 信息技术' },
      10: { cz: 'Lipidy', en: 'Lipids',                                 cn: '脂质' },
      11: { cz: '—', en: 'Biological Membranes and Transport',          cn: '生物膜与运输' },
      12: { cz: '—', en: 'Biochemical Signaling',                       cn: '生化信号转导' },
      13: { cz: 'Bioenergetika', en: 'Introduction to Metabolism',      cn: '代谢导论' },
      14: { cz: '—', en: 'Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway', cn: '糖酵解、糖异生与磷酸戊糖途径' },
      15: { cz: '—', en: 'The Metabolism of Glycogen in Animals',       cn: '动物糖原代谢' },
      16: { cz: '—', en: 'The Citric Acid Cycle',                       cn: '柠檬酸循环' },
      17: { cz: '—', en: 'Fatty Acid Catabolism',                       cn: '脂肪酸分解代谢' },
      18: { cz: '—', en: 'Amino Acid Oxidation and the Production of Urea', cn: '氨基酸氧化与尿素生成' },
      19: { cz: '—', en: 'Oxidative Phosphorylation',                   cn: '氧化磷酸化' },
      20: { cz: '—', en: 'Photosynthesis and Carbohydrate Synthesis in Plants', cn: '光合作用与植物糖类合成' },
      21: { cz: '—', en: 'Lipid Biosynthesis',                          cn: '脂质生物合成' },
      22: { cz: '—', en: 'Biosynthesis of Amino Acids, Nucleotides, and Related Molecules', cn: '氨基酸、核苷酸及相关分子的生物合成' },
      23: { cz: '—', en: 'Hormonal Regulation and Integration of Mammalian Metabolism', cn: '激素调节与哺乳动物代谢整合' },
      24: { cz: '—', en: 'Genes and Chromosomes',                       cn: '基因与染色体' },
      25: { cz: '—', en: 'DNA Metabolism',                              cn: 'DNA 代谢' },
      26: { cz: '—', en: 'RNA Metabolism',                              cn: 'RNA 代谢' },
      27: { cz: '—', en: 'Protein Metabolism',                          cn: '蛋白质代谢' },
      28: { cz: '—', en: 'Regulation of Gene Expression',               cn: '基因表达调控' }
    }
  };

  /* A node with no `book` is Czech -- that is the pre-migration default and it keeps
     biochemie_basic's data working unchanged if this file is ever shared back. */
  function bookOf(t) { return t.book || 'cz'; }

  /* Integration cards (kind: "entity") gather one entity from wherever it is scattered,
     so they belong to no book and no chapter. They get their own sidebar group rather
     than being forced into one. HANDOFF_LEHNINGER.md sections 4 and 12a. */
  function isEntity(t) { return t.kind === 'entity'; }
  function entityCards() { return TOPICS.filter(isEntity); }
  function sectionNodes() { return TOPICS.filter((t) => !isEntity(t)); }

  /* Books in display order, but only those that actually have nodes, so the sidebar
     does not grow an empty "Lehninger 8" heading before any Lehninger node exists. */
  function booksPresent() {
    return ['cz', 'lehninger'].filter((b) => sectionNodes().some((t) => bookOf(t) === b));
  }

  /* Chapters present in one book, ascending. Derived from the data rather than a
     hardcoded [1..10], so chapter 22 or 25 appears the moment a node claims it. */
  function chaptersOf(book) {
    const seen = new Set();
    sectionNodes().forEach((t) => { if (bookOf(t) === book) seen.add(t.chapter); });
    return Array.from(seen).sort((a, b) => a - b);
  }

  function chapterInfo(book, ch) {
    const perBook = CHAPTER_TITLES[book] || {};
    return perBook[ch] || { cz: '—', en: 'Chapter ' + ch, cn: '第 ' + ch + ' 章' };
  }

  /* ---------------------------------------------------------------- topicKey */
  /* The join key. Nodes about the same thing share it regardless of which book they
     came from, which is the whole point of `pro` -- see HANDOFF_LEHNINGER.md section 4.
     A slug like "protein-primary-structure" is not readable in a sidebar, so a heading
     is built from the nodes themselves rather than kept in a second hand-maintained map
     that could drift out of sync with the data. */
  function topicKeyLabel(key, members) {
    const cz = members.filter((t) => bookOf(t) === 'cz' && !isEntity(t));
    const pick = cz[0] || members[0];
    if (!pick) return key;
    return state.lang === 'cn' ? (pick.cnTitle || key) : (pick.enTitle || key);
  }

  /* Groups in a stable, meaningful order: Czech book order first (that is the reading
     order the exam follows), then any key with no Czech node at all. */
  function topicGroups() {
    const groups = new Map();
    TOPICS.forEach((t) => {
      const k = t.topicKey;
      if (!k) return;
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(t);
    });
    const rank = (members) => {
      const cz = members.filter((t) => bookOf(t) === 'cz' && !isEntity(t));
      if (!cz.length) return [99, 99];
      const first = cz.reduce((a, b) => (secKey(a) <= secKey(b) ? a : b));
      return [first.chapter, 0, secKey(first)];
    };
    return Array.from(groups.entries())
      .map(([key, members]) => ({ key: key, members: members, rank: rank(members) }))
      .sort((a, b) => (a.rank[0] - b.rank[0]) || String(a.rank[2]).localeCompare(String(b.rank[2]), undefined, { numeric: true }));
  }

  // "7.11.2" sorts after "7.9" numerically, not lexically.
  function secKey(t) {
    return String(t.section || '').split('.').map((n) => String(n).padStart(3, '0')).join('.');
  }

  function sourceTag(t) {
    if (isEntity(t)) return { cls: 'src-entity', text: 'CARD' };
    if (bookOf(t) === 'lehninger') return { cls: 'src-lehninger', text: 'LEH' };
    return { cls: 'src-cz', text: 'CZ' };
  }

  /* The integration payoff shown where you would actually want it: while reading a Czech
     section, a link to the Lehninger node that goes deeper on the same thing, and to any
     integration card that gathers it. Renders nothing when the key is not shared, so a
     topic covered by one book only stays visually clean. */
  function sameTopicHtml(t) {
    if (!t.topicKey) return '';
    const others = TOPICS.filter((x) => x.topicKey === t.topicKey && x.id !== t.id);
    if (!others.length) return '';
    others.sort((a, b) => {
      const order = (x) => (isEntity(x) ? 2 : bookOf(x) === 'cz' ? 0 : 1);
      return (order(a) - order(b)) || String(secKey(a)).localeCompare(String(secKey(b)));
    });
    const items = others.map((x) => {
      const tag = sourceTag(x);
      const label = state.lang === 'cn' ? x.cnTitle : x.enTitle;
      return `<li><button class="link-btn same-topic-link" data-id="${esc(x.id)}">
                <span class="ti-src ${tag.cls}">${esc(tag.text)}</span>
                ${esc(label)}
              </button></li>`;
    }).join('');
    return `<div class="same-topic">
              <h3>Same topic <span class="muted">同一主题 · ${esc(t.topicKey)}</span></h3>
              <ul>${items}</ul>
            </div>`;
  }

  /* Cross-book warnings, rendered ON THE CZECH NODE because that is where the risk sits:
     the exam is on the Czech book, so a Czech section is what gets revised, and the
     Lehninger node carrying the correction may never be opened. Three kinds:

       conflict     the two books disagree, or Lehninger qualifies the Czech claim --
                    answering from the Czech section alone risks a wrong answer
       gap          the Czech book omits something load-bearing (e.g. carnitine)
       cz-stronger  the Czech book is the better source here, so seeing a simpler
                    formula in Lehninger is not a contradiction to worry about

     Deliberately RARE. This is not "there is more in Lehninger" -- the Same-topic strip
     already says that for every joined key. A warning that appears on every node is a
     warning nobody reads. See HANDOFF_LEHNINGER.md section 9f. */
  const LEH_NOTE_KIND = {
    conflict:      { cls: 'ln-conflict', en: 'Books disagree',      cn: '两书说法不同' },
    gap:           { cls: 'ln-gap',      en: 'Missing here',        cn: '捷克书未涉及' },
    'cz-stronger': { cls: 'ln-cz',       en: 'Czech is fuller here', cn: '此处捷克书更完整' }
  };

  function lehNotesHtml(t) {
    const notes = t.lehNotes || [];
    if (!notes.length) return '';
    const items = notes.map((n) => {
      const k = LEH_NOTE_KIND[n.kind] || LEH_NOTE_KIND.conflict;
      const target = n.node && TOPICS.some((x) => x.id === n.node);
      return `<li class="${k.cls}">
                <span class="ln-kind">${esc(k.en)} <span class="muted">${esc(k.cn)}</span></span>
                <div class="ln-body">${bi(n.en, n.cn)}</div>
                ${target
                  ? `<button class="link-btn ln-link" data-id="${esc(n.node)}">→ ${esc(n.node)}</button>`
                  : ''}
              </li>`;
    }).join('');
    return `<div class="leh-notes">
              <h3>⚠ Check against Lehninger <span class="muted">对照 Lehninger</span></h3>
              <ul>${items}</ul>
            </div>`;
  }

  /* ----------------------------------------------------------- persistence */
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem('biopro.' + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('biopro.' + key, JSON.stringify(value)); } catch (e) { /* private mode */ }
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
    filter:  '',
    nav:     store.get('nav', 'book'),    // 'book' = linear reading order, 'topic' = by topicKey
    qsrc:    store.get('qsrc', 'core'),   // 'core' | 'bank' | 'terms' -- see allQuestions()
    voice:   store.get('voice', {}),      // 'en' | 'zh' | 'cs' -> chosen voiceURI
    rate:    store.get('rate', 0.94)      // playback speed, shared by both languages
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

  /* Voice QUALITY, not just voice availability.
     The old version took the first voice whose language matched, which on a
     typical Windows machine is the legacy SAPI voice ("Microsoft David") --
     the flat robotic one -- while the far better neural voices sit further
     down the same list. Same story on Android. Ranking the list first is the
     single biggest audible improvement available here, and it costs nothing.

     There is a ceiling and it is worth stating plainly: this is the browser's
     own synthesiser. A genuinely human voice would need either recorded audio
     (230 nodes x 2 languages -- not feasible) or a cloud TTS service, and a
     cloud key cannot be used here because the repo is public and the site is
     static, so there is no backend to hide a key in. Ranking + letting the
     reader choose is the whole of what is achievable. */
  const VOICE_GOOD = /natural|neural|online|premium|enhanced|siri|google/i;
  const VOICE_POOR = /espeak|compact|david|zira|mark|huihui|kangkang|yaoyao/i;

  function voiceScore(v, lang) {
    let s = 0;
    if (v.lang === lang) s += 40;                       // exact locale
    else if (v.lang && v.lang.toLowerCase().startsWith(lang.split('-')[0].toLowerCase())) s += 20;
    if (VOICE_GOOD.test(v.name)) s += 30;               // neural / natural family
    if (VOICE_POOR.test(v.name)) s -= 25;               // legacy SAPI, espeak
    if (!v.localService) s += 5;                        // server voices are usually the better ones
    return s;
  }

  function voicesFor(lang) {
    const voices = (window.speechSynthesis.getVoices() || []);
    const short = lang.split('-')[0].toLowerCase();
    return voices
      .filter((v) => v.lang && v.lang.toLowerCase().startsWith(short))
      .sort((a, b) => voiceScore(b, lang) - voiceScore(a, lang));
  }

  function pickVoice(lang) {
    const list = voicesFor(lang);
    if (!list.length) return null;
    // An explicit choice always wins over the ranking -- the ranking is a
    // guess about which name sounds best, and the reader can hear.
    const chosen = state.voice[lang.split('-')[0].toLowerCase()];
    if (chosen) {
      const hit = list.find((v) => v.voiceURI === chosen || v.name === chosen);
      if (hit) return hit;
    }
    return list[0];
  }

  /* The picker. Two selects and a speed slider, filled from the ranked list
     so the recommended voice is already at the top and preselected. The
     device decides what is available -- on Windows Edge the Natural voices
     are present, on Chrome/Windows often only the legacy ones -- so the panel
     says what it found rather than pretending the choice is the same
     everywhere. */
  function labelVoice(v) {
    const tag = VOICE_GOOD.test(v.name) ? ' ★' : '';
    return `${v.name} (${v.lang})${tag}`;
  }

  function fillVoicePickers() {
    if (!speechAvailable) return;
    [['en', 'en-US', '#voice-en'], ['zh', 'zh-CN', '#voice-zh']].forEach(([short, lang, sel]) => {
      const el = $(sel);
      if (!el) return;
      const list = voicesFor(lang);
      if (!list.length) {
        el.innerHTML = `<option value="">no ${short} voice installed on this device</option>`;
        el.disabled = true;
        return;
      }
      el.disabled = false;
      const cur = state.voice[short];
      el.innerHTML = list.map((v) =>
        `<option value="${esc(v.voiceURI)}"${(v.voiceURI === cur) ? ' selected' : ''}>${esc(labelVoice(v))}</option>`
      ).join('');
      if (!cur) el.value = list[0].voiceURI;      // show what is actually being used
    });
    const r = $('#voice-rate');
    if (r) { r.value = state.rate; $('#voice-rate-val').textContent = Number(state.rate).toFixed(2) + '×'; }
  }

  const VOICE_SAMPLE = {
    'en-US': 'Histidine is the only amino acid whose side chain titrates near pH seven.',
    'zh-CN': '组氨酸是唯一一个侧链在中性附近解离的氨基酸。'
  };

  function wireVoicePanel() {
    const panel = $('#voice-panel'), toggle = $('#voice-toggle');
    if (!panel || !toggle) return;
    toggle.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) fillVoicePickers();
    });
    [['en', '#voice-en'], ['zh', '#voice-zh']].forEach(([short, sel]) => {
      const el = $(sel);
      if (!el) return;
      el.addEventListener('change', () => {
        state.voice[short] = el.value;
        store.set('voice', state.voice);
      });
    });
    $$('.vp-test').forEach((b) =>
      b.addEventListener('click', () => speak(VOICE_SAMPLE[b.dataset.lang], b.dataset.lang, null)));
    const r = $('#voice-rate');
    if (r) r.addEventListener('input', () => {
      state.rate = parseFloat(r.value);
      store.set('rate', state.rate);
      $('#voice-rate-val').textContent = state.rate.toFixed(2) + '×';
    });
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
      // Chinese is read a touch faster than English at the same nominal rate,
      // so the stored rate is the English one and Chinese gets a small bump.
      u.rate = (lang.startsWith('zh') ? 1.06 : 1) * state.rate;
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

  /* ------------------------------------------------------------- questions
     Three sources, cycled by one control in the Quiz tab (ported from PESB,
     HANDOFF_from_PESB_biochemie.md A6/A7):

       core   — `quiz`, hand-written per node. Always on.
       bank   — `bank`, hand-written extras. NO node carries one yet, so this
                level ships inert and simply equals `core` until data exists.
       terms  — generated at run time from the `terms` arrays.

     The generated set is deliberately NOT written into the data files. It
     would add ~1,200 items of boilerplate no human would edit, and it would
     go stale the moment a definition was reworded. Generating on load costs
     nothing and cannot drift. */
  const QSRC = ['core', 'bank', 'terms'];

  function allQuestions() {
    const out = [];
    const level = QSRC.indexOf(state.qsrc);
    TOPICS.forEach((t) => {
      (t.quiz || []).forEach((q) => out.push({ topic: t, q: q, core: true }));
      if (level >= 1) (t.bank || []).forEach((q) => out.push({ topic: t, q: q, core: false }));
    });
    if (level >= 2) out.push.apply(out, termQuestions());
    return out;
  }

  function bankCount() {
    return TOPICS.reduce((n, t) => n + ((t.bank && t.bank.length) || 0), 0);
  }

  /* One multiple-choice question per glossary term, alternating direction by
     index so the drill does not become a single mechanical pattern: even
     terms ask term -> definition, odd ones definition -> term.

     TWO DEPARTURES FROM PESB'S VERSION, both forced by this app's data model
     and both silent failures if skipped:

     1. Distractors are drawn from the same BOOK AND CHAPTER, not chapter
        alone. `chapter` here is book-local -- Czech ch7 is sugars, Lehninger
        ch7 is something else entirely (HANDOFF_LEHNINGER.md section 6) -- so
        bucketing on chapter alone would mix two unrelated subjects into one
        distractor pool and make the question easier than it looks.
     2. Entity cards have NO `chapter` and NO `section` by design (section
        12a). They get their own bucket keyed on `entity`, and the rationale
        line falls back to `enTitle` instead of printing `undefined`.

     A distractor from a different chapter is usually rejectable on topic
     alone, so the question would stop testing anything. Terms whose
     definition collides with the answer are skipped rather than used, or the
     question would have two defensible answers. */
  let termQuestionCache = null;

  function qBucket(t) {
    return isEntity(t) ? 'entity' : bookOf(t) + ':' + t.chapter;
  }

  function whereFrom(t) {
    return isEntity(t) ? t.enTitle : (t.section || '') + ' ' + (t.enTitle || '');
  }
  function whereFromCn(t) {
    return isEntity(t) ? (t.cnTitle || t.enTitle) : (t.section || '') + ' ' + (t.cnTitle || '');
  }

  function termQuestions() {
    if (termQuestionCache) return termQuestionCache;
    const byBucket = {};
    allCards().forEach((r) => {
      const k = qBucket(r.topic);
      (byBucket[k] = byBucket[k] || []).push(r);
    });

    const out = [];
    Object.keys(byBucket).forEach((k) => {
      const pool = byBucket[k];
      pool.forEach((r, i) => {
        const term = r.term;
        if (!term.en || !term.cn || !term.def_en || !term.def_cn) return;

        // Three distractors spread across the pool rather than taken from the
        // neighbours, which would cluster them all inside one topic.
        const others = [];
        for (let m = 1; others.length < 3 && m < pool.length; m++) {
          const cand = pool[(i + m * 7 + 1) % pool.length];
          if (cand === r) continue;
          if (!cand.term.en || !cand.term.def_en) continue;
          if (cand.term.def_en === term.def_en || cand.term.en === term.en) continue;
          if (others.some((o) => o.term.en === cand.term.en)) continue;
          others.push(cand);
        }
        if (others.length < 3) return;      // too small a pool to ask fairly

        const toDef = i % 2 === 0;
        const right = toDef ? term.def_en : term.en;
        const wrong = others.map((o) => (toDef ? o.term.def_en : o.term.en));
        const opts = shuffle([right].concat(wrong));

        out.push({
          topic: r.topic,
          core: false,
          generated: true,
          q: {
            type: 'mcq',
            q_en: toDef ? `Which definition matches “${term.en}”?`
                        : `Which term does this describe? “${term.def_en}”`,
            q_cn: toDef ? `以下哪一条定义对应「${term.cn}」？`
                        : `下面这段描述的是哪一个术语？「${term.def_cn}」`,
            options: opts,
            answer: opts.indexOf(right),
            why_en: `${term.en} — ${term.def_en} (${whereFrom(r.topic)})`,
            why_cn: `${term.cn}——${term.def_cn}（${whereFromCn(r.topic)}）`
          }
        });
      });
    });
    termQuestionCache = out;
    return out;
  }

  /* Scope selects share one shape: "all", "ch:BOOK:N", "book:BOOK" or a topic id.
     "ch:N" without a book is the old format and is still accepted -- a stored scope
     from before the two-book split must not silently select nothing. */
  function inScope(topic, scope) {
    if (!scope || scope === 'all') return true;
    if (scope.startsWith('book:')) return bookOf(topic) === scope.slice(5);
    if (scope.startsWith('ch:')) {
      const rest = scope.slice(3);
      const i = rest.lastIndexOf(':');
      if (i === -1) return String(topic.chapter) === rest;         // legacy "ch:7"
      return bookOf(topic) === rest.slice(0, i)
          && String(topic.chapter) === rest.slice(i + 1);
    }
    return topic.id === scope;
  }

  function fillScopeSelect(sel, allLabel) {
    let html = `<option value="all">${esc(allLabel)}</option>`;
    const books = booksPresent();
    books.forEach((book) => {
      const bt = BOOK_TITLES[book];
      // Only worth a whole-book option once there is more than one book to choose between.
      if (books.length > 1) {
        html += `<option value="book:${esc(book)}">${esc('All of ' + bt.en)}</option>`;
      }
      chaptersOf(book).forEach((ch) => {
        const list = sectionNodes().filter((t) => bookOf(t) === book && t.chapter === ch);
        if (!list.length) return;
        const label = (books.length > 1 ? bt.short + ' · ' : '')
                    + 'Ch. ' + ch + ' — ' + chapterInfo(book, ch).en;
        html += `<optgroup label="${esc(label)}">`;
        html += `<option value="ch:${esc(book)}:${ch}">${esc('Whole chapter ' + ch)}</option>`;
        list.forEach((t) => {
          html += `<option value="${esc(t.id)}">${esc(t.section + '  ' + t.enTitle)}</option>`;
        });
        html += `</optgroup>`;
      });
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

  function applyNav() {
    $$('#nav-toggle button').forEach((b) =>
      b.classList.toggle('active', b.dataset.nav === state.nav));
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

  function topicItemHtml(t, opts) {
    const done = state.studied.has(t.id);
    const label = state.lang === 'cn' ? t.cnTitle : t.enTitle;
    const lead = (opts && opts.showSource)
      ? `<span class="ti-src ${sourceTag(t).cls}">${esc(sourceTag(t).text)}</span>`
      : `<span class="ti-sec">${esc(isEntity(t) ? '◆' : t.section)}</span>`;
    return `<button class="topic-item${t.id === state.topicId ? ' current' : ''}" data-id="${esc(t.id)}">
              ${lead}
              <span class="ti-title">${esc(label)}</span>
              ${done ? '<span class="ti-done">✓</span>' : ''}
            </button>`;
  }

  /* Topic view: one heading per topicKey, every node about that thing beneath it
     regardless of book. This is the feature `pro` exists for (HANDOFF_LEHNINGER.md
     section 4) -- the book view stays for linear reading. */
  function renderSidebarByTopic(needle) {
    let html = '';
    let joined = 0;
    topicGroups().forEach((g) => {
      const members = g.members.filter((t) => topicMatches(t, needle));
      if (!members.length) return;
      members.sort((a, b) => {
        const order = (t) => (isEntity(t) ? 2 : bookOf(t) === 'cz' ? 0 : 1);
        return (order(a) - order(b)) || String(secKey(a)).localeCompare(String(secKey(b)));
      });
      const sources = new Set(members.map((t) => (isEntity(t) ? 'card' : bookOf(t))));
      const isJoined = sources.size > 1;
      if (isJoined) joined++;
      html += `<div class="tk-head${isJoined ? ' tk-joined' : ''}" title="${esc(g.key)}">
                 <span>${esc(topicKeyLabel(g.key, g.members))}</span>
                 <span class="tk-count">${members.length}</span>
               </div>`;
      members.forEach((t) => { html += topicItemHtml(t, { showSource: true }); });
    });
    return html;
  }

  function renderSidebar() {
    const needle = state.filter.trim().toLowerCase();
    let html = '';

    if (state.nav === 'topic') {
      html = renderSidebarByTopic(needle);
      if (!html) html = '<p class="no-results">No topic matches that search.</p>';
      $('#topic-list').innerHTML = html;
      wireTopicItems();
      return;
    }

    const books = booksPresent();
    books.forEach((book) => {
      const bookRows = sectionNodes().filter((t) => bookOf(t) === book && topicMatches(t, needle));
      if (!bookRows.length) return;

      // Only label the book when there is more than one, so the Czech-only view is
      // visually unchanged from how it has always looked.
      if (books.length > 1) {
        const bt = BOOK_TITLES[book];
        html += `<div class="book-head book-${esc(book)}">
                   <span class="book-name">${esc(bt.en)}</span>
                   <span class="book-cn">${esc(bt.cn)}</span>
                   <span class="book-count">${bookRows.length}</span>
                 </div>`;
      }

      chaptersOf(book).forEach((ch) => {
        const list = bookRows.filter((t) => t.chapter === ch);
        if (!list.length) return;
        const info = chapterInfo(book, ch);
        html += `<div class="chap-head">
                   <span class="chap-no">${ch}</span>
                   <span class="chap-cz">${esc(info.cz && info.cz !== '—' ? info.cz : info.en)}</span>
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
    });

    // Integration cards last: they are the synthesis, and they read better after the
    // sections they draw on. HANDOFF_LEHNINGER.md section 4.
    const cards = entityCards().filter((t) => topicMatches(t, needle));
    if (cards.length) {
      html += `<div class="book-head book-entity">
                 <span class="book-name">Integration cards</span>
                 <span class="book-cn">整合卡片</span>
                 <span class="book-count">${cards.length}</span>
               </div>`;
      cards.forEach((t) => {
        const done = state.studied.has(t.id);
        const label = state.lang === 'cn' ? t.cnTitle : t.enTitle;
        html += `<button class="topic-item${t.id === state.topicId ? ' current' : ''}" data-id="${esc(t.id)}">
                   <span class="ti-sec">◆</span>
                   <span class="ti-title">${esc(label)}</span>
                   ${done ? '<span class="ti-done">✓</span>' : ''}
                 </button>`;
      });
    }

    if (!html) html = '<p class="no-results">No topic matches that search.</p>';
    $('#topic-list').innerHTML = html;

    wireTopicItems();
  }

  function wireTopicItems() {
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
            ${isEntity(t)
              ? `<span class="book-pill is-entity">Integration card 整合卡片</span>`
              : `<span class="book-pill${bookOf(t) === 'cz' ? ' is-cz' : ''}">${esc(BOOK_TITLES[bookOf(t)].en)}</span>
                 <span class="th-sec">${esc(t.section)}</span>
                 <span class="badge ${cov.cls}">${esc(cov.text)}</span>
                 ${pages ? `<span class="badge badge-page">${esc(pages)}</span>` : ''}`}
            ${t.cnNote && t.cnNote.status === 'mapped'
              ? `<span class="badge badge-note">中文笔记 ${esc(t.cnNote.topic)}. ${esc(t.cnNote.title)}</span>`
              : (isEntity(t) ? '' : `<span class="badge badge-pending">中文笔记待对应</span>`)}
          </div>
          ${t.czTitle ? `<h1 class="th-cz">${esc(t.czTitle)} ${speakBtn(t.czTitle, 'cs-CZ')}</h1>` : ''}
          ${t.czTitle
            ? `<p class="th-en">${esc(t.enTitle)} ${speakBtn(t.enTitle, 'en-US')}</p>`
            : `<h1 class="th-en">${esc(t.enTitle)} ${speakBtn(t.enTitle, 'en-US')}</h1>`}
          <p class="th-cn">${esc(t.cnTitle)} ${speakBtn(t.cnTitle, 'zh-CN')}</p>
        </div>

        ${lehNotesHtml(t)}

        ${sameTopicHtml(t)}

        ${t.coverageNote ? `<p class="cov-note">${esc(t.coverageNote)}</p>` : ''}

        <section class="block">
          <h2>Summary <span class="muted">概要</span> ${speakPairBtn(t.summary && t.summary.en, t.summary && t.summary.cn)}</h2>
          <div class="summary">${bi(t.summary && t.summary.en, t.summary && t.summary.cn)}</div>
        </section>`;

    /* `chains` is entity-card-only: an ordered causal run, each step landing on something
       observable, per the organic-chemistry rule in HANDOFF_LEHNINGER.md section 5. */
    (t.chains || []).forEach((chain) => {
      html += `<section class="block">
                 <h2>${esc(chain.title_en)} <span class="muted">${esc(chain.title_cn || '')}</span></h2>
                 <ol class="chain">`;
      (chain.steps || []).forEach((s) => {
        html += `<li>
                   <span class="ch-en">${esc(s.en)}${s.src ? `<span class="ch-src">${esc(s.src)}</span>` : ''}</span>
                   <span class="ch-cn">${esc(s.cn || '')}</span>
                   ${speakPairBtn(s.en, s.cn)}
                 </li>`;
      });
      html += `</ol></section>`;
    });

    if (t.points && t.points.length) {
      html += `<section class="block"><h2>Point by point <span class="muted">逐条要点</span></h2><ol class="points">`;
      // A read button per point. `cz` deliberately gets none: it is a short
      // anchor term, not a sentence, and the exam is in English
      // (HANDOFF_LEHNINGER.md section 8, decision 2).
      t.points.forEach((p) => {
        html += `<li>${p.cz ? `<span class="cz-anchor">${esc(p.cz)}</span>` : ''}${bi(p.en, p.cn)} ${speakPairBtn(p.en, p.cn)}</li>`;
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

    body.querySelectorAll('.same-topic-link, .ln-link').forEach((b) => {
      b.addEventListener('click', () => {
        state.topicId = b.dataset.id;
        renderStudy();
        renderSidebar();
        $('.content').scrollTop = 0;
      });
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
  /* The label states the count each level reaches, so an inert level is
     visibly inert rather than looking broken. `bank` shows "no extras yet"
     until the first `bank` array is written. */
  function renderQuizSrc() {
    const btn = $('#quiz-src');
    if (!btn) return;
    const core = TOPICS.reduce((n, t) => n + ((t.quiz && t.quiz.length) || 0), 0);
    const bank = bankCount();
    const gen  = termQuestions().length;
    const label = { core: 'core', bank: 'core + bank', terms: 'core + bank + terms' }[state.qsrc];
    btn.textContent = label;
    const note = $('#quiz-src-note');
    if (!note) return;
    note.innerHTML =
      `Source: <strong>${esc(label)}</strong> — `
      + `core ${core}`
      + (bank ? ` · bank ${bank}` : ` · bank <em>no extras written yet</em>`)
      + ` · generated from glossary ${gen}`
      + `. Tap the source button to cycle.`;
  }

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
    applyNav();

    document.body.classList.toggle('bionic-on', state.bionic);
    $('#bionic-toggle').classList.toggle('active', state.bionic);

    // Voices load asynchronously in Chrome; warm the cache so the first
    // click on a speaker icon already has a matching voice to pick from,
    // and refill the picker once the real list arrives.
    if (speechAvailable) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
        fillVoicePickers();
      };
      fillVoicePickers();
      wireVoicePanel();
    } else {
      const vt = $('#voice-toggle');
      if (vt) vt.hidden = true;
    }

    fillScopeSelect($('#card-scope'), 'All chapters');
    fillScopeSelect($('#quiz-scope'), 'All chapters');
    fillScopeSelect($('#oral-scope'), 'All chapters');

    $('#stat-terms').textContent = allCards().length;
    $('#stat-questions').textContent = allQuestions().length;

    /* Quiz source cycling (A6) + the generated term drill (A7). The button
       reports what each level actually yields, because "bank" is inert today
       -- no node carries a `bank` array -- and a control that silently does
       nothing reads as a bug. */
    renderQuizSrc();
    $('#quiz-src').addEventListener('click', () => {
      state.qsrc = QSRC[(QSRC.indexOf(state.qsrc) + 1) % QSRC.length];
      store.set('qsrc', state.qsrc);
      renderQuizSrc();
      $('#stat-questions').textContent = allQuestions().length;
    });

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

    $('#nav-toggle').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      state.nav = btn.dataset.nav;
      store.set('nav', state.nav);
      applyNav();
      renderSidebar();
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
