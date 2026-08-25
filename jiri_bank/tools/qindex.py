#!/usr/bin/env python3
"""Build the question -> candidate-source-node worksheet.

The app's unit is an exam question, and most questions are answered by several
existing nodes spread across corpora (handoff section 9). This tool proposes
candidates; it does NOT decide them. Keyword matching has produced four
documented false positives on this material already -- agarose as a
chromatography resin read as a DNA gel, homologous recombination in a cloning
context read as DNA repair, `illumination` read as Illumina, origin of
replication as a plasmid element -- so the output is a worksheet to be curated
by hand into data/questions.js, never a map to be trusted as generated.

Three node formats exist and a parser that knows only one returns zero for the
others, which reads as "nothing covers this" when it means "this corpus was
never opened". Every corpus therefore asserts a non-zero node count.
"""
import os, re, sys, json, collections

HERE = os.path.dirname(os.path.abspath(__file__))
# Two repos, named explicitly. pesbexplain exists in both; the recombinants
# copy is the one being edited, and pesbpro and labhandbook exist only there.
TRAE = 'C:/Users/Admin/Documents/trae_projects/recombinants_trae_independant'
BIO  = 'C:/Users/Admin/Downloads/bio-state-exam'

# (label, directory, glob-prefix, format)
CORPORA = [
    ('pesbexplain', os.path.join(TRAE, 'pesbexplain', 'data'), 'ch',  'pesb'),
    ('pesbpro',     os.path.join(TRAE, 'pesbpro',     'data'), 'ch',  'pesb'),
    ('labhandbook', os.path.join(TRAE, 'labhandbook', 'data'), 'ch',  'pesb'),
    ('biochem_pro',    os.path.join(BIO, 'biochemie_pro',    'data'), '', 'bioch'),
    ('biochem_basic',  os.path.join(BIO, 'biochemie_basic',  'data'), '', 'bioch'),
    ('biochem_struct', os.path.join(BIO, 'biochemie_struct', 'data'), '', 'bioch'),
    ('exam30',      os.path.join(BIO, 'exam30', 'data'),        't',  'exam30'),
]


def qstr(body, key, q):
    """Read the string value of `key` out of a node body.

    Written as a scanner rather than a regex: the value may contain an escaped
    quote (the corpora require apostrophes to be escaped, see authoring rule 4),
    and a regex able to skip those needs backslash escapes that do not survive
    being typed through a heredoc.
    """
    marker = key + ': ' + q
    i = body.find(marker)
    if i < 0:
        return ''
    i += len(marker)
    out, esc = [], False
    while i < len(body):
        c = body[i]
        if esc:
            out.append(c); esc = False
        elif c == '\\':
            esc = True
        elif c == q:
            break
        else:
            out.append(c)
        i += 1
    return ''.join(out)


def parse_pesb(s):
    """node at column 0, `  id: '1-1',` at two spaces, single quotes."""
    out = []
    starts = [m.start() for m in re.finditer(r"\n{\n  id: '", s)]
    for i, a in enumerate(starts):
        b = starts[i + 1] if i + 1 < len(starts) else s.rindex('\n]);')
        body = s[a:b]
        out.append((qstr(body, 'id', "'"), qstr(body, 'enTitle', "'"),
                    qstr(body, 'cnTitle', "'"), body))
    return out


def parse_bioch(s):
    """Double-quoted ids, but at two different depths in the same corpus.

    `bank_*.js` opens a node as `  id: "10-12",` at two spaces; `leh_*.js` opens
    it as `    id: "L-9-2-1",` at four. Matching only the four-space form reads
    207 of the 284 nodes as absent -- found by checking the parsed count against
    a raw grep, which is why that check is now the assertion in load_corpora.
    """
    out = []
    starts = [m.start() for m in re.finditer(r'\n {2,4}id: "', s)]
    for i, a in enumerate(starts):
        b = starts[i + 1] if i + 1 < len(starts) else len(s)
        body = s[a:b]
        out.append((qstr(body, 'id', '"'),
                    qstr(body, 'titleEn', '"') or qstr(body, 'title_en', '"'),
                    qstr(body, 'title', '"'), body))
    return out


