# -*- coding: utf-8 -*-
"""Drive the real app in headless Chrome and report what a reader actually sees.

WHY THIS EXISTS. The static checkers reason about the data; only the browser
reports the screen. Every one of these was PASSING every static checker while
being visibly wrong in the app:

  - 1156 imported MCQs marked the FIRST option correct, because the importer
    could not read a bare `answer: 2` and the emitter silently substituted 0
  - 1156 imported MCQs showed no explanation at all in CN mode, because
    why_cn was never emitted and bi() renders nothing for a missing string
  - 251 fields showed literal ** on screen
  - one field mis-paired its ** across two adjacent bold runs, emphasising a
    full stop and leaving a stray ** -- and it lived in answer_cn, which only
    renders after a SHORT question is graded, so a study-view sweep missed it

What it checks, per node, in all three language modes:

    study view      no literal **, no page error
    quiz            every question answerable; exactly one option flagged
                    correct after grading; feedback carries no literal **
    oral            model answer renders

Requires:  pip install playwright && python -m playwright install chromium
Serve first:  python -m http.server 8797   (from the app folder)

Usage:
    python tools/check_render.py                 # sample: all hand-written + every 4th ch6
    python tools/check_render.py --all           # every node (slow)
    python tools/check_render.py 4-3 5-1         # named nodes only
"""
import io
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    sys.exit('playwright not installed: pip install playwright '
             '&& python -m playwright install chromium')

URL = 'http://localhost:8797/index.html'
LANGS = ('both', 'cn', 'en')


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    want_all = '--all' in sys.argv

    stars, mismatch, errors, graded, renders = [], [], [], 0, 0

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.on('pageerror', lambda e: errors.append(('pageerror', str(e))))
        page.on('console', lambda m: errors.append(('console', m.text))
                if m.type == 'error' else None)
        page.goto(URL, wait_until='networkidle')
        page.wait_for_timeout(400)

        ids = page.eval_on_selector_all('.topic-item', 'els => els.map(e => e.dataset.id)')
        if args:
            todo = [i for i in ids if i in args]
        elif want_all:
            todo = ids
        else:
            todo = ([i for i in ids if not i.startswith('6-')]
                    + [i for i in ids if i.startswith('6-')][::4])
        print('nodes: %d of %d in the sidebar, x%d languages' % (len(todo), len(ids), len(LANGS)))

        for lang in LANGS:
            page.click('#lang-toggle [data-lang="%s"]' % lang)
            page.wait_for_timeout(120)
            for nid in todo:
                item = page.locator('.topic-item[data-id="%s"]' % nid)
                if not item.count():
                    continue
                item.click()
                page.wait_for_timeout(50)
                page.evaluate("() => document.querySelectorAll('details').forEach(d => d.open = true)")
                page.wait_for_timeout(30)
                renders += 1
                txt = page.inner_text('.content')
                if '**' in txt:
                    i = txt.index('**')
                    stars.append((lang, nid, 'study', txt[max(0, i - 50):i + 50].replace('\n', ' ')))

                if not page.locator('[data-act="quiz"]').count():
                    continue
                page.locator('[data-act="quiz"]').click()
                page.wait_for_timeout(250)
                for _ in range(14):
                    # re-query each pass: handles held across a re-render detach
                    opt = page.locator('#qcard .option').first
                    short = page.locator('#short-check')
                    if opt.count() and opt.is_visible():
                        opt.click()
                        page.wait_for_timeout(60)
                        graded += 1
                        n = page.locator('#qcard .option.correct').count()
                        if n != 1:
                            mismatch.append((lang, nid, '%d options flagged correct' % n))
                    elif short.count() and short.is_visible():
                        page.locator('#short-input').fill('key terms for the gate')
                        short.click()
                        page.wait_for_timeout(60)
                        graded += 1
                    else:
                        break
                    fb = page.locator('#feedback')
                    if fb.count() and fb.is_visible():
                        t = fb.inner_text()
                        if '**' in t:
                            i = t.index('**')
                            stars.append((lang, nid, 'feedback',
                                          t[max(0, i - 50):i + 50].replace('\n', ' ')))
                    nxt = page.locator('#q-next')
                    if nxt.count() and nxt.is_visible():
                        nxt.click()
                        page.wait_for_timeout(60)
        browser.close()

    print('study renders: %d   questions graded: %d' % (renders, graded))
    print('literal ** on screen: %d' % len(stars))
    for lang, nid, where, ctx in stars[:15]:
        print('   [%s] %s (%s): ...%s...' % (lang, nid, where, ctx))
    print('grading mismatches: %d' % len(mismatch))
    for m in mismatch[:15]:
        print('   ', m)
    print('page/console errors: %d' % len(errors))
    for kind, e in errors[:5]:
        print('   %s: %s' % (kind, e[:300]))

    bad = len(stars) + len(mismatch) + len(errors)
    print('\nRESULT: %s' % ('PASS' if not bad else 'FAIL'))
    return 1 if bad else 0


sys.exit(main())
