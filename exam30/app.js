/* ============================================================
   exam30 — app logic
   Data contract (see data/t01.js): every topic is
     { n, bonus?, a: HALF, b?: HALF }
   HALF = { titleEN, titleCN, opener, openerCN, spine[], blocks[{h,hcn,points[],cn}],
            numbers[], clinic[], traps[], terms[[en,cn],...] }
   Text in points/opener uses a mini-markup: **key term** -> cloze-able key,
   `code` -> monospace, all rendered by md() below.
   ============================================================ */
(function () {
  'use strict';

  var DB = window.EXAM30 || { topics: [] };
  var T = DB.topics.slice().sort(function (x, y) { return x.n - y.n; });

  /* ---------- persistence ---------- */
  var LS = {
    get: function (k, d) {
      try { var v = localStorage.getItem('exam30.' + k); return v == null ? d : JSON.parse(v); }
      catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem('exam30.' + k, JSON.stringify(v)); } catch (e) {}
    }
  };
  var mastery = LS.get('mastery', {});      // { "1A": 0|1|2 }
  var checks  = LS.get('checks', {});       // { "1A": [0,2,3] }  spine items ticked
  var mode    = LS.get('mode', 'full');
  var theme   = LS.get('theme', 'light');

  /* ---------- tiny markup ---------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function fmt(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<span class="k">$1</span>')
      .replace(/`([^`]+)`/g, '<span class="rx">$1</span>');
  }
  /* A fullwidth ｜ separates the English sentence from its Chinese
     translation; the Chinese half is a .zh layer the 中译 toggle collapses.
     (Fullwidth on purpose — a plain | never has to be escaped in the data.) */
  function md(s) {
    var parts = String(s).split('｜');
    var out = fmt(parts[0].trim());
    if (parts.length > 1) out += '<span class="zh">' + fmt(parts.slice(1).join('｜').trim()) + '</span>';
    return out;
  }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }

  /* ---------- sidebar ---------- */
  var list = document.getElementById('list');
  var qbox = document.getElementById('q');

  function halfKey(n, p) { return String(n) + p.toUpperCase(); }

  function topicText(t) {
    return JSON.stringify(t).toLowerCase();
  }

  function renderList(filter) {
    list.innerHTML = '';
    var f = (filter || '').trim().toLowerCase();
    var lastBonus = false;
    T.forEach(function (t) {
      if (f && topicText(t).indexOf(f) === -1 && String(t.n).indexOf(f) !== 0) return;
      if (t.bonus && !lastBonus) {
        var sep = el('<div class="side-foot" style="border-top:1px solid var(--line);border-bottom:0;' +
          'color:var(--ink-3);font-size:.72rem;letter-spacing:.08em">超纲附加 · asked anyway</div>');
        list.appendChild(sep);
        lastBonus = true;
      }
      var ma = mastery[halfKey(t.n, 'a')] || 0;
      var mb = t.b ? (mastery[halfKey(t.n, 'b')] || 0) : null;
      var b = el(
        '<button class="li" data-n="' + t.n + '">' +
          '<span class="li-n">' + (t.bonus ? '+' : t.n) + '</span>' +
          '<span class="li-t">' +
            '<span class="li-a">' + esc(t.a.titleCN) + '</span>' +
            (t.b ? '<span class="li-b">' + esc(t.b.titleCN) + '</span>' : '') +
          '</span>' +
          '<span class="dots">' +
            '<i class="dot m' + ma + '"></i>' +
            (t.b ? '<i class="dot m' + mb + '"></i>' : '') +
          '</span>' +
        '</button>');
      b.addEventListener('click', function () { location.hash = '#t/' + t.n; });
      list.appendChild(b);
    });
    markActive();
  }

  function markActive() {
    var cur = currentN();
    Array.prototype.forEach.call(list.querySelectorAll('.li'), function (b) {
      b.classList.toggle('on', Number(b.dataset.n) === cur);
    });
  }

  /* ---------- progress ---------- */
  function updateProgress() {
    var total = 0, done = 0;
    T.forEach(function (t) {
      if (t.bonus) return;
      ['a', 'b'].forEach(function (p) {
        if (!t[p]) return;
        total++;
        if ((mastery[halfKey(t.n, p)] || 0) === 2) done++;
      });
    });
    document.getElementById('progFill').style.width = (total ? done / total * 100 : 0) + '%';
    document.getElementById('progTxt').textContent = done + ' / ' + total;
  }

  /* ---------- half rendering ---------- */
  function renderHalf(t, p) {
    var h = t[p];
    if (!h) return '';
    var key = halfKey(t.n, p);
    var m = mastery[key] || 0;
    var ticked = checks[key] || [];

    var out = '<section class="half ' + p + '" data-key="' + key + '">';

    out += '<div class="half-head">' +
      '<span class="tag">' + (p === 'a' ? 'A · 综合' : 'B · 专论') + '</span>' +
      '<span class="half-t"><h2>' + esc(h.titleEN) + '</h2>' +
      '<div class="cn">' + esc(h.titleCN) + '</div></span>' +
      '<span class="mastery">' +
        '<button data-m="1" class="' + (m === 1 ? 'on' : '') + '" title="眼熟">～</button>' +
        '<button data-m="2" class="' + (m === 2 ? 'on' : '') + '" title="会说">✓</button>' +
      '</span></div>';

    if (h.opener) {
      out += '<div class="opener"><b>开口第一句：</b>' + md(h.opener) +
        (h.openerCN ? '<span class="cn">' + esc(h.openerCN) + '</span>' : '') + '</div>';
    }

    if (h.spine && h.spine.length) {
      out += '<div class="spine"><h3>答题骨架 · say it in this order</h3><ol>';
      h.spine.forEach(function (s, i) {
        out += '<li class="' + (ticked.indexOf(i) > -1 ? 'done' : '') + '" data-i="' + i + '">' + md(s) + '</li>';
      });
      out += '</ol></div>';
    }

    if (h.blocks && h.blocks.length) {
      out += '<div class="blocks">';
      h.blocks.forEach(function (b) {
        out += '<div class="block"><div class="bh">' + esc(b.h) +
          (b.hcn ? '<span class="bcn">' + esc(b.hcn) + '</span>' : '') + '</div>';
        out += '<ul>';
        (b.points || []).forEach(function (pt) { out += '<li>' + md(pt) + '</li>'; });
        out += '</ul>';
        if (b.cn) out += '<div class="bgloss">' + esc(b.cn) + '</div>';
        out += '</div>';
      });
      out += '</div>';
    }

    var focus = (window.EXAM30_FOCUS || {})[String(t.n) + p];
    if (focus && focus.length) {
      out += '<div class="chem"><h3>🧬 重点补充 · 分子 / 蛋白 · 工程 / 微生物 · 病毒 / 化学</h3><ul>' +
        focus.map(function (x) {
          var m = /^#(\S+)\s+/.exec(x), tag = '';
          if (m) { tag = '<b class="tag t-' + esc(m[1]) + '">' + esc(m[1]) + '</b>'; x = x.slice(m[0].length); }
          return '<li>' + tag + md(x) + '</li>';
        }).join('') + '</ul></div>';
    }

    var ex = '';
    if (h.numbers && h.numbers.length) {
      ex += '<div class="ex"><h3>数字 · numbers to quote</h3><ul>' +
        h.numbers.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div>';
    }
    if (h.clinic && h.clinic.length) {
      ex += '<div class="ex clinic"><h3>临床挂钩 · clinical hooks</h3><ul>' +
        h.clinic.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div>';
    }
    if (h.traps && h.traps.length) {
      ex += '<div class="ex traps"><h3>易错 · do not say</h3><ul>' +
        h.traps.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div>';
    }
    if (h.terms && h.terms.length) {
      ex += '<div class="ex"><h3>词汇 · vocabulary</h3><div class="terms">' +
        h.terms.map(function (x) {
          return '<span class="term">' + esc(x[0]) + '<i>' + esc(x[1]) + '</i></span>';
        }).join('') + '</div></div>';
    }
    if (ex) out += '<div class="extras">' + ex + '</div>';

    out += '</section>';
    return out;
  }

  /* ---------- pages ---------- */
  var main = document.getElementById('main');

  function currentN() {
    var m = /^#t\/(\d+)/.exec(location.hash);
    return m ? Number(m[1]) : 0;
  }

  function renderTopic(n) {
    var t = T.filter(function (x) { return x.n === n; })[0];
    if (!t) { renderHome(); return; }
    var html = '<div class="thead">' +
      '<h1><span class="num">' + (t.bonus ? '附加' : t.n) + '</span>' + esc(t.a.titleCN) +
      (t.b ? ' ／ ' + esc(t.b.titleCN) : '') + '</h1>' +
      '<div class="nav-lr">' +
        '<button id="prev">← 上一题</button><button id="next">下一题 →</button>' +
        '<button id="drawHere">🎲 抽题</button><button id="printMe">🖨 打印</button>' +
      '</div></div>';
    html += renderHalf(t, 'a');
    if (t.b) html += renderHalf(t, 'b');
    html += '<div class="kbd">键盘：<b>J</b>/<b>K</b> 上下一题 · <b>1</b> 全文 <b>2</b> 挖空 <b>3</b> 骨架 · ' +
      '<b>Z</b> 中译 <b>C</b> 临床 · <b>S</b> 朗读 <b>N</b>/<b>B</b> 下/上一句 <b>Esc</b> 停 · ' +
      '<b>R</b> 抽题 · <b>/</b> 搜索</div>';
    main.innerHTML = html;
    main.scrollIntoView({ block: 'start' });
    window.scrollTo(0, 0);

    var idx = T.map(function (x) { return x.n; }).indexOf(n);
    document.getElementById('prev').onclick = function () {
      location.hash = '#t/' + T[(idx - 1 + T.length) % T.length].n;
    };
    document.getElementById('next').onclick = function () {
      location.hash = '#t/' + T[(idx + 1) % T.length].n;
    };
    document.getElementById('drawHere').onclick = draw;
    document.getElementById('printMe').onclick = function () { window.print(); };

    if (mode === 'spine') shutBlocks(true);
    markActive();
  }

  function renderHome() {
    var counted = T.filter(function (t) { return !t.bonus; }).length;
    main.innerHTML =
      '<div class="page">' +
        '<h1>期末考试怎么考 · exam conditions</h1>' +
        '<p>早上全体在 seminar room；笔试通过后，学生按 <b>30 分钟一档</b>分配给各位考官。</p>' +
        '<h2>1 · 笔试 written part</h2>' +
        '<ul><li>口试前必须先通过 test（第一、二考期）。</li>' +
        '<li>若前两次不过，<b>第三次（最后一次）考期不再考 test</b>，直接口试。</li></ul>' +
        '<h2>2 · 口试 oral part</h2>' +
        '<ul>' +
        '<li><b>1 道综合题</b> = 1 题 general biochemistry &amp; metabolism（本 app 的 <b>A 半</b>）' +
        ' + 1 题 special biochemistry（<b>B 半</b>）。</li>' +
        '<li><b>1 个结构式</b> — 只考 OBLIGATORY 栏里的结构。</li>' +
        '<li><b>1 个检验参数</b> — 不必背精确参考范围，但必须知道生理状态下的数量级，<b>别忘了单位</b>。</li>' +
        '</ul>' +
        '<p>最终成绩还反映全学年的平时表现（含学期内测验成绩）。</p>' +
        '<div class="note">本 app 收录 ' + counted + ' 题正题（每题 A/B 两半 = ' + (counted * 2) +
        ' 份答案），外加同学被真实追问过的超纲题（例如光合作用）。</div>' +
        '<h2>怎么用 · how to drill</h2>' +
        '<ul>' +
        '<li><b>全文</b>：第一遍理解，看『开口第一句 → 骨架 → 各块要点』。</li>' +
        '<li><b>挖空</b>：关键词被涂黑，先自己说出来再点开核对。</li>' +
        '<li><b>骨架</b>：只剩标题，逼自己把内容讲出来；点标题展开对答案。</li>' +
        '<li>骨架里的每一条<b>点一下划掉</b>，代表这条你已经能脱口而出。</li>' +
        '<li>每半题右上角 <b>～</b>=眼熟 / <b>✓</b>=会说，进度条只数 ✓。</li>' +
        '<li><b>🎲 抽题</b> 模拟考官抽签，自动开 15 分钟计时。</li>' +
        '<li><b>中译</b> 一键展开/收起所有中文；<b>临床</b> 收起医学部分，只留化学与分子层面。</li>' +
        '<li><b>🔊 朗读</b>：每半题、每一节标题、每一块，以及<b>每一段后面</b>都有自己的小喇叭 —— ' +
        '点一下只读那一段，<b>Shift+点</b>从那一段一直往下读。</li>' +
        '<li>左下角面板选<b>口音</b>（美/英/澳/印…，按系统里真正装了的语音列出）、男女声、具体声音与语速；' +
        '⭐ 是神经网络语音，最接近真人（用 Edge 打开通常就有）。面板可收起或整个隐藏，左下角小喇叭恢复。</li>' +
        '</ul>' +
        '<h2>每半题里的『🧬 重点补充』是什么</h2>' +
        '<p>考官主要来自化学学院，所以每半题额外挂了一张卡，把这道题里' +
        '<b>分子生物学 / 蛋白质 / 微生物与病毒</b>的角度补齐（化学作为次重点也带上），' +
        '每条都有中英对照。标签颜色：' +
        '<b class="tag t-分子">分子</b><b class="tag t-蛋白">蛋白</b>' +
        '<b class="tag t-微生物">微生物</b><b class="tag t-病毒">病毒</b><b class="tag t-化学">化学</b></p>' +
        '<div class="kbd">键盘：<b>J</b>/<b>K</b> 上下一题 · <b>1</b>/<b>2</b>/<b>3</b> 切模式 · ' +
        '<b>Z</b> 中译 <b>C</b> 临床 · <b>S</b> 朗读 · <b>R</b> 抽题 · <b>/</b> 搜索</div>' +
      '</div>';
    markActive();
  }

  function renderLabs() {
    var L = window.EXAM30_LABS || { groups: [] };
    var html = '<div class="page"><h1>🩸 检验参数 · laboratory parameters</h1>' +
      '<div class="note">考纲原话：不必背精确参考范围，但必须知道生理条件下的<b>数量级</b>，而且<b>不要忘记单位</b>。' +
      '下表按 SI 单位给出常用范围，答题时说「约 …，单位是 …」再讲临床意义即可。</div>';
    L.groups.forEach(function (g) {
      html += '<h2>' + esc(g.name) + '</h2><table><thead><tr>' +
        '<th style="width:22%">参数</th><th style="width:24%">生理值（SI）</th><th>意义 · 升高/降低</th>' +
        '</tr></thead><tbody>';
      g.rows.forEach(function (r) {
        html += '<tr><td><b>' + esc(r[0]) + '</b></td><td class="val">' + esc(r[1]) + '</td><td>' + md(r[2]) + '</td></tr>';
      });
      html += '</tbody></table>';
    });
    html += '</div>';
    main.innerHTML = html;
    markActive();
  }

  function renderStructures() {
    var S = window.EXAM30_STRUCT || { note: '', groups: [] };
    var html = '<div class="page"><h1>🧪 结构式 · structures</h1>' +
      (S.note ? '<div class="note">' + S.note + '</div>' : '');
    S.groups.forEach(function (g) {
      html += '<h2>' + esc(g.name) + '</h2><table><thead><tr>' +
        '<th style="width:26%">结构</th><th>画的时候必须对的地方 · what the examiner checks</th>' +
        '</tr></thead><tbody>';
      g.rows.forEach(function (r) {
        html += '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + md(r[1]) + '</td></tr>';
      });
      html += '</tbody></table>';
    });
    html += '</div>';
    main.innerHTML = html;
    markActive();
  }

  /* ---------- routing ---------- */
  function route() {
    var h = location.hash;
    if (h.indexOf('#t/') === 0) renderTopic(currentN());
    else if (h === '#labs') renderLabs();
    else if (h === '#structures') renderStructures();
    else renderHome();
  }
  window.addEventListener('hashchange', route);

  /* ---------- interactions (event delegation on main) ---------- */
  main.addEventListener('click', function (e) {
    var k = e.target.closest('.k');
    if (k && document.body.classList.contains('mode-cloze')) { k.classList.toggle('on'); return; }

    var mb = e.target.closest('.mastery button');
    if (mb) {
      var half = mb.closest('.half'), key = half.dataset.key, v = Number(mb.dataset.m);
      mastery[key] = (mastery[key] === v) ? 0 : v;
      LS.set('mastery', mastery);
      Array.prototype.forEach.call(half.querySelectorAll('.mastery button'), function (x) {
        x.classList.toggle('on', Number(x.dataset.m) === mastery[key]);
      });
      updateProgress(); renderList(qbox.value);
      return;
    }

    var bh = e.target.closest('.bh');
    if (bh) { bh.parentElement.classList.toggle('shut'); return; }

    var li = e.target.closest('.spine li');
    if (li) {
      var kk = li.closest('.half').dataset.key;
      var arr = checks[kk] || [], i = Number(li.dataset.i), at = arr.indexOf(i);
      if (at > -1) arr.splice(at, 1); else arr.push(i);
      checks[kk] = arr; LS.set('checks', checks);
      li.classList.toggle('done', at === -1);
    }
  });

  function shutBlocks(shut) {
    Array.prototype.forEach.call(main.querySelectorAll('.block'), function (b) {
      b.classList.toggle('shut', !!shut);
    });
  }

  /* ---------- display layers (中译 / 临床) ---------- */
  var layers = LS.get('layers', { zh: true, clin: true });
  function applyLayers() {
    document.body.classList.toggle('no-zh', !layers.zh);
    document.body.classList.toggle('no-clin', !layers.clin);
    Array.prototype.forEach.call(document.querySelectorAll('#toggles button'), function (b) {
      b.classList.toggle('on', !!layers[b.dataset.t]);
    });
  }
  document.getElementById('toggles').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    layers[b.dataset.t] = !layers[b.dataset.t];
    LS.set('layers', layers); applyLayers();
  });

  /* ---------- modes ---------- */
  function setMode(m) {
    mode = m; LS.set('mode', m);
    document.body.classList.remove('mode-full', 'mode-cloze', 'mode-spine');
    document.body.classList.add('mode-' + m);
    Array.prototype.forEach.call(document.querySelectorAll('#modes button'), function (b) {
      b.classList.toggle('on', b.dataset.mode === m);
    });
    if (m === 'spine') shutBlocks(true);
    else {
      shutBlocks(false);
      if (m === 'full') {
        Array.prototype.forEach.call(main.querySelectorAll('.k'), function (x) { x.classList.remove('on'); });
      }
    }
  }
  document.getElementById('modes').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (b) setMode(b.dataset.mode);
  });

  /* ---------- theme ---------- */
  function setTheme(t) {
    theme = t; LS.set('theme', t);
    document.documentElement.setAttribute('data-theme', t);
  }
  document.getElementById('theme').onclick = function () { setTheme(theme === 'dark' ? 'light' : 'dark'); };

  /* ---------- random draw + timer ---------- */
  var tEl = document.getElementById('timer'), tTxt = document.getElementById('timerTxt');
  var tSec = 900, tRun = null;
  function paint() {
    var m = Math.floor(Math.abs(tSec) / 60), s = Math.abs(tSec) % 60;
    tTxt.textContent = (tSec < 0 ? '-' : '') + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    tEl.classList.toggle('low', tSec <= 60);
  }
  function tick() { tSec--; paint(); }
  function timerStart() {
    if (tRun) return;
    tRun = setInterval(tick, 1000);
    document.getElementById('timerToggle').textContent = '⏸';
  }
  function timerStop() {
    clearInterval(tRun); tRun = null;
    document.getElementById('timerToggle').textContent = '▶';
  }
  document.getElementById('timerToggle').onclick = function () { tRun ? timerStop() : timerStart(); };
  document.getElementById('timerReset').onclick = function () { tSec = 900; paint(); };
  document.getElementById('timerClose').onclick = function () { timerStop(); tEl.hidden = true; };

  function draw() {
    var pool = T.filter(function (t) { return !t.bonus; });
    var t = pool[Math.floor(Math.random() * pool.length)];
    location.hash = '#t/' + t.n;
    setMode('spine');
    tEl.hidden = false; tSec = 900; paint(); timerStop(); timerStart();
  }
  document.getElementById('draw').onclick = draw;

  /* ---------- search + keyboard ---------- */
  qbox.addEventListener('input', function () { renderList(qbox.value); });
  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) {
      if (e.key === 'Escape') { qbox.value = ''; renderList(''); qbox.blur(); }
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var cur = currentN(), idx = T.map(function (x) { return x.n; }).indexOf(cur);
    if (e.key === 'j') { location.hash = '#t/' + T[(idx + 1 + T.length) % T.length].n; }
    else if (e.key === 'k') { location.hash = '#t/' + T[(idx - 1 + T.length) % T.length].n; }
    else if (e.key === '1') setMode('full');
    else if (e.key === '2') setMode('cloze');
    else if (e.key === '3') setMode('spine');
    else if (e.key === 'r') draw();
    else if (e.key === 'z') { layers.zh = !layers.zh; LS.set('layers', layers); applyLayers(); }
    else if (e.key === 'c') { layers.clin = !layers.clin; LS.set('layers', layers); applyLayers(); }
    else if (e.key === '/') { e.preventDefault(); qbox.focus(); }
  });

  /* ---------- boot ---------- */
  setTheme(theme);
  setMode(mode);
  applyLayers();
  renderList('');
  updateProgress();
  paint();
  route();

  if (!T.length) {
    main.innerHTML = '<div class="page"><h1>数据没加载</h1><p>data/t01.js … 没有被读到。' +
      '直接双击 index.html 打开即可，不需要服务器。</p></div>';
  }
})();