def parse_exam30(s):
    """topics keyed `n: 31,` at column 0, halves under a: / b:."""
    out = []
    starts = [m.start() for m in re.finditer(r'\nn: \d+,', s)]
    for i, a in enumerate(starts):
        b = starts[i + 1] if i + 1 < len(starts) else len(s)
        body = s[a:b]
        n = re.search(r'n: (\d+)', body).group(1)
        out.append(('exam30:%s' % n, qstr(body, 'titleEN', '"'),
                    qstr(body, 'titleCN', '"'), body))
    return out


PARSERS = {'pesb': parse_pesb, 'bioch': parse_bioch, 'exam30': parse_exam30}


MARKER = {
    'pesb':   r"\n{\n  id: '",
    'bioch':  r'\n {2,4}id: "',
    'exam30': r'\nn: \d+,',
}


def load_corpora():
    corpus = {}
    for label, d, prefix, fmt in CORPORA:
        if not os.path.isdir(d):
            print('MISSING corpus directory: %s (%s)' % (d, label), file=sys.stderr)
            sys.exit(1)
        nodes = []
        for fn in sorted(os.listdir(d)):
            if fn.endswith('.js') and fn.startswith(prefix):
                s = open(os.path.join(d, fn), encoding='utf-8', errors='replace').read()
                nodes.extend(PARSERS[fmt](s))
        # Load-bearing. A format change here is otherwise silent, and a corpus
        # that parses to zero reads as "nothing covers this topic" when it means
        # "this corpus was never opened".
        assert nodes, ('corpus %s parsed to ZERO nodes with format %r -- the format '
                       'changed, or the prefix %r matched nothing' % (label, fmt, prefix))
        # Zero is not the only silent failure: an id sitting at an unexpected
        # indent is dropped just as quietly. Count the raw markers and insist the
        # parser accounted for every one.
        raw = sum(len(re.findall(MARKER[fmt], open(os.path.join(d, fn), encoding='utf-8',
                                                   errors='replace').read()))
                  for fn in sorted(os.listdir(d))
                  if fn.endswith('.js') and fn.startswith(prefix))
        assert len(nodes) == raw, ('corpus %s: parsed %d nodes but the file contains %d id '
                                   'markers -- the parser is dropping some'
                                   % (label, len(nodes), raw))
        corpus[label] = nodes
    return corpus


def load_questions():
    sys.path.insert(0, os.path.join(TRAE, 'state_exam'))
    import questions_data as qd
    rows = []
    for sheet in qd.SHEETS:
        for section, items in sheet['sections']:
            for i, (en, cn) in enumerate(items, 1):
                rows.append({'sheet': sheet['id'], 'section': section, 'num': i,
                             'en': en, 'cn': cn})
    return rows


def norm(s):
    return re.sub(r'[^a-z0-9 ]', ' ', s.lower())


STOP = set(('what is are the a an of and or in to for do you how does describe explain '
            'list name at least two three types different theirว between it its this that '
            'with from why when which who all one same each other more most can used use '
            'using principle principles process processes method methods role roles '
            'function functions structure structures term terms define definition').split())


def keywords(q):
    return [w for w in norm(q).split() if len(w) > 2 and w not in STOP]


CJK = re.compile('[一-鿿]{2,}')
CN_STOP = set(['什么', '哪些', '如何', '为什么', '请问', '描述', '解释', '说明', '实验',
               '之间', '区别', '以及', '和其', '它们', '的原', '原理', '过程', '作用',
               '结构', '功能', '方法', '类型', '不同', '至少', '两种', '三种'])


def cn_terms(cn):
    """Chinese search terms from the question's own Chinese gloss.

    The biochemie layer titles its nodes in Chinese (`糖类`, `酶动力学`), so an
    English keyword can never match one by title. Without this, five hundred of
    the eight hundred nodes are invisible to the matcher and every biochemistry
    question looks uncovered -- which is how "carbohydrates" came back with zero
    title candidates while 57 nodes are titled 糖类.

    No segmenter is available, so take every 2-4 character run inside each CJK
    span. Over-generates on purpose: a spurious term costs a candidate row in a
    worksheet a human reads, a missing one costs a silent false negative.
    """
    terms = set()
    for span in CJK.findall(cn or ''):
        for n in (4, 3, 2):
            for i in range(len(span) - n + 1):
                t = span[i:i + n]
                if t not in CN_STOP:
                    terms.add(t)
    return terms


