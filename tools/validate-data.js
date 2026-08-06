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

   2026-08-06: taught about the second book. See HANDOFF_LEHNINGER.md 7.
   Two things changed and both matter:

     - The page-gap check now applies only to Czech-book nodes. For the
       Czech textbook, full page coverage with no holes IS the quality bar.
       For Lehninger it is the opposite: the plan is to take two or three
       sections per topic and skip the rest, so gaps are the intended
       outcome and enforcing coverage would push someone to pad the data
       until the check goes quiet. A node with no `book` counts as "cz",
       so biochemie_basic keeps exactly the check it had.

     - `chapter` is book-local -- chapter 7 is Sacharidy in the Czech book
       and Carbohydrates and Glycobiology in Lehninger -- so anything that
       groups by chapter now groups by book AND chapter. Merging those
       numbering spaces would silently union two unrelated page ranges.
   ========================================================================= */

'use strict';
const fs = require('fs');
const path = require('path');

/* Section nodes are anchored to a place in a book, so they must say where. Entity cards
   (kind: "entity") are not: an integration card gathers one entity -- tryptophan, say --
   from wherever it is scattered, so `chapter`/`section`/`pages`/`coverage` have no honest
   value to hold. See HANDOFF_LEHNINGER.md section 12a. Requiring them anyway would force a
   synthetic chapter number, and there is no neutral one available: the test below is
   `if (!t[k])`, which is falsy, so even `chapter: 0` fails. */
const REQUIRED_SECTION = ['id', 'chapter', 'section', 'czTitle', 'enTitle', 'cnTitle', 'coverage', 'summary'];
const REQUIRED_ENTITY  = ['id', 'enTitle', 'cnTitle', 'topicKey', 'summary'];
const KINDS = ['section', 'entity'];

function requiredFor(t) {
  return t.kind === 'entity' ? REQUIRED_ENTITY : REQUIRED_SECTION;
}
const BOOKS = ['cz', 'lehninger'];

/* The data files an app actually ships, taken from its index.html rather than
   hardcoded. A file sitting in data/ that no <script> tag loads is dead, and a
   tag pointing at a missing file breaks the site -- both used to pass silently
   because this list was a hardcoded ch1..ch10 loop. */
function dataFiles(app) {
  const html = fs.readFileSync(path.resolve(process.cwd(), app, 'index.html'), 'utf8');
  const tagged = [];
  const re = /<script\s+src="data\/([^"]+\.js)"\s*>/g;
  let m;
  while ((m = re.exec(html)) !== null) tagged.push(m[1]);

  const dir = path.resolve(process.cwd(), app, 'data');
  const onDisk = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort();

  const missing = tagged.filter((f) => onDisk.indexOf(f) === -1);
  const unloaded = onDisk.filter((f) => tagged.indexOf(f) === -1);
  const problems = [];
  missing.forEach((f) => problems.push('index.html loads data/' + f + ' but it does not exist'));
  unloaded.forEach((f) => problems.push('data/' + f + ' exists but no <script> tag loads it'));
  if (!tagged.length) problems.push('index.html loads no data files at all');
  return { files: tagged, problems: problems };
}

function loadApp(app, files) {
  // Each data file does `window.BIOCHEM = window.BIOCHEM || { topics: [] }`
  // and pushes onto it, so the namespace must be reset between apps or the
  // second app inherits the first one's topics and every id looks duplicated.
  global.window = {};
  files.forEach((name) => {
    const f = path.resolve(process.cwd(), app, 'data', name);
    delete require.cache[f];
    require(f);
  });
  if (!global.window.BIOCHEM || !Array.isArray(global.window.BIOCHEM.topics)) {
    throw new Error(app + ': window.BIOCHEM.topics was never created');
  }
  return global.window.BIOCHEM.topics;
}

