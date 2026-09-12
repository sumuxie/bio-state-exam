#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""2026-09-11 — OCR the Czech textbook Biochemie.pdf, one text file per PDF page.

The PDF is a scan (Print2PDF, no text layer), so every specific fact quoted in the
oral-exam material has to come from OCR of a named page, never from memory.

Output
------
book/pages/p###.txt          one file per PDF page, UTF-8
book/pages_manifest.tsv      pdf_page, printed_page_guess, chars, words, status, method
book/ocr_recovery.json       pages that needed a rescue pass, and which one won

Dark-scan rescue
----------------
Some pages are scanned so dark that the paper itself comes out at grey ~60 and
tesseract returns nothing at all (p140 was a full page of text returning 0 chars).
A page whose plain pass is thin is retried with contrast stretching and with
inversion; the variant that yields the most characters wins and is recorded.

Resumable: a page whose .txt already exists and is non-empty is skipped.
Fails loudly: no bare excepts, and the run ends with assertions on its own output.
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import fitz  # PyMuPDF
import numpy as np
from PIL import Image, ImageFilter

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
PDF = Path(r"C:\Users\Admin\Downloads\Biochemie.pdf")
TESSDATA = HERE / "tessdata"
OUT = ROOT / "book" / "pages"
MANIFEST = ROOT / "book" / "pages_manifest.tsv"
RECOVERY = ROOT / "book" / "ocr_recovery.json"

DPI = 300
LANG = "ces"
# a page with less than this many characters is flagged, not silently accepted
THIN_PAGE_CHARS = 200


def printed_page_guess(text: str) -> str:
    """The printed folio, if a bare number sits alone on the first or last line."""
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    for ln in (lines[:1] + lines[-1:]) if lines else []:
        m = re.fullmatch(r"(\d{1,3})", ln)
        if m:
            return m.group(1)
    return ""


def render(doc: fitz.Document, index: int) -> Image.Image:
    pix = doc[index].get_pixmap(dpi=DPI, colorspace=fitz.csGRAY)
    return Image.frombytes("L", (pix.width, pix.height), pix.samples)


def stretch(img: Image.Image) -> Image.Image:
    """Rescale grey levels so the ink floor becomes black and the paper becomes white.

    The paper is taken as the median grey level, not a high percentile: the scan
    carries a white margin outside the page, so the 98th percentile is 255 even on a
    page whose paper is grey 63, and anchoring there is a no-op. Anchoring on the
    median is near-identity for a well-exposed page and rescues a dark one.
    """
    a = np.asarray(img, dtype=np.float32)
    lo, hi = float(np.percentile(a, 2)), float(np.median(a))
    if hi - lo < 1:
        return img
    a = np.clip((a - lo) * (255.0 / (hi - lo)), 0, 255)
    return Image.fromarray(a.astype(np.uint8), mode="L")


def adaptive(img: Image.Image) -> Image.Image:
    """Threshold each pixel against a blurred copy of its own neighbourhood."""
    blur = img.filter(ImageFilter.GaussianBlur(radius=25))
    d = np.asarray(img, dtype=np.float32) - np.asarray(blur, dtype=np.float32)
    return Image.fromarray(((d > -8).astype(np.uint8) * 255), mode="L")


def wordscore(text: str) -> int:
    """Letters sitting inside word-like runs, used to rank rescue passes.

    Raw character count is the wrong ranking: an over-thresholded page returns more
    characters than a clean one because the scanning noise reads as punctuation.
    """
    return sum(len(t) for t in re.findall(r"[^\W\d_]{3,}", text, flags=re.UNICODE))