TERM_KEY = re.compile(r'(?<!def_)(?:en|cn|cz): ([QUOTE])((?:[^QUOTE]){1,60}?)[QUOTE]'.replace('QUOTE', "'"))
TERM_KEY2 = re.compile(r'(?<!def_)(?:en|cn|cz): "([^"]{1,60}?)"')
TERM_ARR = re.compile(r'["QUOTE]([^"QUOTE]{1,60}?)["QUOTE]'.replace('QUOTE', "'"))
CJK_EDGE = '的了是在与和其为对从把被所之也就都还很如'


def node_terms(body):
    """The node's controlled vocabulary, as a set of short strings.

    Every corpus carries a curated `terms` list of concept names with their
    Chinese equivalents -- a far better match target than a title (too short) or
    the body (too long, and full of incidental mentions). Three shapes exist:
    {en: '', cn: ''} single-quoted, {cz: "", en: "", cn: ""} double-quoted, and
    ["en", "cn"] pairs. Definition text is excluded by the def_ lookbehind.
    """
    i = body.find('terms:')
    if i < 0:
        return set()
    j = body.find('[', i)
    if j < 0:
        return set()
    # Slice the array by bracket matching. A fixed-size window spills into the
    # neighbouring fields and drags whole sentences from `explain` in with it.
    depth, k = 0, j
    while k < len(body):
        if body[k] == '[':
            depth += 1
        elif body[k] == ']':
            depth -= 1
            if depth == 0:
                break
        k += 1
    chunk = body[j:k + 1]
    out = set()
    for m in TERM_KEY.finditer(chunk):
        out.add(m.group(2))
    for m in TERM_KEY2.finditer(chunk):
        out.add(m.group(1))
    if not out:
        for m in TERM_ARR.finditer(chunk):
            out.add(m.group(1))
    # a term is a name, not a sentence
    bad = set('。？！，；：（）')
    return set(t.strip() for t in out
               if 1 < len(t.strip()) < 60 and not (set(t) & bad))


def trim_cjk(t):
    """Drop n-grams that open or close on a grammatical particle.

    Windowing a Chinese sentence without a segmenter produces tokens that cross
    word boundaries -- 的是, 类的结构, 与功能. They match everywhere and mean
    nothing. Trimming the edges is crude but it is checkable, and it removed the
    three artifacts that were outranking 糖类.
    """
    while t and t[0] in CJK_EDGE:
        t = t[1:]
    while t and t[-1] in CJK_EDGE:
        t = t[:-1]
    return t if len(t) >= 2 else ''


def word_in(w, text):
    """Word-boundary containment. `gram` must not match `Reprogramming`."""
    return re.search(r'\b' + re.escape(w) + r'\b', text) is not None


def build_idf(corpus):
    """Document frequency of every title token / CJK n-gram, over all node titles.

    Hand-written stopword lists failed twice on this material. `structure` and
    `function` were stopped, but the Chinese 结构与功能 was not, so "describe the
    structure and function of carbohydrates" matched the enzyme, haemoglobin and
    cell-compartment nodes and the 57 nodes titled 糖类 lost. A term's weight has
    to come from how common it actually is in these titles, which is measurable,
    rather than from a list somebody remembered to update.
    """
    import math
    en_df, cn_df, titles = collections.Counter(), collections.Counter(), 0
    for nodes in corpus.values():
        for _, ten, tcn, _ in nodes:
            titles += 1
            for w in set(norm(ten).split()):
                if len(w) > 2:
                    en_df[w] += 1
            seen = set()
            for span in CJK.findall(tcn or ''):
                for n in (2, 3, 4):
                    for i in range(len(span) - n + 1):
                        seen.add(span[i:i + n])
            for t in seen:
                cn_df[t] += 1

    def idf(df):
        return math.log((titles + 1) / (df + 1))
    return {'en': {w: idf(c) for w, c in en_df.items()},
            'cn': {t: idf(c) for t, c in cn_df.items()},
            'default': idf(0), 'titles': titles}


def q_terms(cn):
    """The question's Chinese search terms: window, trim, THEN stop-filter.

    Order matters and got this wrong once. trim_cjk turns 是什么 into 什么, so a
    stop list applied before trimming is bypassed by every n-gram that happens to
    carry a leading particle -- which is how 什么 became the top-scoring "match"
    for the DE3 question. Both the matcher and the question-IDF must use this one
    function, or the frequencies are computed over different tokens than the ones
    being matched.
    """
    out = set()
    for t in cn_terms(cn):
        t = trim_cjk(t)
        if t and t not in CN_STOP:
            out.add(t)
    return out



