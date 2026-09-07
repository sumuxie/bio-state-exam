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
  /* One atom rendered as text -- "NH₂", "NH₃⁺", "OH", "O⁻". Used BOTH by the
     difference line under the drawings and by nothing else: the SVG builds its
     own label out of tspans so it can style the parts separately. Kept next to
     the drawing code so the two cannot drift apart in wording. */
  /* H implied by an atom's bonds and its formal charge. The ionised drawings
     derive their hydrogen counts through this rather than adding one to the
     stored `h`, so a wrong `h` in the data cannot be carried through into the
     ionised form as well -- it fails the consistency check below instead.
     Cations: N and O gain a bond when protonated (lone pair -> bond), carbon
     would lose one, hence the split. Anions lose one either way. */
  var VALENCE = { C: 4, N: 3, O: 2, S: 2, P: 3 };
  var LONE_PAIR = { N: 1, O: 1, S: 1, P: 1 };
  function derivedH(el, used, q) {
    var v = VALENCE[el];
    if (v === undefined) return null;
    v = q > 0 ? (LONE_PAIR[el] ? v + q : v - q) : v + q;
    return v >= used ? v - used : null;
  }

  var SUB = ['', '', '₂', '₃', '₄'];
  function atomLabel(el, h, q) {
    return el + (h ? 'H' + (h > 1 ? SUB[h] : '') : '') +
           (q ? (q > 0 ? '⁺' : '⁻') : '');
  }

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
             (a.q ? '<tspan class="chg" dy="-7">' + (a.q > 0 ? '+' : '−') +
                    (Math.abs(a.q) > 1 ? Math.abs(a.q) : '') + '</tspan>' : '') +
             '</text>';
    }).join('');

    return '<svg class="mol" viewBox="0 0 ' + w + ' ' + h + '" width="' + w +
      '" height="' + h + '" role="img" aria-label="skeletal structure">' +
      '<g class="bonds">' + parts.join('') + '</g>' + labels + '</svg>';
  }

  /* ------------------------------------------------------- zwitterion
     WHY THIS IS COMPUTED AND NOT STORED. Every `mol` graph is the NEUTRAL,
     un-ionised molecule, and that is load-bearing: check_structures.py and
     check_bond_orders.py both verify it against `smiles` and `formula`, which
     are PubChem's neutral forms. Editing the stored graph into a zwitterion
     would put the drawing beyond the reach of both checkers -- 20 hand-edited
     structures nobody could verify, which is the exact failure this project
     is built to prevent. So the stored graph stays neutral and verified, and
     the proton is moved HERE, at render time, by a rule.

     THE RULE, read off the graph, never off a remembered picture:
       alpha-carbon      a C bonded to at least one N *and* to a carboxyl C
       carboxyl C        a C with one double-bonded O and one single-bonded O
                         that carries an H
       the move          that OH oxygen loses its H and becomes O-;
                         the alpha-N gains one and becomes NH3+ (NH2+ in proline,
                         whose N is secondary -- the rule handles it because it
                         counts bonds rather than assuming a primary amine)

     Aspartate and glutamate have a SECOND carboxyl on the side chain and lysine
     and arginine have side-chain nitrogens, so "find the carboxyl" and "find the
     N" are both ambiguous on their own. Requiring the two to meet at the same
     carbon is what disambiguates: only the alpha-carbon touches both.

     It returns an ERROR STRING rather than throwing. A throw here would blank
     the page, which is the one failure mode this app was split out to avoid
     (see the header). A card that says it could not ionise is visible and
     harmless; a blank app during revision is not. */
  function zwitterion(mol, it) {
    var i, nbr = mol.atoms.map(function () { return []; });
    mol.bonds.forEach(function (b) {
      var o = b[2] || 1;
      nbr[b[0]].push({ at: b[1], order: o });
      nbr[b[1]].push({ at: b[0], order: o });
    });

    function carboxylOH(c) {
      // -> index of the -OH oxygen if atom c is a carboxyl carbon, else -1
      if (mol.atoms[c].el !== 'C') return -1;
      var dblO = -1, ohO = -1;
      nbr[c].forEach(function (n) {
        if (mol.atoms[n.at].el !== 'O') return;
        if (n.order === 2) dblO = n.at;
        else if (n.order === 1 && mol.atoms[n.at].h > 0) ohO = n.at;
      });
      return (dblO >= 0 && ohO >= 0) ? ohO : -1;
    }

    var sites = [];
    for (i = 0; i < mol.atoms.length; i++) {
      if (mol.atoms[i].el !== 'C') continue;
      var ns = nbr[i].filter(function (n) { return mol.atoms[n.at].el === 'N'; });
      var cs = nbr[i].filter(function (n) { return carboxylOH(n.at) >= 0; });
      if (ns.length && cs.length) sites.push({ ca: i, n: ns, c: cs });
    }
    // Assert, do not assume. Anything other than exactly one unambiguous site
    // means the rule does not fit this molecule, and guessing would draw an ion
    // that does not exist.
    if (sites.length !== 1)
      return { err: '找不到唯一的 α-碳（命中 ' + sites.length + ' 个）' };
    if (sites[0].n.length !== 1)
      return { err: 'α-碳上有 ' + sites[0].n.length + ' 个氮，无法确定 α-氨基' };
    if (sites[0].c.length !== 1)
      return { err: 'α-碳上有 ' + sites[0].c.length + ' 个羧基' };

    var nIdx = sites[0].n[0].at;
    var oIdx = carboxylOH(sites[0].c[0].at);
    if (!(mol.atoms[nIdx].h > 0))
      return { err: 'α-氨基上没有可数的 H，不能画成 NH3+' };

    var atoms = mol.atoms.map(function (a) {
      return { el: a.el, x: a.x, y: a.y, h: a.h, q: a.q };
    });
    // bond orders summed per atom, so every ionised H below is derived
    var used = atoms.map(function () { return 0; });
    mol.bonds.forEach(function (b) {
      var o = b[2] || 1;
      used[b[0]] += o; used[b[1]] += o;
    });
    function ionise(k, q) {
      var h = derivedH(atoms[k].el, used[k], q);
      if (h === null) return atoms[k].el + ' 的键数超出它带 ' + q + ' 电时的价';
      atoms[k] = { el: atoms[k].el, x: atoms[k].x, y: atoms[k].y, h: h, q: q };
      return null;
    }

    var nBefore = atomLabel(atoms[nIdx].el, atoms[nIdx].h, 0);
    var oBefore = atomLabel(atoms[oIdx].el, atoms[oIdx].h, 0);
    var bad = ionise(nIdx, 1) || ionise(oIdx, -1);
    if (bad) return { err: bad };

    /* THE SIDE CHAIN. Aspartate and glutamate carry a second carboxyl and
       lysine and arginine a basic nitrogen, all of them charged at pH 7, so a
       drawing that ionises only the alpha groups would show a net-zero molecule
       on a card labelled -1. Which atom is declared per entry as `sc7` and
       asserted here, rather than found by a rule: the rules that locate them
       differ per group (carboxyl / primary amine / guanidinium) and the
       guanidinium rule also matches histidine's imidazole, which is NOT
       protonated at pH 7. A wrong declaration cannot pass silently -- the net
       charge is recomputed from the finished drawing and checked against the
       independently declared `q7` below. */
    if (it && it.sc7) {
      if (!(it.sc7.at >= 0 && it.sc7.at < atoms.length))
        return { err: 'sc7 指向不存在的原子 ' + it.sc7.at };
      if (it.sc7.at === nIdx || it.sc7.at === oIdx)
        return { err: 'sc7 指向的是 α 位，不是侧链' };
      bad = ionise(it.sc7.at, it.sc7.q);
      if (bad) return { err: bad };
    }

    // Two independently authored numbers that have to agree: what the finished
    // drawing adds up to, and what the entry declares its pH-7 charge to be.
    var net = atoms.reduce(function (t, a) { return t + (a.q || 0); }, 0);
    if (it && typeof it.q7 === 'number' && net !== it.q7)
      return { err: '画出来净电荷 ' + net + '，但数据声明 q7 = ' + it.q7 };
    /* The difference is DERIVED, not written per amino acid. Proline's is
       NH → NH₂⁺ rather than NH₂ → NH₃⁺ because its N is secondary, and a
       hand-written caption would have got that one wrong. */
    return {
      mol: { atoms: atoms, bonds: mol.bonds },
      net: net,
      diff: {
        n: { from: nBefore, to: atomLabel(atoms[nIdx].el, atoms[nIdx].h, 1) },
        o: { from: oBefore, to: atomLabel(atoms[oIdx].el, atoms[oIdx].h, -1) },
        sc: (it && it.sc7) ? {
          from: atomLabel(mol.atoms[it.sc7.at].el, mol.atoms[it.sc7.at].h, 0),
          to: atomLabel(atoms[it.sc7.at].el, atoms[it.sc7.at].h, it.sc7.q),
          q: it.sc7.q
        } : null
      }
    };
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

  // ---------------------------------------------------------- pronunciation
  /* TWO SOURCES, AND THE BUTTON SAYS WHICH ONE YOU ARE ABOUT TO HEAR.
     Ruojin asked for 真人发音 -- a real human voice, not the speechSynthesis
     the other three apps use. Real recordings exist, but only for part of
     this list, and the split is not random. Measured 2026-08-09 against
     en.wiktionary over the 202 structure names: 61 have an English human
     recording, the rest have none. The 61 are the ordinary-English names --
     the amino acids, the bases, cholesterol, urea. Every systematic name
     (alpha-D-glucopyranose, 3-phosphoglycerate, acetyl-CoA) has nothing,
     because no dictionary has an entry for it.

     So the hard words -- exactly the ones worth checking -- are the ones with
     no human recording, and a real-audio-only feature would be silent
     precisely where it is needed. Hence the fallback to synthesis, and hence
     the two different icons: 🔊 is a recorded person, 🔈 is the browser
     talking. Conflating them would misrepresent 🔈 as a pronunciation
     authority, which it is not.

     Note this is a WEAKER claim than biochemie_pro's comment nearby, which
     says recorded audio is "not feasible". That is true for pro -- it speaks
     whole sentences in two languages. Here the unit is a single word, so a
     third of them can be real. */
  var PRON = (function () {
    var m = {}, p = (window.STRUCT && window.STRUCT.pronunciations) || null;
    if (p && p.items) {
      p.items.forEach(function (r) {
        if (!r.file) return;
        (r.keys || []).forEach(function (k) { m[k] = r; });
      });
    }
    return m;
  })();

  var BYKEY = (function () {
    var m = {};
    GROUPS.forEach(function (g) {
      (g.items || []).forEach(function (it) { if (it.key) m[it.key] = it; });
    });
    return m;
  })();

  var speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window;
  var audioEl = null;

  // Same ranking idea as biochemie_pro: the first en-* voice Windows offers is
  // usually the legacy SAPI one, with the neural voices further down the list.
  var VOICE_GOOD = /natural|neural|online|premium|enhanced|siri|google/i;
  var VOICE_POOR = /espeak|compact|david|zira|mark/i;

  function pickEnVoice() {
    if (!speechAvailable) return null;
    var vs = (window.speechSynthesis.getVoices() || []).filter(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf('en') === 0;
    });
    if (!vs.length) return null;
    return vs.sort(function (a, b) { return score(b) - score(a); })[0];
    function score(v) {
      var s = 0;
      if (/^en-US/i.test(v.lang)) s += 10;
      if (VOICE_GOOD.test(v.name)) s += 30;
      if (VOICE_POOR.test(v.name)) s -= 25;
      return s;
    }
  }

  function speak(text) {
    if (!speechAvailable) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;                       // chemical names need the extra room
    var v = pickEnVoice();
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  }

  function playKey(key) {
    var it = BYKEY[key];
    if (!it) return;
    if (speechAvailable) window.speechSynthesis.cancel();
    if (audioEl) { try { audioEl.pause(); } catch (e) {} audioEl = null; }
    var rec = PRON[key];
    if (rec) {
      audioEl = new Audio('audio/' + rec.file);
      // A missing or undecodable file must not just click and do nothing --
      // fall through to synthesis so the button always answers.
      audioEl.play().catch(function () { speak(it.en); });
      return;
    }
    speak(it.en);
  }

  function sayBtnHtml(it) {
    var rec = PRON[it.key];
    if (rec) {
      return ' <button class="say say-real" data-say="' + esc(it.key) + '" ' +
        'title="真人录音 · human recording — ' + esc(rec.artist) + ' · ' + esc(rec.license) + '" ' +
        'aria-label="Play human recording of ' + esc(it.en) + '">🔊</button>';
    }
    if (!speechAvailable) return '';
    return ' <button class="say say-tts" data-say="' + esc(it.key) + '" ' +
      'title="合成音 · browser synthesis — 这个名字没有真人录音" ' +
      'aria-label="Speak ' + esc(it.en) + '">🔈</button>';
  }

  /* Attribution is not optional. These are other people’s recordings under CC
     licences, so every one is credited with its author, licence and source. */
  function creditsHtml() {
    var p = (window.STRUCT && window.STRUCT.pronunciations) || null;
    if (!p || !p.items || !p.items.length) return '';
    var rows = p.items.filter(function (r) { return r.file; }).map(function (r) {
      return '<li><b>' + esc(r.term) + '</b> — ' + esc(r.artist) +
        ' · ' + esc(r.license) +
        ' · <a href="' + esc(r.page) + '" rel="noopener">Wiktionary</a></li>';
    }).join('');
    return '<details class="credits"><summary>真人发音的出处与署名 · ' +
      'Pronunciation credits (' + p.items.length + ' recordings, retrieved ' +
      esc(p.retrieved) + ')</summary>' +
      '<p class="muted">🔊 = 真人录音，来自 Wiktionary / Wikimedia Commons，' +
      '按其 CC 许可署名如下。🔈 = 浏览器合成音，用于没有真人录音的名字' +
      '（系统命名的化合物字典里查不到）。</p><ul>' + rows + '</ul></details>';
  }

  /* How a net charge is said in words. "碱性" and "带正电" are NOT the same
     claim and conflating them is a real exam trap: histidine's side chain is
     basic, yet at pH 7 it is mostly unprotonated, so histidine sits at net 0
     next to lysine and arginine at +1. So the charge is stated per amino acid,
     never inferred from the acidic/basic heading it sits under. */
  function netText(n) {
    if (n === 0) return { cls: '', sign: '0',
      word: '两性离子 zwitterion —— 正负各一、互相抵消，分子整体不带电但内部带电' };
    return { cls: n > 0 ? 'q-pos' : 'q-neg',
      sign: (n > 0 ? '+' : '−') + Math.abs(n),
      word: n > 0 ? '整体带正电 —— 侧链的正电没有被抵消掉'
                  : '整体带负电 —— 侧链多出一个负电' };
  }

  function itemHtml(it, g) {
    var n = it.note && it.note.cn;

    /* Which form gets DRAWN. Only a group that declares `aqueous` is ionised,
       so this can never fire on a sugar or a lipid that happens to contain an
       amino-acid-like fragment -- the flag is opt-in per group, not a guess
       made from the graph. */
    var zw = (g && g.aqueous && it.mol) ? zwitterion(it.mol, it) : null;
    return '<article class="card">' +
      '<header class="card-head">' +
        // English is the MAIN title and Chinese the subtitle (Ruojin, 2026-08-09):
        // the exam is taken in English, so the English name is what has to be
        // recognised on sight. `.names b` is the large face and the rest of
        // `.names` is small and dim, so swapping the order does the styling too.
        '<span class="names"><b>' + esc(it.en) + '</b>' + sayBtnHtml(it) + ' ' +
          '<span class="cn-sub">' + esc(it.cn) + '</span></span>' +
        '<span class="codes">' + esc(it.tlc) + ' · ' + esc(it.olc) +
          (it.essential ? ' <span class="ess" title="必需氨基酸 · essential">必需</span>' : '') +
          // The charge is put in the HEADER, beside the name, because it is
          // what gets asked and what the acidic/basic heading does not say.
          (zw && zw.mol
            ? ' <span class="qbadge ' + netText(zw.net).cls + '" title="pH 7 下的净电荷">' +
                'pH 7 · ' + netText(zw.net).sign + '</span>'
            : '') +
        '</span>' +
      '</header>' +
      // An undrawn molecule shows an explicit empty slot rather than nothing,
      // so the page never looks more finished than it is.
      /* BOTH FORMS, SIDE BY SIDE, and that is the point of the card rather than
         a layout preference. The neutral drawing is the one the checkers verify
         against `smiles`/`formula`; the zwitterion is the one that actually
         exists in water and the one an exam asks for. Showing only one of them
         forces a choice between "verified" and "true", and the reader cannot
         see that the two differ by a single proton -- which is the thing being
         confused in the first place. So: keep both, label both, and state the
         difference underneath, derived from the transformation itself. */
      (it.mol
        ? (zw && zw.mol
            ? '<div class="draws">' +
                '<figure class="pane">' + molSvg(it.mol) +
                  '<figcaption>中性未解离型 <span class="muted">neutral, un-ionised' +
                  '<br>= SMILES / CID 记的那个，被检查器核对</span></figcaption>' +
                '</figure>' +
                '<figure class="pane pane-aq">' + molSvg(zw.mol) +
                  '<figcaption>水溶液中 · <b>pH 7</b>　<span class="muted">' +
                    '= 考试要你写的那个</span><br>' +
                    '<span class="qline">α-氨基 <b class="q-pos">' + esc(zw.diff.n.to) +
                      '</b> <b class="q-pos">+1</b></span>' +
                    '<span class="qline">α-羧基 <b class="q-neg">' + esc(zw.diff.o.to) +
                      '</b> <b class="q-neg">−1</b></span>' +
                    (zw.diff.sc
                      ? '<span class="qline">侧链 <b class="' +
                          (zw.diff.sc.q > 0 ? 'q-pos' : 'q-neg') + '">' +
                          esc(zw.diff.sc.from) + ' → ' + esc(zw.diff.sc.to) + '</b> <b class="' +
                          (zw.diff.sc.q > 0 ? 'q-pos' : 'q-neg') + '">' +
                          (zw.diff.sc.q > 0 ? '+1' : '−1') + '</b></span>'
                      : '<span class="qline muted">侧链不带电</span>') +
                    '<span class="qsum">净电荷 <b class="' + netText(zw.net).cls + '">' +
                      netText(zw.net).sign + '</b> <span class="muted">' +
                      netText(zw.net).word + '</span></span>' +
                  '</figcaption>' +
                '</figure>' +
              '</div>' +
              '<p class="diff">差别只有<b>一个质子的位置</b>：羧基 ' +
                '<code>' + esc(zw.diff.o.from) + '</code> → <code class="q-neg">' +
                esc(zw.diff.o.to) + '</code>（<b class="q-neg">得负电 −1</b>，失去那个 H）' +
                '，α-氨基 <code>' + esc(zw.diff.n.from) + '</code> → ' +
                '<code class="q-pos">' + esc(zw.diff.n.to) + '</code>' +
                '（<b class="q-pos">得正电 +1</b>，接住那个 H）' +
                '。<span class="muted">质子是从羧基搬到氨基上的，不是新加的——' +
                '所以两者分子式相同（' + esc(it.formula) + '），互为异构体，' +
                '骨架和所有重原子一个没动。</span></p>'
            : '<div class="draw">' + molSvg(it.mol) +
                (zw && zw.err
                  ? '<p class="form form-bad">未能画成两性离子：' + esc(zw.err) +
                    ' <span class="muted">上图仍是中性型</span></p>'
                  : '') +
              '</div>')
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
        '记的是<b>中性型</b>（与图上的两性离子互为异构体，分子式相同，差一个质子的位置）；' + '其中的 @ / @@ 是立体化学标记，而立体化学是本项目<b>唯一没有核对过</b>的一层</span></summary>' +
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
      body += '<h3 class="cls">' + esc(CLS[c].en) +
        ' <span class="muted">' + esc(CLS[c].cn) + ' · ' + sub.length + '</span></h3>' +
        '<div class="grid">' + sub.map(function (it) { return itemHtml(it, g); }).join('') + '</div>';
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
        var label = k === '__none__' ? 'Other' : k;
        body += '<h3 class="cls">' + esc(label) +
          ' <span class="muted">' + (k === '__none__' ? '其他' : 'unclassified') +
          ' · ' + sub.length + '</span></h3>' +
          '<div class="grid">' + sub.map(function (it) { return itemHtml(it, g); }).join('') + '</div>';
      });
    }

    return '<section class="group">' +
      '<h2>' + esc(g.enTitle) + ' <span class="muted">' + esc(g.cnTitle) +
        ' · ' + items.length + '/' + g.items.length + '</span></h2>' +
      (g.note && g.note.cn ? '<p class="gnote">' + esc(g.note.cn) + '</p>' : '') +
      (links ? '<nav class="sees">对应节点：' + links + '</nav>' : '') +
      body +
      '</section>';
  }

  function render() {
    var html = GROUPS.map(groupHtml).join('');
    $('#app').innerHTML = (html ||
      '<p class="empty">没有匹配的结构 <span class="muted">no match</span></p>') +
      creditsHtml();
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

    // Delegated, because render() replaces the whole subtree on every
    // keystroke -- per-button listeners would be re-bound constantly.
    $('#app').addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('[data-say]');
      if (btn) playKey(btn.getAttribute('data-say'));
    });

    // Chrome populates the voice list asynchronously; without this the first
    // click of a session can get the wrong voice or none at all.
    if (speechAvailable) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = function () {
        window.speechSynthesis.getVoices();
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
