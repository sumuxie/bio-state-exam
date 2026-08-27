/* ============================================================
   Laboratory parameters — the third part of the oral exam.
   Values are the usual adult SI reference intervals; they differ
   slightly between laboratories, and the exam explicitly does NOT
   require the exact range — it requires the ORDER OF MAGNITUDE
   AND THE UNIT, plus what a deviation means.
   ============================================================ */
window.EXAM30_LABS = { groups: [

{ name: "血气与酸碱 · Blood gases and acid–base", rows: [
  ["pH (arterial)", "7.36–7.44", "**Acidaemia < 7.36, alkalaemia > 7.44.** Decide the primary disorder from pCO₂ and HCO₃⁻; compensation is always in the same direction and never complete."],
  ["pCO₂ (arterial)", "4.7–6.0 kPa (35–45 mmHg)", "The **respiratory** component. High = hypoventilation (respiratory acidosis) or compensation of metabolic alkalosis; low = hyperventilation."],
  ["pO₂ (arterial)", "10.6–13.3 kPa (80–100 mmHg)", "Oxygenation. **Normal in CO poisoning and methaemoglobinaemia** — those reduce content, not tension."],
  ["HCO₃⁻ (actual)", "22–26 mmol/L", "The **metabolic** component. Low in metabolic acidosis or chronic respiratory alkalosis; high in metabolic alkalosis or chronic respiratory acidosis."],
  ["Base excess (BE)", "−2.5 to +2.5 mmol/L", "The metabolic component purified of respiratory influence. **Negative = metabolic acidosis (base deficit).**"],
  ["SaO₂", "95–98 %", "Haemoglobin saturation. **Pulse oximetry is misleading in CO poisoning and methaemoglobinaemia** — use CO-oximetry."],
  ["Anion gap", "8–16 mmol/L", "Na⁺ − (Cl⁻ + HCO₃⁻). **High = added acid** (ketones, lactate, methanol, ethylene glycol, salicylate, uraemia). **Correct for albumin.**"],
  ["Lactate", "0.5–2.2 mmol/L", "> 4–5 mmol/L = lactic acidosis: type A (hypoxia, shock, sepsis) or type B (metformin, ethanol, liver failure, thiamine deficiency)."],
  ["Osmolality (plasma)", "275–295 mmol/kg", "Calculated ≈ 2×Na⁺ + glucose + urea. **Osmolal gap > 10 → methanol, ethylene glycol, ethanol, mannitol.**"]
]},

{ name: "电解质与矿物质 · Electrolytes and minerals", rows: [
  ["Sodium", "135–145 mmol/L", "Determines **extracellular volume**; its concentration is a **water** problem. Low = SIADH, diuretics, heart/liver failure; correct slowly (osmotic demyelination)."],
  ["Potassium", "3.5–5.1 mmol/L", "Sets the resting membrane potential → arrhythmia. **Acidosis and insulin deficiency push K⁺ out of cells; alkalosis, insulin and β₂-agonists push it in.**"],
  ["Chloride", "98–107 mmol/L", "Falls with vomiting; low urinary Cl⁻ identifies **chloride-responsive metabolic alkalosis**. Rises in normal-anion-gap (hyperchloraemic) acidosis."],
  ["Calcium (total)", "2.2–2.6 mmol/L", "**50 % ionised, 40 % albumin-bound.** Correct for albumin. High = hyperparathyroidism, malignancy; low = vitamin D deficiency, hypoparathyroidism, hypomagnesaemia."],
  ["Calcium (ionised)", "1.1–1.3 mmol/L", "The **active** fraction. **Alkalosis lowers it → tetany with a normal total calcium.**"],
  ["Phosphate", "0.8–1.5 mmol/L", "High in renal failure and hypoparathyroidism; **low in refeeding syndrome, alcoholism, hyperparathyroidism** — causes weakness, haemolysis, cardiac failure (ATP and 2,3-BPG fall)."],
  ["Magnesium", "0.7–1.0 mmol/L", "Cofactor of every ATP reaction. **Low magnesium causes hypokalaemia and hypocalcaemia that will not correct until Mg is replaced.**"],
  ["Iron (serum)", "M 10–30, F 6–26 µmol/L", "Alone almost useless — always with ferritin, transferrin and CRP (diurnal variation, falls in inflammation)."],
  ["Zinc / Copper", "Zn 11–18 µmol/L; Cu 12–25 µmol/L", "Zinc falls in inflammation (interpret with CRP). **Low caeruloplasmin + high urinary copper = Wilson disease.**"]
]},

{ name: "肾功能与尿 · Renal function and urine", rows: [
  ["Creatinine", "M 60–110, F 45–90 µmol/L", "Rises only after GFR has fallen by **~50 %** ('creatinine-blind range'); depends on muscle mass. Always report **eGFR** with it."],
  ["eGFR (CKD-EPI)", "> 90 mL/min/1.73 m²", "CKD stages G1–G5: ≥90 / 60–89 / 30–59 / 15–29 / <15. Below 60 for 3 months defines chronic kidney disease."],
  ["Urea", "2.5–8.0 mmol/L", "Renal **and** nutritional/hepatic marker: high in renal failure, dehydration, GI bleeding, catabolism; **low in liver failure** and low protein intake."],
  ["Uric acid", "M 200–420, F 140–360 µmol/L", "Solubility limit ~420 µmol/L. High = gout, tumour lysis, diuretics, alcohol, fructose, renal failure, GSD I."],
  ["Cystatin C", "0.6–1.0 mg/L", "GFR marker independent of muscle mass — useful in cachexia, children, the elderly."],
  ["Urine albumin/creatinine (ACR)", "< 3 mg/mmol", "A1 < 3, A2 3–30, A3 > 30. **Microalbuminuria = earliest diabetic nephropathy and a cardiovascular risk marker.**"],
  ["Proteinuria (24 h)", "< 150 mg/day", "**Nephrotic > 3.5 g/day.** The dipstick detects albumin — it **misses Bence-Jones light chains**."],
  ["Urine osmolality / specific gravity", "50–1200 mmol/kg; 1.003–1.035", "Concentrating ability. Dilute urine with high plasma osmolality = **diabetes insipidus**; concentrated urine with low plasma sodium = **SIADH**."],
  ["Urine pH", "4.5–8 (usually ~6)", "Persistently > 5.5 with acidosis = **distal renal tubular acidosis**; alkaline urine also suggests urea-splitting infection."],
  ["Urinary sediment", "RBC < 5/µL, WBC < 10/µL", "**Dysmorphic RBC and red-cell casts = glomerular**; muddy brown casts = acute tubular necrosis; WBC + nitrites = infection."]
]},

{ name: "肝与胆 · Liver and bile", rows: [
  ["ALT", "< 0.75 µkat/L (≈ 45 U/L)", "**Hepatocellular damage**, relatively liver-specific. > 10× = acute hepatitis, > 50× = toxic/ischaemic."],
  ["AST", "< 0.65 µkat/L (≈ 40 U/L)", "Also muscle, heart, erythrocytes. **De Ritis AST/ALT > 2 → alcoholic liver disease**; high AST with normal ALT → check CK."],
  ["ALP", "0.7–2.1 µkat/L (≈ 40–130 U/L)", "**Cholestasis**, but also bone (growth, Paget, osteomalacia), placenta, intestine. Confirm hepatic origin with GGT."],
  ["GGT", "M < 0.9, F < 0.6 µkat/L", "Sensitive but non-specific cholestasis marker; **induced by alcohol and by enzyme-inducing drugs**."],
  ["Bilirubin (total / conjugated)", "< 17–21 / < 5 µmol/L", "Jaundice visible above ~40–50. **Unconjugated = haemolysis, Gilbert; conjugated = hepatocellular or cholestatic** (dark urine)."],
  ["Albumin", "35–50 g/L", "Synthetic function (half-life ~20 days) and a **negative acute-phase protein**. Low = cirrhosis, nephrotic syndrome, malnutrition, inflammation."],
  ["INR / prothrombin time", "0.8–1.2", "**The fastest indicator of acute liver failure** (factor VII half-life ~6 h). Corrects with vitamin K in cholestasis, but not in hepatocellular failure."],
  ["Ammonia", "11–35 µmol/L", "Hepatic encephalopathy, urea-cycle defects, valproate. **Sample on ice, analyse within 15–30 min.**"],
  ["Amylase / lipase", "AMS < 1.7 µkat/L; lipase < 1.0 µkat/L", "Acute pancreatitis (lipase more specific and longer-lasting); amylase also rises with salivary disease and renal failure."]
]},

{ name: "糖代谢 · Glucose metabolism", rows: [
  ["Fasting plasma glucose", "3.9–5.6 mmol/L", "**Diabetes ≥ 7.0**; impaired fasting glucose 5.6–6.9. Fluoride tube — otherwise glycolysis lowers it ~0.5 mmol/L per hour."],
  ["OGTT, 2-hour value", "< 7.8 mmol/L", "**Diabetes ≥ 11.1**; impaired tolerance 7.8–11.0. 75 g glucose, samples at 0 and 120 min."],
  ["HbA1c", "< 42 mmol/mol (< 6.0 %)", "**≥ 48 mmol/mol (6.5 %) diagnoses diabetes**; target usually < 53. Reflects **8–12 weeks**; false if erythrocyte lifespan is abnormal → use fructosamine."],
  ["C-peptide", "0.3–1.3 nmol/L (fasting)", "Distinguishes **endogenous insulin (high) from injected insulin (suppressed)** — insulinoma vs factitious hypoglycaemia."],
  ["3-hydroxybutyrate", "< 0.6 mmol/L", "> 3 mmol/L = ketoacidosis. **The urine dipstick detects acetoacetate, not 3-hydroxybutyrate** — measure it in blood."]
]},

{ name: "血脂 · Lipids", rows: [
  ["Total cholesterol", "< 5.0 mmol/L", "Screening value only; interpret with LDL, HDL and total risk."],
  ["LDL cholesterol", "< 3.0 mmol/L", "Targets by risk: **< 2.6 moderate, < 1.8 high, < 1.4 very high.** Calculated by Friedewald (invalid if TAG > 4.5)."],
  ["HDL cholesterol", "M > 1.0, F > 1.2 mmol/L", "Low HDL is a risk marker; raising it pharmacologically has not proved beneficial."],
  ["Triacylglycerols", "< 1.7 mmol/L", "12-h fast. **> 10 mmol/L → risk of acute pancreatitis.** High in diabetes, obesity, alcohol, oestrogens."],
  ["Apo B / Lp(a)", "apoB < 1.0 g/L; Lp(a) < 50 mg/dL", "Apo B = number of atherogenic particles; **Lp(a) is genetically determined — measure once in a lifetime.**"]
]},

{ name: "蛋白与炎症 · Proteins and inflammation", rows: [
  ["Total protein", "60–80 g/L", "Plasma contains fibrinogen, serum does not. Electrophoresis gives albumin + α₁, α₂, β, γ."],
  ["CRP", "< 5 mg/L", "Rises in 6–8 h, half-life 19 h. **> 100 mg/L suggests bacterial infection.** hsCRP 1–3 mg/L for cardiovascular risk."],
  ["Procalcitonin", "< 0.05 µg/L", "Rises in 3–6 h, more specific for **bacterial sepsis**; used to guide antibiotics."],
  ["ESR", "M < 15, F < 20 mm/h", "Slow to rise and slow to fall; raised by anaemia, age, pregnancy, immunoglobulins. **> 100 mm/h → myeloma, arteritis, tuberculosis, malignancy.**"],
  ["Immunoglobulins", "IgG 7–16, IgA 0.7–4, IgM 0.4–2.3 g/L", "**A narrow M-spike = monoclonal gammopathy** (confirm by immunofixation and free light chains)."],
  ["Complement C3 / C4", "C3 0.9–1.8; C4 0.1–0.4 g/L", "**Low = consumption** (active lupus, post-streptococcal glomerulonephritis); C4 low alone in hereditary angioedema."]
]},

{ name: "心肌与肌肉 · Cardiac and muscle", rows: [
  ["hs-Troponin I/T", "< 99th percentile (assay-specific, ng/L)", "**A rise and/or fall with one value above the 99th percentile + ischaemia = infarction.** Rises 3–4 h, stays 7–14 days. Elevated also in myocarditis, embolism, sepsis, renal failure."],
  ["CK (total)", "M < 3.2, F < 2.9 µkat/L", "Muscle damage. **Thousands of U/L = rhabdomyolysis** (risk of acute kidney injury); raised by exercise, statins, injections, hypothyroidism."],
  ["CK-MB", "< 6 % of total CK", "No longer needed for diagnosis; useful for **re-infarction** because it normalises in 48–72 h."],
  ["Myoglobin", "< 70–110 µg/L", "Earliest marker (1–3 h) but **not cardiospecific**; myoglobinuria causes acute kidney injury."],
  ["NT-proBNP / BNP", "NT-proBNP < 125 ng/L; BNP < 100 ng/L", "Mainly to **exclude** heart failure (high negative predictive value). Rises with age, renal failure, atrial fibrillation; falls in obesity."],
  ["LDH", "< 4.1 µkat/L", "Non-specific cell turnover: haemolysis, tumour lysis, infarction, lymphoma."]
]},

{ name: "血液学与铁 · Haematology and iron", rows: [
  ["Haemoglobin", "M 135–175, F 120–160 g/L", "Anaemia below; interpret with MCV (microcytic = iron deficiency, thalassaemia; macrocytic = B12/folate, alcohol, hypothyroidism)."],
  ["MCV", "80–100 fL", "The first sorting step in any anaemia."],
  ["Ferritin", "M 30–300, F 15–150 µg/L", "Iron stores — **but an acute-phase protein**: interpret with CRP. Low = iron deficiency (the most specific test); very high = overload, inflammation, liver disease."],
  ["Transferrin saturation", "20–45 %", "**> 45–50 % suggests haemochromatosis**; low in iron deficiency and in anaemia of chronic disease."],
  ["Reticulocytes", "0.5–2.5 %", "High = haemolysis or blood loss with intact marrow; low = marrow failure or deficiency."],
  ["Haptoglobin", "0.3–2.0 g/L", "**Falls in intravascular haemolysis** (with high LDH, high unconjugated bilirubin)."],
  ["Vitamin B12 / folate", "B12 150–650 pmol/L; folate > 7 nmol/L", "**B12 deficiency raises both methylmalonic acid and homocysteine; folate deficiency only homocysteine.**"],
  ["Platelets / INR / APTT", "150–400 ×10⁹/L; INR 0.8–1.2; APTT 25–35 s", "Thrombocytopenia in liver disease and hypersplenism; INR for the extrinsic and APTT for the intrinsic pathway."]
]},

{ name: "内分泌 · Endocrine", rows: [
  ["TSH", "0.4–4.0 mIU/L", "**The first-line thyroid test** — log-linear response to free T4. High = primary hypothyroidism; suppressed = hyperthyroidism (exception: pituitary disease)."],
  ["Free T4 / free T3", "fT4 10–22 pmol/L; fT3 3–6.5 pmol/L", "Measure **free** hormone — TBG changes (pregnancy, oestrogens) alter total but not free."],
  ["Cortisol (morning)", "140–690 nmol/L", "Marked diurnal rhythm — note the sampling time. Suppression tests for excess, Synacthen for deficiency."],
  ["PTH", "1.6–6.9 pmol/L", "Interpret **always together with calcium**: high PTH + high Ca = primary hyperparathyroidism; high PTH + low Ca = vitamin D deficiency or renal failure."],
  ["25-OH vitamin D", "> 75 nmol/L sufficient", "Deficiency < 25–30 nmol/L → rickets/osteomalacia. Measure calcidiol, **not** calcitriol."],
  ["Insulin (fasting)", "< 25 mIU/L (~ 3–17 mIU/L)", "Only with simultaneous glucose (HOMA-IR); insulinoma = inappropriately high insulin **and C-peptide** during hypoglycaemia."],
  ["hCG", "non-pregnant < 5 IU/L", "Pregnancy test; also a tumour marker. **Beware the hook effect at very high concentrations.**"]
]},

{ name: "脑脊液 · Cerebrospinal fluid", rows: [
  ["Appearance / pressure", "clear; 7–20 cm H₂O", "Turbid = bacterial meningitis; **xanthochromia = subarachnoid haemorrhage.**"],
  ["Protein", "0.15–0.45 g/L", "High in bacterial and tuberculous meningitis, Guillain–Barré (albuminocytological dissociation), tumours."],
  ["Glucose", "2.5–4.5 mmol/L (50–70 % of blood)", "**Always take a simultaneous blood glucose.** Low = bacterial, tuberculous or fungal meningitis; normal = viral."],
  ["Cells", "< 5 ×10⁶/L, mononuclear", "Thousands of neutrophils = bacterial; tens–hundreds of lymphocytes = viral or tuberculous."],
  ["Lactate", "< 2.1 mmol/L", "**> 3.5 mmol/L supports bacterial meningitis** even after antibiotics have been started."],
  ["Oligoclonal bands", "absent", "Present in CSF but not serum = intrathecal IgG synthesis → **multiple sclerosis**."]
]}

]};