def question_df(uniq):
    """Document frequency of each term across the QUESTIONS themselves.

    Title-IDF alone rates `work` and 工作 as rare and therefore valuable, because
    few node titles contain them -- but they come from the question's phrasing
    ("how does it work"), not its topic. A term common across the question set
    is a phrasing artifact whatever the titles say, so the two frequencies are
    combined and the lower weight wins.
    """
    import math
    en_df, cn_df = collections.Counter(), collections.Counter()
    for q in uniq.values():
        for w in set(keywords(q['en'])):
            en_df[w] += 1
        for t in q_terms(q['cn']):
            cn_df[t] += 1
    n = len(uniq)
    return ({w: math.log((n + 1) / (c + 1)) for w, c in en_df.items()},
            {t: math.log((n + 1) / (c + 1)) for t, c in cn_df.items()},
            math.log(n + 1))


def cn_title_hits(cnt, title_cn):
    """Matched CJK n-grams, de-duplicated by POSITION in the title.

    结构与功 / 构与功能 / 的结构与 are three windows over one phrase and none
    contains another, so containment-based de-duplication counted the phrase
    three times and a generic title outscored a specific one. Claim character
    spans instead: longest first, and skip anything overlapping a span already
    taken.
    """
    spans, kept = [], []
    for c in sorted(cnt, key=len, reverse=True):
        i = title_cn.find(c)
        while i >= 0:
            if not any(i < b and a < i + len(c) for a, b in spans):
                spans.append((i, i + len(c)))
                kept.append(c)
                break
            i = title_cn.find(c, i + 1)
    return kept


GENERIC_TERM_MAX = 2   # a term matching more than this many of the 98 questions
                       # is not evidence about any one of them


def generic_terms(rows, uniq):
    """Vocabulary terms too generic to be evidence, measured not guessed.

    Only 52 distinct terms match any question at all, and the distribution is
    almost flat: p90 is one question. The exceptions are `protein` (6 questions),
    蛋白质 (4) and 聚合 (3) -- and those three were exactly the ones pulling three
    unrelated questions onto one node. The cut at 2 therefore sits in a real gap
    between two separated populations rather than on a slope, which is the only
    kind of threshold this project accepts without a stated caveat.
    """
    allterms = set()
    for r in rows:
        allterms |= set(r[4])
    df = collections.Counter()
    for t in allterms:
        tl = t.lower().strip()
        for q in uniq.values():
            if CJK.search(t):
                if len(t) >= 2 and t in q['cn']:
                    df[t] += 1
            elif len(tl) >= 4 and word_in(tl, norm(q['en'])):
                df[t] += 1
    return set(t for t, c in df.items() if c > GENERIC_TERM_MAX)



def prepare(corpus):
    """Flatten to (corpus, id, title_en, title_cn, terms, norm_body), once.

    node_terms() parses; calling it inside the question loop would re-parse every
    node 98 times.
    """
    rows = []
    for label, nodes in corpus.items():
        for nid, ten, tcn, body in nodes:
            nt = norm(ten)
            # token sets, not strings: `w in text` is substring matching (which
            # let `gram` match `Reprogramming`), and a word-boundary regex over a
            # 40 kB body 400 000 times is what made this tool take minutes.
            rows.append((label, nid, nt, tcn or '', node_terms(body),
                         set(nt.split()), set(norm(body).split())))
    return rows


def term_hits(q_en_norm, q_cn, kws, terms, generic):
    """Terms of the node that the question actually names.

    The controlled vocabulary is the most precise signal available: a term is a
    concept somebody decided was worth naming, so a question containing one is
    almost certainly about that node. Latin terms match on word boundaries --
    substring matching is what let `gram` match `Reprogramming`.
    """
    hits = []
    for t in terms:
        tl = t.lower().strip()
        if not tl or t in generic:
            continue
        if CJK.search(t):
            if len(t) >= 2 and t in q_cn:
                hits.append(t)
        elif len(tl) >= 4 and word_in(tl, q_en_norm):   # term may be a phrase
            hits.append(t)
        elif len(tl) >= 3 and tl in kws:
            hits.append(t)
    return hits


