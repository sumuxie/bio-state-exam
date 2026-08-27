/* =========================================================================
   LAB HANDBOOK — experimental techniques, oral-exam trainer

   Content source: the three question sheets Jiri handed over, transcribed in
   the recombinants repo at state_exam/questions_data.py. Answers are assembled
   from existing nodes in biochemie / PESB / exam30 / labhandbook and carry the
   source id; new content is written only where no source node exists.
     * localStorage keys are prefixed "labhb." — five trainers now share one
       origin (bio., pesb., pesbpro., pesbexplain., labhb.), so a shared
       prefix would let each overwrite the others' progress.
     * `mustKnow` / `explain` are the comprehension layer inherited from the
       fork: what you must carry out of a section, always visible, and the
       question-led reasoning underneath it, collapsed by default.
   ========================================================================= */

(function () {
  'use strict';

  const TOPICS = (window.PESB && window.PESB.topics) || [];

  // §9 entries: one per printed sheet question, answered by walking an
  // ordered `spine` of existing TOPICS nodes rather than by new prose.
  const QUESTIONS = (window.PESB && window.PESB.questions) || [];

  // Jiri's own three sheet headings, plus a fourth for the applied molecular
  // biology the sheets do not name. `lectures` carries
  // the track label the source uses, so a node's badge says which experiment
  // line it belongs to rather than a lecture number — there are no lectures
  // here, only benches.
  const CHAPTER_TITLES = {
    1: { lectures: 'Lab',     en: 'Basic Lab Techniques',    cn: '基础实验技术' },
    2: { lectures: 'Micro',   en: 'Microbiology',            cn: '微生物学' },
    3: { lectures: 'Biochem', en: 'Biochemistry',            cn: '生物化学' },
    4: { lectures: 'Mol Biol', en: 'Applied molecular biology', cn: '应用分子生物学' },
    5: { lectures: 'Struct', en: 'Structural biology', cn: '结构生物学' },
    6: { lectures: 'Imported', en: 'Imported drill bank', cn: '导入题库（刷量）' }
  };

  // Only chapters that actually have nodes loaded. The data files are written
  // one chapter at a time, so declaring a chapter in CHAPTER_TITLES before its
  // data/ch*.js exists is normal; without this filter the sidebar and every
  // scope dropdown would carry an empty heading for it.
  const CHAPTERS = [1, 2, 3, 4, 5, 6].filter((ch) => TOPICS.some((t) => t.chapter === ch));

  /* ----------------------------------------------------------- persistence */
  // Seven trainers now share one origin (bio. pesb. pesbpro. pesbexplain.
  // labhb. molbio. jiri.), so a shared prefix would let each overwrite the
  // others' progress. This one is deliberately distinct from every other app
  // in this repo -- it is a separate bank, not a chapter of an existing one.
  const PREFIX = 'jiri.';

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* private mode */ }
    }
  };

  const state = {
    lang:    store.get('lang', 'both'),
    theme:   store.get('theme', 'dark'),
    bionic:  store.get('bionic', false),
    studied: new Set(store.get('studied', [])),
    boxes:   store.get('boxes', {}),      // cardKey -> Leitner box 1..5
    scores:  store.get('scores', {}),     // topicId -> {correct,total}
    marks:   store.get('marks', {}),      // markKey -> pen colour id
    notes:   store.get('notes', {}),      // topicId or markKey -> {text, anchor}
    anchors: store.get('anchors', {}),    // noteKey -> the text the note was attached to
    pen:     store.get('pen', 'y'),       // currently selected highlighter
    glossView: store.get('glossView', 'cards'),  // Terms tab: 'cards' | 'list'
    onlyMarked: false,                    // 只看必背 — deliberately not persisted
    sheetsFigOnly: false,                 // Sheets: 只看有图的题 — a view filter, not persisted
    cloze:   store.get('cloze', false),   // Sheets: 挖空 — see the key-term section
    keyMarks: store.get('keyMarks', {}),  // keyId -> '' | 'learn' | 'cram'
    qsrc:    store.get('qsrc', 'core'),   // 'core' | 'bank' | 'terms' — see allQuestions
    voice:   store.get('voice', {}),      // 'en'|'zh' -> {uri, rate, pitch} — see the pronunciation pad
    topicId: null,
    filter:  ''
  };

  /* ------------------------------------------------------------- marking
     A binary collection — "必背" — with a highlighter colour attached.
     `state.marks[key]` is either absent (not collected) or a colour code.
     The earlier tri-state (to-memorise / known / skip) was dropped: "known"
     is already what the Leitner boxes record and "skip" was never used, so
     two of the four states cost a click each without earning it.

     `key` is topic id plus a path — 'p3' for point 3, 'b1' for beyondPoint 1,
     't7' for term 7 — index-based, so reordering a topic's points shifts its
     marks. Accepted for marks because the data files are append-mostly. Notes
     carry an anchor snapshot as well, because a misfiled note is lost writing
     rather than a misplaced tick; see NOTE_ANCHOR below. */
  const PENS = [
    { id: 'y', hex: '#ffd54a', en: 'Yellow', cn: '黄' },
    { id: 'g', hex: '#7ee787', en: 'Green',  cn: '绿' },
    { id: 'b', hex: '#79c0ff', en: 'Blue',   cn: '蓝' },
    { id: 'p', hex: '#ff9ecd', en: 'Pink',   cn: '粉' }
  ];
  const PEN_IDS = PENS.map((p) => p.id);

  function markOf(key)  { return state.marks[key] || ''; }
  function isMarked(key) { return !!state.marks[key]; }

  function toggleMark(key) {
    if (state.marks[key]) delete state.marks[key];
    else state.marks[key] = state.pen;
    store.set('marks', state.marks);
    return markOf(key);
  }
  function cycleColour(key) {
    const cur = markOf(key);
    if (!cur) return '';
    state.marks[key] = PEN_IDS[(PEN_IDS.indexOf(cur) + 1) % PEN_IDS.length];
    store.set('marks', state.marks);
    return state.marks[key];
  }
  function markCount(topicId) {
    const p = topicId + ':';
    return Object.keys(state.marks).filter((k) => k.indexOf(p) === 0).length;
  }

  // ⭐ collect, plus a colour dot that only exists once something is collected.
  // Two unambiguous buttons rather than one control that means different
  // things depending on the current pen.
  function markBtn(key) {
    const m = markOf(key);
    return `<span class="mark-wrap">
              <button type="button" class="mark-btn${m ? ' on' : ''}" data-mark="${esc(key)}"
                title="Add to 必背 · 收录进必背" aria-label="Collect">${m ? '⭐' : '☆'}</button>
              <button type="button" class="pen-btn" data-pen-for="${esc(key)}" ${m ? '' : 'hidden'}
                title="Change highlighter colour · 换颜色"
                style="background:${m ? penHex(m) : 'transparent'}" aria-label="Colour"></button>
            </span>`;
  }
  function penHex(id) { const p = PENS.find((x) => x.id === id); return p ? p.hex : PENS[0].hex; }

  function applyMarkClass(el, colour) {
    if (!el) return;
    el.className = el.className.replace(/\bhl-[ygbp]\b/g, '').replace(/\s+/g, ' ').trim();
    if (colour) el.className += ' hl-' + colour;
  }

  function wireMarkButtons(root) {
    if (!root) return;
    root.querySelectorAll('.mark-btn:not([data-wired])').forEach((btn) => {
      btn.dataset.wired = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const colour = toggleMark(btn.dataset.mark);
        btn.classList.toggle('on', !!colour);
        btn.textContent = colour ? '⭐' : '☆';
        const pen = btn.parentElement.querySelector('.pen-btn');
        pen.hidden = !colour;
        pen.style.background = colour ? penHex(colour) : 'transparent';
        applyMarkClass(btn.closest('[data-markable]'), colour);
        renderSidebar();
      });
    });
    root.querySelectorAll('.pen-btn:not([data-wired])').forEach((btn) => {
      btn.dataset.wired = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const colour = cycleColour(btn.dataset.penFor);
        btn.style.background = penHex(colour);
        applyMarkClass(btn.closest('[data-markable]'), colour);
      });
    });
  }

  // One point or beyondPoint: headword, both languages each with its own
  // pronounce button, and a highlighter. EN and CN get separate buttons
  // rather than one "speak whatever is on screen" button, because in 中/EN
  // mode both are visible and you usually want to hear one specific one.
  function pointLi(topicId, path, p) {
    const key = topicId + ':' + path;
    const m = markOf(key);
    let inner = '';
    if (state.lang !== 'cn' && p.en) inner += `<div class="t-en">${mdBold(p.en)} ${speakBtn(p.en, 'en-US')}</div>`;
    if (state.lang !== 'en' && p.cn) inner += `<div class="t-cn">${mdBold(p.cn)} ${speakBtn(p.cn, 'zh-CN')}</div>`;
    return `<li data-markable class="${m ? 'hl-' + m : ''}">
              <div class="pt-head">
                ${p.term ? `<span class="term-anchor">${esc(p.term)}</span>` : '<span></span>'}
                <span class="pt-tools">${noteBtn(key)}${markBtn(key)}</span>
              </div>
              ${inner}
              ${noteSlot(key, anchorFor(p))}
            </li>`;
  }

  /* ------------------------------------------------------- per-item notes
     A note on one point, keyed the same way as its mark. The key is
     positional, so a note can drift if a topic's points are ever reordered.
     A misplaced tick is an annoyance; misfiled writing of your own is worse,
     so every note also stores a snapshot of the text it was written against.
     If that snapshot stops matching, the note is shown with a warning naming
     what it was originally attached to, rather than silently reading as a
     comment on the wrong line. */
  function anchorFor(p) {
    return ((p.term ? p.term + ' — ' : '') + String(p.en || p.cn || '')).slice(0, 80);
  }

  function noteBtn(key) {
    const has = !!(state.notes[key] && state.notes[key].trim());
    return `<button type="button" class="note-btn${has ? ' on' : ''}" data-note-for="${esc(key)}"
              title="Note on this line · 给这一条写笔记" aria-label="Note">${has ? '✎' : '✏'}</button>`;
  }

  function noteSlot(key, anchor) {
    const text = state.notes[key] || '';
    const saved = state.anchors[key];
    const drifted = saved && anchor && saved !== anchor;
    const open = !!text.trim();
    return `<div class="pt-note" data-note-slot="${esc(key)}" ${open ? '' : 'hidden'}>
              ${drifted ? `<p class="note-drift">⚠ This note was written against: “${esc(saved)}”. The line has
                 changed since — check it still applies. 这条笔记原本挂在上面那句话上，内容已经变了。</p>` : ''}
              <textarea class="pt-note-text" rows="2" data-note-key="${esc(key)}" data-anchor="${esc(anchor || '')}"
                placeholder="这一条的笔记…">${esc(text)}</textarea>
              <div class="pt-note-bar">
                <span class="pt-note-status"></span>
                <label class="btn-ghost btn-tiny note-upload">📎 图
                  <input type="file" class="pt-note-img" data-note-key="${esc(key)}" accept="image/*" multiple hidden>
                </label>
              </div>
              <div class="pt-note-imgs" data-note-imgs="${esc(key)}"></div>
            </div>`;
  }

  /* ----------------------------------------------------------------- notes
     Text lives in localStorage with everything else. Pasted or uploaded
     images do NOT: a couple of screenshots would blow the ~5 MB
     localStorage quota and take the Leitner boxes down with them. Images go
     to IndexedDB, which has no practical size limit, keyed by topic id.

     Both stores are browser-local. Clearing site data, or opening the app
     in a different browser, loses everything — which is why export/import
     is part of the feature and not an extra. */
  const IDB_NAME = 'pesbexplain-notes';
  const IDB_STORE = 'images';
  const IDB_VERSION = 2;   // v1 keyed images by topicId; v2 keys them by noteKey
  let idbPromise = null;

  function idb() {
    if (idbPromise) return idbPromise;
    idbPromise = new Promise((resolve, reject) => {
      if (!window.indexedDB) { reject(new Error('IndexedDB unavailable')); return; }
      const req = indexedDB.open(IDB_NAME, IDB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = req.result;
        const tx = req.transaction;
        let os;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          os = db.createObjectStore(IDB_STORE, { keyPath: 'id', autoIncrement: true });
        } else {
          os = tx.objectStore(IDB_STORE);
        }
        // v1 rows carry `topicId`; v2 wants `noteKey`, which for a whole-section
        // note is the topic id unchanged. Rewrite them rather than orphaning
        // images the user has already attached.
        if (e.oldVersion < 2) {
          if (os.indexNames.contains('topicId')) os.deleteIndex('topicId');
          os.createIndex('noteKey', 'noteKey', { unique: false });
          os.openCursor().onsuccess = (ev) => {
            const cur = ev.target.result;
            if (!cur) return;
            const v = cur.value;
            if (v.noteKey === undefined) { v.noteKey = v.topicId; delete v.topicId; cur.update(v); }
            cur.continue();
          };
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return idbPromise;
  }

  function idbTx(mode, fn) {
    return idb().then((db) => new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, mode);
      const req = fn(tx.objectStore(IDB_STORE));
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }));
  }

  const noteImages = {
    list(noteKey)      { return idbTx('readonly',  (s) => s.index('noteKey').getAll(noteKey)); },
    add(noteKey, name, dataUrl) { return idbTx('readwrite', (s) => s.add({ noteKey, name, dataUrl, added: new Date().toISOString() })); },
    remove(id)         { return idbTx('readwrite', (s) => s.delete(id)); },
    all()              { return idbTx('readonly',  (s) => s.getAll()); }
  };

  // Everything the user typed or pasted, in one file. Deliberately includes
  // the images: a backup that silently drops half the content is worse than
  // no backup, because you only find out when you need it.
  function exportUserData() {
    return noteImages.all().then((images) => JSON.stringify({
      app: 'pesbexplain',
      exported: new Date().toISOString(),
      keys: ['studied', 'boxes', 'scores', 'marks', 'notes', 'anchors', 'pen', 'lang', 'theme', 'bionic'].reduce((acc, k) => {
        const raw = localStorage.getItem(PREFIX + k);
        if (raw !== null) acc[k] = JSON.parse(raw);
        return acc;
      }, {}),
      images: images
    }, null, 2));
  }

  function importUserData(text) {
    const data = JSON.parse(text);
    if (data.app !== 'pesbexplain') throw new Error('Not a pesbexplain export file (app field is "' + data.app + '")');
    Object.keys(data.keys || {}).forEach((k) => localStorage.setItem(PREFIX + k, JSON.stringify(data.keys[k])));
    const imgs = data.images || [];
    return imgs.reduce(
      (chain, im) => chain.then(() => noteImages.add(im.noteKey || im.topicId, im.name, im.dataUrl)),
      Promise.resolve()
    ).then(() => ({ keys: Object.keys(data.keys || {}).length, images: imgs.length }));
  }

  /* ---------------------------------------------------------------- helpers */
  const $  = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // `explain` answers are written as prose: blank line between paragraphs,
  // **double asterisks** around the one phrase that carries the point.
  // Everything is escaped first and the bold is added afterwards, so the only
  // markup that can reach the DOM is the <strong> this function puts there —
  // an author cannot inject HTML through a data file by accident.
  /* Inline **bold** for prose. esc() runs FIRST and the markup is applied to
     already-escaped text, so this cannot introduce a tag the escaping was
     meant to stop.

     paras() always did this; the bug was that every other prose field went
     through bare esc(), so text authored with ** — which the source corpora
     do throughout, in both languages — reached the screen with the stars
     showing. Rendering it here rather than stripping it in the data keeps the
     author's emphasis instead of flattening a heavily-marked paragraph into
     undifferentiated text. */
  function mdBold(s) {
    // Split rather than /\*\*([^*]+)\*\*/g. The corpora write adjacent bold
    // runs with no separator — `...对位。****能量是...` — and the regex cannot
    // express that: `[^*]+` fails on the inner `**`, so it re-pairs across the
    // boundary, emphasised `。` on its own and left one literal `**` on screen.
    // Alternating over the split has no boundary to get wrong.
    const parts = esc(s).split('**');
    // An even part count means an odd number of markers, i.e. one has no
    // partner. Render the text as written rather than guess where the emphasis
    // was meant to close; check_asterisks.py flags these in the data.
    if (parts.length % 2 === 0) return esc(s);
    return parts.map((p, i) => (i % 2 ? (p ? `<strong>${p}</strong>` : '') : p)).join('');
  }

  function paras(text) {
    return String(text == null ? '' : text)
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${mdBold(p)}</p>`)
      .join('');
  }

  // Same text with the emphasis markers removed, for the pronounce button —
  // otherwise the speech synthesiser reads the asterisks out loud.
  function stripTags(text) {
    return String(text == null ? '' : text).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  }

  /* 追根溯源 — Ruojin's own framing for what an unfamiliar name needs:
     这是啥 / 从哪来 / 到哪去 / 家里几口人 / 人均几亩地. The point of the fixed
     row order is that the first thing you read is always "what is it", so a
     term you have never seen cannot leave you 一头雾水 before you reach the
     explanation. Every row is optional; omitted rows simply do not render,
     so a concept with no numbers worth memorising has no numbers row. */
  const TRACE_ROWS = [
    ['what',    '这是啥',       'What it is'],
    ['from',    '从哪来',       'Where it came from'],
    ['to',      '到哪去',       'Where it leads'],
    ['family',  '家里几口人',   'What else is in its family'],
    ['numbers', '人均几亩地',   'The numbers, if any matter']
  ];

  function traceTable(tr) {
    if (!tr) return '';
    const rows = TRACE_ROWS
      .filter(([k]) => tr[k])
      .map(([k, cn, en]) => `<tr>
             <th><span class="tr-cn">${cn}</span><span class="tr-en">${esc(en)}</span></th>
             <td>${paras(tr[k])}</td>
           </tr>`)
      .join('');
    return rows ? `<table class="trace"><tbody>${rows}</tbody></table>` : '';
  }

  // Renders an EN/CN pair honouring the current language setting.
  function bi(en, cn, cls) {
    const c = cls ? ' ' + cls : '';
    let out = '';
    if (state.lang !== 'cn' && en) out += `<div class="t-en${c}">${mdBold(en)}</div>`;
    if (state.lang !== 'en' && cn) out += `<div class="t-cn${c}">${mdBold(cn)}</div>`;
    return out;
  }

  // The same pair with a pronounce button on each language, which is the rule
  // pointLi() follows: in 中/EN mode both lines are on screen, so one button
  // that speaks "whatever is current" leaves the other language with no way
  // to be read at all. Markers are stripped from what is spoken, not from
  // what is shown.
  // `kPrefix`, when given, additionally turns every **run** into a clickable
  // key — see the 挖空 section below. Each language gets its own prefix, so an
  // id never depends on whether the other language happens to be on screen.
  function biSay(en, cn, kPrefix) {
    let out = '';
    if (state.lang !== 'cn' && en) {
      const body = kPrefix ? clozeKeys(mdBold(en), kPrefix + ':en') : mdBold(en);
      out += `<div class="t-en">${body} ${speakBtn(stripTags(en), 'en-US')}</div>`;
    }
    if (state.lang !== 'en' && cn) {
      const body = kPrefix ? clozeKeys(mdBold(cn), kPrefix + ':cn') : mdBold(cn);
      out += `<div class="t-cn">${body} ${speakBtn(stripTags(cn), 'zh-CN')}</div>`;
    }
    return out;
  }

  /* ------------------------------------------------------- key terms · 挖空
     Every **emphasised** run in a sheet answer is already the phrase an
     examiner is listening for, so it doubles as the cloze unit — no second
     markup, and no re-authoring of the data. 挖空 covers them all; a click
     uncovers one.

     On top of that each key carries a mark saying what you make of it:

       划线 learn — 会了。Underlined, and no longer bold: it stops shouting.
       高亮 cram  — 还不懂，要背。Highlighter behind it, loudest thing on the card.

     One click drives both, because in practice they are one motion: 盖住 →
     自己说一遍 → 点开核对 → 再点一下说「这个我会 / 这个得背」. So with 挖空 on
     the first click reveals, and each further click advances the mark,
     wrapping round to unmarked-and-covered again. With 挖空 off there is
     nothing to reveal and a click goes straight to the mark.

     The id is question id + language + the run's index within that block, so
     it is index-based like `marks` above and shifts if a sentence gains an
     earlier **run**. Accepted for the same reason — the data files are
     append-mostly, and a misplaced underline costs nothing. The reveal state
     is deliberately NOT persisted: a cover that survived a reload would drop
     the next session into the middle of the last one. */
  const KEY_MARK_CYCLE = ['', 'learn', 'cram'];

  function keyMarkOf(id) { return state.keyMarks[id] || ''; }

  function nextKeyMark(id) {
    const cur = KEY_MARK_CYCLE.indexOf(keyMarkOf(id));
    const next = KEY_MARK_CYCLE[(cur + 1) % KEY_MARK_CYCLE.length];
    if (next) state.keyMarks[id] = next; else delete state.keyMarks[id];
    store.set('keyMarks', state.keyMarks);
    return next;
  }

  function keyMarkCount(kind) {
    return Object.keys(state.keyMarks).filter((k) => state.keyMarks[k] === kind).length;
  }

  // mdBold() is the only thing in this file that emits <strong>, so tagging
  // its output by counting opening tags is exact and needs no HTML parsing —
  // provided one call covers one language block, which is what the prefix
  // convention enforces.
  function clozeKeys(html, prefix) {
    let i = 0;
    return String(html).replace(/<strong>/g, () => {
      const id = prefix + ':' + (i++);
      const mk = keyMarkOf(id);
      return `<strong class="k${mk ? ' mk-' + mk : ''}" data-k="${esc(id)}"`
           + ' role="button" tabindex="0">';
    });
  }

  function wireKeyTerms(root) {
    if (!root) return;
    root.querySelectorAll('.k:not([data-wired])').forEach((el) => {
      el.dataset.wired = '1';
      const hit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Covered and not yet looked at: this click means "show me", and
        // nothing else. Judging a term you cannot see is not a thing.
        if (state.cloze && !el.classList.contains('shown')) {
          el.classList.add('shown');
          return;
        }
        const mk = nextKeyMark(el.dataset.k);
        el.classList.remove('mk-learn', 'mk-cram');
        if (mk) el.classList.add('mk-' + mk);
        else if (state.cloze) el.classList.remove('shown');
        updateKeyMarkCount();
      };
      el.addEventListener('click', hit);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') hit(e);
      });
    });
  }

  /* ---------------------------------------------------------- pronunciation
     Browser-synthesised speech (Web Speech API) — NOT a recorded human
     voice. A static site with no backend has no way to host real audio for
     hundreds of terms in two languages; this is the pragmatic substitute.

     What the voice pad changes is *which* synthesiser speaks. The gap
     between the two kinds a machine may have installed is much wider than
     any wording tweak: the neural ones (Windows 11 / Edge "… Online
     (Natural)", macOS "Enhanced"/"Premium", Siri) are trained on a real
     speaker and are close to a recording; the old offline SAPI voices
     (David, Zira, Huihui) are concatenative and audibly machine. Both are
     listed, the neural ones flagged 自然, so what you are hearing is never
     in doubt. None of them is a recording of a person, and the pad says so
     on its face rather than in a comment only I read. */
  const speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window;
  let activeSayBtn = null;

  // Rate is per language because one number does not read the same in both.
  // These two were the previously hard-coded values and stay the defaults, so
  // the app sounds exactly as before until the pad is touched.
  const VOICE_DEFAULTS = {
    en: { uri: '', rate: 0.94, pitch: 1 },
    zh: { uri: '', rate: 1.0,  pitch: 1 }
  };
  // Vendor words that mark a neural voice. Matched on the voice name, which is
  // the only signal the Web Speech API exposes — there is no "is this neural"
  // flag — so this is a heuristic and is presented as a hint, not a promise.
  const VOICE_NATURAL_RE = /natural|neural|online|premium|enhanced|siri/i;
  const VOICE_SAMPLE = {
    en: 'Site-directed mutagenesis introduces one defined point mutation.',
    zh: '定点突变在指定位置引入一个确定的点突变，再用 Ni-NTA 亲和层析纯化。'
  };

  const langTag = (s) => String(s || '').replace(/_/g, '-').toLowerCase();
  // Every zh-* variant shares one setting, likewise every en-*; the variant
  // itself is carried by whichever voice is chosen (zh-TW voice = 台湾口音).
  const voiceKey = (lang) => (langTag(lang).indexOf('zh') === 0 ? 'zh' : 'en');

  function voiceCfg(key) {
    return Object.assign({}, VOICE_DEFAULTS[key], state.voice[key] || {});
  }
  function setVoiceCfg(key, patch) {
    state.voice[key] = Object.assign(voiceCfg(key), patch);
    store.set('voice', state.voice);
  }
  function allVoices() {
    if (!speechAvailable) return [];
    try { return window.speechSynthesis.getVoices() || []; } catch (e) { return []; }
  }
  function voicesFor(key) {
    return allVoices().filter((v) => langTag(v.lang).indexOf(key) === 0);
  }

  function pickVoice(lang) {
    const voices = allVoices();
    if (!voices.length) return null;
    const key = voiceKey(lang);
    const cfg = voiceCfg(key);
    if (cfg.uri) {
      const chosen = voices.find((v) => v.voiceURI === cfg.uri);
      if (chosen) return chosen;
      // Saved voice is gone — another machine, another browser, or an OS voice
      // that was uninstalled. Fall through to the automatic pick rather than
      // reading Chinese in an English voice.
    }
    const want = langTag(lang);
    return voices.find((v) => langTag(v.lang) === want) ||
           voices.find((v) => langTag(v.lang).indexOf(key) === 0) ||
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

    const cfg = voiceCfg(voiceKey(lang));
    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk);
      const v = pickVoice(lang);
      // A voice for a neighbouring variant (zh-TW asked to read zh-CN) reads
      // its own tag correctly and the requested one unpredictably, so the
      // utterance follows the voice rather than the request.
      u.lang = v && v.lang ? v.lang : lang;
      u.rate = cfg.rate;
      u.pitch = cfg.pitch;
      if (v) u.voice = v;
      if (i === 0) u.onstart = () => { if (btn) { btn.classList.add('speaking'); activeSayBtn = btn; } };
      if (i === chunks.length - 1) { u.onend = clearActive; u.onerror = clearActive; }
      window.speechSynthesis.speak(u);
    });
  }

  // `label` is for the one case where the button does not sit at the end of
  // the text it reads — a heading above both language blocks — and a bare 🔊
  // would not say which language it is about to speak.
  function speakBtn(text, lang, label) {
    if (!speechAvailable || !text) return '';
    return `<button type="button" class="say-btn${label ? ' say-labelled' : ''}" data-say="${esc(text)}" data-lang="${lang}"
              aria-label="Pronounce${label ? ' — ' + esc(label) : ''}"
              title="Pronounce (synthesised speech, not a recording)"
              >🔊${label ? `<span class="say-lang">${esc(label)}</span>` : ''}</button>`;
  }

  // Both languages, each labelled, for a heading that sits above the text
  // rather than at the end of one line of it.
  function sayBothBtns(en, cn) {
    return (state.lang !== 'cn' ? speakBtn(stripTags(en), 'en-US', 'EN') : '')
         + (state.lang !== 'en' ? speakBtn(stripTags(cn), 'zh-CN', '中') : '');
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

  /* ------------------------------------------------------- pronunciation pad
     One panel for both languages: voice, speed, pitch, and a preview built
     from a real course sentence rather than "hello", because the whole point
     is to hear how a voice handles 定点突变 and Ni-NTA before trusting it.
     Settings are per language and applied by speak() above, so every 🔊 in
     the app — points, terms, flashcards, quiz — follows them at once. */
  let voicePadKey = 'en';

  function voicePadOpen() {
    const pad = $('#voice-pad');
    return pad && !pad.hidden;
  }

  function renderVoicePad() {
    const pad = $('#voice-pad');
    if (!pad) return;
    if (!speechAvailable) {
      pad.innerHTML = '<p class="vp-note">This browser has no speech synthesis. '
        + '这个浏览器不支持语音合成，请用 Chrome、Edge 或 Safari 打开。</p>';
      return;
    }
    const key = voicePadKey;
    const cfg = voiceCfg(key);
    const list = voicesFor(key);
    const natural = list.filter((v) => VOICE_NATURAL_RE.test(v.name));

    const opts = ['<option value=""' + (cfg.uri ? '' : ' selected') + '>Automatic · 自动选择</option>']
      .concat(list.map((v) => {
        const tag = VOICE_NATURAL_RE.test(v.name) ? ' ✦自然' : '';
        return '<option value="' + esc(v.voiceURI) + '"' + (v.voiceURI === cfg.uri ? ' selected' : '') + '>'
             + esc(v.name) + ' · ' + esc(v.lang) + tag + '</option>';
      })).join('');

    // Naming what is missing is more useful than an empty dropdown: on a bare
    // Windows install there is no Chinese voice at all, and nothing in the
    // page would otherwise explain the silence.
    let hint = '';
    if (!list.length) {
      hint = '<p class="vp-warn">这台电脑没有装' + (key === 'zh' ? '中文' : '英文') + '语音。'
           + 'Windows：设置 → 时间和语言 → 语音 → 添加语音；或用 Microsoft Edge 打开本页。</p>';
    } else if (!natural.length) {
      hint = '<p class="vp-note">只找到合成感较强的系统语音。用 Microsoft Edge 打开本页可以拿到 '
           + '“Online (Natural)” 神经网络语音，最接近真人。</p>';
    }

    pad.innerHTML =
      '<div class="vp-head">'
      + '<strong>Pronunciation · 发音</strong>'
      + '<button type="button" class="icon-btn vp-x" id="vp-close" aria-label="Close">✕</button>'
      + '</div>'
      + '<div class="vp-tabs">'
      + '<button type="button" data-vp-key="en" class="' + (key === 'en' ? 'active' : '') + '">EN</button>'
      + '<button type="button" data-vp-key="zh" class="' + (key === 'zh' ? 'active' : '') + '">中文</button>'
      + '</div>'
      + '<label class="vp-row"><span>Voice · 声音</span>'
      + '<select id="vp-voice">' + opts + '</select></label>'
      + hint
      + '<label class="vp-row"><span>Speed · 语速</span>'
      + '<input type="range" id="vp-rate" min="0.5" max="1.6" step="0.02" value="' + cfg.rate + '">'
      + '<output id="vp-rate-val">' + cfg.rate.toFixed(2) + '×</output></label>'
      + '<label class="vp-row"><span>Pitch · 音调</span>'
      + '<input type="range" id="vp-pitch" min="0.6" max="1.4" step="0.05" value="' + cfg.pitch + '">'
      + '<output id="vp-pitch-val">' + cfg.pitch.toFixed(2) + '</output></label>'
      + '<div class="vp-actions">'
      + '<button type="button" class="btn-ghost vp-btn" id="vp-test">▶ 试听 Preview</button>'
      + '<button type="button" class="btn-ghost vp-btn" id="vp-stop">■ Stop</button>'
      + '<button type="button" class="btn-ghost vp-btn" id="vp-reset">Reset</button>'
      + '</div>'
      + '<p class="vp-note">系统合成音，不是真人录音 — 标 ✦自然 的是神经网络语音，'
      + '最接近真人；判断依据是语音名称，仅作提示。设置对全站所有 🔊 生效。</p>';
  }

  function voicePadSetOpen(open) {
    const pad = $('#voice-pad');
    if (!pad) return;
    if (open) renderVoicePad();
    pad.hidden = !open;
    const btn = $('#voice-toggle');
    if (btn) {
      btn.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  }

  function wireVoicePad() {
    const pad = $('#voice-pad');
    const toggle = $('#voice-toggle');
    if (!pad || !toggle) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      voicePadSetOpen(pad.hidden);
    });

    // Dragging a slider must not re-render the pad under the pointer, so each
    // control updates only its own readout and the stored value.
    pad.addEventListener('input', (e) => {
      const t = e.target;
      if (t.id === 'vp-voice') { setVoiceCfg(voicePadKey, { uri: t.value }); return; }
      if (t.id === 'vp-rate') {
        const r = Number(t.value);
        setVoiceCfg(voicePadKey, { rate: r });
        $('#vp-rate-val').textContent = r.toFixed(2) + '×';
        return;
      }
      if (t.id === 'vp-pitch') {
        const p = Number(t.value);
        setVoiceCfg(voicePadKey, { pitch: p });
        $('#vp-pitch-val').textContent = p.toFixed(2);
      }
    });

    pad.addEventListener('click', (e) => {
      e.stopPropagation();
      const tab = e.target.closest('[data-vp-key]');
      if (tab) { voicePadKey = tab.dataset.vpKey; renderVoicePad(); return; }
      if (e.target.closest('#vp-close')) { voicePadSetOpen(false); return; }
      if (e.target.closest('#vp-reset')) {
        delete state.voice[voicePadKey];
        store.set('voice', state.voice);
        renderVoicePad();
        return;
      }
      if (e.target.closest('#vp-stop')) {
        window.speechSynthesis.cancel();
        if (activeSayBtn) { activeSayBtn.classList.remove('speaking'); activeSayBtn = null; }
        return;
      }
      const test = e.target.closest('#vp-test');
      if (test) speak(VOICE_SAMPLE[voicePadKey], voicePadKey === 'zh' ? 'zh-CN' : 'en-US', test);
    });

    document.addEventListener('click', () => { if (voicePadOpen()) voicePadSetOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && voicePadOpen()) voicePadSetOpen(false);
    });
  }

  // ---------------------------------------------------------- bionic reading
  // Bolds the leading fraction of each Latin-script word so the eye can
  // "complete" the rest — a well-known reading-speed aid for ADHD/dyslexic
  // readers. Applied only to Latin script; Chinese is left untouched since
  // the technique doesn't transfer to a logographic script.
  const BIONIC_SKIP_CLASSES = ['badge', 'th-sec', 'q-meta', 'fc-tag', 'opt-key', 'kw', 'ma-label', 'term-anchor', 'ti-sec'];

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
  const cardKey = (topic, term) => topic.id + '::' + term.en;

  function allCards() {
    const out = [];
    TOPICS.forEach((t) => (t.terms || []).forEach((term) => out.push({ topic: t, term: term })));
    return out;
  }

  /* ------------------------------------------------------------- questions
     Three sources, switched by one control in the Quiz tab.

       core   — `quiz`, exactly four per node. That count rule is what lets
                the validator catch an under-written node, so it is never
                relaxed.
       bank   — `bank`, hand-written extras, any number, no count rule.
       terms  — generated at run time from the `terms` arrays.

     The generated set is deliberately NOT written into the data files. It
     would add roughly 450 items of boilerplate that no human would ever
     edit, and it would silently go stale the moment a definition was
     reworded. Generating it on load costs nothing and cannot drift. */
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
     index so the drill does not become a single mechanical pattern:
     even terms ask term -> definition, odd ones definition -> term.

     Distractors are drawn from the same chapter, because a distractor from a
     different lecture is usually rejectable on topic alone and the question
     stops testing anything. Terms whose definition text collides with the
     answer are skipped rather than used, or the question would have two
     defensible answers. */
  let termQuestionCache = null;

  function termQuestions() {
    if (termQuestionCache) return termQuestionCache;
    const byChapter = {};
    allTerms().forEach((r) => (byChapter[r.topic.chapter] = byChapter[r.topic.chapter] || []).push(r));

    const out = [];
    Object.keys(byChapter).forEach((ch) => {
      const pool = byChapter[ch];
      pool.forEach((r, i) => {
        const term = r.term;
        if (!term.en || !term.cn || !term.def_en || !term.def_cn) return;

        // Three distractors from the same chapter, spread across the pool
        // rather than taken from the neighbours, which would cluster them
        // all inside one topic.
        const others = [];
        for (let k = 1; others.length < 3 && k < pool.length; k++) {
          const cand = pool[(i + k * 7 + 1) % pool.length];
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
            why_en: `${term.en} — ${term.def_en} (${r.topic.section} ${r.topic.enTitle})`,
            why_cn: `${term.cn}——${term.def_cn}（${r.topic.section} ${r.topic.cnTitle}）`
          }
        });
      });
    });
    termQuestionCache = out;
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
    CHAPTERS.forEach((ch) => {
      const list = TOPICS.filter((t) => t.chapter === ch);
      if (!list.length) return;
      const info = CHAPTER_TITLES[ch];
      html += `<optgroup label="${esc(info.lectures + ' — ' + info.en)}">`;
      html += `<option value="ch:${ch}">Whole batch ${ch} (${esc(info.lectures)})</option>`;
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
    if (mode === 'gloss') renderGlossary();
    if (mode === 'sheets') renderSheets();
    closeSidebarOnMobile();
  }

  /* -------------------------------------------------------------- glossary
     Every `terms` entry in the corpus, flattened into one searchable list.
     Same marks as the study view — a term marked 🟡 here shows 🟡 in its
     topic, because both read the one `state.marks` map keyed by topic id
     plus term index. */
  function allTerms() {
    const out = [];
    TOPICS.forEach((t) => (t.terms || []).forEach((term, i) => {
      out.push({ topic: t, term: term, key: t.id + ':t' + i });
    }));
    return out;
  }

  // Whatever the three filters above the Terms panel currently select. Both
  // the list and the card drill read this, so the drill is always exactly
  // the set you can see — including "only what I have collected".
  function glossRows() {
    const needle = ($('#gloss-search').value || '').trim().toLowerCase();
    const scope = $('#gloss-scope').value;
    const markFilter = $('#gloss-mark').value;

    let rows = allTerms().filter((r) => inScope(r.topic, scope));
    if (needle) {
      rows = rows.filter((r) => [r.term.en, r.term.cn, r.term.def_en, r.term.def_cn]
        .join(' ').toLowerCase().includes(needle));
    }
    if (markFilter === 'marked')    rows = rows.filter((r) => isMarked(r.key));
    else if (markFilter === 'none') rows = rows.filter((r) => !isMarked(r.key));
    return rows;
  }

  function renderGlossary() {
    const cards = state.glossView === 'cards';
    $('#gloss-cards').hidden = !cards;
    $('#gloss-body').hidden = cards;
    $('#gloss-view').textContent = cards ? '📔 List · 列表' : '🃏 Cards · 卡片';
    $('#gloss-view').classList.toggle('active', cards);
    if (cards) return renderGlossCards();

    const body = $('#gloss-body');
    const rows = glossRows();
    const total = allTerms().length;
    $('#gloss-count').textContent = `${rows.length} of ${total} terms · 共 ${total} 条，显示 ${rows.length} 条`;

    if (!rows.length) {
      body.innerHTML = '<div class="empty-state"><p>No term matches this filter.</p></div>';
      return;
    }

    // Grouped by chapter so the list stays navigable at 450-plus entries.
    let html = '';
    CHAPTERS.forEach((ch) => {
      const inCh = rows.filter((r) => r.topic.chapter === ch);
      if (!inCh.length) return;
      const info = CHAPTER_TITLES[ch];
      html += `<h3 class="gloss-ch">${ch} · ${esc(info.en)} <span class="muted">${esc(info.cn)}</span>
                 <span class="badge">${inCh.length}</span></h3><div class="term-grid">`;
      inCh.forEach((r) => {
        const m = markOf(r.key);
        html += `<div class="term${m ? ' marked-' + m : ''}" data-markable>
                   <div class="term-en">${esc(r.term.en || '')} ${speakBtn(r.term.en, 'en-US')} ${markBtn(r.key)}</div>
                   <div class="term-cn">${esc(r.term.cn || '')} ${speakBtn(r.term.cn, 'zh-CN')}</div>
                   <div class="term-def">
                     ${state.lang !== 'cn' && r.term.def_en ? `<div class="t-en">${esc(r.term.def_en)} ${speakBtn(r.term.def_en, 'en-US')}</div>` : ''}
                     ${state.lang !== 'en' && r.term.def_cn ? `<div class="t-cn">${esc(r.term.def_cn)} ${speakBtn(r.term.def_cn, 'zh-CN')}</div>` : ''}
                   </div>
                   <div class="term-src">${esc(r.topic.section)} · ${esc(r.topic.enTitle)}</div>
                 </div>`;
      });
      html += `</div>`;
    });
    body.innerHTML = html;
    wireSayButtons(body);
    wireMarkButtons(body);
    bionicRefresh();
  }

  /* ------------------------------------------------- glossary card drill
     English on the front, Chinese and both definitions on the back, then
     记得 / 不记得. Grading writes to `state.boxes` through the same cardKey
     the Cards tab uses, so the two are one deck seen two ways — grading a
     term here moves it in the Cards tab too. Duplicating the progress would
     have been the easy implementation and the wrong one. */
  let glossQueue = [], glossCard = null;

  function glossBuildQueue() {
    const pool = glossRows().filter((r) => (state.boxes[cardKey(r.topic, r.term)] || 1) < 5);
    const byBox = [1, 2, 3, 4].map((b) =>
      shuffle(pool.filter((r) => (state.boxes[cardKey(r.topic, r.term)] || 1) === b)));
    glossQueue = [].concat.apply([], byBox);
    glossCard = glossQueue.shift() || null;
  }

  function renderGlossCards() {
    const rows = glossRows();
    const total = allTerms().length;
    $('#gloss-count').textContent =
      `${rows.length} of ${total} terms in this drill · 本轮 ${rows.length} 条（共 ${total} 条）`;

    // Leitner spread for the filtered set, not the whole corpus.
    let lh = '';
    for (let b = 1; b <= 5; b++) {
      const n = rows.filter((r) => (state.boxes[cardKey(r.topic, r.term)] || 1) === b).length;
      lh += `<div class="leitner-box${b === 5 ? ' mastered' : ''}">
               <span class="lb-n">${n}</span><span class="lb-l">Box ${b}${b === 5 ? ' ✓' : ''}</span>
             </div>`;
    }
    $('#gloss-leitner').innerHTML = lh;

    if (!glossCard) glossBuildQueue();
    const has = !!glossCard;
    $('#gloss-card').hidden = !has;
    $('#gloss-hit').parentElement.hidden = !has;
    $('#gloss-counter').hidden = !has;
    $('#gloss-cards-empty').hidden = has;
    if (!has) return;

    const { topic, term, key } = glossCard;
    const box = state.boxes[cardKey(topic, term)] || 1;
    const star = isMarked(key) ? ' ⭐' : '';
    $('#gloss-card').classList.remove('flipped');
    $('#gloss-fc-tag').textContent = `${topic.section} · Box ${box}${star}`;
    $('#gloss-fc-tag-back').textContent = `${topic.section} · ${topic.enTitle}`;
    $('#gloss-fc-en').innerHTML = `${esc(term.en || '')} ${speakBtn(term.en, 'en-US')}`;
    $('#gloss-fc-cn').innerHTML = `${esc(term.cn || '')} ${speakBtn(term.cn, 'zh-CN')}`;
    $('#gloss-fc-def').innerHTML =
      (term.def_en ? `<div class="t-en">${mdBold(term.def_en)} ${speakBtn(term.def_en, 'en-US')}</div>` : '') +
      (term.def_cn ? `<div class="t-cn">${mdBold(term.def_cn)} ${speakBtn(term.def_cn, 'zh-CN')}</div>` : '');
    $('#gloss-counter').textContent = `${glossQueue.length} more in this round · 本轮还剩 ${glossQueue.length} 条`;

    wireSayButtons($('#gloss-card'));
    bionicRefresh();
  }

  function glossGrade(good) {
    if (!glossCard) return;
    const k = cardKey(glossCard.topic, glossCard.term);
    const box = state.boxes[k] || 1;
    state.boxes[k] = good ? Math.min(5, box + 1) : 1;
    store.set('boxes', state.boxes);
    if (!good) glossQueue.push(glossCard);   // missed cards come back this round
    glossCard = glossQueue.shift() || null;
    if (!glossCard) glossBuildQueue();
    renderGlossCards();
  }

  function closeSidebarOnMobile() {
    if (window.matchMedia('(max-width: 900px)').matches) {
      $('#sidebar').classList.remove('open');
      $('#scrim').classList.remove('show');
    }
  }

  /* --------------------------------------------------------------- sheets
     §9: the unit is the QUESTION, not the node. `assembleSpine` builds the
     model answer by walking `spine` and pulling each node's OWN mustKnow --
     never text stored in the question entry -- interleaving the authored
     `joins`. This is what makes "no new facts in a question that has source
     nodes" a property of the code rather than a rule someone has to remember:
     there is no field here to put an un-sourced fact into. If a source node's
     mustKnow changes, every question built on it updates on its own. */
  function assembleSpine(q) {
    const beats = q.spine.map((nid) => topicById(nid)).filter(Boolean);
    const out = { en: [], cn: [] };
    beats.forEach((t, i) => {
      out.en.push(t.mustKnow);
      out.cn.push(t.mustKnow);
      if (i < q.joins.length) {
        out.en.push('__JOIN_EN__' + i);
        out.cn.push('__JOIN_CN__' + i);
      }
    });
    return { beats, en: out.en, cn: out.cn };
  }

  function spineChip(nid) {
    const t = topicById(nid);
    if (!t) return `<span class="sp-chip sp-missing">${esc(nid)} ?</span>`;
    return `<button class="link-btn hook-link sp-chip" data-id="${esc(t.id)}">
              <span class="hook-sec">${esc(t.section)}</span>${esc(hookTitleText(t))}
            </button>`;
  }

  // hookTitle() (used by optionHooks) returns an HTML fragment with a <br>;
  // spine chips are one line, so this is the plain-text sibling rather than
  // a second thing to keep in sync by hand.
  function hookTitleText(t) {
    return state.lang === 'cn' ? t.cnTitle : t.enTitle;
  }

  function sheetsRows() {
    const needle = ($('#sheets-search').value || '').trim().toLowerCase();
    const weight = $('#sheets-weight').value;
    let rows = QUESTIONS.slice();
    // Only 8 of the 94 carry a diagram, so without a way to ask for them they
    // are unfindable — you would have to scroll the whole list to notice one.
    if (state.sheetsFigOnly) rows = rows.filter((q) => !!q.svg);
    if (weight) rows = rows.filter((q) => String(q.weight) === weight);
    if (needle) {
      rows = rows.filter((q) => (q.stem_en + ' ' + q.stem_cn + ' ' + q.sheets)
        .toLowerCase().includes(needle));
    }
    rows.sort((a, b) => (b.weight || 1) - (a.weight || 1));
    return rows;
  }

  // The two counts sit next to the question count rather than on every card,
  // because what you want from them is one number for the whole bank: how much
  // is still on the 要背 pile.
  function updateKeyMarkCount() {
    const el = $('#sheets-marks');
    if (!el) return;
    const learn = keyMarkCount('learn');
    const cram = keyMarkCount('cram');
    el.textContent = (learn || cram)
      ? `· ${cram} 要背 to memorise · ${learn} 会了 known`
      : '';
  }

  function renderSheets() {
    const body = $('#sheets-body');
    const rows = sheetsRows();
    const figTotal = QUESTIONS.filter((q) => q.svg).length;
    $('#sheets-count').textContent =
      `${rows.length} of ${QUESTIONS.length} questions · 共 ${QUESTIONS.length} 题，显示 ${rows.length} 题`
      + (figTotal ? ` · ${figTotal} with a diagram · ${figTotal} 题有图` : '');
    body.classList.toggle('cloze-on', state.cloze);
    updateKeyMarkCount();

    if (!QUESTIONS.length) {
      body.innerHTML = `<div class="empty-state">
        <p>No sheet questions written yet in this format.</p>
        <p class="muted">还没有按这个格式写的整合题。</p>
      </div>`;
      return;
    }
    if (!rows.length) {
      body.innerHTML = '<p class="no-results">No question matches that filter.</p>';
      return;
    }

    body.innerHTML = rows.map((q) => {
      const hasSpine = Array.isArray(q.spine) && q.spine.length >= 2;
      const asm = hasSpine ? assembleSpine(q) : { beats: [], en: [], cn: [] };
      // Joins get their own <p class="sheet-join"> rather than blending into
      // the mustKnow paragraphs either side: which sentences are pulled from
      // a source node and which are this entry's own authored connective
      // tissue is exactly the distinction §9 exists to make visible.
      // clozeKeys() runs once over the whole assembled block rather than per
      // segment, so a key's index counts from the top of the answer as it is
      // read and does not shift when a spine node is re-segmented.
      const modelEn = clozeKeys(hasSpine
        ? asm.en.map((seg) => seg.startsWith('__JOIN_EN__')
            ? `<p class="sheet-join">${mdBold(q.joins[+seg.slice(11)].en)}</p>`
            : paras(seg)).join('')
        : paras(q.answer_en), q.id + ':a:en');
      const modelCn = clozeKeys(hasSpine
        ? asm.cn.map((seg) => seg.startsWith('__JOIN_CN__')
            ? `<p class="sheet-join">${mdBold(q.joins[+seg.slice(11)].cn)}</p>`
            : paras(seg)).join('')
        : paras(q.answer_cn), q.id + ':a:cn');

      // What the 🔊 in the answer heading reads. A spine answer has no text of
      // its own, so it is joined here the same way it is rendered, minus the
      // joins — those are this entry's connective tissue, not the source.
      const answerEn = stripTags(hasSpine
        ? asm.en.filter((s) => !s.startsWith('__JOIN_')).join(' ')
        : q.answer_en);
      const answerCn = stripTags(hasSpine
        ? asm.cn.filter((s) => !s.startsWith('__JOIN_')).join(' ')
        : q.answer_cn);

      const gapsHtml = (q.gaps || []).length
        ? `<p class="sheet-gaps">⚠ Beats with no source node · 没有源节点的部分：${esc((q.gaps || []).join('; '))}</p>`
        : '';

      /* `svg` is the ONE field in a data file inserted as raw markup rather
         than escaped, so that a question which asks you to draw something can
         show the drawing. Everything else here goes through esc() precisely so
         an author cannot inject HTML by accident; this field is the documented
         exception and must only ever hold hand-written SVG.

         Diagrams use currentColor for every stroke and label so they invert
         with the theme, and carry an explicit viewBox with no fixed width, so
         they scale to the card instead of overflowing it on a phone. */
      const figureHtml = q.svg
        ? `<figure class="sheet-fig">
             <div class="sheet-fig-body">${q.svg}</div>
             ${q.svg_caption ? `<figcaption>${bi(q.svg_caption.en, q.svg_caption.cn)}</figcaption>` : ''}
           </figure>`
        : '';

      const followupsHtml = (q.followups || []).length
        ? `<div class="sheet-followups">
             <h3>Likely follow-ups <span class="muted">追问</span></h3>
             ${(q.followups || []).map((f, fi) => `
               <div class="sheet-followup">
                 ${/* The question is never covered — you cannot answer a
                       prompt you cannot read — only its answer is. */''}
                 <div class="sf-q">${biSay(f.q_en, f.q_cn)}</div>
                 <div class="sf-a">${biSay(f.a_en, f.a_cn, q.id + ':f' + fi)}</div>
                 ${f.node ? spineChip(f.node) : ''}
               </div>`).join('')}
           </div>`
        : '';

      return `<article class="sheet-card">
        <div class="sheet-head">
          <span class="badge badge-slide">${esc(q.sheets)}</span>
          <span class="badge">x${q.weight || 1}</span>
          ${q.svg ? '<span class="badge badge-fig" title="This question has a diagram · 这题有图">✎ 图</span>' : ''}
        </div>
        <div class="sheet-stem">${biSay(q.stem_en, q.stem_cn)}</div>

        ${hasSpine ? `<div class="sheet-spine">
          <span class="sheet-spine-label">Spine · 追踪链</span>
          ${q.spine.map(spineChip).join('<span class="sp-arrow">→</span>')}
        </div>` : ''}

        <div class="sheet-model">
          <h3>${hasSpine
            ? 'Assembled answer <span class="muted">拼装出的答案——事实全部来自源节点</span>'
            : 'Answer <span class="muted">答案</span>'}
            ${/* The whole answer read aloud, which is the point in an oral.
                  Both languages, labelled: the heading sits above both blocks,
                  so 🔊 alone would not say which one it is about to read. */''}
            ${state.lang !== 'cn' ? speakBtn(answerEn, 'en-US', 'EN') : ''}
            ${state.lang !== 'en' ? speakBtn(answerCn, 'zh-CN', '中') : ''}</h3>
          ${state.lang !== 'cn' ? `<div class="t-en">${modelEn}</div>` : ''}
          ${state.lang !== 'en' ? `<div class="t-cn">${modelCn}</div>` : ''}
        </div>
        ${figureHtml}
        ${gapsHtml}
        ${followupsHtml}

        ${(q.sourceNodes || q.spine || []).length
          ? `<p class="sheet-source">Traceable to <span class="muted">可追溯到</span>: ${
              (q.sourceNodes || q.spine).map(spineChip).join(' ')}</p>`
          : ''}
      </article>`;
    }).join('');

    wireHookLinks(body);
    wireSayButtons(body);
    wireKeyTerms(body);
  }

  /* --------------------------------------------------------------- sidebar */
  function topicMatches(t, needle) {
    if (!needle) return true;
    const hay = [
      t.section, t.lecture, t.enTitle, t.cnTitle,
      (t.terms || []).map((x) => [x.en, x.cn].join(' ')).join(' ')
    ].join(' ').toLowerCase();
    return hay.includes(needle);
  }

  function renderSidebar() {
    const needle = state.filter.trim().toLowerCase();
    let html = '';

    CHAPTERS.forEach((ch) => {
      let list = TOPICS.filter((t) => t.chapter === ch && topicMatches(t, needle));
      // In 只看必背 mode a topic with nothing collected has nothing to show,
      // so it is removed from the list rather than opening onto an empty page.
      if (state.onlyMarked) list = list.filter((t) => markCount(t.id) > 0);
      if (!list.length) return;
      const info = CHAPTER_TITLES[ch];
      html += `<div class="chap-head">
                 <span class="chap-no">${ch}</span>
                 <span class="chap-lec">${esc(info.lectures)}</span>
                 <span class="chap-cn">${esc(info.cn)}</span>
               </div>`;
      list.forEach((t) => {
        const done = state.studied.has(t.id);
        const label = state.lang === 'cn' ? t.cnTitle : t.enTitle;
        const n = markCount(t.id);
        html += `<button class="topic-item${t.id === state.topicId ? ' current' : ''}" data-id="${esc(t.id)}">
                   <span class="ti-sec">${esc(t.section)}</span>
                   <span class="ti-title">${esc(label)}</span>
                   ${n ? `<span class="ti-marks" title="${n} collected · 已收录 ${n} 条">⭐${n}</span>` : ''}
                   ${done ? '<span class="ti-done">✓</span>' : ''}
                 </button>`;
      });
    });

    if (!html) {
      html = state.onlyMarked
        ? '<p class="no-results">Nothing collected yet. Turn ⭐ off to browse, and star what you want to memorise.<br>还没有收录任何内容。关掉 ⭐ 浏览，把要背的加上星标。</p>'
        : '<p class="no-results">No topic matches that search.</p>';
    }
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
    full:    { text: 'fully sourced', cls: 'cov-full' },
    partial: { text: 'partial — see note',  cls: 'cov-partial' }
  };

  function renderStudy() {
    const t = topicById(state.topicId);
    const body = $('#study-body');

    if (!t) {
      const figCount = TOPICS.reduce((n, x) => n + ((x.figures || []).length), 0);
      body.innerHTML = `
        <div class="welcome">
          <h1>JIRI BANK <span class="muted">老板给的三张卷子</span></h1>
          <p class="lede">A separate bank, built only from the three question sheets Jiri handed over.
             <strong>It is not exam30, not biochemie, not PESB</strong> — those stay where they are and this one
             draws on them. Progress here is stored separately, so nothing you have already ticked elsewhere is
             touched. 这是独立的一个题库，只按老板给的三张卷子组织；进度单独保存，不会动其他 app。</p>
          <div class="welcome-grid">
            <div><strong>${TOPICS.length}</strong><span>topics</span></div>
            <div><strong>${allCards().length}</strong><span>glossary terms</span></div>
            <div><strong>${allQuestions().length}</strong><span>questions</span></div>
            <div><strong>${TOPICS.filter((x) => x.oral).length}</strong><span>oral answers</span></div>
          </div>
          <p class="welcome-note"><strong>English is the working language here.</strong> The examiner asks in
             English and you answer in English, so every summary, point, question and model answer is written in
             English first; the Chinese underneath is a support layer for checking you understood, not the version
             to memorise. Use <strong>EN</strong> in the top bar to hide the Chinese once a section is solid.</p>
          <p class="welcome-note">The unit here is <strong>an exam question</strong>, not a topic. The sheets ask
             integrative questions — <em>&ldquo;describe protein expression workflow in bacterial cells&rdquo;</em> reaches
             across eight separate nodes of the PESB course — and what this bank adds is the order to say them in,
             plus the joins between them. 卷子的题是整合性的，这里加的是顺序和衔接，不是新事实。</p>
          <p class="welcome-note"><strong>Facts are imported, not rewritten.</strong> Where a question already has
             a source node in biochemie, PESB, exam30 or the lab handbook, the answer is assembled from that node
             and carries its id so any claim can be checked. New content is written only where no source exists —
             four questions on these sheets have none anywhere in 13 MB of material.</p>
          <p class="welcome-note"><strong>挖空 covers the key terms</strong> on the Sheets tab, the way exam30 does
             — the emphasised phrases are already the ones an examiner listens for, so they are the ones covered.
             Click a term to uncover it, then click again to say what you make of it: <strong>划线 = 会了</strong>,
             <strong>高亮 = 要背</strong>. Those two stay put between sessions and are counted above the list, so
             the 要背 pile is a number you can watch go down. 盖住 → 自己说一遍 → 点开核对 → 标记。</p>
          <p class="welcome-note">Sheet weight is not even. All eleven questions that appear on more than one
             sheet include <strong>Sheet 1</strong>, which also carries the only practical task, so Sheet 1 items
             are worked first. 卷一是三卷的交集，优先。</p>
          <p class="welcome-note">🔊 A speaker icon plays browser-synthesised speech — not a recording — so you can
             check pronunciation, which matters when the exam is spoken. 🎧 in the top bar picks which voice does
             it, and how fast: English and Chinese are set separately, and voices marked ✦自然 are the neural
             ones, the closest to a real speaker your machine has. 🧬 <em>Bionic</em> bolds the lead of each
             Latin-script word, a scanning aid some ADHD and dyslexic readers find helps them read faster;
             Chinese text is left alone since the technique doesn't transfer to a logographic script.</p>
        </div>`;
      bionicRefresh();
      return;
    }

    const cov = COVERAGE_LABEL[t.coverage] || COVERAGE_LABEL.partial;

    let html = `
      <article class="topic">
        <div class="topic-head">
          <div class="th-meta">
            <span class="th-sec">${esc(t.section)}</span>
            ${t.lecture ? `<span class="badge badge-lec">${esc(t.lecture)}</span>` : ''}
            <span class="badge ${cov.cls}">${esc(cov.text)}</span>
            ${t.slides ? `<span class="badge badge-slide">${esc(t.slides)}</span>` : ''}
          </div>
          <h1 class="th-en">${esc(t.enTitle)} ${speakBtn(t.enTitle, 'en-US')}</h1>
          <p class="th-cn">${esc(t.cnTitle)} ${speakBtn(t.cnTitle, 'zh-CN')}</p>
        </div>

        ${t.coverageNote ? `<p class="cov-note">${mdBold(t.coverageNote)}</p>` : ''}

        <section class="block">
          <h2>Summary <span class="muted">概要</span> ${sayBothBtns(t.summary && t.summary.en, t.summary && t.summary.cn)}</h2>
          <div class="summary">${bi(t.summary && t.summary.en, t.summary && t.summary.cn)}</div>
        </section>`;

    /* The reason this fork exists, and the shape it settled into.

       `mustKnow` is what you actually have to carry out of the section — one
       or two sentences, always visible. `explain` is everything underneath it,
       collapsed by default. Ruojin's brief: seven paragraphs of reasoning on
       open is 一头雾水; the same seven behind a "看不懂？展开" is a lifeline.
       So the default view of a section is one sentence, not an essay. */
    if (t.mustKnow || (t.explain && t.explain.length)) {
      html += `<section class="block block-explain">
                 <h2>Understand it first <span class="muted">先看懂</span>
                     <span class="badge badge-explain">why, not just what</span></h2>`;

      if (t.mustKnow) {
        html += `<div class="must-know">
                   <span class="must-know-label">Take this away · 这一节要带走的</span>
                   <div class="must-know-body">${paras(t.mustKnow)}</div>
                   ${t.skipIt ? `<p class="skip-it"><span class="skip-label">Do not memorise · 不用背</span>${mdBold(t.skipIt)}</p>` : ''}
                 </div>`;
      }

      if (t.explain && t.explain.length) {
        html += `<details class="explain-fold">
                   <summary>Not clear yet? Open the reasoning · 看不懂？展开追根溯源 · ${t.explain.length}</summary>
                   <div class="explain-body">`;
        t.explain.forEach((e, i) => {
          const key = t.id + ':x' + i;
          const m = markOf(key);
          html += `<div class="explain-item${m ? ' hl-' + m : ''}" data-markable>
                     <div class="pt-head">
                       <h3 class="explain-q">${mdBold(e.q)}</h3>
                       <span class="pt-tools">${noteBtn(key)}${markBtn(key)}${speakBtn(e.q + '。' + stripTags(e.a), 'zh-CN')}</span>
                     </div>
                     ${traceTable(e.trace)}
                     ${e.a ? `<div class="explain-a">${paras(e.a)}</div>` : ''}
                     ${e.takeaway ? `<p class="explain-takeaway">${mdBold(e.takeaway)}</p>` : ''}
                     ${noteSlot(key, e.q)}
                   </div>`;
        });
        html += `</div></details>`;
      }
      html += `</section>`;
    }

    // 只看必背 hides everything not collected. It is a revision mode, not a
    // filter on the data — the counts in the heading say what is being held
    // back so the view can never be mistaken for the whole section.
    const keep = (key) => !state.onlyMarked || isMarked(key);
    const hid = (arr, prefix) => (arr || []).filter((_, i) => !keep(t.id + ':' + prefix + i)).length;

    if (t.points && t.points.length) {
      const shown = t.points.map((p, i) => [p, i]).filter(([, i]) => keep(t.id + ':p' + i));
      const n = hid(t.points, 'p');
      if (shown.length) {
        html += `<section class="block"><h2>Point by point <span class="muted">逐条要点</span>
                 ${n ? `<span class="badge badge-hidden">${n} hidden · 隐藏 ${n} 条</span>` : ''}</h2><ol class="points">`;
        shown.forEach(([p, i]) => { html += pointLi(t.id, 'p' + i, p); });
        html += `</ol></section>`;
      }
    }

    if (t.beyondPoints && t.beyondPoints.length) {
      html += `<section class="block block-beyond">
                 <h2>Beyond the source <span class="muted">来源之外的补充</span>
                     <span class="badge badge-beyond">not in any source node</span></h2>
                 <p class="beyond-warn">No source node states this. It is standard background added
                    here to close a gap the sheets expose. Worth knowing and safe to say in an exam, but it is
                    not traceable to a source node, so it carries no id.</p>
                 <ol class="points">`;
      t.beyondPoints.forEach((p, i) => {
        if (keep(t.id + ':b' + i)) html += pointLi(t.id, 'b' + i, p);
      });
      html += `</ol></section>`;
    }

    if (t.slideFigures && t.slideFigures.length) {
      html += `<section class="block block-shots">
                 <h2>Figures from the slides <span class="muted">幻灯片中的插图</span>
                     <span class="badge badge-slide">uncaptioned</span></h2>
                 <p class="shot-note">The picture parts only, cut straight out of the lecture deck — no caption
                    was written for these, so read them against the points above. Click to open full size.</p>
                 <div class="shot-grid">`;
      t.slideFigures.forEach((s) => {
        html += `<figure class="shot">
                   <a href="${esc(s.src)}" target="_blank" rel="noopener">
                     <img src="${esc(s.src)}" alt="${esc(s.alt || 'Figure from slide ' + (s.slide || ''))}" loading="lazy">
                   </a>
                   <figcaption>${esc(s.slide || '')}</figcaption>
                 </figure>`;
      });
      html += `</div></section>`;
    }

    if (t.figures && t.figures.length) {
      html += `<section class="block"><h2>Figures <span class="muted">图示</span></h2><div class="fig-grid">`;
      t.figures.forEach((f) => {
        html += `<figure class="figure">
                   <img src="${esc(f.src)}" alt="${esc(f.alt || f.caption_en || '')}" loading="lazy">
                   <figcaption class="fig-cap">${bi(f.caption_en, f.caption_cn)}</figcaption>
                 </figure>`;
      });
      html += `</div></section>`;
    }

    if (t.terms && t.terms.length) {
      html += `<section class="block"><h2>Glossary <span class="muted">术语表</span></h2>
               <div class="term-grid">`;
      t.terms.forEach((term, i) => {
        const key = t.id + ':t' + i;
        if (!keep(key)) return;
        const m = markOf(key);
        html += `<div class="term${m ? ' hl-' + m : ''}" data-markable>
                   <div class="term-en">${esc(term.en || '')} ${speakBtn(term.en, 'en-US')} ${markBtn(key)}</div>
                   <div class="term-cn">${esc(term.cn || '')} ${speakBtn(term.cn, 'zh-CN')}</div>
                   <div class="term-def">
                     ${state.lang !== 'cn' && term.def_en ? `<div class="t-en">${mdBold(term.def_en)} ${speakBtn(term.def_en, 'en-US')}</div>` : ''}
                     ${state.lang !== 'en' && term.def_cn ? `<div class="t-cn">${mdBold(term.def_cn)} ${speakBtn(term.def_cn, 'zh-CN')}</div>` : ''}
                   </div>
                 </div>`;
      });
      html += `</div></section>`;
    }

    // Notes sit below the material and above the actions: they are the last
    // thing you add after reading, not a header ornament.
    html += `<section class="block block-notes">
               <h2>My notes <span class="muted">我的笔记</span></h2>
               <p class="note-warn">Stored in this browser only — text in localStorage, images in IndexedDB.
                  Clearing site data or switching browser loses them, so use Export before you rely on it.</p>
               <textarea id="note-text" class="note-text" rows="5"
                 placeholder="Anything you want to remember about this section… 关于这一节你想记下的任何东西…">${esc(state.notes[t.id] || '')}</textarea>
               <div class="note-bar">
                 <span class="note-status" id="note-status"></span>
                 <label class="btn-ghost note-upload">📎 Add image · 贴图
                   <input type="file" id="note-img" accept="image/*" multiple hidden>
                 </label>
                 <button class="btn-ghost" id="note-export">⬇ Export all</button>
                 <label class="btn-ghost note-upload">⬆ Import
                   <input type="file" id="note-import" accept="application/json" hidden>
                 </label>
               </div>
               <div class="note-imgs" id="note-imgs"></div>
             </section>`;

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
    wireMarkButtons(body);
    wirePointNotes(body);
    wireNotes(body, t.id);
    bionicRefresh();
  }

  /* Per-line notes: the ✏ toggles the slot, the textarea autosaves, and an
     image can be attached to that single line. Shares the storage helpers
     with the section-level note — the only difference is the key. */
  function wirePointNotes(root) {
    if (!root) return;

    root.querySelectorAll('.note-btn:not([data-wired])').forEach((btn) => {
      btn.dataset.wired = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const slot = root.querySelector(`[data-note-slot="${CSS.escape(btn.dataset.noteFor)}"]`);
        if (!slot) return;
        slot.hidden = !slot.hidden;
        if (!slot.hidden) {
          loadPointImages(slot, btn.dataset.noteFor);
          slot.querySelector('.pt-note-text').focus();
        }
      });
    });

    root.querySelectorAll('.pt-note-text:not([data-wired])').forEach((ta) => {
      ta.dataset.wired = '1';
      const key = ta.dataset.noteKey;
      const status = ta.parentElement.querySelector('.pt-note-status');
      let timer = null;
      ta.addEventListener('input', () => {
        status.textContent = '…';
        clearTimeout(timer);
        timer = setTimeout(() => {
          const v = ta.value;
          if (v.trim()) {
            state.notes[key] = v;
            state.anchors[key] = ta.dataset.anchor;   // snapshot for drift detection
          } else {
            delete state.notes[key];
            delete state.anchors[key];
          }
          store.set('notes', state.notes);
          store.set('anchors', state.anchors);
          status.textContent = 'Saved · 已保存';
          const b = root.querySelector(`[data-note-for="${CSS.escape(key)}"]`);
          if (b) { b.classList.toggle('on', !!v.trim()); b.textContent = v.trim() ? '✎' : '✏'; }
        }, 500);
      });
      ta.addEventListener('paste', (e) => {
        const files = (e.clipboardData && e.clipboardData.files) || [];
        if (files.length) { e.preventDefault(); addPointImages(root, key, files); }
      });
    });

    root.querySelectorAll('.pt-note-img:not([data-wired])').forEach((inp) => {
      inp.dataset.wired = '1';
      inp.addEventListener('change', (e) => {
        addPointImages(root, inp.dataset.noteKey, e.target.files);
        e.target.value = '';
      });
    });

    // Slots that are already open on render (because they hold a note) need
    // their images fetched without waiting for a click.
    root.querySelectorAll('[data-note-slot]:not([hidden])').forEach((slot) => {
      loadPointImages(slot, slot.dataset.noteSlot);
    });
  }

  function loadPointImages(slot, key) {
    const box = slot.querySelector('[data-note-imgs]');
    if (!box || box.dataset.loaded === key) return;
    box.dataset.loaded = key;
    noteImages.list(key).then((rows) => {
      box.innerHTML = rows.map((r) => `
        <figure class="note-img">
          <a href="${r.dataUrl}" target="_blank" rel="noopener"><img src="${r.dataUrl}" alt="${esc(r.name)}"></a>
          <figcaption>${esc(r.name)} <button class="note-img-del" data-id="${r.id}" title="Delete">✕</button></figcaption>
        </figure>`).join('');
      box.querySelectorAll('.note-img-del').forEach((b) => {
        b.addEventListener('click', () => noteImages.remove(Number(b.dataset.id))
          .then(() => { box.dataset.loaded = ''; loadPointImages(slot, key); }));
      });
    }).catch((e) => { box.innerHTML = `<p class="note-warn">Images unavailable: ${esc(e.message)}</p>`; });
  }

  function addPointImages(root, key, files) {
    const list = Array.from(files || []).filter((f) => f.type.startsWith('image/'));
    if (!list.length) return;
    Promise.all(list.map((f) => new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onload  = () => res(noteImages.add(key, f.name, fr.result));
      fr.onerror = () => rej(fr.error);
      fr.readAsDataURL(f);
    }))).then(() => {
      const slot = root.querySelector(`[data-note-slot="${CSS.escape(key)}"]`);
      if (slot) {
        slot.querySelector('[data-note-imgs]').dataset.loaded = '';
        loadPointImages(slot, key);
      }
    });
  }

  /* Notes wiring for the currently rendered topic. Saving is debounced so a
     long note is not written to localStorage on every keystroke, and the
     status line says "Saved" only after the write has actually happened. */
  function wireNotes(body, topicId) {
    const ta = body.querySelector('#note-text');
    if (!ta) return;
    const status = body.querySelector('#note-status');
    const say = (msg) => { if (status) status.textContent = msg; };

    let timer = null;
    ta.addEventListener('input', () => {
      say('…');
      clearTimeout(timer);
      timer = setTimeout(() => {
        const v = ta.value;
        if (v.trim()) state.notes[topicId] = v; else delete state.notes[topicId];
        store.set('notes', state.notes);
        say('Saved · 已保存');
      }, 500);
    });

    const gallery = body.querySelector('#note-imgs');
    function refreshImages() {
      noteImages.list(topicId).then((rows) => {
        gallery.innerHTML = rows.length ? rows.map((r) => `
          <figure class="note-img">
            <a href="${r.dataUrl}" target="_blank" rel="noopener"><img src="${r.dataUrl}" alt="${esc(r.name)}"></a>
            <figcaption>${esc(r.name)} <button class="note-img-del" data-id="${r.id}" title="Delete">✕</button></figcaption>
          </figure>`).join('') : '';
        gallery.querySelectorAll('.note-img-del').forEach((b) => {
          b.addEventListener('click', () => noteImages.remove(Number(b.dataset.id)).then(refreshImages));
        });
      }).catch((e) => { gallery.innerHTML = `<p class="note-warn">Images unavailable: ${esc(e.message)}</p>`; });
    }
    refreshImages();

    function ingest(files) {
      const list = Array.from(files || []).filter((f) => f.type.startsWith('image/'));
      if (!list.length) return;
      say(`Reading ${list.length}…`);
      Promise.all(list.map((f) => new Promise((res, rej) => {
        const fr = new FileReader();
        fr.onload  = () => res(noteImages.add(topicId, f.name, fr.result));
        fr.onerror = () => rej(fr.error);
        fr.readAsDataURL(f);
      }))).then(() => { say(`Added ${list.length} image(s) · 已添加`); refreshImages(); })
          .catch((e) => say('Image failed: ' + e.message));
    }

    body.querySelector('#note-img').addEventListener('change', (e) => { ingest(e.target.files); e.target.value = ''; });
    // Pasting a screenshot straight from the clipboard is the common case.
    ta.addEventListener('paste', (e) => {
      const items = (e.clipboardData && e.clipboardData.files) || [];
      if (items.length) { e.preventDefault(); ingest(items); }
    });

    body.querySelector('#note-export').addEventListener('click', () => {
      exportUserData().then((json) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
        a.download = 'pesbexplain-notes-' + new Date().toISOString().slice(0, 10) + '.json';
        a.click();
        URL.revokeObjectURL(a.href);
        say('Exported · 已导出');
      }).catch((e) => say('Export failed: ' + e.message));
    });

    body.querySelector('#note-import').addEventListener('change', (e) => {
      const f = e.target.files[0];
      e.target.value = '';
      if (!f) return;
      const fr = new FileReader();
      fr.onload = () => {
        try {
          importUserData(fr.result).then((n) => {
            say(`Imported ${n.keys} key(s), ${n.images} image(s) — reloading`);
            setTimeout(() => location.reload(), 800);
          }).catch((err) => say('Import failed: ' + err.message));
        } catch (err) { say('Import failed: ' + err.message); }
      };
      fr.readAsText(f);
    });
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
    // English on the front, Chinese on the back: the user is a native Chinese
    // speaker studying English, so recall is tested in the useful direction.
    $('#fc-front-term').innerHTML = `${esc(term.en || '')} ${speakBtn(term.en, 'en-US')}`;
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

  /* Option order is randomised here, at presentation time, rather than being
     rewritten in the data files.

     Measured over all 462 authored mcqs: the correct option sits at index 1
     in 85% of them (quiz 84%, bank 95%) and is the longest of the four in
     89%. "Pick B, or pick the longest" answers 363 of 462 — 79% — without
     reading any biology, which inflates every practice score and transfers
     nothing to a spoken exam.

     Patching the renderer rather than the data fixes the ~400 bank questions
     not yet written as well as the ones that are: they are being authored in
     the same shape, and a one-off shuffle of `answer:` would decay again.
     It also leaves optionRefs/optionNotes keys matching what you see in the
     source file, which is what makes them checkable by eye.

     The permutation is drawn once per question per run, and every index that
     refers to an option — answer, optionRefs, optionNotes — moves with it.
     Nothing is mutated in place: the topic objects are shared with Study,
     Terms and the term drill, so this hands back a copy. */
  function shuffleOptions(item) {
    const q = item.q;
    if (!q || q.type !== 'mcq' || !Array.isArray(q.options) || q.options.length < 2) return item;

    const order = shuffle(q.options.map((_, i) => i));   // order[newIndex] = oldIndex
    const back = [];                                     // back[oldIndex] = newIndex
    order.forEach((oldI, newI) => { back[oldI] = newI; });

    const remap = (obj) => {
      const out = {};
      Object.keys(obj).forEach((k) => {
        const oldI = Number(k);
        // A key that is not a valid option index is dropped rather than
        // carried to a wrong option; validateTopics() already reports it.
        if (Number.isInteger(oldI) && back[oldI] !== undefined) out[back[oldI]] = obj[k];
      });
      return out;
    };

    const shuffled = Object.assign({}, q, {
      options: order.map((oldI) => q.options[oldI]),
      answer: back[q.answer]
    });
    if (q.optionRefs)  shuffled.optionRefs  = remap(q.optionRefs);
    if (q.optionNotes) shuffled.optionNotes = remap(q.optionNotes);
    return Object.assign({}, item, { q: shuffled });
  }

  function startQuiz() {
    const scope = $('#quiz-scope').value;
    quizItems = shuffle(allQuestions().filter((item) => inScope(item.topic, scope)))
                  .map(shuffleOptions);
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
                <div class="q-text">${biSay(q.q_en, q.q_cn)}</div>`;

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

  /* Wrong options are not all filler, and they fail in two different ways.
     `optionRefs` handles the ones that name a concept the course teaches in
     another node: the distractor becomes a link to go and revise it.
     `optionNotes` handles the ones that encode a real misconception — two
     concepts swapped, a direction reversed — where the useful thing is to name
     the confusion, so it carries bilingual prose instead of a pointer. An
     option can have both, or neither. Neither is the common case and it is
     deliberate: those distractors correspond to nothing worth chasing, and the
     silence marks the questions that want rewriting rather than annotating. */
  // Same language rule as bi(), but emitting spans: these sit inside a
  // <button>, where block-level children would be invalid HTML.
  function hookTitle(t) {
    let s = '';
    if (state.lang !== 'cn') s += `<span class="t-en">${esc(t.enTitle)}</span>`;
    if (state.lang !== 'en') s += `<span class="t-cn">${esc(t.cnTitle)}</span>`;
    return s;
  }

  const HOOK_FILLER = {
    en: 'Nothing in the course corresponds to this one.',
    cn: '课程里没有对应的内容，这是个凑数选项。'
  };
  const HOOK_NONE = {
    en: 'None of the wrong options here corresponds to anything the course teaches, '
      + 'so there is nothing to go and revise.',
    cn: '这道题的三个错项都不对应课程里的任何内容，没有需要回头复习的东西。'
  };

  function optionHooks(q, generated) {
    // Term-drill questions are generated and their distractors are other
    // glossary entries picked mechanically, so there is no authored intent to
    // report and the panel is suppressed.
    //
    // Everything else ALWAYS gets a panel, including the third of questions
    // where every distractor is filler. "There is nothing here to chase" is a
    // real answer to "what were the other options about" — and showing nothing
    // made the feature look broken, because the questions you get right are
    // disproportionately the ones whose distractors are obvious filler.
    if (generated) return '';
    const refs = q.optionRefs || {};
    const notes = q.optionNotes || {};
    const rows = q.options
      .map((opt, i) => ({
        i: i, key: String.fromCharCode(65 + i),
        t: topicById(refs[i]), note: notes[i]
      }))
      .filter((r) => r.i !== q.answer);
    if (!rows.length) return '';

    const body = rows.some((r) => r.t || r.note)
      ? rows.map((r) => `<div class="hook">
            <span class="opt-key">${r.key}</span>
            <div class="hook-body">
              ${r.t ? `<button class="link-btn hook-link" data-id="${esc(r.t.id)}">
                         <span class="hook-sec">${esc(r.t.section)}</span>${hookTitle(r.t)}
                       </button>` : ''}
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

  function answerMcq(choice) {
    if (quizAnswered) return;
    quizAnswered = true;
    const { topic, q, generated } = quizItems[quizIndex];
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
    fb.innerHTML = `<strong>${ok ? '✓ Correct' : '✕ Not quite'}</strong>${bi(q.why_en, q.why_cn)}${optionHooks(q, generated)}`;
    wireHookLinks(fb);
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
       <div class="model-answer"><span class="ma-label">Model answer · 参考答案 ${sayBothBtns(q.answer_en, q.answer_cn)}</span>
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
        <div class="q-meta">${esc(t.section)} · ${esc(t.enTitle)}</div>
        <div class="oral-q">${biSay(t.oral.q_en, t.oral.q_cn)}</div>

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

  /* -------------------------------------------------------------- validate */
  // 92 topics x 4 quiz items is a lot of hand-authored data, and a bad mcq
  // `answer` index or a duplicated id fails silently at render time — the
  // question simply becomes unanswerable, or a card's Leitner box gets
  // shared between two topics. Checking on load turns those into a visible
  // console error instead. Same checks the CI validate job runs.
  function validateTopics() {
    const problems = [];
    const seen = new Set();
    // `optionRefs` may point forward as well as back, so the complete id set
    // has to exist before the per-topic loop, not be accumulated during it.
    const allIds = new Set(TOPICS.map((t) => t.id));

    TOPICS.forEach((t, i) => {
      const where = t.id || `index ${i}`;
      if (!t.id) problems.push(`topic at index ${i} has no id`);
      else if (seen.has(t.id)) problems.push(`duplicate id "${t.id}"`);
      else seen.add(t.id);

      if (!CHAPTER_TITLES[t.chapter]) problems.push(`${where}: chapter ${t.chapter} is not in CHAPTER_TITLES`);
      ['section', 'enTitle', 'cnTitle'].forEach((k) => {
        if (!t[k]) problems.push(`${where}: missing ${k}`);
      });
      if (!t.summary || !t.summary.en || !t.summary.cn) problems.push(`${where}: summary needs both en and cn`);

      (t.points || []).forEach((p, j) => {
        if (!p.en || !p.cn) problems.push(`${where}: point ${j + 1} needs both en and cn`);
      });
      (t.terms || []).forEach((x, j) => {
        if (!x.en || !x.cn) problems.push(`${where}: term ${j + 1} needs both en and cn`);
      });

      // `quiz` must be exactly 4 — that is the rule that catches an
      // under-written node. `bank` has no count rule but every item in it
      // gets the same per-item checks, or a malformed bank question would
      // only surface as a broken card mid-quiz.
      const quiz = t.quiz || [];
      if (quiz.length !== 4) problems.push(`${where}: has ${quiz.length} quiz items, expected 4`);

      const checkQ = (q, j, label) => {
        if (!q.q_en || !q.q_cn) problems.push(`${where}: ${label} ${j + 1} needs both q_en and q_cn`);
        if (q.type === 'mcq') {
          if (!Array.isArray(q.options) || q.options.length < 2) {
            problems.push(`${where}: ${label} ${j + 1} mcq needs at least 2 options`);
          } else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) {
            problems.push(`${where}: ${label} ${j + 1} answer index ${q.answer} is out of range`);
          }
          if (!q.why_en || !q.why_cn) problems.push(`${where}: ${label} ${j + 1} mcq needs why_en and why_cn`);
          // A hook that points nowhere, points at the answer, or points back at
          // the node you are already on is worse than no hook — it sends the
          // reader somewhere useless and costs trust in every other hook.
          if (q.optionRefs) {
            if (typeof q.optionRefs !== 'object' || Array.isArray(q.optionRefs)) {
              problems.push(`${where}: ${label} ${j + 1} optionRefs must be an object keyed by option index`);
            } else Object.keys(q.optionRefs).forEach((k) => {
              const oi = Number(k);
              const target = q.optionRefs[k];
              if (!Number.isInteger(oi) || oi < 0 || oi >= (q.options || []).length) {
                problems.push(`${where}: ${label} ${j + 1} optionRefs key "${k}" is not an option index`);
              } else if (oi === q.answer) {
                problems.push(`${where}: ${label} ${j + 1} optionRefs[${k}] annotates the correct answer`);
              }
              if (target === t.id) {
                problems.push(`${where}: ${label} ${j + 1} optionRefs[${k}] points at its own node`);
              } else if (!allIds.has(target)) {
                problems.push(`${where}: ${label} ${j + 1} optionRefs[${k}] points at unknown node "${target}"`);
              }
            });
          }
          // A note must carry both languages. A half-translated note is worse
          // than none — the corpus rule is to omit rather than fake.
          if (q.optionNotes) {
            if (typeof q.optionNotes !== 'object' || Array.isArray(q.optionNotes)) {
              problems.push(`${where}: ${label} ${j + 1} optionNotes must be an object keyed by option index`);
            } else Object.keys(q.optionNotes).forEach((k) => {
              const oi = Number(k);
              const note = q.optionNotes[k];
              if (!Number.isInteger(oi) || oi < 0 || oi >= (q.options || []).length) {
                problems.push(`${where}: ${label} ${j + 1} optionNotes key "${k}" is not an option index`);
              } else if (oi === q.answer) {
                problems.push(`${where}: ${label} ${j + 1} optionNotes[${k}] annotates the correct answer`);
              }
              if (!note || !note.en || !note.cn) {
                problems.push(`${where}: ${label} ${j + 1} optionNotes[${k}] needs both en and cn`);
              }
            });
          }
        } else if (q.type === 'short') {
          if (!Array.isArray(q.accept) || !q.accept.length) problems.push(`${where}: ${label} ${j + 1} short needs accept[]`);
          if (!q.answer_en || !q.answer_cn) problems.push(`${where}: ${label} ${j + 1} needs answer_en and answer_cn`);
        } else {
          problems.push(`${where}: ${label} ${j + 1} has unknown type "${q.type}"`);
        }
      };
      quiz.forEach((q, j) => checkQ(q, j, 'quiz'));
      (t.bank || []).forEach((q, j) => checkQ(q, j, 'bank'));

      (t.slideFigures || []).forEach((s, j) => {
        if (!s.src) problems.push(`${where}: slideFigure ${j + 1} has no src`);
        if (!s.slide) problems.push(`${where}: slideFigure ${j + 1} has no slide label`);
      });

      if (t.oral && (!t.oral.model_en || !Array.isArray(t.oral.checklist) || !t.oral.checklist.length)) {
        problems.push(`${where}: oral needs model_en and a non-empty checklist`);
      }
    });

    // §9 sheet-question entries. The model answer is ASSEMBLED from spine
    // nodes' mustKnow at render time (see assembleSpine()), so a broken
    // spine reference is not a cosmetic problem -- it silently drops that
    // beat out of the answer with no error on screen. Catch it here instead.
    QUESTIONS.forEach((q, i) => {
      const where = q.id || `question at index ${i}`;
      if (!q.id) problems.push(`question at index ${i} has no id`);
      if (!q.stem_en || !q.stem_cn) problems.push(`${where}: needs stem_en and stem_cn`);
      // Two shapes are allowed. A SPINE entry assembles its answer from the
      // mustKnow of nodes in this app, which is the no-new-facts guarantee and
      // is right whenever those nodes exist. A DIRECT entry carries answer_en /
      // answer_cn and is for the majority of sheet questions, whose topics have
      // no node here at all -- most of the 109 -- where demanding a spine would
      // mean either writing a full node first or leaving the question blank.
      const direct = !!(q.answer_en && q.answer_cn);
      if (!direct && (!Array.isArray(q.spine) || q.spine.length < 2)) {
        problems.push(`${where}: needs either answer_en + answer_cn, or a spine of 2+ nodes`);
      } else if (Array.isArray(q.spine) && q.spine.length) {
        q.spine.forEach((nid) => {
          if (!allIds.has(nid)) problems.push(`${where}: spine references unknown node "${nid}"`);
        });
        const wantJoins = q.spine.length - 1;
        if (!Array.isArray(q.joins) || q.joins.length !== wantJoins) {
          problems.push(`${where}: spine has ${q.spine.length} nodes so needs ${wantJoins} joins, has ${(q.joins || []).length}`);
        } else {
          q.joins.forEach((j, k) => {
            if (!j.en || !j.cn) problems.push(`${where}: join ${k + 1} needs both en and cn`);
          });
        }
      }
      (q.followups || []).forEach((f, j) => {
        if (!f.q_en || !f.q_cn || !f.a_en || !f.a_cn) {
          problems.push(`${where}: followup ${j + 1} needs q_en, q_cn, a_en and a_cn`);
        }
        if (f.node && !allIds.has(f.node)) {
          problems.push(`${where}: followup ${j + 1} references unknown node "${f.node}"`);
        }
      });
      (q.sourceNodes || []).forEach((nid) => {
        if (!allIds.has(nid)) problems.push(`${where}: sourceNodes references unknown node "${nid}"`);
      });
    });

    if (problems.length) {
      console.error(`[PESB] ${problems.length} data problem(s):\n` + problems.join('\n'));
    }
    return problems;
  }

  /* =======================================================================
     快速查找 — 查一个名字，把课件里关于它的所有东西拉到一处，并把
     长得像它的邻居摆在旁边对比。

     这个模块存在的理由不是「找不到页面」。Ruojin 的原话是
     「每个东西都长得太像了，我背的头疼」——pET / pUC、Tet-On / Tet-Off、
     crude extract / PURE、aaRS 的 catalytic site / editing site。这些区别
     语料里本来就写清楚了，问题是它们散在 132 节里，两个容易混的名字
     从来没有同时出现在一块屏幕上。而这正是它们一直混下去的条件。

     所以这里做三件普通搜索框不做的事：
       * 命中一个名字，就把语料里关于它的全部内容取出来铺开——术语定义、
         逐条要点、追根溯源的每一行、题目和口试——而不是给一串链接；
       * 点出「长得像的邻居」和「同一节里的邻居」，前者按拼写算，后者按
         出处算，两种混淆来源不同，分开列，不混为一谈；
       * 把任意几条钉进一张并排的对比表，一眼看完差在哪。

     它是浮层，不是一个 mode。打开不动底下的面板，关掉你还在原地。里面的
     ⭐ 和 🔊 写的是同一份 state——在这里收录的术语，在 Study 里也是收录的。

     诚实边界：「长得像」是按字符和词根算出来的，是拼写上的像，不是语义上
     的像。对比表里的空格代表语料没写，不代表两者没有区别——表头下面就是
     这么写的，免得空白被读成结论。
     ======================================================================= */

  const FIND_KIND = {
    term:    { cn: '术语',       en: 'Glossary',  w: 100 },
    explain: { cn: '先看懂',     en: 'Explain',   w: 92 },
    must:    { cn: '要带走的',   en: 'Must know', w: 88 },
    point:   { cn: '要点',       en: 'Point',     w: 80 },
    beyond:  { cn: '讲义之外',   en: 'Beyond',    w: 70 },
    node:    { cn: '整节',       en: 'Section',   w: 60 },
    oral:    { cn: '口试',       en: 'Oral',      w: 40 },
    q:       { cn: '题目',       en: 'Question',  w: 30 },
    figure:  { cn: '图',         en: 'Figure',    w: 25 }
  };
  const FIND_ORDER = ['term', 'explain', 'must', 'point', 'beyond', 'node', 'oral', 'q', 'figure'];

  // Chip groups. 'all' plus four buckets, because nine kinds of chip is a
  // menu, not a filter.
  const FIND_CHIPS = [
    { id: 'all',   label: '全部',   kinds: null },
    { id: 'def',   label: '是什么', kinds: ['term', 'node'] },
    { id: 'why',   label: '为什么', kinds: ['explain', 'must'] },
    { id: 'facts', label: '要点',   kinds: ['point', 'beyond', 'figure'] },
    { id: 'test',  label: '考法',   kinds: ['q', 'oral'] }
  ];

  let findRows = null;      // built once, on first open
  let findVocab = null;
  let findQuery = '';
  let findChip = 'all';
  let findShowAll = false;
  let findPins = [];        // uids, in the order they were pinned

  const findOrderOf = new Map(TOPICS.map((t, i) => [t.id, i]));

  function reEsc(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // Highlight the query inside already-escaped text. The token is escaped
  // before it becomes a pattern, so a query containing < or & still matches
  // what esc() produced rather than silently matching nothing.
  function hi(text, tokens) {
    const out = esc(text);
    if (!tokens || !tokens.length) return out;
    const pat = tokens.map((tk) => reEsc(esc(tk))).filter(Boolean)
      .sort((a, b) => b.length - a.length).join('|');
    if (!pat) return out;
    return out.replace(new RegExp('(' + pat + ')', 'gi'), '<mark class="fh">$1</mark>');
  }

  // paras() with the query highlighted. The <mark> carries no asterisk, so
  // the **bold** pass still finds its pairs after highlighting.
  function hiParas(text, tokens) {
    return String(text == null ? '' : text)
      .split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
      .map((p) => `<p>${hi(p, tokens).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</p>`)
      .join('');
  }

  function hiBi(en, cn, tokens) {
    let out = '';
    if (state.lang !== 'cn' && en) out += `<div class="t-en">${hi(en, tokens)}</div>`;
    if (state.lang !== 'en' && cn) out += `<div class="t-cn">${hi(cn, tokens)}</div>`;
    return out;
  }

  /* ------------------------------------------------------------ the index
     One flat row per addressable piece of content. `hay` is everything that
     piece says, lowercased, so a match on a definition finds the term whose
     definition it is. `mark` is the same key the study view uses, which is
     what lets a ⭐ in here be the same ⭐ as in there. */
  function findIndex() {
    if (findRows) return findRows;
    const rows = [];
    const add = (o) => {
      o.uid = o.t.id + ':' + o.kind + ':' + rows.length;
      o.hay = o.hay.filter(Boolean).join('  ').toLowerCase();
      rows.push(o);
    };

    TOPICS.forEach((t) => {
      add({ t, kind: 'node', mark: '', head: t.enTitle, sub: t.cnTitle, data: t,
            hay: [t.section, t.enTitle, t.cnTitle, t.summary && t.summary.en, t.summary && t.summary.cn] });

      if (t.mustKnow) {
        add({ t, kind: 'must', mark: '', head: t.enTitle, sub: t.cnTitle, data: t,
              hay: [t.mustKnow, t.skipIt] });
      }

      (t.explain || []).forEach((e, i) => {
        add({ t, kind: 'explain', mark: t.id + ':x' + i, head: e.q, sub: '', data: e,
              hay: [e.q, e.a, e.takeaway].concat(
                e.trace ? TRACE_ROWS.map(([k]) => e.trace[k]) : []) });
      });

      (t.points || []).forEach((p, i) => {
        add({ t, kind: 'point', mark: t.id + ':p' + i, head: p.term || p.en, sub: '', data: p,
              hay: [p.term, p.en, p.cn] });
      });

      (t.beyondPoints || []).forEach((p, i) => {
        add({ t, kind: 'beyond', mark: t.id + ':b' + i, head: p.term || p.en, sub: '', data: p,
              hay: [p.term, p.en, p.cn] });
      });

      (t.terms || []).forEach((x, i) => {
        add({ t, kind: 'term', mark: t.id + ':t' + i, head: x.en, sub: x.cn, data: x,
              hay: [x.en, x.cn, x.def_en, x.def_cn] });
      });

      (t.figures || []).forEach((f) => {
        add({ t, kind: 'figure', mark: '', head: f.caption_en || f.alt || 'figure', sub: '', data: f,
              hay: [f.alt, f.caption_en, f.caption_cn] });
      });

      if (t.oral) {
        add({ t, kind: 'oral', mark: '', head: t.oral.q_en, sub: t.oral.q_cn, data: t.oral,
              hay: [t.oral.q_en, t.oral.q_cn, t.oral.model_en, t.oral.model_cn]
                .concat(t.oral.checklist || []) });
      }

      [['quiz', t.quiz], ['bank', t.bank]].forEach(([src, arr]) => {
        (arr || []).forEach((q) => {
          add({ t, kind: 'q', mark: '', head: q.q_en || q.q_cn, sub: q.q_cn, data: q, src,
                hay: [q.q_en, q.q_cn, q.why_en, q.why_cn, q.answer_en, q.answer_cn]
                  .concat(q.options || []) });
        });
      });
    });

    findRows = rows;
    return rows;
  }

  /* -------------------------------------------------------------- matching */
  /* A short Latin token has to start a word. Without this, `pET` matches
     com*pet*ent and `lac` matches ga*lac*tose, and the noise lands hardest
     on exactly the short cryptic names this app is for. Long tokens keep
     plain substring matching (so 'polymer' finds 'polymerase'), and CJK
     always does, because 汉字 have no word boundaries to anchor to. */
  function tokenTest(tk) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(tk) || tk.length > 4) {
      return (hay) => hay.indexOf(tk) >= 0;
    }
    const re = new RegExp('(^|[^a-z0-9])' + reEsc(tk));
    return (hay) => re.test(hay);
  }

  function findSearch(query) {
    const tokens = query.toLowerCase().split(/\s+/).filter((x) => x && x !== '*');
    if (!tokens.length) return { tokens, hits: [] };
    const whole = tokens.join(' ');
    const tests = tokens.map(tokenTest);
    const scored = [];

    findIndex().forEach((r) => {
      if (!tests.every((f) => f(r.hay))) return;
      const head = String(r.head || '').toLowerCase();
      let s = FIND_KIND[r.kind].w;
      if (head === whole) s += 500;
      else if (head.indexOf(whole) === 0) s += 300;
      else if (head.indexOf(whole) >= 0) s += 180;
      else if (tokens.every((tk) => head.indexOf(tk) >= 0)) s += 120;
      // A match that starts a word beats one buried inside a longer word:
      // searching "lac" should rank `lac operon` above `galactose`.
      if (new RegExp('(^|[^a-z0-9])' + reEsc(whole)).test(r.hay)) s += 45;
      scored.push({ r, s });
    });

    scored.sort((a, b) => b.s - a.s
      || (findOrderOf.get(a.r.t.id) - findOrderOf.get(b.r.t.id)));
    return { tokens, hits: scored.map((x) => x.r) };
  }

  /* ------------------------------------------------------- lookalike names
     Only glossary headwords go in the vocabulary. `points` were in it first
     and had to come out: their headwords in this corpus are sentences — "The
     synthetase requirement", "Why that is the wrong logic for an enzyme" —
     so every measure of similarity ran on their grammar instead of their
     names and paired things that share the word "requirement". 长得像 is a
     property of a name; a corpus where the labels are prose has no names in
     that field to compare. */
  function normHead(s) {
    return String(s || '').toLowerCase().replace(/[^a-z0-9一-鿿]+/g, ' ').trim();
  }

  /* How common a word may be before sharing it stops meaning anything.
     Measured off the headwords themselves rather than a hand-written
     stoplist. What the measurement actually said, on the 1,014 name-like
     headwords in this corpus:

       head nouns:  tag 9 · system 9 · conditions 7 · selection 6 · acid 5 …
       any word:    and 33 · the 21 · step 19 · dna 13 · protein 12 · codon 12

     Two things follow. First, there is no gap in the head-noun distribution
     to put a threshold in — it slopes evenly from 9 to 1 — so any cap here
     is arbitrary and is stated as such rather than defended. Second, the cap
     must not be tight, because the two most frequent head nouns, `tag` and
     `system`, are the ones the feature exists to pair (His-tag / Avi-tag /
     Twin-Strep-tag; pET system / PURE system). So it is set well above the
     observed maximum: on today's data it rejects nothing at all, and it is
     here as a guard against a future corpus where one head noun swallows
     the list. The words that genuinely carry no signal — and, the, step,
     dna — are modifiers, not head nouns, and are handled by the much
     tighter `rare` test on the shared-modifier path instead. */
  let findDfCap = 0;
  let findDf = null;

  /* The tighter cap, on the shared-modifier path. Two names that share only
     a modifier — `DNA ligase` / `DNA shuffling` — are usually unrelated, so
     the shared word has to be one that identifies something. Measured on the
     same 1,014 headwords:

       carries identity:  his 1 · sumo 2 · lac 2 · native 3 · T7 3 · pure 3
                          · tet 4 · exonuclease 5 · cell 5
       carries nothing:   conditions 7 · promoter 7 · expression 8 · tag 9
                          · system 10 · codon 12 · protein 12 · dna 13
                          · step 19 · the 21 · and 33

       words per frequency: 1:831 2:232 3:96 4:32 5:29 | 6:20 7:10 8:7 9:4
                            10:1 11:2 12:2 13:1 19:1 21:1 33:1

     5 is where the tail thins and it is the highest value that still keeps
     `dna`, `protein` and `expression` out while letting `tet` in — which is
     the pair of outcomes that decides whether Tet-On finds Tet-Off. But this
     is a threshold on a slope, not in a gap: there is no empty band in that
     histogram, and moving it to 4 or 6 changes which names pair up. Treat it
     as tuned, not as derived. */
  const FIND_MOD_CAP = 5;

  /* A `points` headword is only admitted if it reads as a name. In this
     corpus most of them do not — "The synthetase requirement", "Why that is
     the wrong logic for an enzyme" — and those are what poisoned the first
     version: two sentences that both end in "requirement" are not two names
     that look alike. Terms are admitted unconditionally; they were authored
     as names. */
  const NAME_STOP_HEAD = new RegExp('^(the|a|an|why|how|what|when|which|where|who|whose|and|but'
    + '|so|if|it|its|this|that|these|those|from|for|in|on|at|to|by|with|as|is|are|was|were|do|does'
    + '|did|not|no|you|your|we|our|there|here|one|two|three|both|each|every|any|all|more|most|less'
    + '|same|other|another|first|second|third|next|last|only|just|still|then|than|because|since'
    + '|after|before|during|while|without|within|into|onto|over|under|about|between)( |$)');

  function nameLike(key) {
    const n = key.split(' ').length;
    return n <= 4 && !NAME_STOP_HEAD.test(key);
  }

  function headVocab() {
    if (findVocab) return findVocab;
    const map = new Map();
    findIndex().forEach((r) => {
      if (r.kind !== 'term' && r.kind !== 'point' && r.kind !== 'beyond') return;
      const key = normHead(r.head);
      if (key.length < 2) return;
      if (r.kind !== 'term' && !nameLike(key)) return;
      let v = map.get(key);
      if (!v) { v = { key, head: r.head, cn: r.sub || '', entries: [], nodes: new Set() }; map.set(key, v); }
      v.entries.push(r);
      v.nodes.add(r.t.id);
      if (!v.cn && r.sub) v.cn = r.sub;
    });
    findVocab = Array.from(map.values());

    findDf = new Map();
    findVocab.forEach((v) => new Set(v.key.split(' ')).forEach((tk) =>
      findDf.set(tk, (findDf.get(tk) || 0) + 1)));
    findDfCap = Math.max(2, Math.round(findVocab.length * 0.012));
    return findVocab;
  }

  // Levenshtein with an early bail-out. Returns null once the distance is
  // certain to exceed `cap`, so the scan over the whole vocabulary stays
  // cheap enough to run on every keystroke.
  function lev(a, b, cap) {
    if (Math.abs(a.length - b.length) > cap) return null;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      let best = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1,
          prev[j - 1] + (a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1));
        if (cur[j] < best) best = cur[j];
      }
      if (best > cap) return null;
      prev = cur;
    }
    return prev[b.length];
  }

  /* Three ways two names can look alike, and they are not equally worth
     showing — which is the whole reason this is not one similarity number.

     1. Same head noun. In an English noun phrase the last word is the
        category, so `lac promoter` / `AOX1 promoter` and `His-tag` /
        `Avi-tag` are the same kind of thing under different names. This is
        the pairing that is actually confusable, and it ranks first.
     2. A shared modifier only. `DNA ligase` / `DNA shuffling` share "DNA"
        and are not remotely the same thing, so this needs either a rare
        word or most of the name in common before it counts.
     3. Spelling. pET / pUC, lacI / lacZ. Restricted to single-word names,
        because on phrases the ratio just rewards a shared suffix — it
        scored `pET system` against `PURE system` at 0.73 on the strength of
        the word "system", which rule 1 already states properly. */
  function headSim(a, b) {
    if (!a || !b || a === b) return null;
    const ta = a.split(' ').filter(Boolean);
    const tb = b.split(' ').filter(Boolean);
    const ha = ta[ta.length - 1], hb = tb[tb.length - 1];
    const shared = ta.filter((x) => x.length > 2 && tb.indexOf(x) >= 0);
    const cover = (2 * shared.length) / (ta.length + tb.length);

    // A head noun has to be a word: names ending in a bare number ("Step 1",
    // "Route 2") end in the same token without being the same kind of thing.
    if (ha === hb && ha.length > 2 && /[a-z]/.test(ha) && (findDf.get(ha) || 0) <= findDfCap) {
      return { score: 0.8 + 0.19 * cover, why: '都是 ' + ha };
    }
    if (shared.length) {
      const identifying = shared.filter((x) => (findDf.get(x) || 0) <= FIND_MOD_CAP);
      if (!identifying.length && cover < 0.66) return null;
      return { score: 0.6 + 0.28 * cover, why: '共用 ' + (identifying.length ? identifying : shared).join(' ') };
    }
    if (ta.length !== 1 || tb.length !== 1) return null;

    // Short cryptic labels are the worst offenders and a length ratio is
    // useless on them, so they get their own bound.
    if (a.length <= 5 && b.length <= 5) {
      if (a[0] !== b[0]) return null;
      const d = lev(a, b, 2);
      return d ? { score: 0.9 - 0.1 * d, why: '只差 ' + d + ' 个字符' } : null;
    }
    const max = Math.max(a.length, b.length);
    if (max > 26) return null;
    const d = lev(a, b, 4);
    if (d === null || !d) return null;
    const score = 1 - d / max;
    return score >= 0.7 ? { score, why: '只差 ' + d + ' 个字符' } : null;
  }

  function findLookalikes(query, hits) {
    const vocab = headVocab();     // also builds the df table headSim reads
    const seeds = new Set();
    const qk = normHead(query);
    if (qk.length >= 2) seeds.add(qk);
    /* Extra seeds come from glossary hits, but only from ones whose *name*
       contains what was typed. Seeding on rank alone was worse than it
       looked: searching `His-tag` seeded on whatever term happened to rank
       second — `Binding conditions` — and then offered `Growth conditions`
       and `Elution conditions` as things that look like His-tag. A hit can
       rank high on its definition; only its name licenses a name seed. */
    hits.filter((h) => h.kind === 'term').slice(0, 8)
      .filter((h) => {
        const k = normHead(h.head);
        return qk && k && (k.indexOf(qk) >= 0 || qk.indexOf(k) >= 0);
      })
      .slice(0, 2)
      .forEach((h) => seeds.add(normHead(h.head)));
    if (!seeds.size) return [];

    const out = [];
    vocab.forEach((v) => {
      if (seeds.has(v.key)) return;
      let best = null;
      seeds.forEach((seed) => {
        const s = headSim(seed, v.key);
        if (!s) return;
        // A match reached through a derived seed is one step further from
        // what was typed — `chemical chaperone` legitimately seeds on a
        // search for `chaperone` and then offers `chemical detergents` — so
        // it ranks below anything that matched the query itself.
        if (seed !== qk) s.score -= 0.06;
        if (!best || s.score > best.score) best = s;
      });
      if (best) out.push({ v, score: best.score, why: best.why });
    });
    out.sort((a, b) => b.score - a.score || a.v.key.localeCompare(b.v.key));
    // One family must not fill the list. `T7` seeds on `T7 expression system`
    // and there are six `… system` names, which would push out everything
    // else the query had in common with anything.
    const perWhy = {};
    return out.filter((o) => {
      perWhy[o.why] = (perWhy[o.why] || 0) + 1;
      return perWhy[o.why] <= 5;
    }).slice(0, 14);
  }

  // The other kind of neighbour, and a completely different signal: names
  // you meet in the same breath because they are taught in the same node.
  function findSiblings(hits) {
    if (!hits.length) return [];
    const home = hits[0].t;
    const own = new Set(hits.filter((h) => h.t.id === home.id).map((h) => normHead(h.head)));
    return findIndex()
      .filter((r) => r.t.id === home.id
        && (r.kind === 'term' || r.kind === 'point' || r.kind === 'beyond')
        && !own.has(normHead(r.head)))
      // Glossary names first: they are the ones that read as names. A point's
      // headword is a phrase and belongs under them, not above them.
      .sort((a, b) => (a.kind === 'term' ? 0 : 1) - (b.kind === 'term' ? 0 : 1))
      .slice(0, 12)
      .map((r) => ({ v: { key: normHead(r.head), head: r.head, cn: r.sub || '', entries: [r], nodes: new Set([r.t.id]) } }));
  }

  /* ------------------------------------------------------------- rendering */
  function findRowByUid(uid) {
    return findIndex().find((r) => r.uid === uid) || null;
  }

  function findWhere(t) {
    return `<button type="button" class="fr-where" data-goto="${esc(t.id)}"
              title="在下面的 Study 里打开这一节，浮层不关 · open it behind this pad">
              ${esc(t.section)} · ${esc(state.lang === 'cn' ? t.cnTitle : t.enTitle)} ↗</button>`;
  }

  function findPinBtn(uid) {
    const on = findPins.indexOf(uid) >= 0;
    return `<button type="button" class="fr-pin${on ? ' on' : ''}" data-pin="${esc(uid)}"
              title="加进对比表 · put it in the side-by-side table">⇄</button>`;
  }

  function findBody(r, tk) {
    const d = r.data;
    switch (r.kind) {
      case 'term':
        return hiBi(d.def_en, d.def_cn, tk);
      case 'point':
      case 'beyond':
        return hiBi(d.en, d.cn, tk);
      case 'explain':
        return (d.trace ? findTrace(d.trace, tk) : '')
          + (d.a ? `<div class="explain-a">${hiParas(d.a, tk)}</div>` : '')
          + (d.takeaway ? `<p class="explain-takeaway">${hi(d.takeaway, tk)}</p>` : '');
      case 'must':
        return `<div class="must-know-body">${hiParas(d.mustKnow, tk)}</div>`
          + (d.skipIt ? `<p class="skip-it"><span class="skip-label">Do not memorise · 不用背</span>${hi(d.skipIt, tk)}</p>` : '');
      case 'node':
        return hiBi(d.summary && d.summary.en, d.summary && d.summary.cn, tk);
      case 'figure':
        return `<img class="fr-fig" src="${esc(d.src)}" alt="${esc(d.alt || '')}" loading="lazy">`
          + hiBi(d.caption_en, d.caption_cn, tk);
      case 'oral':
        return `<div class="fr-oral">${hi(d.model_en, tk)}</div>`
          + `<ul class="fr-list">${(d.checklist || []).map((c) => `<li>${hi(c, tk)}</li>`).join('')}</ul>`;
      case 'q':
        return `<ul class="fr-list">${(d.options || []).map((o, i) =>
          `<li class="${i === d.answer ? 'is-key' : ''}">${hi(o, tk)}</li>`).join('')}</ul>`
          + hiBi(d.why_en, d.why_cn, tk)
          + hiBi(d.answer_en, d.answer_cn, tk);
      default:
        return '';
    }
  }

  function findTrace(tr, tk) {
    const rows = TRACE_ROWS.filter(([k]) => tr[k]).map(([k, cn, en]) =>
      `<tr><th><span class="tr-cn">${cn}</span><span class="tr-en">${esc(en)}</span></th>
           <td>${hiParas(tr[k], tk)}</td></tr>`).join('');
    return rows ? `<table class="trace"><tbody>${rows}</tbody></table>` : '';
  }

  function findCard(r, tk) {
    const k = FIND_KIND[r.kind];
    const m = r.mark ? markOf(r.mark) : '';
    return `<article class="fr-card${m ? ' hl-' + m : ''}"${r.mark ? ' data-markable' : ''}>
              <div class="fr-head">
                <span class="fr-kind fk-${r.kind}">${k.cn}</span>
                <span class="fr-title">${hi(r.head, tk)}</span>
                <span class="fr-tools">
                  ${findPinBtn(r.uid)}
                  ${r.mark ? markBtn(r.mark) : ''}
                </span>
              </div>
              ${r.sub ? `<div class="fr-sub">${hi(r.sub, tk)}</div>` : ''}
              <div class="fr-body">${findBody(r, tk)}</div>
              ${findWhere(r.t)}
            </article>`;
  }

  /* ------------------------------------------------------------ 对比 table
     Rows are the 追根溯源 questions, because that is the order the corpus
     already answers them in and the first row is always 这是啥 — so a column
     you have never seen cannot leave you stranded before the comparison
     starts. An entry that carries no trace fills what it can and leaves the
     rest empty, and the caption says what empty means. */
  const CMP_ROWS = [
    ['what',    '这是啥'],
    ['from',    '从哪来'],
    ['to',      '到哪去'],
    ['family',  '家里几口人'],
    ['numbers', '人均几亩地']
  ];

  function cmpCell(r, key) {
    const d = r.data;
    if (r.kind === 'explain' && d.trace && d.trace[key]) return paras(d.trace[key]);
    if (key !== 'what') return '';
    if (r.kind === 'term') return bi(d.def_en, d.def_cn);
    if (r.kind === 'point' || r.kind === 'beyond') return bi(d.en, d.cn);
    if (r.kind === 'node') return bi(d.summary && d.summary.en, d.summary && d.summary.cn);
    if (r.kind === 'must') return paras(d.mustKnow);
    return '';
  }

  function renderCompare() {
    const rows = findPins.map(findRowByUid).filter(Boolean);
    if (rows.length < 2) return '';
    const head = rows.map((r) => `<th>
        <span class="cmp-name">${esc(r.head)}</span>
        ${r.sub ? `<span class="cmp-cn">${esc(r.sub)}</span>` : ''}
        <span class="cmp-where">${esc(r.t.section)}</span>
      </th>`).join('');

    let body = '';
    CMP_ROWS.forEach(([key, cn]) => {
      const cells = rows.map((r) => cmpCell(r, key));
      if (!cells.some((c) => c)) return;   // a row nothing can fill is not drawn
      body += `<tr><th class="cmp-row-h">${cn}</th>`
        + cells.map((c) => `<td>${c || '<span class="cmp-none">—</span>'}</td>`).join('')
        + `</tr>`;
    });
    body += `<tr><th class="cmp-row-h">出自</th>`
      + rows.map((r) => `<td>${findWhere(r.t)}</td>`).join('') + `</tr>`;

    return `<div class="cmp-wrap">
              <table class="cmp"><thead><tr><th></th>${head}</tr></thead><tbody>${body}</tbody></table>
              <p class="cmp-note">空格是语料里没写这一栏，不是「两者在这一点上没有区别」。
                 追根溯源的行只有 <span class="badge badge-explain">解释版</span> 的 explain 条目才有，
                 术语和要点只能填「这是啥」。</p>
            </div>`;
  }

  function renderFindPad() {
    const pad = $('#find-pad');
    const { tokens, hits } = findSearch(findQuery);
    const chip = FIND_CHIPS.find((c) => c.id === findChip) || FIND_CHIPS[0];
    const shown = chip.kinds ? hits.filter((h) => chip.kinds.indexOf(h.kind) >= 0) : hits;

    const counts = {};
    hits.forEach((h) => { counts[h.kind] = (counts[h.kind] || 0) + 1; });
    const nodes = new Set(hits.map((h) => h.t.id));

    let html = `<div class="fp-head">
        <strong>快速查找</strong>
        <span class="fp-sub">查一个名字，把课件里关于它的都拉出来，顺便看看什么跟它长得像</span>
        <button type="button" class="icon-btn fp-x" id="find-close" aria-label="Close">✕</button>
      </div>
      <input type="search" id="find-input" class="fp-input" autocomplete="off"
        placeholder="输入一个名字…  aaRS / pET / Tet-On / 核糖体" value="${esc(findQuery)}">`;

    html += `<div class="fp-chips">` + FIND_CHIPS.map((c) => {
      const n = c.kinds ? hits.filter((h) => c.kinds.indexOf(h.kind) >= 0).length : hits.length;
      return `<button type="button" class="fp-chip${c.id === findChip ? ' active' : ''}"
                data-chip="${c.id}"${findQuery && !n ? ' disabled' : ''}>${c.label}${findQuery ? ` <b>${n}</b>` : ''}</button>`;
    }).join('') + `</div>`;

    if (!findQuery.trim()) {
      html += `<div class="fp-empty">
          <p>这个模块是为「每个东西都长得太像」造的：输一个名字，下面会给三样东西——</p>
          <ul>
            <li><b>命中</b>：语料里所有讲到它的地方，定义、要点、追根溯源、题目，全文铺开，不是链接。</li>
            <li><b>长得像的</b>：拼写接近或共用词根的其它名字（pET / pUC 这一类）。这是字面上的像，不是意思上的像。</li>
            <li><b>同一节的邻居</b>：跟它在同一节里一起出现的名字——很多混淆是这么来的。</li>
          </ul>
          <p>任何一条按 <b>⇄</b> 可以钉进对比表，钉够两条就并排显示，一眼看差在哪。</p>
          <p class="fp-hint">Ctrl/⌘ + K 开关，Esc 关。关掉以后你还在原来的页面上，这个浮层从不动底下的内容。</p>
        </div>`;
      pad.innerHTML = html;
      wireFindPad();
      return;
    }

    html += renderCompare();

    if (!hits.length) {
      html += `<p class="fp-none">没有一条内容包含「${esc(findQuery)}」。</p>`;
    } else {
      html += `<p class="fp-count">命中 <b>${hits.length}</b> 条，分布在 <b>${nodes.size}</b> 节里 ·
                 ${FIND_ORDER.filter((k) => counts[k]).map((k) => `${FIND_KIND[k].cn} ${counts[k]}`).join(' · ')}</p>`;

      const CAP = 40;
      const list = findShowAll ? shown : shown.slice(0, CAP);
      html += `<div class="fp-results">` + list.map((r) => findCard(r, tokens)).join('') + `</div>`;
      if (shown.length > list.length) {
        html += `<button type="button" class="btn-ghost fp-more" id="find-more">
                   还有 ${shown.length - list.length} 条没显示 · show all ${shown.length}</button>`;
      }
    }

    const alike = findLookalikes(findQuery, hits);
    const sibs = findSiblings(hits);

    const nameRow = (o, why) => {
      const r = o.v.entries[0];
      return `<li>
          ${findPinBtn(r.uid)}
          <span class="fn-name">${esc(o.v.head)}</span>
          ${o.v.cn ? `<span class="fn-cn">${esc(o.v.cn)}</span>` : ''}
          ${why ? `<span class="fn-why">${esc(why)}</span>` : ''}
          <button type="button" class="fn-go" data-search="${esc(o.v.head)}">查它 →</button>
          <span class="fn-where">${o.v.nodes.size > 1
            ? `${o.v.nodes.size} 节里都有` : esc(r.t.section)}</span>
        </li>`;
    };

    if (alike.length) {
      html += `<section class="fp-block"><h3>长得像的名字 <span class="muted">按拼写算出来的，不是按意思</span></h3>
                 <ul class="fn-list">${alike.map((o) => nameRow(o, o.why)).join('')}</ul></section>`;
    }
    if (sibs.length) {
      html += `<section class="fp-block"><h3>同一节里的邻居
                 <span class="muted">${esc(hits[0].t.section)} 里跟它一起出现的名字</span></h3>
                 <ul class="fn-list">${sibs.map((o) => nameRow(o, '')).join('')}</ul></section>`;
    }

    pad.innerHTML = html;
    wireFindPad();
  }

  function findPadOpen() { return !$('#find-pad').hidden; }

  function findPadSetOpen(open) {
    const pad = $('#find-pad');
    pad.hidden = !open;
    $('#find-toggle').classList.toggle('active', open);
    $('#find-toggle').setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      renderFindPad();
      const input = $('#find-input');
      if (input) { input.focus(); input.select(); }
    }
  }

  // Re-rendered wholesale on every change, so every handler is re-attached
  // here rather than delegated — the pad is small and this keeps the state
  // and the DOM impossible to disagree.
  function wireFindPad() {
    const pad = $('#find-pad');

    const input = $('#find-input');
    if (input) {
      let caret = input.selectionStart;
      input.addEventListener('input', (e) => {
        findQuery = e.target.value;
        findShowAll = false;
        caret = e.target.selectionStart;
        renderFindPad();
        const next = $('#find-input');
        if (next) { next.focus(); try { next.setSelectionRange(caret, caret); } catch (err) { /* search input */ } }
      });
    }

    $('#find-close').addEventListener('click', () => findPadSetOpen(false));

    pad.querySelectorAll('.fp-chip').forEach((b) => b.addEventListener('click', () => {
      findChip = b.dataset.chip; findShowAll = false; renderFindPad();
    }));

    const more = $('#find-more');
    if (more) more.addEventListener('click', () => { findShowAll = true; renderFindPad(); });

    pad.querySelectorAll('[data-search]').forEach((b) => b.addEventListener('click', () => {
      findQuery = b.dataset.search; findChip = 'all'; findShowAll = false; renderFindPad();
    }));

    // Opening a section changes what is *behind* the pad. The pad itself
    // stays open and keeps its query — leaving the search to go and read
    // something is the one thing this module exists to avoid.
    pad.querySelectorAll('[data-goto]').forEach((b) => b.addEventListener('click', () => {
      state.topicId = b.dataset.goto;
      setMode('study');
      renderStudy();
      renderSidebar();
      $('.content').scrollTop = 0;
    }));

    pad.querySelectorAll('[data-pin]').forEach((b) => b.addEventListener('click', () => {
      const uid = b.dataset.pin;
      const at = findPins.indexOf(uid);
      if (at >= 0) findPins.splice(at, 1);
      else {
        if (findPins.length >= 4) findPins.shift();   // four columns is what fits
        findPins.push(uid);
      }
      renderFindPad();
    }));

    wireMarkButtons(pad);
    wireSayButtons(pad);
    bionicRefresh();
  }

  /* ------------------------------------------------------------------ init */
  function init() {
    if (!TOPICS.length) {
      document.body.innerHTML = '<p style="padding:2rem;font:16px system-ui">No topic data loaded — check that data/ch1.js … ch5.js are present and that each one pushes onto window.PESB.topics.</p>';
      return;
    }

    validateTopics();

    applyTheme();
    applyLang();

    document.body.classList.toggle('bionic-on', state.bionic);
    $('#bionic-toggle').classList.toggle('active', state.bionic);

    // Voices load asynchronously in Chrome; warm the cache so the first
    // click on a speaker icon already has a matching voice to pick from.
    if (speechAvailable) {
      window.speechSynthesis.getVoices();
      // The list arrives late in Chrome and can arrive twice; an open pad has
      // to redraw when it does or it shows "Automatic" and nothing else.
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
        if (voicePadOpen()) renderVoicePad();
      };
    }
    wireVoicePad();

    fillScopeSelect($('#card-scope'), 'All batches');
    fillScopeSelect($('#quiz-scope'), 'All batches');
    fillScopeSelect($('#oral-scope'), 'All batches');
    fillScopeSelect($('#gloss-scope'), 'All batches');

    $('#stat-terms').textContent = allCards().length;
    $('#stat-questions').textContent = allQuestions().length;

    // Question-source cycle. Starts on core, so the app behaves exactly like
    // pesborigin until you ask for more.
    const QSRC_LABEL = {
      core:  () => `Core only · 核心 (${allQuestions().length})`,
      bank:  () => `Core + bank · 加题库 (${allQuestions().length})`,
      terms: () => `+ term drill · 加术语 (${allQuestions().length})`
    };
    const srcToggle = $('#quiz-bank-toggle');
    const syncSrc = () => {
      srcToggle.classList.toggle('active', state.qsrc !== 'core');
      srcToggle.textContent = QSRC_LABEL[state.qsrc]();
      srcToggle.title = `core = the 4 required per node; bank = ${bankCount()} hand-written extras; `
        + `term drill = ${termQuestions().length} generated from the glossary`;
      $('#stat-questions').textContent = allQuestions().length;
    };
    syncSrc();
    srcToggle.addEventListener('click', () => {
      state.qsrc = QSRC[(QSRC.indexOf(state.qsrc) + 1) % QSRC.length];
      store.set('qsrc', state.qsrc);
      syncSrc();
    });

    // Glossary. Changing a filter rebuilds the drill queue as well as the
    // list, or you would keep drilling cards the filter no longer selects.
    ['#gloss-search', '#gloss-scope', '#gloss-mark'].forEach((sel) =>
      $(sel).addEventListener('input', () => { glossCard = null; renderGlossary(); }));

    // 挖空 is a re-render rather than a CSS-only class flip, because turning it
    // off has to drop every `shown` as well — otherwise the terms you had
    // already uncovered stay uncovered when you switch it back on, and the
    // second pass through a card is free.
    $('#sheets-cloze').classList.toggle('active', state.cloze);
    $('#sheets-cloze').addEventListener('click', () => {
      state.cloze = !state.cloze;
      store.set('cloze', state.cloze);
      $('#sheets-cloze').classList.toggle('active', state.cloze);
      renderSheets();
    });

    $('#sheets-fig').addEventListener('click', () => {
      state.sheetsFigOnly = !state.sheetsFigOnly;
      $('#sheets-fig').classList.toggle('active', state.sheetsFigOnly);
      renderSheets();
    });

    ['#sheets-search', '#sheets-weight'].forEach((sel) =>
      $(sel).addEventListener('input', renderSheets));

    $('#gloss-view').addEventListener('click', () => {
      state.glossView = state.glossView === 'cards' ? 'list' : 'cards';
      store.set('glossView', state.glossView);
      glossCard = null;
      renderGlossary();
    });
    $('#gloss-card').addEventListener('click', () => $('#gloss-card').classList.toggle('flipped'));
    $('#gloss-hit').addEventListener('click', () => glossGrade(true));
    $('#gloss-miss').addEventListener('click', () => glossGrade(false));
    $('#gloss-restudy').addEventListener('click', () => {
      // Reset only the cards this filter selects, not the whole corpus.
      glossRows().forEach((r) => delete state.boxes[cardKey(r.topic, r.term)]);
      store.set('boxes', state.boxes);
      glossCard = null;
      renderGlossary();
    });

    // Pen picker: which colour a new ⭐ gets. Existing marks keep theirs.
    $('#pen-row').innerHTML = PENS.map((p) =>
      `<button type="button" class="pen-swatch${p.id === state.pen ? ' active' : ''}" data-pen="${p.id}"
         style="background:${p.hex}" title="${p.en} · ${p.cn}" aria-label="${p.en}"></button>`).join('');
    $('#pen-row').addEventListener('click', (e) => {
      const b = e.target.closest('.pen-swatch');
      if (!b) return;
      state.pen = b.dataset.pen;
      store.set('pen', state.pen);
      $$('.pen-swatch').forEach((s) => s.classList.toggle('active', s.dataset.pen === state.pen));
    });

    $('#only-marked').addEventListener('click', () => {
      state.onlyMarked = !state.onlyMarked;
      $('#only-marked').classList.toggle('active', state.onlyMarked);
      document.body.classList.toggle('only-marked', state.onlyMarked);
      renderSidebar();
      renderStudy();
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

    // 快速查找. Deliberately not a mode: it opens over whatever you were
    // doing and closes back onto it. Ctrl/⌘+K because that is what every
    // other tool has trained the hand to reach for.
    $('#find-toggle').addEventListener('click', () => findPadSetOpen(!findPadOpen()));
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        findPadSetOpen(!findPadOpen());
        return;
      }
      if (e.key === 'Escape' && findPadOpen()) findPadSetOpen(false);
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