def run_tesseract(img: Image.Image, tmpdir: Path, tag: str) -> str:
    png = tmpdir / f"{tag}.png"
    img.save(png)
    stem = tmpdir / f"{tag}_out"
    cmd = [
        "tesseract",
        str(png),
        str(stem),
        "-l",
        LANG,
        "--tessdata-dir",
        str(TESSDATA),
        "--psm",
        "6",
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        raise RuntimeError(f"tesseract failed on {tag}: {proc.stderr.strip()[:400]}")
    txt_path = stem.with_suffix(".txt")
    if not txt_path.exists():
        raise RuntimeError(f"tesseract wrote no output for {tag}")
    text = txt_path.read_text(encoding="utf-8", errors="replace")
    png.unlink(missing_ok=True)
    txt_path.unlink(missing_ok=True)
    return text


def ocr_page(doc: fitz.Document, index: int, tmpdir: Path) -> tuple[str, str]:
    """Return (text, method). Falls back to rescue passes only when the page is thin."""
    img = render(doc, index)
    tag = f"page_{index + 1:03d}"
    text = run_tesseract(img, tmpdir, tag)
    if len(text.strip()) >= THIN_PAGE_CHARS:
        return text, "plain"

    best, method, best_score = text, "plain", wordscore(text)
    variants = [
        ("stretch", stretch),
        ("adaptive", adaptive),
        ("invert", lambda im: Image.eval(im, lambda v: 255 - v)),
    ]
    for name, fn in variants:
        cand = run_tesseract(fn(img), tmpdir, f"{tag}_{name}")
        score = wordscore(cand)
        if score > best_score:
            best, method, best_score = cand, name, score
    return best, method


def main() -> int:
    if not PDF.exists():
        raise SystemExit(f"source PDF not found: {PDF}")
    if not (TESSDATA / f"{LANG}.traineddata").exists():
        raise SystemExit(f"missing {LANG}.traineddata under {TESSDATA}")

    OUT.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(PDF)
    n = doc.page_count
    print(f"source : {PDF}")
    print(f"pages  : {n}")
    print(f"out    : {OUT}")

    recovery: dict[str, dict] = {}
    if RECOVERY.exists():
        recovery = json.loads(RECOVERY.read_text(encoding="utf-8"))

    written = 0
    skipped = 0
    with tempfile.TemporaryDirectory() as td:
        tmpdir = Path(td)
        for i in range(n):
            target = OUT / f"p{i + 1:03d}.txt"
            if target.exists() and target.stat().st_size > 0:
                skipped += 1
                continue
            text, method = ocr_page(doc, i, tmpdir)
            target.write_text(text, encoding="utf-8")
            written += 1
            if method != "plain":
                recovery[str(i + 1)] = {
                    "method": method,
                    "chars": len(text.strip()),
                    "wordscore": wordscore(text),
                }
                print(f"  rescued page {i + 1} with {method}: {len(text.strip())} chars")
            if written % 10 == 0:
                print(f"  ocr {i + 1}/{n}", flush=True)

    RECOVERY.write_text(
        json.dumps(recovery, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )

    rows = []
    thin = []
    for i in range(n):
        target = OUT / f"p{i + 1:03d}.txt"
        if not target.exists():
            raise AssertionError(f"page {i + 1} produced no file")
        text = target.read_text(encoding="utf-8", errors="replace")
        chars = len(text.strip())
        words = len(text.split())
        status = "ok" if chars >= THIN_PAGE_CHARS else "thin"
        if status == "thin":
            thin.append(i + 1)
        method = recovery.get(str(i + 1), {}).get("method", "plain")
        rows.append((i + 1, printed_page_guess(text), chars, words, status, method))

    with MANIFEST.open("w", encoding="utf-8", newline="\n") as fh:
        fh.write("pdf_page\tprinted_page_guess\tchars\twords\tstatus\tmethod\n")
        for r in rows:
            fh.write("\t".join(str(x) for x in r) + "\n")

    files = sorted(OUT.glob("p*.txt"))
    assert len(files) == n, f"{len(files)} text files for {n} PDF pages"
    assert len(rows) == n, "manifest rows do not match page count"

    print(f"\nwritten {written}, skipped {skipped}, total {n}")
    print(f"manifest: {MANIFEST}")
    print(f"rescued pages: {len(recovery)}")
    print(f"thin pages (<{THIN_PAGE_CHARS} chars): {len(thin)}")
    if thin:
        print("  " + ", ".join(str(p) for p in thin[:40]) + (" ..." if len(thin) > 40 else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
