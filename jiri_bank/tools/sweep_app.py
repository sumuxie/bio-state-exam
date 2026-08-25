# -*- coding: utf-8 -*-
"""Sweep any of the study apps for literal ** on screen.
   usage: python sweep_app.py <url> [max_nodes]
"""
import io
import sys
from playwright.sync_api import sync_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

url = sys.argv[1]
cap = int(sys.argv[2]) if len(sys.argv) > 2 else 9999
bad, errors, renders, strong = [], [], 0, 0

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.on('pageerror', lambda e: errors.append(str(e)))
    pg.goto(url, wait_until='networkidle')
    pg.wait_for_timeout(500)

    ids = pg.eval_on_selector_all('.topic-item', 'els => els.map(e => e.dataset.id)')
    if not ids:
        ids = pg.eval_on_selector_all('[data-id]', 'els => els.map(e => e.dataset.id)')
    ids = [i for i in ids if i][:cap]
    print('nodes found:', len(ids))

    for lang in ('both', 'cn'):
        el = pg.query_selector('#lang-toggle [data-lang="%s"]' % lang)
        if el:
            el.click()
            pg.wait_for_timeout(120)
        for nid in ids:
            it = pg.locator('.topic-item[data-id="%s"]' % nid)
            if not it.count():
                continue
            it.first.click()
            pg.wait_for_timeout(35)
            pg.evaluate("() => document.querySelectorAll('details').forEach(d => d.open = true)")
            pg.wait_for_timeout(20)
            renders += 1
            root = '.content' if pg.query_selector('.content') else 'body'
            t = pg.inner_text(root)
            strong += pg.eval_on_selector_all(root + ' strong', 'e => e.length')
            if '**' in t:
                i = t.index('**')
                bad.append((lang, nid, t[max(0, i - 55):i + 55].replace('\n', ' ')))
    b.close()

print('renders: %d   <strong> rendered: %d' % (renders, strong))
print('literal ** on screen: %d' % len(bad))
for lang, nid, ctx in bad[:12]:
    print('   [%s] %s: ...%s...' % (lang, nid, ctx))
print('page errors: %d' % len(errors))
for e in errors[:3]:
    print('   ', e[:200])
sys.exit(1 if bad or errors else 0)
