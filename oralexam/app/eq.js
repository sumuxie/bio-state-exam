/* ============================ 公式的排版 ============================
   2026-09-24 Ruojin：「**所有涉及公式的地方都写一下行吗** 这种格式
   H₂D ＋ A --(pigments)--> H₂A ＋ D **就是在所有 text 包括我跟背也能直接看到**」

   查出来的实情：全套卡里有 **266 处 `<code>`**（其中 103 处带反应箭头），
   而 `<code>` 在三个页面里**一条样式都没有** —— 浏览器默认等宽字，
   跟正文糊在一起。所以她说的「这种格式」根本不是加新内容，是**给已有的公式排版**。

   这一份干三件事，三个页面（index · drill · map）共用：
   ① 把带 `→ ⇌ =` 的 `<code>` 升级成**公式块**：描边、加大、能横向滚动；
      只是术语的 `<code>`（例如 `hydrogen bond`）不动，另给一个低调的样式。
   ② 支持**箭头上带字**：写 `→[pigments]`，渲染成标签叠在长箭头上面 ——
      就是她给的那个格式。`⇌[酶]` 同理。
   ③ 用 MutationObserver 挂在渲染根上，**哪一屏重画都自动升级**，
      不用去每个 innerHTML 的地方补一行。

   ⚠ 不引任何外部库（KaTeX/MathJax 都要几百 KB，而且断网就没了）。
   ⚠ 朗读不受影响：她要背的是 `ez`/`en`，公式从来不在那里面。 */
(function(){
  var CSS = [
    'code.eq{display:inline-block;margin:6px 0;padding:7px 11px;border:1px solid var(--line,#ddd);',
    '  border-radius:8px;background:rgba(127,127,127,.06);font-size:15.5px;line-height:1.9;',
    '  font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;',
    '  max-width:100%;overflow-x:auto;vertical-align:middle;white-space:nowrap}',
    'code.eqblock{display:block;margin:12px auto;padding:11px 14px;text-align:center;font-size:17px}',
    'code.term{font-size:.94em;padding:1px 5px;border-radius:5px;background:rgba(127,127,127,.09)}',
    /* 箭头上带字：标签叠在长箭头上面 */
    'code.eq .ar{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;',
    '  vertical-align:middle;margin:0 7px;line-height:1.05}',
    'code.eq .ar b{font-size:10.5px;font-weight:600;letter-spacing:.02em;opacity:.8;white-space:nowrap}',
    'code.eq .ar i{font-style:normal;font-size:19px;margin-top:-1px}',
    /* 跟读那一屏的公式盒子 */
    '.eqbox{margin:10px 0 0;padding:9px 11px;border:1px dashed var(--line,#ddd);border-radius:9px}',
    '.eqbox .eqh{font-size:11.5px;opacity:.7;margin:0 0 4px}'
  ].join('\n');

  function inject(){
    if(document.getElementById('eqcss')) return;
    var s = document.createElement('style');
    s.id = 'eqcss';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* 判断这个 <code> 是公式还是术语。⚠ 只认反应箭头和等号 ——
     `M⁻¹s⁻¹` 这种单位没有它们，算术语，不该被撑成一个大块。 */
  var ISEQ = /[→⇌⟶⟵←=]/;

  function upgrade(el){
    if(el.getAttribute('data-eq')) return;
    el.setAttribute('data-eq', '1');
    var txt = el.textContent || '';
    if(!ISEQ.test(txt)){
      el.className = (el.className ? el.className + ' ' : '') + 'term';
      return;
    }
    /* → [标签] → 标签叠在长箭头上面。她给的那个格式就是这个。 */
    var h = el.innerHTML.replace(/([→⇌])\s*\[([^\]]{1,28})\]/g, function(m, a, lab){
      return '<span class="ar"><b>' + lab + '</b><i>' + (a === '⇌' ? '⇌' : '⟶') + '</i></span>';
    });
    if(h !== el.innerHTML) el.innerHTML = h;
    el.className = (el.className ? el.className + ' ' : '') + 'eq';
    /* 自己独占一行的（父节点里只有它），摆成居中的大块。 */
    var p = el.parentNode;
    if(p && p.childNodes.length === 1 && /^(P|DIV|LI|TD|DD)$/.test(p.nodeName)){
      el.className += ' eqblock';
    }
  }

  function sweep(root){
    var list = (root || document).querySelectorAll('code:not([data-eq])');
    for(var i = 0; i < list.length; i++) upgrade(list[i]);
  }

  var pending = 0;
  function later(){
    if(pending) return;
    pending = 1;
    (window.requestAnimationFrame || window.setTimeout)(function(){
      pending = 0;
      sweep(document);
    }, 30);
  }

  function boot(){
    inject();
    sweep(document);
    if(!window.MutationObserver) return;
    /* ⚠ 挂在 body 上，哪一屏重画都能接住。已经处理过的有 data-eq，不会重复干活。 */
    new MutationObserver(later).observe(document.body, {childList:true, subtree:true});
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.eqSweep = sweep;
})();
