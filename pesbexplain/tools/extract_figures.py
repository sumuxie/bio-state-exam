"""Extract the picture parts of lecture slides — not the whole slide.

Full-page renders were tried and rejected: they duplicate text that is already
in the node's own `points`, so the picture gets lost in the noise. This pulls
only the embedded images out of the slide deck, per slide.

Two sources, both giving an exact image-to-slide mapping with no guessing:

  * .pptx  -> ppt/slides/_rels/slideN.xml.rels lists the media each slide
             references. Plain zipfile + regex; python-pptx is not installed
             and is not needed. Preferred where available, because it holds
             the original image rather than a re-encoded copy.
  * .pdf   -> PyMuPDF page.get_images(). Used for L1-L5, L11 and L12, which
             have no usable pptx (only 5 PPT files exist, and two of those
             are the old binary .ppt format).

Both sources are full of furniture: the deck's header strip, the university
logo, bullet glyphs. Three filters remove it, and every rejection is printed
with its reason, so a real figure can never disappear silently.

Slide number == PDF page number, verified for every deck by checking that the
highest slide number any node cites falls inside that deck's page count.

Usage:
    python tools/extract_figures.py L1 5 8          # write files
    python tools/extract_figures.py L1 5 8 --dry    # report only
"""
import sys, os, re, io, zipfile, hashlib
import fitz

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

SRC = r"C:\Users\Admin\Downloads\PESB"

# lecture key -> (pdf, pptx or None)
LECTURE = {
    "L1":  (os.path.join(SRC, "pdf", "PESB_#1.pdf"), None),
    "L2":  (os.path.join(SRC, "pdf", "PESB_#2.pdf"), None),
    "L3":  (os.path.join(SRC, "pdf", "PESB_#3.pdf"), None),
    "L4":  (os.path.join(SRC, "pdf", "PESB_#4.pdf"), None),
    "L5":  (os.path.join(SRC, "pdf", "PESB_#5.pdf"), None),
    # L7 and L8 are one 50-slide deck with continuous numbering: nodes cite
    # s.2-29 as L7 and s.31-49 as L8, and both land inside the same file.
    "L7":  (os.path.join(SRC, "pdf", "PESB_2025_#78.pdf"), os.path.join(SRC, "PESB_2025_#78.pptx")),
    "L8":  (os.path.join(SRC, "pdf", "PESB_2025_#78.pdf"), os.path.join(SRC, "PESB_2025_#78.pptx")),
    "L9A": (os.path.join(SRC, "pdf", "PEPSB_#9_Diversity.pdf"), os.path.join(SRC, "PEPSB_#9_Diversity.pptx")),
    "L9B": (os.path.join(SRC, "pdf", "PESB_#9_screenselect (1).pdf"), os.path.join(SRC, "PESB_#9_screenselect (1).pptx")),
    # .ppt, old binary format — not a zip, so the PDF is the only route.
    "L11": (os.path.join(SRC, "pdf", "PESB_#11_minimal cells.pdf"), None),
    "L12": (os.path.join(SRC, "pdf", "PESB_#12_metabolic engineering.pdf"), None),
}

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "img", "figures")

MIN_W, MIN_H = 220, 160     # below this it is a glyph, an icon or a rule
MAX_ASPECT   = 6.0          # a 1536x48 header strip has aspect 32
REPEAT_FRAC  = 0.25         # an image on a quarter of all slides is furniture

# An Image record is (sha1, width, height, bytes, extension).


def harvest_pdf(path):
    doc = fitz.open(path)
    out = {}
    for pno in range(1, doc.page_count + 1):
        rows = []
        for info in doc[pno - 1].get_images(full=True):
            pix = fitz.Pixmap(doc, info[0])
            if pix.n - pix.alpha >= 4:              # CMYK: convert before saving
                pix = fitz.Pixmap(fitz.csRGB, pix)
            data = pix.tobytes("png")
            rows.append((hashlib.sha1(data).hexdigest(), pix.width, pix.height, data, "png"))
            pix = None
        out[pno] = rows
    doc.close()
    return out


