/* Node index for 分子生物学 速通简洁版.

   Unlike biochemie_lite/data/nodes.js this file is NOT generated from a sibling
   app's data, because there is no sibling app: the source is a scanned textbook
   with no text layer. It is written by hand from the running-footer section map
   measured over all 353 pages of the scan, so `section` and `src.pages` are read
   off the book rather than estimated from the chapter openers.

   WHY THESE SECTIONS AND NOT THE WHOLE BOOK. The two books were scanned against
   all six existing trainers (pesbexplain, pesbpro, labhandbook, the biochemistry
   layer including the 68 leh_*.js files, exam30, jiri_bank) on two measurements:
   raw keyword hits, and whether any node TITLE names the topic. The second is the
   decisive one -- a topic mentioned three hundred times as a step is still a topic
   nobody taught. 22 of 46 probed topics came back COVERED and are deliberately
   absent here; what is listed below is what came back THIN, MENTIONED-ONLY,
   NEAR-ABSENT or ABSENT. Chapters 4 and 5 of the book are not here at all: PESB
   covers that ground with 42 titled nodes.

   src.pages are PRINTED page numbers (the scan's PDF page is printed + 1).

   `book` is 'A' for《现代分子生物学》第五版 and 'B' for 生化分子重点专题.
   The engine sorts Lehninger first inside a group; neither book is Lehninger, so
   ordering falls through to section number, which is what we want. */
