/* =========================================================================
   Biochemie — state exam trainer
   All content comes from window.BIOCHEM.topics (data/ch*.js). Nothing in
   this file hardcodes subject matter; add a topic to the data and every
   mode — study, flashcards, quiz, oral — picks it up automatically.
   ========================================================================= */

(function () {
  'use strict';

  const TOPICS = (window.BIOCHEM && window.BIOCHEM.topics) || [];

  /* ------------------------------------------------------------- bank layer
     The second question source. Bank items live in their own `data/bank_*.js`
     files and attach to a node BY ID rather than being written inside it, so
     the calibrated `ch*.js` files -- each verified page by page against the
     book scans -- are never reopened just to append a question. A bank file is
     additive and can be deleted without leaving a mark on verified content.
     See BANK_SPEC.md.

     A key that matches no node is the failure mode this arrangement invites,
     and it is silent: the questions load, attach to nothing, and never appear.
     So orphans are collected here and reported in the Quiz tab rather than
     only in the console, per the project's no-silent-failure rule. */
  const BANK_ORPHANS = [];
  (function attachBank() {
    const bank = (window.BIOCHEM && window.BIOCHEM.bank) || {};
    const byId = {};
    TOPICS.forEach((t) => { byId[t.id] = t; });
    Object.keys(bank).forEach((id) => {
      const t = byId[id];
      if (!t) { BANK_ORPHANS.push(id); return; }
      t.bank = (t.bank || []).concat(bank[id]);
    });
    if (BANK_ORPHANS.length) {
      console.warn('bank: no topic node for id(s): ' + BANK_ORPHANS.join(', '));
    }
  })();

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
    qsrc:    store.get('qsrc', 'bank'),   // 'core' | 'bank' | 'terms' -- see allQuestions()
    voice:   store.get('voice', {}),      // 'en' | 'zh' | 'cs' -> chosen voiceURI
    rate:    store.get('rate', 0.94),     // playback speed, shared by both languages
    marks:   store.get('marks', {}),      // markKey -> pen colour id; see MARKING below
    pen:     store.get('pen', 'y'),       // which colour a NEW star gets
    cardStarred: store.get('cardStarred', false), // ⭐🔊 drill; see STARRED DRILL below
    onlyMarked: store.get('onlyMarked', false), // 只看必背; see ONLY-MARKED below
    wrong:   store.get('wrong', {}),      // wrongKey -> entry; see WRONGBOOK below
    notes:   store.get('notes', {})       // "book:chapter" -> the reader's own text
  };

  /* The `bank` level was empty for months, so every browser that used this app
     before the bank files landed has 'core' sitting in localStorage -- not as a
     preference between core and bank, but as the only thing there was to store.
     Left alone, that stale value hides all 638 bank questions behind a button
     nobody has a reason to press, and the Quiz tab goes on reporting the old
     count as though nothing had been added. It did exactly that, and it read as
     the new questions not having loaded.

     So promote it once, and record that the promotion happened -- a later
     deliberate switch back to `core` is then a real choice and survives. */
  if (!store.get('qsrcPromoted', false)) {
    if (state.qsrc === 'core') { state.qsrc = 'bank'; store.set('qsrc', state.qsrc); }
    store.set('qsrcPromoted', true);
  }

  /* ---------------------------------------------------------------- helpers */
  const $  = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  /* ------------------------------------------------------------- MARKING
     Highlighting, ported from pesbexplain. Two decisions there were reached by
     trying the alternative first, so they are inherited rather than re-derived:

     - It is BINARY with a colour attached, not tri-state. The earlier
       to-memorise / known / skip lost two states that cost a click each and
       earned nothing: "known" is what the Leitner boxes already record, and
       "skip" went unused.
     - The highlight is a FULL BACKGROUND WASH, not a thin left rule. A
       highlighter you have to hunt for is not doing its job. The readability
       cost is real and is what the (parked) 只看必背 filter answers.

     KEY SCHEME, and it differs from PESB on purpose. PESB keys everything by
     index. Here a TERM is keyed by the app's existing cardKey() instead, so a
     mark survives the glossary being reordered and so the parked Terms drill
     can filter on marks without a second key for the same card. That is trap 3
     in LEHNINGER_START.md applied before it can bite rather than after.
     Points have no stable identifier at all, so they stay index-based
     ('<id>:p3', '<id>:g1') and a reordered points list will shift their marks.
     Accepted, because the data files are append-mostly and a misplaced tick is
     cheap — unlike a misfiled note, which is why notes will need an anchor. */
  const PENS = [
    { id: 'y', hex: '#ffd54a', en: 'Yellow', cn: '黄' },
    { id: 'g', hex: '#7ee787', en: 'Green',  cn: '绿' },
    { id: 'b', hex: '#79c0ff', en: 'Blue',   cn: '蓝' },
    { id: 'p', hex: '#ff9ecd', en: 'Pink',   cn: '粉' }
  ];
  const PEN_IDS = PENS.map((p) => p.id);
  const penHex  = (id) => (PENS.find((x) => x.id === id) || PENS[0]).hex;

  const markOf = (key) => state.marks[key] || '';

  function toggleMark(key) {
    if (state.marks[key]) delete state.marks[key];
    else state.marks[key] = state.pen;
    store.set('marks', state.marks);
    return state.marks[key] || '';
  }

  function cyclePen(key) {
    const cur = state.marks[key];
    if (!cur) return '';
    state.marks[key] = PEN_IDS[(PEN_IDS.indexOf(cur) + 1) % PEN_IDS.length];
    store.set('marks', state.marks);
    return state.marks[key];
  }

  /* Two unambiguous buttons rather than one control whose meaning depends on
     the current pen: the star collects, the dot recolours what is collected. */
  function markBtn(key) {
    const m = markOf(key);
    return `<span class="mark-wrap">
              <button type="button" class="mark-btn${m ? ' on' : ''}" data-mark="${esc(key)}"
                title="Collect · 收录" aria-label="Collect">${m ? '⭐' : '☆'}</button>
              <button type="button" class="pen-btn" data-pen-for="${esc(key)}" ${m ? '' : 'hidden'}
                title="Change highlighter colour · 换颜色"
                style="background:${m ? penHex(m) : 'transparent'}" aria-label="Colour"></button>
            </span>`;
  }

  function applyMarkClass(el, colour) {
    if (!el) return;
    el.className = el.className.replace(/\bhl-[ygbp]\b/g, '').replace(/\s+/g, ' ').trim();
    if (colour) el.className += ' hl-' + colour;
  }

  function wireMarks(root) {
    if (!root) return;
    root.querySelectorAll('.mark-btn:not([data-wired])').forEach((btn) => {
      btn.dataset.wired = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const colour = toggleMark(btn.dataset.mark);
        btn.classList.toggle('on', !!colour);
        btn.textContent = colour ? '⭐' : '☆';
        const dot = btn.parentNode.querySelector('.pen-btn');
        if (dot) { dot.hidden = !colour; dot.style.background = colour ? penHex(colour) : 'transparent'; }
        applyMarkClass(btn.closest('[data-markable]'), colour);
        // Un-starring while 只看必背 is on makes the line vanish under the cursor.
        // That is the honest behaviour, but the per-section counts have to move
        // with it or the header claims a number the page no longer shows.
        refreshOnlyMarked();
      });
    });
    root.querySelectorAll('.pen-btn:not([data-wired])').forEach((btn) => {
      btn.dataset.wired = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const colour = cyclePen(btn.dataset.penFor);
        if (!colour) return;
        btn.style.background = penHex(colour);
        applyMarkClass(btn.closest('[data-markable]'), colour);
      });
    });
  }

  /* ---------------------------------------------------------- ONLY-MARKED
     只看必背. The highlighter washes a whole line in colour, which is what makes
     a mark findable and also what makes a marked-up page tiring to read; this
     filter is the other half of that trade (see MARKING above).

     It hides collectable lines that carry no star. It does NOT hide mustKnow,
     追根溯源, the titles or the Summary -- none of those is collectable, and
     mustKnow is by design always visible. So the filter can never empty a topic
     of the thing the topic is FOR.

     Visibility is driven off the same `hl-*` class that applyMarkClass already
     maintains, deliberately: one source of truth, so a star toggled at runtime
     cannot leave the filter showing something stale. The counts are the part
     that needs recomputing, and refreshOnlyMarked() is called wherever a star
     changes or a topic re-renders.

     A section whose items are ALL hidden keeps its heading and reports the
     count rather than disappearing. A heading that silently vanishes reads as
     "this section does not exist", which is exactly the wrong thing to tell
     someone revising from it. */
  function markCountOf(t) {
    let n = 0;
    (t.points || []).forEach((_p, i) => { if (state.marks[t.id + ':p' + i]) n++; });
    (t.gapPoints || []).forEach((_p, i) => { if (state.marks[t.id + ':g' + i]) n++; });
    (t.terms || []).forEach((term) => { if (state.marks[cardKey(t, term)]) n++; });
    return n;
  }

  const isMarkedEl = (el) => /\bhl-[ygbp]\b/.test(el.className);

  function refreshOnlyMarked() {
    document.body.classList.toggle('only-marked', state.onlyMarked);
    const btn = $('#only-marked-toggle');
    if (btn) {
      btn.classList.toggle('active', state.onlyMarked);
      btn.setAttribute('aria-pressed', state.onlyMarked ? 'true' : 'false');
    }

    const root = $('#study-body');
    if (!root) return;
    Array.from(root.querySelectorAll('.block')).forEach((sec) => {
      const items = Array.from(sec.querySelectorAll('[data-markable]'));
      if (!items.length) return;
      const hidden = items.filter((el) => !isMarkedEl(el)).length;

      let badge = sec.querySelector('.hidden-count');
      if (!badge) {
        const h2 = sec.querySelector('h2');
        if (!h2) return;
        badge = document.createElement('span');
        badge.className = 'hidden-count';
        h2.appendChild(badge);
      }
      const show = state.onlyMarked && hidden > 0;
      badge.textContent = show
        ? (hidden === items.length
            ? `all ${hidden} hidden · ${hidden} 条全部隐藏`
            : `${hidden} hidden · 隐藏 ${hidden} 条`)
        : '';
      badge.hidden = !show;
      sec.classList.toggle('all-hidden', state.onlyMarked && hidden === items.length);
    });
  }

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
    // A close button inside the panel. The 🔈 in the top bar already toggles it,
    // but once the panel is open that button is easy to lose track of, and the
    // panel is tall — so it needs a way out from where you are looking.
    const close = $('#voice-close');
    if (close) close.addEventListener('click', () => { panel.hidden = true; });
    // Escape closes it too, for the same reason.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) panel.hidden = true;
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
       bank   — `bank`, hand-written extras, attached by id from
                `data/bank_*.js` rather than written inside the node. See the
                bank layer at the top of this file and BANK_SPEC.md.
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

  /* The coverage note sits directly above the summary and used to render as
     one unbroken English paragraph — 227 nodes carry one, median 592
     characters for a Czech node and 3,543 for a Lehninger one. That is a wall
     of English in the first thing you look at.

     Two changes, per Ruojin: the Chinese is always visible, and the long
     English is folded away behind a toggle rather than removed. `coverageNote`
     stays the full English record (it is the provenance of the node — which
     pages were read, what the book actually says versus what was inferred),
     and `coverageNoteCn` carries the substance a reader needs in Chinese.
     Where the Chinese is not written yet the English still shows, collapsed,
     so nothing is hidden and the gap is visible rather than silent. */
  /* mustKnow — one or two sentences, always visible, at the very top of the
     node. The rule that keeps it useful: it is not a summary of the node, it
     is what you would still want in your head after forgetting the node. If
     it could be reconstructed from the title it is not worth writing.

     Sits ABOVE the lehNotes and the coverage note deliberately: those are
     warnings and provenance, this is the content. Ported in spirit from PESB
     (mustKnow 常驻显示), but bilingual here, because this app is EN-primary
     with CN carrying the same substance (HANDOFF_LEHNINGER.md §11). */
  function mustKnowHtml(t) {
    const m = t.mustKnow;
    if (!m || (!m.en && !m.cn)) return '';
    return `<div class="must-know">
              <span class="mk-label">必背 <span class="muted">Must know</span></span>
              ${bi(m.en, m.cn)}
              ${speakPairBtn(m.en, m.cn)}
            </div>`;
  }

  /* trace — 追根溯源, asked for in these words: 「这是啥，从哪来，到哪去，家里几口人，
     人均几亩地，这种追根溯源，免得我看见就一头雾水」. One entry per opaque term the node
     uses without introducing, so a reader who freezes at the word has somewhere to go.

     Ported from pesbexplain's traceTable(), with three deliberate differences:
       - it is an ARRAY on the node, not a field inside an explain item, because this app
         has no explain layer and a node can strand more than one term;
       - each entry is folded behind its own <details>, because the second half of the
         same request was 「默认折叠起来，想深挖的时候有，不想看的时候不占地方」;
       - rows are Chinese prose with technical terms left in English. trace is a
         comprehension aid (HANDOFF_LEHNINGER.md §3: the Chinese is never scope or depth),
         so a bilingual pair would double the writing cost for no exam value.

     Every row is individually optional. Do NOT pad `numbers` with a figure you have not
     read off the page — an absent row is correct, an invented number is not. */
  const TRACE_ROWS = [
    ['what',    '这是啥',       'What it is'],
    ['from',    '从哪来',       'Where it came from'],
    ['to',      '到哪去',       'Where it leads'],
    ['family',  '家里几口人',   'What else is in its family'],
    ['numbers', '人均几亩地',   'The numbers, if any matter']
  ];

  function traceHtml(t) {
    const list = t.trace;
    if (!Array.isArray(list) || !list.length) return '';
    const cards = list.map(tr => {
      const rows = TRACE_ROWS
        .filter(([k]) => tr[k])
        .map(([k, cn, en]) => `<tr>
               <th><span class="tr-cn">${cn}</span><span class="tr-en">${esc(en)}</span></th>
               <td><p>${esc(tr[k])} ${speakBtn(tr[k], 'zh-CN')}</p></td>
             </tr>`)
        .join('');
      if (!rows) return '';
      return `<details class="trace-card">
                <summary>追根溯源 <b>${esc(tr.term || '')}</b>
                  <span class="muted">这是啥 · 从哪来 · 到哪去</span></summary>
                <table class="trace"><tbody>${rows}</tbody></table>
              </details>`;
    }).join('');
    return cards;
  }

  function coverageNoteHtml(t) {
    if (!t.coverageNote && !t.coverageNoteCn) return '';
    const cn = t.coverageNoteCn;
    const showCn = state.lang !== 'en' && cn;
    const showEn = state.lang !== 'cn';
    let out = '<div class="cov-note">';
    if (showCn) {
      out += `<p class="cov-cn">${esc(cn)} ${speakBtn(cn, 'zh-CN')}</p>`;
    }
    if (showEn && t.coverageNote) {
      out += `<details class="cov-en"${cn ? '' : ' '}>
                <summary>Coverage note <span class="muted">覆盖范围说明${cn ? '（英文原文）' : '（尚无中文）'}</span></summary>
                <p>${esc(t.coverageNote)} ${speakBtn(t.coverageNote, 'en-US')}</p>
              </details>`;
    }
    return out + '</div>';
  }

  function applyLang() {
    $$('#lang-toggle button').forEach((b) =>
      b.classList.toggle('active', b.dataset.lang === state.lang));
  }

  function applyNav() {
    $$('#nav-toggle button').forEach((b) =>
      b.classList.toggle('active', b.dataset.nav === state.nav));
  }

  /* The pen row only chooses the colour for the NEXT star. It deliberately does
     not repaint anything already collected — that is what the dot beside each
     mark is for, so a colour is never changed by accident in bulk. */
  function renderPenRow() {
    const row = $('#pen-row');
    if (!row) return;
    row.innerHTML = PENS.map((p) => `
      <button type="button" class="pen-swatch${p.id === state.pen ? ' active' : ''}"
        data-pen="${p.id}" style="background:${p.hex}"
        title="${p.en} · ${p.cn}" aria-label="${p.en}"></button>`).join('');
    row.querySelectorAll('.pen-swatch').forEach((b) => {
      b.addEventListener('click', () => {
        state.pen = b.dataset.pen;
        store.set('pen', state.pen);
        renderPenRow();
      });
    });
  }

  function setMode(mode) {
    $$('.mode-btn').forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
    $$('.panel').forEach((p) => p.classList.toggle('active', p.id === 'panel-' + mode));
    if (mode === 'cards') renderCard();
    if (mode === 'wrong') renderWrongbook();
    if (mode === 'notes') renderNotes();
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
          // ⭐ count: how much of this topic survives 只看必背. Shown always, not
          // only while the filter is on, because its real job is to answer
          // "where did I actually collect anything" before you turn it on.
          const mk = markCountOf(t);
          html += `<button class="topic-item${t.id === state.topicId ? ' current' : ''}" data-id="${esc(t.id)}">
                     <span class="ti-sec">${esc(t.section)}</span>
                     <span class="ti-title">${esc(label)}</span>
                     ${mk ? `<span class="ti-marks" title="${mk} collected · 已收录 ${mk} 条">⭐${mk}</span>` : ''}
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

  /* ------------------------------------------------------------ deep links
     The URL hash names the topic: #/t/7-1-3-1. Two reasons it exists.

     Practically, a node can now be bookmarked and reopened, which it could not
     be before — every reload landed on the default view.

     Structurally, it is what lets a SECOND app link into this one. The
     structure-formula app is deliberately separate (its own directory, its own
     storage prefix) so that a half-built renderer can never blank the app
     Ruojin actually revises from. Separate apps can only be joined by URL, and
     there was no URL to join to.

     ⚠️ There is no sync tooling between the apps, so an id that changes here
     breaks an inbound link silently — the visitor lands on the default view
     with no error. Any cross-link must be covered by a checker that asserts
     both directions resolve. */
  function topicFromHash() {
    const m = (location.hash || '').match(/^#\/t\/(.+)$/);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function applyHash() {
    const id = topicFromHash();
    if (!id) return false;
    if (!TOPICS.some((t) => t.id === id)) return false;   // stale link: ignore, do not throw
    state.topicId = id;
    setMode('study');
    renderStudy();
    renderSidebar();
    return true;
  }

  function wireTopicItems() {
    $$('.topic-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.topicId = btn.dataset.id;
        // replaceState, not a hash assignment: writing location.hash would fire
        // hashchange and re-render the node that was just rendered.
        history.replaceState(null, '', '#/t/' + encodeURIComponent(state.topicId));
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

        ${mustKnowHtml(t)}

        ${traceHtml(t)}

        ${lehNotesHtml(t)}

        ${sameTopicHtml(t)}

        ${coverageNoteHtml(t)}

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
      t.points.forEach((p, i) => {
        const k = t.id + ':p' + i, m = markOf(k);
        html += `<li data-markable class="${m ? 'hl-' + m : ''}">${p.cz ? `<span class="cz-anchor">${esc(p.cz)}</span>` : ''}${bi(p.en, p.cn)} ${speakPairBtn(p.en, p.cn)} ${markBtn(k)}</li>`;
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
      t.gapPoints.forEach((p, i) => {
        const k = t.id + ':g' + i, m = markOf(k);
        html += `<li data-markable class="${m ? 'hl-' + m : ''}">${bi(p.en, p.cn)} ${markBtn(k)}</li>`;
      });
      html += `</ol></section>`;
    }

    if (t.terms && t.terms.length) {
      html += `<section class="block"><h2>Glossary <span class="muted">术语表</span></h2>
               <div class="term-grid">`;
      t.terms.forEach((term) => {
        // cardKey, not an index — see MARKING. Keeps the mark aligned with the
        // Leitner card and stable if the glossary is reordered.
        const k = cardKey(t, term), m = markOf(k);
        html += `<div class="term${m ? ' hl-' + m : ''}" data-markable>
                   <div class="term-en">${esc(term.en || '')} ${speakBtn(term.en, 'en-US')} ${markBtn(k)}</div>
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
    wireMarks(body);
    refreshOnlyMarked();

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

  /* ------------------------------------------------------- STARRED DRILL 星标朗读
     One button, one way of working: only the terms carrying a ⭐, each read aloud
     as it appears, Chinese still behind the tap.

     Two departures from the ordinary deck, both deliberate:

     - The Leitner box-5 exclusion is LIFTED here. Normally a card that has
       reached the top box has been learned and drops out of rotation, but a star
       is the reader saying "keep showing me this" — mastery is not the criterion
       they are using, so filtering on it would empty the deck of exactly the
       words they marked.
     - The English is spoken automatically. That is the point of the mode (the
       exam is oral and heard, not read), and it is safe from the browsers'
       autoplay rules because every card after the first is reached by clicking
       "Got it" or "Missed", and the first by clicking into the tab. */
  function starredOnly() { return state.cardStarred; }

  // The button says how many cards the mode would give you, because a starred
  // deck can legitimately be empty and a button that just turns blue would not
  // explain a suddenly empty stage.
  function renderStarredBtn() {
    const btn = $('#card-starred');
    if (!btn) return;
    const n = allCards().filter(isStarred).length;
    btn.classList.toggle('on', state.cardStarred);
    btn.innerHTML = '⭐🔊 <span>星标朗读</span>'
      + (n ? ` <span class="muted">${n}</span>` : ' <span class="muted">0</span>');
    btn.title = state.cardStarred
      ? 'Showing only starred terms, read aloud. Tap the card for the Chinese. · 只抽标了星的词，自动朗读，点卡片才出中文'
      : 'Drill only the terms you starred, each read aloud · 只练你标星的词，每个自动朗读';
  }

  function isStarred(c) { return !!markOf(cardKey(c.topic, c.term)); }

  function cardPool(scope) {
    const all = allCards().filter((c) => inScope(c.topic, scope));
    return starredOnly() ? all.filter(isStarred) : all;
  }

  function buildQueue() {
    const scope = $('#card-scope').value;
    const pool = cardPool(scope).filter((c) => starredOnly() || boxOf(c) < 5);
    // Lowest Leitner box first, shuffled within each box.
    const byBox = [1, 2, 3, 4].map((b) => shuffle(pool.filter((c) => boxOf(c) === b)));
    cardQueue = [].concat.apply([], byBox);
    currentCard = cardQueue.shift() || null;
  }

  function renderLeitner() {
    const scope = $('#card-scope').value;
    const pool = cardPool(scope);
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
    if (!has) {
      // An empty starred deck means "you have not starred anything here", which
      // needs different words from "you have mastered everything here" — and it
      // needs to say where the stars are made, since nothing in this tab makes one.
      const p = $('#card-empty p');
      const again = $('#card-restudy');
      if (starredOnly()) {
        if (p) p.innerHTML = '⭐ No starred terms in this scope yet.<br>'
          + '<span lang="zh">这个范围里还没有标星的词。在 Study 里点术语旁边的 ⭐ 就能加入。</span>';
        if (again) again.hidden = true;
      } else {
        if (p) p.textContent = '🎉 Every card in this scope has reached the top box.';
        if (again) again.hidden = false;
      }
      return;
    }

    const { topic, term } = currentCard;
    $('#flashcard').classList.remove('flipped');
    const tag = `${topic.section} · Box ${boxOf(currentCard)}`;
    $('#fc-tag').textContent = tag;
    $('#fc-tag-back').textContent = tag;
    $('#fc-front-term').innerHTML = `${esc(term.en || term.cz || '')} ${speakBtn(term.en || term.cz, 'en-US')}`;
    $('#fc-cz-ref').innerHTML = term.cz ? `<span class="cz-anchor">${esc(term.cz)}</span> ${speakBtn(term.cz, 'cs-CZ')}` : '';
    $('#fc-cn').innerHTML = `${esc(term.cn || '')} ${speakBtn(term.cn, 'zh-CN')}`;
    $('#fc-def').innerHTML = bi(term.def_en, term.def_cn);
    $('#card-counter').textContent = `${cardQueue.length} more in this round`
      + (starredOnly() ? ' · ⭐ 星标' : '');

    wireSayButtons($('#flashcard'));
    bionicRefresh();

    // Speak the word, not the definition: the front of the card is what the mode
    // is drilling, and hearing the back read out would give away the answer the
    // tap is meant to reveal.
    if (starredOnly()) {
      const word = term.en || term.cz || '';
      if (word) speak(word, term.en ? 'en-US' : 'cs-CZ');
    }
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
      + `. Tap the source button to cycle.`
      + (BANK_ORPHANS.length
          ? ` <span class="warn">⚠ ${BANK_ORPHANS.length} bank key(s) match no topic and are not being`
            + ` asked: ${esc(BANK_ORPHANS.join(', '))}</span>`
          : '');
  }

  let quizItems = [], quizIndex = 0, quizCorrect = 0, quizAnswered = false, quizWrong = [];
  let quizIsDrill = false;   // a wrong-answer drill must not overwrite a topic's best score

  /* ------------------------------------------------------- OPTION SHUFFLING
     Measured 2026-08-14 over the whole bank: the correct answer sat in
     position B in 66% of the 549 core questions, and in A or B in 89% of the
     432 bank questions. Answering B every time scored 66% without reading
     anything. That is not a content problem, it is a writing habit -- the
     answer gets drafted first and the distractors are appended after it -- and
     it makes the drill measure the wrong thing.

     So the options are permuted per quiz run, and `answer`, `optionRefs` and
     `optionNotes` are remapped with them. The question objects are COPIED
     rather than mutated: the data files stay as written, and the wrong-answer
     book stores whatever order it was actually shown, so a re-drill of a stored
     entry shows the same card the reader got wrong.

     One exception, and it is why this is not simply applied to everything: some
     explanations refer to options by number ("Option 3 invents a charge
     mechanism"). Those questions are left in their written order, because
     shuffling them would make the explanation point at the wrong option. There
     are two incompatible numbering conventions in the data anyway -- the
     Lehninger files count from 1, chapters 9 and 10 count from 0, and the app
     renders A-D for both -- so those references want fixing on their own terms
     before they can be shuffled. About 5% of the bank.

     What this does NOT fix: the answer is also the LONGEST option in 83% of
     core questions and 72% of bank ones, because the true statement is the one
     that needs the qualifying clause. Only rewriting distractors fixes that. */
  function positionReferenced(q) {
    return /Option\s*\d/i.test(String(q.why_en || '') + String(q.why_cn || ''));
  }

  function permuteMcq(item) {
    const q = item.q;
    if (!q || q.type !== 'mcq' || !Array.isArray(q.options) || positionReferenced(q)) return item;

    const order = shuffle(q.options.map((_, i) => i));   // order[newIndex] = oldIndex
    const back = {};
    order.forEach((oldI, newI) => { back[oldI] = newI; });

    const remap = (obj) => {
      if (!obj) return undefined;
      const out = {};
      Object.keys(obj).forEach((k) => {
        const ni = back[Number(k)];
        if (ni !== undefined) out[ni] = obj[k];
      });
      return out;
    };

    const copy = {};
    Object.keys(q).forEach((k) => { copy[k] = q[k]; });
    copy.options = order.map((oldI) => q.options[oldI]);
    copy.answer = back[q.answer];
    if (q.optionRefs) copy.optionRefs = remap(q.optionRefs);
    if (q.optionNotes) copy.optionNotes = remap(q.optionNotes);

    const out = {};
    Object.keys(item).forEach((k) => { out[k] = item[k]; });
    out.q = copy;
    return out;
  }

  /* `items` is the wrong-answer drill handing in its own list. The click
     handler passes an Event, so the argument is type-checked rather than
     truth-checked -- an Event is truthy and would have silently emptied the
     quiz. */
  function startQuiz(items) {
    const scope = $('#quiz-scope').value;
    quizIsDrill = Array.isArray(items);
    // A drill re-asks entries exactly as they were stored, including the option
    // order the reader actually saw; only a fresh run permutes.
    quizItems = quizIsDrill
      ? shuffle(items.slice())
      : shuffle(allQuestions().filter((item) => inScope(item.topic, scope))).map(permuteMcq);
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

  /* ------------------------------------------------------- OPTION HOOKS
     Ported from pesbpro. Wrong options are not all filler, and they fail in
     two different ways. `optionRefs` handles the ones that name a concept the
     course teaches in another node: the distractor becomes a link to go and
     revise it. `optionNotes` handles the ones that encode a real misconception
     -- two things swapped, a direction reversed, a condition dropped -- where
     the useful thing is to name the confusion, so it carries bilingual prose
     instead of a pointer. An option can have both, or neither.

     Neither is not a bug: some distractors correspond to nothing worth
     chasing, and saying so marks the question as one that wants rewriting
     rather than annotating. BANK_SPEC.md asks new questions to keep those to
     at most one per item. */

  // Same language rule as bi(), but emitting spans: these sit inside a
  // <button>, where block-level children would be invalid HTML.
  function hookTitle(t) {
    let s = '';
    if (state.lang !== 'cn') s += `<span class="t-en">${esc(t.enTitle || '')}</span>`;
    if (state.lang !== 'en') s += `<span class="t-cn">${esc(t.cnTitle || t.enTitle || '')}</span>`;
    return s;
  }

  // Entity cards carry no section number by design, so the mono prefix falls
  // back to the book tag rather than printing "undefined".
  function hookSec(t) {
    return isEntity(t) ? 'CARD' : (t.section || BOOK_TITLES[bookOf(t)].short);
  }

  const HOOK_FILLER = {
    en: 'Nothing in the course corresponds to this one.',
    cn: '课程里没有对应的内容，这是个凑数选项。'
  };
  const HOOK_NONE = {
    en: 'None of the wrong options here corresponds to anything the course teaches, '
      + 'so there is nothing to go and revise.',
    cn: '这道题的错误选项都不对应课程里的任何内容，没有需要回头复习的东西。'
  };

  function hookLinkHtml(t) {
    return `<button class="link-btn hook-link" data-id="${esc(t.id)}">
              <span class="hook-sec">${esc(hookSec(t))}</span>${hookTitle(t)}
            </button>`;
  }

  function optionHooks(q, generated) {
    // Term-drill questions are generated and their distractors are other
    // glossary entries picked mechanically, so there is no authored intent to
    // report and the panel is suppressed.
    //
    // Everything else ALWAYS gets a panel, including questions where every
    // distractor is filler. "There is nothing here to chase" is a real answer
    // to "what were the other options about" -- and showing nothing made the
    // feature look broken, because the questions you get right are
    // disproportionately the ones whose distractors are obvious filler.
    if (generated || q.type !== 'mcq') return '';
    const refs = q.optionRefs || {};
    const notes = q.optionNotes || {};
    const rows = (q.options || [])
      .map((opt, i) => ({ i: i, key: String.fromCharCode(65 + i),
                          t: topicById(refs[i]), note: notes[i] }))
      .filter((r) => r.i !== q.answer);
    if (!rows.length) return '';

    const body = rows.some((r) => r.t || r.note)
      ? rows.map((r) => `<div class="hook">
            <span class="opt-key">${r.key}</span>
            <div class="hook-body">
              ${r.t ? hookLinkHtml(r.t) : ''}
              ${r.note ? `<div class="hook-note">${bi(r.note.en, r.note.cn)}</div>` : ''}
              ${!r.t && !r.note ? `<div class="hook-none">${bi(HOOK_FILLER.en, HOOK_FILLER.cn)}</div>` : ''}
            </div>
          </div>`).join('')
      : `<div class="hook-none">${bi(HOOK_NONE.en, HOOK_NONE.cn)}</div>`;

    return `<div class="opt-hooks">
      <div class="hooks-label">About the other options · 其他选项讲的是什么</div>
      ${body}
    </div>`;
  }

  // Following a hook must not cost you the quiz: setMode only toggles panel
  // visibility, and quizItems/quizIndex live outside the DOM, so switching back
  // to Quiz returns to this same question with its answer still revealed.
  function wireHookLinks(root) {
    root.querySelectorAll('.hook-link').forEach((b) =>
      b.addEventListener('click', () => {
        state.topicId = b.dataset.id;
        setMode('study'); renderStudy(); renderSidebar();
      }));
  }

  /* ---------------------------------------------------------- WRONGBOOK 错题本
     A question you got wrong is worth more than the score it cost you, and a
     score is all the app used to keep: `quizWrong` lived for one quiz run and
     died with it.

     What is stored is the whole question object, not a pointer to it. Three
     reasons: generated term questions have no stable identity to point at,
     their options are shuffled at generation time so a stored index would mean
     nothing later, and a stored copy keeps the entry renderable even if the
     data file behind it is edited. The cost is that an entry can go stale
     against a rewritten node -- acceptable, because the entry still carries a
     complete, self-consistent record of what was asked and what was answered.

     `ok` counts CONSECUTIVE later correct answers and any wrong answer resets
     it to zero. At WRONG_CLEAR the entry leaves the book: getting it right
     once is what a lucky guess looks like too. */
  const WRONG_CLEAR = 2;

  function today() { return new Date().toISOString().slice(0, 10); }

  function wrongKey(topic, q) {
    return topic.id + '::' + (q.q_en || q.q_cn || '');
  }

  function wrongCount() { return Object.keys(state.wrong).length; }

  function recordWrong(topic, q, generated, chose, typed) {
    const k = wrongKey(topic, q);
    const prev = state.wrong[k];
    state.wrong[k] = {
      topicId: topic.id,
      q: q,
      gen: !!generated,
      chose: typeof chose === 'number' ? chose : null,
      typed: typed || '',
      n: (prev ? prev.n : 0) + 1,          // times wrong, all time
      ok: 0,                                // consecutive correct since
      first: prev ? prev.first : today(),
      last: today()
    };
    store.set('wrong', state.wrong);
    renderWrongBadge();
  }

  function recordRight(topic, q) {
    const k = wrongKey(topic, q);
    const e = state.wrong[k];
    if (!e) return;
    e.ok = (e.ok || 0) + 1;
    e.last = today();
    if (e.ok >= WRONG_CLEAR) delete state.wrong[k];
    store.set('wrong', state.wrong);
    renderWrongBadge();
  }

  function answerMcq(choice) {
    if (quizAnswered) return;
    quizAnswered = true;
    const { topic, q, generated } = quizItems[quizIndex];
    const ok = choice === q.answer;
    if (ok) quizCorrect++; else quizWrong.push({ topic, q, generated });
    if (ok) recordRight(topic, q); else recordWrong(topic, q, generated, choice, '');

    $$('#qcard .option').forEach((btn) => {
      const i = parseInt(btn.dataset.i, 10);
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === choice) btn.classList.add('wrong');
    });

    const fb = $('#feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.innerHTML = `<strong>${ok ? '✓ Correct' : '✕ Not quite'}</strong>${bi(q.why_en, q.why_cn)}`
                 + optionHooks(q, generated)
                 + (ok ? '' : `<div class="wb-added">✕ Added to the wrong-answer book · 已加入错题本</div>`);
    wireHookLinks(fb);
    $('#quiz-score').textContent = `${quizCorrect} correct`;
    revealNext();
    wireSayButtons($('#qcard'));
    bionicRefresh();
  }

  function answerShort() {
    if (quizAnswered) return;
    quizAnswered = true;
    const { topic, q, generated } = quizItems[quizIndex];
    const raw = $('#short-input').value || '';
    const typed = raw.toLowerCase();
    const keys = q.accept || [];
    const hit = keys.filter((k) => typed.includes(String(k).toLowerCase()));
    const ok = keys.length ? hit.length >= Math.ceil(keys.length / 2) : false;
    if (ok) quizCorrect++; else quizWrong.push({ topic, q, generated });
    if (ok) recordRight(topic, q); else recordWrong(topic, q, generated, null, raw.trim());

    const fb = $('#feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.innerHTML =
      `<strong>${ok ? '✓ Key terms covered' : '△ Some key terms missing'}</strong>
       <p class="kw-line">Matched ${hit.length} of ${keys.length} key terms:
         ${keys.map((k) => `<span class="kw${hit.includes(k) ? ' kw-hit' : ''}">${esc(k)}</span>`).join('')}</p>
       <div class="model-answer"><span class="ma-label">Model answer · 参考答案 ${speakPairBtn(q.answer_en, q.answer_cn)}</span>
         ${bi(q.answer_en, q.answer_cn)}</div>`
      + (ok ? '' : `<div class="wb-added">△ Added to the wrong-answer book · 已加入错题本</div>`);
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
    if (!quizIsDrill && !scope.startsWith('ch:') && scope !== 'all') {
      const prev = state.scores[scope];
      if (!prev || quizCorrect > prev.correct) {
        state.scores[scope] = { correct: quizCorrect, total: total };
        store.set('scores', state.scores);
      }
    }

    const missed = quizWrong.slice();     // captured before "Run it again" clears it
    let html = `<h2>${pct}% <span class="muted">${quizCorrect} / ${total}</span></h2>`;
    if (missed.length) {
      html += `<h3>Worth another look <span class="muted">需再复习</span></h3><ul class="review-list">`;
      missed.forEach(({ topic, q }) => {
        html += `<li><button class="link-btn" data-id="${esc(topic.id)}">${esc(hookSec(topic))}</button>
                 ${esc(q.q_en || q.q_cn)}</li>`;
      });
      html += `</ul>
        <p class="muted">All ${missed.length} are in the wrong-answer book, with what each wrong
        option was really about. 这 ${missed.length} 题已进错题本，错项对应的知识点也一并记下了。</p>`;
    } else if (total) {
      html += `<p>Clean sweep — every question correct. 全对。</p>`;
    }
    html += `<div class="q-result-actions">
      <button class="btn-primary" id="quiz-again">Run it again</button>`;
    if (missed.length) {
      html += `<button class="btn-ghost" id="quiz-drill-missed">Drill just these ${missed.length} · 只练这几题</button>
               <button class="btn-ghost" id="quiz-to-wrongbook">Open the wrong-answer book · 打开错题本</button>`;
    }
    html += `</div>`;

    const box = $('#quiz-result');
    box.innerHTML = html;
    box.hidden = false;
    $('#quiz-again').addEventListener('click', () => startQuiz());
    if (missed.length) {
      $('#quiz-drill-missed').addEventListener('click', () => startQuiz(missed));
      $('#quiz-to-wrongbook').addEventListener('click', () => { setMode('wrong'); renderWrongbook(); });
    }
    box.querySelectorAll('.link-btn').forEach((b) =>
      b.addEventListener('click', () => {
        state.topicId = b.dataset.id;
        setMode('study'); renderStudy(); renderSidebar();
      }));
    renderSidebar();
    bionicRefresh();
  }

  /* ------------------------------------------------------- wrongbook 错题本 view
     The quiz already tells you, once, what each wrong option was about. This
     panel is that same explanation kept -- one place where every question you
     have missed sits with its options laid out, the one you picked marked, the
     right one marked, and every wrong option carrying the knowledge it stands
     for. Getting a question right in a later drill counts it down; two in a row
     and it leaves.

     Entries whose node no longer exists are counted and offered for clearing
     rather than dropped on sight: a node id disappearing means the data changed
     under the stored entry, and that is worth seeing, not hiding. */

  function wrongRows() {
    return Object.keys(state.wrong).map((k) => ({
      key: k, e: state.wrong[k], topic: topicById(state.wrong[k].topicId)
    }));
  }

  function renderWrongBadge() {
    const el = $('#wrong-count');
    if (!el) return;
    const n = wrongCount();
    el.textContent = n ? String(n) : '';
    el.hidden = !n;
  }

  function wrongOptionList(q, chose) {
    const refs = q.optionRefs || {};
    const notes = q.optionNotes || {};
    return (q.options || []).map((opt, i) => {
      const isAnswer = i === q.answer;
      const isPick = i === chose;
      const t = topicById(refs[i]);
      const note = notes[i];
      let ann = '';
      if (!isAnswer) {
        ann = (note ? `<div class="hook-note">${bi(note.en, note.cn)}</div>` : '')
            + (t ? hookLinkHtml(t) : '')
            + (!note && !t ? `<div class="hook-none">${bi(HOOK_FILLER.en, HOOK_FILLER.cn)}</div>` : '');
      }
      return `<div class="wb-opt${isAnswer ? ' is-answer' : ''}${isPick && !isAnswer ? ' is-pick' : ''}">
                <span class="opt-key">${String.fromCharCode(65 + i)}</span>
                <div class="wb-opt-body">
                  <div class="wb-opt-text">${esc(opt)}
                    ${isAnswer ? '<span class="wb-tag ok">correct · 正确答案</span>' : ''}
                    ${isPick && !isAnswer ? '<span class="wb-tag bad">you picked · 你选的</span>' : ''}</div>
                  ${ann}
                </div>
              </div>`;
    }).join('');
  }

  function wrongEntryHtml(row) {
    const { key, e, topic } = row;
    const q = e.q;
    const graded = e.ok >= 1 ? `<span class="wb-meta-ok">${e.ok} / ${WRONG_CLEAR} right since · 已连对</span>` : '';
    const body = q.type === 'mcq'
      ? `<div class="wb-opts">${wrongOptionList(q, e.chose)}</div>
         <div class="wb-why"><span class="ma-label">Why · 为什么</span>${bi(q.why_en, q.why_cn)}</div>`
      : `${e.typed ? `<div class="wb-typed"><span class="ma-label">What you wrote · 你写的</span>${esc(e.typed)}</div>` : ''}
         <p class="kw-line">Key terms · 关键词：
           ${(q.accept || []).map((k) => `<span class="kw">${esc(k)}</span>`).join('')}</p>
         <div class="model-answer"><span class="ma-label">Model answer · 参考答案</span>${bi(q.answer_en, q.answer_cn)}</div>`;

    return `<article class="wb-entry" data-key="${esc(key)}">
      <div class="wb-head">
        <button class="link-btn wb-jump" data-id="${esc(topic.id)}">
          <span class="hook-sec">${esc(hookSec(topic))}</span>${hookTitle(topic)}
        </button>
        <span class="wb-meta">wrong ${e.n}× · 错 ${e.n} 次 ${graded}<span class="wb-date">${esc(e.last)}</span></span>
        <button class="wb-x" title="Remove from this book. The question stays in the question bank and can come up again. · 从错题本移除。题目本身还在题库里，以后照样会抽到。">×</button>
      </div>
      <div class="wb-q">${bi(q.q_en, q.q_cn)} ${speakPairBtn(q.q_en, q.q_cn)}</div>
      ${body}
      <div class="wb-actions">
        <button class="btn-ghost wb-drill-one">Try it again · 再做一次</button>
        <button class="btn-ghost wb-forget">Remove from the book · 移出错题本</button>
      </div>
    </article>`;
  }

  function renderWrongbook() {
    const scope = $('#wrong-scope') ? $('#wrong-scope').value : 'all';
    const all = wrongRows();
    const stale = all.filter((r) => !r.topic);
    const rows = all.filter((r) => r.topic && inScope(r.topic, scope));

    const box = $('#wrong-body');
    if (!box) return;

    if (!all.length) {
      box.innerHTML = `<div class="empty-state">
        <p>Nothing here yet. 错题本是空的。</p>
        <p class="muted">Every question you miss in the Quiz tab lands here automatically, together with
        what each wrong option was really about. Answer one correctly ${WRONG_CLEAR} times in a row and it leaves.
        <br>Quiz 里答错的题会自动进来，连同每个错误选项对应的知识点。之后连续答对 ${WRONG_CLEAR} 次就自动移出。</p>
      </div>`;
      renderWrongBadge();
      return;
    }

    // Book order, then chapter, then the book's own section order; within a
    // section the one missed most often first, because that is the one to fix.
    const bookRank = { cz: 0, lehninger: 1 };
    rows.sort((a, b) => {
      const ea = isEntity(a.topic), eb = isEntity(b.topic);
      if (ea !== eb) return ea ? 1 : -1;
      const ba = bookRank[bookOf(a.topic)] || 0, bb = bookRank[bookOf(b.topic)] || 0;
      if (ba !== bb) return ba - bb;
      if (a.topic.chapter !== b.topic.chapter) return (a.topic.chapter || 0) - (b.topic.chapter || 0);
      if (a.topic.id !== b.topic.id) return String(a.topic.id).localeCompare(String(b.topic.id));
      return b.e.n - a.e.n;
    });

    let html = `<p class="wb-summary">${rows.length} in view · 本视图 ${rows.length} 题`
      + (rows.length !== all.length ? ` <span class="muted">(${all.length} in the book · 全本 ${all.length})</span>` : '')
      + `</p>`;

    if (stale.length) {
      html += `<div class="wb-stale">${stale.length} entr${stale.length === 1 ? 'y' : 'ies'} point at a
        topic that no longer exists — the data changed under them.
        <span lang="zh">${stale.length} 条错题指向的节点已不存在（数据改过）。</span>
        <button class="btn-ghost" id="wb-drop-stale">Drop them · 清掉</button></div>`;
    }

    let lastGroup = null;
    rows.forEach((r) => {
      const g = isEntity(r.topic) ? 'entity' : bookOf(r.topic) + ':' + r.topic.chapter;
      if (g !== lastGroup) {
        lastGroup = g;
        const label = isEntity(r.topic)
          ? 'Integration cards · 整合卡'
          : BOOK_TITLES[bookOf(r.topic)].short + ' · Ch. ' + r.topic.chapter + ' — '
            + (state.lang === 'cn' ? chapterInfo(bookOf(r.topic), r.topic.chapter).cn
                                   : chapterInfo(bookOf(r.topic), r.topic.chapter).en);
        html += `<h3 class="wb-group">${esc(label)}</h3>`;
      }
      html += wrongEntryHtml(r);
    });

    box.innerHTML = html;

    box.querySelectorAll('.wb-entry').forEach((el) => {
      const key = el.dataset.key;
      const row = rows.filter((r) => r.key === key)[0];
      el.querySelector('.wb-jump').addEventListener('click', () => {
        state.topicId = row.topic.id;
        setMode('study'); renderStudy(); renderSidebar();
      });
      el.querySelector('.wb-drill-one').addEventListener('click', () => {
        setMode('quiz');
        startQuiz([{ topic: row.topic, q: row.e.q, generated: row.e.gen }]);
      });
      // Two ways to do the same thing on purpose: the × for someone clearing a
      // list quickly, the labelled button for someone who wants to be sure what
      // it does. Neither touches the question itself — it stays in the bank and
      // can be asked again, which is what the titles say.
      const forget = () => {
        delete state.wrong[key];
        store.set('wrong', state.wrong);
        renderWrongbook(); renderWrongBadge();
      };
      el.querySelector('.wb-forget').addEventListener('click', forget);
      el.querySelector('.wb-x').addEventListener('click', forget);
    });
    wireHookLinks(box);

    const dropStale = $('#wb-drop-stale');
    if (dropStale) dropStale.addEventListener('click', () => {
      stale.forEach((r) => { delete state.wrong[r.key]; });
      store.set('wrong', state.wrong);
      renderWrongbook(); renderWrongBadge();
    });

    renderWrongBadge();
    wireSayButtons(box);
    bionicRefresh();
  }

  /* --------------------------------------------------------- notebook 笔记本
     One free-text note per chapter, saved as you type. Deliberately NOT one
     note per topic node: 270 tiny boxes is a filing system, and what a reader
     actually wants while revising a chapter is one page they can keep adding
     to. The chapter is also the unit the exam draws on.

     Notes are the only thing in this app the reader cannot regenerate — every
     other piece of localStorage (progress, Leitner boxes, the wrong-answer
     book) rebuilds itself from use. So this is the one feature that gets an
     export button and a permanent warning rather than a dismissible one, and
     the export format is plain Markdown that reads fine with no app at all. */

  const NOTE_HEAD = '# Biochemie PRO — notebook · 笔记本';

  function noteKeys() {
    const out = [];
    booksPresent().forEach((book) => {
      chaptersOf(book).forEach((ch) => out.push(book + ':' + ch));
    });
    if (entityCards().length) out.push('entity');
    return out;
  }

  function noteLabel(key) {
    if (key === 'entity') return 'Integration cards · 整合卡';
    const i = key.lastIndexOf(':');
    const book = key.slice(0, i), ch = Number(key.slice(i + 1));
    const info = chapterInfo(book, ch);
    return BOOK_TITLES[book].short + ' · Ch. ' + ch + ' — '
         + (state.lang === 'cn' ? info.cn : info.en);
  }

  function noteText(key) { return state.notes[key] || ''; }
  function notesWritten() { return noteKeys().filter((k) => noteText(k).trim()).length; }

  function renderNoteBadge() {
    const el = $('#note-count');
    if (!el) return;
    const n = notesWritten();
    el.textContent = n ? String(n) : '';
    el.hidden = !n;
  }

  let noteSaveTimer = null;

  /* Which chapter the textarea is currently SHOWING. Not the same thing as the
     select's value, and the difference is a data-corrupting bug: the change
     handler saves the old text before loading the new chapter, but by the time
     it runs the select already reads the NEW key — so saving against
     `select.value` filed the previous chapter's note under the chapter being
     opened, and then loaded it straight back. Found by the smoke test, not by
     reading the code. */
  let noteCurrentKey = null;

  function noteStatus(msg, cls) {
    const el = $('#note-status');
    if (!el) return;
    el.textContent = msg;
    el.className = 'note-status' + (cls ? ' ' + cls : '');
  }

  function saveNoteNow() {
    const key = noteCurrentKey || $('#note-chapter').value;
    const val = $('#note-body').value;
    if (val.trim()) state.notes[key] = val; else delete state.notes[key];
    store.set('notes', state.notes);
    const t = new Date();
    noteStatus('saved ' + String(t.getHours()).padStart(2, '0') + ':'
             + String(t.getMinutes()).padStart(2, '0') + ' · 已保存', 'ok');
    renderNoteBadge();
    renderNoteIndex();
  }

  function noteStats() {
    const v = $('#note-body').value;
    const chars = v.length;
    const lines = v.trim() ? v.trim().split(/\n/).length : 0;
    $('#note-stats').textContent = chars ? chars + ' chars · ' + lines + ' lines' : '';
  }

  function renderNoteIndex() {
    const box = $('#note-index');
    if (!box) return;
    const written = noteKeys().filter((k) => noteText(k).trim());
    if (!written.length) { box.innerHTML = ''; return; }
    box.innerHTML = '<h3>Chapters with notes <span class="muted">已有笔记</span></h3>'
      + '<ul class="note-list">' + written.map((k) => {
          const txt = noteText(k).trim();
          const first = txt.split('\n')[0].slice(0, 70);
          return `<li><button class="link-btn note-jump" data-key="${esc(k)}">${esc(noteLabel(k))}</button>
                  <span class="note-peek">${esc(first)}${txt.length > 70 ? '…' : ''}</span>
                  <span class="note-size">${txt.length}</span></li>`;
        }).join('') + '</ul>';
    box.querySelectorAll('.note-jump').forEach((b) =>
      b.addEventListener('click', () => {
        $('#note-chapter').value = b.dataset.key;
        loadNote();
        $('#note-body').focus();
      }));
  }

  function loadNote() {
    const key = $('#note-chapter').value;
    noteCurrentKey = key;
    $('#note-body').value = noteText(key);
    noteStats();
    noteStatus(noteText(key) ? '' : 'empty · 还没写', '');
    store.set('noteLast', key);
  }

  function renderNotes() {
    const sel = $('#note-chapter');
    if (!sel) return;
    if (!sel.options.length) {
      sel.innerHTML = noteKeys().map((k) =>
        `<option value="${esc(k)}">${esc(noteLabel(k))}</option>`).join('');
      const last = store.get('noteLast', null);
      if (last && noteKeys().indexOf(last) !== -1) sel.value = last;
      loadNote();
    }
    renderNoteIndex();
    renderNoteBadge();
  }

  /* Markdown, not JSON: the export is meant to be readable and editable in any
     editor, and to survive this app being gone. It round-trips because the
     chapter key sits in the heading in brackets. */
  function exportNotes() {
    const written = noteKeys().filter((k) => noteText(k).trim());
    if (!written.length) { alert('Nothing to export yet. 还没有笔记可导出。'); return; }
    const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
    const body = NOTE_HEAD + '\n\n<!-- exported ' + stamp + ' -->\n\n'
      + written.map((k) => '## [' + k + '] ' + noteLabel(k) + '\n\n' + noteText(k).trim() + '\n').join('\n');
    const blob = new Blob([body], { type: 'text/markdown;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'biochemie-notes-' + new Date().toISOString().slice(0, 10) + '.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* Import MERGES and never silently overwrites: a chapter that already has a
     note gets the imported text appended under a dated rule, because the whole
     point of the feature is that these are the words the reader cannot get
     back. Losing them to a well-meaning import would be the same bug as
     losing them to a cleared browser. */
  function importNotes(text) {
    const parts = text.split(/^## \[([^\]]+)\][^\n]*\n/m);
    let added = 0, merged = 0;
    for (let i = 1; i < parts.length; i += 2) {
      const key = parts[i].trim();
      const val = (parts[i + 1] || '').trim();
      if (!val) continue;
      if (noteKeys().indexOf(key) === -1) continue;      // a chapter this app does not have
      if (noteText(key).trim()) {
        state.notes[key] = noteText(key).trimEnd() + '\n\n---\nimported '
          + new Date().toISOString().slice(0, 10) + '\n\n' + val;
        merged++;
      } else {
        state.notes[key] = val;
        added++;
      }
    }
    if (!added && !merged) { alert('No notes found in that file. 文件里没有找到笔记。'); return; }
    store.set('notes', state.notes);
    loadNote();
    renderNoteIndex();
    renderNoteBadge();
    alert(added + ' chapter(s) filled, ' + merged + ' merged into existing notes.\n'
        + '新建 ' + added + ' 章，合并 ' + merged + ' 章。');
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
    renderPenRow();
    // Deep link on load, and on back/forward. applyHash() returns false for an
    // unknown id, so a stale inbound link degrades to the default view rather
    // than throwing — see the note above topicFromHash().
    window.addEventListener('hashchange', applyHash);

    document.body.classList.toggle('bionic-on', state.bionic);
    $('#bionic-toggle').classList.toggle('active', state.bionic);
    // Restores 只看必背 across a reload. Must run before the first render so the
    // page never flashes the unfiltered body.
    refreshOnlyMarked();

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
    fillScopeSelect($('#wrong-scope'), 'All chapters');

    $('#stat-terms').textContent = allCards().length;
    $('#stat-questions').textContent = allQuestions().length;

    /* Quiz source cycling (A6) + the generated term drill (A7). The button
       reports what each level actually yields, so a level that happens to be
       empty reads as empty rather than as a broken control -- and any bank key
       that matches no node is named there too, since an unasked question is
       otherwise invisible. */
    renderQuizSrc();
    $('#quiz-src').addEventListener('click', () => {
      state.qsrc = QSRC[(QSRC.indexOf(state.qsrc) + 1) % QSRC.length];
      store.set('qsrc', state.qsrc);
      renderQuizSrc();
      $('#stat-questions').textContent = allQuestions().length;
    });

    renderSidebar();
    renderStudy();
    applyHash();          // an inbound #/t/<id> overrides the default view

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

    $('#only-marked-toggle').addEventListener('click', () => {
      state.onlyMarked = !state.onlyMarked;
      store.set('onlyMarked', state.onlyMarked);
      refreshOnlyMarked();
      // The sidebar ⭐ counts do not change here, but the filter is the reason
      // to look at them, so redraw to bring them back into view.
      renderSidebar();
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
    renderStarredBtn();
    $('#card-starred').addEventListener('click', () => {
      state.cardStarred = !state.cardStarred;
      store.set('cardStarred', state.cardStarred);
      renderStarredBtn();
      buildQueue(); renderCard();
    });
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
    $('#quiz-start').addEventListener('click', () => startQuiz());
    $('#oral-next').addEventListener('click', nextOral);

    // Notebook. Saving is debounced while typing, and forced on blur and on
    // page hide -- a phone that backgrounds the tab must not eat the last
    // sentence someone typed.
    renderNoteBadge();
    $('#note-chapter').addEventListener('change', () => { saveNoteNow(); loadNote(); });
    $('#note-body').addEventListener('input', () => {
      noteStats();
      noteStatus('saving… · 保存中', '');
      clearTimeout(noteSaveTimer);
      noteSaveTimer = setTimeout(saveNoteNow, 400);
    });
    $('#note-body').addEventListener('blur', () => { clearTimeout(noteSaveTimer); saveNoteNow(); });
    window.addEventListener('pagehide', () => {
      if ($('#note-body') && $('#note-body').value !== undefined) { clearTimeout(noteSaveTimer); saveNoteNow(); }
    });
    $('#note-export').addEventListener('click', exportNotes);
    $('#note-import').addEventListener('change', (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => importNotes(String(r.result || ''));
      r.readAsText(f);
      e.target.value = '';
    });

    // Wrong-answer book
    renderWrongBadge();
    $('#wrong-scope').addEventListener('change', renderWrongbook);
    $('#wrong-drill').addEventListener('click', () => {
      const scope = $('#wrong-scope').value;
      const items = wrongRows()
        .filter((r) => r.topic && inScope(r.topic, scope))
        .map((r) => ({ topic: r.topic, q: r.e.q, generated: r.e.gen }));
      if (!items.length) return;
      setMode('quiz');
      startQuiz(items);
    });
    $('#wrong-clear').addEventListener('click', () => {
      const scope = $('#wrong-scope').value;
      const rows = wrongRows().filter((r) => !r.topic || inScope(r.topic, scope));
      if (!rows.length) return;
      if (!confirm(`Remove ${rows.length} question(s) from the wrong-answer book?\n从错题本移出 ${rows.length} 题？`)) return;
      rows.forEach((r) => { delete state.wrong[r.key]; });
      store.set('wrong', state.wrong);
      renderWrongbook(); renderWrongBadge();
    });

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
