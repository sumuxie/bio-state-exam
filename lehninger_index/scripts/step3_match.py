# Step 3b: propose, from the data, which Lehninger section each Czech section corresponds to.
#
# v1 scored terms only and put "Classification and nomenclature of enzymes" in 24.2 DNA
# Supercoiling: with no structural prior, a couple of stray term hits anywhere in 1092 pages
# can win. v2 uses three signals:
#
#   1. CHAPTER PRIOR. Aggregate every term in a Czech chapter (58-186 of them) and score
#      Lehninger CHAPTERS. At that scale the signal is overwhelming, so the resulting
#      shortlist is trustworthy, and it stops a section from landing 20 chapters away.
#   2. TITLE MATCH against Lehninger's own headings -- all 117 section titles AND all 649
#      sub-headings. "Mutarotation", "Photorespiration", "The Glyoxylate Cycle" are literally
#      headings in Lehninger, and that is far stronger evidence than scattered term hits.
#   3. TERM DENSITY, IDF-weighted, as in v1, now restricted to the shortlist.
#
# Everything PROPOSED here carries its evidence. A weak match reports as weak.
import io, os, re, json, math, pickle, bisect

OUT = r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index"
log = io.open(os.path.join(OUT, "_step3b_match.txt"), "w", encoding="utf-8")
def p(*a): log.write(" ".join(str(x) for x in a) + "\n")

B_TEXT = pickle.load(open(os.path.join(OUT, "_B_text.pkl"), "rb"))
toc = json.load(io.open(os.path.join(OUT, "lehninger_B_toc.json"), encoding="utf-8"))
ENTRIES = toc["entries"]
SECS = sorted([r for r in ENTRIES if r["kind"] == "section"], key=lambda r: r["page_b"])
START = [r["page_b"] for r in SECS]
SEC_IDX = {s["section"]: i for i, s in enumerate(SECS)}

PAGE_SEC = {}
for i, s in enumerate(SECS):
    for pb in range(s["page_b"], s["page_b_end"] + 1):
        PAGE_SEC[pb] = i
NBODY = len(PAGE_SEC)
SEC_LEN = [s["page_b_end"] - s["page_b"] + 1 for s in SECS]
SEC_CH = [s["chapter_num"] for s in SECS]
LOWER = {pb: B_TEXT[pb - 1].lower() for pb in PAGE_SEC}
p("Lehninger body pages inside numbered sections:", NBODY, "across", len(SECS), "sections")

cz = json.load(io.open(os.path.join(OUT, "cz_skeleton.json"), encoding="utf-8"))

STOP = {"enzyme", "protein", "reaction", "acid", "cell", "energy", "molecule", "structure",
        "metabolism", "synthesis", "bond", "group", "chain", "water", "membrane", "transport"}
TITLE_STOP = set("""a an the and or of in to for is are be as by with from on at its их
their this that these those two three four other others some can how why what which
have has between within into across during more most also not only same such than then
there when where while both each all any many much per via using used use general
introduction overview principles types kinds forms basic further mutual relation relations
levels properties structure structures function functions formation degradation biosynthesis
metabolism reactions reaction process processes mechanism mechanisms classification
nomenclature definition definitions occurrence influence measurement""".split())

def clean(t):
    t = re.sub(r"\([^)]*\)", " ", t)
    t = re.sub(r"[^A-Za-z0-9\- ]", " ", t)
    return " ".join(t.split()).lower()

def toks(t):
    return {w for w in re.findall(r"[a-z]{4,}", clean(t)) if w not in TITLE_STOP}

# ---------- term index ----------
terms = sorted({clean(t) for s in cz for t in s["terms"]})
terms = [t for t in terms if len(t) >= 6 and t not in STOP]
HITS, DF = {}, {}
for t in terms:
    per, n = {}, 0
    for pb, txt in LOWER.items():
        c = txt.count(t)
        if c:
            n += 1
            per[PAGE_SEC[pb]] = per.get(PAGE_SEC[pb], 0) + c
    if n:
        HITS[t], DF[t] = per, n
p("searchable terms:", len(terms), " located in Lehninger:", len(HITS))
def idf(t): return math.log(NBODY / DF[t])

# ---------- signal 1: chapter prior ----------
p("")
p("=== signal 1: Czech chapter -> Lehninger chapters (aggregated over every term) ===")
CH_SHORTLIST = {}
for c in range(1, 11):
    ts = {clean(x) for s in cz if s["chapter"] == c for x in s["terms"]}
    ts = {t for t in ts if t in HITS}
    sc = {}
    for t in ts:
        w = idf(t)
        for si, n in HITS[t].items():
            ch = SEC_CH[si]
            sc[ch] = sc.get(ch, 0.0) + w * n
    # normalise by chapter length so long chapters do not win by size
    chlen = {}
    for i, s in enumerate(SECS):
        chlen[SEC_CH[i]] = chlen.get(SEC_CH[i], 0) + SEC_LEN[i]
    sc = {k: v / math.sqrt(chlen[k]) for k, v in sc.items()}
    top = max(sc.values())
    keep = sorted([k for k, v in sc.items() if v >= 0.15 * top], key=lambda k: -sc[k])
    CH_SHORTLIST[c] = keep
    ranked = sorted(sc.items(), key=lambda kv: -kv[1])
    p(f'  CZ ch{c:>2} ({len(ts):>3} terms) -> ' +
      ", ".join(f"L{k}({v/top:.2f})" for k, v in ranked[:8]))
    p(f'          shortlist: {keep}')

