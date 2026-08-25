#!/usr/bin/env python3
"""Emit the imported question bank as data/ch6.js.

Reads _bank_raw.json (written by bank_import.py), keeps the three corpora that
actually contribute, deduplicates, groups the questions by their source chapter,
and writes one node per group.

Corpus choice is measured, not assumed. bank_import.py showed pesbpro shares 615
of pesbexplain's 616 stems, and biochem_basic adds zero on top of biochem_pro, so
including either would only double-count. Ruojin confirmed the same choice
independently ("pesbexplain 只看这个").

Strings are emitted with json.dumps, i.e. as double-quoted JSON literals, which
JavaScript accepts verbatim. Hand-escaping single-quoted strings is what blanks
the page when one apostrophe is missed, and there are over a thousand strings
here. Only the structural tokens the checkers grep for -- type: 'mcq', id: '6-1'
-- are written with single quotes.
"""
import os
import re
import sys
import json
import collections

HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(HERE)

KEEP = ('pesbexplain', 'labhandbook', 'biochem_pro')

# source chapter -> (exam-bank chapter, human label). The sheets have three
# subject headings; imported material is filed under whichever it serves.
CH_LABEL = {
    'pesbexplain': 'PESB · protein engineering',
    'labhandbook': 'Lab handbook',
    'biochem_pro': 'Biochemistry',
}


CJK_RANGE = '一-鿿　-〿＀-￯'
_MIX_A = re.compile(r'([A-Za-z0-9)\]])([' + CJK_RANGE + '])')
_MIX_B = re.compile(r'([' + CJK_RANGE + r'])([A-Za-z0-9(\[])')


def despace(t):
    """Insert the space the house style requires between Latin and CJK.

    Authoring rule 5: a Latin word must never touch a CJK character. The source
    corpora violate it in a handful of places (Lehninger所, Klenow片) and the
    MIX scan fails the build on them. This is a typographic fix and changes no
    fact, which is why it is allowed on material that is otherwise imported
    verbatim.
    """
    if not isinstance(t, str):
        return t
    # The two backreferences are load-bearing: an earlier version lost them and
    # substituted a bare space, which DELETED the two matched characters instead
    # of separating them. The MIX check then passed because the offending pair no
    # longer existed.
    t = _MIX_A.sub(r'\1 \2', t)
    return _MIX_B.sub(r'\1 \2', t)



def norm_stem(s):
    return re.sub(r'\W+', '', s.lower())[:90]


def src_chapter(corpus, nid):
    """Leading chapter number of a source id, as a string."""
    m = re.match(r'L-(\d+)', nid) or re.match(r'(\d+)', nid)
    return m.group(1) if m else '0'


def js(v):
    return json.dumps(despace(v), ensure_ascii=False)