function validate(app) {
  const wiring = dataFiles(app);
  const problems = wiring.problems.slice();
  const T = loadApp(app, wiring.files);
  if (!T.length) problems.push('no topics loaded');

  T.forEach((t) => {
    requiredFor(t).forEach((k) => { if (!t[k]) problems.push(t.id + ': missing ' + k); });
    if (t.kind !== undefined && KINDS.indexOf(t.kind) === -1) {
      problems.push(t.id + ': kind must be one of ' + KINDS.join('/') + ', got ' + JSON.stringify(t.kind));
    }
    /* An entity card that claims a chapter is lying about being unanchored, and it would
       land in a book view it does not belong to. */
    if (t.kind === 'entity' && (t.chapter !== undefined || t.pages !== undefined)) {
      problems.push(t.id + ': entity cards must not carry chapter or pages');
    }
    if (!t.summary || !t.summary.en || !t.summary.cn) problems.push(t.id + ': summary missing a language');
    if (t.book !== undefined && BOOKS.indexOf(t.book) === -1) {
      problems.push(t.id + ': book must be one of ' + BOOKS.join('/') + ', got ' + JSON.stringify(t.book));
    }

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

  /* All-or-nothing on the two new fields. A half-migrated app -- some nodes
     tagged, some not -- is the state where the topic view silently drops
     whatever was missed, and it looks fine on screen. Either the app has been
     migrated or it has not. */
  /* `book` says which book a node was written FROM. An entity card is written from
     several at once -- that is the whole point of it -- so it carries no `book` and is
     excluded from this count rather than being given a false one. `topicKey` is the join
     key and every node needs it, entity cards included. */
  const sectionNodes = T.filter((t) => t.kind !== 'entity');
  [['book', sectionNodes], ['topicKey', T]].forEach((pair) => {
    const name = pair[0];
    const pool = pair[1];
    const got = pool.filter((t) => t[name]).length;
    if (got !== 0 && got !== pool.length) {
      problems.push(name + ': ' + got + ' of ' + pool.length
        + ' topics have it -- it must be on all of them or none');
    }
  });
  T.forEach((t) => {
    if (t.kind === 'entity' && t.book !== undefined) {
      problems.push(t.id + ': entity cards must not carry book -- they draw on several');
    }
  });

  const ids = T.map((t) => t.id);
  ids.filter((v, i) => ids.indexOf(v) !== i)
     .filter((v, i, a) => a.indexOf(v) === i)
     .forEach((d) => problems.push('duplicate id ' + d));

  /* Page coverage must have no holes inside a chapter's own span -- Czech book
     only, and keyed by book because `chapter` is book-local. */
  const byChapter = {};
  T.forEach((t) => {
    if (t.kind === 'entity') return;          // unanchored: no chapter, no pages to check
    if ((t.book || 'cz') !== 'cz') return;
    const key = 'cz/' + t.chapter;
    (t.pages || []).forEach((p) => {
      (byChapter[key] = byChapter[key] || new Set()).add(p);
    });
  });
  Object.keys(byChapter).forEach((key) => {
    const pages = Array.from(byChapter[key]).sort((a, b) => a - b);
    const gaps = [];
    for (let p = pages[0]; p <= pages[pages.length - 1]; p++) {
      if (!byChapter[key].has(p)) gaps.push(p);
    }
    if (gaps.length) problems.push(key + ': page gaps ' + gaps.join(','));
  });

  const entityCards = T.filter((t) => t.kind === 'entity');
  const czTopics = sectionNodes.filter((t) => (t.book || 'cz') === 'cz');
  const lehTopics = sectionNodes.filter((t) => t.book === 'lehninger');
  const allPages = czTopics.reduce((s, t) => s.concat(t.pages || []), []);
  const terms = T.reduce((n, t) => n + (t.terms || []).length, 0);
  const qs = T.reduce((n, t) => n + (t.quiz || []).length, 0);
  const keys = {};
  T.forEach((t) => { if (t.topicKey) keys[t.topicKey] = true; });

  if (problems.length) {
    console.error('FAIL ' + app);
    problems.forEach((p) => console.error('  ' + p));
    return false;
  }
  console.log('ok ' + app + ': ' + T.length + ' topics ('
    + czTopics.length + ' cz, ' + lehTopics.length + ' lehninger'
    + (entityCards.length ? ', ' + entityCards.length + ' entity cards' : '') + ')'
    + ', cz book pages ' + Math.min.apply(null, allPages) + '-' + Math.max.apply(null, allPages)
    + ', ' + Object.keys(keys).length + ' topicKeys'
    + ', ' + terms + ' terms, ' + qs + ' questions');
  return true;
}

const apps = process.argv.slice(2);
if (!apps.length) { console.error('usage: node tools/validate-data.js <appDir> [appDir...]'); process.exit(2); }
const ok = apps.map(validate).every(Boolean);
process.exit(ok ? 0 : 1);
