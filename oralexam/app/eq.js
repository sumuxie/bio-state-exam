/* ============================ 公式的排版 ============================
   2026-09-24 Ruojin：「所有涉及公式的地方都写一下行吗 这种格式
   H₂D ＋ A --(pigments)--> H₂A ＋ D **就是在所有 text 包括我跟背也能直接看到**」
   看过样品页之后：「**美极了 就这个 所有公式出现的地方全部挂上**」。

   选定的是样品页的**方案 A · 数学排版**：衬线、居中、字距放开、箭头上能带字。

   查出来的实情：全套卡里有 **266 处 `<code>`**（其中 103 处带反应箭头），
   而 `<code>` 在三个页面里**一条样式都没有** —— 浏览器默认等宽字，跟正文糊在一起。
   所以这件事**不是加新内容，是给已有的公式排版**，一条数据都不用改。

   这一份干四件事，三个页面（index · drill · map）共用：
   ① 带 `→ ⇌ =` 的 `<code>` 升级成**公式**：衬线、放大、字距放开；
      只是术语的（`hydrogen bond`）不动，另给一个低调的底色。
   ② **Unicode 的上下标换成真的 `<sub>` / `<sup>`** —— H₂O 变成 H<sub>2</sub>O。
      这一步是「像 LaTeX」的关键：₂ 这种字符在衬线字体里又小又飘，真下标才稳。
   ③ **箭头上带字**：卡里写 `→[pigments]`，渲染成标签叠在长箭头上面。
   ④ MutationObserver 挂在 body 上，**哪一屏重画都自动升级**，
      不用去每一个 innerHTML 的地方补一行。

   ⚠ 不引 KaTeX / MathJax：几百 KB，而且断网就没了。这一份是纯 CSS ＋ 3 KB JS。
   ⚠ 朗读不受影响：她要背的是 `ez`/`en`，公式从来不在那里面。
   ⚠ 想换回样品页的「方案 B · 等宽公式块」，只要把下面 FONT 那一行换成等宽字体、
     把 font-size 调回 15px 即可，别的都不用动。 */
