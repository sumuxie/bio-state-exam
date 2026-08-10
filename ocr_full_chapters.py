import fitz
import pytesseract
from PIL import Image
import os

os.environ['TESSDATA_PREFIX'] = r"C:\Users\Admin\Downloads\tessdata"
config = '-l ces'

doc = fitz.open('Biochemie.pdf')
os.makedirs('extracted_full_ch1_3', exist_ok=True)

print("Starting OCR extraction for Pages 8 to 65 (Chapters 1, 2, 3)...")

pages_text = {}
for p in range(8, 66): # 8 to 65 inclusive
    page = doc[p - 1]
    pix = page.get_pixmap(dpi=300)
    img_path = f'extracted_full_ch1_3/page_{p}.png'
    pix.save(img_path)
    
    text = pytesseract.image_to_string(Image.open(img_path), config=config)
    # Clean watermark line if present
    text_clean = "\n".join([line for line in text.splitlines() if "Software602" not in line])
    pages_text[p] = text_clean
    print(f"Processed Page {p}/65")

with open('extracted_full_ch1_3/full_text_ch1_3.txt', 'w', encoding='utf-8') as f:
    for p in range(8, 66):
        f.write(f"\n==================== PAGE {p} ====================\n")
        f.write(pages_text[p])
        f.write("\n")

print("Finished extracting all pages for Chapters 1-3. Saved to extracted_full_ch1_3/full_text_ch1_3.txt")
