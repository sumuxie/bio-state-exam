"""Assemble the study app: one self-contained HTML file next to the video.

It has to be a local file, not a hosted page: the video is 690 MB and sits on
this disk, so the app loads it by relative path. Everything else - cues, topics,
notes, quizzes - is inlined, so the file opens by double-click with no server.

Layout is four independently resizable modules (topics | video | notes | quiz),
a dark/light theme, and subtitles overlaid on the picture. Panel sizes, theme,
subtitle language and overlay mode persist in localStorage.

Inputs (all in this scratchpad):
    cues.json      corrected subtitle cues, with optional "en" translations
    topics.json    topic timeline, notes and quizzes
Output:
    <video folder>/meeting_01_app.html
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUTDIR = r"C:\Users\Admin\Documents\VooVMeeting\2026-06-27 14.10.06.350"
APP = os.path.join(OUTDIR, "meeting_01_app.html")
VIDEO_NAME = "meeting_01.mp4"

with open(os.path.join(HERE, "cues.json"), encoding="utf-8") as f:
    cues = json.load(f)
with open(os.path.join(HERE, "topics.json"), encoding="utf-8") as f:
    topics = json.load(f)

data = {
    "video": VIDEO_NAME,
    "title_zh": "氨基酸 · 蛋白质结构 · 肌红蛋白与血红蛋白",
    "title_en": "Amino acids, protein structure, myoglobin and hemoglobin",
    "date": "2026-06-27",
    "cues": [{"s": round(c["start"], 2), "e": round(c["end"], 2),
              "zh": c["text"], "en": c.get("en", "")} for c in cues],
    "topics": topics,
}

HTML = r"""<!doctype html>
<html lang="zh" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>生物化学课 · 学习台 | Biochemistry Lecture Study Console</title>
<style>
:root{
  --bg:#0f1115; --panel:#161a21; --panel2:#1c212a; --line:#2a313d;
  --fg:#e6e9ef; --dim:#98a2b3; --accent:#5aa9ff; --accent2:#7ee0b8;
  --warn:#ffc866; --bad:#ff7b72; --good:#6ee7a8; --grip:#2a313d; --gripon:#5aa9ff;
  --optbg:#141922;
}
html[data-theme="light"]{
  --bg:#f6f7f9; --panel:#ffffff; --panel2:#f0f2f5; --line:#d8dde5;
  --fg:#14181f; --dim:#5d6875; --accent:#0b66c3; --accent2:#0a7f5b;
  --warn:#a76a00; --bad:#c02a20; --good:#0a7f3f; --grip:#d8dde5; --gripon:#0b66c3;
  --optbg:#f7f9fc;
}
*{box-sizing:border-box}
html,body{margin:0;height:100%}
body{
  background:var(--bg); color:var(--fg);
  font:15px/1.65 "Segoe UI","PingFang SC","Microsoft YaHei",system-ui,sans-serif;
  display:flex; flex-direction:column; overflow:hidden;
}
header{
  display:flex; align-items:center; gap:14px; padding:8px 16px;
  background:var(--panel); border-bottom:1px solid var(--line); flex:none; flex-wrap:wrap;
}
header h1{font-size:14.5px;margin:0;font-weight:600}
header .sub{color:var(--dim);font-size:12px}
header .spacer{flex:1}
.seg{display:flex;border:1px solid var(--line);border-radius:8px;overflow:hidden}
.seg button{background:transparent;border:0;color:var(--dim);padding:5px 10px;
  font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}
.seg button.on{background:var(--accent);color:#fff;font-weight:600}
html[data-theme="light"] .seg button.on{color:#fff}

/* ---------- module frame ---------- */
#body{flex:1;display:flex;flex-direction:column;min-height:0}
#row{flex:1;display:flex;min-height:0}
.col{min-width:150px;min-height:0;display:flex;flex-direction:column;overflow:hidden}
#c1{width:280px;flex:none}
#c2{flex:1;min-width:320px}
#c3{width:380px;flex:none}
#quiz{height:260px;flex:none;display:flex;flex-direction:column;overflow:hidden;
  border-top:1px solid var(--line)}
.grip{flex:none;background:var(--grip);opacity:.55}
.grip:hover,.grip.dragging{opacity:1;background:var(--gripon)}
.grip.v{width:5px;cursor:col-resize}
.grip.h{height:5px;cursor:row-resize}
.colhead{padding:8px 13px;font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--dim);background:var(--panel);border-bottom:1px solid var(--line);flex:none;
  display:flex;align-items:center;gap:8px}
.colhead .spacer{flex:1}
.scroll{overflow-y:auto;flex:1;scrollbar-width:thin}
.scroll::-webkit-scrollbar{width:9px}
.scroll::-webkit-scrollbar-thumb{background:var(--line);border-radius:5px}

/* ---------- topics ---------- */
.topic{padding:8px 13px;border-bottom:1px solid var(--line);cursor:pointer}
.topic:hover{background:var(--panel2)}
.topic.on{background:var(--panel2);box-shadow:inset 3px 0 0 var(--accent)}
.topic .t{font-size:11px;color:var(--accent);font-variant-numeric:tabular-nums}
.topic .zh{font-size:13px;margin-top:1px}
.topic .en{font-size:11px;color:var(--dim);margin-top:1px}

