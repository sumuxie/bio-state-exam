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

  /* Sub-headings inside a group. These five are the amino-acid side-chain classes;
     every other group brings its own, so this table is a set of TRANSLATIONS, not a
     whitelist — see the fallback in groupHtml.

     ⚠️ It used to be a whitelist, and that was a silent bug worth remembering. groupHtml
     rendered `Object.keys(CLS)` and nothing else, while sugars.js classifies its entries
     as aldose / furanose / pyranose — none of which are in this table. The result: the
     sugars section printed its heading and the count "5/5" and then NOTHING underneath.
     Five structures existed on disk, passed check_structures.py, and were invisible in the
     browser. Same family as the missing-<script>-tag trap in biochemie_pro: the data
     checkers verify DATA, and neither of them can see that a page renders nothing. */
  var CLS = {
    nonpolar: { cn: '非极性', en: 'Nonpolar' },
    aromatic: { cn: '芳香族', en: 'Aromatic' },
    polar:    { cn: '极性不带电', en: 'Polar, uncharged' },
    acidic:   { cn: '酸性', en: 'Acidic' },
    basic:    { cn: '碱性', en: 'Basic' },

    aldose:       { cn: '醛糖', en: 'Aldose' },
    ketose:       { cn: '酮糖', en: 'Ketose' },
    furanose:     { cn: '呋喃糖（五元环）', en: 'Furanose' },
    pyranose:     { cn: '吡喃糖（六元环）', en: 'Pyranose' },
    aminosugar:   { cn: '氨基糖与糖酸', en: 'Amino sugars and sugar acids' },
    disaccharide: { cn: '双糖', en: 'Disaccharides' },

    base:       { cn: '碱基', en: 'Bases' },
    nucleoside: { cn: '核苷', en: 'Nucleosides' },
    nucleotide: { cn: '核苷酸', en: 'Nucleotides' },

    redox:      { cn: '氧化还原辅酶', en: 'Redox coenzymes' },
    transfer:   { cn: '基团转移辅酶', en: 'Group-transfer coenzymes' },
    vitamin:    { cn: '维生素', en: 'Vitamins' },

    fattyacid:  { cn: '脂肪酸', en: 'Fatty acids' },
    glyceride:  { cn: '甘油酯与甘油磷脂', en: 'Glycerides and glycerophospholipids' },
    sphingo:    { cn: '鞘脂', en: 'Sphingolipids' },
    sterol:     { cn: '固醇与类固醇', en: 'Sterols and steroids' },
    eicosanoid: { cn: '类二十烷酸', en: 'Eicosanoids' },
    isoprenoid: { cn: '异戊二烯类与脂溶性维生素', en: 'Isoprenoids and fat-soluble vitamins' },

    glycolysis: { cn: '糖酵解与糖异生', en: 'Glycolysis and gluconeogenesis' },
    tca:        { cn: '柠檬酸循环', en: 'Citric acid cycle' },
    ppp:        { cn: '磷酸戊糖途径与 Calvin', en: 'Pentose phosphate and Calvin' },
    lipidmeta:  { cn: '脂代谢中间物', en: 'Lipid metabolism intermediates' },
    ureacycle:  { cn: '尿素循环', en: 'Urea cycle' },
    energy:     { cn: '高能磷酸与其他', en: 'High-energy phosphates and others' },

    porphyrin:  { cn: '卟啉与胆色素', en: 'Porphyrins and bile pigments' },
    amine:      { cn: '氨基酸衍生的胺类与激素', en: 'Amines and hormones from amino acids' }
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
      /* SMILES is COLLAPSED, and that is a deliberate change rather than tidying.
         Two reasons, and the second one matters more.

         (1) It reads as an error. A stereochemically explicit SMILES is a wall of
         [C@@H] and [C@H] -- cobalamin's is 285 characters -- and on a study card
         that looks like corrupted text rather than data. Ruojin read it as exactly
         that: "C@@H 出现了这种一眼就是错误的东西".

         (2) It is the LEAST verified field on the card, displayed as if it were the
         most important. check_structures.py says so in its own output: heavy-atom
         composition is checked across formula, SMILES and drawing, but hydrogen
         count and STEREOCHEMISTRY are not, and the @/@@ tags are precisely the
         stereochemistry. Putting the one unverified field behind a disclosure, with
         the caveat written on the summary line, is more honest than printing it
         first and hoping the reader remembers the limitation.

         The formula and the CID stay visible: the CID is the audit trail a reader
         can actually follow to check the molecule. */
      '<dl class="meta">' +
        '<dt>分子式</dt><dd><code>' + esc(it.formula) + '</code></dd>' +
        '<dt>PubChem</dt><dd><code>CID ' + esc(it.cid) + '</code></dd>' +
      '</dl>' +
      '<details class="smiles"><summary>SMILES <span class="muted">机器可读式；' +
        '其中的 @ / @@ 是立体化学标记，而立体化学是本项目<b>唯一没有核对过</b>的一层</span></summary>' +
        '<code>' + esc(it.smiles) + '</code></details>' +
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

    /* Render in CLS order first, then everything CLS does not know about. The second
       loop is the fix for the silent-drop bug described at CLS: an item must never
       disappear just because nobody added a translation for its class. An unknown class
       is shown under its own raw name, and an item with no class at all lands in 其他,
       so a new group renders correctly before anyone touches this table. */
    var body = '';
    var placed = [];
    Object.keys(CLS).forEach(function (c) {
      var sub = items.filter(function (it) { return it.cls === c; });
      if (!sub.length) return;
      sub.forEach(function (it) { placed.push(it); });
      body += '<h3 class="cls">' + esc(CLS[c].cn) +
        ' <span class="muted">' + esc(CLS[c].en) + ' · ' + sub.length + '</span></h3>' +
        '<div class="grid">' + sub.map(itemHtml).join('') + '</div>';
    });
    var left = items.filter(function (it) { return placed.indexOf(it) < 0; });
    if (left.length) {
      var byCls = {};
      left.forEach(function (it) {
        var k = it.cls || '__none__';
        (byCls[k] = byCls[k] || []).push(it);
      });
      Object.keys(byCls).forEach(function (k) {
        var sub = byCls[k];
        var label = k === '__none__' ? '其他' : k;
        body += '<h3 class="cls">' + esc(label) +
          ' <span class="muted">' + (k === '__none__' ? 'Other' : 'unclassified') +
          ' · ' + sub.length + '</span></h3>' +
          '<div class="grid">' + sub.map(itemHtml).join('') + '</div>';
      });
    }

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