def score(q_en_norm, q_cn, kws, cnt, row, idf, qdf, generic):
    """terms > title > body, each weighted by how discriminative the term is."""
    q_en, q_cn_df, q_def = qdf
    _, _, t_en, t_cn, terms, t_tok, b_tok = row

    def wt_en(w):
        return min(idf['en'].get(w, idf['default']), q_en.get(w, q_def))

    def wt_cn(c):
        return min(idf['cn'].get(c, idf['default']), q_cn_df.get(c, q_def))

    hits, total = [], 0.0
    for t in term_hits(q_en_norm, q_cn, kws, terms, generic):
        total += 25
        hits.append('term:' + t)
    for w in kws:
        if w in t_tok:
            total += 10 * wt_en(w)
            hits.append(w)
    for c in cn_title_hits(cnt, t_cn):
        total += 10 * wt_cn(c)
        hits.append(c)
    total += sum(0.2 * wt_en(w) for w in kws if w in b_tok)
    return total, hits


def main():
    corpus = load_corpora()
    for label, nodes in corpus.items():
        print('%-12s %4d nodes' % (label, len(nodes)), file=sys.stderr)

    idf = build_idf(corpus)
    rows = load_questions()
    assert len(rows) == 109, 'expected 109 sheet questions, got %d' % len(rows)

    # dedupe on the normalised English, keeping every sheet reference
    uniq = collections.OrderedDict()
    for r in rows:
        k = re.sub(r'[^a-z0-9]', '', r['en'].lower())
        ref = '%s %s %d' % (r['sheet'], r['section'].split()[0], r['num'])
        if k in uniq:
            uniq[k]['refs'].append(ref)
        else:
            uniq[k] = {'en': r['en'], 'cn': r['cn'], 'section': r['section'], 'refs': [ref]}
    assert len(uniq) == 98, 'expected 98 unique questions, got %d' % len(uniq)

    qdf = question_df(uniq)
    rows_flat = prepare(corpus)
    generic = generic_terms(rows_flat, uniq)
    print('generic terms suppressed: %s' % sorted(generic), file=sys.stderr)

    out = []
    for k, q in uniq.items():
        kws = keywords(q['en'])
        cnt = q_terms(q['cn'])
        cands = []
        q_en_norm = norm(q['en'])
        for row in rows_flat:
            sc, th = score(q_en_norm, q['cn'], kws, cnt, row, idf, qdf, generic)
            if sc >= 20:                      # a term hit, or two specific title hits
                cands.append({'corpus': row[0], 'id': row[1], 'title': (row[2] or row[3])[:90],
                              'score': round(sc, 1), 'hits': th[:6]})
        cands.sort(key=lambda c: -c['score'])
        # Split, do not rank. A candidate found through the controlled
        # vocabulary is a different kind of evidence from one found by fuzzy
        # title overlap, and averaging them into one ranked list hides which is
        # which. Everything measured on this material says the same thing:
        # term hits are worth acting on, the rest is a shortlist for a human.
        confident = [c for c in cands if any(h.startswith('term:') for h in c['hits'])]
        shortlist = [c for c in cands if c not in confident][:6]
        weight = max(3 if r.startswith('S1') else 2 if r.startswith('S2') else 1
                     for r in q['refs'])
        out.append({'en': q['en'], 'cn': q['cn'], 'section': q['section'],
                    'refs': q['refs'], 'weight': weight, 'keywords': kws,
                    'confident': confident[:8], 'shortlist': shortlist})

    path = os.path.join(os.path.dirname(HERE), '_qindex.json')
    json.dump(out, open(path, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    conf = [q for q in out if q['confident']]
    print('', file=sys.stderr)
    print('%d unique questions' % len(out), file=sys.stderr)
    print('  %d with a controlled-vocabulary (term) match  <- act on these'
          % len(conf), file=sys.stderr)
    print('  %d with only a fuzzy shortlist                <- needs a human'
          % len([q for q in out if not q['confident'] and q['shortlist']]), file=sys.stderr)
    print('  %d with nothing at all                        <- candidate gaps'
          % len([q for q in out if not q['confident'] and not q['shortlist']]), file=sys.stderr)
    print('worksheet: %s' % path, file=sys.stderr)
    print('RESULT: PASS', file=sys.stderr)


if __name__ == '__main__':
    main()