/* ---------- video ---------- */
.videowrap{background:#000;position:relative;flex:none;min-height:0}
video{width:100%;display:block;background:#000;max-height:100%}
#overlay{position:absolute;left:0;right:0;bottom:9%;text-align:center;pointer-events:none;
  padding:0 5%;display:flex;flex-direction:column;gap:3px;align-items:center}
#overlay .oz{font-size:var(--subsize,22px);line-height:1.35;color:#fff;
  background:rgba(0,0,0,.55);padding:2px 10px;border-radius:5px;
  text-shadow:0 2px 6px rgba(0,0,0,.9);max-width:100%}
#overlay .oe{font-size:calc(var(--subsize,22px) * .72);line-height:1.3;color:#e8ecf2;
  background:rgba(0,0,0,.45);padding:1px 9px;border-radius:5px;
  text-shadow:0 2px 6px rgba(0,0,0,.9);max-width:100%;
  pointer-events:auto}   /* the overlay itself stays click-through so the video controls work */
.timeline{height:32px;background:var(--panel2);position:relative;cursor:pointer;flex:none;
  border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.tlseg{position:absolute;top:0;bottom:0;border-right:1px solid var(--bg);opacity:.5}
.tlseg:hover{opacity:.9}.tlseg.on{opacity:1}
.playhead{position:absolute;top:0;bottom:0;width:2px;background:var(--fg);pointer-events:none}
.tllabel{position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:11px;
  color:#fff;text-shadow:0 1px 3px #000;pointer-events:none;white-space:nowrap;
  overflow:hidden;text-overflow:ellipsis;max-width:calc(100% - 110px)}
.tlclock{position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:11px;
  color:#fff;text-shadow:0 1px 3px #000;pointer-events:none;font-variant-numeric:tabular-nums}
.subbar{padding:9px 16px;background:var(--panel);border-bottom:1px solid var(--line);flex:none}
.subbar .z{font-size:17px;line-height:1.45}
.subbar .e{font-size:13px;color:var(--dim);line-height:1.4}
.cue{display:flex;gap:9px;padding:3px 16px;cursor:pointer;font-size:12.5px;line-height:1.55}
.cue:hover{background:var(--panel2)}
.cue.on{background:var(--panel2);box-shadow:inset 2px 0 0 var(--accent)}
.cue .t{color:var(--dim);font-size:11px;font-variant-numeric:tabular-nums;flex:none;width:50px;padding-top:2px}
.cue .en{color:var(--dim);font-size:11.5px;display:block}

/* ---------- notes ---------- */
.tabs{display:flex;border-bottom:1px solid var(--line);background:var(--panel);flex:none}
.tabs button{flex:1;background:transparent;border:0;border-bottom:2px solid transparent;
  color:var(--dim);padding:8px 4px;font:inherit;font-size:12px;cursor:pointer}
.tabs button.on{color:var(--fg);border-bottom-color:var(--accent)}
.pane{padding:12px 14px}
.pane h3{font-size:13.5px;margin:0 0 2px}
.pane h3 .en{display:block;font-size:11.5px;color:var(--dim);font-weight:400}
.pane .when{font-size:11px;color:var(--accent);font-variant-numeric:tabular-nums;
  margin-bottom:10px;cursor:pointer}
.card{background:var(--panel2);border:1px solid var(--line);border-radius:9px;
  padding:10px 12px;margin-bottom:9px}
.card .zh{font-size:13px}
.card .en{font-size:12px;color:var(--dim);margin-top:5px;padding-top:5px;
  border-top:1px dashed var(--line)}
.card.extra{border-left:3px solid var(--warn)}
.card.extra .tag{font-size:10px;letter-spacing:.06em;text-transform:uppercase;
  color:var(--warn);display:block;margin-bottom:4px}

/* ---------- quiz ---------- */
#quizbody{display:flex;flex-wrap:wrap;gap:10px;padding:12px 14px;align-content:flex-start}
.q{background:var(--panel2);border:1px solid var(--line);border-radius:9px;padding:11px 12px;
  flex:1 1 330px;min-width:280px;max-width:520px}
.q .qt{font-size:13px;margin-bottom:2px}
.q .qt .en{display:block;font-size:11.5px;color:var(--dim);margin-top:3px}
.opt{display:block;width:100%;text-align:left;background:var(--optbg);border:1px solid var(--line);
  color:var(--fg);border-radius:7px;padding:6px 9px;margin-top:6px;font:inherit;font-size:12.5px;cursor:pointer}
.opt:hover{border-color:var(--accent)}
.opt.good{border-color:var(--good);background:color-mix(in srgb, var(--good) 14%, transparent)}
.opt.bad{border-color:var(--bad);background:color-mix(in srgb, var(--bad) 14%, transparent)}
.opt .en{display:block;font-size:11px;color:var(--dim);margin-top:2px}
.explain{margin-top:8px;padding-top:8px;border-top:1px dashed var(--line);font-size:12px;
  color:var(--dim);display:none}
.explain.show{display:block}
.explain .en{display:block;margin-top:4px}
.score{font-size:11.5px;color:var(--dim);font-variant-numeric:tabular-nums}
.empty{color:var(--dim);font-size:12.5px;padding:16px}
.hide{display:none !important}
.iconbtn{background:transparent;border:1px solid var(--line);color:var(--dim);border-radius:6px;
  padding:3px 8px;font:inherit;font-size:11.5px;cursor:pointer}
.iconbtn:hover{color:var(--fg);border-color:var(--accent)}

/* ---------- search ---------- */
#searchbox{background:var(--panel2);border:1px solid var(--line);color:var(--fg);
  border-radius:7px;padding:5px 10px;font:inherit;font-size:12.5px;width:210px}
#searchbox:focus{outline:none;border-color:var(--accent);width:280px}
#searchbox::placeholder{color:var(--dim)}
#searchpanel{position:absolute;inset:0;background:var(--bg);z-index:50;display:none;
  flex-direction:column}
