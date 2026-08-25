#!/usr/bin/env python3
"""Import the existing question banks and re-file them under Jiri's sheets.

Ruojin: "你可以直接搬隔壁的题库 但是形式上改一下" -- port the neighbouring banks,
change the form. So no question is written here. Every item already exists in
one of the corpora, verified there; what changes is what it is filed under.
The course apps file a question under the lecture that taught it; this bank
files it under the exam question it would help answer.

Two things this must not do, both learned upstream:

  * silently drop a corpus. Every parser asserts a non-zero count, and the
    totals are printed per corpus so a format change shows up as a number
    that moved rather than as a quietly smaller bank.
  * double-count. pesbpro is the same course as pesbexplain and biochem_basic
    overlaps biochem_pro, so the overlap is measured and reported rather than
    assumed in either direction.
"""
import os
import re
import sys
import json
import collections

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import qindex as Q                                    # noqa: E402  (shares the parsers)

BS = chr(92)


# --------------------------------------------------------------- slicing ----
def slice_array(body, key):
    """The [...] that follows `key:`, by bracket matching.

    A fixed-size window spills into neighbouring fields; qindex.py hit exactly
    that and dragged whole sentences out of `explain` into the term list.
    """
    i = body.find(key + ':')
    if i < 0:
        return ''
    j = body.find('[', i)
    if j < 0:
        return ''
    depth, k, in_str, quote, esc = 0, j, False, '', False
    while k < len(body):
        c = body[k]
        if in_str:
            if esc:
                esc = False
            elif c == BS:
                esc = True
            elif c == quote:
                in_str = False
        elif c in ('"', "'"):
            in_str, quote = True, c
        elif c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return body[j:k + 1]
        k += 1
    return ''


def split_items(arr):
    """Top-level {...} objects inside an array, string-aware."""
    out, depth, start, in_str, quote, esc = [], 0, None, False, '', False
    for k, c in enumerate(arr):
        if in_str:
            if esc:
                esc = False
            elif c == BS:
                esc = True
            elif c == quote:
                in_str = False
            continue
        if c in ('"', "'"):
            in_str, quote = True, c
        elif c == '{':
            if depth == 0:
                start = k
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0 and start is not None:
                out.append(arr[start:k + 1])
                start = None
    return out


def field(item, key):
    """String value of `key`, either quote style, escapes respected."""
    for q in ("'", '"'):
        v = Q.qstr(item, key, q)
        if v:
            return v
    return ''


def field_num(item, key):
    """Integer value of `key`, or None.

    field() reads quoted strings only, so a bare `answer: 2` came back empty
    for every single MCQ in every corpus. The emitter then silently fell back
    to option 0, which marked the wrong option correct on 1156 imported
    questions -- and `answer: 0` is in fact the rarest real index. Anything
    reading a numeric field must come through here.

    `answer\\s*:` cannot match `answer_en:` or `answer_cn:`, so the key is not
    confusable with its own text fields.
    """
    m = re.search(r'(?<![\w$])' + re.escape(key) + r'\s*:\s*(\d+)', item)
    return int(m.group(1)) if m else None


def field_list(item, key):
    arr = slice_array(item, key)
    if not arr:
        return []
    out, buf, in_str, quote, esc = [], [], False, '', False
    for c in arr:
        if in_str:
            if esc:
                buf.append(c)
                esc = False
            elif c == BS:
                esc = True
            elif c == quote:
                out.append(''.join(buf))
                buf, in_str = [], False
            else:
                buf.append(c)
        elif c in ('"', "'"):
            in_str, quote = True, c
    return out


# --------------------------------------------------------------- parsing ----
def parse_questions(corpus):
    """Every quiz/bank item in every node, with the node it came from."""
    rows = []
    for label, nodes in corpus.items():
        for nid, ten, tcn, body in nodes:
            for container in ('quiz', 'bank'):
                arr = slice_array(body, container)
                if not arr:
                    continue
                for item in split_items(arr):
                    stem = field(item, 'q_en') or field(item, 'q')
                    if len(stem) < 10:
                        continue
                    opts = field_list(item, 'options')
                    rows.append({
                        'corpus': label,
                        'node': nid,
                        'node_title': ten or tcn,
                        'container': container,
                        'type': 'mcq' if opts else 'written',
                        'stem': stem,
                        'stem_cn': field(item, 'q_cn'),
                        'options': opts,
                        'answer': field(item, 'answer') or field(item, 'a'),
                        'answer_idx': field_num(item, 'answer'),
                        'why': field(item, 'why_en') or field(item, 'why'),
                        # The source corpora carry both languages and the app
                        # renders whichever the reader has selected, so dropping
                        # the Chinese here left every imported MCQ with no
                        # feedback at all in CN mode -- right/wrong and nothing
                        # else. Extract it rather than re-deriving it later.
                        'why_cn': field(item, 'why_cn'),
                        'answer_cn': field(item, 'answer_cn'),
                        'accept': field_list(item, 'accept'),
                    })
    return rows


def norm_stem(s):
    return re.sub(r'\W+', '', s.lower())[:90]


def main():
    corpus = Q.load_corpora()
    rows = parse_questions(corpus)
    assert rows, 'no questions parsed at all -- the quiz/bank format changed'

    per = collections.Counter(r['corpus'] for r in rows)
    print()
    print('%-16s %6s %6s %6s' % ('corpus', 'mcq', 'written', 'total'))
    for lab in corpus:
        m = sum(1 for r in rows if r['corpus'] == lab and r['type'] == 'mcq')
        w = sum(1 for r in rows if r['corpus'] == lab and r['type'] == 'written')
        # A corpus with nodes but no questions is a real possibility (exam30
        # carries model answers, not a quiz), so this is reported, not asserted.
        print('%-16s %6d %6d %6d' % (lab, m, w, per[lab]))
    print('%-16s %6s %6s %6d' % ('raw total', '', '', len(rows)))

    stems = collections.defaultdict(list)
    for r in rows:
        stems[norm_stem(r['stem'])].append(r)
    print('distinct stems: %d' % len(stems))
    print()

    def overlap(a, b):
        A = set(k for k, v in stems.items() if any(r['corpus'] == a for r in v))
        B = set(k for k, v in stems.items() if any(r['corpus'] == b for r in v))
        if A and B:
            print('%-14s vs %-14s  shared %4d  (%.0f%% of %s)'
                  % (a, b, len(A & B), 100 * len(A & B) / len(A), a))

    overlap('pesbexplain', 'pesbpro')
    overlap('biochem_pro', 'biochem_basic')

    out = os.path.join(os.path.dirname(HERE), '_bank_raw.json')
    json.dump(rows, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print()
    print('raw bank: %s' % out)
    print('RESULT: PASS')


if __name__ == '__main__':
    main()