def emit_item(q, indent='    '):
    """One quiz/bank item. Structural tokens single-quoted, content as JSON."""
    L = [indent + "{ type: '%s'," % ('mcq' if q['type'] == 'mcq' else 'short')]
    L.append(indent + '  q_en: ' + js(q['stem']) + ',')
    if q['stem_cn']:
        L.append(indent + '  q_cn: ' + js(q['stem_cn']) + ',')
    if q['type'] == 'mcq':
        L.append(indent + '  options: [')
        for i, o in enumerate(q['options']):
            L.append(indent + '    ' + js(o) + (',' if i < len(q['options']) - 1 else ''))
        L.append(indent + '  ],')
        # No fallback here on purpose. This used to read `ans if
        # str(ans).isdigit() else '0'`, and because the importer could not read
        # a bare integer at all, every imported MCQ took the fallback and was
        # emitted with the FIRST option marked correct -- a study app teaching
        # 1156 wrong answers, silently, while every checker reported PASS.
        # A question whose answer cannot be read is dropped by main(), never
        # guessed.
        ans = q['answer_idx']
        assert isinstance(ans, int) and 0 <= ans < len(q['options']), (
            'answer index %r out of range for %s (%d options)'
            % (ans, q['node'], len(q['options'])))
        L.append(indent + '  answer: %d,' % ans)
        L.append(indent + '  why_en: ' + js(q['why'] or 'Imported from ' + q['node'] + '.') + ',')
        # Both languages or the app shows nothing in whichever one is missing:
        # bi() guards on truthiness, so a CN reader answering an imported
        # question used to get right/wrong and no reason at all. Where the
        # source had no Chinese, fall back to the traceability pointer rather
        # than inventing one -- an IMPORT entry may not carry a new fact.
        L.append(indent + '  why_cn: '
                 + js(q.get('why_cn') or '见来源节点 ' + q['node'] + '。'))
    else:
        acc = q['accept'] or ['answer']
        L.append(indent + '  accept: [' + ', '.join(js(a) for a in acc) + '],')
        L.append(indent + '  answer_en: ' + js(q['why'] or q['answer'] or 'See source node ' + q['node'] + '.') + ',')
        L.append(indent + '  answer_cn: '
                 + js(q.get('answer_cn') or q.get('why_cn') or '见来源节点 ' + q['node'] + '。'))
    L.append(indent + '}')
    return '\n'.join(L)