window.BIOLITE_NODES = [

/* ---- 基因功能研究技术 ------------------------------------------------------
   The hardest finding of the coverage scan sits here. "gene knockout" looked
   COVERED only because the probe regex contained crispr|cas9 and matched a
   Lehninger node; split apart, ES-cell gene targeting scores ZERO across all six
   corpora, and Cre-lox / knockout mice have no titled node anywhere. */
{
  "id": "M-6-2",
  "book": "A",
  "kind": "section",
  "chapter": 6,
  "section": "6.2",
  "enTitle": "Gene knockout, and the genome editing that replaced most of it",
  "cnTitle": "基因敲除技术，以及后来取代了它大半的基因组编辑",
  "topicKey": "genome-editing",
  "src": { "book": "现代分子生物学 第五版", "pages": "211–218" }
},
{
  "id": "M-6-3",
  "book": "A",
  "kind": "section",
  "chapter": 6,
  "section": "6.3",
  "enTitle": "Protein and RNA interaction techniques",
  "cnTitle": "蛋白质及 RNA 相互作用技术",
  "topicKey": "interaction-methods",
  "src": { "book": "现代分子生物学 第五版", "pages": "219–228" }
},
{
  "id": "M-6-4",
  "book": "A",
  "kind": "section",
  "chapter": 6,
  "section": "6.4",
  "enTitle": "Identifying the function of a target gene in yeast",
  "cnTitle": "在酵母细胞中鉴定靶基因功能",
  "topicKey": "interaction-methods",
  "src": { "book": "现代分子生物学 第五版", "pages": "229–230" }
},
/* §6.5 turned out to run to printed 237, not 236, and to be where this book puts
   EMSA and phage display — the coverage scan had "protein–nucleic-acid interaction
   technique" down as NEAR-ABSENT and had been looking for it under §6.3. Both page
   range and content were settled by transcribing, not by the footer map. */
{
  "id": "M-6-5",
  "book": "A",
  "kind": "section",
  "chapter": 6,
  "section": "6.5",
  "enTitle": "Other molecular biology techniques — EMSA, phage display, Western, GWAS",
  "cnTitle": "其他分子生物学技术——EMSA、噬菌体展示、Western、GWAS",
  "topicKey": "interaction-methods",
  "src": { "book": "现代分子生物学 第五版", "pages": "230–237" }
},

/* ---- 真核基因表达调控 ------------------------------------------------------ */
{
  "id": "M-8-1",
  "book": "A",
  "kind": "section",
  "chapter": 8,
  "section": "8.1",
  "enTitle": "Eukaryotic gene regulation — the concepts and the general rules",
  "cnTitle": "真核基因表达调控相关概念和一般规律",
  "topicKey": "eukaryotic-regulation-overview",
  "src": { "book": "现代分子生物学 第五版", "pages": "290–298" }
},
{
  "id": "M-8-2",
  "book": "A",
  "kind": "section",
  "chapter": 8,
  "section": "8.2",
  "enTitle": "Regulation at the level of transcription",
  "cnTitle": "真核基因表达的转录水平调控",
  "topicKey": "eukaryotic-regulation-overview",
  "src": { "book": "现代分子生物学 第五版", "pages": "299–310" }
},
{
  "id": "M-8-5",
  "book": "A",
  "kind": "section",
  "chapter": 8,
  "section": "8.5",
  "enTitle": "Regulation at every other level a eukaryotic gene passes through",
  "cnTitle": "真核基因其他水平上的表达调控",
  "topicKey": "eukaryotic-regulation-overview",
  "src": { "book": "现代分子生物学 第五版", "pages": "341–352" }
},
{
  "id": "M-8-3",
  "book": "A",
  "kind": "section",
  "chapter": 8,
  "section": "8.3",
  "enTitle": "Chromatin modification and epigenetic regulation",
  "cnTitle": "真核基因表达的染色质修饰和表观遗传调控",
  "topicKey": "chromatin-epigenetics",
  "src": { "book": "现代分子生物学 第五版", "pages": "311–328" }
},
{
  "id": "M-8-4",
  "book": "A",
  "kind": "section",
  "chapter": 8,
  "section": "8.4",
  "enTitle": "Noncoding RNA as a regulator of eukaryotic genes",
  "cnTitle": "非编码 RNA 对真核基因表达的调控",
  "topicKey": "noncoding-rna",
  "src": { "book": "现代分子生物学 第五版", "pages": "329–340" }
},

/* ---- 原核基因表达调控 ------------------------------------------------------
   THE CHAPTER THE FIRST SWEEP MOSTLY MISSED. That sweep ran 26 probes over a book
   with 51 sections, and in chapter 7 it probed only §7.5. A second sweep
   (scratchpad/audit_remaining.py) asked about the rest and found three sections that
   score ZERO or near-zero across all six trainers — see COVERAGE_AUDIT.md. They are
   listed here so the gap is visible in the app itself rather than only in a document;
   each renders its source pages until a spine is written.

   These three are the only part of Book A still needing OCR: their page images have
   not been rendered and no transcript exists yet. */
{
  "id": "M-7-4",
  "book": "A",
  "kind": "section",
  "chapter": 7,
  "section": "7.4",
  "enTitle": "The other operons — arabinose, galactose, histidine",
  "cnTitle": "其他操纵子——阿拉伯糖、半乳糖、组氨酸",
  "topicKey": "prokaryotic-regulation",
  "src": { "book": "现代分子生物学 第五版", "pages": "261–269" }
},
/* 7.5 scored COVERED on the first pass, but the four titled nodes it matched are
   biochemie's nitrogen-METABOLISM nodes -- the biochemistry of fixation, not the
   regulation of the nif genes. Kept, and the caveat is recorded rather than the
   verdict trusted. */
{
  "id": "M-7-5",
  "book": "A",
  "kind": "section",
  "chapter": 7,
  "section": "7.5",
  "enTitle": "Regulation of the nitrogen fixation genes",
  "cnTitle": "固氮基因调控",
  "topicKey": "prokaryotic-regulation",
  "src": { "book": "现代分子生物学 第五版", "pages": "271–274" }
},
{
  "id": "M-7-6",
  "book": "A",
  "kind": "section",
  "chapter": 7,
  "section": "7.6",
  "enTitle": "Other controls at the level of transcription",
  "cnTitle": "转录水平上的其他调控方式",
  "topicKey": "prokaryotic-regulation",
  "src": { "book": "现代分子生物学 第五版", "pages": "275–278" }
},
{
  "id": "M-7-7",
  "book": "A",
  "kind": "section",
  "chapter": 7,
  "section": "7.7",
  "enTitle": "Post-transcriptional control in bacteria",
  "cnTitle": "转录后调控",
  "topicKey": "prokaryotic-regulation",
  "src": { "book": "现代分子生物学 第五版", "pages": "279–287" }
},

/* ---- 基因组的可动性与 RNA 加工 --------------------------------------------- */
{
  "id": "M-2-6",
  "book": "A",
  "kind": "section",
  "chapter": 2,
  "section": "2.6",
  "enTitle": "Transposition — DNA that moves",
  "cnTitle": "DNA 的转座",
  "topicKey": "dna-transposition",
  "src": { "book": "现代分子生物学 第五版", "pages": "063–066" }
},
/* The footer-derived section map put §2.6 at printed 063–066 and showed 思考题
   starting at 067, which read as though §2.7 SNP had been dropped from this scan.
   Transcribing the pages settled it: §2.7 begins mid-page on printed 066, directly
   after §2.6.3 item ④, and runs through 067 with all three of its sub-sections
   (2.7.1 概述, 2.7.2 检测技术, 2.7.3 应用) and 图 2-43. The running footer names the
   section that OWNS the top of the page, so a section starting mid-page is invisible
   to it — worth remembering before trusting that map anywhere else. */
{
  "id": "M-2-7",
  "book": "A",
  "kind": "section",
  "chapter": 2,
  "section": "2.7",
  "enTitle": "SNPs — one base of difference, and what it is good for",
  "cnTitle": "SNP 的理论与应用",
  "topicKey": "snp-variation",
  "src": { "book": "现代分子生物学 第五版", "pages": "066–067" }
},
{
  "id": "M-3-9",
  "book": "A",
  "kind": "section",
  "chapter": 3,
  "section": "3.9",
  "enTitle": "RNA editing, recoding and chemical modification",
  "cnTitle": "RNA 的编辑、再编码和化学修饰",
  "topicKey": "rna-editing-transport",
  "src": { "book": "现代分子生物学 第五版", "pages": "107–110" }
},
{
  "id": "M-3-10",
  "book": "A",
  "kind": "section",
  "chapter": 3,
  "section": "3.10",
  "enTitle": "Getting mRNA out of the nucleus",
  "cnTitle": "mRNA 转运",
  "topicKey": "rna-editing-transport",
  "src": { "book": "现代分子生物学 第五版", "pages": "111–112" }
}

];