def harvest_pptx(path):
    out = {}
    with zipfile.ZipFile(path) as z:
        media = {n: z.read(n) for n in z.namelist() if n.startswith("ppt/media/")}
        for name in z.namelist():
            m = re.match(r"ppt/slides/_rels/slide(\d+)\.xml\.rels$", name)
            if not m:
                continue
            rows = []
            for target in re.findall(r'Target="\.\./media/([^"]+)"', z.read(name).decode("utf-8")):
                data = media.get("ppt/media/" + target)
                if data is None:
                    continue
                ext = os.path.splitext(target)[1].lstrip(".").lower() or "bin"
                try:
                    px = fitz.Pixmap(data)
                    w, h = px.width, px.height
                except Exception:
                    w = h = 0                        # EMF/WMF vector: no raster size
                rows.append((hashlib.sha1(data).hexdigest(), w, h, data, ext))
            out[int(m.group(1))] = rows
    return out


def harvest(lec):
    """-> (source path, {slide number: [Image, ...]})"""
    pdf, pptx = LECTURE[lec]
    src = pptx if pptx and os.path.exists(pptx) else pdf
    return src, (harvest_pptx(src) if src.endswith(".pptx") else harvest_pdf(src))


def classify(pages):
    """-> {sha: ('keep'|'drop', reason)}. Whole-deck statistics, so this must
    be computed once per deck and not per slide range."""
    seen, size = {}, {}
    for pno, rows in pages.items():
        for sha, w, h, _d, _e in rows:
            seen.setdefault(sha, set()).add(pno)
            size.setdefault(sha, (w, h))
    n_pages = max(1, len(pages))

    verdicts = {}
    for sha, on in seen.items():
        w, h = size[sha]
        if len(on) / n_pages >= REPEAT_FRAC:
            verdicts[sha] = ("drop", "on %d/%d slides — deck furniture" % (len(on), n_pages))
        elif w < MIN_W or h < MIN_H:
            verdicts[sha] = ("drop", "%dx%d — below %dx%d" % (w, h, MIN_W, MIN_H))
        elif max(w, h) / max(1, min(w, h)) > MAX_ASPECT:
            verdicts[sha] = ("drop", "%dx%d — aspect %.1f, a rule or strip"
                             % (w, h, max(w, h) / max(1, min(w, h))))
        else:
            verdicts[sha] = ("keep", "%dx%d" % (w, h))
    return verdicts


def write_slide(lec, pno, rows, verdicts, dry=False, log=True):
    """Write the keepers for one slide. -> [relative path, ...] in slide order."""
    if not dry:
        os.makedirs(OUT, exist_ok=True)
    kept, seq = [], 0
    for sha, w, h, data, ext in rows:
        verdict, why = verdicts[sha]
        if verdict == "drop":
            if log:
                print("    drop  %s  (%s)" % (sha[:8], why))
            continue
        seq += 1
        fname = "%s_s%02d_%d.%s" % (lec, pno, seq, ext)
        rel = "img/figures/" + fname
        if log:
            print("    KEEP  %s  %s  -> %s" % (sha[:8], why, rel))
        if not dry:
            path = os.path.join(OUT, fname)
            with open(path, "wb") as fh:
                fh.write(data)
            assert os.path.getsize(path) > 0, "wrote an empty file: " + path
        kept.append(rel)
    return kept


def run(lec, first, last, dry=False):
    src, pages = harvest(lec)
    print("source: %s (%d slides harvested)" % (os.path.basename(src), len(pages)))
    assert first >= 1 and last <= max(pages), \
        "%s: asked for slides %d-%d but the deck has %d" % (lec, first, last, max(pages))
    verdicts = classify(pages)
    total = 0
    for pno in range(first, last + 1):
        rows = pages.get(pno, [])
        print("\nslide %d — %d embedded image(s)" % (pno, len(rows)))
        total += len(write_slide(lec, pno, rows, verdicts, dry=dry))
    print("\n%d image(s) kept across slides %d-%d%s"
          % (total, first, last, "  (dry run)" if dry else ""))
    return total


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    run(args[0], int(args[1]), int(args[2]), dry="--dry" in sys.argv)