# ---------- signal 2: Lehninger headings ----------
HEAD = []           # (section_index, title, token set)
for r in ENTRIES:
    if r["kind"] in ("section", "subheading") and r["section"] in SEC_IDX:
        HEAD.append((SEC_IDX[r["section"]], r["title"], toks(r["title"])))
p("")
p("Lehninger headings available for title matching:", len(HEAD))

def title_scores(cz_title, allowed):
    q = toks(cz_title)
    if not q: return {}, None
    out, best = {}, None
    for si, title, ht in HEAD:
        if allowed and SEC_CH[si] not in allowed: continue
        if not ht: continue
        inter = q & ht
        if not inter: continue
        j = len(inter) / len(q | ht)
        v = j * (1 + len(inter))
        if v > out.get(si, 0):
            out[si] = v
        if best is None or v > best[0]:
            best = (v, title, si)
    return out, best

# ---------- combine ----------
rows = []
for s in cz:
    allowed = set(CH_SHORTLIST[s["chapter"]])
    ts = [clean(x) for x in s["terms"]]
    ts = {t for t in ts if t in HITS}
    term_sc = {}
    fired = {}
    for t in ts:
        w = idf(t)
        for si, n in HITS[t].items():
            if SEC_CH[si] not in allowed: continue
            term_sc[si] = term_sc.get(si, 0.0) + w * n / math.sqrt(SEC_LEN[si])
            fired.setdefault(si, []).append((t, n, round(w, 1)))
    tmax = max(term_sc.values()) if term_sc else 0.0
    tit_sc, best_head = title_scores(s["enTitle"], allowed)
    hmax = max(tit_sc.values()) if tit_sc else 0.0

    total = {}
    for si in set(term_sc) | set(tit_sc):
        a = term_sc.get(si, 0.0) / tmax if tmax else 0.0
        b = tit_sc.get(si, 0.0) / hmax if hmax else 0.0
        total[si] = 0.55 * a + 0.45 * b
    ranked = sorted(total.items(), key=lambda kv: -kv[1])[:4]
    margin = (ranked[0][1] / ranked[1][1]) if len(ranked) > 1 and ranked[1][1] > 0 else None

    rows.append({
        "chapter": s["chapter"], "section": s["section"], "enTitle": s["enTitle"],
        "czTitle": s["czTitle"], "cz_pages": s["pages"], "cz_page_count": s["page_count"],
        "cz_nodes": s["nodes"], "node_ids": s["node_ids"],
        "terms_total": len(s["terms"]), "terms_located": len(ts),
        "chapter_shortlist": sorted(allowed),
        "best_heading": best_head[1] if best_head else None,
        "proposals": [{
            "section": SECS[si]["section"], "title": SECS[si]["title"],
            "page_a_print": SECS[si]["page_a_print"],
            "page_a_print_end": SECS[si]["page_a_print_end"],
            "page_b": SECS[si]["page_b"], "page_b_end": SECS[si]["page_b_end"],
            "score": round(sc, 3),
            "term_evidence": sorted(fired.get(si, []), key=lambda x: -x[2] * x[1])[:5],
        } for si, sc in ranked],
        "margin": round(margin, 2) if margin else None,
    })

json.dump(rows, io.open(os.path.join(OUT, "cz_to_lehninger_proposed.json"), "w",
          encoding="utf-8"), ensure_ascii=False, indent=1)

p("")
p("=== proposed Lehninger section for each Czech section ===")
p("m = top score / runner-up.  ! = needs a human look (m<1.25, or fewer than 3 terms located)")
p("")
cur, weak, none_ = None, [], []
for r in rows:
    if r["chapter"] != cur:
        cur = r["chapter"]; p(f'--- Czech chapter {cur} ---')
    if not r["proposals"]:
        none_.append(r)
        p(f'  {r["section"]:<8} pp.{r["cz_pages"][0]}-{r["cz_pages"][-1]:<4} '
          f'{r["enTitle"][:42]:<42}  NO PROPOSAL')
        continue
    t0 = r["proposals"][0]
    bad = (r["margin"] is not None and r["margin"] < 1.25) or r["terms_located"] < 3
    if bad: weak.append(r)
    p(f'  {"!" if bad else " "} {r["section"]:<8} pp.{r["cz_pages"][0]}-{r["cz_pages"][-1]:<4} '
      f'{r["enTitle"][:42]:<42} -> {t0["section"]:<6} A pp.{t0["page_a_print"]}-'
      f'{t0["page_a_print_end"]:<5} m={r["margin"] if r["margin"] else "inf"}')

p("")
p("confident: %d of %d   needs a look: %d   no proposal: %d"
  % (len(rows) - len(weak) - len(none_), len(rows), len(weak), len(none_)))
p("")
p("=== the ones needing a look, with their evidence ===")
for r in weak + none_:
    p(f'\n  ch{r["chapter"]} {r["section"]} -- {r["enTitle"][:60]}')
    p(f'      {r["terms_located"]}/{r["terms_total"]} terms located; '
      f'chapter shortlist {r["chapter_shortlist"]}; best heading: {r["best_heading"]}')
    for q in r["proposals"][:3]:
        p(f'      {q["score"]:>6.3f}  {q["section"]:<6} {q["title"][:50]:<50} A pp.{q["page_a_print"]}-{q["page_a_print_end"]}')
        if q["term_evidence"]:
            p(f'              ' + ", ".join(f'{t}x{n}' for t, n, w in q["term_evidence"][:4]))
log.close()
print("done")