(function(){
  var FONT = '"Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Songti SC",serif';
  var CSS = [
    /* 独占一行的：居中的大块 */
    'code.eq{display:block;margin:12px auto;padding:11px 14px;text-align:center;',
    '  font-family:' + FONT + ';font-size:19px;line-height:2.05;letter-spacing:.01em;',
    '  max-width:100%;overflow:hidden;white-space:nowrap;background:none;border:0}',
    /* 夹在句子里的：同样的字体，不居中、不放大，免得把句子撑散 */
    /* ⚠ 2026-09-24 她：「**要写成一行就装下 别回车**」「**一个公式一行**」。
       所以夹在句子里的也单独占一行，只是不放大不居中。 */
    'code.eqin{display:block;margin:6px 0;font-family:' + FONT + ';font-size:16px;',
    '  letter-spacing:.01em;padding:0 2px;white-space:nowrap;max-width:100%;overflow:hidden}',
    /* 只是术语的 `<code>`：低调的底色，别跟公式抢 */
    'code.term{font-size:.94em;padding:1px 5px;border-radius:5px;background:rgba(127,127,127,.10)}',
    /* 箭头上带字 */
    'code .ar{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;',
    '  vertical-align:middle;margin:0 var(--arm,.5em);line-height:1.05}',
    'code .ar b{font-size:11.5px;font-weight:600;letter-spacing:.02em;opacity:.75;',
    '  font-family:system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap}',
    'code .ar i{font-style:normal;font-size:21px;margin-top:-2px}',
    'code .ar u{font-size:11.5px;font-weight:600;letter-spacing:.02em;opacity:.75;text-decoration:none;',
    '  font-family:system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap;margin-top:-3px}',
    'code.eqin .ar{margin:0 .35em}',
    'code.eqin .ar b{font-size:10px}',
    'code.eqin .ar i{font-size:17px}',
    'code .op{margin:0 .3em;opacity:.75}',
    /* 跟读 / 磨耳朵那两屏的公式盒子 */
    '.eqbox{margin:12px 0 0;padding:8px 12px 10px;border:1px dashed var(--line,#ddd);border-radius:10px}',
    '.eqbox .eqh{font-size:11.5px;opacity:.7;margin:0 0 2px}',
    '.eqbox code.eq{margin:6px auto;font-size:18px}'
  ].join('\n');

  function inject(){
    if(document.getElementById('eqcss')) return;
    var s = document.createElement('style');
    s.id = 'eqcss';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* 公式还是术语。⚠ 只认反应箭头和等号 —— `M⁻¹s⁻¹` 这种单位两样都没有，
     算术语，不该被撑成一个大块。 */
  var ISEQ = /[→⇌⟶⟵←=]/;

  /* Unicode 上下标 → 真的 <sub> / <sup>。这一步是「像 LaTeX」的关键。 */
  var SUB = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9',
             '₊':'+','₋':'−','₌':'=','₍':'(','₎':')','ᵢ':'i','ⱼ':'j','ₐ':'a','ₑ':'e','ₒ':'o',
             'ₓ':'x','ₙ':'n','ₖ':'k','ₘ':'m','ₚ':'p','ₛ':'s','ₜ':'t'};
  var SUP = {'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9',
             '⁺':'+','⁻':'−','⁼':'=','⁽':'(','⁾':')','ⁿ':'n','ᵐ':'m'};
  var RX_SUB = /[₀-₉₊₋₌₍₎ᵢⱼₐₑₒₓₙₖₘₚₛₜ]+/g;
  var RX_SUP = /[⁰-⁹⁺⁻⁼⁽⁾ⁿᵐ]+/g;
  function esc(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function mapRun(run, table){
    var out = '';
    for(var i = 0; i < run.length; i++) out += (table[run.charAt(i)] || run.charAt(i));
    return out;
  }
  function subsup(el){
    if(!document.createTreeWalker) return;
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [], n;
    while((n = w.nextNode())) nodes.push(n);
    for(var i = 0; i < nodes.length; i++){
      var t = nodes[i], v = t.nodeValue;
      if(!RX_SUB.test(v) && !RX_SUP.test(v)){ RX_SUB.lastIndex = RX_SUP.lastIndex = 0; continue; }
      RX_SUB.lastIndex = RX_SUP.lastIndex = 0;
      var h = esc(v)
        .replace(RX_SUB, function(m){ return '<sub>' + mapRun(m, SUB) + '</sub>'; })
        .replace(RX_SUP, function(m){ return '<sup>' + mapRun(m, SUP) + '</sup>'; });
      var span = document.createElement('span');
      span.innerHTML = h;
      t.parentNode.replaceChild(span, t);
    }
  }

  function upgrade(el){
    if(el.getAttribute('data-eq')) return;
    el.setAttribute('data-eq', '1');
    var txt = el.textContent || '';
    /* ⚠ 没有箭头也没有等号的式子（例如单糖的 (CH₂O)ₙ），
       在数据里直接写 <code class="eq"> 就能强制当公式排。 */
    if(!ISEQ.test(txt) && !/eq/.test(el.className || '')){
      el.className = (el.className ? el.className + ' ' : '') + 'term';
      return;
    }
    /* →[标签] → 标签叠在长箭头上面。她要的就是这个。 */
    /* 箭头上带字：→[上方] ，或者 →[上方|下方]。
       下方那一格是为了拄书里的写法 —— 例如乙酰-CoA 羬化酶那条，
       书把锰和生物素标在**箭头下面**。 */
    var h = el.innerHTML.replace(/([→⇌])\s*\[([^\]]{1,60})\]/g, function(m, a, lab){
      var parts = lab.split('|');
      var top = parts[0] || '', bot = parts[1] || '';
      return '<span class="ar">' + (top ? '<b>' + top + '</b>' : '')
        + '<i>' + (a === '⇌' ? '⇌' : '⟶') + '</i>'
        + (bot ? '<u>' + bot + '</u>' : '') + '</span>';
    });
    if(h !== el.innerHTML) el.innerHTML = h;
    subsup(el);
    /* 独占一行（父节点里只有它）或者本来就长的 → 居中大块；
       夹在句子中间的短式子 → 行内，别把句子撑散。 */
    var p = el.parentNode;
    var alone = p && p.childNodes.length === 1 && /^(P|DIV|LI|TD|DD|SPAN)$/.test(p.nodeName);
    el.className = (el.className ? el.className + ' ' : '') + ((alone || txt.length > 30) ? 'eq' : 'eqin');
  }

  /* ⚠ 2026-09-24 她：「**要写成一行就装下 别回车**」。
     nowrap 只能保证不折行，保证不了**装得下** —— 装不下就得横向拉，
     跟折行一样难受。所以这里**量一下真实宽度，一级级把字号调小到能装下**。
     最小 10.5px；再小就看不清了，那时候才放开横向滚动。 */
  var FITMIN = 10.5;
  function fit(el){
    if(!el.clientWidth) return;
    var base = parseFloat(el.getAttribute('data-fs') || 0);
    if(!base){
      base = parseFloat(window.getComputedStyle(el).fontSize) || 19;
      el.setAttribute('data-fs', base);
    }
    el.style.fontSize = base + 'px';
    for(var k = 0; k < 4 && el.scrollWidth > el.clientWidth + 1; k++){
      var now = parseFloat(el.style.fontSize) || base;
      var next = now * (el.clientWidth / el.scrollWidth) * 0.985;
      if(next < FITMIN){ next = FITMIN; el.style.overflowX = 'auto'; }
      el.style.fontSize = next + 'px';
      /* 实在窄的时候把字距和箭头两边的空档收紧 ——
         先挤空白，再挤字号，比一上来就把字调成蚂蚁强。 */
      if(next < 13.5){ el.style.letterSpacing = '0'; el.style.setProperty('--arm', '.28em'); }
      if(next <= FITMIN) break;
    }
  }
  function fitAll(root){
    var list = (root || document).querySelectorAll('code.eq,code.eqin');
    for(var i = 0; i < list.length; i++) fit(list[i]);
  }

  function sweep(root){
    var list = (root || document).querySelectorAll('code:not([data-eq])');
    for(var i = 0; i < list.length; i++) upgrade(list[i]);
    if(list.length) fitAll(root);
    return list.length;
  }

  var pending = 0;
  function later(){
    if(pending) return;
    pending = 1;
    var run = function(){ pending = 0; sweep(document); };
    if(window.requestAnimationFrame) window.requestAnimationFrame(run);
    else setTimeout(run, 30);
  }

  function boot(){
    inject();
    sweep(document);
    if(!window.MutationObserver || !document.body) return;
    /* ⚠ 挂在 body 上，哪一屏重画都能接住。处理过的带 data-eq，不会重复干活。 */
    new MutationObserver(later).observe(document.body, {childList:true, subtree:true});
    /* 窗口宽度变了（转屏、缩放）要重新算一遍。 */
    var rt = null;
    window.addEventListener('resize', function(){
      if(rt) clearTimeout(rt);
      rt = setTimeout(function(){ fitAll(document); }, 150);
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.eqSweep = sweep;
  window.eqFit = fitAll;
})();
