"""Print one or more spines as readable text, for reading before a merge.

    python tools/dump-spine.py L-25-2-1 key:dna-replication > out.txt

Loads through check-spine.py's own parser, so what is printed is what the linter and
the app see, not a regex's guess at it.
"""
import importlib.util, io, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("cs", ROOT / "tools" / "check-spine.py")
cs = importlib.util.module_from_spec(spec)
_argv, sys.argv = sys.argv, ["check-spine.py"]
try:
    spec.loader.exec_module(cs)
except SystemExit:
    pass
sys.argv = _argv

spines, _bad = cs.load_spines()

buf = io.StringIO()
for key in sys.argv[1:]:
    sp = spines.get(key)
    if sp is None:
        buf.write("!! no spine for %s\n\n" % key)
        continue
    buf.write("======== %s  (%d steps)\n" % (key, len(sp.get("steps") or [])))
    for f in ("title_en", "title_cn"):
        if sp.get(f):
            buf.write("%s: %s\n" % (f, sp[f]))
    if sp.get("assumed"):
        buf.write("assumed: %s\n" % ", ".join(sp["assumed"]))
    for t in sp.get("terms") or []:
        buf.write("TERM %s / %s :: %s\n" % (t.get("en"), t.get("cn"), t.get("def_en", "")))
    for i, s in enumerate(sp.get("steps") or []):
        buf.write("\n-- step %d\n" % i)
        for f in ("link_en", "link_cn", "recall_en", "recall_cn", "en", "cn", "src",
                  "beyond", "beyondNote", "openQuestion_en", "openQuestion_cn"):
            if s.get(f):
                buf.write("  %-16s %s\n" % (f + ":", s[f]))
        for r in s.get("see") or []:
            buf.write("  see:             %s | %s\n" % (r.get("id"), r.get("en")))
    buf.write("\n")

out = buf.getvalue()
if len(sys.argv) > 1 and sys.argv[-1].endswith(".txt"):
    pass
sys.stdout.reconfigure(encoding="utf-8")
print(out)
