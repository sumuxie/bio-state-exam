import fitz
import pytesseract
from PIL import Image
import os
import sys

os.environ['TESSDATA_PREFIX'] = r"C:\Users\Admin\Downloads\tessdata"
config = '-l ces'

doc = fitz.open('Biochemie.pdf')
os.makedirs('extracted_raw', exist_ok=True)

def ocr_page(page_num):
    page = doc[page_num - 1]
    pix = page.get_pixmap(dpi=200)
    img_path = f'extracted_raw/page_{page_num}.png'
    pix.save(img_path)
    text = pytesseract.image_to_string(Image.open(img_path), config=config)
    return text

print("Extracting sample pages for Chapters 1-3...")

# Chapter 1 key pages: 8, 10, 11, 16, 17, 18
ch1_text = {}
for p in [8, 10, 11, 14, 16, 17, 18]:
    ch1_text[p] = ocr_page(p)
    print(f"Done page {p}")

# Chapter 2 key pages: 21, 23, 24, 26, 27, 33, 34, 36, 37
ch2_text = {}
for p in [21, 23, 24, 26, 27, 33, 34, 36, 37]:
    ch2_text[p] = ocr_page(p)
    print(f"Done page {p}")

# Chapter 3 key pages: 41, 42, 43, 54, 57, 58, 59, 61, 62
ch3_text = {}
for p in [41, 42, 43, 54, 57, 58, 59, 61, 62]:
    ch3_text[p] = ocr_page(p)
    print(f"Done page {p}")

with open('extracted_raw/ch1_3_summary.txt', 'w', encoding='utf-8') as f:
    f.write("=== CHAPTER 1 ===\n")
    for p, txt in ch1_text.items():
        f.write(f"\n--- PAGE {p} ---\n" + txt)
    f.write("\n=== CHAPTER 2 ===\n")
    for p, txt in ch2_text.items():
        f.write(f"\n--- PAGE {p} ---\n" + txt)
    f.write("\n=== CHAPTER 3 ===\n")
    for p, txt in ch3_text.items():
        f.write(f"\n--- PAGE {p} ---\n" + txt)

print("Saved raw OCR output to extracted_raw/ch1_3_summary.txt")
