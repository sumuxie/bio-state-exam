# -*- coding: utf-8 -*-
"""
追问链在页面上真的渲染出来了吗。

check_chains.py 检查的是数据；这个检查的是**渲染**——数据对但没接上渲染，
页面上什么都不会出现，而且不会报错。这正是这个项目里出过的那类静默失败。

先起服务：  python -m http.server 8797     （在 jiri_bank/ 里）
再跑：      python tools/check_chain_render.py
"""
import io
import sys
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

from playwright.sync_api import sync_playwright   # noqa: E402

URL = 'http://localhost:8797/index.html'
PARENT = 's1-lab-6-tagging-surface-receptor'


def main():
    errors, fails, checks = [], [], 0

    def ck(cond, msg):
        nonlocal checks
        checks += 1
        if not cond:
            fails.append(msg)

    with sync_playwright() as p:
        br = p.chromium.launch()
        pg = br.new_page()
        pg.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
        pg.on('pageerror', lambda e: errors.append(str(e)))
        pg.goto(URL, wait_until='networkidle')

        # 数据到底加载进来没有
        n_chains = pg.evaluate("(window.PESB && window.PESB.chains || []).length")
        ck(n_chains >= 1, f'window.PESB.chains 里有 {n_chains} 条链 —— 数据文件没加载？')

        parent_ok = pg.evaluate(
            "(window.PESB.chains||[]).every(c => "
            "(window.PESB.questions||[]).some(q => q.id === c.parentCard))")
        ck(parent_ok, '有链的 parentCard 找不到对应的题 —— 接线断了，链不会显示')

        # 打开整卷视图。注意这个 app 不是 hash 路由，是 setMode() —— 必须点按钮。
        pg.click('.mode-btn[data-mode="sheets"]')
        pg.wait_for_selector('.sheet-card', timeout=5000)
        pg.wait_for_timeout(400)
        n_cards = pg.eval_on_selector_all('.sheet-card', 'els => els.length')
        ck(n_cards > 0, '整卷视图里一张 .sheet-card 都没有 —— 导航就没走对')

        html = pg.content()
        ck('sheet-chain' in html, '页面上没有 .sheet-chain —— 渲染没接上')

        n_levels = pg.eval_on_selector_all('.sheet-chain .chain-level', 'els => els.length')
        ck(n_levels >= 6, f'渲染出 {n_levels} 个 .chain-level，应至少 6（6 层 + 旁支）')

        # 折叠状态：答案默认不可见，点开才出来。这是这一层的全部意义。
        vis = pg.eval_on_selector_all(
            '.sheet-chain .chain-level .cl-a',
                        # 必须用 checkVisibility()：closed <details> 在 Chromium 里是
            # content-visibility，布局照算，offsetParent 和 offsetHeight 都非空。
            'els => els.filter(e => e.checkVisibility()).length')
        ck(vis == 0, f'{vis} 个答案默认就是可见的 —— 那练的是再认，不是自由提取')

        first = pg.query_selector('.sheet-chain .chain-level')
        if first:
            first.evaluate("el => el.open = true")
            pg.wait_for_timeout(200)
            vis2 = pg.eval_on_selector_all(
                '.sheet-chain .chain-level .cl-a',
                            # 必须用 checkVisibility()：closed <details> 在 Chromium 里是
            # content-visibility，布局照算，offsetParent 和 offsetHeight 都非空。
            'els => els.filter(e => e.checkVisibility()).length')
            ck(vis2 >= 1, '点开之后答案仍然不可见 —— 翻面坏了')

        # 每一层的英文都要能听（HANDOFF §4 硬规矩 5）
        say = pg.eval_on_selector_all('.sheet-chain .say-btn', 'els => els.length')
        ck(say >= 12, f'链里只有 {say} 个 🔊 按钮，每层问题和答案都该有')

        br.close()

    ck(not errors, f'控制台报错 {len(errors)} 条：' + ' | '.join(errors[:3]))

    print(f'链 {n_chains} 条 · 层 {n_levels} · 🔊 {say} · 检查 {checks} 项')
    if fails:
        print(f'\n{len(fails)} FAIL')
        for f in fails:
            print('  ✗ ' + f)
        return 1
    print('ALL CHECKS PASSED')
    return 0


if __name__ == '__main__':
    sys.exit(main())
