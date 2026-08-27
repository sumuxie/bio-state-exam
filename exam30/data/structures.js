/* ============================================================
   Structures — the second part of the oral exam ("1 structure").
   ⚠️ The exam conditions say only the structures in the OBLIGATORY
   column are required, but that column was not supplied. What
   follows is the standard set demanded in Czech medical-biochemistry
   state exams, grouped the way they are usually asked. Replace or
   trim it once the official OBLIGATORY list is at hand.
   ============================================================ */
window.EXAM30_STRUCT = {
  note: "⚠️ 官方 <b>OBLIGATORY</b> 结构清单没有给出，下面是捷克医学生化国考通常要求的标准集合，按考法分组。<b>拿到正式清单后请据此增删。</b>" +
        "<br>画结构时的通用规则：写清楚 <b>D/L 构型、α/β 端基、顺反双键、电荷（生理 pH 下的解离状态）</b>，并标出<b>官能团与关键碳的编号</b>；能顺带说出它属于哪条代谢途径，几乎总能加分。",
  groups: [

{ name: "糖类 · Saccharides", rows: [
  ["D-Glucose (Fischer + Haworth)", "Fischer: CHO on top, **OH on the right at C2, C4, C5**, left at C3. Haworth: **β-D-glucopyranose has the C1-OH up**, α has it down; all substituents equatorial in the chair — say that this is why glucose is the commonest sugar in nature."],
  ["D-Fructose", "**Ketose** — carbonyl at **C2**; draw the **furanose** ring (as in sucrose). The anomeric carbon is C2."],
  ["D-Galactose", "The **C4 epimer of glucose** — draw glucose and move one OH; mention Leloir pathway and galactosaemia."],
  ["D-Ribose / 2-deoxy-D-ribose", "**β-D-ribofuranose**; the deoxy form lacks the **2'-OH** — that single difference makes DNA stable and RNA alkali-labile."],
  ["Maltose / Lactose / Sucrose", "**Maltose Glc α1→4 Glc; lactose Gal β1→4 Glc; sucrose Glc α1↔2β Fru.** Show the glycosidic oxygen and say which are **reducing** (sucrose is not)."],
  ["Glycogen branch point", "Main chain **α1→4**, branch **α1→6** every 8–12 residues; mark the non-reducing ends where phosphorylase and synthase work."],
  ["Glucose-6-phosphate / N-acetylglucosamine / glucuronic acid", "Phosphate ester at C6; **N-acetyl on C2**; C6 oxidised to **COOH** in the uronic acid (conjugation, GAGs)."]
]},

{ name: "氨基酸与肽 · Amino acids and peptides", rows: [
  ["General α-amino acid + the peptide bond", "**L-configuration, zwitterion at pH 7** (−NH₃⁺, −COO⁻). The peptide bond is **planar, trans, with partial double-bond character**; write N-terminus on the left."],
  ["Glycine, alanine, valine, leucine", "The simplest set — glycine has **no chiral centre**."],
  ["Serine, cysteine, threonine", "OH and SH groups: phosphorylation sites; **two cysteines → disulfide bridge** (draw the oxidation)."],
  ["Aspartate, glutamate, lysine, arginine, histidine", "Charged side chains; **histidine imidazole pKa ~6 — the only physiological buffer side chain**; arginine has the guanidinium group."],
  ["Phenylalanine, tyrosine, tryptophan", "Aromatic. Tyrosine → catecholamines, thyroid hormones, melanin; tryptophan → serotonin, melatonin, niacin."],
  ["Proline", "An **imino** acid — the ring breaks α-helices; hydroxyproline (4-OH) in collagen."],
  ["Glutathione (γ-Glu-Cys-Gly)", "Note the **unusual γ-peptide bond** to the glutamate side chain, and the free **–SH** that does the work."]
]},

{ name: "脂类 · Lipids", rows: [
  ["Palmitic and stearic acid", "**16:0 and 18:0** — straight saturated chains; draw the carboxyl and count the carbons."],
  ["Oleic, linoleic, α-linolenic, arachidonic acid", "**18:1 ω-9, 18:2 ω-6, 18:3 ω-3, 20:4 ω-6.** All double bonds **cis**; show the kink. Number from both ends (Δ and ω) and say which two are essential."],
  ["Triacylglycerol", "Glycerol + 3 fatty acids; usually **saturated at sn-1, unsaturated at sn-2** (the position lipase spares)."],
  ["Phosphatidylcholine (lecithin)", "Glycerol backbone, acyl at sn-1 and sn-2, **phosphate + choline** at sn-3; mark where phospholipase **A₂ (sn-2), C and D** cut."],
  ["Sphingosine → ceramide → sphingomyelin", "Sphingosine (from **serine + palmitoyl-CoA**), amide-linked fatty acid = ceramide, + phosphocholine = sphingomyelin; + sugar = cerebroside."],
  ["Cholesterol", "**Sterane nucleus (three six-membered + one five-membered ring), 3β-OH, Δ5 double bond, C17 side chain, methyls at C18/C19.** Say it is amphipathic and the precursor of bile acids, steroids and vitamin D."],
  ["Cholic acid / a conjugated bile salt", "**3α, 7α, 12α-OH all on the same face** (that is what makes it a detergent) + conjugation with **glycine or taurine** by an amide bond."],
  ["Prostaglandin PGE₂ (and TXA₂)", "**Cyclopentane ring with two side chains**, 20 carbons; thromboxane has an **oxane** ring. Show the origin from arachidonate."]
]},

{ name: "核苷酸与核酸 · Nucleotides and nucleic acids", rows: [
  ["Purine and pyrimidine bases", "**Adenine, guanine (bicyclic); cytosine, thymine, uracil (monocyclic).** Uracil vs thymine = the **5-methyl** group."],
  ["Nucleoside vs nucleotide", "**N-glycosidic bond at N9 (purine) or N1 (pyrimidine)** to C1' of the sugar; the nucleotide adds a phosphate at **5'-OH**."],
  ["ATP", "Adenine + ribose + **three phosphates with two phosphoanhydride bonds**; mark which bonds are macroergic and note it works as **Mg-ATP**."],
  ["cAMP", "**3',5'-cyclic** phosphodiester — draw the ring closing onto both hydroxyls."],
  ["Dinucleotide segment of DNA", "**3'→5' phosphodiester bonds**, antiparallel strands, **A=T two H-bonds, G≡C three**."],
  ["NAD⁺ / FAD (at least the working part)", "NAD⁺: **nicotinamide ring — show where the hydride adds at C4**; FAD: **isoalloxazine ring, N5 and N10** accept 2 H."]
]},

{ name: "含氮化合物与激素 · Nitrogen compounds and hormones", rows: [
  ["Urea", "**H₂N–CO–NH₂** — two nitrogens: one from ammonia, one from **aspartate**."],
  ["Creatine and creatinine", "Creatine (guanidino compound) → **spontaneous cyclisation** to creatinine; ~1.7 % of the pool per day."],
  ["Haem (protoporphyrin IX + Fe²⁺)", "**Four pyrrole rings joined by methine bridges, Fe²⁺ with 4 in-plane bonds + proximal histidine + O₂ site**; substituents: 4 methyl, 2 vinyl, 2 propionate."],
  ["Bilirubin", "**Open-chain tetrapyrrole**; conjugation with **2 glucuronic acids** makes it water-soluble."],
  ["Adrenaline / noradrenaline / dopamine", "**Catechol ring (two adjacent OH) + ethylamine side chain**; adrenaline has the extra **N-methyl** (from SAM)."],
  ["Thyroxine T4 / T3", "**Two tyrosine rings joined by an ether bond**, 4 or 3 iodines; T3 lacks one **outer-ring** iodine (rT3 lacks an inner-ring one)."],
  ["Steroid hormones (cortisol, testosterone, oestradiol)", "From the sterane nucleus: **cortisol C21 with 11-OH and 17-OH; testosterone C19 with 17-OH and 3-keto-Δ4; oestradiol C18 with an AROMATIC ring A and no C19.**"],
  ["Histamine, serotonin, GABA", "Decarboxylation products (**PLP**): histidine → histamine, 5-HTP → serotonin, glutamate → GABA."]
]},

{ name: "维生素与辅酶 · Vitamins and coenzymes", rows: [
  ["Ascorbic acid (vitamin C)", "A **lactone** with the enediol group that donates the electrons; note man lacks gulonolactone oxidase."],
  ["Pyridoxal phosphate", "Pyridine ring with **CHO (forms the Schiff base), OH and CH₂-O-phosphate**."],
  ["Retinol / retinal / retinoic acid", "**Isoprenoid chain with a β-ionone ring**; show 11-cis vs all-trans retinal for vision."],
  ["Cholecalciferol / calcitriol", "**Secosteroid — ring B opened**; calcitriol carries OH at **1α, 25** (and 3β)."],
  ["Tocopherol (vitamin E)", "**Chromanol ring with the phenolic OH** that donates H to a lipid peroxyl radical + phytyl tail."],
  ["Folate / tetrahydrofolate", "Pteridine + PABA + glutamate; **one-carbon units carried at N5 and N10**."]
]}

]};
