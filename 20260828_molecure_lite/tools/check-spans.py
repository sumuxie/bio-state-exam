# -*- coding: utf-8 -*-
"""The 极简 view renders ONE bold span per step and hides everything else.

So the span is not emphasis inside a paragraph — it is the whole step as far as
that view is concerned, and it has to stand up alone. biochemie_lite hit this the
hard way: 310 of 479 `en` fields had been bolded across a whole sentence-paragraph,
and app.js's claimOf() falls back to joining several spans, which measured a median
of 393 characters and a worst case of 904. That is not a minimal view.

Checks, per `en` / `cn` / `title_en` / `title_cn` field:
  RUNS    exactly one bold run. Zero means claimOf() falls back to the first
          sentence, which is rarely the claim; two or more means no claim was
          designated and the view joins them.
  LONG    a span over 250 characters — the ceiling biochemie_lite cleared.
  OPENER  a span starting on an unbound "It"/"That"/"This"/"这"/"那", which reads as
          a dangling fragment once the rest of the step is hidden.

    python tools/check-spans.py
"""
import io, pathlib, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

APP = pathlib.Path(__file__).resolve().parent.parent
DATA = APP / "data"

FIELDS = ("en", "cn", "title_en", "title_cn")
OPENER = re.compile(r"^(It|That|This|These|Those)\b|^(这|那|它|其)")

files = sorted(DATA.glob("spine_*.js"))
if not files:
    sys.exit(f"NO SPINE FILES under {DATA} — fix the path before trusting this.")

problems, checked, lens = [], 0, []
for f in files:
    src = f.read_text(encoding="utf-8")
    # Field by field rather than by parsing JS: the value of a field is a single
    # quoted string, and that is all this check needs to see.
    for key in FIELDS:
        for m in re.finditer(r'\b%s:\s*"((?:[^"\\]|\\.)*)"' % key, src):
            val = m.group(1)
            line = src[:m.start()].count("\n") + 1
            checked += 1
            runs = re.findall(r"\*\*(.+?)\*\*", val, re.S)
            if val.count("**") % 2:
                problems.append((f.name, line, key, "RUNS", "odd number of ** markers"))
                continue
            if len(runs) != 1:
                problems.append((f.name, line, key, "RUNS",
                                 f"{len(runs)} bold run(s), need exactly 1"))
                continue
            span = re.sub(r"\s+", " ", runs[0]).strip()
            lens.append(len(span))
            if len(span) > 250:
                problems.append((f.name, line, key, "LONG",
                                 f"span is {len(span)} chars: {span[:70]}…"))
            if OPENER.match(span):
                problems.append((f.name, line, key, "OPENER",
                                 f"span opens on an unbound reference: {span[:70]}…"))

print(f"{len(files)} file(s), {checked} field(s) checked")
if lens:
    lens.sort()
    print(f"span length  min {lens[0]}  median {lens[len(lens)//2]}  max {lens[-1]}"
          f"   (biochemie_lite reference: median 138-145, max 243)")
print()
for row in problems:
    print("  {0}:{1}  {2}  {3}  {4}".format(*row))
print(f"\n{len(problems)} problem(s)" if problems else "\nno problems")
sys.exit(1 if problems else 0)