#searchpanel.show{display:flex}
#searchhead{display:flex;align-items:center;gap:12px;padding:9px 16px;background:var(--panel);
  border-bottom:1px solid var(--line);flex:none;flex-wrap:wrap}
#searchhead .q{font-size:14px;font-weight:600}
#searchhead .n{font-size:12px;color:var(--dim)}
#searchhead .spacer{flex:1}
#searchresults{overflow-y:auto;flex:1;padding:6px 0 24px}
.rgroup{padding:12px 16px 2px;font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--dim);display:flex;gap:8px;align-items:baseline}
.rgroup .c{font-size:11px}
.hit{display:flex;gap:11px;padding:7px 16px;cursor:pointer;border-bottom:1px solid var(--line)}
.hit:hover{background:var(--panel2)}
.hit .t{flex:none;width:56px;font-size:11px;color:var(--accent);font-variant-numeric:tabular-nums;
  padding-top:2px}
.hit .body{flex:1;min-width:0}
.hit .zh{font-size:13px;line-height:1.55}
.hit .en{font-size:11.5px;color:var(--dim);line-height:1.45;margin-top:2px}
.hit .where{font-size:11px;color:var(--dim);margin-top:3px}
.hit mark{background:color-mix(in srgb, var(--accent) 34%, transparent);color:var(--fg);
  border-radius:3px;padding:0 1px}
.hit.extra{border-left:3px solid var(--warn)}
.note{padding:10px 16px;font-size:12px;color:var(--dim)}
#filters{display:flex;gap:6px;flex-wrap:wrap;padding:8px 16px;background:var(--panel);
  border-bottom:1px solid var(--line);flex:none}
.chip{background:transparent;border:1px solid var(--line);color:var(--dim);border-radius:999px;
  padding:3px 11px;font:inherit;font-size:11.5px;cursor:pointer;white-space:nowrap}
.chip:hover{border-color:var(--accent);color:var(--fg)}
.chip.on{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}
.chip.extra.on{background:var(--warn);border-color:var(--warn);color:#1a1204}
.chip .c{opacity:.75;margin-left:5px;font-variant-numeric:tabular-nums}
.chip:disabled{opacity:.35;cursor:default}

/* ---------- speech ---------- */
/* clickable to speak - not inside .opt, where the click must answer the question */
.card .en, .cue .en, .hit .en, .qt .en, .explain .en, #overlay .oe, .subbar .e{cursor:pointer}
.card .en:hover, .cue .en:hover, .hit .en:hover, .qt .en:hover, .explain .en:hover{color:var(--accent)}
.en.saying, .oe.saying{color:var(--accent2)}
.spk{display:inline-block;border:0;background:transparent;color:var(--dim);cursor:pointer;
  font-size:12px;padding:0 4px;line-height:1;vertical-align:baseline}
.spk:hover{color:var(--accent)}
#voicesel{background:var(--panel2);border:1px solid var(--line);color:var(--fg);border-radius:7px;
  padding:4px 7px;font:inherit;font-size:11.5px;max-width:230px}
#voicewarn{font-size:11.5px;color:var(--warn);cursor:pointer}
#rate{width:78px;vertical-align:middle}
</style>
</head>
<body>
<header>
  <h1 id="ttl"></h1>
  <span class="sub" id="ttlen"></span>
  <span class="spacer"></span>

  <input id="searchbox" type="search" autocomplete="off"
         placeholder="搜索知识点 / 原文…  ( / )">

  <span class="sub">字幕</span>
  <div class="seg" id="langseg">
    <button data-lang="zh">中</button>
    <button data-lang="both" class="on">双语</button>
    <button data-lang="en">EN</button>
  </div>

  <span class="sub">位置</span>
  <div class="seg" id="posseg">
    <button data-pos="over" class="on">视频上</button>
    <button data-pos="below">视频下</button>
    <button data-pos="off">关</button>
  </div>

  <button class="iconbtn" id="subminus">A−</button>
  <button class="iconbtn" id="subplus">A+</button>

  <span class="sub">朗读</span>
  <select id="voicesel" title="英文朗读音色"></select>
  <input type="range" id="rate" min="0.6" max="1.4" step="0.05" title="语速">
  <button class="iconbtn" id="saytest">试听</button>
  <span id="voicewarn" class="hide" title="点击查看如何安装"></span>

  <div class="seg" id="themeseg">
    <button data-theme="dark" class="on">黑</button>
    <button data-theme="light">白</button>
  </div>
  <button class="iconbtn" id="reset">重置布局</button>
</header>

