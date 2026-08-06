/* =========================================================================
   Validates the topic data of one or more app copies.

     node tools/validate-data.js biochemie_basic biochemie_pro

   Exists as a file rather than as an inline `node -e` in the workflow
   because the inline version had to be wrapped in a shell loop to cover
   both app copies, and a multi-line double-quoted node script nested
   inside a bash loop inside a YAML block scalar is three layers of
   quoting that nobody can verify by reading. This file can at least be
   parsed and linted locally. The deploy job is `needs: validate`, so a
   break here silently stops the site updating -- worth the extra file.
   ========================================================================= */

'use strict';
const path = require('path');

const REQUIRED = ['id', 'chapter', 'section', 'czTitle', 'enTitle', 'cnTitle', 'coverage', 'summary'];
const CHAPTERS = 10;

function loadApp(app) {
  // Each data file does `window.BIOCHEM = window.BIOCHEM || { topics: [] }`
  // and pushes onto it, so the namespace must be reset between apps or the
  // second app inherits the first one's topics and every id looks duplicated.
  global.window = {};
  for (let i = 1; i <= CHAPTERS; i++) {
    const f = path.resolve(process.cwd(), app, 'data', 'ch' + i + '.js');
    delete require.cache[f];
    require(f);
  }
  if (!global.window.BIOCHEM || !Array.isArray(global.window.BIOCHEM.topics)) {
    throw new Error(app + ': window.BIOCHEM.topics was never created');
  }
  return global.window.BIOCHEM.topics;
}

function validate(app) {
  const T = loadApp(app);
  const problems = [];
  if (!T.length) problems.push('no topics loaded');

  T.forEach((t) => {
    REQUIRED.forEach((k) => { if (!t[k]) problems.push(t.id + ': missing ' + k); });
    if (!t.summary || !t.summary.en || !t.summary.cn) problems.push(t.id + ': summary missing a language');

    (t.points || []).forEach((p, i) => {
      if (!p.en || !p.cn) problems.push(t.id + ': points[' + i + '] missing a language');
    });
    (t.terms || []).forEach((m, i) => {
      if (!m.en || !m.cn || !m.def_en || !m.def_cn) problems.push(t.id + ': terms[' + i + '] incomplete');
    });
    (t.quiz || []).forEach((q, i) => {
      if (!q.q_en || !q.q_cn) problems.push(t.id + ': quiz[' + i + '] missing a language');
      if (q.type === 'mcq') {
        if (!Array.isArray(q.options) || typeof q.answer !== 'number'
            || q.answer < 0 || q.answer >= q.options.length) {
          problems.push(t.id + ': quiz[' + i + '] bad mcq answer index');
        }
      } else if (!q.answer_en || !Array.isArray(q.accept) || !q.accept.length) {
        problems.push(t.id + ': quiz[' + i + '] written question missing model answer or key terms');
      }
    });
    if (t.oral && (!t.oral.model_en || !Array.isArray(t.oral.checklist) || !t.oral.checklist.length)) {
      problems.push(t.id + ': bad oral block');
    }
  });

  const ids = T.map((t) => t.id);
  ids.filter((v, i) => ids.indexOf(v) !== i)
     .filter((v, i, a) => a.indexOf(v) === i)
     .forEach((d) => problems.push('duplicate id ' + d));

  // Page coverage must have no holes inside a chapter's own span.
  const byChapter = {};
  T.forEach((t) => {
    (t.pages || []).forEach((p) => {
      (byChapter[t.chapter] = byChapter[t.chapter] || new Set()).add(p);
    });
  });
  Object.keys(byChapter).forEach((ch) => {
    const pages = Array.from(byChapter[ch]).sort((a, b) => a - b);
    const gaps = [];
    for (let p = pages[0]; p <= pages[pages.length - 1]; p++) {
      if (!byChapter[ch].has(p)) gaps.push(p);
    }
    if (gaps.length) problems.push('ch' + ch + ': page gaps ' + gaps.join(','));
  });

  const allPages = T.reduce((s, t) => s.concat(t.pages || []), []);
  const terms = T.reduce((n, t) => n + (t.terms || []).length, 0);
  const qs = T.reduce((n, t) => n + (t.quiz || []).length, 0);

  if (problems.length) {
    console.error('FAIL ' + app);
    problems.forEach((p) => console.error('  ' + p));
    return false;
  }
  console.log('ok ' + app + ': ' + T.length + ' topics, book pages '
    + Math.min.apply(null, allPages) + '-' + Math.max.apply(null, allPages)
    + ', ' + terms + ' terms, ' + qs + ' questions');
  return true;
}

const apps = process.argv.slice(2);
if (!apps.length) { console.error('usage: node tools/validate-data.js <appDir> [appDir...]'); process.exit(2); }
const ok = apps.map(validate).every(Boolean);
process.exit(ok ? 0 : 1);
