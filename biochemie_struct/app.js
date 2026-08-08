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

  /* ------------------------------------------------------------- drawing
     A structure is stored as an explicit GRAPH — atoms with 2D coordinates,
     plus bonds with an order — never as hand-written SVG path data.

     That choice is the whole point. Hand-drawn SVG cannot be checked by
     anything: a wrong ring or a missing carbon renders perfectly and no tool
     can tell. A graph can be read back, so check_structures.py asserts that
     its heavy-atom counts agree with BOTH the declared formula AND the SMILES
     — two independently authored encodings of the same molecule that have to
     agree. Typing one wrong is caught by the other.

     Drawn in skeletal convention: carbons are vertices with no label, every
     other element is labelled, hydrogens are implicit. Colours come from
     currentColor and the CSS variables, so the drawing follows the theme
     instead of being baked light or dark. */
  var BOND_PX = 34;          // one bond length in px
  var PAD = 16;

  function molSvg(mol) {
    if (!mol || !mol.atoms || !mol.bonds) return '';
    var xs = mol.atoms.map(function (a) { return a.x; });
    var ys = mol.atoms.map(function (a) { return a.y; });
    var minX = Math.min.apply(null, xs), maxX = Math.max.apply(null, xs);
    var minY = Math.min.apply(null, ys), maxY = Math.max.apply(null, ys);

    // SVG y grows downward; chemical drawings are authored y-up, so flip.
    function px(a) {
      return {
        x: (a.x - minX) * BOND_PX + PAD,
        y: (maxY - a.y) * BOND_PX + PAD
      };
    }
    var w = (maxX - minX) * BOND_PX + PAD * 2;
    var h = (maxY - minY) * BOND_PX + PAD * 2;

    var labelled = mol.atoms.map(function (a) { return a.el !== 'C'; });
    var parts = [];

    mol.bonds.forEach(function (b) {
      var a1 = mol.atoms[b[0]], a2 = mol.atoms[b[1]], order = b[2] || 1;
      var p1 = px(a1), p2 = px(a2);
      // Shorten the line at a labelled atom so the bond does not run under
      // the text. Pure-carbon vertices keep the full length.
      var dx = p2.x - p1.x, dy = p2.y - p1.y;
      var len = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / len, uy = dy / len;
      var t1 = labelled[b[0]] ? 9 : 0, t2 = labelled[b[1]] ? 9 : 0;
      var x1 = p1.x + ux * t1, y1 = p1.y + uy * t1;
      var x2 = p2.x - ux * t2, y2 = p2.y - uy * t2;

      if (order === 2) {
        // Two parallel lines, offset perpendicular to the bond.
        var ox = -uy * 2.6, oy = ux * 2.6;
        parts.push('<line x1="' + (x1 + ox) + '" y1="' + (y1 + oy) +
                   '" x2="' + (x2 + ox) + '" y2="' + (y2 + oy) + '"/>');
        parts.push('<line x1="' + (x1 - ox) + '" y1="' + (y1 - oy) +
                   '" x2="' + (x2 - ox) + '" y2="' + (y2 - oy) + '"/>');
      } else {
        parts.push('<line x1="' + x1 + '" y1="' + y1 +
                   '" x2="' + x2 + '" y2="' + y2 + '"/>');
      }
    });

    var labels = mol.atoms.map(function (a, i) {
      if (!labelled[i]) return '';
      var p = px(a);
      return '<text x="' + p.x + '" y="' + p.y + '" class="el el-' + esc(a.el) + '">' +
             esc(a.el) + (a.h ? '<tspan class="hsub">H' + (a.h > 1 ? a.h : '') + '</tspan>' : '') +
             '</text>';
    }).join('');

    return '<svg class="mol" viewBox="0 0 ' + w + ' ' + h + '" width="' + w +
      '" height="' + h + '" role="img" aria-label="skeletal structure">' +
      '<g class="bonds">' + parts.join('') + '</g>' + labels + '</svg>';
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
      // An undrawn molecule shows an explicit empty slot rather than nothing,
      // so the page never looks more finished than it is.
      (it.mol
        ? '<div class="draw">' + molSvg(it.mol) + '</div>'
        : '<div class="slot">结构式待绘制 <span class="muted">not drawn yet</span></div>') +
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