<div id="body" style="position:relative">
  <div id="searchpanel">
    <div id="searchhead">
      <span class="q" id="searchq"></span>
      <span class="n" id="searchn"></span>
      <span class="spacer"></span>
      <span class="n">Enter 跳到第一条 · Esc 关闭</span>
      <button class="iconbtn" id="searchclose">关闭</button>
    </div>
    <div id="filters"></div>
    <div id="searchresults"></div>
  </div>

  <div id="row">
    <div class="col" id="c1">
      <div class="colhead">主题 Topics<span class="spacer"></span><span class="sub" id="topiccount"></span></div>
      <div class="scroll" id="topiclist"></div>
    </div>
    <div class="grip v" data-target="c1"></div>

    <div class="col" id="c2">
      <div class="videowrap" id="videowrap">
        <video id="v" controls preload="metadata"></video>
        <div id="overlay"><div class="oz"></div><div class="oe"></div></div>
      </div>
      <div class="grip h" data-target="video"></div>
      <div class="timeline" id="timeline">
        <div class="playhead" id="playhead"></div>
        <div class="tllabel" id="tllabel"></div>
        <div class="tlclock" id="tlclock"></div>
      </div>
      <div class="subbar" id="subbar"><div class="z" id="subzh"></div><div class="e" id="suben"></div></div>
      <div class="scroll" id="cuelist"></div>
    </div>
    <div class="grip v" data-target="c3"></div>

    <div class="col" id="c3">
      <div class="tabs" id="tabs">
        <button data-tab="notes" class="on">知识点 Key points</button>
        <button data-tab="extra">补充 Extra</button>
      </div>
      <div class="scroll" id="panel"></div>
    </div>
  </div>

  <div class="grip h" data-target="quiz"></div>
  <div id="quiz">
    <div class="colhead">Quiz<span class="spacer"></span>
      <span class="score" id="score"></span>
      <button class="iconbtn" id="quizreset">重做</button>
    </div>
    <div class="scroll" id="quizbody"></div>
  </div>
</div>

<script>
const DATA = __DATA__;
const $ = id => document.getElementById(id);
const V = $('v');
V.src = encodeURI(DATA.video);
$('ttl').textContent = DATA.date + ' · ' + DATA.title_zh;
$('ttlen').textContent = DATA.title_en;

const LS = 'bioapp.';
const store = (k,v) => { try{ localStorage.setItem(LS+k, v); }catch(e){} };
const load  = (k,d) => { try{ const x = localStorage.getItem(LS+k); return x===null?d:x; }catch(e){ return d; } };

const fmt = s => { s = Math.max(0, s|0);
  const h=(s/3600)|0, m=((s%3600)/60)|0, x=s%60;
  return (h? h+':' : '') + String(m).padStart(2,'0') + ':' + String(x).padStart(2,'0'); };
const DUR = DATA.topics.length ? DATA.topics[DATA.topics.length-1].end : 1;
const HUES = [205,152,38,275,12,96,320,178,58,240,130,20];

let lang = load('lang','both'), subpos = load('subpos','over');
let curTopic = -1, curCue = -1, tab = 'notes';
const answered = {};

/* ---------- theme ---------- */
function setTheme(t){ document.documentElement.dataset.theme = t; store('theme',t);
  [...$('themeseg').children].forEach(b=> b.classList.toggle('on', b.dataset.theme===t)); }
$('themeseg').onclick = e => { const b = e.target.closest('button'); if(b) setTheme(b.dataset.theme); };
setTheme(load('theme','dark'));

