/* =========================================================================
   biochemie_struct — the structure-formula companion.

   DELIBERATELY SEPARATE from biochemie_pro, and not only to keep that app
   small. There is no JS runtime on the machine this is written on, so a syntax
   error shows up ONLY as a blank page in a browser. Ruojin revises from
   biochemie_pro daily; a half-built structure renderer must not be able to
   blank it. Separate directory, separate storage prefix, separate failure.

   Storage prefix is `biostruct.` — never `bio.` (frozen app), `biopro.`
   (trainer) or `pesb*.` (the other project). Three trainers already share this
   origin; a shared prefix would let them overwrite each other's state.

   No structures are drawn here yet. This renders the DATA — name, SMILES,
   formula, provenance and the cross-links — so the content and its checking
   can be reviewed before any pixel is committed to. Drawing comes next, and
   the honest reason for that order is in the caveat on index.html: a wrong
   structure is worse than no structure, because it gets memorised.
   ========================================================================= */
(function () {
  'use strict';

  var GROUPS = (window.STRUCT && window.STRUCT.groups) || [];

  var store = {
    get: function (k, d) {
      try {
        var raw = localStorage.getItem('biostruct.' + k);
        return raw === null ? d : JSON.parse(raw);
      } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem('biostruct.' + k, JSON.stringify(v)); } catch (e) {}
    }
  };

  var state = { theme: store.get('theme', 'dark'), q: '' };

  var $ = function (s) { return document.querySelector(s); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var CLS = {
    nonpolar: { cn: '非极性', en: 'Nonpolar' },
    aromatic: { cn: '芳香族', en: 'Aromatic' },
    polar:    { cn: '极性不带电', en: 'Polar, uncharged' },
    acidic:   { cn: '酸性', en: 'Acidic' },
    basic:    { cn: '碱性', en: 'Basic' }
  };

  function matches(it, q) {
    if (!q) return true;
    q = q.toLowerCase();
    return [it.cn, it.en, it.tlc, it.olc, it.smiles, it.formula]
      .some(function (v) { return String(v || '').toLowerCase().indexOf(q) >= 0; });
  }

  function itemHtml(it) {
    var n = it.note && it.note.cn;
    return '<article class="card">' +
      '<header class="card-head">' +
        '<span class="names"><b>' + esc(it.cn) + '</b> ' + esc(it.en) + '</span>' +
        '<span class="codes">' + esc(it.tlc) + ' · ' + esc(it.olc) +
          (it.essential ? ' <span class="ess" title="必需氨基酸 · essential">必需</span>' : '') +
        '</span>' +
      '</header>' +
      // The structure itself is not drawn yet; the slot is here so the page
      // shows exactly what is missing rather than pretending to be finished.
      '<div class="slot">结构式待绘制 <span class="muted">structure not drawn yet</span></div>' +
      '<dl class="meta">' +
        '<dt>SMILES</dt><dd><code>' + esc(it.smiles) + '</code></dd>' +
        '<dt>分子式</dt><dd><code>' + esc(it.formula) + '</code></dd>' +
        '<dt>PubChem</dt><dd><code>CID ' + esc(it.cid) + '</code></dd>' +
      '</dl>' +
      (n ? '<p class="note">' + esc(n) + '</p>' : '') +
      '</article>';
  }

  function groupHtml(g) {
    var items = g.items.filter(function (it) { return matches(it, state.q); });
    if (!items.length) return '';

    var links = (g.seeAlso || []).map(function (l) {
      // #/t/<id> is the deep-link route added to biochemie_pro for this.
      return '<a class="see" href="../biochemie_pro/index.html#/t/' +
        encodeURIComponent(l.topic) + '">' + esc(l.label) +
        ' <span class="muted">' + esc(l.topic) + '</span></a>';
    }).join('');

    var body = '';
    Object.keys(CLS).forEach(function (c) {
      var sub = items.filter(function (it) { return it.cls === c; });
      if (!sub.length) return;
      body += '<h3 class="cls">' + esc(CLS[c].cn) +
        ' <span class="muted">' + esc(CLS[c].en) + ' · ' + sub.length + '</span></h3>' +
        '<div class="grid">' + sub.map(itemHtml).join('') + '</div>';
    });

    return '<section class="group">' +
      '<h2>' + esc(g.cnTitle) + ' <span class="muted">' + esc(g.enTitle) +
        ' · ' + items.length + '/' + g.items.length + '</span></h2>' +
      (g.note && g.note.cn ? '<p class="gnote">' + esc(g.note.cn) + '</p>' : '') +
      (links ? '<nav class="sees">对应节点：' + links + '</nav>' : '') +
      body +
      '</section>';
  }

  function render() {
    var html = GROUPS.map(groupHtml).join('');
    $('#app').innerHTML = html ||
      '<p class="empty">没有匹配的结构 <span class="muted">no match</span></p>';
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
  }

  function init() {
    if (!GROUPS.length) {
      document.body.innerHTML =
        '<p style="padding:2rem;font:16px system-ui">No structure data loaded — check data/amino_acids.js is present.</p>';
      return;
    }
    applyTheme();
    render();

    $('#theme-toggle').addEventListener('click', function () {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      store.set('theme', state.theme);
      applyTheme();
    });

    $('#q').addEventListener('input', function (e) {
      state.q = e.target.value.trim();
      render();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