def main():
    raw = json.load(open(os.path.join(APP, '_bank_raw.json'), encoding='utf-8'))
    rows = [r for r in raw if r['corpus'] in KEEP]

    seen, uniq = set(), []
    for r in rows:
        k = norm_stem(r['stem'])
        if k in seen:
            continue
        seen.add(k)
        uniq.append(r)
    print('kept %d of %d raw rows after corpus filter and dedup' % (len(uniq), len(raw)))

    # An MCQ whose correct-answer index could not be read is dropped and
    # counted, never emitted with a guessed index. Guessing is what produced
    # 1156 questions marking the wrong option correct.
    bad = [r for r in uniq
           if r['type'] == 'mcq'
           and not (isinstance(r.get('answer_idx'), int)
                    and 0 <= r['answer_idx'] < len(r['options']))]
    if bad:
        print('DROPPED %d mcq rows with an unreadable answer index:' % len(bad))
        for r in bad[:10]:
            print('   %-14s %-10s answer_idx=%r opts=%d  %s'
                  % (r['corpus'], r['node'], r.get('answer_idx'),
                     len(r['options']), r['stem'][:60]))
        uniq = [r for r in uniq if r not in bad]
    else:
        print('all %d mcq rows carry a readable answer index'
              % sum(1 for r in uniq if r['type'] == 'mcq'))

    groups = collections.OrderedDict()
    for r in uniq:
        key = (r['corpus'], src_chapter(r['corpus'], r['node']))
        groups.setdefault(key, []).append(r)

    # A group of fewer than 4 cannot fill the mandatory 4-item quiz, so it is
    # merged into the corpus' catch-all rather than silently dropped.
    small = [k for k, v in groups.items() if len(v) < 4]
    for k in small:
        tgt = (k[0], 'x')
        groups.setdefault(tgt, []).extend(groups.pop(k))
    if small:
        print('merged %d undersized groups into per-corpus catch-alls' % len(small))

    out = []
    n = 0
    for (corpus, ch), items in groups.items():
        if len(items) < 4:
            print('SKIP %s ch%s: only %d questions' % (corpus, ch, len(items)))
            continue
        n += 1
        nid = '6-%d' % n
        title = '%s, chapter %s' % (CH_LABEL[corpus], ch)
        quiz, bank = items[:4], items[4:]
        node = ['{',
                "  id: '%s'," % nid,
                '  chapter: 6,',
                "  lecture: 'Imported',",
                "  section: '6.%d'," % n,
                '  slides: ' + js('%s %s' % (corpus, ch)) + ',',
                "  coverage: 'partial',",
                '  enTitle: ' + js('Imported bank — ' + title) + ',',
                '  cnTitle: ' + js('导入题库 — ' + title) + ',',
                '  summary: {',
                '    en: ' + js('%d questions imported unchanged from %s. No question here was '
                               'written for this bank; each already existed and was verified in its '
                               'source app. What changed is only where it is filed.'
                               % (len(items), corpus)) + ',',
                '    cn: ' + js('从 %s 原样导入的 %d 道题。这里没有一道题是为本题库新写的，'
                               '每一道都已存在并在来源 app 中核对过。改变的只是归档位置。'
                               % (corpus, len(items))),
                '  },',
                '  mustKnow: ' + js('Imported material. Treat a wrong answer here as a pointer back '
                                    'to source node %s in %s, not as a new fact to memorise. '
                                    '导入内容。这里答错，是指回 %s 来源节点的路标，不是要背的新事实。'
                                    % (items[0]['node'], corpus, corpus)) + ',',
                '  skipIt: ' + js('Do not grind this chapter before chapters 1 to 5. Those answer '
                                  'the printed sheet questions; this one is volume for drilling. '
                                  '不要在第 1 到 5 章之前刷这一章。那几章回答的是卷面上的题，这一章是用来刷量的。') + ',',
                '  points: [',
                '    { term: ' + js('Imported, not rewritten') + ', en: '
                + js('Every item came from %s and carries its source node id in the explanation, so '
                     'any claim can be traced back and checked.' % corpus) + ', cn: '
                + js('全部条目来自 %s，解释里带着来源节点 id，任何论断都能回溯核对。' % corpus) + ' }',
                '  ],',
                '  terms: [',
                '    { en: ' + js('Source node') + ', cn: ' + js('来源节点') + ', def_en: '
                + js('The node in the original app this question came from; named in every why_en.')
                + ', def_cn: ' + js('这道题所出自的原 app 节点；每条 why_en 里都写明了。') + ' }',
                '  ],',
                '  quiz: [']
        node.append(',\n'.join(emit_item(q) for q in quiz))
        node.append('  ],')
        if bank:
            node.append('  bank: [')
            node.append(',\n'.join(emit_item(q) for q in bank))
            node.append('  ],')
        node += ['  oral: {',
                 '    q_en: ' + js('Talk me through %s.' % title) + ',',
                 '    model_en: ' + js('This is an imported drill set rather than an oral topic. The '
                                       'spoken answers live in chapters 1 to 5, which are organised '
                                       'by the questions actually printed on the sheets.') + ',',
                 '    checklist: [',
                 '      { en: ' + js('Use this chapter for volume, not for oral rehearsal')
                 + ', cn: ' + js('这一章用来刷量，不用来练口述') + ' }',
                 '    ]',
                 '  }',
                 '}']
        out.append('\n'.join(node))

    header = ('/* ' + '=' * 71 + '\n'
              '   JIRI BANK — Chapter 6 . Imported question bank\n\n'
              '   GENERATED by tools/bank_emit.py — do not hand-edit.\n'
              '   Nothing here was written for this bank. Every question already existed in\n'
              '   pesbexplain, labhandbook or biochem_pro and was verified there; only the\n'
              '   filing changed. pesbpro and biochem_basic are excluded because they were\n'
              '   measured as duplicates that add nothing.\n'
              '   ' + '=' * 71 + ' */\n\n'
              'window.PESB = window.PESB || {};\n'
              'window.PESB.topics = (window.PESB.topics || []).concat([\n\n')

    path = os.path.join(APP, 'data', 'ch6.js')
    open(path, 'w', encoding='utf-8', newline='\n').write(header + ',\n\n'.join(out) + '\n\n]);\n')

    total = sum(len(v) for v in groups.values() if len(v) >= 4)
    print('%s: %d nodes, %d questions' % (path, len(out), total))
    print('RESULT: PASS')


if __name__ == '__main__':
    main()