/* ---------- resizable modules ---------- */
function applySizes(){
  $('c1').style.width = load('c1','280') + 'px';
  $('c3').style.width = load('c3','380') + 'px';
  $('quiz').style.height = load('quiz','260') + 'px';
  $('videowrap').style.height = load('video','') ? load('video')+'px' : '';
  $('videowrap').style.flex = load('video','') ? 'none' : '';
}
applySizes();
document.querySelectorAll('.grip').forEach(g=>{
  g.addEventListener('mousedown', e=>{
    e.preventDefault();
    const target = g.dataset.target;
    const vertical = g.classList.contains('v');
    const el = target==='video' ? $('videowrap') : $(target);
    const startPos = vertical ? e.clientX : e.clientY;
    const rect = el.getBoundingClientRect();
    const startSize = vertical ? rect.width : rect.height;
    // c1 and the video grow with the pointer; c3 and quiz are anchored to the far edge
    const sign = (target==='c3' || target==='quiz') ? -1 : 1;
    g.classList.add('dragging');
    const move = ev=>{
      const d = (vertical ? ev.clientX : ev.clientY) - startPos;
      const size = Math.max(120, startSize + sign*d);
      if(target==='video'){ el.style.flex='none'; el.style.height = size+'px'; store('video', size|0); }
      else if(vertical){ el.style.width = size+'px'; store(target, size|0); }
      else { el.style.height = size+'px'; store(target, size|0); }
    };
    const up = ()=>{ g.classList.remove('dragging');
      window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
    window.addEventListener('mousemove', move); window.addEventListener('mouseup', up);
  });
});
$('reset').onclick = ()=>{ ['c1','c3','quiz','video','subsize'].forEach(k=>{
  try{ localStorage.removeItem(LS+k); }catch(e){} }); applySizes(); applySubSize(); };

/* ---------- subtitle size ---------- */
function applySubSize(){ document.documentElement.style.setProperty('--subsize', load('subsize','22')+'px'); }
const bumpSub = d => { store('subsize', Math.max(12, Math.min(48, +load('subsize','22') + d))); applySubSize(); };
$('subplus').onclick = ()=> bumpSub(2);
$('subminus').onclick = ()=> bumpSub(-2);
applySubSize();

/* ---------- topics ---------- */
const topiclist = $('topiclist');
$('topiccount').textContent = DATA.topics.length + ' 段';
DATA.topics.forEach((t,i)=>{
  const el = document.createElement('div');
  el.className='topic';
  el.innerHTML = '<div class="t"></div><div class="zh"></div><div class="en"></div>';
  el.querySelector('.t').textContent = fmt(t.start)+' – '+fmt(t.end);
  el.querySelector('.zh').textContent = t.title_zh;
  el.querySelector('.en').textContent = t.title_en;
  el.onclick = ()=> seek(t.start);
  topiclist.appendChild(el);
});

/* ---------- timeline ---------- */
const timeline = $('timeline'), playhead = $('playhead');
DATA.topics.forEach((t,i)=>{
  const d = document.createElement('div');
  d.className='tlseg';
  d.style.left  = (t.start/DUR*100)+'%';
  d.style.width = ((t.end-t.start)/DUR*100)+'%';
  d.style.background = 'hsl('+HUES[i%HUES.length]+' 60% 45%)';
  d.title = fmt(t.start)+'  '+t.title_zh;
  timeline.insertBefore(d, playhead);
});
const timeAt = e => { const r = timeline.getBoundingClientRect();
  return Math.max(0, Math.min(1,(e.clientX-r.left)/r.width))*DUR; };
let dragTL = false;
timeline.addEventListener('mousedown', e=>{ dragTL=true; seek(timeAt(e)); });
window.addEventListener('mousemove', e=>{ if(dragTL) seek(timeAt(e)); });
window.addEventListener('mouseup', ()=> dragTL=false);

/* ---------- transcript ---------- */
const cuelist = $('cuelist');
const cueEls = DATA.cues.map(c=>{
  const el = document.createElement('div');
  el.className='cue';
  el.innerHTML = '<span class="t"></span><span><span class="z"></span><span class="en"></span></span>';
  el.querySelector('.t').textContent = fmt(c.s);
  el.querySelector('.z').textContent = c.zh;
  el.querySelector('.en').textContent = c.en || '';
  el.onclick = ()=> seek(c.s + 0.01);
  cuelist.appendChild(el);
  return el;
});

/* ---------- language + subtitle position ---------- */
$('langseg').onclick = e=>{ const b=e.target.closest('button'); if(!b) return;
  lang=b.dataset.lang; store('lang',lang); syncSegs(); applyLang(); };
$('posseg').onclick = e=>{ const b=e.target.closest('button'); if(!b) return;
  subpos=b.dataset.pos; store('subpos',subpos); syncSegs(); applyLang(); };
function syncSegs(){
  [...$('langseg').children].forEach(b=> b.classList.toggle('on', b.dataset.lang===lang));
  [...$('posseg').children].forEach(b=> b.classList.toggle('on', b.dataset.pos===subpos));
}
function applyLang(){
  const zh = lang!=='en', en = lang!=='zh';
  $('overlay').classList.toggle('hide', subpos!=='over');
  $('subbar').classList.toggle('hide', subpos!=='below');
  $('overlay').querySelector('.oz').classList.toggle('hide', !zh);
  $('overlay').querySelector('.oe').classList.toggle('hide', !en);
  $('subzh').classList.toggle('hide', !zh);
  $('suben').classList.toggle('hide', !en);
  cueEls.forEach(el=>{ el.querySelector('.z').classList.toggle('hide', !zh);
                       el.querySelector('.en').classList.toggle('hide', !en); });
}
syncSegs(); applyLang();

/* ---------- notes ---------- */
$('tabs').onclick = e=>{ const b=e.target.closest('button'); if(!b) return;
  tab=b.dataset.tab; [...e.currentTarget.children].forEach(x=>x.classList.toggle('on',x===b)); renderNotes(); };
function renderNotes(){
  const p = $('panel'); p.innerHTML='';
  const t = DATA.topics[curTopic];
  if(!t){ p.innerHTML='<div class="empty">播放视频，或点击左侧主题。<br>Play the video, or pick a topic.</div>'; return; }
  const head = document.createElement('div'); head.className='pane';
  const h3 = document.createElement('h3'); h3.textContent = t.title_zh;
  const hen = document.createElement('span'); hen.className='en'; hen.textContent = t.title_en;
  h3.appendChild(hen);
  const when = document.createElement('div'); when.className='when';
  when.textContent = '▶ '+fmt(t.start)+' – '+fmt(t.end);
  when.onclick = ()=> seek(t.start);
  head.append(h3, when); p.appendChild(head);

  const body = document.createElement('div'); body.className='pane'; body.style.paddingTop='0';
  const items = tab==='notes' ? (t.points||[]) : (t.extra||[]);
  items.forEach(x=>{
    const c = document.createElement('div'); c.className = 'card' + (tab==='extra'?' extra':'');
    if(tab==='extra'){ const tag=document.createElement('span'); tag.className='tag';
      tag.textContent = x.tag || '课上未展开 · not covered'; c.appendChild(tag); }
    const z=document.createElement('div'); z.className='zh'; z.textContent=x.zh;
    const e2=document.createElement('div'); e2.className='en'; e2.textContent=x.en;
    c.append(z,e2); body.appendChild(c);
  });
  if(!items.length) body.innerHTML='<div class="empty">这一段没有内容。</div>';
  p.appendChild(body);
}

/* ---------- quiz ---------- */
function renderQuiz(){
  const qb = $('quizbody'); qb.innerHTML='';
  const t = DATA.topics[curTopic];
  if(!t || !(t.quiz||[]).length){ qb.innerHTML='<div class="empty">这一段没有题目。</div>'; updateScore(); return; }
  t.quiz.forEach((q,qi)=>{
    const key = curTopic+'.'+qi;
    const c = document.createElement('div'); c.className='q';
    const qt = document.createElement('div'); qt.className='qt';
    qt.textContent = (qi+1)+'. '+q.q_zh;
    const qe = document.createElement('span'); qe.className='en'; qe.textContent=q.q_en;
    qt.appendChild(qe); c.appendChild(qt);
    const qspk = document.createElement('button');
    qspk.className='spk'; qspk.textContent='🔊'; qspk.dataset.say = q.q_en;
    qspk.title = '朗读题干'; qt.appendChild(qspk);
    const ex = document.createElement('div'); ex.className='explain';
    const exz=document.createElement('div'); exz.textContent=q.explain_zh;
    const exe=document.createElement('span'); exe.className='en'; exe.textContent=q.explain_en;
    ex.append(exz,exe);
    q.options.forEach((o,oi)=>{
      const b=document.createElement('button'); b.className='opt'; b.textContent=o.zh;
      const oe=document.createElement('span'); oe.className='en'; oe.textContent=o.en;
      b.appendChild(oe);
      const ospk=document.createElement('span');
      ospk.className='spk'; ospk.textContent='🔊'; ospk.dataset.say=o.en;
      ospk.title='朗读选项'; b.appendChild(ospk);
      b.onclick = ()=>{
        if(answered[key]===undefined) answered[key] = (oi===q.answer);
        [...c.querySelectorAll('.opt')].forEach((bb,bi)=>{
          bb.classList.toggle('good', bi===q.answer);
          bb.classList.toggle('bad', bi===oi && oi!==q.answer); });
        ex.classList.add('show'); updateScore();
      };
      c.appendChild(b);
    });
    c.appendChild(ex);
    if(answered[key]!==undefined){
      [...c.querySelectorAll('.opt')].forEach((bb,bi)=> bb.classList.toggle('good', bi===q.answer));
      ex.classList.add('show');
    }
    qb.appendChild(c);
  });
  updateScore();
}
function updateScore(){
  const ks = Object.keys(answered);
  const right = ks.filter(k=>answered[k]).length;
  const total = DATA.topics.reduce((n,t)=> n+(t.quiz||[]).length, 0);
  $('score').textContent = ks.length ? `已答 ${ks.length}/${total} · 正确 ${right}` : `共 ${total} 题`;
}
$('quizreset').onclick = ()=>{ for(const k in answered) delete answered[k]; renderQuiz(); };

/* ---------- English speech ---------- */
/* Browser speech synthesis, not recorded audio. Which voices exist depends on the
   browser and on what Windows has installed: this machine has only en-US offline
   voices, while Edge and Chrome add natural en-GB voices that need a connection.
   So the list is ranked rather than hard-coded, and a warning appears when nothing
   British is available. */
const SPEECH = window.speechSynthesis;
let voices = [], voice = null;
const GB_FEMALE = /(sonia|libby|hazel|susan|mia|google uk english female)/i;
const FEMALE = /(female|zira|aria|jenny|samantha|sonia|libby|hazel|susan|mia|emma|amy)/i;

function rankVoice(v){
  const gb = /^en-GB/i.test(v.lang), en = /^en/i.test(v.lang);
  if(!en) return -1;
  let s = 0;
  if(gb) s += 100;
  if(GB_FEMALE.test(v.name)) s += 40;
  else if(FEMALE.test(v.name)) s += 20;
  if(/natural|neural/i.test(v.name)) s += 15;
  if(/google/i.test(v.name)) s += 8;
  return s;
}
function loadVoices(){
  voices = (SPEECH ? SPEECH.getVoices() : []).filter(v=> /^en/i.test(v.lang));
  voices.sort((a,b)=> rankVoice(b) - rankVoice(a));
  const sel = $('voicesel'); sel.innerHTML='';
  if(!voices.length){
    sel.innerHTML = '<option>无可用英文语音</option>';
    showVoiceWarn('浏览器没有英文语音'); return;
  }
  voices.forEach((v,i)=>{
    const o = document.createElement('option');
    o.value = i; o.textContent = v.name + '  (' + v.lang + ')';
    sel.appendChild(o);
  });
  const saved = load('voice','');
  const found = voices.findIndex(v=> v.name===saved);
  const idx = found >= 0 ? found : 0;
  sel.value = idx; voice = voices[idx];
  const anyGB = voices.some(v=> /^en-GB/i.test(v.lang));
  if(!anyGB) showVoiceWarn('没有英式英语语音，现在用的是 ' + voice.lang);
  else $('voicewarn').classList.add('hide');
}
function showVoiceWarn(msg){
  const w = $('voicewarn');
  w.textContent = '⚠ ' + msg;
  w.classList.remove('hide');
  w.onclick = ()=> alert(
    '要用英式女声，三选一：\n\n'
    + '1) 用 Microsoft Edge 打开本文件 —— 自带 Sonia / Libby（英式女声，神经网络合成，接近真人，需联网）\n'
    + '2) 用 Chrome 打开 —— 有 Google UK English Female（需联网）\n'
    + '3) 安装离线英式语音 —— Windows 设置 → 时间和语言 → 语音 → 添加语音 → English (United Kingdom)，'
    + '会装上 Hazel，完全离线但机械感较明显\n\n'
    + '装好后刷新本页面，音色列表会自动出现新选项。');
}
if(SPEECH){
  loadVoices();
  SPEECH.addEventListener('voiceschanged', loadVoices);   // Chrome fills the list late
}
$('voicesel').onchange = e=>{
  voice = voices[+e.target.value] || null;
  if(voice) store('voice', voice.name);
};
$('rate').value = load('rate','0.95');
$('rate').oninput = e=> store('rate', e.target.value);

let sayingEl = null;
function say(text, el){
  if(!SPEECH || !text) return;
  SPEECH.cancel();
  if(sayingEl){ sayingEl.classList.remove('saying'); sayingEl = null; }
  const u = new SpeechSynthesisUtterance(text);
  if(voice){ u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-GB'; }
  u.rate = parseFloat(load('rate','0.95'));
  if(el){ el.classList.add('saying'); sayingEl = el;
    u.onend = u.onerror = ()=>{ el.classList.remove('saying'); if(sayingEl===el) sayingEl=null; }; }
  SPEECH.speak(u);
}
$('saytest').onclick = ()=> say('Hemoglobin binds oxygen cooperatively; myoglobin does not.', null);

/* click any English line to hear it; clicks inside buttons keep their own action */
document.addEventListener('click', e=>{
  const spk = e.target.closest('.spk');
  if(spk){ e.stopPropagation(); e.preventDefault(); say(spk.dataset.say, null); return; }
  const en = e.target.closest('.en, .oe, #suben');
  if(en && !e.target.closest('button') && en.textContent.trim()){
    e.stopPropagation(); say(en.textContent, en);
  }
}, true);

/* ---------- search ---------- */
/* One flat index built once. Kinds are ordered so that curated material - what the
   lecture taught and what was added to it - ranks above raw transcript lines, which
   are numerous and match almost anything. */
const KIND = {point:'知识点 Key points', extra:'补充 Extra', topic:'主题 Topics',
              quiz:'Quiz', cue:'原文 Transcript'};
const KIND_ORDER = ['point','extra','topic','quiz','cue'];
const CUE_LIMIT = 150;      // transcript hits shown; the rest are counted, never dropped silently
const INDEX = [];
DATA.topics.forEach((t,ti)=>{
  INDEX.push({kind:'topic', ti, time:t.start, zh:t.title_zh, en:t.title_en});
  (t.points||[]).forEach(p=> INDEX.push({kind:'point', ti, time:t.start, zh:p.zh, en:p.en}));
  (t.extra||[]).forEach(x=> INDEX.push({kind:'extra', ti, time:t.start, zh:x.zh, en:x.en, tag:x.tag}));
  (t.quiz||[]).forEach(q=> INDEX.push({kind:'quiz', ti, time:t.start, zh:q.q_zh, en:q.q_en}));
});
DATA.cues.forEach(c=> INDEX.push({kind:'cue', ti:-1, time:c.s, zh:c.zh, en:c.en}));

const esc = s => s.replace(/[&<>]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
function mark(s, terms){
  if(!s) return '';
  let out = esc(s);
  terms.forEach(t=>{
    const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'gi');
    out = out.replace(re, m=>''+m+'');
  });
  return out.replace(//g,'<mark>').replace(//g,'</mark>');
}
let filter = 'all';       // which category the results are narrowed to
let lastHits = null, lastTerms = null;

function runSearch(raw){
  const q = raw.trim();
  const panel = $('searchpanel');
  if(!q){ panel.classList.remove('show'); return; }
  const terms = q.split(/\s+/).filter(Boolean);
  const low = terms.map(t=>t.toLowerCase());
  const hits = INDEX.filter(r=>{
    const hay = ((r.zh||'')+' '+(r.en||'')+' '+(r.tag||'')).toLowerCase();
    return low.every(t=> hay.includes(t));      // several words = all must appear
  });
  lastHits = hits; lastTerms = terms;
  $('searchq').textContent = '“'+q+'”';
  renderHits();
  panel.classList.add('show');
}

function renderHits(){
  const hits = lastHits || [], terms = lastTerms || [];
  const byKind = {};
  hits.forEach(h=> (byKind[h.kind] = byKind[h.kind] || []).push(h));
  // a filter kept from the previous query can have nothing in this one; show all
  // rather than an empty panel that looks like "no results"
  if(filter!=='all' && !(byKind[filter]||[]).length) filter = 'all';
  const curated = hits.length - (byKind.cue||[]).length;
  $('searchn').textContent = hits.length
    ? `${hits.length} 条 · 整理过的 ${curated} 条，原文 ${(byKind.cue||[]).length} 条`
    : '没有找到';

  // category chips, so the added material can be isolated in one click
  const f = $('filters'); f.innerHTML='';
  const mk = (key,label,n)=>{
    const b=document.createElement('button');
    b.className='chip'+(key==='extra'?' extra':'')+(filter===key?' on':'');
    b.innerHTML = label+'<span class="c">'+n+'</span>';
    b.disabled = n===0 && key!=='all';
    b.onclick = ()=>{ filter = key; renderHits(); };
    f.appendChild(b);
  };
  mk('all','全部 All', hits.length);
  KIND_ORDER.forEach(k=> mk(k, KIND[k], (byKind[k]||[]).length));

  const box = $('searchresults'); box.innerHTML='';
  if(!hits.length){
    box.innerHTML = '<div class="note">试试更短的词，或换中文 / 英文写法。</div>';
    return;
  }
  KIND_ORDER.forEach(k=>{
    if(filter!=='all' && filter!==k) return;
    const rows = byKind[k]; if(!rows || !rows.length) return;
    const h = document.createElement('div'); h.className='rgroup';
    h.innerHTML = '<span>'+KIND[k]+'</span><span class="c">'+rows.length+'</span>';
    box.appendChild(h);
    const shown = k==='cue' ? rows.slice(0, CUE_LIMIT) : rows;
    shown.forEach(r=>{
      const el = document.createElement('div');
      el.className = 'hit' + (k==='extra'?' extra':'');
      const where = r.ti>=0 ? DATA.topics[r.ti].title_zh : '';
      el.innerHTML =
        '<div class="t">'+fmt(r.time)+'</div><div class="body">'+
        '<div class="zh">'+mark(r.zh, terms)+'</div>'+
        (r.en? '<div class="en">'+mark(r.en, terms)+'</div>' : '')+
        (where? '<div class="where">'+esc(where)+'</div>' : '')+
        '</div>';
      el.onclick = ()=>{ seek(r.time); $('searchpanel').classList.remove('show'); };
      box.appendChild(el);
    });
    if(shown.length < rows.length){
      const n = document.createElement('div'); n.className='note';
      n.textContent = `另有 ${rows.length-shown.length} 条原文命中未显示，缩小关键词可看到更靠前的结果。`;
      box.appendChild(n);
    }
  });
}
let searchTimer = null;
$('searchbox').addEventListener('input', e=>{
  clearTimeout(searchTimer);
  const v = e.target.value;
  searchTimer = setTimeout(()=> runSearch(v), 150);
});
$('searchbox').addEventListener('keydown', e=>{
  if(e.key==='Escape'){ e.target.value=''; $('searchpanel').classList.remove('show'); e.target.blur(); }
  if(e.key==='Enter'){ const first = $('searchresults').querySelector('.hit'); if(first) first.click(); }
});
$('searchclose').onclick = ()=>{ $('searchbox').value=''; $('searchpanel').classList.remove('show'); };

/* ---------- sync ---------- */
function seek(t){ V.currentTime=t; tick(); }
function findCue(t){ let lo=0,hi=DATA.cues.length-1,r=-1;
  while(lo<=hi){ const m=(lo+hi)>>1; if(DATA.cues[m].s<=t){ r=m; lo=m+1; } else hi=m-1; }
  return (r>=0 && t<=DATA.cues[r].e+0.4) ? r : -1; }
function findTopic(t){ for(let i=0;i<DATA.topics.length;i++)
  if(t>=DATA.topics[i].start && t<DATA.topics[i].end) return i;
  return DATA.topics.length-1; }
function tick(){
  const t = V.currentTime;
  playhead.style.left = (t/DUR*100)+'%';
  $('tlclock').textContent = fmt(t)+' / '+fmt(DUR);
  const ti = findTopic(t);
  if(ti!==curTopic){
    curTopic = ti;
    [...topiclist.children].forEach((el,i)=> el.classList.toggle('on', i===ti));
    [...timeline.querySelectorAll('.tlseg')].forEach((el,i)=> el.classList.toggle('on', i===ti));
    $('tllabel').textContent = ti>=0 ? DATA.topics[ti].title_zh : '';
    const a = topiclist.children[ti]; if(a) a.scrollIntoView({block:'nearest'});
    renderNotes(); renderQuiz();
  }
  const ci = findCue(t);
  if(ci!==curCue){
    curCue = ci;
    const c = ci>=0 ? DATA.cues[ci] : null;
    $('overlay').querySelector('.oz').textContent = c ? c.zh : '';
    $('overlay').querySelector('.oe').textContent = c ? (c.en||'') : '';
    $('subzh').textContent = c ? c.zh : '';
    $('suben').textContent = c ? (c.en||'') : '';
    cueEls.forEach((el,i)=> el.classList.toggle('on', i===ci));
    if(ci>=0) cueEls[ci].scrollIntoView({block:'center'});
  }
}
V.addEventListener('timeupdate', tick);
V.addEventListener('seeked', tick);
document.addEventListener('keydown', e=>{
  if(e.key==='/' && e.target.id!=='searchbox'){
    e.preventDefault(); $('searchbox').focus(); $('searchbox').select(); return;
  }
  if((e.key==='k'||e.key==='K') && (e.ctrlKey||e.metaKey)){
    e.preventDefault(); $('searchbox').focus(); $('searchbox').select(); return;
  }
  if(e.key==='Escape' && $('searchpanel').classList.contains('show')){
    $('searchbox').value=''; $('searchpanel').classList.remove('show'); return;
  }
  if(e.target.tagName==='BUTTON' || e.target.tagName==='INPUT') return;
  if(e.code==='Space'){ e.preventDefault(); V.paused? V.play() : V.pause(); }
  if(e.code==='ArrowLeft')  V.currentTime -= e.shiftKey?30:5;
  if(e.code==='ArrowRight') V.currentTime += e.shiftKey?30:5;
});
V.addEventListener('error', ()=>{
  $('overlay').querySelector('.oz').textContent = '找不到视频 ' + DATA.video + ' — 它必须和本文件在同一个文件夹';
});
renderNotes(); renderQuiz(); tick();
</script>
</body>
</html>
"""

html = HTML.replace("__DATA__", json.dumps(data, ensure_ascii=False, separators=(",", ":")))
with open(APP, "w", encoding="utf-8") as f:
    f.write(html)

n_en = sum(1 for c in data["cues"] if c["en"])
print(f"{len(topics)} topics, {sum(len(t.get('points',[])) for t in topics)} key points, "
      f"{sum(len(t.get('extra',[])) for t in topics)} extra notes, "
      f"{sum(len(t.get('quiz',[])) for t in topics)} quiz questions")
print(f"{len(cues)} cues, {n_en} with an English translation")
print(f"{os.path.getsize(APP)/1e6:.1f} MB -> {APP}")
assert topics, "no topics"
assert os.path.exists(os.path.join(OUTDIR, VIDEO_NAME)), f"{VIDEO_NAME} is not next to the app"
