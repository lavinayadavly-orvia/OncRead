const treatments = [
  {
    id: "neocarhp", short: "neoCARHP", name: "Carboplatin De-escalation", cancer: "Breast cancer",
    setting: "Early HER2-positive", company: "Roche + generic manufacturers", phase: "Phase III",
    impact: "High, pending survival", impactGroup: "high", maturity: 95, impactScore: 84,
    headline: "64.1% vs 65.9% pCR", headlineNote: "Noninferior response with lower severe hematologic toxicity",
    benefit: "Similar pathologic complete response while omitting carboplatin. Approximately 10 fewer grade 3-4 neutropenia events and 9 fewer severe leukopenia events per 100 patients.",
    safety: "Lower neutropenia, leukopenia, thrombocytopenia, anemia, nausea and treatment interruption. Long-term event-free and overall survival remain immature.",
    cost: "Cost-saving strategy", indiaPrice: "Components available: carboplatin ₹1,900-₹2,800; trastuzumab biosimilars ₹17,700-₹57,500; Perjeta ₹2.52-₹2.62 lakh per vial.",
    indiaStatus: "available", indiaLabel: "Available", launch: "No new product launch needed",
    indiaCaveat: "Treatment approach still requires guideline and clinician adoption.",
    limitations: "pCR is a surrogate. Survival follow-up and high-risk subgroup selection are still required.",
    source: "https://ascopubs.org/doi/10.1200/JCO-25-02176"
  },
  {
    id: "sevabertinib-hyrnuo-first-line", short: "Hyrnuo", name: "Sevabertinib for First-Line HER2-Mutant NSCLC", cancer: "Lung cancer",
    setting: "Previously untreated locally advanced or metastatic non-squamous NSCLC with HER2/ERBB2 TKD activating mutations", company: "Bayer Healthcare Pharmaceuticals", phase: "Phase I/II; FDA accelerated approval",
    impact: "High in biomarker-selected disease", impactGroup: "high", maturity: 99, impactScore: 89,
    eventDate: "2026-09-09",
    headline: "ORR 75%", headlineNote: "95% CI 64-85 in 69 treatment-naive patients",
    benefit: "FDA expanded Hyrnuo's accelerated approval to adults with previously untreated locally advanced or metastatic non-squamous NSCLC harboring HER2/ERBB2 tyrosine-kinase-domain activating mutations detected by an FDA-authorized test, creating an oral first-line targeted option for this uncommon molecular subgroup.",
    safety: "FDA labeling highlights diarrhea, hepatotoxicity, interstitial lung disease or pneumonitis, left ventricular dysfunction, ocular toxicity, pancreatic enzyme elevation, and embryo-fetal toxicity. The FDA notice did not provide grade-specific event rates for the 69-patient approval population.",
    cost: "Branded oral targeted therapy; official US list price not verified in this pass", indiaPrice: "No official India price, CDSCO authorization for this indication, reimbursement decision, procurement figure, patient-assistance terms, or India launch date was verified.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India unverified", launch: "FDA first-line indication expansion 9 September 2026",
    indiaCaveat: "No verified CDSCO authorization, India availability, local companion-diagnostic pathway, official launch date, price, reimbursement, or procurement milestone was identified.",
    limitations: "Accelerated approval is based on response rate and duration of response from a small, open-label, single-arm Phase I/II cohort. Comparative progression-free survival, overall survival, quality of life, resistance sequencing, confirmatory clinical benefit, long-term safety, and non-US first-line access remain unresolved.",
    detailSections: [
      ["Event date / geography", "9 September 2026 FDA accelerated-approval expansion - United States; review conducted under Project Orbis.", "wide"],
      ["Population / sample", "69 adults with previously untreated locally advanced or metastatic non-squamous NSCLC and HER2/ERBB2 TKD activating mutations in the ongoing multicenter SOHO-01 trial (NCT05099172).", "wide"],
      ["Comparator", "No concurrent comparator; open-label, single-arm, multicohort Phase I/II evidence.", "wide"],
      ["Primary efficacy outcomes", "Blinded independent central review-confirmed objective response rate and duration of response under RECIST v1.1.", "wide"],
      ["Effect size detail", "Confirmed ORR was 75% (95% CI 64-85). Among responding patients, 73% had a response lasting at least six months and 38% had a response lasting at least 12 months.", "wide"],
      ["Dose / administration", "Sevabertinib 20 mg orally twice daily with food until disease progression or unacceptable toxicity.", "wide"],
      ["Regulatory status", "FDA accelerated approval expanded the prior post-systemic-therapy indication into the first-line setting. Continued approval may depend on verification and description of clinical benefit in a confirmatory trial. No FDA traditional approval, EMA first-line authorization, CDSCO authorization, official India launch, or India price was verified.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-sevabertinib-locally-advanced-or-metastatic-non-squamous-non-small",
    sourceLabel: "FDA approval notice",
    supportingSources: [
      { label: "Bayer approval release", url: "https://www.bayer.com/media/en-us/us-fda-grants-accelerated-approval-to-bayers-targeted-therapy-sevabertinib-as-a-first-line-treatment-option-for-adults-with-her2-mutant-non-small-cell-lung-cancer/" },
      { label: "ASCO 2026 SOHO-01 update", url: "https://ascopubs.org/doi/10.1200/JCO.2026.44.16_suppl.8622" },
      { label: "ClinicalTrials.gov SOHO-01 registry", url: "https://clinicaltrials.gov/study/NCT05099172" }
    ]
  },
  {
    id: "anbenitamab-hb1801", short: "Anbenitamab + HB1801", name: "Anbenitamab + HB1801 Neoadjuvant Strategy", cancer: "Breast cancer",
    setting: "Stage II-III ERBB2-positive neoadjuvant therapy", company: "Alphamab Oncology + CSPC/JMT-Bio investigators", phase: "Phase III; peer-reviewed",
    impact: "High, pending survival", impactGroup: "high", maturity: 92, impactScore: 86,
    eventDate: "2026-09-03",
    headline: "tpCR 62.4% vs 51.2%", headlineNote: "Absolute difference 11.4 percentage points",
    benefit: "A JAMA Oncology randomized Phase III trial reported higher blinded-review total pathological complete response with neoadjuvant anbenitamab plus HB1801, with or without carboplatin, versus trastuzumab, pertuzumab and docetaxel, with or without carboplatin, in stage II-III ERBB2-positive breast cancer.",
    safety: "Grade 3 or 4 treatment-related adverse events occurred in 29.3% versus 28.3%, and no treatment-related deaths were reported. Nonhematologic events including rash, diarrhea, nausea, peripheral edema and peripheral sensory neuropathy were more frequent with the investigational regimen.",
    cost: "Investigational biologic plus albumin-bound docetaxel strategy; official price not applicable yet", indiaPrice: "No official US approval, China approval, India price, CDSCO authorization, reimbursement, procurement figure, or India launch date for anbenitamab plus HB1801 in this setting was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "Investigational; India unverified", launch: "Peer-reviewed online publication 3 September 2026; no regulatory approval verified",
    indiaCaveat: "No CDSCO authorization, India availability, official launch date, price, reimbursement decision, procurement pathway, or India-specific guideline adoption was identified.",
    limitations: "The trial was conducted in China, was open-label, used pathological complete response as the primary endpoint, and had median follow-up under eight months. Event-free survival, invasive disease-free survival, overall survival, long-term cardiac safety, regulatory status, and implementation cost remain unverified.",
    detailSections: [
      ["Event date / geography", "3 September 2026 JAMA Oncology online publication - China multicenter trial", "wide"],
      ["Population / sample", "521 patients with stage II or III ERBB2-positive breast cancer enrolled from 61 hospitals in China between 19 December 2024 and 29 August 2025; median age 52 years, 55.9% hormone receptor-positive disease, and 34.4% locally advanced disease.", "wide"],
      ["Comparator", "Six cycles of neoadjuvant anbenitamab plus HB1801, with or without carboplatin, versus trastuzumab, pertuzumab and docetaxel, with or without carboplatin. Surgery was scheduled within four weeks after neoadjuvant therapy.", "wide"],
      ["Primary endpoint", "Blinded independent review committee-assessed total pathological complete response, defined as ypT0/is ypN0.", "wide"],
      ["Effect size detail", "tpCR occurred in 164 of 263 patients (62.4%; 95% CI 56.2-68.2) versus 132 of 258 patients (51.2%; 95% CI 44.9-57.4), absolute difference 11.4 percentage points (95% CI 3.2-19.6), one-sided p=0.004.", "wide"],
      ["Regulatory status", "Peer-reviewed randomized evidence only. No FDA, EMA, CDSCO, China NMPA approval, official filing, official price, or India launch was verified in this pass.", "wide"]
    ],
    source: "https://jamanetwork.com/journals/jamaoncology/fullarticle/2853843",
    sourceLabel: "JAMA Oncology publication",
    supportingSources: [
      { label: "ASCO 2026 abstract LBA660", url: "https://ascopubs.org/doi/10.1200/JCO.2026.44.17_suppl.LBA660" },
      { label: "ClinicalTrials.gov registry", url: "https://clinicaltrials.gov/study/NCT06747338" },
      { label: "Alphamab ASCO results release", url: "https://www.alphamabonc.com/en/html/news/2808.html" }
    ]
  },
  {
    id: "tucatinib", short: "Tucatinib", name: "Tucatinib + HER2 Maintenance", cancer: "Breast cancer",
    setting: "Metastatic HER2-positive", company: "Pfizer / Seagen; Indian generics", phase: "Phase III",
    impact: "High", impactGroup: "high", maturity: 96, impactScore: 91,
    headline: "+8.6 months median PFS", headlineNote: "24.9 vs 16.3 months; HR 0.641",
    benefit: "A direct randomized improvement over trastuzumab/pertuzumab maintenance, with a 35.9% relative reduction in progression or death. Benefit appeared across hormone-receptor and brain-metastasis subgroups.",
    safety: "Diarrhea in 72.7%, grade 3 or higher in 6.1%. Grade 3 or higher ALT and AST elevations were 13.5% and 7.1%; 13.5% discontinued for treatment-emergent toxicity.",
    cost: "High added continuous cost", indiaPrice: "₹6,000 retail or ₹7,678-₹8,190 MRP per 10 × 150 mg tablets; about ₹72,000-₹98,000 per 30 days at 300 mg twice daily.",
    indiaStatus: "available", indiaLabel: "Approved and marketed", launch: "Launched after 8 April 2025 approval",
    indiaCaveat: "Indian approval is for previously treated disease with trastuzumab and capecitabine, not HER2CLIMB-05 first-line maintenance.",
    limitations: "Overall survival is immature; long-term value depends on CNS-event avoidance, treatment duration and net pricing.",
    source: "https://ascopubs.org/doi/10.1200/JCO-25-02600"
  },
  {
    id: "palbociclib", short: "Palbociclib", name: "Palbociclib HER2 Maintenance", cancer: "Breast cancer",
    setting: "Metastatic HR-positive / HER2-positive", company: "Pfizer; trastuzumab/pertuzumab manufacturers", phase: "Phase III",
    impact: "High", impactGroup: "high", maturity: 98, impactScore: 83,
    headline: "PFS HR 0.76", headlineNote: "PATINA maintenance approval after induction therapy",
    benefit: "Adds CDK4/6 inhibition to trastuzumab-based endocrine maintenance after induction therapy, delaying progression versus maintenance without palbociclib in HR-positive, HER2-positive advanced disease.",
    safety: "FDA highlights neutropenia and interstitial lung disease/pneumonitis warnings for palbociclib. Overall survival was not mature at the approval analysis, and median PFS could not be adequately described because of censoring.",
    cost: "High ongoing oral targeted-therapy cost", indiaPrice: "No verified official India MRP update was captured in this pass.",
    indiaStatus: "available", indiaLabel: "Product marketed", launch: "US HR-positive/HER2-positive maintenance indication added 24 June 2026",
    indiaCaveat: "Palbociclib is already marketed in India, but CDSCO approval for this HER2-positive maintenance regimen was not verified.",
    limitations: "Investigator-assessed PFS improved, but OS is immature and the FDA review notes censoring limits simple median-PFS interpretation.",
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-palbociclib-trastuzumab-or-without-pertuzumab-and-endocrine-therapy-maintenance",
    sourceLabel: "FDA approval notice"
  },
  {
    id: "daraxonrasib-rasonque", short: "Rasonque", name: "Daraxonrasib for Metastatic PDAC", cancer: "Pancreatic cancer",
    setting: "Metastatic pancreatic adenocarcinoma after prior systemic therapy or not eligible for multiagent therapy", company: "Revolution Medicines", phase: "Phase III; FDA approved",
    impact: "Very high in refractory PDAC", impactGroup: "high", maturity: 99, impactScore: 95,
    eventDate: "2026-08-26",
    headline: "OS HR 0.40", headlineNote: "13.2 vs 6.7 months in RASolute 302",
    benefit: "FDA approved once-daily oral daraxonrasib, marketed as Rasonque, for adults with metastatic pancreatic adenocarcinoma who have received at least one prior systemic therapy or who are not candidates for multiagent systemic therapy. The label creates the first FDA-approved broad RAS-targeted option in this high-mortality setting and does not require a companion diagnostic.",
    safety: "The prescribing information includes warnings and precautions for dermatologic and soft tissue toxicity, stomatitis and oral disorders, diarrhea, gastrointestinal perforation, interstitial lung disease or pneumonitis, and embryo-fetal toxicity. Revolution Medicines reported serious adverse reactions in 30% of treated patients, permanent discontinuation in 2.9%, and common adverse reactions including rash, diarrhea, stomatitis, nausea, fatigue, vomiting, abdominal pain, edema, decreased appetite, and hemorrhage.",
    cost: "New branded oral targeted therapy; official price not verified from a primary source in this pass", indiaPrice: "No official US list price, India price, CDSCO approval, reimbursement, procurement figure, or India launch date for Rasonque was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India unverified", launch: "FDA approval 26 August 2026",
    indiaCaveat: "No verified CDSCO authorization, India availability, official launch date, price, reimbursement decision, or procurement pathway for daraxonrasib was identified. India relevance is currently indirect until a local regulatory or access action is official.",
    limitations: "RASolute 302 was open-label and compared daraxonrasib with physician's choice chemotherapy after one prior systemic line; longer follow-up, sequencing data, resistance-management evidence, broader first-line data, non-US regulatory decisions, and real-world toxicity/access experience remain needed.",
    detailSections: [
      ["Event date / geography", "26 August 2026 FDA approval - United States; FDA collaborated with Health Canada through Project Orbis, with EMA and Japan PMDA as official observers.", "wide"],
      ["Population / sample", "500 adults with metastatic pancreatic adenocarcinoma and disease progression after one prior systemic therapy in RASolute 302 (NCT06625320); the approved indication also includes adults not candidates for multiagent systemic therapy.", "wide"],
      ["Comparator", "Daraxonrasib 300 mg orally once daily versus physician's choice standard-of-care chemotherapy in a randomized, open-label, multicenter trial.", "wide"],
      ["Primary endpoints", "Overall survival and blinded independent central review progression-free survival in patients with a RAS G12 mutation and in the overall population; objective response rate was an additional outcome measure.", "wide"],
      ["Effect size detail", "In the overall population, median OS was 13.2 months (95% CI 10.0-not estimable) versus 6.7 months (95% CI 5.8-8.0), HR 0.40 (95% CI 0.30-0.53), p<0.0001. Median PFS was 7.2 versus 3.6 months, HR 0.49 (95% CI 0.38-0.64), p<0.0001. ORR was 30% (95% CI 25-36) versus 11% (95% CI 7-15), p<0.0001.", "wide"],
      ["Regulatory status", "FDA approved on 26 August 2026 with priority review, breakthrough therapy designation, orphan drug designation, Real-Time Oncology Review, Assessment Aid, Project Orbis, and the FDA Commissioner's National Priority Review Voucher pilot program. Outside the United States, Revolution Medicines states daraxonrasib is investigational and not approved by any regulatory authority.", "wide"],
      ["Dose / administration", "Recommended dose is daraxonrasib 300 mg orally once daily until disease progression or unacceptable toxicity.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-daraxonrasib-metastatic-pancreatic-adenocarcinoma",
    sourceLabel: "FDA approval notice",
    supportingSources: [
      { label: "FDA press announcement", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-class-targeted-therapy-metastatic-pancreatic-cancer" },
      { label: "Revolution Medicines approval release", url: "https://ir.revmed.com/news-releases/news-release-details/us-fda-approves-revolution-medicines-rasonquetm-daraxonrasib" },
      { label: "NEJM RASolute 302 publication", url: "https://doi.org/10.1056/NEJMoa2605555" },
      { label: "ClinicalTrials.gov RASolute 302 registry", url: "https://clinicaltrials.gov/study/NCT06625320" }
    ]
  },
  {
    id: "ivonescimab-harmoni", short: "Ivonescimab", name: "Ivonescimab + Chemotherapy After EGFR TKI", cancer: "Lung cancer",
    setting: "Advanced EGFR-mutated nonsquamous NSCLC after EGFR TKI", company: "Summit Therapeutics / Akeso", phase: "Phase III; peer-reviewed; FDA BLA under review",
    impact: "High, pending US review", impactGroup: "high", maturity: 94, impactScore: 88,
    eventDate: "2026-09-04",
    headline: "PFS HR 0.52", headlineNote: "Lancet Oncology HARMONi publication",
    benefit: "A Lancet Oncology randomized Phase III publication reported that ivonescimab, a bispecific antibody targeting PD-1 and VEGF, plus platinum-doublet chemotherapy improved progression-free survival versus placebo plus chemotherapy in patients with EGFR-mutated advanced nonsquamous non-small cell lung cancer after progression on a third-generation EGFR TKI.",
    safety: "The publication abstract reports grade 3 or worse treatment-related adverse events in 61% with ivonescimab plus chemotherapy versus 49% with placebo plus chemotherapy. Serious treatment-related adverse events occurred in 34% versus 19%, and treatment-related deaths occurred in 2% versus less than 1%.",
    cost: "Investigational biologic plus chemotherapy; official US and India prices not applicable yet", indiaPrice: "No FDA approval, CDSCO authorization, India launch date, official India price, reimbursement decision, procurement pathway, or patient-assistance program for ivonescimab in this setting was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "BLA under review; India unverified", launch: "Lancet Oncology publication visible 4 September 2026; US BLA priority review PDUFA target reported for 14 November 2026",
    indiaCaveat: "India relevance is currently indirect. No India-specific regulatory, price, procurement, or launch milestone was verified.",
    limitations: "Overall survival was immature in the publication abstract, quality-of-life and detailed regional subgroup interpretation require full-text review, and the trial should not be used to infer superiority over untested post-osimertinib regimens. The US filing is under review; approval, label scope, price, and access terms are not established.",
    detailSections: [
      ["Event date / geography", "4 September 2026 MD Anderson publication notice and Lancet Oncology visibility; international randomized trial", "wide"],
      ["Population / sample", "438 patients with EGFR-mutated advanced nonsquamous NSCLC whose disease had progressed after a third-generation EGFR tyrosine kinase inhibitor.", "wide"],
      ["Comparator", "Ivonescimab plus chemotherapy versus placebo plus chemotherapy.", "wide"],
      ["Primary endpoint", "Blinded independent central review-assessed progression-free survival.", "wide"],
      ["Effect size detail", "Median PFS was 6.8 months (95% CI 5.6-7.9) versus 4.4 months (95% CI 4.2-5.6), HR 0.52 (95% CI 0.40-0.66), p<0.0001. Investigator-assessed PFS was 7.1 versus 4.8 months, HR 0.46 (95% CI 0.36-0.59), p<0.0001. At interim analysis, median OS was not reached versus 14.1 months, HR 0.80 (95% CI 0.59-1.08), p=0.072.", "wide"],
      ["Regulatory status", "Summit reported FDA acceptance and priority review of the ivonescimab BLA for this setting, with a 14 November 2026 PDUFA goal date. No FDA approval, EMA authorization, CDSCO authorization, official price, or India launch was verified.", "wide"]
    ],
    source: "https://pubmed.ncbi.nlm.nih.gov/42636833/",
    sourceLabel: "Lancet Oncology / PubMed abstract",
    supportingSources: [
      { label: "MD Anderson publication notice", url: "https://www.mdanderson.org/newsroom/research-newsroom/targeted-antibody-improves-outcomes-for-patients-with-advanced-l.h00-159858501.html" },
      { label: "ClinicalTrials.gov HARMONi registry", url: "https://clinicaltrials.gov/study/NCT05184712" },
      { label: "Summit FDA priority-review release", url: "https://www.smmttx.com/news/summit-therapeutics-announces-fda-acceptance-of-biologics-license-application-with-priority-review-for-ivonescimab-in-combination-with-chemotherapy-for-the-treatment-of-patients-with-egfr-mutated-locally-advanced-or-metastatic-non-squamous-non-small-cell-lung-cancer-who-have-progressed-after-egfr-tki-treatment" }
    ]
  },
  {
    id: "zanidatamab-tislelizumab-gea", short: "Ziihera +/- Tevimbra", name: "Zanidatamab Regimens in HER2+ GEA", cancer: "Gastric, GEJ, and esophageal adenocarcinoma",
    setting: "First-line unresectable locally advanced or metastatic HER2-positive disease", company: "Jazz Pharmaceuticals + BeOne Medicines; Zymeworks partner asset", phase: "Phase III; FDA approved",
    impact: "High first-line upper-GI approval", impactGroup: "high", maturity: 99, impactScore: 90,
    eventDate: "2026-08-25",
    headline: "OS HR 0.72", headlineNote: "26.4 vs 19.2 months with Ziihera/Tevimbra/chemo",
    benefit: "FDA approved two zanidatamab-hrii-containing first-line regimens for adults with HER2-positive unresectable locally advanced or metastatic gastric, gastroesophageal junction, or esophageal adenocarcinoma: zanidatamab with fluoropyrimidine/platinum chemotherapy and tislelizumab for IHC 3+ or IHC 2+/ISH+ tumors, and zanidatamab with chemotherapy for IHC 3+ tumors.",
    safety: "Zanidatamab prescribing information includes a boxed warning for diarrhea and embryo-fetal toxicity, plus warnings for left ventricular dysfunction and infusion-related reactions. Tislelizumab labeling includes warnings for immune-mediated adverse reactions, infusion reactions, allogeneic transplant complications, and embryo-fetal toxicity.",
    cost: "New biologic combination layered onto chemotherapy and, for the broader HER2-positive group, PD-1 therapy; official price not verified", indiaPrice: "No official US list price, India price, CDSCO approval, reimbursement, procurement figure, or India launch date for these first-line Ziihera-containing GEA regimens was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India unverified", launch: "FDA approval 25 August 2026",
    indiaCaveat: "No verified CDSCO authorization, India availability, official launch date, price, reimbursement decision, or procurement pathway for zanidatamab-containing first-line HER2-positive GEA regimens was identified.",
    limitations: "The pivotal trial was open-label. The zanidatamab-plus-chemotherapy arm had statistically significant PFS, but OS was not statistically significant at the interim analysis, and FDA noted exploratory evidence that Arm B's effect was primarily attributed to IHC 3+ tumors. Cross-trial comparison with other HER2/PD-1 strategies should be avoided.",
    detailSections: [
      ["Event date / geography", "25 August 2026 FDA approval - United States; FDA collaborated with Health Canada and the UK MHRA through Project Orbis, with other agency reviews ongoing.", "wide"],
      ["Population / sample", "Adults with unresectable locally advanced or metastatic HER2-positive gastroesophageal adenocarcinoma, including gastric, gastroesophageal junction, and esophageal adenocarcinoma, in HERIZON-GEA-01 (NCT05152147).", "wide"],
      ["Comparator", "Three-arm randomized, open-label active-comparator trial: trastuzumab plus CAPOX or FP chemotherapy; zanidatamab plus CAPOX or FP; or zanidatamab plus tislelizumab plus CAPOX or FP.", "wide"],
      ["Primary endpoints", "Dual major efficacy outcomes were blinded independent central review progression-free survival by RECIST v1.1 and overall survival.", "wide"],
      ["Effect size detail", "For zanidatamab plus tislelizumab plus chemotherapy versus trastuzumab plus chemotherapy in IHC 3+ or IHC 2+/ISH+ tumors, median OS was 26.4 months (95% CI 21.5-30.3) versus 19.2 months (95% CI 16.8-21.8), HR 0.72 (95% CI 0.57-0.90), p=0.0043; median PFS was 12.4 versus 8.1 months, HR 0.63 (95% CI 0.51-0.78), p<0.0001. For zanidatamab plus chemotherapy in IHC 3+ tumors, median PFS was 14.2 versus 7.6 months, HR 0.55 (95% CI 0.43-0.69).", "wide"],
      ["Companion diagnostics", "FDA also approved Ventana/Roche PATHWAY anti-HER-2/neu (4B5) and VENTANA HER2 Dual ISH DNA Probe Cocktail companion diagnostic devices for identifying eligible HER2-positive gastric, GEJ, and esophageal adenocarcinoma patients.", "wide"],
      ["Regulatory status", "FDA approved on 25 August 2026 with priority review, Real-Time Oncology Review, Assessment Aid, Project Orbis, and Fast Track, breakthrough therapy, and orphan drug designations for zanidatamab-hrii.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-zanidatamab-hrii-and-tislelizumab-jsgr-her2-positive-gastric-gastroesophageal-junction",
    sourceLabel: "FDA approval notice",
    supportingSources: [
      { label: "FDA oncology approval notifications index", url: "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications" },
      { label: "Jazz Pharmaceuticals approval release", url: "https://jazzpharma.gcs-web.com/news-releases/news-release-details/us-fda-approves-ziiherar-zanidatamab-hrii-and-without" },
      { label: "ClinicalTrials.gov HERIZON-GEA-01 registry", url: "https://clinicaltrials.gov/study/NCT05152147" }
    ]
  },
  {
    id: "gedatolisib", short: "Revtorpyk", name: "Gedatolisib + Fulvestrant", cancer: "Breast cancer",
    setting: "HR-positive / HER2-negative after endocrine progression", company: "Celcuity", phase: "Phase III",
    impact: "High", impactGroup: "high", maturity: 99, impactScore: 93,
    eventDate: "2026-07-14",
    headline: "PFS HR 0.24-0.33", headlineNote: "9.3 vs 2.0 months or 7.4 vs 2.0 in VIKTORIA-1",
    benefit: "FDA approved gedatolisib with fulvestrant, with or without palbociclib, for PIK3CA-wild-type HR-positive/HER2-negative metastatic breast cancer after endocrine progression, adding a large progression-free-survival gain in a setting where many patients have already exhausted first-line endocrine options.",
    safety: "The label carries warnings for stomatitis, dermatologic adverse reactions, hyperglycemia, and embryo-fetal toxicity. Overall survival data were immature at the approval analysis.",
    cost: "New intravenous targeted-therapy cost not yet officially posted", indiaPrice: "No official US list price, India price, or government procurement figure for Revtorpyk was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India launch unverified", launch: "FDA approval 14 July 2026",
    indiaCaveat: "No verified CDSCO approval, India launch date, or official reimbursement/procurement announcement for gedatolisib was identified.",
    limitations: "The pivotal trial was open-label, overall survival was immature with 25% deaths at the PFS analysis, and the approved label applies only to tumors without a detected PIK3CA mutation after prior metastatic endocrine therapy.",
    detailSections: [
      ["Event date / geography", "14 July 2026 FDA approval · United States", "wide"],
      ["Population / sample", "392 adults with locally advanced inoperable or metastatic HR-positive, HER2-negative breast cancer without a detected PIK3CA mutation following progression on or after at least one line of endocrine therapy in the metastatic setting", "wide"],
      ["Comparator", "Gedatolisib plus fulvestrant plus palbociclib, or gedatolisib plus fulvestrant, versus fulvestrant alone in the open-label randomized VIKTORIA-1 trial", "wide"],
      ["Primary endpoint", "Blinded independent central review progression-free survival for each gedatolisib arm versus fulvestrant alone; OS, ORR, and duration of response were additional endpoints", "wide"],
      ["Effect size detail", "Median PFS was 9.3 versus 2.0 months for the triplet arm (HR 0.24; 95% CI 0.17-0.35) and 7.4 versus 2.0 months for the doublet arm (HR 0.33; 95% CI 0.24-0.48). ORR was 32%, 28%, and 1%, respectively; median duration of response was 17.5 months and 12.0 months in the gedatolisib arms.", "wide"],
      ["Regulatory status", "FDA approved on 14 July 2026. No verified EMA, CDSCO, or other national authorization for gedatolisib was captured in this pass.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-gedatolisib-fulvestrant-or-without-palbociclib-hr-positive-her2-negative-locally",
    sourceLabel: "FDA approval notice"
  },
  {
    id: "pluvicto-mapmns", short: "Pluvicto + ARPI", name: "Pluvicto + ARPI in mAPMN/S Prostate Cancer", cancer: "Prostate cancer",
    setting: "PSMA-positive metastatic androgen pathway modulation-naive / sensitive", company: "Novartis", phase: "Phase III",
    impact: "High, OS immature", impactGroup: "high", maturity: 99, impactScore: 89,
    eventDate: "2026-07-31",
    headline: "rPFS HR 0.72", headlineNote: "PSMAddition; median rPFS not reached in either arm",
    benefit: "FDA approved lutetium Lu 177 vipivotide tetraxetan with an androgen receptor pathway inhibitor for PSMA-positive metastatic androgen pathway modulation-naive or -sensitive prostate cancer, moving radioligand therapy into an earlier metastatic setting when PSMA PET selection is positive.",
    safety: "Warnings include radiation exposure, myelosuppression, renal toxicity, embryo-fetal toxicity, and infertility; adverse reactions were consistent with prior Pluvicto experience.",
    cost: "High radioligand-therapy cost and nuclear-medicine delivery burden; official new-indication price not verified", indiaPrice: "No official India price, procurement figure, or CDSCO label update for this exact mAPMN/S combination indication was verified in this pass.",
    indiaStatus: "limited", indiaLabel: "US approved; India label unverified", launch: "FDA approval 31 July 2026",
    indiaCaveat: "Pluvicto access in India for prostate cancer could not be confirmed from an official current source for this exact newly approved US indication; no official India launch date, price, reimbursement, or procurement pathway for mAPMN/S use was verified.",
    limitations: "The open-label randomized trial improved radiographic progression-free survival, but median rPFS was not reached in either arm and overall survival was immature. Adoption depends on PSMA PET availability, radioligand manufacturing/logistics, radiation-safety infrastructure, renal and marrow monitoring, and payer access.",
    detailSections: [
      ["Event date / geography", "31 July 2026 FDA approval - United States; FDA collaborated with the UK MHRA through Project Orbis and other agency reviews were ongoing.", "wide"],
      ["Population / sample", "Adults with PSMA-positive metastatic androgen pathway modulation-naive or -sensitive prostate cancer; FDA notes this was previously referred to as metastatic hormone-sensitive prostate cancer. PSMAddition randomized 572 patients to Pluvicto plus ARPI and 572 to ARPI alone.", "wide"],
      ["Comparator", "Lutetium Lu 177 vipivotide tetraxetan every 6 weeks for six doses in combination with investigator-choice ARPI versus ARPI alone, with concurrent ADT or prior bilateral orchiectomy as applicable.", "wide"],
      ["Primary endpoint", "Radiographic progression-free survival by blinded independent central review; overall survival was an additional efficacy endpoint.", "wide"],
      ["Effect size detail", "Median rPFS was not reached in either arm; HR 0.72 (95% CI 0.58-0.90; p=0.002). FDA stated OS data were immature at the current analysis. Novartis earlier reported PSA-progression risk reduction of 58% (HR 0.42; 95% CI 0.30-0.59) as supportive PSMAddition biomarker evidence.", "wide"],
      ["Selection requirement", "Patients should be selected using Locametz or another approved PSMA PET product based on PSMA expression in tumors.", "wide"],
      ["Regulatory status", "FDA approved on 31 July 2026 one month ahead of the goal date. UK MHRA review was part of Project Orbis and was still ongoing in FDA's notice; no verified CDSCO or EMA authorization for this exact earlier-line indication was captured.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-lutetium-lu-177-vipivotide-tetraxetan-androgen-receptor-pathway-inhibitor-therapy",
    sourceLabel: "FDA approval notice",
    supportingSources: [
      {
        label: "FDA oncology approval notifications index",
        url: "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications"
      },
      {
        label: "Novartis PSMAddition PSA response update",
        url: "https://www.novartis.com/news/media-releases/new-psmaddition-data-show-58-lower-risk-psa-progression-pluvicto-metastatic-hormone-sensitive-prostate-cancer"
      },
      {
        label: "ClinicalTrials.gov PSMAddition registry",
        url: "https://clinicaltrials.gov/study/NCT04720157"
      }
    ]
  },
  {
    id: "iberdomide-iberd", short: "Zenbexus + IberDd", name: "Iberdomide + Daratumumab/Dexamethasone", cancer: "Multiple myeloma",
    setting: "Relapsed or refractory after 1+ prior line including PI and IMiD", company: "Bristol Myers Squibb", phase: "Phase III; accelerated approval",
    impact: "High in early-relapse myeloma, confirmatory benefit required", impactGroup: "high", maturity: 99, impactScore: 85,
    eventDate: "2026-08-13",
    headline: "MRD-negative CR 41% vs 21%", headlineNote: "EXCALIBER-RRMM; accelerated approval",
    benefit: "FDA granted accelerated approval to iberdomide, marketed as Zenbexus, with daratumumab and hyaluronidase-fihj plus dexamethasone for adults with multiple myeloma after at least one prior line including a proteasome inhibitor and an immunomodulatory agent.",
    safety: "The prescribing information includes boxed warnings for embryo-fetal toxicity and serious venous and arterial thromboembolism, plus warnings for neutropenia, infections, and secondary primary malignancies. Iberdomide is available only through the ZENBEXUS REMS because of embryo-fetal toxicity risk.",
    cost: "New oral CELMoD added to anti-CD38/dexamethasone regimen; official commercial price not verified", indiaPrice: "No official US list price, India price, CDSCO approval, reimbursement, procurement figure, or India launch date for Zenbexus was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US accelerated approval; India unverified", launch: "FDA accelerated approval 13 August 2026",
    indiaCaveat: "EXCALIBER-RRMM included India sites, but no verified CDSCO authorization, India availability, official launch date, price, reimbursement decision, or procurement pathway for Zenbexus was identified. India relevance is currently indirect until a local regulatory or access action is official.",
    limitations: "Accelerated approval is based on MRD-negative complete response rather than mature progression-free or overall-survival benefit. The pivotal study was open-label, excluded patients refractory to prior anti-CD38 monoclonal antibody therapy or prior bortezomib, and continued approval may depend on verification of clinical benefit.",
    detailSections: [
      ["Event date / geography", "13 August 2026 FDA accelerated approval - United States; FDA says the review used Project Orbis, RTOR, Assessment Aid, priority review, breakthrough therapy designation, and orphan drug designation.", "wide"],
      ["Population / sample", "Adults with relapsed or refractory multiple myeloma after one or two prior lines of therapy; the approved indication requires at least one prior line including a proteasome inhibitor and an immunomodulatory agent. Patients refractory to prior anti-CD38 monoclonal antibody therapy or prior bortezomib were excluded from EXCALIBER-RRMM.", "wide"],
      ["Comparator", "Iberdomide 1 mg with daratumumab and hyaluronidase-fihj plus dexamethasone versus daratumumab and hyaluronidase-fihj, bortezomib, and dexamethasone in the randomized, multicenter, open-label EXCALIBER-RRMM trial.", "wide"],
      ["Primary endpoint", "FDA identified MRD-negative complete response at any time as the major efficacy outcome measure for accelerated approval.", "wide"],
      ["Effect size detail", "In the first 420 patients randomized to iberdomide 1 mg plus Dd (n=207) or DVd (n=213) across stages 1 and 2, MRD-negative CR at any time was 41% (95% CI 34-48) versus 21% (95% CI 15-27), p<0.0001.", "wide"],
      ["Regulatory status", "FDA accelerated approval on 13 August 2026. No verified EMA, CDSCO, or other national authorization for Zenbexus was captured in this pass; anticipated India launch remains no official date announced.", "wide"],
      ["Dose / administration", "Iberdomide 1 mg orally once daily on Days 1-21 of each 28-day cycle, with subcutaneous daratumumab and hyaluronidase-fihj plus dexamethasone until disease progression or unacceptable toxicity.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-iberdomide-daratumumab-and-hyaluronidase-fihj-and-dexamethasone",
    sourceLabel: "FDA accelerated approval notice",
    supportingSources: [
      {
        label: "FDA oncology approval notifications index",
        url: "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications"
      },
      {
        label: "ClinicalTrials.gov EXCALIBER-RRMM registry",
        url: "https://clinicaltrials.gov/study/NCT04975997"
      },
      {
        label: "Bristol Myers Squibb NDA acceptance release",
        url: "https://news.bms.com/news/details/2026/U-S--Food-and-Drug-Administration-Accepts-Bristol-Myers-Squibbs-New-Drug-Application-for-Iberdomide-in-Patients-with-Relapsed-or-Refractory-Multiple-Myeloma/default.aspx"
      }
    ]
  },
  {
    id: "tudriqev-rp1", short: "Tudriqev + nivolumab", name: "Tudriqev + Nivolumab", cancer: "Melanoma",
    setting: "Unresectable advanced cutaneous melanoma after anti-PD-1 progression", company: "Replimune + Bristol Myers Squibb", phase: "Single-arm IGNYTE; accelerated approval",
    impact: "High unmet-need approval, confirmatory trial required", impactGroup: "high", maturity: 99, impactScore: 86,
    eventDate: "2026-08-06",
    headline: "ORR 24.2%", headlineNote: "Median DoR 14.1 months; accelerated approval",
    benefit: "FDA granted accelerated approval to vusolimogene oderparepvec-wtpg, a genetically modified oncolytic viral therapy marketed as Tudriqev, with nivolumab for adults with unresectable advanced cutaneous melanoma whose disease progressed on a PD-1-blocking antibody-based regimen.",
    safety: "Warnings and precautions include accidental exposure, herpetic infection or reactivation, injection-procedure complications, and immune-mediated events. Common adverse reactions included fatigue, pyrexia, infections, chills, musculoskeletal pain, gastrointestinal symptoms, injection-site reaction, rash, dyspnea, hemorrhage, edema, and abdominal pain.",
    cost: "New intratumoral oncolytic viral therapy plus nivolumab cost; official commercial price not verified", indiaPrice: "No official US price, India price, CDSCO approval, reimbursement, procurement figure, or India launch date for Tudriqev was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US accelerated approval; India unverified", launch: "FDA accelerated approval 6 August 2026",
    indiaCaveat: "No verified CDSCO authorization, India availability, official launch date, price, reimbursement decision, or procurement pathway was identified. India relevance is currently indirect and depends on future local filing, import access, clinical capacity for intratumoral administration, and nivolumab combination affordability.",
    limitations: "Accelerated approval is based on objective response rate and duration of response from an open-label, multiregional, single-arm trial. Continued approval may depend on confirmatory trial verification of clinical benefit; the FDA advisory review previously highlighted interpretability concerns around single-arm evidence, injected-lesion response assessment, and isolating RP1's contribution from nivolumab.",
    detailSections: [
      ["Event date / geography", "6 August 2026 FDA accelerated approval - United States", "wide"],
      ["Population / sample", "IGNYTE enrolled 140 adults with Stage IIIB, IIIC, or IV unresectable advanced melanoma after disease progression on at least eight consecutive weeks of prior anti-PD-1-based therapy; FDA reported 91 patients with at least one noninjected lesion in the efficacy-evaluable population.", "wide"],
      ["Comparator", "No concurrent randomized comparator. The approval relies on single-arm response durability evidence, with confirmatory post-approval trial requirements.", "wide"],
      ["Primary endpoint", "Objective response rate and duration of response for accelerated approval.", "wide"],
      ["Effect size detail", "ORR was 24.2% with 95% CI 15.8%-34.3%; median duration of response was 14.1 months with 95% CI 10.7 months-not reached.", "wide"],
      ["Regulatory status", "FDA accelerated approval for Tudriqev with nivolumab in adult unresectable advanced cutaneous melanoma after PD-1-blocking antibody-based progression. FDA states Replimune must conduct post-approval trial(s) to verify and describe clinical benefit, and continued approval may be contingent on those results.", "wide"],
      ["Administration", "Intratumoral vusolimogene oderparepvec-wtpg every two weeks for eight consecutive doses, with nivolumab started intravenously at Week 3 according to nivolumab prescribing information.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-vusolimogene-oderparepvec-wtpg-combination-nivolumab-melanoma",
    sourceLabel: "FDA accelerated approval notice",
    supportingSources: [
      {
        label: "FDA oncology approval notifications index",
        url: "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications"
      },
      {
        label: "FDA advisory committee materials",
        url: "https://www.fda.gov/advisory-committees/cellular-tissue-and-gene-therapies-advisory-committee/2026-meeting-materials-cellular-tissue-and-gene-therapies-advisory-committee"
      },
      {
        label: "ClinicalTrials.gov IGNYTE registry",
        url: "https://clinicaltrials.gov/study/NCT03767348"
      }
    ]
  },
  {
    id: "selpercatinib", short: "Retevmo", name: "Tumor-Agnostic Selpercatinib", cancer: "RET fusion solid tumors",
    setting: "Locally advanced or metastatic, post-systemic therapy", company: "Eli Lilly and Company", phase: "Basket trial / registrational",
    impact: "High in biomarker-defined rare cancers", impactGroup: "high", maturity: 99, impactScore: 88,
    eventDate: "2026-07-14",
    headline: "ORR 47%", headlineNote: "Median DoR 24.5 months in LIBRETTO-001",
    benefit: "FDA converted selpercatinib's tumor-agnostic RET fusion indication to traditional approval, preserving a genomics-first option across multiple rare solid tumors where matched targeted therapies are uncommon and biopsy-quality molecular testing directly changes treatment choice.",
    safety: "The label warns of hepatotoxicity, interstitial lung disease or pneumonitis, hypertension, QT prolongation, hemorrhagic events, hypersensitivity, tumor lysis syndrome, impaired wound healing, hypothyroidism, embryo-fetal toxicity, and pediatric slipped capital femoral epiphysis.",
    cost: "Precision targeted-therapy cost remains high", indiaPrice: "No official India price, procurement figure, or tumor-agnostic RET-fusion label update for selpercatinib was verified in this pass.",
    indiaStatus: "limited", indiaLabel: "US approved; India solid-tumor label unverified", launch: "Traditional FDA approval 14 July 2026",
    indiaCaveat: "No verified CDSCO authorization, India launch update, or reimbursement/procurement announcement for this tumor-agnostic RET-fusion use was identified.",
    limitations: "The registrational evidence was single-arm and tumor-agnostic rather than randomized, with heterogeneous histologies and relatively sparse pediatric non-thyroid data, so effect size by tumor type and sequencing versus local standards still need case-by-case judgment.",
    detailSections: [
      ["Event date / geography", "14 July 2026 traditional FDA approval · United States", "wide"],
      ["Population / sample", "75 adults with RET fusion-positive solid tumors other than NSCLC and thyroid cancer in LIBRETTO-001, with pediatric and young-adult support from LIBRETTO-121 in refractory RET fusion-positive solid tumors", "wide"],
      ["Comparator", "Single-arm basket-trial evidence with no randomized control arm; activity was judged by response rate and response durability with additional support from prior RET-driven lung and thyroid cohorts", "wide"],
      ["Primary endpoint", "Overall response rate and duration of response", "wide"],
      ["Effect size detail", "ORR was 47% (95% CI 35-59) with a median duration of response of 24.5 months (95% CI 11.2-49.1). Adult responses were seen across colorectal, pancreatic, salivary, soft tissue sarcoma, cholangiocarcinoma, skin, unknown-primary, breast, bronchial carcinoid, ovarian, small-intestine, and neuroendocrine tumors.", "wide"],
      ["Regulatory status", "FDA granted traditional approval on 14 July 2026 after earlier accelerated approvals in adults and pediatric patients. No verified EMA or CDSCO tumor-agnostic RET-fusion authorization beyond this FDA action was captured in this pass.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-traditional-approval-selpercatinib-locally-advanced-or-metastatic-ret-fusion-positive",
    sourceLabel: "FDA approval notice"
  },
  {
    id: "zidesamtinib", short: "Jideytro", name: "Zidesamtinib After ROS1 TKI", cancer: "Lung cancer",
    setting: "ROS1-positive metastatic after prior ROS1 inhibitor", company: "GSK / Nuvalent", phase: "Phase I/II registrational",
    impact: "High in resistant molecular subset", impactGroup: "high", maturity: 98, impactScore: 86,
    eventDate: "2026-07-22",
    headline: "ORR 44%", headlineNote: "12-month DoR rate 69% in ARROS-1",
    benefit: "GSK announced FDA approval of zidesamtinib for previously treated ROS1-positive non-small cell lung cancer, adding a new ROS1-selective option in a niche where resistance mutations and brain progression complicate sequencing after earlier ROS1 kinase inhibitors.",
    safety: "The released prescribing information lists oedema, peripheral neuropathy, constipation, fatigue and dyspnoea as the most common adverse reactions. Comparative tolerability versus other ROS1 inhibitors remains uncertain because the registrational evidence was single-arm.",
    cost: "Official launch pricing not yet verified", indiaPrice: "No official US list price, India price, or government procurement figure for Jideytro was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India launch unverified", launch: "US approval announced 22 July 2026",
    indiaCaveat: "No verified CDSCO approval, India launch date, or reimbursement/procurement announcement for zidesamtinib was identified.",
    limitations: "The approval was supported by a single-arm phase I/II cohort rather than a randomized comparator, and the labeled population is limited to adults previously treated with a ROS1 kinase inhibitor. The FDA oncology approvals index had not yet visibly incorporated this action in this pass, so the regulatory fact was captured from GSK's official release and the released US prescribing information.",
    detailSections: [
      ["Event date / geography", "22 July 2026 approval announcement · United States", "wide"],
      ["Population / sample", "117 adults with locally advanced or metastatic ROS1-positive non-small cell lung cancer previously treated with a ROS1 kinase inhibitor in the ARROS-1 registrational cohort", "wide"],
      ["Comparator", "Single-arm phase I/II evidence with no randomized control arm; activity was judged against response durability and unmet need after prior ROS1 TKI exposure", "wide"],
      ["Primary endpoint", "Confirmed objective response rate by blinded independent central review; duration of response was a key additional outcome", "wide"],
      ["Effect size detail", "Confirmed ORR was 44% (95% CI 34-53). Duration-of-response rates were 82% at 6 months and 69% at 12 months, with responses reported in patients with brain metastases and ROS1 resistance mutations.", "wide"],
      ["Regulatory status", "GSK announced FDA approval on 22 July 2026, ahead of the original 18 September 2026 target action date, and released US prescribing information. No verified EMA, CDSCO, or other national authorization for zidesamtinib was captured in this pass.", "wide"]
    ],
    source: "https://www.gsk.com/en-gb/media/press-releases/jideytro-zidesamtinib-approved-in-the-us-for-previously-treated-ros1-positive-non-small-cell-lung-cancer/",
    sourceLabel: "Official company release",
    supportingSources: [
      {
        label: "US prescribing information",
        url: "https://nuvalent.com/pdfs/jideytro-full-prescribing-information.pdf"
      },
      {
        label: "ClinicalTrials.gov registry",
        url: "https://clinicaltrials.gov/study/NCT05118789"
      }
    ]
  },
  {
    id: "cretostimogene", short: "Cretostimogene", name: "Cretostimogene in BCG-Unresponsive NMIBC", cancer: "Bladder cancer",
    setting: "High-risk non-muscle invasive with CIS, with or without Ta/T1", company: "CG Oncology", phase: "Phase III",
    impact: "High in bladder-sparing gap", impactGroup: "high", maturity: 88, impactScore: 82,
    eventDate: "2026-07-27",
    headline: "CR 75.5%", headlineNote: "Median DoR 27.9 months in BOND-003 Cohort C",
    benefit: "Peer-reviewed phase III evidence suggests a durable bladder-sparing option for high-risk BCG-unresponsive NMIBC with carcinoma in situ, a setting where radical cystectomy is often the default next step after failed intravesical therapy.",
    safety: "CG Oncology reported no grade 3 or higher treatment-related adverse events, no treatment-related discontinuations or deaths, and mainly short-lived lower-urinary-tract symptoms such as bladder spasm, urgency, dysuria and hematuria.",
    cost: "Investigational bladder-sparing therapy; no official commercial pricing", indiaPrice: "No official India price, procurement figure, or named-patient commercial access pathway was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "Investigational; India launch unverified", launch: "Peer-reviewed publication 27 July 2026",
    indiaCaveat: "No verified CDSCO approval, India launch date, or public reimbursement/procurement announcement for cretostimogene was identified.",
    limitations: "The evidence remains single-arm rather than randomized, the pivotal cohort was relatively small, and the product is still investigational. The care-changing signal is stronger after peer-reviewed publication, but cross-trial comparisons against existing BCG-unresponsive options remain inappropriate.",
    detailSections: [
      ["Event date / geography", "27 July 2026 Lancet Oncology publication of the global BOND-003 Cohort C phase III trial; no FDA approval or CDSCO authorization was verified in this pass.", "wide"],
      ["Population / sample", "112 enrolled patients with high-risk BCG-unresponsive NMIBC with CIS with or without concomitant high-grade Ta/T1 disease; 110 were efficacy-evaluable in the published dataset.", "wide"],
      ["Comparator", "Single-arm phase III study benchmarked against historical and contemporary BCG-unresponsive NMIBC outcomes rather than a randomized control arm.", "wide"],
      ["Primary endpoint", "Complete response at any time; duration of response, cystectomy-free survival, progression-free survival and safety were key secondary outcomes.", "wide"],
      ["Effect size detail", "CR at any time was 75.5% (95% CI 66.3-83.2). Estimated 12- and 24-month duration of response was 64.2% and 60.1%, with median duration of response 27.9 months. About 89% and 81% of patients remained cystectomy-free at 12 and 24 months, and 96.6% remained free from progression to muscle-invasive disease at 48 and 96 weeks.", "wide"],
      ["Regulatory status", "Investigational therapy. CG Oncology's release states the program has FDA Fast Track and Breakthrough Therapy designations for BCG-unresponsive high-risk NMIBC with CIS, but no new approval decision was visible in this 27-28 July 2026 pass.", "wide"]
    ],
    source: "https://ir.cgoncology.com/news-releases/news-release-details/cg-oncology-announces-publication-pivotal-phase-3-bond-003",
    sourceLabel: "Official company release",
    supportingSources: [
      {
        label: "Lancet Oncology abstract",
        url: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(26)00194-4/abstract"
      },
      {
        label: "ClinicalTrials.gov registry",
        url: "https://clinicaltrials.gov/study/NCT04452591"
      },
      {
        label: "Earlier JCO abstract with matching BOND-003 Cohort C efficacy figures",
        url: "https://ascopubs.org/doi/10.1200/JCO.2026.44.7_suppl.741"
      }
    ]
  },
  {
    id: "pembro-enfortumab-mibc", short: "Padcev + Keytruda", name: "Perioperative Pembrolizumab + Enfortumab", cancer: "Bladder cancer",
    setting: "Muscle-invasive, cystectomy-eligible", company: "Merck + Astellas Pharma", phase: "Phase III",
    impact: "High", impactGroup: "high", maturity: 99, impactScore: 92,
    eventDate: "2026-07-10",
    headline: "EFS HR 0.53", headlineNote: "OS HR 0.65 in KEYNOTE-B15 / EV-304",
    benefit: "FDA expanded perioperative pembrolizumab plus enfortumab vedotin to all cystectomy-eligible muscle-invasive bladder cancer patients, not just the cisplatin-ineligible subset, after a direct randomized improvement over gemcitabine/cisplatin in a curative-intent setting.",
    safety: "Pembrolizumab retains immune-mediated and infusion-related toxicity risks. Enfortumab vedotin carries warnings for skin reactions, hyperglycemia, pneumonitis/interstitial lung disease, peripheral neuropathy, ocular disorders and infusion site extravasation.",
    cost: "High dual-agent perioperative immunotherapy plus ADC cost", indiaPrice: "No official US list-price update, India price, or government procurement figure for this perioperative regimen was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India perioperative label unverified", launch: "FDA approval 10 July 2026",
    indiaCaveat: "No verified CDSCO approval, India launch date, or official reimbursement/procurement announcement for this muscle-invasive bladder cancer use was identified.",
    limitations: "The pivotal trial was open-label and enrolled cisplatin-eligible surgical candidates. Longer follow-up is still needed for cure durability, perioperative tolerability in routine practice, and regional reimbursement/adoption outside the FDA setting.",
    detailSections: [
      ["Event date / geography", "10 July 2026 FDA approval · United States; global Project Orbis review with other agencies still ongoing", "wide"],
      ["Population / sample", "808 previously untreated adults with muscle-invasive bladder cancer who were candidates for radical cystectomy with pelvic lymph node dissection and were eligible for cisplatin-based chemotherapy", "wide"],
      ["Comparator", "Neoadjuvant pembrolizumab plus enfortumab vedotin followed by surgery and adjuvant pembrolizumab plus enfortumab vedotin versus neoadjuvant gemcitabine and cisplatin followed by surgery", "wide"],
      ["Primary endpoint", "Event-free survival by blinded independent central review; overall survival was an additional efficacy endpoint", "wide"],
      ["Effect size detail", "Median EFS was not reached versus 48.5 months; HR 0.53 (95% CI 0.41-0.70). Median OS was not reached in either arm; HR 0.65 (95% CI 0.48-0.89).", "wide"],
      ["Regulatory status", "FDA approved on priority review and five weeks ahead of the goal date. The FDA page states collaborating Project Orbis agency reviews remain ongoing; no verified CDSCO, EMA or other national authorization for this perioperative use was captured in this pass.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-pembrolizumab-or-pembrolizumab-and-berahyaluronidase-alfa-pmph-each-enfortumab-vedotin",
    sourceLabel: "FDA approval notice"
  },
  {
    id: "isatuximab-sc", short: "Sarclisa Escena", name: "Subcutaneous Isatuximab", cancer: "Multiple myeloma",
    setting: "Newly diagnosed + relapsed / refractory", company: "Sanofi", phase: "Noninferiority / phase II",
    impact: "Operationally high, clinical impact unproven", impactGroup: "moderate", maturity: 98, impactScore: 68,
    eventDate: "2026-07-09",
    headline: "ORR 71.1% vs 70.5%", headlineNote: "Subcutaneous route matched IV activity in IRAKLIA",
    benefit: "FDA approved subcutaneous isatuximab across three multiple myeloma regimens, a material care-delivery shift that could reduce chair-time burden and make anti-CD38 treatment logistics easier without losing short-term activity versus IV delivery in the pivotal noninferiority trial.",
    safety: "Label warnings include hypersensitivity and other administration reactions, neutropenia, infections, secondary primary malignancies, laboratory test interference and embryo-fetal toxicity.",
    cost: "Route-convenience value, but official pricing not verified", indiaPrice: "No official US list-price update, India price, or procurement figure for Sarclisa Escena was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India route unverified", launch: "FDA approval 9 July 2026",
    indiaCaveat: "No verified CDSCO approval, India launch announcement, or local delivery-system availability was identified for the subcutaneous product.",
    limitations: "The pivotal evidence established noninferior response and higher trough concentrations versus IV delivery, not superior survival or quality-of-life outcomes. Two of the three approved regimens relied on 74-patient phase II datasets rather than randomized route-comparison trials.",
    detailSections: [
      ["Event date / geography", "9 July 2026 FDA approval · United States", "wide"],
      ["Population / sample", "IRAKLIA randomized 531 previously treated patients; supporting single-arm phase II datasets enrolled 74 relapsed/refractory patients in IZALCO and 74 transplant-ineligible newly diagnosed patients in IsaSocut", "wide"],
      ["Comparator", "Subcutaneous isatuximab with pomalidomide/dexamethasone versus intravenous isatuximab with pomalidomide/dexamethasone in IRAKLIA; single-arm support for the carfilzomib/dexamethasone and VRd regimens", "wide"],
      ["Primary endpoint", "Overall response rate and steady-state trough concentration in IRAKLIA", "wide"],
      ["Effect size detail", "IRAKLIA ORR was 71.1% (95% CI 65.2-76.5) with subcutaneous dosing versus 70.5% (95% CI 64.7-75.9) with IV dosing; steady-state trough geometric mean ratio was 1.53 (90% CI 1.32-1.78). Supporting ORR was 79.7% (95% CI 68.8-88.2) in IZALCO and 97.3% (95% CI 90.6-99.7) in IsaSocut.", "wide"],
      ["Regulatory status", "FDA approved subcutaneous isatuximab-irfc across three multiple myeloma indications. No verified EMA, CDSCO or other national approval for the subcutaneous product was captured in this pass.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-isatuximab-irfc-subcutaneous-injection-multiple-myeloma-indications",
    sourceLabel: "FDA approval notice"
  },
  {
    id: "tregzi", short: "Tregzi", name: "Tregzi Transplant Cell Therapy", cancer: "Hematologic malignancies",
    setting: "Matched-donor myeloablative HSCT", company: "Orca Bio", phase: "Phase III",
    impact: "High", impactGroup: "high", maturity: 99, impactScore: 90,
    eventDate: "2026-06-30",
    headline: "cGVHD-free survival HR 0.26", headlineNote: "12-month cGFS 78% vs 38% in Precision-T",
    benefit: "FDA approved a personalized allogeneic Treg/HSPC/T-cell graft platform that reduced chronic GVHD or death after matched-donor transplant in adults with acute leukemias or MDS, addressing a major toxicity bottleneck in curative-intent blood-cancer care.",
    safety: "Common adverse reactions included mucositis, diarrhea, rash and infections. The label warns of graft failure, acute and chronic GVHD, infusion reactions, secondary malignancies, donor-origin malignancies and infectious-agent transmission.",
    cost: "Personalized transplant cell therapy; official price not verified", indiaPrice: "No official US list price, India price, or public procurement figure was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "US approved; India unverified", launch: "FDA approval 30 June 2026",
    indiaCaveat: "No verified CDSCO filing, India launch date, or transplant-center availability announcement was identified.",
    limitations: "Open-label transplant evidence in matched-donor myeloablative HSCT needs longer follow-up for relapse, late survival, generalizability beyond trial centers and eventual affordability/access assessment.",
    detailSections: [
      ["Event date / geography", "30 June 2026 FDA approval · United States; multicenter US trial", "wide"],
      ["Population / sample", "187 adults aged 19-65 years with AML, ALL, MDS or MPAL undergoing matched-donor allogeneic HSCT after myeloablative conditioning", "wide"],
      ["Comparator", "Unmanipulated allograft with tacrolimus plus methotrexate GVHD prophylaxis versus Tregzi followed by tacrolimus alone", "wide"],
      ["Primary endpoint", "Chronic GVHD-free survival, defined as death or moderate-to-severe chronic GVHD after transplant", "wide"],
      ["Effect size detail", "Median cGFS was not estimable versus 7.3 months; HR 0.26 (95% CI 0.14-0.47). Moderate-to-severe chronic GVHD at 12 months was 12.6% versus 44.0%; HR 0.19 (95% CI 0.08-0.43).", "wide"],
      ["Regulatory status", "FDA approved with priority review, orphan drug designation and RMAT designation. No verified EMA, CDSCO or other national approval was captured in this pass.", "wide"]
    ],
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-allogeneic-regulatory-t-cell-based-immunotherapy-hspc-and-t-cells-vldq-use-matched",
    sourceLabel: "FDA approval notice",
    supportingSources: [
      {
        label: "Official company release",
        url: "https://orcabio.com/orca-bios-tregzi-receives-u-s-fda-approval-as-first-and-only-precision-engineered-cell-therapy-for-allogeneic-transplant-in-adults-with-hematological-malignanciesorca-bio-adds-east/"
      }
    ]
  },
  {
    id: "durvalumab", short: "Durvalumab", name: "Neoadjuvant Durvalumab", cancer: "Breast cancer",
    setting: "Early triple-negative", company: "AstraZeneca", phase: "Phase II",
    impact: "Moderate-high", impactGroup: "moderate", maturity: 67, impactScore: 73,
    headline: "OS HR 0.33", headlineNote: "Long-term follow-up at median 86.4 months",
    benefit: "Improved invasive disease-free, distant disease-free and overall survival despite no decisive overall pCR improvement. Suggests durable immune priming may be possible without routine adjuvant continuation.",
    safety: "Checkpoint blockade can cause permanent endocrinopathies and serious immune pneumonitis, hepatitis, colitis and other organ toxicity.",
    cost: "High; shorter duration could save cost", indiaPrice: "Imfinzi 500 mg revised MRP ₹1.713 lakh; pharmacy listings approximately ₹1.47-₹1.71 lakh.",
    indiaStatus: "available", indiaLabel: "Product available", launch: "Already launched",
    indiaCaveat: "The GeparNuevo early-TNBC use is not an established Indian labeled indication.",
    limitations: "Small phase II trial and no direct comparison with current perioperative pembrolizumab standard.",
    source: "https://ascopubs.org/doi/10.1200/JCO-25-02311"
  },
  {
    id: "talentop", short: "TALENTOP", name: "Liver Resection After Atezolizumab/Bevacizumab", cancer: "Hepatocellular carcinoma",
    setting: "Macrovascular invasion, no extrahepatic metastasis, disease controlled after induction", company: "Investigator-led / Shanghai Roche-funded", phase: "Phase III",
    impact: "High in selected responders, OS pending", impactGroup: "high", maturity: 90, impactScore: 86,
    eventDate: "2026-08-20",
    headline: "TTF HR 0.60", headlineNote: "Median 20.4 vs 11.8 months; p=0.015",
    benefit: "In the randomized TALENTOP trial, liver resection followed by atezolizumab plus bevacizumab prolonged time to treatment failure versus continued atezolizumab plus bevacizumab in carefully selected patients with locally advanced hepatocellular carcinoma that remained resectable after induction systemic therapy.",
    safety: "Grade 3-4 treatment-related adverse events occurred in 39% of assessed surgical-group patients versus 21% with maintenance therapy. Two treatment-related deaths occurred in the surgery group, from abnormal liver function and liver failure, underscoring the added perioperative and hepatic risk.",
    cost: "Adds major liver surgery and perioperative care to atezolizumab/bevacizumab; official comparative cost not reported", indiaPrice: "No official Indian regimen cost, surgery-package price, reimbursement decision, or procurement figure was verified in this pass.",
    indiaStatus: "limited", indiaLabel: "Evidence from China; India pathway unverified", launch: "Published online 20 August 2026; not a new product approval",
    indiaCaveat: "No India sites, CDSCO action, national guideline adoption, reimbursement decision, or implementation pathway was identified. Applicability depends on multidisciplinary selection, hepatobiliary surgical capacity, liver reserve, access to atezolizumab/bevacizumab, and local HCC epidemiology.",
    limitations: "China-only, open-label trial in a highly selected post-induction subgroup: 201 of 489 enrolled patients were randomized after disease control and resectability assessment. The primary endpoint was time to treatment failure rather than overall survival; follow-up was 18.4 months, overall-survival benefit was not reported, and surgical-group toxicity and two treatment-related deaths require careful interpretation.",
    detailSections: [
      ["Event date / geography", "20 August 2026 PubMed/Lancet online visibility; 24 hospitals in China.", "wide"],
      ["Population / sample", "489 treatment-naive patients with hepatocellular carcinoma, macrovascular invasion, and no extrahepatic metastasis entered induction. After disease control and resectability assessment, 201 were randomized: surgery n=101 and maintenance n=100.", "wide"],
      ["Comparator", "Three-cycle atezolizumab/bevacizumab induction plus one atezolizumab cycle, followed by liver resection and 12 months of atezolizumab/bevacizumab versus maintenance atezolizumab/bevacizumab without resection.", "wide"],
      ["Primary endpoint", "Independent-review time to treatment failure: local recurrence or RECIST 1.1 progression, new extrahepatic spread, or death.", "wide"],
      ["Effect size detail", "At median follow-up of 18.4 months, median time to treatment failure was 20.4 months with surgery versus 11.8 months with maintenance; HR 0.60 (95% CI 0.39-0.91), p=0.015.", "wide"],
      ["Safety detail", "Grade 3-4 treatment-related adverse events occurred in 32/83 assessed surgical-group patients (39%) and 21/100 maintenance patients (21%). Two treatment-related deaths occurred in the surgery group.", "wide"],
      ["Regulatory status", "Randomized clinical evidence for a treatment strategy, not a new FDA, EMA, CDSCO, or other product authorization. Trial registration NCT04649489 remains ongoing.", "wide"]
    ],
    source: "https://doi.org/10.1016/S0140-6736(26)01252-3",
    sourceLabel: "Lancet phase III publication",
    supportingSources: [
      {
        label: "PubMed abstract and indexing record",
        url: "https://pubmed.ncbi.nlm.nih.gov/42624156/"
      },
      {
        label: "ClinicalTrials.gov TALENTOP registry",
        url: "https://clinicaltrials.gov/study/NCT04649489"
      }
    ]
  },
  {
    id: "intismeran", short: "Intismeran", name: "Personalized mRNA Neoantigen Therapy", cancer: "Melanoma",
    setting: "Completely resected high-risk stage IIB-IV cutaneous melanoma", company: "Moderna + Merck / MSD", phase: "Phase III topline",
    impact: "Potentially transformative, data immature", impactGroup: "high", maturity: 86, impactScore: 97,
    eventDate: "2026-08-19",
    headline: "Phase III RFS + DMFS met", headlineNote: "INTerpath-001; HR/CI not yet reported",
    benefit: "Merck and Moderna reported that adjuvant intismeran autogene plus Keytruda met the Phase III INTerpath-001 primary endpoint of recurrence-free survival and key secondary endpoint of distant metastasis-free survival versus Keytruda alone in completely resected stage IIB-IV cutaneous melanoma.",
    safety: "The companies reported no new safety signals and said the safety profiles were consistent with previously reported combination studies. Injection-related symptoms, individualized-vaccine logistics, and pembrolizumab immune-mediated toxicity remain relevant.",
    cost: "Investigational individualized mRNA neoantigen therapy; official commercial pricing not available", indiaPrice: "No official US price, India price, CDSCO approval, reimbursement, procurement figure, or India launch date for intismeran was verified in this pass.",
    indiaStatus: "not-launched", indiaLabel: "Investigational; India unverified", launch: "Phase III topline result announced 19 August 2026; no regulatory approval or launch date announced",
    indiaCaveat: "No verified CDSCO authorization, India availability, official launch date, price, reimbursement decision, or procurement pathway was identified. India relevance depends on regulatory filing, individualized manufacturing turnaround, tumor-sequencing access, and pembrolizumab affordability.",
    limitations: "The August 2026 result is topline and company-reported. Hazard ratios, confidence intervals, absolute landmark rates, subgroup effects, treatment-manufacturing turnaround, quality-of-life data, and overall survival were not reported; OS remains a planned secondary endpoint and the trial will continue.",
    detailSections: [
      ["Event date / geography", "19 August 2026 official Merck/Moderna topline Phase III disclosure; global INTerpath-001 trial in completely resected stage IIB-IV cutaneous melanoma.", "wide"],
      ["Population / sample", "1,137 patients with high-risk stage IIB, IIC, III, or IV resected cutaneous melanoma who had not received prior systemic therapy, randomized after complete surgical resection.", "wide"],
      ["Comparator", "Intismeran 1 mg every three weeks for up to nine doses plus Keytruda 400 mg every six weeks for up to nine cycles versus Keytruda alone for approximately one year, or until disease recurrence, unacceptable toxicity, or about 56 weeks total treatment duration.", "wide"],
      ["Primary endpoint", "Recurrence-free survival, defined as time from randomization to local, locoregional, regional or distant recurrence, or death from any cause, assessed by investigator.", "wide"],
      ["Effect size detail", "The trial met RFS and the key secondary endpoint of distant metastasis-free survival with statistically significant and clinically meaningful improvements versus Keytruda alone. Hazard ratios, confidence intervals, p values, absolute recurrence-free survival rates, and distant-metastasis-free survival rates were not reported in the topline release.", "wide"],
      ["Regulatory status", "Investigational. The companies said data will be presented at an upcoming international medical meeting and shared with regulatory authorities; no FDA, EMA, CDSCO, or other approval was verified in this pass.", "wide"],
      ["Prior evidence context", "The earlier randomized Phase IIb KEYNOTE-942 study showed five-year RFS HR 0.51 (95% CI 0.294-0.887) and DMFS HR 0.411 (95% CI 0.200-0.843), but those effect sizes should not be substituted for the Phase III readout.", "wide"]
    ],
    source: "https://www.merck.com/news/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-autogene-plus-keytruda-met-endpoints-of-recurrence-free-survival-rfs-and-distant-metastasis-free-survival-dmfs-in-patient/",
    sourceLabel: "Official company release",
    supportingSources: [
      {
        label: "ClinicalTrials.gov INTerpath-001 registry",
        url: "https://clinicaltrials.gov/study/NCT05933577"
      },
      {
        label: "JCO 2026 Phase IIb five-year update",
        url: "https://ascopubs.org/doi/10.1200/JCO-26-00835"
      },
      {
        label: "Merck/Moderna ASCO 2026 Phase IIb release",
        url: "https://www.merck.com/news/moderna-and-merck-present-5-year-data-for-intismeran-autogene-in-combination-with-keytruda-pembrolizumab-in-patients-with-high-risk-stage-iii-iv-melanoma-following-complete-resection-at-the-20/"
      }
    ]
  },
  {
    id: "pemigatinib", short: "Pemigatinib", name: "First-line Pemigatinib", cancer: "Cholangiocarcinoma",
    setting: "FGFR2-rearranged", company: "Incyte", phase: "Phase III",
    impact: "High in biomarker subset", impactGroup: "high", maturity: 94, impactScore: 88,
    headline: "ORR 47% vs 15%", headlineNote: "PFS 8.3 vs 6.8 months",
    benefit: "Improved response and progression-free survival over chemotherapy in a molecularly selected population. The result supports early broad genomic testing.",
    safety: "FGFR inhibition requires monitoring for hyperphosphatemia, ocular toxicity, nail and skin changes, stomatitis and dose interruption.",
    cost: "Very high", indiaPrice: "No verified Indian MRP. US $20,286 per 14 tablets converts to about ₹19.4 lakh, or about ₹3.34 crore annually; not an Indian selling price.",
    indiaStatus: "limited", indiaLabel: "No verified domestic launch", launch: "No public India date",
    indiaCaveat: "Named-patient import may be possible; first-line positioning requires indication-specific approval.",
    limitations: "Applies to a small FGFR2-rearranged subset and depends on timely, high-quality molecular testing.",
    source: "https://ascopubs.org/doi/10.1200/JCO-26-00788"
  },
  {
    id: "amivantamab", short: "Amivantamab", name: "Amivantamab in Refractory CRC", cancer: "Colorectal cancer",
    setting: "RAS/BRAF wild-type", company: "Johnson & Johnson / Janssen", phase: "Phase Ib/II",
    impact: "Promising, not practice-changing", impactGroup: "early", maturity: 43, impactScore: 61,
    headline: "ORR 19%–29%", headlineNote: "Median PFS 3.7–5.7 months",
    benefit: "Activity was notable after prior anti-EGFR therapy and in right-sided disease, where conventional EGFR antibodies can be less reliable.",
    safety: "Grade 3 or higher rash 7%, acneiform dermatitis 4% and hypoalbuminemia 4%; infusion reactions and skin toxicity add operational burden.",
    cost: "Very high", indiaPrice: "US $3,894 per 350 mg vial converts to about ₹3.72 lakh per vial; not an Indian market price.",
    indiaStatus: "limited", indiaLabel: "Trial / import context", launch: "No public India date for colorectal cancer",
    indiaCaveat: "Rybrevant approvals in other tumor settings do not establish colorectal-cancer use.",
    limitations: "Small nonrandomized cohorts, biomarker-intensive selection, no survival comparison and high acquisition cost.",
    source: "https://ascopubs.org/doi/10.1200/JCO-25-02187"
  },
  {
    id: "sigvotatug", short: "Sigvotatug", name: "Integrin Beta-6 ADC", cancer: "Lung cancer",
    setting: "Advanced NSCLC", company: "Pfizer / Seagen", phase: "Phase I",
    impact: "Promising", impactGroup: "early", maturity: 24, impactScore: 57,
    headline: "ORR 29% in subgroup", headlineNote: "PFS 6.4 months; response duration 12.8 months",
    benefit: "The taxane-naive nonsquamous subgroup signal appears favorable to historical docetaxel expectations, with long response duration among responders.",
    safety: "Peripheral sensory neuropathy is a key cumulative toxicity. At the selected schedule, 19% discontinued for treatment-emergent events.",
    cost: "Unknown; likely high ADC cost", indiaPrice: "No commercial price.",
    indiaStatus: "not-launched", indiaLabel: "Not launched", launch: "No announced date; late-2020s at earliest is an inference",
    indiaCaveat: "Phase III efficacy, safety and subsequent global and CDSCO approvals are required.",
    limitations: "First-in-human, heterogeneous dosing and populations, historical comparator and no validated routine selection biomarker.",
    source: "https://ascopubs.org/doi/10.1200/JCO-25-02016"
  },
  {
    id: "sacituzumab", short: "Sacituzumab", name: "Neoadjuvant Sacituzumab Govitecan", cancer: "Bladder cancer",
    setting: "Cisplatin-ineligible MIBC", company: "Gilead Sciences", phase: "Phase II",
    impact: "Exploratory", impactGroup: "early", maturity: 52, impactScore: 42,
    headline: "ypT0N0-x 29.5%", headlineNote: "24-month event-free survival 71.4%",
    benefit: "Provides proof that TROP2-directed therapy is active in muscle-invasive bladder cancer and may support future subtype-guided ADC selection.",
    safety: "Neutropenia, diarrhea and infection are central concerns. Two early deaths led to dose reduction and prophylaxis; one death was treatment-related.",
    cost: "High", indiaPrice: "Import listings approximately ₹1.85-₹1.90 lakh per 180–200 mg vial; supplier quotes, not official MRP.",
    indiaStatus: "limited", indiaLabel: "Imported product; study use not launched", launch: "No public India date for this indication",
    indiaCaveat: "The SURE-01 regimen needs comparative confirmation and regulatory review.",
    limitations: "Small single-arm evidence, protocol changes, incomplete cystectomy assessment and a stronger contemporary benchmark.",
    source: "https://ascopubs.org/doi/10.1200/JCO-26-00142"
  }
];

const ratings = [
  ["Exploratory", "An early signal that generates a hypothesis but is not reliable enough to guide routine treatment."],
  ["Promising", "Clinically interesting activity that justifies further study, but is insufficient by itself for broad routine adoption."],
  ["Promising, not practice-changing yet", "A relevant signal remains short of randomized confirmation, mature survival, approval, affordability or feasibility."],
  ["Moderate impact", "Meaningful benefit with limits in magnitude, population, safety, cost or evidence maturity."],
  ["High impact", "Robust evidence shows a clinically meaningful advantage over a relevant current-care comparator."],
  ["High impact, pending survival", "Strong evidence on an accepted intermediate endpoint while definitive long-term outcomes remain incomplete."],
  ["Potentially transformative", "An unusually large, durable or mechanistically novel result that could change strategy if confirmed."],
  ["Operationally high, clinical impact unproven", "A tool performs its operational task well, but has not yet shown better patient outcomes."]
];

const technologies = [
  { name: "AI trial matching", metric: "98.7% sensitivity", text: "At a lower threshold, with 97.6% specificity and 99.7% negative predictive value.", proof: 82 },
  { name: "Routine-lab ML", metric: "AUC 0.84", text: "Seven-variable model predicted monoclonal protein within five years.", proof: 58 },
  { name: "Oncology AI adoption", metric: "93% want training", text: "Workforce readiness and governance lag behind growing use.", proof: 43 }
];

const asco2025Followup = [
  {
    id: "matterhorn", program: "Durvalumab + FLOT", trial: "MATTERHORN", cancer: "Gastric / GEJ cancer",
    company: "AstraZeneca", status: "approved", statusLabel: "FDA approved",
    ascoSignal: "Phase III EFS benefit; recurrence or death risk reduced by 29%.",
    currentMilestone: "FDA approval · 25 Nov 2025",
    assessment: "The ASCO signal completed the conference-to-label pathway within six months. FDA authorized perioperative durvalumab with FLOT followed by durvalumab for resectable gastric or GEJ adenocarcinoma.",
    conferenceSource: "https://ascopost.com/issues/july-25-2025/plenary-highlights-across-tumor-types-reflect-advances-in-research-improvements-in-care-and-changes-in-practice/",
    currentSource: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-durvalumab-resectable-gastric-or-gastroesophageal-junction-adenocarcinoma"
  },
  {
    id: "db09", program: "Trastuzumab deruxtecan + pertuzumab", trial: "DESTINY-Breast09", cancer: "Breast cancer",
    company: "Daiichi Sankyo + AstraZeneca", status: "approved", statusLabel: "FDA approved",
    ascoSignal: "First-line HER2-positive metastatic breast cancer PFS benefit over THP.",
    currentMilestone: "FDA approval · 15 Dec 2025",
    assessment: "The regimen moved into the US first-line label. FDA reported median PFS of 40.7 versus 26.9 months, while overall survival was still immature at approval.",
    conferenceSource: "https://www.asco.org/about-asco/press-center/news-releases/advances-diagnostics-immunotherapy-precision-medicine-2025-asco-annual-meeting-press-program",
    currentSource: "https://www.fda.gov/drugs/drug-approvals-and-databases/fda-approves-fam-trastuzumab-deruxtecan-nxki-pertuzumab-unresectable-or-metastatic-her2-positive"
  },
  {
    id: "keynote689", program: "Perioperative pembrolizumab", trial: "KEYNOTE-689", cancer: "Head and neck cancer",
    company: "Merck / MSD", status: "approved", statusLabel: "FDA approved",
    ascoSignal: "Event-free survival improvement in resectable locally advanced HNSCC.",
    currentMilestone: "FDA approval · 12 Jun 2025",
    assessment: "FDA approved the PD-L1 CPS ≥1 regimen immediately after ASCO: neoadjuvant pembrolizumab, adjuvant pembrolizumab with radiotherapy with or without cisplatin, then pembrolizumab alone.",
    conferenceSource: "https://www.asco.org/about-asco/press-center/news-releases/advances-diagnostics-immunotherapy-precision-medicine-2025-asco-annual-meeting-press-program",
    currentSource: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-neoadjuvant-and-adjuvant-pembrolizumab-resectable-locally-advanced-head-and-neck"
  },
  {
    id: "rusfertide", program: "Rusfertide", trial: "VERIFY", cancer: "Polycythemia vera",
    company: "Takeda + Protagonist Therapeutics", status: "review", statusLabel: "Priority review",
    ascoSignal: "Weekly hepcidin mimetic more than doubled clinical response and reduced phlebotomy burden.",
    currentMilestone: "FDA NDA priority review · 27 Feb 2026",
    assessment: "The molecule remains investigational but has crossed into formal regulatory review. FDA's target review period is Q3 2026; approval is not yet established.",
    conferenceSource: "https://ascopost.com/issues/july-25-2025/plenary-highlights-across-tumor-types-reflect-advances-in-research-improvements-in-care-and-changes-in-practice/",
    currentSource: "https://www.takeda.com/newsroom/newsreleases/2026/nda-rusfertide/"
  },
  {
    id: "camizestrant", program: "Camizestrant + CDK4/6 inhibitor", trial: "SERENA-6", cancer: "Breast cancer",
    company: "AstraZeneca", status: "approved", statusLabel: "FDA accelerated approval",
    ascoSignal: "ctDNA-guided switch at emergent ESR1 mutation improved median PFS from 9.2 to 16.0 months.",
    currentMilestone: "FDA accelerated approval · 4 Sep 2026",
    assessment: "FDA granted accelerated approval to Etcamah for a ctDNA-guided switch with palbociclib, ribociclib, or abemaciclib after emergent ESR1 mutation detection and no radiographic progression, resolving the prior US review watch while leaving confirmatory post-approval evidence and access questions open.",
    conferenceSource: "https://ascopost.com/issues/july-25-2025/plenary-highlights-across-tumor-types-reflect-advances-in-research-improvements-in-care-and-changes-in-practice/",
    currentSource: "https://www.fda.gov/news-events/press-announcements/fda-grants-accelerated-approval-new-breast-cancer-treatment",
    secondarySource: "https://www.ema.europa.eu/en/medicines/human/EPAR/etcamah"
  },
  {
    id: "atomic", program: "Atezolizumab + mFOLFOX6", trial: "ATOMIC", cancer: "Colon cancer",
    company: "Genentech / Roche + NCI Alliance", status: "guideline", statusLabel: "Guideline signal",
    ascoSignal: "Three-year DFS 86.4% versus 76.6% in stage III dMMR colon cancer; HR 0.50.",
    currentMilestone: "NCCN incorporation reported · Jun 2025",
    assessment: "The regimen entered NCCN guidance rapidly, but no FDA approval for this adjuvant dMMR colon indication was identified as of 9 June 2026. Guideline use and regulatory labeling are therefore not equivalent.",
    conferenceSource: "https://www.asco.org/about-asco/press-center/news-releases/large-national-cancer-institute-funded-trial-atezolizumab-chemotherapy",
    currentSource: "https://ascopost.com/issues/july-25-2025/plenary-highlights-across-tumor-types-reflect-advances-in-research-improvements-in-care-and-changes-in-practice/"
  },
  {
    id: "nivopostop", program: "Postoperative nivolumab + chemoradiotherapy", trial: "NIVOPOSTOP", cancer: "Head and neck cancer",
    company: "Bristol Myers Squibb + GORTEC", status: "development", statusLabel: "Follow-up ongoing",
    ascoSignal: "Disease-free survival 63.1% versus 52.5% in high-risk resected HNSCC.",
    currentMilestone: "ASCO 2026 post-hoc follow-up",
    assessment: "The DFS signal persists in follow-up analyses, including across lymph-node dissection extent. No FDA approval for the NIVOPOSTOP regimen was verified; KEYNOTE-689 pembrolizumab has separately gained a US perioperative label.",
    conferenceSource: "https://ascopost.com/issues/july-25-2025/plenary-highlights-across-tumor-types-reflect-advances-in-research-improvements-in-care-and-changes-in-practice/",
    currentSource: "https://ascopubs.org/doi/10.1200/JCO.2026.44.16_suppl.6001"
  },
  {
    id: "ascent04", program: "Sacituzumab govitecan + pembrolizumab", trial: "ASCENT-04 / KEYNOTE-D19", cancer: "Breast cancer",
    company: "Gilead + Merck / MSD", status: "approved", statusLabel: "FDA approved",
    ascoSignal: "First-line PFS benefit versus chemotherapy + pembrolizumab in PD-L1-positive metastatic TNBC.",
    currentMilestone: "FDA approval · 24 Jun 2026",
    assessment: "The ASCO 2025 signal completed the conference-to-label path in just over a year. FDA approved the PD-L1 CPS ≥10 first-line combination on 24 June 2026 and, in the same action, added a separate Trodelvy monotherapy pathway for PD-1/PD-L1-ineligible disease based on ASCENT-03.",
    conferenceSource: "https://www.askgileadmedical.com/docs/conference/2025_ASCO_BC_Trodelvy_Tolaney_ASCENT-04%20Oral_30May2025_Final_Unbranded%40pdf",
    currentSource: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-sacituzumab-govitecan-hziy-monotherapy-and-combination-pembrolizumab-first-line",
    secondarySource: "https://www.nejm.org/doi/full/10.1056/NEJMoa2508959"
  }
];

asco2025Followup.push(
  {
    id: "cpost", program: "Adjuvant cemiplimab", trial: "C-POST", cancer: "Cutaneous squamous cell carcinoma",
    company: "Regeneron", status: "approved", statusLabel: "FDA approved",
    ascoSignal: "Adjuvant phase III DFS benefit after surgery and radiation in high-risk disease.",
    currentMilestone: "FDA approval · 8 Oct 2025",
    assessment: "FDA approved cemiplimab for adults at high risk of recurrence after surgery and radiation. The label followed the ASCO presentation by about four months.",
    conferenceSource: "https://www.asco.org/about-asco/press-center/news-releases/advances-diagnostics-immunotherapy-precision-medicine-2025-asco-annual-meeting-press-program",
    currentSource: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-cemiplimab-rwlc-adjuvant-treatment-cutaneous-squamous-cell-carcinoma"
  },
  {
    id: "amplitude", program: "Niraparib + abiraterone + prednisone", trial: "AMPLITUDE", cancer: "Prostate cancer",
    company: "Johnson & Johnson / Janssen", status: "approved", statusLabel: "FDA approved",
    ascoSignal: "Phase III rPFS benefit in HRR-altered metastatic castration-sensitive prostate cancer.",
    currentMilestone: "FDA approval · 12 Dec 2025",
    assessment: "FDA narrowed the approved population to BRCA2-mutated mCSPC because exploratory analyses indicated the overall benefit was primarily attributable to BRCA2-mutated disease.",
    conferenceSource: "https://www.asco.org/about-asco/press-center/news-releases/adding-niraparib-standard-treatment-may-slow-cancer-growth",
    currentSource: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-niraparib-and-abiraterone-acetate-plus-prednisone-brca2-mutated-metastatic-castration"
  },
  {
    id: "can2409", program: "CAN-2409 + valacyclovir + radiotherapy", trial: "PrTK03", cancer: "Prostate cancer",
    company: "Candel Therapeutics", status: "development", statusLabel: "BLA preparation",
    ascoSignal: "Phase III DFS improvement in intermediate-to-high-risk localized prostate cancer.",
    currentMilestone: "BLA targeted for Q4 2026; not yet submitted",
    assessment: "The pivotal trial was positive, but the product remains investigational. The stated Q4 2026 BLA timing is a company target and not a regulatory decision.",
    conferenceSource: "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.5000",
    currentSource: "https://ir.candeltx.com/news-releases/news-release-details/candel-therapeutics-presents-positive-phase-3-can-2409-results"
  }
);

const followupDetails = {
  matterhorn: {
    presentation: "1 June 2025 · Plenary LBA5", design: "Global randomized double-blind phase III", population: "948; resectable stage II–IVA gastric/GEJ adenocarcinoma", comparator: "Perioperative FLOT + placebo",
    endpoint: "Event-free survival", effect: "At FDA review: median EFS not reached vs 32.8 months; HR 0.71 (95% CI 0.58–0.86). OS HR 0.78 (95% CI 0.63–0.96). pCR 19.2% vs 7.2%.",
    safety: "Immune-mediated adverse reactions and FLOT toxicity; FDA notes the trial did not isolate the contribution of neoadjuvant versus adjuvant durvalumab.",
    us: "Approved 25 November 2025.", eu: "Project Orbis partner reviews were ongoing in the FDA notice; current final EU status not verified in this review.", india: "Durvalumab is marketed in India, but CDSCO approval for this exact perioperative gastric/GEJ regimen was not verified.",
    evidenceDelta: "ASCO EFS signal matured to positive OS and a US label.", adoption: "Requires perioperative FLOT capability, immunotherapy funding and coordination across surgery and medical oncology.", nextDecision: "Regional approvals, reimbursement and real-world uptake.", confidence: "High: phase III publication plus FDA action."
  },
  db09: {
    presentation: "ASCO 2025 · late-breaking phase III", design: "Global randomized three-arm phase III", population: "1,157; untreated advanced/metastatic HER2-positive breast cancer", comparator: "Taxane + trastuzumab + pertuzumab (THP)",
    endpoint: "Blinded independent PFS", effect: "At FDA review: median PFS 40.7 vs 26.9 months; HR 0.56 (95% CI 0.44–0.71). ORR 87% vs 81%; OS immature.",
    safety: "T-DXd carries boxed warning for interstitial lung disease/pneumonitis; nausea, marrow toxicity and cardiac monitoring remain relevant.",
    us: "Approved with pertuzumab for first-line metastatic HER2-positive breast cancer on 15 December 2025.", eu: "Current final status not verified in this review.", india: "Enhertu and pertuzumab access and exact first-line combination labeling require current CDSCO and market verification.",
    evidenceDelta: "Large PFS gain translated to a first-line US label; OS remains immature.", adoption: "May displace taxane-based induction but increases ADC exposure, ILD surveillance and acquisition cost.", nextDecision: "OS maturation, CNS outcomes, regional labels and reimbursement.", confidence: "High: randomized phase III plus FDA action."
  },
  keynote689: {
    presentation: "ASCO 2025 · phase III", design: "Randomized open-label phase III", population: "714; resectable stage III–IVA locally advanced HNSCC", comparator: "Surgery followed by standard adjuvant radiotherapy ± cisplatin",
    endpoint: "Event-free survival", effect: "FDA authorized the regimen for PD-L1 CPS ≥1; exact effect estimates should be read from the label/publication.",
    safety: "Adds perioperative immune toxicity to surgery and radiotherapy; hypothyroidism, diarrhea and immune-mediated organ toxicity require monitoring.",
    us: "Approved 12 June 2025 for PD-L1 CPS ≥1.", eu: "Current final status not verified in this review.", india: "Pembrolizumab is marketed, but this exact perioperative HNSCC indication was not verified with CDSCO.",
    evidenceDelta: "Conference evidence translated almost immediately to the first US perioperative HNSCC approval.", adoption: "Requires preoperative PD-L1 testing and coordination before surgery; treatment duration and cost are substantial.", nextDecision: "Long-term efficacy, regional approvals and implementation outside trial centers.", confidence: "High: phase III plus FDA action."
  },
  rusfertide: {
    presentation: "1 June 2025 · Plenary LBA3", design: "Global randomized placebo-controlled phase III", population: "293; phlebotomy-dependent polycythemia vera despite standard care", comparator: "Placebo + standard care",
    endpoint: "Clinical response / phlebotomy avoidance and hematocrit control", effect: "More than doubled clinical response in the ASCO report; NDA includes 32- and 52-week VERIFY data plus long-term phase II evidence.",
    safety: "Weekly self-injection; generally tolerated in trials. Full approved-label safety is unavailable because the product remains investigational.",
    us: "NDA accepted with priority review on 27 February 2026; target action in Q3 2026.", eu: "No verified authorization.", india: "No verified launch, price or CDSCO filing.",
    evidenceDelta: "Moved from positive phase III to formal NDA review.", adoption: "Could reduce repeated phlebotomy burden; payer value will depend on price, durability and thrombosis-related outcomes.", nextDecision: "FDA decision targeted for Q3 2026.", confidence: "High for review status; approval outcome unknown."
  },
  camizestrant: {
    presentation: "1 June 2025 · Plenary LBA4", design: "Global randomized double-blind phase III; ctDNA-triggered switch", population: "HR+/HER2− advanced breast cancer with emergent ESR1 mutation before radiographic progression", comparator: "Continue aromatase inhibitor + same CDK4/6 inhibitor",
    endpoint: "Progression-free survival", effect: "Median PFS 16.0 vs 9.2 months; HR 0.44. The unresolved question is whether earlier switching improves outcomes compared with switching at clinical progression.",
    safety: "FDA highlighted visual impairment, low heart rate and QTc prolongation, with common adverse reactions including headache, diarrhea, nausea, fatigue, asthenia, musculoskeletal pain, decreased appetite and dizziness. The practical burden still includes serial ctDNA testing alongside continued CDK4/6 exposure.",
    us: "FDA granted accelerated approval on 4 September 2026 for Etcamah with palbociclib, ribociclib, or abemaciclib in adults with ER-positive, HER2-negative advanced or metastatic breast cancer whose ESR1 mutation is detected in circulating tumor DNA after at least six months of first-line endocrine therapy with a CDK4/6 inhibitor and who have no disease progression.", eu: "European Commission approved Etcamah on 23 July 2026 for ER-positive, HER2-negative locally advanced or metastatic breast cancer with detected ESR1 mutation and no disease progression during first-line endocrine therapy plus a CDK4/6 inhibitor.", india: "No verified approval, launch, price, reimbursement, procurement pathway, or CDSCO filing was identified in this pass.",
    evidenceDelta: "The ASCO/NEJM signal has now crossed into both EU authorization and US accelerated approval. FDA previously debated the pre-progression switch question at ODAC, so the label remains a conditional accelerated-approval milestone rather than final proof of survival or post-progression sequencing advantage.", adoption: "Requires serial ctDNA testing, validated ESR1 assay access, coordinated switching before radiographic progression, CDK4/6 partner selection, cardiac/QTc and visual-toxicity monitoring, and payer comfort with an earlier branded oral SERD step.", nextDecision: "FDA confirmatory requirements, mature survival/post-progression outcomes, reimbursement uptake, and any official India filing or launch announcement.", confidence: "High for the trial result and FDA/EU regulatory milestones; survival maturation and access remain unsettled."
  },
  atomic: {
    presentation: "1 June 2025 · Plenary LBA1", design: "Randomized phase III", population: "Stage III dMMR colon cancer", comparator: "mFOLFOX6 alone",
    endpoint: "Disease-free survival", effect: "Three-year DFS 86.4% vs 76.6%; HR 0.50; p<0.0001.",
    safety: "Adds checkpoint-inhibitor immune toxicity to six months of oxaliplatin-based chemotherapy.",
    us: "Reported incorporation into NCCN Colon Cancer v4.2025; no FDA label for this indication verified by 9 June 2026.", eu: "No verified regulatory authorization for this indication.", india: "Atezolizumab availability does not establish adjuvant dMMR colon approval; no exact CDSCO indication verified.",
    evidenceDelta: "Rapid guideline movement, but no verified regimen-specific regulatory approval.", adoption: "Requires universal MMR testing, one year of treatment exposure and funding despite immature OS.", nextDecision: "Publication, OS maturation and regulatory filings.", confidence: "High for ASCO data; guideline statement reported by ASCO Post."
  },
  nivopostop: {
    presentation: "1 June 2025 · Plenary LBA2", design: "Randomized phase III", population: "High-risk resected locally advanced HNSCC", comparator: "Postoperative cisplatin-radiotherapy",
    endpoint: "Disease-free survival", effect: "DFS 63.1% vs 52.5% at just over 2.5 years; subsequent ASCO 2026 post-hoc analysis found benefit was not altered by lymph-node dissection extent.",
    safety: "Adds concurrent and maintenance nivolumab to an already toxic postoperative chemoradiotherapy pathway.",
    us: "No FDA approval for this exact regimen verified.", eu: "No verified authorization.", india: "Nivolumab is marketed, but this postoperative regimen is not verified as approved.",
    evidenceDelta: "Additional subgroup follow-up supports consistency but does not substitute for a regulatory decision.", adoption: "Competes conceptually with the separately approved KEYNOTE-689 perioperative pembrolizumab pathway; sequencing and population differences matter.", nextDecision: "Full publication, regulatory strategy and comparative guideline positioning.", confidence: "Moderate-high: phase III abstract plus post-hoc follow-up."
  },
  ascent04: {
    presentation: "30 May 2025 · oral phase III", design: "Global randomized open-label phase III", population: "443; untreated PD-L1 CPS ≥10 locally advanced/metastatic TNBC", comparator: "Physician's-choice chemotherapy + pembrolizumab",
    endpoint: "Progression-free survival", effect: "FDA review: median PFS 11.2 vs 7.8 months; HR 0.65 (95% CI 0.51–0.84). ORR 61% vs 55%. ASCO 2026 reported PFS2 HR 0.67 (95% CI 0.48–0.95).",
    safety: "Sacituzumab carries boxed warnings for diarrhea and neutropenia; pembrolizumab adds immune-mediated toxicity. Overall survival remained immature in the FDA approval notice.",
    us: "Approved 24 June 2026 for PD-L1 CPS ≥10 unresectable locally advanced or metastatic TNBC in combination with pembrolizumab.", eu: "No verified EMA authorization in this pass.", india: "Trodelvy may be accessed through import channels, but no verified CDSCO approval for this PD-L1-positive first-line regimen was identified.",
    evidenceDelta: "Conference and NEJM evidence progressed to FDA approval; the same FDA action also created a separate first-line monotherapy pathway for PD-1/PD-L1-ineligible disease based on ASCENT-03.", adoption: "Requires PD-L1 testing, infusion capacity, neutropenia and diarrhea management, and affordability alongside pembrolizumab.", nextDecision: "Regional approvals, reimbursement decisions and any official India filing or launch announcement.", confidence: "High: phase III evidence, peer-reviewed publication and FDA action.", verifiedThrough: "25 June 2026"
  },
  cpost: {
    presentation: "ASCO 2025 · Abstract 6001", design: "Randomized double-blind placebo-controlled phase III", population: "415; high-risk CSCC after surgery and radiation", comparator: "Placebo",
    endpoint: "Disease-free survival", effect: "Median DFS not reached vs 49.4 months; HR 0.32 (95% CI 0.20–0.51); p<0.0001.",
    safety: "Immune-mediated adverse reactions, infusion reactions and transplant-related precautions apply.",
    us: "Approved 8 October 2025.", eu: "Current final status not verified in this review.", india: "No verified CDSCO approval or Indian price for this adjuvant indication.",
    evidenceDelta: "Large DFS benefit translated to a US adjuvant label in four months.", adoption: "Requires precise high-risk definition after surgery and radiotherapy; immune toxicity and one-year treatment burden matter.", nextDecision: "OS follow-up, regional access and guideline implementation.", confidence: "High: phase III plus FDA action."
  },
  amplitude: {
    presentation: "ASCO 2025 · phase III", design: "Randomized double-blind phase III", population: "696; HRR-altered metastatic castration-sensitive prostate cancer", comparator: "Placebo + abiraterone/prednisone + ADT",
    endpoint: "Radiographic progression-free survival", effect: "In 323 BRCA2-mutated patients: rPFS HR 0.46 (95% CI 0.32–0.66); median not estimable vs 26 months. Non-BRCA2 exploratory HR 0.88.",
    safety: "Myelosuppression, MDS/AML, cardiovascular and hepatic toxicity, hypokalemia, fluid retention, fractures and other labeled warnings.",
    us: "Approved 12 December 2025 only for BRCA2-mutated mCSPC.", eu: "Current final status not verified.", india: "Akeega availability and this exact mCSPC label were not verified.",
    evidenceDelta: "Regulatory review narrowed a broad HRR trial signal to the BRCA2 subgroup where benefit was concentrated.", adoption: "Requires validated BRCA2 testing and management of overlapping PARP, abiraterone and prednisone toxicity.", nextDecision: "OS maturation, regional approvals and testing uptake.", confidence: "High: phase III plus FDA subgroup-specific action."
  },
  can2409: {
    presentation: "3 June 2025 · Abstract 5000", design: "Randomized double-blind placebo-controlled phase III under FDA SPA", population: "745; intermediate-to-high-risk localized prostate cancer receiving EBRT ± short ADT", comparator: "Placebo + valacyclovir + standard radiotherapy",
    endpoint: "Disease-free survival", effect: "DFS HR 0.70; p=0.0155. Prostate cancer-specific outcome HR 0.62; p=0.0046. Two-year biopsy pCR 80.4% vs 63.6%.",
    safety: "Treatment-related serious adverse events 1.7% vs 2.2%; common events were generally self-limited flu-like symptoms, fever and chills.",
    us: "Investigational; company targets BLA submission in Q4 2026.", eu: "No verified filing or approval.", india: "No verified clinical or commercial availability.",
    evidenceDelta: "Positive pivotal evidence has not yet reached application submission.", adoption: "Intratumoral gene delivery must integrate with radiotherapy workflow; manufacturing, procedure logistics and confirmatory regulatory review remain.",
    nextDecision: "Whether the planned Q4 2026 BLA is submitted and accepted.", confidence: "High for trial report; filing date is company guidance."
  }
};

asco2025Followup.forEach(item => Object.assign(item, followupDetails[item.id]));

const watchlistSignals = [
  {
    id: "who-childhood-cancer-market-strategy-2026",
    title: "WHO childhood-cancer medicines market-shaping strategy",
    short: "WHO paediatric oncology strategy",
    category: "Access / manufacturing / procurement",
    status: "systems",
    statusLabel: "WHO 2026-2030 strategy",
    geography: "Global, focused on low- and middle-income countries",
    date: "15 September 2026",
    cancer: "Childhood cancers",
    issue: "WHO and Global Platform partners launched a 2026-2030 market-shaping strategy to address concentrated supply, fragmented demand, shortages, quality assurance, affordability, and child-appropriate formulations for essential childhood-cancer medicines.",
    organization: "World Health Organization; St. Jude Children's Research Hospital; UNICEF; PAHO Strategic Fund; Global Platform for Access to Childhood Cancer Medicines",
    population: "Children with cancer in low- and middle-income countries, including patients served by the Global Platform's 12 current participating governments and future countries expected to join from 2027.",
    comparator: "Current fragmented procurement and an unstable supplier base; WHO's baseline across 51 hospitals in 12 countries found only about 45% of essential childhood-cancer medicines available and nearly half out of stock for at least one month in the prior year.",
    endpoint: "Implementation of ten linked market interventions, including a broader quality-assured supplier base, pooled demand and published forecasts, volume guarantees, regulatory reliance, nationally financed benefit packages, and possible voluntary licensing for newer therapies.",
    effect: "The strategy establishes a coordinated 2026-2030 implementation roadmap and reports that the Global Platform is already working with 12 governments. It does not report a new product prequalification, pooled-procurement award, medicine price, delivery volume, stockout reduction, or patient-survival outcome.",
    whyMatters: "Reliable supply and affordable, quality-assured formulations determine whether children can complete curative treatment. The strategy moves WHO's earlier prequalification invitation into a broader procurement and market-design plan, but impact depends on funded implementation and measurable country delivery.",
    whoAffected: "Children and families, paediatric oncology programs, governments, procurement agencies, medicine manufacturers, regulators, donors, and supply-chain partners in low- and middle-income countries.",
    decisionImpact: "Governments and partners can align forecasting, pooled purchasing, financing, and supplier incentives around the roadmap. It should not be represented as evidence that access, prices, stock continuity, or survival have already improved.",
    evidenceStrength: "High for the policy launch, baseline access findings, named interventions, and participating-country list because these are documented by WHO. Evidence of implementation effectiveness is not yet available.",
    limitations: "A strategy is not a procurement contract, regulatory approval, funded national benefit, or outcome evaluation. Intervention-level budgets, binding volume guarantees, supplier commitments, product prices, delivery schedules, country targets, and patient-level outcomes were not reported in the announcement.",
    indiaImpact: "India is relevant as a major generic-manufacturing and procurement market, but India is not among the 12 participating countries named by WHO. No India enrollment, manufacturer commitment, CDSCO reliance action, procurement award, official price, reimbursement change, or delivery milestone was verified.",
    cost: "No medicine price, pooled-procurement price, strategy budget, volume-guarantee amount, tender value, India reimbursement decision, or cost-effectiveness result was reported or verified.",
    nextMilestone: "Published demand forecasts, named supplier and country commitments, prequalification decisions, pooled-procurement awards and prices, delivery and stockout metrics, additional countries joining from 2027, and any official India participation.",
    verification: "Verified from WHO's 15 September 2026 departmental update and linked 2026-2030 strategy. This is a new systems and access milestone that extends, but does not replace, the 4 September prequalification-invitation record.",
    source: "https://www.who.int/news/item/15-09-2026-new-strategy-to-build-a-healthier-market-for-childhood-cancer-medicines",
    secondarySource: "https://iris.who.int/handle/10665/383790"
  },
  {
    id: "wclc2026-preserve003-gotistobart-os",
    title: "PRESERVE-003 gotistobart survival update",
    short: "PRESERVE-003",
    category: "Conference-only Phase III development signal",
    status: "conference",
    statusLabel: "Positive non-pivotal Stage 1 OS",
    geography: "Global randomized trial; presented at IASLC WCLC 2026 in Seoul",
    date: "15 September 2026",
    cancer: "Metastatic squamous NSCLC after PD-(L)1 inhibitor and platinum chemotherapy",
    issue: "Updated overall-survival data from the non-pivotal Stage 1 dose-selection portion of PRESERVE-003 compared investigational anti-CTLA-4 antibody gotistobart with docetaxel.",
    organization: "BioNTech; OncoC4; PRESERVE-003 investigators; IASLC WCLC 2026",
    population: "87 patients were randomized: 45 to gotistobart and 42 to docetaxel. Median follow-up was 25.4 months at the 17 July 2026 cutoff.",
    comparator: "Gotistobart 6 mg/kg with two 10 mg/kg loading doses versus docetaxel 75 mg/m2 in the second-line or later setting.",
    endpoint: "Overall survival in non-pivotal Stage 1; the ongoing pivotal Stage 2 portion has overall survival as its primary endpoint.",
    effect: "Median OS was 18.5 versus 10.0 months (HR 0.56; nominal p=0.0295). Grade 3 or higher treatment-related adverse events occurred in 44.4% versus 48.8%, and no new safety signal was reported.",
    whyMatters: "The randomized survival signal is clinically meaningful in a setting with limited options after immunotherapy and chemotherapy, but it comes from a small, non-pivotal dose-selection stage and requires confirmation in the ongoing pivotal cohort.",
    whoAffected: "Patients with previously treated metastatic squamous NSCLC, thoracic oncologists, trial sites, regulators, payers, and developers of CTLA-4-directed immunotherapy.",
    decisionImpact: "Supports continued pivotal development and trial consideration, but does not establish approval, a new standard of care, or a definitive survival advantage until the pivotal Stage 2 result is available.",
    evidenceStrength: "Moderate: randomized survival data from an officially reported Phase III program, cross-checked by IASLC and the sponsor, but only 87 patients contributed to a non-pivotal Stage 1 analysis and the p-value was nominal.",
    limitations: "Conference and sponsor-release update; open-label design; small dose-selection stage; nominal statistical test; no confidence interval was reported in the captured official release; full subgroup, quality-of-life, subsequent-therapy, and peer-reviewed OS analyses were unavailable.",
    indiaImpact: "No India-specific outcome, confirmed India trial site, CDSCO authorization for gotistobart, official India price, reimbursement, procurement, access program, or launch date was reported or verified.",
    cost: "Investigational therapy; no official commercial price, India price, reimbursement decision, procurement figure, or cost-effectiveness result was reported.",
    nextMilestone: "Pivotal Stage 2 OS result, peer-reviewed publication, mature safety and quality-of-life analyses, regulatory submissions and decisions, and any CDSCO or India-access milestone.",
    verification: "Verified from IASLC's official WCLC release, BioNTech and OncoC4's 14 September release, and ClinicalTrials.gov NCT05671510. The record explicitly distinguishes non-pivotal Stage 1 from the ongoing pivotal portion.",
    source: "https://www.iaslc.org/iaslc-news/press-release/investigational-immunotherapy-nearly-doubles-overall-survival-compared",
    secondarySource: "https://clinicaltrials.gov/study/NCT05671510"
  },
  {
    id: "wclc2026-braf-class23-ici-outcomes",
    title: "Class II and III BRAF NSCLC immunotherapy outcomes",
    short: "BRAF class II/III NSCLC",
    category: "Biomarker / retrospective outcomes",
    status: "conference",
    statusLabel: "Conference-only retrospective signal",
    geography: "Multicenter Europe and United States cohorts; presented in Seoul",
    date: "15 September 2026",
    cancer: "Metastatic NSCLC with class II or class III BRAF alterations",
    issue: "A retrospective multicenter analysis evaluated clinicopathologic and genomic differences and first-line immune-checkpoint-inhibitor outcomes in less-defined non-V600 BRAF classes.",
    organization: "Memorial Sloan Kettering Cancer Center; Dana-Farber Cancer Institute; 15 academic centers; IASLC WCLC 2026 investigators",
    population: "The genomic cohort included 15,212 tested patients, with 247 class II and 225 class III BRAF alterations. The immunotherapy cohort included 256 patients whose only oncogenic driver was class II or III BRAF.",
    comparator: "Class III versus class II BRAF-altered NSCLC treated with first-line immune checkpoint inhibition with or without chemotherapy; not a randomized treatment comparison.",
    endpoint: "Objective response, progression-free survival, overall survival, clinicopathologic features, and co-mutation patterns.",
    effect: "ORR was 47% versus 52% (p=0.45), median PFS 5.8 versus 10.0 months (HR 1.26; p=0.10), and median OS 12.7 versus 20.5 months (HR 1.47; p=0.01) for class III versus class II. STK11, KEAP1, and SMARCA4 co-mutations were associated with worse outcomes.",
    whyMatters: "Patients with non-V600 BRAF alterations lack approved class-specific targeted options. Separating class II from class III and reporting co-mutations may improve prognosis discussions, molecular stratification, and future trial design, but does not prove a predictive treatment effect.",
    whoAffected: "Patients with metastatic non-V600 BRAF NSCLC, molecular pathologists, thoracic oncologists, genomic-testing programs, and sponsors designing biomarker-stratified trials.",
    decisionImpact: "Supports more granular BRAF and co-mutation reporting and trial stratification. It should not be used to withhold immunotherapy or claim that one regimen is superior because treatment was not randomized and residual confounding is likely.",
    evidenceStrength: "Moderate for prognostic association because the dataset is large and multicenter; low for predictive treatment inference because the analysis is retrospective, nonrandomized, and conference-only.",
    limitations: "Retrospective selection, heterogeneous ICI regimens and centers, potential treatment and testing confounding, no randomized interaction test, no confidence intervals reported in the captured release, and no peer-reviewed full report captured.",
    indiaImpact: "Broad genomic profiling can distinguish BRAF classes and co-mutations in India, but no India cohort, India-specific outcome, CDSCO treatment action, official testing price, reimbursement, procurement, or access milestone was reported.",
    cost: "No official molecular-testing cost, treatment cost, India reimbursement decision, procurement figure, or cost-effectiveness analysis was reported.",
    nextMilestone: "Peer-reviewed publication with adjusted analyses and confidence intervals, prospective validation, biomarker-treatment interaction testing, class-specific trials, and India-representative genomic data.",
    verification: "Verified from IASLC's official WCLC release. The release reports the cohort sizes, outcome estimates, and co-mutation associations; treatment-predictive conclusions are explicitly not inferred.",
    source: "https://www.iaslc.org/iaslc-news/press-release/study-identifies-distinct-outcomes-and-genomic-features-nsclc-class-ii-and",
    secondarySource: "https://wclc.iaslc.org/virtual-delegate-bag-2026/"
  },
  {
    id: "wclc2026-sqcc-tumor-budding-grade",
    title: "IASLC tumor-budding grade validation in lung SqCC",
    short: "Tumor-budding grade",
    category: "Pathology / prognostic biomarker",
    status: "conference",
    statusLabel: "Conference-only validation",
    geography: "Republic of Korea single-center cohort; presented in Seoul",
    date: "15 September 2026",
    cancer: "Resected lung squamous cell carcinoma",
    issue: "Investigators independently evaluated the 2025 IASLC two-tier tumor-budding grading system and explored whether grade identified patients more likely to benefit from adjuvant chemotherapy.",
    organization: "Yonsei University Medical Center investigators; International Association for the Study of Lung Cancer",
    population: "585 consecutive patients who underwent curative-intent upfront resection from 2015 through 2022; 520 were low grade and 65 high grade. Exploratory genomic profiling used a case-matched subset of 100.",
    comparator: "High- versus low-tumor-budding grade; exploratory adjuvant-chemotherapy outcomes within pathologic stage IB-III disease.",
    endpoint: "Overall and disease-free survival, association with adjuvant chemotherapy outcomes, and exploratory genomic differences.",
    effect: "High grade was independently associated with worse overall and disease-free survival. Across stage IB-III there was no overall DFS benefit from adjuvant chemotherapy; the high-grade subgroup showed a clinically meaningful trend toward benefit, while low-grade patients did not. Effect sizes and confidence intervals were not reported in the IASLC release.",
    whyMatters: "A reproducible morphology-based grade could improve prognostic reporting and help target adjuvant-treatment research in resected lung SqCC without requiring an expensive assay, but prospective evidence is needed before treatment selection changes.",
    whoAffected: "Patients with resected lung SqCC, thoracic pathologists and surgeons, medical oncologists, multidisciplinary tumor boards, and guideline groups.",
    decisionImpact: "Supports pathology standardization and prospective stratification. It should not currently determine adjuvant chemotherapy because the treatment analysis was retrospective, exploratory, and underpowered in the 65-patient high-grade group.",
    evidenceStrength: "Moderate for independent prognostic validation in a consecutive cohort; low for predictive chemotherapy selection because the evidence is retrospective and exploratory.",
    limitations: "Single-center retrospective study; only 65 high-grade tumors; treatment was not randomized by grade; effect estimates and confidence intervals were absent from the captured release; no prospective multicenter or interobserver-reproducibility validation was reported.",
    indiaImpact: "The approach may be feasible in Indian pathology services if definitions and reproducibility are validated, but no India cohort, guideline adoption, training standard, reimbursement, test price, or treatment-selection pathway was verified.",
    cost: "Not applicable as a medicine price. No implementation-cost, pathology-workload, reimbursement, or cost-effectiveness analysis was reported.",
    nextMilestone: "Prospective multicenter validation, reproducibility studies, full adjusted effect estimates, randomized or prospectively stratified adjuvant evidence, guideline review, and validation in diverse populations including India.",
    verification: "Verified from IASLC's official WCLC release and conference abstract resources. The chemotherapy finding is labeled as an exploratory trend rather than a proven predictive effect.",
    source: "https://www.iaslc.org/iaslc-news/press-release/iaslc-tumor-budding-grade-identifies-high-risk-patients-resected-lung",
    secondarySource: "https://wclc.iaslc.org/virtual-delegate-bag-2026/"
  },
  {
    id: "wclc2026-brelt3-mobile-ldct",
    title: "BRELT3 mobile lung-cancer screening in Brazil",
    short: "BRELT3 mobile LDCT",
    category: "Screening / care delivery / equity",
    status: "conference",
    statusLabel: "Prospective observational implementation signal",
    geography: "Four cities in Northeast Brazil",
    date: "15 September 2026",
    cancer: "Lung cancer screening",
    issue: "BRELT3 evaluated a mobile low-dose CT unit and community-health-worker outreach for reaching high-risk and socially vulnerable populations in resource-limited settings.",
    organization: "ProPulmao Institute and BRELT3 investigators; IASLC WCLC 2026",
    population: "Of 5,223 potential participants identified, 2,018 eligible adults aged 50-80 who were current or former smokers underwent LDCT from 2023 through 2025; 87% self-identified as non-White and 64% had primary-level education.",
    comparator: "No concurrent control group. Recruitment through trained community health workers was descriptively compared with media and other recruitment routes.",
    endpoint: "Screening reach, Lung-RADS findings, biopsy completion, cancers detected, stage and treatment, and contribution of community health workers.",
    effect: "Lung-RADS 3 or 4 findings occurred in 283 participants; biopsy was indicated for 46, performed in 34, and 19 lung cancers were diagnosed (0.94% of those screened). Seven were advanced stage and seven underwent surgery. Community health workers recruited 894 participants (44.3%) and nearly 60% of rural participants.",
    whyMatters: "Mobile imaging plus community outreach may extend screening to populations usually missed by facility-based programs. The findings also expose diagnostic follow-through gaps because not every indicated biopsy was completed and several cancers were already advanced.",
    whoAffected: "High-risk adults in underserved and rural communities, primary-care and community-health workers, radiology and thoracic programs, public-health planners, and payers considering organized screening.",
    decisionImpact: "Supports implementation studies and locally designed outreach pathways, but does not establish mortality benefit, cost-effectiveness, or generalizability to India or other settings without a controlled comparison and longer follow-up.",
    evidenceStrength: "Moderate for feasibility and reach because the cohort was prospective and included 2,018 screened participants; low for comparative effectiveness because the study was single-arm and observational.",
    limitations: "Conference-only initial results; no control group; selection and referral bias; incomplete biopsy completion; no interval-cancer, false-positive, mortality, quality-of-life, cost, or long-term adherence analysis; outcomes may depend on Brazil's local community-health infrastructure.",
    indiaImpact: "Mobile LDCT and community-health-worker outreach are relevant to India's geographic access barriers, but no India implementation study, eligibility standard, national screening recommendation, reimbursement, procurement, official price, or capacity assessment was verified.",
    cost: "No mobile-unit capital cost, per-person screening cost, biopsy cost, cost-effectiveness result, India price, reimbursement decision, or procurement figure was reported.",
    nextMilestone: "Longer follow-up, biopsy-completion and stage-shift outcomes, interval cancers and mortality, false-positive harms, full economic evaluation, controlled implementation comparisons, and prospective India feasibility evidence.",
    verification: "Verified from IASLC's official WCLC release and cross-checked against earlier BRELT3 protocol and congress reports. The record represents feasibility and equity evidence, not proof of mortality reduction.",
    source: "https://www.iaslc.org/iaslc-news/press-release/mobile-ct-lung-cancer-screening-expands-access-underserved-populations",
    secondarySource: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12147508/"
  },
  {
    id: "wclc2026-destiny-lung04",
    title: "DESTINY-Lung04 first-line trastuzumab deruxtecan",
    short: "DESTINY-Lung04",
    category: "Conference-only Phase III treatment strategy",
    status: "conference",
    statusLabel: "Positive Phase III; OS unresolved",
    geography: "Global randomized trial; presented in Seoul, Republic of Korea",
    date: "14 September 2026",
    cancer: "Unresectable locally advanced or metastatic HER2-mutant non-squamous NSCLC",
    issue: "First-line trastuzumab deruxtecan (T-DXd/Enhertu) was compared with pembrolizumab plus platinum-pemetrexed chemotherapy in the Phase III DESTINY-Lung04 trial.",
    organization: "AstraZeneca and Daiichi Sankyo; DESTINY-Lung04 investigators; IASLC WCLC 2026",
    population: "454 treatment-naive patients with HER2 exon 19 or exon 20 mutations were randomized 1:1.",
    comparator: "T-DXd 5.4 mg/kg intravenously every three weeks versus pembrolizumab plus platinum chemotherapy and pemetrexed.",
    endpoint: "Primary endpoint was blinded-independent-central-review progression-free survival; overall survival, response, duration of response, and safety were secondary endpoints.",
    effect: "Median PFS was 14.3 versus 8.3 months (HR 0.63; 95% CI 0.50-0.79; p<0.0001), with ORR 70.0% versus 44.5%. Median OS was 29.3 versus 33.1 months (HR 1.15; 95% CI 0.88-1.52), with interpretation limited by imbalanced subsequent HER2-directed and immunotherapy use.",
    whyMatters: "This is the first global randomized Phase III evidence that a HER2-directed therapy can improve first-line disease control over pembrolizumab plus chemotherapy in HER2-mutant NSCLC, but the non-favorable immature OS estimate and pulmonary toxicity require careful interpretation.",
    whoAffected: "Patients with advanced HER2-mutant NSCLC, thoracic oncologists, molecular-testing programs, infusion services, regulators, payers, and manufacturers planning first-line sequencing.",
    decisionImpact: "The data can support regulatory filings and first-line sequencing discussions, but should not be represented as a new approval or definitive survival advantage.",
    evidenceStrength: "High for the randomized PFS result and reported confidence interval; moderate for treatment-changing interpretation because the result is conference-only, OS is not improved, and subsequent therapy was imbalanced.",
    limitations: "Conference presentation and official releases rather than a peer-reviewed full report; open-label design; OS was immature and numerically lower with T-DXd; quality-of-life, full subgroup, and complete safety tables were not captured in the public release.",
    indiaImpact: "HER2 testing and T-DXd delivery are relevant to India, but no CDSCO first-line HER2-mutant NSCLC authorization, India launch date, official India price, reimbursement, procurement, or India-specific outcome was verified.",
    cost: "No official price for this first-line indication, India reimbursement decision, procurement figure, or cost-effectiveness result was reported or verified.",
    nextMilestone: "Peer-reviewed publication, mature OS and patient-reported outcomes, regulatory submissions and decisions, detailed ILD management data, and any CDSCO or India-access milestone.",
    verification: "Verified from the IASLC WCLC result release and AstraZeneca's 14 September 2026 sponsor release. Adjudicated drug-related ILD/pneumonitis occurred in 20.8% with T-DXd versus 2.3% with the comparator; Grade 3 or higher drug-related adverse events occurred in 34.1% versus 33.6%.",
    source: "https://www.iaslc.org/iaslc-news/press-release/phase-3-destiny-lung04-trial-shows-first-line-trastuzumab-deruxtecan",
    secondarySource: "https://www.astrazeneca.com/media-centre/press-releases/2026/enhertu-in-DESTINY-Lung04-Phase-iii-trial.html"
  },
  {
    id: "wclc2026-rezilient3-zipalertinib",
    title: "REZILIENT3 zipalertinib plus chemotherapy",
    short: "REZILIENT3",
    category: "Conference-only Phase III treatment strategy",
    status: "conference",
    statusLabel: "Positive Phase III PFS",
    geography: "Global randomized trial; presented in Seoul, Republic of Korea",
    date: "14 September 2026",
    cancer: "Previously untreated advanced EGFR exon 20 insertion-positive non-squamous NSCLC",
    issue: "The Phase III REZILIENT3 trial tested first-line zipalertinib plus platinum-pemetrexed chemotherapy against chemotherapy alone.",
    organization: "Taiho Pharmaceutical, Taiho Oncology, Cullinan Therapeutics, and REZILIENT3 investigators",
    population: "279 patients were randomized after a six-patient safety lead-in; untreated asymptomatic brain metastases up to 2 cm were permitted.",
    comparator: "Zipalertinib 100 mg twice daily plus platinum-pemetrexed versus chemotherapy alone, with crossover permitted after progression.",
    endpoint: "Primary endpoint was blinded-independent-central-review PFS; response, duration, OS, and safety were secondary or exploratory endpoints.",
    effect: "Median PFS was 14.5 versus 8.5 months (HR 0.50; 95% CI 0.34-0.73; p=0.00015); ORR was 65.0% versus 40.3%. At 30% OS maturity, HR for death was 0.72 (95% CI 0.42-1.23).",
    whyMatters: "The result could add a targeted first-line option in a molecularly defined group with limited evidence beyond amivantamab-based treatment, while the immature OS and substantial added toxicity remain important.",
    whoAffected: "Patients with EGFR exon 20 insertion-positive NSCLC, molecular laboratories, thoracic oncologists, regulators, payers, and trial sponsors.",
    decisionImpact: "Supports regulatory and sequencing evaluation, including for patients with brain metastases, but does not establish approval, OS benefit, or superiority over other targeted regimens.",
    evidenceStrength: "High for randomized PFS; moderate for practice-changing interpretation because the evidence is conference-only and OS is immature.",
    limitations: "Open-label trial; crossover can complicate OS; only 30% OS maturity; no head-to-head comparison with amivantamab-based therapy; full quality-of-life and subgroup data were not available in the captured releases.",
    indiaImpact: "No CDSCO authorization for this regimen, India trial outcome, official India price, reimbursement, procurement, or launch date was reported or verified.",
    cost: "Investigational first-line regimen; no official price, India reimbursement decision, procurement figure, or cost-effectiveness result was reported.",
    nextMilestone: "OS maturation, peer-reviewed publication, regulatory submissions and decisions, cross-regimen sequencing evidence, and any India filing or access milestone.",
    verification: "Verified from matching IASLC and Taiho 14 September result releases and ClinicalTrials.gov NCT05973773. Grade 3 or higher adverse events occurred in 87.1% with zipalertinib plus chemotherapy versus 54.4% with chemotherapy; no new safety signal was reported.",
    source: "https://www.iaslc.org/iaslc-news/press-release/zipalertinib-plus-chemotherapy-significantly-extends-progression-free",
    secondarySource: "https://www.taiho.co.jp/en/release/2026/20260914.html"
  },
  {
    id: "wclc2026-harmoni2-os",
    title: "HARMONi-2 ivonescimab overall-survival update",
    short: "HARMONi-2 OS",
    category: "Conference-only Phase III survival update",
    status: "conference",
    statusLabel: "Positive interim OS; China-only trial",
    geography: "China; presented in Seoul, Republic of Korea",
    date: "13 September 2026",
    cancer: "Treatment-naive PD-L1-positive advanced NSCLC without EGFR or ALK alterations",
    issue: "A prespecified interim analysis of HARMONi-2 compared ivonescimab, a PD-1/VEGF bispecific antibody, with pembrolizumab monotherapy.",
    organization: "Akeso Biopharma; HARMONi-2 investigators; IASLC WCLC 2026",
    population: "398 patients enrolled at centers in China with PD-L1 TPS of at least 1%; 198 received ivonescimab and 200 pembrolizumab.",
    comparator: "Ivonescimab 20 mg/kg versus pembrolizumab 200 mg every three weeks.",
    endpoint: "Overall survival was a key secondary endpoint after the previously positive blinded-review PFS primary analysis.",
    effect: "Median OS was 30.8 versus 22.6 months (HR 0.73; 95% CI 0.57-0.95; p=0.009). The OS HR was 0.85 (95% CI 0.61-1.18) for PD-L1 TPS 1-49% and 0.58 (95% CI 0.38-0.89) for TPS at least 50%.",
    whyMatters: "A chemotherapy-free PD-1/VEGF bispecific showing a randomized OS advantage over pembrolizumab could alter first-line immunotherapy competition, but external validity beyond China and subgroup uncertainty remain central.",
    whoAffected: "Patients with PD-L1-positive advanced NSCLC, thoracic oncologists, regulators, payers, and developers of PD-(L)1/VEGF combinations.",
    decisionImpact: "Strengthens the evidence for ivonescimab in its China-approved setting and may inform global development, but should not be generalized as a global approval or as definitive benefit in every PD-L1 subgroup.",
    evidenceStrength: "High for the randomized prespecified interim OS analysis; moderate for global applicability because all patients were enrolled in China and some subgroup confidence intervals crossed one.",
    limitations: "Conference-only OS update; China-only population; key subgroup estimates remain uncertain; no direct evidence against chemo-immunotherapy; full long-term safety, quality-of-life, and global regulatory data were not available.",
    indiaImpact: "No CDSCO authorization, India trial site result, official India price, reimbursement, procurement, or launch date for ivonescimab was verified.",
    cost: "No official India price, reimbursement decision, procurement figure, or cost-effectiveness result was reported or verified.",
    nextMilestone: "Peer-reviewed OS publication, mature subgroup and safety analyses, global trial readouts, regulatory decisions outside China, and any India filing or access announcement.",
    verification: "Verified from the IASLC result release and the peer-reviewed HARMONi-2 PFS publication/registry record NCT05499390. Serious treatment-related adverse events were 29.9% with ivonescimab versus 21.6% with pembrolizumab.",
    source: "https://www.iaslc.org/iaslc-news/press-release/late-breaking-harmoni-2-analysis-shows-ivonescimab-significantly-improves",
    secondarySource: "https://pubmed.ncbi.nlm.nih.gov/40057343/"
  },
  {
    id: "wclc2026-maverick-pci",
    title: "MAVERICK MRI surveillance versus prophylactic cranial irradiation",
    short: "MAVERICK",
    category: "Radiotherapy de-escalation / supportive care",
    status: "conference",
    statusLabel: "Positive cognitive endpoint; final OS pending",
    geography: "International SWOG/NCTN trial; presented in Seoul, Republic of Korea",
    date: "13 September 2026",
    cancer: "Limited-stage or extensive-stage small-cell lung cancer after initial therapy",
    issue: "Phase III SWOG S1827 MAVERICK tested scheduled brain MRI surveillance alone against MRI surveillance plus prophylactic cranial irradiation (PCI).",
    organization: "SWOG Cancer Research Network, US National Clinical Trials Network, and MAVERICK investigators",
    population: "304 patients who had completed initial therapy and had no brain metastases on baseline MRI.",
    comparator: "Brain MRI every three months in year one and every six months in year two, with or without PCI 25 Gy in 10 fractions.",
    endpoint: "Reported primary endpoint was cognitive failure-free survival; preliminary OS, brain-metastasis-free survival, and toxicity were also reported.",
    effect: "MRI surveillance alone improved cognitive failure-free survival (HR 0.60; 90% CI 0.46-0.78; p=0.001). Preliminary OS showed no apparent difference (HR 0.90; 90% CI 0.67-1.20), and brain-metastasis-free survival was not significantly different (HR 1.25; 90% CI 0.95-1.66).",
    whyMatters: "Avoiding preventive brain radiation may preserve cognition and reduce serious toxicity without an early survival penalty, directly affecting post-treatment SCLC care. Adoption depends on reliable serial MRI access and final OS.",
    whoAffected: "Patients with limited- or extensive-stage SCLC after response to initial therapy, radiation and medical oncologists, radiology services, caregivers, and health systems able to deliver close MRI surveillance.",
    decisionImpact: "Supports discussion of MRI surveillance as an alternative to PCI, while final survival evidence and local MRI capacity should remain explicit in shared decision-making.",
    evidenceStrength: "High for randomized cognitive and toxicity outcomes; moderate for definitive de-escalation because only 304 patients were reported and the OS analysis is preliminary.",
    limitations: "Conference-only result; final OS is planned after 190 deaths; 90% rather than 95% confidence intervals were reported; implementation assumes timely repeated MRI and salvage treatment access.",
    indiaImpact: "The result is clinically relevant in India, but no India enrollment, guideline change, reimbursement, standardized MRI-surveillance pathway, or comparative India cost analysis was verified. MRI availability and out-of-pocket cost may constrain adoption.",
    cost: "No official comparative cost or India reimbursement analysis was reported; repeated MRI and salvage-treatment costs must be weighed against PCI delivery and toxicity.",
    nextMilestone: "Final OS after 190 deaths, peer-reviewed publication, guideline responses, quality-of-life detail, and implementation evidence in settings with constrained MRI access.",
    verification: "Verified from IASLC's WCLC result release, the SWOG S1827 trial page, and ClinicalTrials.gov NCT04155034. Grade 3-5 treatment-related adverse events were 0.8% with MRI alone versus 7.9% with MRI plus PCI; one grade 5 encephalopathy occurred with PCI.",
    source: "https://www.iaslc.org/iaslc-news/press-release/phase-iii-maverick-trial-supports-brain-mri-surveillance-alone-standard",
    secondarySource: "https://clinicaltrials.gov/study/NCT04155034"
  },
  {
    id: "wclc2026-taishan302-tampeli",
    title: "TAISHAN-302 tambotatug pelitecan versus topotecan",
    short: "TAISHAN-302",
    category: "Conference-only Phase III ADC evidence",
    status: "conference",
    statusLabel: "Positive Phase III OS",
    geography: "Randomized trial; presented in Seoul, Republic of Korea",
    date: "13 September 2026",
    cancer: "Relapsed small-cell lung cancer after first-line therapy",
    issue: "TAISHAN-302 compared the investigational anti-B7-H3 antibody-drug conjugate tambotatug pelitecan (Tam-Peli/YL201) with topotecan.",
    organization: "MediLink Therapeutics and TAISHAN-302 investigators",
    population: "451 patients were randomized 1:1; prespecified subgroups included brain metastases, liver metastases, and chemotherapy-free interval under 90 days.",
    comparator: "Tam-Peli 2.0 mg/kg intravenously every three weeks versus topotecan.",
    endpoint: "Primary endpoint was OS; PFS, response, and safety were key secondary endpoints.",
    effect: "Median OS was 13.3 versus 9.4 months (HR 0.46; 95% CI 0.35-0.62; p<0.0001); median PFS was 7.4 versus 2.8 months (HR 0.29; 95% CI 0.23-0.37; p<0.0001); ORR was 59.1% versus 9.7%.",
    whyMatters: "A large randomized survival gain in relapsed SCLC could create a new second-line ADC option and intensify competition among B7-H3 programs.",
    whoAffected: "Patients with relapsed SCLC, thoracic oncologists, infusion centers, regulators, payers, and ADC developers.",
    decisionImpact: "Supports regulatory development and trial/planning decisions, but does not establish approval or comparative superiority over other new SCLC agents.",
    evidenceStrength: "High for the randomized OS and PFS results; moderate for immediate practice interpretation because evidence remains conference-only and regulatory review is pending.",
    limitations: "Open-label conference report; full geographic distribution, patient-reported outcomes, long-term safety, post-progression therapy, and peer-reviewed analysis were not available in the captured source.",
    indiaImpact: "No CDSCO authorization, verified India enrollment, official India price, reimbursement, procurement, access program, or launch date was reported.",
    cost: "Investigational ADC; no official commercial price, India price, reimbursement decision, procurement figure, or cost-effectiveness result was reported.",
    nextMilestone: "Peer-reviewed publication, regulatory filings and decisions, longer follow-up, detailed ILD monitoring, and any India trial or access milestone.",
    verification: "Verified from IASLC's official WCLC release and ClinicalTrials.gov NCT06612151. Grade 3 or higher treatment-related adverse events occurred in 46.4% with Tam-Peli versus 74.7% with topotecan; treatment-emergent ILD/pneumonitis occurred in 4.9% versus 1.4%.",
    source: "https://www.iaslc.org/iaslc-news/press-release/phase-iii-taishan-302-trial-shows-tam-peli-significantly-improves-survival",
    secondarySource: "https://clinicaltrials.gov/study/NCT06612151"
  },
  {
    id: "wclc2026-artemis008-risrez",
    title: "ARTEMIS-008 risvutatug rezetecan versus topotecan",
    short: "ARTEMIS-008",
    category: "Conference-only Phase III ADC evidence",
    status: "conference",
    statusLabel: "Positive Phase III OS; China-only trial",
    geography: "China; presented in Seoul, Republic of Korea",
    date: "13 September 2026",
    cancer: "Relapsed small-cell lung cancer after platinum-based chemotherapy",
    issue: "ARTEMIS-008 compared risvutatug rezetecan (Ris-Rez), a B7-H3-directed ADC, with topotecan.",
    organization: "Hansoh Pharma, GSK, and ARTEMIS-008 investigators",
    population: "461 patients in China were randomized 1:1; more than 80% had previously received a PD-(L)1 inhibitor.",
    comparator: "Ris-Rez 8.0 mg/kg every three weeks versus topotecan 1.2 mg/m2 on days 1-5 every three weeks.",
    endpoint: "Primary endpoint was OS; PFS, response, disease control, and safety were key secondary endpoints.",
    effect: "Median OS was 18.5 versus 10.3 months (HR 0.46; 95% CI 0.35-0.62; p<0.0001); median PFS was 7.2 versus 3.0 months (HR 0.33; 95% CI 0.25-0.42); ORR was 58.3% versus 12.6%.",
    whyMatters: "This second positive Phase III B7-H3 ADC result in the same relapsed-SCLC setting reinforces the target while creating a need for careful cross-program differentiation without indirect superiority claims.",
    whoAffected: "Patients with relapsed SCLC, thoracic oncologists, regulators, payers, and B7-H3 ADC developers.",
    decisionImpact: "Supports regulatory development and informs the emerging B7-H3 class, but should not be used for direct comparison with Tam-Peli because the trials were separate.",
    evidenceStrength: "High for randomized OS and PFS in the studied China population; moderate for global applicability and immediate practice change because the evidence is conference-only and approval is pending.",
    limitations: "China-only open-label trial; no head-to-head comparison with other B7-H3 ADCs; full long-term safety, quality-of-life, subgroup, and post-progression data were not available in the captured release.",
    indiaImpact: "No CDSCO authorization, India enrollment, official India price, reimbursement, procurement, access program, or launch date was verified.",
    cost: "Investigational ADC; no official commercial or India price, reimbursement decision, procurement figure, or cost-effectiveness result was reported.",
    nextMilestone: "Peer-reviewed publication, regulatory filings and decisions inside and outside China, global-development data, and any India trial or access milestone.",
    verification: "Verified from IASLC's WCLC release, GSK's official topline context, and ClinicalTrials.gov NCT06498479. Grade 3 or higher treatment-related adverse events occurred in 60.9% with Ris-Rez versus 78.2% with topotecan, mainly hematologic.",
    source: "https://www.iaslc.org/iaslc-news/press-release/phase-iii-artemis-008-trial-shows-risvutatug-rezetecan-significantly",
    secondarySource: "https://clinicaltrials.gov/study/NCT06498479"
  },
  {
    id: "wclc2026-evoke03-negative",
    title: "EVOKE-03 sacituzumab govitecan plus pembrolizumab",
    short: "EVOKE-03 negative",
    category: "Negative Phase III evidence",
    status: "negative",
    statusLabel: "Primary endpoints not met",
    geography: "Global randomized trial; presented in Seoul, Republic of Korea",
    date: "13 September 2026",
    cancer: "Previously untreated PD-L1-high metastatic NSCLC without EGFR, ALK, or ROS1 alterations",
    issue: "EVOKE-03/KEYNOTE-D46 tested sacituzumab govitecan plus pembrolizumab versus pembrolizumab alone in tumors with PD-L1 TPS at least 50%.",
    organization: "Gilead Sciences, Merck & Co., and EVOKE-03 investigators",
    population: "620 patients with untreated metastatic NSCLC and PD-L1 TPS at least 50% were randomized.",
    comparator: "Sacituzumab govitecan 10 mg/kg on days 1 and 8 plus pembrolizumab 200 mg every 21 days versus pembrolizumab alone.",
    endpoint: "Dual primary endpoints were blinded-review PFS and OS.",
    effect: "Median PFS was 11.8 versus 7.7 months (HR 0.81; 95% CI 0.66-1.00; p=0.0252), but the prespecified significance threshold was not met. Interim median OS was 21.5 versus 22.8 months (HR 1.07; 95% CI 0.85-1.35; p=0.7155).",
    whyMatters: "The negative result prevents a higher response rate and numerical PFS difference from being mistaken for established first-line benefit and informs whether Trop-2 ADC combinations should advance in PD-L1-high disease.",
    whoAffected: "Patients with PD-L1-high metastatic NSCLC, thoracic oncologists, regulators, payers, Gilead and Merck, and investigators designing ADC-immunotherapy combinations.",
    decisionImpact: "Does not support replacing pembrolizumab monotherapy with the combination in this population based on current evidence; further analyses may affect development strategy.",
    evidenceStrength: "High for the randomized negative primary-endpoint result; OS remains interim.",
    limitations: "Conference-only primary report; OS follow-up is incomplete; biomarker and subgroup analyses were not fully available; lack of statistical significance should not be reframed as benefit from numerical PFS or response differences.",
    indiaImpact: "No India-specific outcome, CDSCO indication change, price, reimbursement, procurement, or access milestone was reported or verified.",
    cost: "No comparative cost-effectiveness or official India regimen-price analysis was reported; adding an ADC would increase treatment and toxicity-management burden without established primary-endpoint benefit.",
    nextMilestone: "Mature OS, peer-reviewed publication, biomarker/subgroup analyses, sponsor development decisions, and any regulatory communication.",
    verification: "Verified from IASLC's WCLC release, the official Gilead/Merck study update, and ClinicalTrials.gov NCT05609968. Grade 3 or higher treatment-related adverse events were 55.7% with the combination versus 16.5% with pembrolizumab.",
    source: "https://www.iaslc.org/iaslc-news/press-release/sacituzumab-govitecan-plus-pembrolizumab-does-not-meet-primary-endpoints",
    secondarySource: "https://clinicaltrials.gov/study/NCT05609968"
  },
  {
    id: "wclc2026-lonestar-negative",
    title: "LONESTAR local consolidative therapy after dual immunotherapy",
    short: "LONESTAR negative",
    category: "Negative Phase III multimodality evidence",
    status: "negative",
    statusLabel: "No OS or PFS benefit",
    geography: "United States; single-center randomized trial presented in Seoul",
    date: "12 September 2026",
    cancer: "Immunotherapy-naive metastatic NSCLC, including oligometastatic disease",
    issue: "LONESTAR tested radiation or surgery as local consolidative therapy after 12 weeks of nivolumab plus ipilimumab in patients without progression or dose-limiting toxicity.",
    organization: "MD Anderson Cancer Center and LONESTAR investigators",
    population: "166 patients were randomized after induction; 77 had oligometastatic disease at randomization.",
    comparator: "Continued nivolumab plus ipilimumab alone versus local consolidative radiation or surgery followed by the same dual immunotherapy.",
    endpoint: "Overall survival and progression-free survival in the overall and oligometastatic populations.",
    effect: "Median OS was 52.8 months with immunotherapy alone versus 43.2 months with local consolidation (HR 1.14; 95% CI 0.75-1.74; p=0.54). Median PFS was 24.3 versus 31.3 months (HR 0.79; 95% CI 0.54-1.15; p=0.22); no benefit was reported in the oligometastatic subgroup.",
    whyMatters: "Local consolidation has been attractive for selected oligometastatic NSCLC, but this randomized result argues against routine addition after dual checkpoint blockade in an unselected population.",
    whoAffected: "Patients with metastatic or oligometastatic NSCLC, thoracic oncologists, radiation oncologists, surgeons, multidisciplinary tumor boards, and payers.",
    decisionImpact: "Should temper routine radiation or surgery after nivolumab plus ipilimumab outside individualized indications or trials.",
    evidenceStrength: "Moderate to high for the negative randomized result; generalizability is limited by the single-center design and selected post-induction population.",
    limitations: "Single-center, open-label, 166-patient trial; subgroup power was limited; treatment techniques and selection may differ across centers; conference-only report without full peer-reviewed publication.",
    indiaImpact: "The result is relevant to multidisciplinary care in India, but no India enrollment, guideline response, comparative cost, reimbursement, or local implementation study was verified.",
    cost: "No formal cost-effectiveness analysis was reported; the result questions adding radiation or surgery costs and burden without demonstrated survival benefit.",
    nextMilestone: "Peer-reviewed publication, prespecified subgroup detail, treatment-quality analysis, and guideline responses.",
    verification: "Verified from IASLC's official WCLC release and the registered LONESTAR study NCT03391869. Grade 3 or higher adverse events were not increased overall, but pneumonitis was 9.5% with local consolidation versus 4.9% with immunotherapy alone.",
    source: "https://www.iaslc.org/iaslc-news/press-release/local-consolidative-therapy-does-not-improve-survival-after-dual",
    secondarySource: "https://clinicaltrials.gov/study/NCT03391869"
  },
  {
    id: "wclc2026-impower030-neutral",
    title: "IMpower030 perioperative atezolizumab final analysis",
    short: "IMpower030 neutral",
    category: "Neutral Phase III perioperative evidence",
    status: "neutral",
    statusLabel: "Primary endpoint not statistically significant",
    geography: "Global randomized trial; presented in Seoul, Republic of Korea",
    date: "12 September 2026",
    cancer: "Resectable stage IIB-IIIB non-small-cell lung cancer",
    issue: "Final Phase III IMpower030 results compared perioperative atezolizumab plus platinum-based chemotherapy with chemotherapy alone.",
    organization: "Roche/Genentech and IMpower030 investigators",
    population: "Adults with resectable stage IIB-IIIB NSCLC; full randomized population size was not reported in the captured IASLC release.",
    comparator: "Perioperative atezolizumab plus platinum chemotherapy versus placebo plus chemotherapy.",
    endpoint: "Primary event-free-survival endpoint, with pathologic response, disease-free survival, overall survival, surgical feasibility, and safety also reported.",
    effect: "Median event-free survival was 62.8 versus 34.9 months, but the prespecified statistical threshold was not met. Pathologic complete response was 30.6% versus 8.6%, and major pathologic response was 54.3% versus 24.9%; hazard ratio and confidence interval were not reported in the captured release.",
    whyMatters: "The study shows why favorable medians and pathologic-response rates cannot substitute for a statistically successful primary endpoint when judging a perioperative regimen.",
    whoAffected: "Patients with resectable NSCLC, thoracic surgeons, medical oncologists, pathologists, multidisciplinary teams, regulators, and payers.",
    decisionImpact: "Does not independently establish this perioperative atezolizumab regimen as superior; detailed analysis may still inform trial design and biomarker selection.",
    evidenceStrength: "Moderate: randomized Phase III final results were officially presented, but the primary endpoint was not met and key effect estimates were absent from the public release.",
    limitations: "Conference-only report; sample size, EFS hazard ratio and confidence interval, full OS data, subgroup analyses, complete safety tables, and patient-reported outcomes were not reported in the captured release.",
    indiaImpact: "No India-specific outcome, CDSCO perioperative indication change, official India regimen price, reimbursement, or procurement milestone was verified.",
    cost: "No cost-effectiveness result or official India regimen cost was reported; perioperative immunotherapy adds treatment duration and monitoring without a statistically successful primary endpoint in this trial.",
    nextMilestone: "Full abstract/slides and peer-reviewed publication, complete hazard-ratio and safety reporting, biomarker analyses, and any regulator or guideline response.",
    verification: "Verified from IASLC's official WCLC release and ClinicalTrials.gov NCT03456063. Surgical cancellation rates were reported as low and similar, and no new safety signal was identified.",
    source: "https://www.iaslc.org/iaslc-news/press-release/perioperative-atezolizumab-plus-chemotherapy-more-doubles-event-free",
    secondarySource: "https://clinicaltrials.gov/study/NCT03456063"
  },
  {
    id: "tacti004-efti-manufacturing-followup",
    title: "TACTI-004 efti manufacturing and futility follow-up",
    short: "TACTI-004 manufacturing follow-up",
    category: "Manufacturing / negative trial follow-up",
    status: "negative",
    statusLabel: "Sponsor-reported root-cause signal",
    geography: "Global Phase III trial; India participation authorized",
    date: "11 September 2026",
    cancer: "First-line advanced or metastatic non-small cell lung cancer",
    issue: "Immutep reported that its ongoing root-cause analysis of the discontinued Phase III TACTI-004 trial identified structural differences, including a subtle N-glycan difference, between eftilagimod alfa manufactured at 2,000 L scale for TACTI-004 and material manufactured at 200 L scale for earlier studies.",
    organization: "Immutep Limited; Merck & Co. supplied pembrolizumab; TACTI-004 investigators",
    population: "The July sponsor update reported a 173-patient TACTI-004 futility-analysis population with untreated advanced or metastatic NSCLC without EGFR, ALK, or ROS1 genomic aberrations. CDSCO had authorized up to 58 participants from India under the trial permission.",
    comparator: "Eftilagimod alfa plus pembrolizumab and chemotherapy versus placebo plus pembrolizumab and chemotherapy in a randomized, double-blind Phase III trial.",
    endpoint: "The planned interim analysis assessed futility for the Phase III efficacy program. The ongoing root-cause work is examining clinical, pharmacological, immune-monitoring, and manufacturing factors rather than testing a prespecified clinical endpoint.",
    effect: "The previously reported interim objective response rate was 42.9% with efti versus 55.1% with placebo, and the trial was stopped for futility. On 11 September, Immutep said the 2,000 L product showed structural differences and a markedly different immune-activation profile from earlier 200 L batches; the company called these differences potentially relevant and contracted a new 200 L manufacturing run.",
    whyMatters: "A possible scale-up-related product difference can affect how a failed pivotal immunotherapy trial is interpreted and how future comparability, potency, and manufacturing controls are designed. It does not reverse the negative Phase III result or establish that manufacturing caused the futility outcome.",
    whoAffected: "Participants and investigators in the global TACTI-004 program, including India sites; patients with first-line advanced NSCLC; regulators; trial sponsors; manufacturing and quality teams; and researchers evaluating efti in head and neck cancer or soft tissue sarcoma.",
    decisionImpact: "The update may change manufacturing strategy, comparability testing, regulatory discussions, and whether future efti trials use 200 L material. It should not change routine NSCLC treatment or support clinical use of efti outside trials.",
    evidenceStrength: "High for the trial discontinuation and the sponsor's decision to revert to a 200 L manufacturing run; low to moderate for causality because the root-cause analysis is incomplete, the analytical differences are sponsor-reported, and no independent validation or direct demonstration that the structural difference caused the efficacy failure was available.",
    limitations: "Sponsor-release-only follow-up to a stopped trial; root-cause analysis remains ongoing; no final clinical analysis, complete safety table, validated potency-comparability package, independent laboratory confirmation, regulator conclusion, or peer-reviewed manufacturing analysis was reported. The proposed HNSCC and soft-tissue-sarcoma studies are not final and are targeted no earlier than the second half of 2027, subject to multiple conditions.",
    indiaImpact: "CDSCO authorized up to 58 India participants in TACTI-004 in October 2024, making trial close-out and follow-up directly relevant to India sites and participants. No CDSCO conclusion on the manufacturing finding, India-specific outcome analysis, approval, price, reimbursement, access program, or launch date was reported or verified.",
    cost: "Not applicable to an approved treatment because efti remains investigational. No official treatment price, manufacturing-cost effect, India reimbursement decision, procurement figure, or cost-effectiveness result was reported or verified.",
    nextMilestone: "Completion and public reporting of the root-cause analysis; final TACTI-004 efficacy and safety results; validated analytical and functional comparability data for 200 L versus 2,000 L material; regulator feedback; and final protocols for any HNSCC or neoadjuvant soft-tissue-sarcoma trials.",
    verification: "Verified from Immutep's 11 September 2026 official release, its 13 July clinical update with the 173-patient interim ORR results, ClinicalTrials.gov NCT06726265, and the CDSCO India trial permission. The manufacturing explanation is explicitly labeled as an unresolved sponsor hypothesis, not an established cause of trial failure.",
    source: "https://www.globenewswire.com/news-release/2026/09/11/3360296/0/en/immutep-outlines-focused-development-strategy-for-eftilagimod-alfa-efti.html",
    secondarySource: "https://clinicaltrials.gov/study/NCT06726265"
  },
  {
    id: "who-childhood-cancer-prequalification-eoi",
    title: "WHO childhood-cancer medicine prequalification invitation",
    short: "WHO paediatric oncology EOI",
    category: "Access / manufacturing / procurement",
    status: "systems",
    statusLabel: "WHO market-shaping action",
    geography: "Global, with focus on low- and middle-income countries",
    date: "15 September 2026",
    cancer: "Childhood cancers",
    issue: "WHO highlighted its first invitation for manufacturers of childhood-cancer medicines to submit products for evaluation through the WHO Prequalification Programme, then on 15 September linked that action to a broader 2026-2030 market-shaping strategy.",
    organization: "World Health Organization; Global Platform for Access to Childhood Cancer Medicines; GAP-f; St. Jude Children's Research Hospital; UNICEF; PAHO Strategic Fund",
    population: "Children and adolescents with cancer worldwide, especially the estimated 90% who live in low- and middle-income countries. WHO states that the Global Platform is expected to reach approximately 120,000 children.",
    comparator: "Current fragmented access to products of variable quality, formulations unsuitable for children, and supply interruptions; this is a market-shaping and quality-assurance action, not a comparative clinical trial.",
    endpoint: "Manufacturer submissions, WHO product evaluation and prequalification, development of age-appropriate formulations, and expansion of quality-assured products eligible for international and national procurement.",
    effect: "The invitation covers six medicines needing child-friendly formulations - cyclophosphamide, etoposide, mercaptopurine, methotrexate, procarbazine and temozolomide - plus six medicines with documented access or supply gaps: pegaspargase, asparaginase, preservative-free hydrocortisone, dactinomycin, vincristine and cytarabine. No product prequalification, procurement award, price change, or delivery volume was announced in the update.",
    whyMatters: "Quality-assured supply and age-appropriate formulations are core constraints in childhood cancer care. A WHO prequalification route can lower procurement risk and create clearer development targets for manufacturers, but its impact depends on submissions, successful evaluations, purchasing commitments, and reliable country delivery.",
    whoAffected: "Children with cancer in low- and middle-income countries, caregivers, paediatric oncology programs, medicine manufacturers, national procurement agencies, WHO and partner purchasing platforms, regulators, and supply-chain organizations.",
    decisionImpact: "Manufacturers can decide whether to develop or submit eligible products, while procurement programs and countries can prepare to use future WHO-prequalified products. Current treatment choices should not change solely because the invitation has opened.",
    evidenceStrength: "High for the policy action and named medicine list because both are documented by WHO and its Prequalification Programme. Evidence of downstream access improvement is not yet available because submissions, evaluations, prequalification decisions, contracts, prices, and deliveries remain future milestones.",
    limitations: "The invitation is an enabling regulatory and market-shaping step, not proof of manufacturer participation, product approval, clinical superiority, lower prices, procurement awards, continuous supply, or patient-level outcomes. Country eligibility, timelines, application volume, evaluation outcomes, and financing were not reported in the announcement.",
    indiaImpact: "India is relevant as a major generic-medicine manufacturing and procurement market, but no India manufacturer submission, CDSCO action, India procurement decision, price, program enrollment, delivery commitment, or launch milestone was officially identified in this review.",
    cost: "No product price, tender value, pooled-procurement price, manufacturer subsidy, India reimbursement decision, or cost-effectiveness result was reported or verified.",
    nextMilestone: "Named manufacturer submissions, WHO evaluation and prequalification decisions, published demand forecasts, procurement awards and prices, country delivery and stockout metrics, and any official India manufacturing or access participation.",
    verification: "Verified from WHO's 4 September 2026 departmental update, the WHO Prequalification Programme invitation, and WHO's 15 September 2026 market-shaping strategy launch. This remains an enabling action, not a medicine approval or evidence that any listed product has completed prequalification.",
    source: "https://www.who.int/news/item/04-09-2026-who-advances-access-to-quality-assured--child-friendly-cancer-medicines",
    secondarySource: "https://extranet.who.int/prequal/news/1st-invitation-manufacturers-medicinal-products-treatment-childhood-cancer-submit-expression"
  },
  {
    id: "neoadjuvant-nivolumab-ipilimumab-gbm",
    title: "Neoadjuvant nivolumab plus ipilimumab in recurrent glioblastoma",
    short: "Nivolumab + ipilimumab GBM",
    category: "Early randomized surgical-window evidence",
    status: "conference",
    statusLabel: "Peer-reviewed emerging signal",
    geography: "United States; four-center trial",
    date: "5 September 2026",
    cancer: "Surgically resectable recurrent glioblastoma",
    issue: "A randomized Phase I surgical window-of-opportunity trial evaluated presurgical nivolumab plus ipilimumab, nivolumab alone, or placebo before resection, followed by protocol-defined postoperative checkpoint blockade.",
    organization: "Dana-Farber Cancer Institute-led investigators; UCLA, Stanford, Memorial Sloan Kettering; Bristol Myers Squibb supplied study drugs",
    population: "71 adults were screened, 63 were randomized in the intention-to-treat population, and 58 received study treatment between 2021 and 2024 for surgically resectable recurrent glioblastoma.",
    comparator: "Presurgical nivolumab plus ipilimumab (Arm 1), nivolumab alone (Arm 2), or placebo (Arm 3). After surgery, Arms 1 and 3 received dual checkpoint blockade while Arm 2 continued nivolumab until progression or unacceptable toxicity.",
    endpoint: "Primary endpoint was tumor-infiltrating lymphocyte density. Overall survival and immune-response measures were secondary or exploratory endpoints.",
    effect: "The primary endpoint was met: neoadjuvant dual blockade significantly increased tumor-infiltrating lymphocyte density versus the untreated presurgical control. Median overall survival was 402 days (95% CI 265-571) among patients receiving postoperative dual blockade in Arms 1 and 3 and 273 days (95% CI 166-506) in the nivolumab-alone arm; the study was not designed to establish a definitive survival advantage between these pooled groups.",
    whyMatters: "Glioblastoma has historically shown limited benefit from systemic checkpoint blockade. Demonstrating intratumoral immune activation in a randomized surgical-window study supports further testing of dual PD-1/CTLA-4 blockade and biomarker-directed neoadjuvant strategies, but does not establish a new standard of care.",
    whoAffected: "Adults with surgically resectable recurrent glioblastoma, neuro-oncology and neurosurgical teams, translational investigators, trial sponsors, and regulators evaluating whether pharmacodynamic activity warrants larger efficacy trials.",
    decisionImpact: "The result may change trial-development priorities and biomarker sampling strategies, but should not independently change routine treatment selection because clinical efficacy was not the primary endpoint and the trial was small and Phase I.",
    evidenceStrength: "Moderate as an emerging signal: peer-reviewed, randomized, multicenter evidence met a prespecified tissue pharmacodynamic endpoint and reported confidence intervals for survival. Clinical-efficacy certainty is low because only 63 patients were randomized, postoperative treatment differed by arm, survival was secondary, and the reported comparison pooled two dual-blockade arms.",
    limitations: "Early online peer-reviewed version; Phase I; small sample; primary endpoint was tissue immune activation rather than progression-free or overall survival; no hazard ratio or randomized confirmatory survival test was reported in the abstract; detailed adverse-event rates, quality of life, cost-effectiveness, regulatory filing, approval, and broad generalizability were not established.",
    indiaImpact: "No India trial site, CDSCO authorization, India-specific guideline action, official launch date, combination price, reimbursement decision, procurement pathway, or access program was verified. Both drugs have uses in other cancers, but this glioblastoma regimen is investigational.",
    cost: "Not applicable as an approved glioblastoma regimen. No official regimen price, cost-effectiveness result, India reimbursement decision, or procurement figure was reported or verified.",
    nextMilestone: "A larger prospectively powered efficacy trial with a prespecified survival comparison, complete safety and quality-of-life reporting, biomarker validation, regulatory guidance, and any official India participation or access milestone.",
    verification: "Verified from the 5 September 2026 peer-reviewed Nature Communications article and ClinicalTrials.gov NCT04606316. The article reports no unanticipated toxicities, but detailed grade-specific safety rates were not captured in the abstract. Represented as an emerging signal, not an approval or practice-changing survival claim.",
    source: "https://www.nature.com/articles/s41467-026-77433-z",
    secondarySource: "https://clinicaltrials.gov/study/NCT04606316"
  },
  {
    id: "cervino-etentamig",
    title: "CERVINO BCMA bispecific myeloma topline",
    short: "Etentamig",
    category: "Press-release-only phase III",
    status: "conference",
    statusLabel: "Company topline only",
    geography: "Global trial; sponsor release from United States",
    date: "3 September 2026",
    cancer: "Relapsed/refractory multiple myeloma",
    issue: "AbbVie reported positive topline Phase III CERVINO results for etentamig, an investigational BCMA x CD3 bispecific T-cell engager, versus investigator's choice of standard available therapies in triple-class-exposed relapsed or refractory multiple myeloma.",
    organization: "AbbVie",
    population: "393 patients at data cutoff with triple-class-exposed relapsed or refractory multiple myeloma after proteasome inhibitor, immunomodulatory drug and anti-CD38 monoclonal antibody exposure; median prior lines of therapy was three.",
    comparator: "Etentamig with a single step-up dose and monthly dosing from initiation versus investigator's choice of standard available therapies.",
    endpoint: "Dual primary endpoints of objective response rate and progression-free survival in the Phase III CERVINO interim analysis.",
    effect: "AbbVie reported ORR 74.0% (95% CI 67.25-79.97) versus 45.7% (95% CI 38.59-52.91), p<0.0001; PFS HR 0.40 (95% CI 0.29-0.54), p<0.0001. Twelve-month OS was 87.9% versus 72.0%, HR 0.48 (95% CI 0.29-0.77), nominal p=0.0012, but the prespecified OS efficacy boundary was not crossed.",
    whyMatters: "Triple-class-exposed myeloma remains a high-need setting, and BCMA-directed therapies are often constrained by cytokine-release, infection, monitoring, and site-of-care burden. A monthly BCMA bispecific with positive randomized PFS and response data could affect sequencing and outpatient/community delivery assumptions if the full dataset supports the topline.",
    whoAffected: "Patients with triple-class-exposed relapsed or refractory multiple myeloma, myeloma specialists, community oncology programs evaluating bispecific delivery, infusion centers, payers, AbbVie, and regulators assessing the etentamig evidence package.",
    decisionImpact: "Whether developers, investigators, and treatment centers prepare for a potentially lower-burden BCMA bispecific pathway while waiting for full IMS presentation data, regulatory filing or approval, and comparative safety and durability details.",
    evidenceStrength: "Moderate as a signal: the trigger is an official sponsor release with numerical ORR, PFS HR, confidence intervals and safety highlights from a randomized Phase III trial, but the full protocol, full safety table, Kaplan-Meier detail, subgroup data, and independent peer-reviewed publication were not available in this pass.",
    limitations: "Press-release-only interim analysis; no median PFS, median OS, duration of response, complete response/MRD profile, detailed comparator breakdown, regional enrollment, quality-of-life, cost, filing, approval, or label was verified. Overall survival was immature for formal significance because the prespecified efficacy boundary was not crossed.",
    indiaImpact: "No CDSCO authorization, India launch date, India price, reimbursement decision, procurement pathway, India trial-site details, or India-specific access program was verified.",
    cost: "No official price, cost-effectiveness result, India reimbursement, or procurement figure was reported or verified.",
    nextMilestone: "Full CERVINO results at the International Myeloma Society Annual Meeting on 23-26 September 2026, regulatory filing status, full label-quality safety data, site-of-care requirements, and any official India or global access announcement.",
    verification: "Verified from AbbVie's 3 September 2026 official release. Promoted as a press-release-only watchlist signal, not a regulatory approval or definitive practice-changing comparative claim.",
    source: "https://news.abbvie.com/2026-09-03-AbbVie-Announces-Positive-Topline-Results-from-the-Phase-3-CERVINO-Trial-Showing-Etentamig-Significantly-Improved-Response-Rate-and-Progression-Free-Survival-in-Patients-with-Relapsed-Refractory-Multiple-Myeloma",
    secondarySource: "https://clinicaltrials.gov/"
  },
  {
    id: "sanovo-savolitinib-osimertinib",
    title: "SANOVO first-line EGFR/MET lung-cancer topline",
    short: "SANOVO",
    category: "Press-release-only phase III",
    status: "conference",
    statusLabel: "Company topline only",
    geography: "China",
    date: "1 September 2026",
    cancer: "EGFR-mutated NSCLC with MET overexpression",
    issue: "AstraZeneca and HUTCHMED reported positive high-level results from the China Phase III SANOVO trial of Orpathys (savolitinib) plus Tagrisso (osimertinib) versus Tagrisso alone in treatment-naive locally advanced or metastatic EGFR-mutated NSCLC with MET overexpression.",
    organization: "AstraZeneca; HUTCHMED",
    population: "Treatment-naive patients in China with locally advanced or metastatic non-small cell lung cancer whose tumors had an EGFR mutation and MET overexpression. ClinicalTrials.gov NCT05009836 identifies SANOVO as an active, not-recruiting phase III study sponsored by Hutchison Medipharma Limited.",
    comparator: "Savolitinib plus osimertinib versus osimertinib alone.",
    endpoint: "Progression-free survival in the high-MET IHC 3+ and intention-to-treat IHC 2+/IHC 3+ populations, according to the sponsor releases.",
    effect: "Sponsors reported statistically significant and highly clinically meaningful PFS improvement in both high-MET and intention-to-treat populations, but did not report median PFS, hazard ratio, confidence interval, p value, response rate, overall survival, or detailed safety tables in the release.",
    whyMatters: "First-line EGFR-mutated NSCLC care is increasingly segmented by co-drivers such as MET overexpression. A positive randomized first-line China Phase III signal could influence biomarker testing, all-oral combination sequencing, and later regulatory strategy, but it is not yet an approval or a full efficacy dataset.",
    whoAffected: "Patients in China with treatment-naive locally advanced or metastatic EGFR-mutated, MET-overexpressing NSCLC; thoracic oncologists; molecular pathology programs measuring MET by IHC; AstraZeneca and HUTCHMED; and regulators or payers evaluating whether a first-line EGFR/MET combination has sufficient evidence.",
    decisionImpact: "Whether clinicians, guideline groups, sponsors, and regulators should prepare for a first-line EGFR/MET combination pathway, while waiting for full effect sizes, safety, quality-of-life, overall-survival data, and any formal regulatory filing or approval.",
    evidenceStrength: "Moderate as a signal: the trigger is an official company topline announcement from two responsible organizations and the trial is registered as phase III, but no numerical efficacy, confidence intervals, full safety results, or peer-reviewed report were available in this pass.",
    limitations: "Press-release-only finding; China-only study context; MET testing thresholds and assay implementation need full review; no official approval, filing, price, reimbursement, procurement, or India-access milestone was announced; no direct comparison with other first-line EGFR-mutated NSCLC strategies should be inferred.",
    indiaImpact: "No CDSCO authorization, India launch date, India price, reimbursement decision, procurement pathway, or India-specific biomarker-testing implementation milestone was verified. India relevance is indirect until a local regulatory or access action is official.",
    cost: "No official price, cost-effectiveness result, India reimbursement, or procurement figure for this first-line combination was reported or verified.",
    nextMilestone: "Full SANOVO dataset with median PFS, hazard ratios, confidence intervals, safety tables, quality-of-life and OS data; conference or peer-reviewed presentation; China regulatory filing or approval; and any official India or global regulatory pathway announcement.",
    verification: "Verified from AstraZeneca's 1 September 2026 official release and HUTCHMED's 31 August/1 September 2026 official release, with ClinicalTrials.gov NCT05009836 used for trial identity. Promoted as a press-release-only watchlist signal, not a treatment approval or practice-changing comparative claim.",
    source: "https://www.astrazeneca.com/media-centre/press-releases/2026/tagrisso-orpathys-improved-pfs-in-1l-egfrm-lung.html",
    secondarySource: "https://www.globenewswire.com/news-release/2026/08/31/3353003/0/en/hutchmed-announces-sanovo-trial-demonstrated-significant-progression-free-survival-benefit-of-orpathys-plus-tagrisso-in-treatment-na%C3%AFve-patients-with-met-overexpressing-egfr-mutate.html"
  },
  {
    id: "prostate-cardio-referral",
    title: "Routine cardiovascular referral in prostate cancer",
    short: "Prostate cardio-oncology",
    category: "Supportive care / care delivery",
    status: "neutral",
    statusLabel: "Randomized neutral clinical-events result",
    geography: "Eight-country trial across 55 sites",
    date: "30 August 2026",
    cancer: "Prostate cancer",
    issue: "Routine internist or cardiologist referral with protocol-driven statin, blood-pressure, smoking, diet, and exercise management for patients newly diagnosed with prostate cancer or starting androgen-deprivation therapy.",
    organization: "International randomized trial investigators; JAMA Internal Medicine",
    population: "2,487 patients diagnosed with prostate cancer within 12 months or recently starting/planning first androgen-deprivation therapy; patients already taking a statin with systolic blood pressure at or below 130 mm Hg were excluded.",
    comparator: "Usual care plus routine cardiovascular-specialist referral versus usual care alone.",
    endpoint: "Hierarchical composite of cardiovascular death, myocardial infarction, stroke, heart failure, suboptimal cholesterol, and suboptimal systolic blood pressure, analyzed by win ratio.",
    effect: "At median follow-up of 5.8 years, the win ratio favored referral at 1.60 (95% CI 1.42-1.81), driven mainly by 12 mg/dL lower cholesterol (95% CI 9-15) from greater protocol-mandated statin use. Hard cardiovascular events did not differ: subdistribution HR 1.08 (95% CI 0.79-1.49).",
    whyMatters: "Cardiovascular risk is common in prostate cancer and can be amplified by androgen-deprivation therapy. This large randomized study supports more reliable risk-factor control through structured referral, but it also cautions against claiming fewer cardiovascular deaths or events without stronger evidence.",
    whoAffected: "Patients with prostate cancer starting or receiving androgen-deprivation therapy, oncologists, primary-care clinicians, internists, cardiologists, cardio-oncology services, and systems deciding whether specialist referral should be routine.",
    decisionImpact: "Health systems may use structured cardiovascular referral to improve statin uptake and risk-factor control, while deciding locally whether universal specialist referral adds enough value over standardized oncology or primary-care pathways given the neutral hard-event result.",
    evidenceStrength: "High for risk-factor control because this was a randomized trial with 2,487 participants, 55 sites, eight countries, and median 5.8-year follow-up. Clinical-event benefit remains unproven because cardiovascular death, myocardial infarction, stroke, and heart failure did not differ.",
    limitations: "The hierarchical composite was dominated by cholesterol control, protocol-mandated statin use exceeded usual guideline practice, event rates were insufficient to establish fewer hard cardiovascular outcomes, and country-specific generalizability and implementation cost were not reported in the abstract.",
    indiaImpact: "India participation, an India-specific referral pathway, reimbursement, cost-effectiveness, or national guideline adoption was not verified. The care-delivery concept is relevant where cardio-oncology capacity is limited, but a scalable primary-care-led alternative may be more feasible than universal specialist referral.",
    cost: "No official intervention cost, cost-effectiveness result, India reimbursement decision, or procurement figure was reported or verified.",
    nextMilestone: "Full-text review of country participation and subgroup results, clinical-event maturation, cost-effectiveness analysis, and guideline or implementation responses.",
    verification: "Verified from the JAMA Internal Medicine randomized-trial abstract indexed in PubMed on 30 August 2026 and ClinicalTrials.gov NCT03127631. Represented as a neutral care-delivery result, not proof that referral reduces cardiovascular events.",
    source: "https://doi.org/10.1001/jamainternmed.2026.4773",
    secondarySource: "https://clinicaltrials.gov/study/NCT03127631"
  },
  {
    id: "mpower-asia-cancer-model",
    title: "MPOWER tobacco control and preventable cancers in Asia",
    short: "MPOWER cancer prevention",
    category: "Prevention / public health policy",
    status: "systems",
    statusLabel: "Regional modeling study",
    geography: "East and South-East Asia",
    date: "30 August 2026",
    cancer: "Thirteen tobacco-related cancers",
    issue: "Projected cancer burden under continuation of current tobacco-control trends versus full implementation of the WHO MPOWER policy package from 2025 to 2050.",
    organization: "Independent investigators using WHO Global Health Observatory and IARC Global Cancer Observatory data; The Lancet Regional Health - Western Pacific",
    population: "Populations of East and South-East Asian countries through 2050, modeled for 13 tobacco-related cancers.",
    comparator: "Continuation of current MPOWER implementation trends versus full implementation of Monitor, Protect, Offer, Warn, Enforce, and Raise policies.",
    endpoint: "Modeled tobacco-attributable and potentially preventable cancer cases from 2025 to 2050.",
    effect: "The study projected 159 million tobacco-related cancer cases, including 44.2 million attributable to current smoking. Full MPOWER implementation was estimated to prevent 3.5 million cancers (95% CI 2.9-4.0 million); after adjustment for Human Development Index variation, the estimate was 2.2 million.",
    whyMatters: "The analysis translates tobacco-control policy implementation into future cancer burden at regional scale. It highlights that prevention policy can avert millions of cancers, while showing that the projected benefit changes materially after socioeconomic adjustment.",
    whoAffected: "National governments, tobacco-control programs, cancer-control planners, public-health agencies, payers, and populations in East and South-East Asia, especially men because modeled smoking-attributable burden was much higher among men.",
    decisionImpact: "Whether governments intensify MPOWER implementation and incorporate modeled cancer prevention into tobacco taxation, smoke-free laws, cessation support, warning, advertising-control, and surveillance decisions.",
    evidenceStrength: "Moderate for policy planning: the study uses authoritative WHO and IARC inputs and reports uncertainty intervals, but outcomes are modeled projections rather than observed reductions in cancer incidence.",
    limitations: "Fixed-effects ecological modeling cannot prove causal patient-level effects, future smoking prevalence and policy enforcement may differ from assumptions, the estimate fell from 3.5 million to 2.2 million after HDI adjustment, and country-level implementation effects may vary substantially.",
    indiaImpact: "The abstract describes East and South-East Asia rather than South Asia, so India should not be assumed to be included. The policy lesson is relevant to Indian tobacco and cancer-control planning, but no India-specific burden, intervention effect, funding, or procurement result was verified from this study.",
    cost: "No intervention budget, cost-effectiveness estimate, India program cost, or procurement figure was reported in the abstract.",
    nextMilestone: "Country-level estimates, full methods review, observed policy uptake, smoking-prevalence changes, cancer-incidence validation, and India-specific modeling from authoritative sources.",
    verification: "Verified from the peer-reviewed abstract indexed in PubMed on 30 August 2026 and the DOI record. Kept as a modeled prevention-policy signal rather than an observed clinical-effect claim.",
    source: "https://doi.org/10.1016/j.lanwpc.2026.101962",
    secondarySource: "https://pubmed.ncbi.nlm.nih.gov/42668493/"
  },
  {
    id: "bemotrizinol-sunscreen",
    title: "Bemotrizinol sunscreen order takes effect",
    short: "Bemotrizinol",
    category: "Prevention / regulatory policy",
    status: "regulatory",
    statusLabel: "FDA order effective",
    geography: "United States; ingredient already used in multiple other markets",
    date: "9 August 2026",
    cancer: "Skin cancer prevention",
    issue: "FDA's final administrative order permitting bemotrizinol as an active ingredient in nonprescription sunscreen products took effect under OTC Monograph M020.",
    organization: "U.S. Food and Drug Administration; DSM Nutritional Products LLC",
    population: "Adults and children 6 months and older using sunscreen in the United States; manufacturers formulating compliant OTC sunscreen products.",
    comparator: "Existing permitted US sunscreen active ingredients and formulations; this is a monograph authorization, not a comparative cancer-prevention trial.",
    endpoint: "Regulatory effective date and expansion of permitted broad-spectrum sunscreen ingredients; not a patient-level oncology endpoint.",
    effect: "FDA concluded bemotrizinol is generally recognized as safe and effective at concentrations up to 6% under the order's conditions. It provides UVA and UVB protection and is the first new active ingredient added to the US OTC sunscreen monograph since the late 1990s.",
    whyMatters: "Sunscreen is a cancer-prevention intervention. The effective order expands the ingredients manufacturers may use in US products and may improve formulation choice, but it does not by itself prove superior skin-cancer prevention or mean products are immediately available on shelves.",
    whoAffected: "US consumers, dermatology and prevention clinicians, sunscreen manufacturers, retailers, and public-health programs promoting sun protection are directly affected. Other countries are not covered by this FDA order.",
    decisionImpact: "Manufacturers may now formulate compliant US OTC sunscreens with bemotrizinol, while clinicians and consumers should continue to judge products by broad-spectrum protection, SPF, correct use, and combined sun-protection measures rather than assuming ingredient-level superiority.",
    evidenceStrength: "High for the regulatory status and permitted conditions because the source is FDA's final administrative order and supporting scientific review. Evidence here is regulatory and prevention-policy evidence, not randomized evidence comparing skin-cancer incidence between sunscreen ingredients.",
    limitations: "The final order was posted in June 2026 and became effective on 9 August 2026. FDA states that manufacturers determine retail timing. No product-specific launch, price, comparative efficacy advantage, adherence gain, or reduction in melanoma or keratinocyte-cancer incidence was established by this action.",
    indiaImpact: "No CDSCO rule change, India launch, product price, procurement decision, or new Indian sunscreen standard was verified. Bemotrizinol-containing products may already exist under other jurisdictions, but this FDA action applies only to the United States.",
    cost: "No official product price was announced. The order grants DSM or its licensees, assignees, or successors 18 months of statutory exclusivity for drugs incorporating the described change, beginning when lawful marketing under the order is possible.",
    nextMilestone: "First compliant US product launches, labeling and formulation details, real-world availability and price, and any later evidence on adherence, tolerability, or population-level prevention outcomes.",
    verification: "Verified against FDA Final Administrative Order OTC000039, the supporting FDA scientific review, FDA's June 2026 announcement, and FDA's sunscreen consumer guidance. Promoted on the 9 August 2026 effective date as a prevention and regulatory milestone, not as a cancer treatment or comparative efficacy claim.",
    source: "https://www.accessdata.fda.gov/drugsatfda_docs/omuf/order/supportDoc/OTC000039/Final_Administrative_Order.pdf",
    secondarySource: "https://www.fda.gov/news-events/press-announcements/fda-expands-sunscreen-options-first-time-20-years"
  },
  {
    id: "fda-trialblazer",
    title: "FDA Operation TrialBlazer trial-policy package",
    short: "TrialBlazer",
    category: "Trial methodology / regulatory policy",
    status: "regulatory",
    statusLabel: "FDA policy package",
    geography: "United States; global sponsor relevance",
    date: "15 September 2026",
    cancer: "All cancers",
    issue: "FDA announced a clinical-development modernization package spanning expedited first-in-human IND preparation, phase-specific CMC expectations, dose-selection guidance, one-trial-plus-confirmatory-evidence approaches, and master protocol guidance.",
    organization: "U.S. Food and Drug Administration; U.S. Department of Health and Human Services Operation TrialBlazer",
    population: "Drug and biologic sponsors, academic medical centers, contract research organizations, oncology trial networks, regulators, and patients affected by trial-startup and pivotal-evidence timelines.",
    comparator: "Current sequential IND and pivotal-trial development practices versus proposed or updated FDA processes intended to reduce avoidable delay while retaining safety and effectiveness standards.",
    endpoint: "Regulatory policy and trial-methodology change; not a patient-level clinical endpoint.",
    effect: "FDA stated that phase-appropriate early-development expectations could save 6 to 12 months. On 15 September, FDA finalized the Expedited IND Pilot design, opened applications through 30 October 2026, and said it expects to select 8-10 sponsor-qualified-research-institution pairs for rolling pre-IND review and coordinated startup.",
    whyMatters: "Oncology development relies heavily on first-in-human dose selection, complex biologics, targeted therapies, rare molecular subsets, basket/platform trials, and single pivotal datasets with confirmatory evidence. A regulator-level change to these evidence pathways can alter trial startup, study design, investment decisions, and how quickly investigational cancer therapies reach patients.",
    whoAffected: "US oncology sponsors and trial sites are most directly affected; global oncology developers, academic cancer centers, patients seeking early-phase trials, and regulators or payers interpreting FDA precedent may also be affected.",
    decisionImpact: "Whether oncology sponsors redesign early IND packages, use quantitative systems pharmacology or other model-informed starting-dose methods, pursue master-protocol structures, or plan evidence packages around one rigorous trial plus confirmatory evidence rather than defaulting to duplicate pivotal trials.",
    evidenceStrength: "High for the existence, final pilot design, application window, and planned cohort size because these are documented by FDA. Evidence is policy-level, not clinical-outcome evidence, and several broader TrialBlazer components remain guidance or implementation proposals.",
    limitations: "This is not an oncology approval, guideline, reimbursement decision, or completed trial. The initial pilot is limited to 8-10 sponsor-institution pairs, selection has not occurred, and no evidence yet shows shorter trial startup, fewer clinical holds, faster approvals, or maintained outcome quality.",
    indiaImpact: "No direct CDSCO policy change was verified. India relevance is indirect: global oncology programs may adapt study design or evidence generation around FDA expectations, while Indian trial sites and regulators may later face protocol designs influenced by these US policy shifts.",
    cost: "Not applicable for therapy pricing. Potential development-cost and time savings are policy claims; no official product price, procurement figure, or India reimbursement effect applies.",
    nextMilestone: "Application close on 30 October 2026, selection of the 8-10 initial pairs, first accepted rolling pre-IND components, measured effects on clinical holds and startup time, and oncology-specific examples.",
    verification: "Captured from FDA's 6 August 2026 modernization package and updated from FDA's 15 September final Expedited IND Pilot announcement. Treated as a watchlist signal because participant selection and measured implementation effects remain pending.",
    source: "https://www.fda.gov/industry/fda-actions-accelerate-and-modernize-early-and-late-stage-clinical-development",
    secondarySource: "https://www.fda.gov/news-events/press-announcements/fda-launches-expedited-ind-pilot-begins-accepting-applications"
  },
  {
    id: "rp1-adcom",
    title: "RP1 + nivolumab accelerated approval after advisory split",
    short: "RP1 / Tudriqev",
    category: "Regulatory evidence",
    status: "regulatory",
    statusLabel: "FDA accelerated approval",
    geography: "United States",
    date: "6 August 2026",
    cancer: "Advanced cutaneous melanoma",
    issue: "Vusolimogene oderparepvec-wtpg (Tudriqev/RP1) plus nivolumab after progression on anti-PD-1 therapy",
    organization: "Replimune + Bristol Myers Squibb; FDA Cellular, Tissue, and Gene Therapies Advisory Committee",
    population: "140 adults in the open-label, multiregional, single-arm IGNYTE study after anti-PD-1 progression; FDA's efficacy-evaluable population included 91 patients with at least one noninjected lesion.",
    comparator: "No concurrent randomized control. The approval relies on single-arm response and durability evidence, with post-approval trial requirements to verify clinical benefit.",
    endpoint: "Accelerated approval based on objective response rate and duration of response",
    effect: "FDA reported ORR 24.2% (95% CI 15.8%-34.3%) and median DoR 14.1 months (95% CI 10.7-not reached). The July advisory review remains important context because FDA and external reviewers had previously debated how to interpret the single-arm evidence package.",
    whyMatters: "A previously pending and contested oncolytic-immunotherapy application is now an FDA accelerated approval in a difficult post-PD-1 melanoma setting. The update changes the dashboard decision state from watchful regulatory uncertainty to approved-but-conditional use with confirmatory-trial obligations.",
    whoAffected: "Adults with unresectable advanced cutaneous melanoma after anti-PD-1 therapy, melanoma specialists, trial investigators, regulators, and payers evaluating accelerated-approval evidence.",
    decisionImpact: "Whether clinicians and payers adopt Tudriqev plus nivolumab now that it is available under accelerated approval, while tracking confirmatory-trial requirements and the unresolved clinical-benefit verification question.",
    evidenceStrength: "High for the regulatory outcome, indication, efficacy population, ORR, DOR, safety warnings, and confirmatory-trial condition because these are documented in FDA's approval notice and oncology approval index.",
    limitations: "The evidence remains single-arm and accelerated-approval based. Continued approval may be contingent on confirmatory trial verification of clinical benefit, and prior FDA advisory materials raised interpretability concerns around injected-lesion assessment and isolating RP1's contribution from nivolumab.",
    indiaImpact: "No CDSCO authorization, India launch date, price, reimbursement decision, or procurement pathway for Tudriqev/RP1 was verified. Any relevance to Indian practice remains dependent on later local filing or access mechanisms.",
    cost: "No official US commercial price or India price was verified in this pass.",
    nextMilestone: "Full prescribing information posting on Drugs@FDA, confirmatory-trial details and progress, committee minutes/transcript, launch/pricing disclosures, and any India filing or access announcement.",
    verification: "Updated from FDA's accelerated approval notice and FDA oncology approval notifications index, with the earlier FDA advisory committee page retained as regulatory-history context. The treatment dossier now carries the approved-use fields; this watchlist record preserves the evidence controversy and conditional-approval follow-up needs.",
    source: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-vusolimogene-oderparepvec-wtpg-combination-nivolumab-melanoma",
    secondarySource: "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications"
  },
  {
    id: "optima",
    title: "OPTIMA genomic de-escalation",
    short: "OPTIMA",
    category: "De-escalation",
    status: "conference",
    statusLabel: "Conference-only",
    geography: "UK-led international",
    date: "29 May 2026",
    cancer: "Breast cancer",
    issue: "Prosigna 50-gene assay to omit adjuvant chemotherapy",
    organization: "UCL + University of Glasgow + Veracyte",
    population: "4,429 adults aged 40+ with hormone-sensitive early breast cancer after surgery",
    comparator: "Usual chemotherapy plus endocrine therapy vs assay-guided chemotherapy omission in low-score patients",
    endpoint: "Five-year cancer-free survival / noninferiority",
    effect: "Conference coverage reported 94.9% vs 93.7% five-year cancer-free survival in the low-score comparison, supporting noninferiority of omitting chemotherapy.",
    whyMatters: "This is a high-volume overtreatment question. If the signal holds in the abstract and later publication, many patients could avoid chemotherapy toxicity without materially worsening recurrence outcomes.",
    whoAffected: "Patients with hormone-positive early breast cancer, clinicians deciding adjuvant therapy intensity, and payers deciding genomic-test coverage.",
    decisionImpact: "Whether multigene testing should be used more broadly to justify skipping chemotherapy in lower-risk disease.",
    evidenceStrength: "Randomized international study with thousands of participants and direct patient-level treatment de-escalation relevance.",
    limitations: "The direct ASCO abstract or peer-reviewed paper was not retrieved in this pass. Current representation relies on conference coverage and investigator statements, so exact subgroup definitions and statistical reporting still need primary-source capture.",
    indiaImpact: "Potentially important where chemotherapy burden, fertility concerns and capacity constraints are high, but assay access and reimbursement in India were not verified.",
    cost: "No official India reimbursement or pricing was verified.",
    nextMilestone: "Capture the ASCO/JCO abstract or publication and watch for guideline uptake.",
    verification: "Cross-checked across multiple conference-coverage reports. Primary abstract capture remains pending.",
    source: "https://www.theguardian.com/society/2026/may/29/groundbreaking-genomic-test-spare-breast-cancer-patients-chemotherapy-hormone-therapy",
    secondarySource: "https://www.theguardian.com/society/2026/may/29/breast-cancer-chemotherapy-genomic-test-case-study"
  },
  {
    id: "galleri",
    title: "Galleri-NHS negative screening signal",
    short: "Galleri-NHS",
    category: "Screening",
    status: "negative",
    statusLabel: "Negative trial",
    geography: "United Kingdom",
    date: "30 May 2026",
    cancer: "Multiple cancers",
    issue: "Galleri MCED blood test added to routine screening",
    organization: "NHS England + GRAIL",
    population: "142,942 asymptomatic adults aged 50-77 in a randomized NHS study",
    comparator: "Standard screening alone vs standard screening plus annual MCED testing",
    endpoint: "Reduction in late-stage cancer diagnoses",
    effect: "Conference coverage reported no statistically significant reduction in the combined stage III-IV primary endpoint, although stage IV diagnoses alone reportedly fell by 14%.",
    whyMatters: "This is a major cautionary signal for population blood-based multi-cancer screening. A negative primary endpoint should slow premature adoption and reshape how MCED claims are presented to payers and the public.",
    whoAffected: "Asymptomatic adults considering direct-pay testing, screening policymakers, and systems evaluating MCED procurement.",
    decisionImpact: "Whether MCED testing has enough evidence for population-scale implementation before mortality data mature.",
    evidenceStrength: "Very large randomized implementation study with direct policy relevance.",
    limitations: "The direct abstract or full paper was not retrieved in this pass. Mortality outcomes remain pending, and the stage-shift secondary findings need full primary-source review before broader conclusions are drawn.",
    indiaImpact: "Strong argument against routine rollout or aggressive marketing of MCED testing without proven patient-outcome benefit in local policy contexts.",
    cost: "No official India pricing or government procurement pathway was verified.",
    nextMilestone: "Capture the full abstract/publication and eventual mortality results.",
    verification: "Negative primary-endpoint framing was cross-checked across conference coverage and stakeholder statements. Primary abstract capture remains pending.",
    source: "https://www.theguardian.com/science/2026/may/30/trial-of-multi-cancer-blood-test-among-142000-nhs-patients-fails-to-meet-main-aim",
    secondarySource: "https://www.businessinsider.com/multi-cancer-blood-test-does-grail-galleri-work-to-spot-cancer-early-2026-5"
  },
  {
    id: "bladder-preservation",
    title: "Durvalumab bladder-preservation signal",
    short: "Durvalumab CRT",
    category: "Surgery / RT",
    status: "conference",
    statusLabel: "Conference-only",
    geography: "United Kingdom",
    date: "2 June 2026",
    cancer: "Bladder cancer",
    issue: "Durvalumab added to chemoradiotherapy to avoid cystectomy",
    organization: "Institute of Cancer Research + Royal Marsden + University of Birmingham + AstraZeneca",
    population: "54 patients with aggressive or muscle-invasive bladder cancer in a phase II study",
    comparator: "Single-arm study against historical chemoradiotherapy experience",
    endpoint: "One-year recurrence-free outcome with bladder preservation",
    effect: "Conference coverage reported 46 of 54 patients (85%) without recurrence at one year, versus about 60% in prior chemoradiotherapy studies without immunotherapy.",
    whyMatters: "For some patients, avoiding radical cystectomy changes daily function and quality of life as much as it changes tumor control. This is a distinctly patient-centered oncology development, not just another drug signal.",
    whoAffected: "Patients eligible for bladder-preserving treatment, multidisciplinary uro-oncology teams, and radiotherapy programs.",
    decisionImpact: "Whether this approach should stay investigational, expand in trial networks, or influence future bladder-preservation standards.",
    evidenceStrength: "Meaningful early efficacy in a high-burden setting with direct quality-of-life implications.",
    limitations: "Conference-only phase II data with no randomized control captured in this pass. The result is hypothesis-strengthening, not yet label- or guideline-defining.",
    indiaImpact: "Conceptually important where radical surgery has major quality-of-life consequences, but durvalumab cost and exact study-use access remain major barriers.",
    cost: "Durvalumab is marketed in India, but no official price update or bladder-preservation indication was verified in this pass.",
    nextMilestone: "Retrieve the direct abstract and monitor for comparative confirmation or guideline discussion.",
    verification: "Cross-checked across conference coverage and investigator statements. Direct abstract capture remains pending.",
    source: "https://www.theguardian.com/science/2026/jun/02/drug-bladder-cancer-life-changing-surgery-durvalumab",
    secondarySource: "https://www.thetimes.com/uk/healthcare/article/treatment-bladder-cancer-tracey-emin-52ttgmzr5"
  },
  {
    id: "who-cancer-report",
    title: "WHO/IARC cancer inequity report",
    short: "WHO 2026 report",
    category: "Public health / equity",
    status: "systems",
    statusLabel: "Systems report",
    geography: "Global",
    date: "8 July 2026",
    cancer: "All cancers",
    issue: "WHO and IARC quantify widening cancer-control, survival and access gaps",
    organization: "World Health Organization + International Agency for Research on Cancer",
    population: "People affected by cancer, caregivers, and national cancer systems across 194 WHO Member States",
    comparator: "Current 2024-2026 global burden and access baseline vs 2050 projections; low-income vs high-income survival and medicine-access gaps",
    endpoint: "Projected incidence, mortality, access, survival and lived-experience burden",
    effect: "WHO reported 20.6 million new cases and close to 10 million deaths annually, with annual cases projected to rise to nearly 35 million by 2050. Fewer than one in three countries currently include cancer care in universal health coverage packages, availability of the top 20 priority cancer medicines ranges from 9%-54% in low- and lower-middle-income countries versus 68%-94% in high-income countries, and at least 45% of affected people report financial hardship. WHO's linked breast-cancer survival study estimated median 5-year survival at 41.9% in low-income countries versus 87.3% in high-income countries.",
    whyMatters: "This is a direct cancer-care delivery and equity signal rather than a drug-development headline. It quantifies how much avoidable cancer harm now depends on diagnosis pathways, UHC design, workforce, medicine access and social protection rather than on scientific novelty alone.",
    whoAffected: "Health ministries, UHC planners, hospital networks, prevention programs, civil-society advocates, and patients and families facing access or affordability barriers.",
    decisionImpact: "Whether countries accelerate cancer inclusion in UHC packages, strengthen prevention and early diagnosis, expand essential-medicine access, and incorporate patient and caregiver burden into cancer policy.",
    evidenceStrength: "High for a systems signal: the trigger is an official WHO/IARC global report, supported by a same-day peer-reviewed Nature Medicine analysis of breast-cancer survival estimates.",
    limitations: "This is a systems report built from modeled global estimates and uneven underlying data, not an intervention trial. The linked breast-cancer survival paper had observed registry survival data for 67 of 194 WHO Member States, with especially sparse coverage in low-income and fragile settings.",
    indiaImpact: "Highly relevant for India because the report centers UHC inclusion, prevention, diagnostics, medicine availability and patient financial strain, but this pass did not verify a new India-specific national survival estimate, reimbursement action, or procurement announcement.",
    cost: "Not applicable. The signal is about affordability and system access rather than a single therapy price.",
    nextMilestone: "Track country-level policy responses, any WHO implementation follow-up, and newly released country-specific survival or access updates that can sharpen India-relevant comparisons.",
    verification: "Cross-checked across the 8 July 2026 WHO news release, the WHO Global Status Report on Cancer 2026, and the same-day Nature Medicine paper on global breast-cancer survival.",
    source: "https://www.who.int/news/item/08-07-2026-who-calls-for-urgent-action-as-new-cancer-cases-are-projected-to-nearly-double-by-2050",
    secondarySource: "https://www.nature.com/articles/s41591-026-04531-2"
  },
  {
    id: "workforce",
    title: "Global oncology workforce warning",
    short: "Workforce 2050",
    category: "Workforce",
    status: "systems",
    statusLabel: "Systems report",
    geography: "Global",
    date: "31 May 2026",
    cancer: "All cancers",
    issue: "Projected cancer-care workforce shortfall",
    organization: "Global oncology authorship led from MSK and Queen's University Belfast; Lancet-linked report",
    population: "Global oncology systems, especially countries with diagnostic and nursing shortages",
    comparator: "2025 baseline capacity vs 2050 projected incidence and staffing needs",
    endpoint: "Projected staffing gap, incidence and avoidable-death scenarios",
    effect: "Conference coverage reported a 21% rise in cancer incidence by 2050, more than 35 million annual cases, and a projected 100 million cancer-care worker shortfall, including about 65 million nurses and 16 million diagnostic staff.",
    whyMatters: "Therapeutic progress is not enough if systems cannot diagnose, staff infusion units, read scans, deliver radiotherapy or provide palliative care. This directly affects real-world access and survival.",
    whoAffected: "Health ministries, hospital networks, pathology/radiology training pipelines, and patients in both LMIC and high-income settings.",
    decisionImpact: "Whether countries invest earlier in workforce planning, task-shifting, digital tools and diagnostic capacity instead of treating access failures as downstream surprises.",
    evidenceStrength: "Large-scale system modeling and commission-style analysis with direct care-delivery relevance.",
    limitations: "This is a projection, not an intervention trial. The full Lancet text was not retrieved in this pass, so country-level assumptions and model sensitivity need direct review before more granular claims are made.",
    indiaImpact: "Highly relevant for oncology manpower, pathology, radiology and geographic access planning.",
    cost: "Not applicable.",
    nextMilestone: "Retrieve the full report and map implications to India-specific workforce and infrastructure gaps.",
    verification: "Conference coverage linked the finding to a Lancet report, but full primary-text capture remains pending.",
    source: "https://www.theguardian.com/society/2026/may/31/world-cancer-workforce-crisis-100m-staff-shortfall-report",
    secondarySource: "https://www.theguardian.com/science/2026/jun/06/new-weapons-war-on-cancer-asco-conference-takeaways"
  }
];

const viewTitles = {
  insights: "Morning briefing insights",
  overview: "Global oncology portfolio",
  treatments: "Treatment explorer",
  india: "India access & cost",
  systems: "Technology & equity",
  followup: "ASCO 2025 follow-up",
  watchlist: "Watchlist & systems",
  archive: "Newsletters & headlines"
};

function readEmbeddedJson(id, fallback = null) {
  const element = document.getElementById(id);
  if (!element) return fallback;
  const source = element.textContent?.trim();
  if (!source) return fallback;
  try {
    return JSON.parse(source);
  } catch (error) {
    console.warn(`Embedded JSON parse failed for ${id}`, error);
    return fallback;
  }
}

const initialEditionArchive = readEmbeddedJson("initial-edition-archive");
const initialCurrentEdition = readEmbeddedJson("initial-current-edition");
const embeddedReleaseFingerprint = [
  initialEditionArchive?.currentEditionId || initialCurrentEdition?.id || "",
  initialEditionArchive?.generatedAt || ""
].join("|");
const RELEASE_CHECK_INTERVAL_MS = 60_000;

const state = {
  view: "insights",
  selected: [],
  portfolioSearch: "",
  portfolioFilter: "all",
  watchlistPendingOnly: false,
  portfolioActiveId: "",
  backendPortfolioEntries: null,
  backendStatus: "loading",
  backendSourceSummary: null,
  editionArchive: initialEditionArchive,
  editionDetails: initialCurrentEdition?.id ? { [initialCurrentEdition.id]: initialCurrentEdition } : {},
  activeEditionId: initialEditionArchive?.currentEditionId || initialCurrentEdition?.id || ""
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function formatImpactClass(group) {
  return group === "high" ? "high" : group === "moderate" ? "moderate" : "early";
}

const portfolioAliasRules = [
  { match: /nivolumab/i, aliases: ["Opdivo"] },
  { match: /pembrolizumab/i, aliases: ["Keytruda"] },
  { match: /sevabertinib|hyrnuo|soho-01/i, aliases: ["Hyrnuo", "BAY 2927088", "SOHO-01", "HER2", "ERBB2"] },
  { match: /anbenitamab|hb1801|kn026|erbb2/i, aliases: ["KN026", "HB1801", "ERBB2"] },
  { match: /etentamig|cervino|bcma/i, aliases: ["CERVINO", "BCMA", "ABBV-383"] },
  { match: /gedatolisib|revtorpyk/i, aliases: ["Revtorpyk"] },
  { match: /daraxonrasib|rasonque|rasolute/i, aliases: ["Rasonque", "RMC-6236", "RASolute 302"] },
  { match: /zanidatamab|ziihera|tislelizumab|tevimbra|herizon-gea/i, aliases: ["Ziihera", "Tevimbra", "HERIZON-GEA-01"] },
  { match: /iberdomide|zenbexus/i, aliases: ["Zenbexus", "IberDd"] },
  { match: /pluvicto|lutetium|vipivotide|psma/i, aliases: ["Pluvicto", "Lu-PSMA-617", "Locametz"] },
  { match: /zidesamtinib|jideytro/i, aliases: ["Jideytro"] },
  { match: /enfortumab vedotin|padcev/i, aliases: ["Padcev"] },
  { match: /durvalumab/i, aliases: ["Imfinzi"] },
  { match: /atezolizumab/i, aliases: ["Tecentriq"] },
  { match: /cemiplimab/i, aliases: ["Libtayo"] },
  { match: /isatuximab|sarclisa/i, aliases: ["Sarclisa", "Sarclisa Escena"] },
  { match: /cretostimogene|cg0070/i, aliases: ["CG0070"] },
  { match: /selpercatinib|retevmo|retsevmo/i, aliases: ["Retevmo", "Retsevmo"] },
  { match: /tregzi|orca-t/i, aliases: ["Tregzi", "Orca-T"] },
  { match: /palbociclib/i, aliases: ["Ibrance"] },
  { match: /tucatinib/i, aliases: ["Tukysa"] },
  { match: /trastuzumab deruxtecan|t-dxd/i, aliases: ["Enhertu"] },
  { match: /pertuzumab/i, aliases: ["Perjeta"] },
  { match: /pemigatinib/i, aliases: ["Pemazyre"] },
  { match: /amivantamab/i, aliases: ["Rybrevant"] },
  { match: /niraparib/i, aliases: ["Zejula", "Akeega"] },
  { match: /abiraterone/i, aliases: ["Zytiga", "Akeega"] },
  { match: /sacituzumab govitecan|trodelvy/i, aliases: ["Trodelvy"] },
  { match: /rusfertide/i, aliases: ["PTG-300"] },
  { match: /camizestrant|etcamah/i, aliases: ["AZD9833", "Etcamah"] },
  { match: /ivonescimab|harmoni/i, aliases: ["SMT112", "AK112", "PD-1", "VEGF", "HARMONi"] },
  { match: /can-2409/i, aliases: ["aglatimagene besadenovec"] },
  { match: /intismeran autogene cevumeran|personalized mrna neoantigen therapy/i, aliases: ["mRNA-4157", "V940"] },
  { match: /talentop|liver resection after atezolizumab\/bevacizumab/i, aliases: ["NCT04649489", "Tecentriq", "Avastin"] }
];

function buildSearchText(...parts) {
  const text = parts.filter(Boolean).join(" ");
  const aliases = portfolioAliasRules
    .filter(rule => rule.match.test(text))
    .flatMap(rule => rule.aliases);
  return `${text} ${aliases.join(" ")}`.trim().toLowerCase();
}

const fallbackPortfolioEntries = buildPortfolioEntries();

function buildPortfolioEntries() {
  let order = 0;
  const entries = [];

  treatments.forEach(item => {
    entries.push({
      id: `treatment:${item.id}`,
      baseId: item.id,
      lane: "treatment",
      laneLabel: "Treatment explorer",
      order: order++,
      title: item.name,
      subtitle: `${item.short} · ${item.cancer} · ${item.setting}`,
      organization: item.company,
      snapshot: `${item.phase} · ${item.impact}`,
      summary: item.benefit,
      headline: `${item.headline} · ${item.headlineNote}`,
      statusLabel: item.indiaLabel,
      badges: [item.phase, item.impact, item.indiaLabel],
      searchText: buildSearchText(item.name, item.short, item.cancer, item.setting, item.company, item.phase, item.impact, item.headline, item.headlineNote, item.benefit, item.safety),
      route: { view: "treatments", kind: "detail", id: item.id, label: "Open treatment dossier" },
      sourceLinks: [
        { label: item.sourceLabel || "Primary study", url: item.source },
        ...(item.supportingSources || [])
      ],
      sections: [
        ["Cancer and setting", `${item.cancer} · ${item.setting}`],
        ["Manufacturer / organization", item.company],
        ...(item.detailSections || []),
        ["Measured effect", `${item.headline}. ${item.headlineNote}`, "wide"],
        ["Clinical meaning", item.benefit, "wide"],
        ["Safety and burden", item.safety, "wide"],
        ["Cost and India access", `${item.cost}. ${item.indiaPrice} ${item.indiaCaveat}`, "wide"],
        ["Launch / market status", `${item.launch}. ${item.indiaLabel}`],
        ["Current limitation", item.limitations, "wide"]
      ]
    });
  });

  asco2025Followup.forEach(item => {
    entries.push({
      id: `followup:${item.id}`,
      baseId: item.id,
      lane: "followup",
      laneLabel: "ASCO 2025 follow-up",
      order: order++,
      title: item.program,
      subtitle: `${item.trial} · ${item.cancer}`,
      organization: item.company,
      snapshot: item.currentMilestone,
      summary: item.assessment,
      headline: item.effect,
      statusLabel: item.statusLabel,
      badges: [item.statusLabel, item.cancer],
      searchText: buildSearchText(item.program, item.trial, item.cancer, item.company, item.statusLabel, item.ascoSignal, item.currentMilestone, item.effect, item.assessment, item.safety),
      route: { view: "followup", kind: "followup", id: item.id, label: "Open follow-up dossier" },
      sourceLinks: [
        { label: "ASCO-era evidence", url: item.conferenceSource },
        { label: "Current-status source", url: item.currentSource },
        item.secondarySource ? { label: "Additional verification", url: item.secondarySource } : null
      ].filter(Boolean),
      sections: [
        ["Trial design", item.design],
        ["Population / sample", item.population],
        ["Comparator", item.comparator],
        ["Measured effect", item.effect, "wide"],
        ["Current milestone", item.currentMilestone],
        ["What changed after ASCO", item.evidenceDelta, "wide"],
        ["Regional status", `US: ${item.us} Europe: ${item.eu} India: ${item.india}`, "full"],
        ["Safety and burden", item.safety, "wide"],
        ["Next verifiable decision point", item.nextDecision],
        ["Evidence confidence", item.confidence]
      ]
    });
  });

  watchlistSignals.forEach(item => {
    entries.push({
      id: `watchlist:${item.id}`,
      baseId: item.id,
      lane: "watchlist",
      laneLabel: "Watchlist & systems",
      order: order++,
      title: item.title,
      subtitle: `${item.category} · ${item.cancer} · ${item.geography}`,
      organization: item.organization,
      snapshot: `${item.statusLabel} · ${item.date}`,
      summary: item.whyMatters,
      headline: item.effect,
      statusLabel: item.statusLabel,
      badges: [item.statusLabel, item.category, item.geography],
      searchText: buildSearchText(item.title, item.short, item.category, item.cancer, item.geography, item.organization, item.issue, item.effect, item.decisionImpact, item.whyMatters),
      route: { view: "watchlist", kind: "watchlist", id: item.id, label: "Open watchlist dossier" },
      sourceLinks: [
        { label: "Source", url: item.source },
        item.secondarySource ? { label: "Secondary check", url: item.secondarySource } : null
      ].filter(Boolean),
      sections: [
        ["Issue", item.issue],
        ["Population / sample", item.population],
        ["Comparator", item.comparator],
        ["Observed effect", item.effect, "wide"],
        ["Why it matters to care", item.whyMatters, "wide"],
        ["Who and where it affects", item.whoAffected, "wide"],
        ["What decision could change", item.decisionImpact, "wide"],
        ["Evidence strength", item.evidenceStrength],
        ["India relevance", item.indiaImpact, "wide"],
        ["Cost / procurement", item.cost],
        ["Current limitation", item.limitations, "wide"],
        ["Next verification milestone", item.nextMilestone],
        ["Verification note", item.verification, "full"]
      ]
    });
  });

  return entries;
}

function portfolioDataset() {
  return state.backendPortfolioEntries || fallbackPortfolioEntries;
}

function syncPortfolioSearchInputs() {
  const globalSearch = $("#global-search");
  if (globalSearch && globalSearch.value !== state.portfolioSearch) globalSearch.value = state.portfolioSearch;
  const localSearch = $("#portfolio-search");
  if (localSearch && localSearch.value !== state.portfolioSearch) localSearch.value = state.portfolioSearch;
}

function portfolioSearchScore(entry, query) {
  if (!query) return 0;
  let score = 0;
  const title = entry.title.toLowerCase();
  const subtitle = entry.subtitle.toLowerCase();
  const organization = entry.organization.toLowerCase();
  if (title === query) score += 140;
  if (title.startsWith(query)) score += 90;
  if (title.includes(query)) score += 70;
  if (subtitle.includes(query)) score += 40;
  if (organization.includes(query)) score += 35;
  query.split(/\s+/).filter(Boolean).forEach(term => {
    if (title.includes(term)) score += 18;
    if (subtitle.includes(term)) score += 12;
    if (organization.includes(term)) score += 10;
    if (entry.searchText.includes(term)) score += 4;
  });
  if (entry.searchText.includes(query)) score += 14;
  return score;
}

function filteredPortfolioEntries() {
  const entries = portfolioDataset();
  const query = state.portfolioSearch.toLowerCase().trim();
  const data = entries.filter(entry =>
    (state.portfolioFilter === "all" || entry.lane === state.portfolioFilter) &&
    (!query || entry.searchText.includes(query))
  );
  return data.sort((a, b) => {
    const scoreDiff = portfolioSearchScore(b, query) - portfolioSearchScore(a, query);
    return scoreDiff || a.order - b.order;
  });
}

function renderPortfolioResult(entry, active) {
  return `<button class="portfolio-result ${active ? "active" : ""}" data-portfolio-select="${entry.id}">
    <div class="portfolio-result-top">
      <span class="portfolio-lane ${entry.lane}">${entry.laneLabel}</span>
      <span class="portfolio-result-status">${entry.statusLabel}</span>
    </div>
    <h4>${entry.title}</h4>
    <p class="company">${entry.organization}</p>
    <p class="portfolio-result-copy">${entry.summary}</p>
    <div class="portfolio-chip-row">${entry.badges.map(badge => `<span class="portfolio-chip">${badge}</span>`).join("")}</div>
    <strong>${entry.snapshot}</strong>
  </button>`;
}

function renderPortfolioDetail(entry) {
  return `
    <div class="portfolio-detail-hero">
      <div>
        <p class="eyebrow">${entry.laneLabel}</p>
        <h3>${entry.title}</h3>
        <p>${entry.subtitle}</p>
      </div>
      <div class="portfolio-detail-actions">
        <button class="button primary" data-portfolio-open="${entry.id}">${entry.route.label}</button>
      </div>
    </div>
    <div class="portfolio-detail-body">
      <div class="detail-kpis">
        <div class="detail-kpi"><span>Verified signal</span><strong>${entry.headline}</strong></div>
        <div class="detail-kpi"><span>Organization</span><strong>${entry.organization}</strong></div>
        <div class="detail-kpi"><span>Current status</span><strong>${entry.statusLabel}</strong></div>
      </div>
      <p class="portfolio-lead">${entry.summary}</p>
      <div class="dossier-grid">
        ${entry.sections.map(([label, value, extra = ""]) => dossierField(label, value, extra)).join("")}
      </div>
      <div class="evidence-ledger">
        <h3>Source ledger</h3>
        ${entry.sourceLinks.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}: ${link.url} ↗</a>`).join("")}
      </div>
    </div>`;
}

function renderPortfolio() {
  syncPortfolioSearchInputs();
  $("#portfolio-type-filter").value = state.portfolioFilter;
  const entries = portfolioDataset();
  const data = filteredPortfolioEntries();
  const counts = entries.reduce((acc, entry) => {
    acc[entry.lane] = (acc[entry.lane] || 0) + 1;
    return acc;
  }, {});
  const sourceCount = state.backendSourceSummary?.sourcesChecked ?? (counts.watchlist || 0);
  const sourceCardLabel = state.backendStatus === "ready"
    ? "Verified source checks"
    : state.backendStatus === "snapshot"
      ? "Verified source records"
      : "Watchlist signals";
  const sourceCardNote = state.backendStatus === "ready"
    ? "Authoritative source coverage available in this session"
    : state.backendStatus === "snapshot"
      ? "Verified source coverage attached to this briefing"
      : "Nonconforming or system-level records";
  const sourceCardIcon = state.backendStatus === "ready"
    ? "API"
    : state.backendStatus === "snapshot"
      ? "WEB"
      : "WL";
  $("#portfolio-metrics").innerHTML = [
    [entries.length, "Verified records", "Searchable across the existing dashboard evidence base", "", "PT", { action: "portfolio-filter", lane: "all", title: "Open all verified portfolio records" }],
    [counts.treatment || 0, "Treatment dossiers", "Direct therapeutic evidence cards", "blue", "TX", { action: "portfolio-filter", lane: "treatment", title: "Open the treatment portfolio records" }],
    [counts.followup || 0, "Follow-up programs", "Conference-to-regulatory tracking", "gold", "FU", { action: "portfolio-filter", lane: "followup", title: "Open the follow-up portfolio records" }],
    [sourceCount, sourceCardLabel, sourceCardNote, "coral", sourceCardIcon, { action: state.backendStatus === "ready" || state.backendStatus === "snapshot" ? "view-anchor" : "portfolio-filter", view: "overview", lane: "watchlist", scroll: "#portfolio-results", title: "Open the source-coverage records for the portfolio" }]
  ].map(([value, label, note, tone, icon, options]) => metricCard(value, label, note, tone, icon, options)).join("");
  $("#portfolio-count").textContent = entries.length;
  $("#portfolio-result-count").textContent = data.length;
  if (!data.length) {
    state.portfolioActiveId = "";
    $("#portfolio-results").innerHTML = `<div class="empty-state"><strong>No portfolio records match that search.</strong><br>Try a company, molecule, cancer type, or reset the lane filter.</div>`;
    $("#portfolio-detail").innerHTML = `<div class="empty-state"><strong>No detail to show.</strong><br>Clear the search or broaden the portfolio lane to restore a verified record.</div>`;
    return;
  }

  if (!data.find(entry => entry.id === state.portfolioActiveId)) state.portfolioActiveId = data[0].id;
  const activeEntry = data.find(entry => entry.id === state.portfolioActiveId) || data[0];
  $("#portfolio-results").innerHTML = data.map(entry => renderPortfolioResult(entry, entry.id === activeEntry.id)).join("");
  $("#portfolio-detail").innerHTML = renderPortfolioDetail(activeEntry);
}

function openPortfolioRoute(id) {
  const entry = portfolioDataset().find(item => item.id === id);
  if (!entry) return;
  showView(entry.route.view);
  window.setTimeout(() => {
    if (entry.route.kind === "detail") openDetail(entry.route.id);
    if (entry.route.kind === "followup") openFollowupDetail(entry.route.id);
    if (entry.route.kind === "watchlist") openWatchlistDetail(entry.route.id);
  }, 120);
}

async function hydratePortfolioBackend() {
  const sources = [
    { url: "/api/portfolio", status: "ready" },
    { url: "/data/portfolio.json", status: "snapshot" }
  ];
  try {
    for (const source of sources) {
      try {
        const response = await fetch(source.url);
        if (!response.ok) continue;
        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("json")) continue;
        const payload = await response.json();
        if (Array.isArray(payload.entries) && payload.entries.length) {
          state.backendPortfolioEntries = payload.entries;
          state.backendSourceSummary = payload.sourceSummary || null;
          state.backendStatus = source.status;
          renderPortfolio();
          return;
        }
      } catch (sourceError) {
        console.warn(`Portfolio source failed: ${source.url}`, sourceError);
      }
    }
    throw new Error("Portfolio sources returned no entries");
  } catch (error) {
    console.warn("Portfolio backend unavailable, using local fallback.", error);
    state.backendStatus = "error";
    renderPortfolio();
  }
}

function archiveIndex() {
  return state.editionArchive || { currentEditionId: "", currentEditionLabel: "", editions: [], monthlyHeadlines: [] };
}

function currentMonthBucket() {
  return archiveIndex().monthlyHeadlines[0] || null;
}

function archiveDetail() {
  return state.editionDetails[state.activeEditionId] || null;
}

function currentEditionSummary() {
  const archive = archiveIndex();
  return archive.editions.find(item => item.id === archive.currentEditionId) || archive.editions[0] || null;
}

function morningEditionLabel(editionId) {
  const [year, month, day] = editionId.split("-").map(Number);
  if (!year || !month || !day) return "Current morning edition";
  return `${MONTH_NAMES[month - 1]} ${day} Morning Edition`;
}

function parseDashboardDate(dateValue) {
  const isoMatch = String(dateValue).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) return new Date(Date.UTC(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3])));

  const writtenMatch = String(dateValue).match(/^(\d{1,2}) ([A-Za-z]+) (\d{4})$/);
  if (writtenMatch) {
    const month = MONTH_NAMES.findIndex(name => name.toLowerCase() === writtenMatch[2].toLowerCase());
    if (month >= 0) return new Date(Date.UTC(Number(writtenMatch[3]), month, Number(writtenMatch[1])));
  }

  return new Date(dateValue);
}

function formatDisplayDate(dateValue) {
  if (!dateValue) return "Not dated";
  const parsed = parseDashboardDate(dateValue);
  if (Number.isNaN(parsed.valueOf())) return dateValue;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function formatCompactDate(dateValue) {
  if (!dateValue) return "Live";
  const parsed = parseDashboardDate(dateValue);
  if (Number.isNaN(parsed.valueOf())) return dateValue;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
}

function metricLine(label, value) {
  return `<div class="archive-metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderMonthlyHeadlinesPreview() {
  const container = $("#monthly-headlines-preview");
  if (!container) return;
  const month = currentMonthBucket();
  if (!month) {
    container.innerHTML = `<div class="empty-state"><strong>No monthly headline archive yet.</strong><br>Build the newsletter editions to surface the monthly rollup.</div>`;
    return;
  }
  container.innerHTML = `
    <div class="headline-preview-header">
      <strong>${month.monthLabel}</strong>
      <span>${month.highlights.length} retained headlines</span>
      <button class="text-button" type="button" data-view="archive">Open archive</button>
    </div>
    ${month.highlights.slice(0, 4).map(item => `
      <button class="headline-preview-item" data-edition-select="${item.editionId}" data-view="archive">
        <span>${item.tag}</span>
        <strong>${item.title}</strong>
        <p>${item.summary}</p>
        <em>${item.editionLabel}</em>
      </button>
    `).join("")}
  `;
}

function renderCurrentEditionPreview() {
  const container = $("#current-edition-preview");
  if (!container) return;
  const edition = currentEditionSummary();
  const detail = edition ? state.editionDetails[edition.id] || null : null;
  if (!edition) {
    container.innerHTML = `<div class="empty-state"><strong>No current archived edition yet.</strong><br>Build the weekly newsletter snapshot to make today’s state persistent.</div>`;
    return;
  }

  const spotlightLead = detail?.spotlight?.[0] || null;
  container.innerHTML = `
    <div class="current-edition-card">
      <span class="current-edition-label">${edition.preparedLabel}</span>
      <strong>${edition.editionLabel}</strong>
      <p>${edition.summary}</p>
      <div class="current-edition-mini-grid">
        <div>
          <span>Verified records</span>
          <strong>${edition.metrics.verifiedRecords}</strong>
        </div>
        <div>
          <span>Treatments</span>
          <strong>${edition.metrics.treatments}</strong>
        </div>
        <div>
          <span>Approvals</span>
          <strong>${edition.metrics.followupApprovals}</strong>
        </div>
      </div>
      <div class="current-edition-headlines">
        ${(detail?.headlines || []).slice(0, 3).map(item => `
          <div class="current-edition-headline">
            <span>${item.tag}</span>
            <strong>${item.title}</strong>
          </div>
        `).join("") || `<div class="current-edition-headline"><span>Archive</span><strong>Edition detail is still loading.</strong></div>`}
      </div>
      <div class="current-edition-actions">
        <button class="button secondary" type="button" data-edition-select="${edition.id}" data-view="archive">Open newsletter</button>
        ${spotlightLead ? `
          <button class="button ghost current-edition-jump" type="button"
            data-edition-route-view="${spotlightLead.route.view}"
            data-edition-route-kind="${spotlightLead.route.kind}"
            data-edition-route-id="${spotlightLead.route.targetId}">
            Open lead item
          </button>
        ` : ""}
      </div>
    </div>
  `;
}

function renderArchive() {
  const archive = archiveIndex();
  $("#archive-edition-count").textContent = archive.editions.length;
  $("#archive-current-edition-label").textContent = archive.currentEditionLabel
    ? `Current edition · ${archive.currentEditionLabel}`
    : "Current edition";

  const monthContainer = $("#archive-months");
  const editionList = $("#archive-edition-list");
  const detail = $("#archive-detail");
  const selectedLabel = $("#archive-selected-label");

  if (!archive.editions.length) {
    monthContainer.innerHTML = `<div class="empty-state"><strong>No newsletter archive available.</strong><br>Run the edition build to generate monthly headlines and weekly snapshots.</div>`;
    editionList.innerHTML = "";
    detail.innerHTML = `<div class="empty-state"><strong>No edition selected.</strong><br>Archive details will appear here once editions are available.</div>`;
    selectedLabel.textContent = "Choose an edition to open its archived summary";
    return;
  }

  if (!state.activeEditionId || !archive.editions.find(item => item.id === state.activeEditionId)) {
    state.activeEditionId = archive.currentEditionId || archive.editions[0].id;
  }

  monthContainer.innerHTML = archive.monthlyHeadlines.map(month => `
    <div class="archive-month-card">
      <div class="archive-month-header">
        <strong>${month.monthLabel}</strong>
        <span>${month.highlights.length} headlines</span>
      </div>
      <div class="archive-month-list">
        ${month.highlights.slice(0, 4).map(item => `
          <button class="archive-month-item" data-edition-select="${item.editionId}">
            <span>${item.tag}</span>
            <strong>${item.title}</strong>
            <p>${item.editionLabel}</p>
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  editionList.innerHTML = archive.editions.map(item => `
    <button class="archive-edition-card ${item.id === state.activeEditionId ? "active" : ""}" data-edition-select="${item.id}">
      <div class="archive-edition-top">
        <span>${item.editionLabel}</span>
        <em>${item.id === archive.currentEditionId ? "Current" : "Archived"}</em>
      </div>
      <strong>${item.summary}</strong>
      <div class="archive-edition-meta">
        ${metricLine("Treatments", item.metrics.treatments)}
        ${metricLine("Approvals", item.metrics.followupApprovals)}
        ${metricLine("Watchlist", item.metrics.watchlistSignals)}
      </div>
    </button>
  `).join("");

  const selected = archiveDetail();
  if (!selected) {
    detail.innerHTML = `<div class="empty-state"><strong>Edition detail is loading.</strong><br>The archived newsletter view will appear here once the edition file is available.</div>`;
    selectedLabel.textContent = "Loading edition";
    return;
  }

  selectedLabel.textContent = `${selected.editionLabel} · archived weekly newsletter`;
  detail.innerHTML = `
    <div class="archive-detail-hero">
      <div>
        <p class="eyebrow">${selected.monthLabel}</p>
        <h3>${selected.editionLabel}</h3>
        <p>${selected.summary}</p>
      </div>
      <div class="archive-detail-stamp">
        <strong>${selected.preparedLabel}</strong>
        <small>${selected.provenance}</small>
      </div>
    </div>
    <div class="archive-metric-grid">
      ${metricLine("Verified records", selected.metrics.verifiedRecords)}
      ${metricLine("Treatment dossiers", selected.metrics.treatments)}
      ${metricLine("Approved follow-up programs", selected.metrics.followupApprovals)}
      ${metricLine("Watchlist signals", selected.metrics.watchlistSignals)}
    </div>
    <div class="dashboard-grid archive-detail-grid">
      <article class="panel span-6 archive-inner-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Edition headlines</p>
            <h3>What defined this weekly state?</h3>
          </div>
        </div>
        <div class="archive-headline-list">
          ${selected.headlines.map(item => `
            <div class="archive-headline-item">
              <span>${item.tag}</span>
              <strong>${item.title}</strong>
              <p>${item.summary}</p>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel span-6 archive-inner-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Spotlight items</p>
            <h3>What stood out that week</h3>
          </div>
        </div>
        <div class="archive-spotlight-list">
          ${selected.spotlight.map(item => `
            <button class="archive-spotlight-item" data-edition-route-view="${item.route.view}" data-edition-route-kind="${item.route.kind}" data-edition-route-id="${item.route.targetId}">
              <strong>${item.title}</strong>
              <p>${item.subtitle}</p>
            </button>
          `).join("")}
        </div>
      </article>
    </div>
  `;
}

async function openEdition(id) {
  if (!id) return;
  state.activeEditionId = id;
  renderArchive();
  if (state.editionDetails[id]) return;
  try {
    const response = await fetch(`/data/editions/${id}.json`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Edition ${id} not found`);
    state.editionDetails[id] = await response.json();
  } catch (error) {
    state.editionDetails[id] = {
      id,
      editionLabel: id,
      monthLabel: id.slice(0, 7),
      preparedLabel: morningEditionLabel(id),
      summary: "This edition could not be loaded from the static archive.",
      provenance: "Archive fetch failed.",
      metrics: { verifiedRecords: 0, treatments: 0, followupApprovals: 0, watchlistSignals: 0 },
      headlines: [],
      spotlight: []
    };
  }
  renderArchive();
}

async function hydrateEditionArchive() {
  try {
    const response = await fetch("/data/editions/index.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Edition archive unavailable");
    state.editionArchive = await response.json();
    renderMonthlyHeadlinesPreview();
    await openEdition(state.editionArchive.currentEditionId || state.editionArchive.editions[0]?.id || "");
    renderInsights();
  } catch (error) {
    renderMonthlyHeadlinesPreview();
    renderArchive();
    renderInsights();
  }
}

function releaseFingerprint(archive) {
  return [archive?.currentEditionId || "", archive?.generatedAt || ""].join("|");
}

async function checkForDashboardRelease() {
  try {
    const response = await fetch(`/data/editions/index.json?release-check=${Date.now()}`, {
      cache: "no-store",
      headers: { "cache-control": "no-cache" }
    });
    if (!response.ok) return;
    const latestArchive = await response.json();
    if (releaseFingerprint(latestArchive) === embeddedReleaseFingerprint) return;

    const refreshUrl = new URL(window.location.href);
    refreshUrl.searchParams.set("dashboard-release", latestArchive.generatedAt || latestArchive.currentEditionId || Date.now());
    window.location.replace(refreshUrl.toString());
  } catch (error) {
    // A transient offline or CDN error should not interrupt the current dashboard session.
  }
}

function enableAutomaticReleaseRefresh() {
  window.setInterval(checkForDashboardRelease, RELEASE_CHECK_INTERVAL_MS);
  window.addEventListener("focus", checkForDashboardRelease);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForDashboardRelease();
  });
}

function renderMetrics() {
  const statuses = {
    available: treatments.filter(t => t.indiaStatus === "available").length,
    limited: treatments.filter(t => t.indiaStatus === "limited").length,
    "not-launched": treatments.filter(t => t.indiaStatus === "not-launched").length
  };
  $("#india-metrics").innerHTML = [
    [statuses.available, "Available / marketed", "Indication caveat still applies", "", "✓", { action: "treatments-india", indiaStatus: "available", title: "Open the marketed India-access assets" }],
    [statuses.limited, "Import or trial context", "No verified routine domestic launch", "gold", "↗", { action: "treatments-india", indiaStatus: "limited", title: "Open the import or trial-context India-access assets" }],
    [statuses["not-launched"], "Not launched", "No confirmed India date", "coral", "—", { action: "treatments-india", indiaStatus: "not-launched", title: "Open the not-yet-launched India-access assets" }],
    ["₹95.4", "USD conversion rate", "Context only, not market price", "blue", "$", { action: "view-anchor", view: "india", scroll: "#india-table", title: "Open the India access table and pricing context" }]
  ].map(([value, label, note, tone, icon, options]) => metricCard(value, label, note, tone, icon, options)).join("");
}

function metricCard(value, label, note, tone, icon, options = null) {
  const isInteractive = Boolean(options);
  const tag = isInteractive ? "button" : "div";
  const attrs = [];
  if (isInteractive) {
    attrs.push('type="button"');
    attrs.push('class="metric metric-button' + (tone ? ` ${tone}` : "") + '"');
    if (options.action) attrs.push(`data-metric-action="${options.action}"`);
    if (options.view) attrs.push(`data-metric-view="${options.view}"`);
    if (options.kind) attrs.push(`data-metric-kind="${options.kind}"`);
    if (options.id) attrs.push(`data-metric-id="${options.id}"`);
    if (options.lane) attrs.push(`data-metric-lane="${options.lane}"`);
    if (options.indiaStatus) attrs.push(`data-metric-india-status="${options.indiaStatus}"`);
    if (options.followupStatus) attrs.push(`data-metric-followup-status="${options.followupStatus}"`);
    if (options.followupCancer) attrs.push(`data-metric-followup-cancer="${options.followupCancer}"`);
    if (options.watchlistStatus) attrs.push(`data-metric-watchlist-status="${options.watchlistStatus}"`);
    if (options.watchlistCategory) attrs.push(`data-metric-watchlist-category="${options.watchlistCategory}"`);
    if (options.pendingOnly) attrs.push(`data-metric-pending-only="${options.pendingOnly}"`);
    if (options.scroll) attrs.push(`data-metric-scroll="${options.scroll}"`);
    attrs.push(`title="${options.title || `Open the records behind ${label.toLowerCase()}`}"`);
  } else {
    attrs.push(`class="metric ${tone}"`);
  }
  return `<${tag} ${attrs.join(" ")}>
    <div class="metric-top"><span class="metric-label">${label}</span><span class="metric-icon">${icon}</span></div>
    <strong>${value}</strong><small>${note}</small>
  </${tag}>`;
}

function renderInsights() {
  const currentEdition = currentEditionSummary();
  const currentDetail = currentEdition ? state.editionDetails[currentEdition.id] || null : null;
  const hasCurrentBriefing = Boolean(currentEdition && currentDetail);
  const newestTreatmentApproval = treatments
    .filter(item => item.eventDate)
    .sort((a, b) => (Date.parse(b.eventDate) || 0) - (Date.parse(a.eventDate) || 0))[0];
  const routeApproval = currentDetail?.routeSummary?.approval || null;
  const featuredHeadline = currentDetail?.headlines?.[0] || null;
  const featuredWatchlist = watchlistSignals.find(item => item.title === featuredHeadline?.title) || null;
  const featuredRoute = featuredWatchlist ? {
    view: "watchlist",
    kind: "watchlist",
    targetId: featuredWatchlist.id
  } : routeApproval?.route || {
    view: "treatments",
    kind: "detail",
    targetId: newestTreatmentApproval?.id || "tucatinib"
  };
  const featuredTreatment = treatments.find(item => item.id === featuredRoute.targetId) || newestTreatmentApproval || treatments[0];
  const featuredLabel = featuredWatchlist?.title || routeApproval?.title || featuredTreatment.name;
  const featuredNote = featuredWatchlist?.statusLabel || routeApproval?.subtitle || featuredTreatment.launch;
  const approvedCount = asco2025Followup.filter(item => item.status === "approved").length;
  const pendingPrimaryCount = watchlistSignals.filter(item => item.verification.includes("pending")).length;
  const availableCount = treatments.filter(item => item.indiaStatus === "available").length;
  const highImpactCount = treatments.filter(item => item.impactGroup === "high").length;
  const currentMonth = currentMonthBucket();
  const followupApprovalLead = asco2025Followup
    .filter(item => item.status === "approved")
    .map(item => {
      const milestone = item.currentMilestone.split("·").pop()?.trim() || "";
      return {
        title: item.program,
        note: item.currentMilestone,
        view: "followup",
        kind: "followup",
        targetId: item.id,
        date: Date.parse(milestone) || 0
      };
    })
    .sort((a, b) => b.date - a.date)[0];
  const treatmentApprovalLead = treatments
    .filter(item => item.eventDate)
    .map(item => ({
      title: item.name,
      note: item.launch,
      view: "treatments",
      kind: "detail",
      targetId: item.id,
      date: Date.parse(item.eventDate) || 0
    }))
    .sort((a, b) => b.date - a.date)[0];
  const approvalLead = [followupApprovalLead, treatmentApprovalLead]
    .filter(Boolean)
    .sort((a, b) => b.date - a.date)[0] || {
      title: "Perioperative pembrolizumab",
      note: "FDA approval · 12 Jun 2025",
      view: "followup",
      kind: "followup",
      targetId: "keynote689",
      date: Date.parse("2025-06-12") || 0
    };

  const treatmentLead = treatments.find(item => item.id === "tucatinib");
  const accessLead = treatments.find(item => item.id === "pemigatinib");
  const regulatoryLead = asco2025Followup.find(item => item.id === "camizestrant");
  const cautionLead = watchlistSignals.find(item => item.id === "galleri");
  const systemsLead = watchlistSignals.find(item => item.id === "workforce");
  const featuredWhy = featuredWatchlist?.whyMatters || featuredTreatment.benefit;
  const featuredConstraint = featuredWatchlist?.limitations || featuredTreatment.indiaCaveat || featuredTreatment.limitations;
  const featuredSignal = featuredWatchlist?.effect || `${featuredTreatment.headline} · ${featuredTreatment.headlineNote}`;
  const featuredDate = featuredWatchlist?.date || featuredTreatment.eventDate;

  const cards = [
    {
      tone: "teal",
      eyebrow: "Newest verified move",
      title: featuredLabel,
      summary: featuredHeadline?.summary || featuredWhy,
      signal: featuredSignal,
      why: featuredWhy,
      constraint: featuredConstraint,
      confidence: featuredTreatment.impact,
      route: "Open dossier",
      view: featuredRoute.view,
      kind: featuredRoute.kind,
      targetId: featuredRoute.targetId
    },
    {
      tone: "blue",
      eyebrow: "Regulatory divergence",
      title: regulatoryLead.program,
      summary: "One of the most decision-sensitive items is not benefit magnitude alone, but whether regulators agree on when the treatment switch matters.",
      signal: regulatoryLead.currentMilestone,
      why: regulatoryLead.assessment,
      constraint: regulatoryLead.adoption,
      confidence: regulatoryLead.confidence,
      route: "ASCO 2025 follow-up",
      view: "followup",
      kind: "followup",
      targetId: regulatoryLead.id
    },
    {
      tone: "gold",
      eyebrow: "India access pressure",
      title: accessLead.name,
      summary: "Genomics-led first-line precision advances can be clinically relevant yet commercially unreachable without domestic launch and testing capacity.",
      signal: accessLead.indiaPrice,
      why: accessLead.benefit,
      constraint: accessLead.indiaCaveat,
      confidence: accessLead.indiaLabel,
      route: "India access & cost",
      view: "india",
      kind: "detail",
      targetId: accessLead.id
    },
    {
      tone: "coral",
      eyebrow: "Cautionary evidence",
      title: cautionLead.title,
      summary: "Negative or mixed screening evidence matters because non-adoption is also a global oncology decision.",
      signal: cautionLead.effect,
      why: cautionLead.whyMatters,
      constraint: cautionLead.limitations,
      confidence: cautionLead.statusLabel,
      route: "Watchlist & systems",
      view: "watchlist",
      kind: "watchlist",
      targetId: cautionLead.id
    }
  ];

  const rail = [
    {
      label: "Latest verified approval",
      value: approvalLead.title,
      note: approvalLead.note,
      view: approvalLead.view,
      kind: approvalLead.kind,
      targetId: approvalLead.targetId
    },
    {
      label: "System strain that changes access",
      value: systemsLead.title,
      note: systemsLead.effect,
      view: "watchlist",
      kind: "watchlist",
      targetId: systemsLead.id
    },
    {
      label: "High-impact treatment pool",
      value: `${highImpactCount} treatment candidates`,
      note: `${availableCount} already marketed in India`,
      view: "treatments",
      kind: "view"
    },
    {
      label: "Archive continuity",
      value: currentEdition?.editionLabel || "Current edition",
      note: currentMonth ? `${currentMonth.monthLabel} monthly rollup is retained` : "Archive bucket loads when edition data is available",
      view: "archive",
      kind: "view"
    }
  ];

  const actionBoard = [
    {
      label: "Open now",
      title: featuredLabel,
      note: featuredNote,
      summary: featuredHeadline?.title || "Newest verified movement in the briefing",
      view: featuredRoute.view,
      kind: featuredRoute.kind,
      targetId: featuredRoute.targetId
    },
    {
      label: "Decide carefully",
      title: regulatoryLead.program,
      note: regulatoryLead.currentMilestone,
      summary: regulatoryLead.nextDecision,
      view: "followup",
      kind: "followup",
      targetId: regulatoryLead.id
    },
    {
      label: "Do not over-adopt",
      title: cautionLead.title,
      note: cautionLead.statusLabel,
      summary: cautionLead.decisionImpact,
      view: "watchlist",
      kind: "watchlist",
      targetId: cautionLead.id
    }
  ];

  if (hasCurrentBriefing) {
    $("#briefing-headline").textContent = featuredHeadline?.title
      || `${featuredLabel} leads this morning's oncology briefing`;
    $("#briefing-summary").textContent = currentEdition.summary
      || "Start with the move most likely to change care today, the decision still under review, and the signal that still needs restraint.";
    $("#briefing-date-label").textContent = currentEdition.preparedLabel || "Current briefing";
  }
  const sidebarPreparedDate = $("#sidebar-prepared-date");
  if (sidebarPreparedDate && hasCurrentBriefing) {
    sidebarPreparedDate.textContent = currentEdition.preparedLabel || "Prepared date loading";
  }
  if (hasCurrentBriefing) {
    $("#briefing-pulse-summary").textContent = "Review the lead development, regulatory decision points, and evidence limitations shaping oncology care.";
    $("#briefing-tag-row").innerHTML = [
      ["Live edition", currentEdition.editionLabel || "Current state"],
      ["Lead headline", featuredLabel],
      ["Decision line", regulatoryLead.program],
      ["Caution line", cautionLead.title]
    ].map(([label, value]) => `<span class="briefing-tag"><strong>${label}</strong>${value}</span>`).join("");
  }

  const primaryAction = $("#briefing-primary-action");
  if (primaryAction) {
    primaryAction.dataset.insightView = featuredRoute.view;
    primaryAction.dataset.insightKind = featuredRoute.kind;
    primaryAction.dataset.insightId = featuredRoute.targetId || "";
    primaryAction.textContent = "Read Dossier";
  }

  if (!hasCurrentBriefing) {
    return;
  }

  $("#briefing-pulse-list").innerHTML = [
    {
      label: "Newest verified move",
      value: featuredLabel,
      note: featuredNote,
      view: featuredRoute.view,
      kind: featuredRoute.kind,
      targetId: featuredRoute.targetId
    },
    {
      label: "Decision under dispute",
      value: regulatoryLead.program,
      note: regulatoryLead.currentMilestone,
      view: "followup",
      kind: "followup",
      targetId: regulatoryLead.id
    },
    {
      label: "System blocker",
      value: systemsLead.title,
      note: systemsLead.statusLabel,
      view: "watchlist",
      kind: "watchlist",
      targetId: systemsLead.id
    }
  ].map(item => `
    <button class="briefing-pulse-item" type="button" data-insight-view="${item.view}" data-insight-kind="${item.kind}" ${item.targetId ? `data-insight-id="${item.targetId}"` : ""}>
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <p>${item.note}</p>
    </button>
  `).join("");

  $("#briefing-feature-card").innerHTML = `
    <button class="briefing-feature-button" type="button" data-insight-view="${featuredRoute.view}" data-insight-kind="${featuredRoute.kind}" ${featuredRoute.targetId ? `data-insight-id="${featuredRoute.targetId}"` : ""}>
      <span class="briefing-feature-eyebrow">${featuredHeadline?.tag || "Newest verified move"}</span>
      <h3>${featuredLabel}</h3>
      <p>${featuredHeadline?.summary || featuredTreatment.benefit}</p>
      <div class="briefing-feature-grid">
        <div>
          <span>Why it matters now</span>
          <strong>${featuredWhy}</strong>
        </div>
        <div>
          <span>What still blocks confidence</span>
          <strong>${featuredConstraint}</strong>
        </div>
      </div>
      <div class="briefing-feature-foot">
        <em>${featuredSignal}</em>
        <span>Read full dossier</span>
      </div>
    </button>
  `;

  $("#briefing-action-board").innerHTML = actionBoard.map(item => `
    <button class="briefing-action-card" type="button" data-insight-view="${item.view}" data-insight-kind="${item.kind}" ${item.targetId ? `data-insight-id="${item.targetId}"` : ""}>
      <span>${item.label}</span>
      <strong>${item.title}</strong>
      <p>${item.summary}</p>
      <em>${item.note}</em>
    </button>
  `).join("");

  $("#insight-metrics").innerHTML = [
    [formatCompactDate(featuredDate), "Newest dated move", featuredLabel, "", "NEW", { action: "insight-target", view: featuredRoute.view, kind: featuredRoute.kind, id: featuredRoute.targetId, title: `Open the latest move: ${featuredLabel}` }],
    [currentEdition?.metrics?.verifiedRecords || cards.length, "Verified records live", currentEdition ? `Archived as ${currentEdition.editionLabel}` : "Current edition", "blue", "VR", { action: "portfolio-filter", lane: "all", title: "Open all verified portfolio records" }],
    [availableCount, "India-marketed assets", "Study use may still differ from label", "gold", "IN", { action: "treatments-india", indiaStatus: "available", title: "Open the India-marketed treatment assets" }],
    [pendingPrimaryCount, "Signals still cautionary", "Direct primary capture still pending", "coral", "!", { action: "watchlist-filter", pendingOnly: true, title: "Open the watchlist signals with primary capture still pending" }]
  ].map(([value, label, note, tone, icon, options]) => metricCard(value, label, note, tone, icon, options)).join("");

  $("#insight-grid").innerHTML = cards.map(card => `
    <button class="insight-card ${card.tone}" data-insight-view="${card.view}" data-insight-kind="${card.kind}" ${card.targetId ? `data-insight-id="${card.targetId}"` : ""} title="Open the linked detail">
      <span class="insight-eyebrow">${card.eyebrow}</span>
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
      <div class="insight-body">
        <div class="insight-field">
          <span>Why it matters</span>
          <p>${card.why}</p>
        </div>
        <div class="insight-field">
          <span>Constraint</span>
          <p>${card.constraint}</p>
        </div>
      </div>
      <div class="insight-foot">
        <strong>${card.signal}</strong>
        <em>${card.confidence}</em>
        <span>Open → ${card.route}</span>
      </div>
    </button>
  `).join("");

  $("#insight-rail").innerHTML = rail.map(item => `
    <button class="insight-rail-item" data-insight-view="${item.view}" data-insight-kind="${item.kind}" ${item.targetId ? `data-insight-id="${item.targetId}"` : ""} title="Open linked detail">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <p>${item.note}</p>
    </button>
  `).join("");
  renderCurrentEditionPreview();
  renderMonthlyHeadlinesPreview();
}

function renderEvidenceMap() {
  const colors = { high: "#008d86", moderate: "#d8a02f", early: "#e8745d" };
  $("#evidence-map").innerHTML = `
    <div class="map-grid"></div>
    <span class="axis-y">Potential impact</span><span class="axis-x">Evidence maturity</span>
    <span class="map-label high">High</span><span class="map-label low">Low</span>
    <span class="map-label early">Early phase</span><span class="map-label late">Phase III</span>
    ${treatments.map(t => `<button class="bubble" data-detail="${t.id}" title="${t.name}: ${t.impact}"
      style="--x:${8 + t.maturity * .84}%;--y:${13 + t.impactScore * .76}%;--size:${35 + t.impactScore * .23}px;--color:${colors[t.impactGroup]}">${t.short}</button>`).join("")}`;
}

function renderPriorities() {
  const items = [...treatments].sort((a,b) => (b.maturity * .45 + b.impactScore * .55) - (a.maturity * .45 + a.impactScore * .55)).slice(0,5);
  $("#priority-list").innerHTML = items.map((t, i) => `
    <button class="priority-item" data-detail="${t.id}">
      <span class="priority-rank">0${i+1}</span>
      <span><h4>${t.short}</h4><p>${t.phase} · ${t.cancer}</p></span>
      <span class="priority-score">${Math.round(t.maturity * .45 + t.impactScore * .55)}</span>
    </button>`).join("");
}

function renderSignalTable() {
  $("#signal-table").innerHTML = `<table>
    <thead><tr><th>Advance</th><th>Evidence</th><th>Measured value</th><th>Cost</th><th>Impact</th></tr></thead>
    <tbody>${treatments.map(t => `<tr>
      <td class="therapy-cell">
        <button class="therapy-link" type="button" data-detail="${t.id}" aria-label="Open detailed read for ${t.name}">
          <strong>${t.short}</strong><span>${t.company}</span>
        </button>
      </td>
      <td>${t.phase}</td><td><strong>${t.headline}</strong><br><span class="price-note">${t.headlineNote}</span></td>
      <td>${t.cost}</td><td><span class="pill ${formatImpactClass(t.impactGroup)}">${t.impact}</span></td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function populateFilters() {
  const entries = [
    ["#cancer-filter", [...new Set(treatments.map(t => t.cancer))]],
    ["#phase-filter", [...new Set(treatments.map(t => t.phase))]],
    ["#impact-filter", [...new Set(treatments.map(t => t.impact))]]
  ];
  entries.forEach(([selector, values]) => {
    const select = $(selector);
    select.insertAdjacentHTML("beforeend", values.sort().map(v => `<option value="${v}">${v}</option>`).join(""));
  });
}

function filteredTreatments() {
  const cancer = $("#cancer-filter").value;
  const phase = $("#phase-filter").value;
  const impact = $("#impact-filter").value;
  const india = $("#india-filter").value;
  return treatments.filter(t =>
    (cancer === "all" || t.cancer === cancer) &&
    (phase === "all" || t.phase === phase) &&
    (impact === "all" || t.impact === impact) &&
    (india === "all" || t.indiaStatus === india)
  );
}

function renderTreatments() {
  const data = filteredTreatments();
  $("#result-count").textContent = data.length;
  $("#treatment-grid").innerHTML = data.length ? data.map(t => `
    <article class="treatment-card">
      <div class="card-top">
        <span class="cancer-tag">${t.cancer} · ${t.setting}</span>
        <button class="compare-toggle ${state.selected.includes(t.id) ? "selected" : ""}" data-compare="${t.id}">
          ${state.selected.includes(t.id) ? "Selected" : "+ Compare"}
        </button>
      </div>
      <h3>${t.name}</h3><p class="company">${t.company}</p>
      <div class="headline-result"><strong>${t.headline}</strong><span>${t.headlineNote}</span></div>
      <div class="card-meta">
        <div><span>Evidence</span><strong>${t.phase}</strong></div>
        <div><span>Impact</span><strong>${t.impact}</strong></div>
        <div><span>India</span><strong>${t.indiaLabel}</strong></div>
        <div><span>Cost</span><strong>${t.cost}</strong></div>
      </div>
      <div class="card-actions">
        <span class="pill ${t.indiaStatus}">${t.indiaLabel}</span>
        <button class="detail-button" data-detail="${t.id}">View evidence →</button>
      </div>
    </article>`).join("") : `<div class="empty-state"><strong>No advances match these filters.</strong><br>Reset filters or broaden the search.</div>`;
}

function renderIndiaTable() {
  $("#india-table").innerHTML = `<table>
    <thead><tr><th>Advance & company</th><th>India status</th><th>India price reference</th><th>Anticipated launch</th><th>Qualification</th></tr></thead>
    <tbody>${treatments.map(t => `<tr>
      <td class="therapy-cell">
        <button class="therapy-link" type="button" data-detail="${t.id}" aria-label="Open detailed read for ${t.name}">
          <strong>${t.short}</strong><span>${t.company}</span>
        </button>
      </td>
      <td><span class="pill ${t.indiaStatus}">${t.indiaLabel}</span></td>
      <td><span class="price-main">${t.indiaPrice}</span></td>
      <td>${t.launch}</td><td class="launch-note">${t.indiaCaveat}</td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function renderSystems() {
  $("#technology-grid").innerHTML = technologies.map(t => `<article class="technology-card">
    <span>${t.name}</span><strong>${t.metric}</strong><p>${t.text}</p>
  </article>`).join("");
  const bars = [
    ["AI trial matching", 90, "accuracy"],
    ["Computational pathology", 70, "validation"],
    ["ctDNA / MRD", 62, "actionability"],
    ["Routine-lab ML", 50, "prospective proof"]
  ];
  $("#technology-bars").innerHTML = bars.map(([name, value, label]) => `<div class="bar-row">
    <label>${name}</label><div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div><strong>${label}</strong>
  </div>`).join("");
}

function renderFollowupMetrics() {
  const counts = asco2025Followup.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});
  $("#followup-metrics").innerHTML = [
    [counts.approved || 0, "Reached verified approval", "Verified regimen-specific authorization", "", "✓", { action: "followup-filter", followupStatus: "approved", view: "followup", title: "Open the approved ASCO 2025 follow-up dossiers" }],
    [counts.review || 0, "Under regulatory review", "Outcome remains jurisdiction-dependent", "blue", "R", { action: "followup-filter", followupStatus: "review", view: "followup", title: "Open the under-review ASCO 2025 follow-up dossiers" }],
    [counts.guideline || 0, "Guideline-led pathway", "Label status may differ", "gold", "G", { action: "followup-filter", followupStatus: "guideline", view: "followup", title: "Open the guideline-led ASCO 2025 follow-up dossiers" }],
    [counts.development || 0, "Still developing", "Publication or follow-up without approval", "coral", "↗", { action: "followup-filter", followupStatus: "development", view: "followup", title: "Open the developing ASCO 2025 follow-up dossiers" }]
  ].map(([value, label, note, tone, icon, options]) => metricCard(value, label, note, tone, icon, options)).join("");
  $("#followup-program-count").textContent = asco2025Followup.length;
}

function populateFollowupFilters() {
  const cancers = [...new Set(asco2025Followup.map(item => item.cancer))].sort();
  $("#followup-cancer-filter").insertAdjacentHTML("beforeend", cancers.map(cancer => `<option value="${cancer}">${cancer}</option>`).join(""));
}

function filteredFollowup() {
  const status = $("#followup-status-filter").value;
  const cancer = $("#followup-cancer-filter").value;
  return asco2025Followup.filter(item =>
    (status === "all" || item.status === status) &&
    (cancer === "all" || item.cancer === cancer)
  );
}

function renderFollowup() {
  const statusColors = {
    approved: ["#007f7b", "#dff3ef"],
    review: ["#3f70d8", "#eaf0ff"],
    guideline: ["#a87416", "#fff6dc"],
    development: ["#d15f49", "#fff0eb"]
  };
  const data = filteredFollowup();
  $("#followup-grid").innerHTML = data.length ? data.map(item => {
    const [color, background] = statusColors[item.status];
    return `<article class="followup-card" style="--status-color:${color};--status-bg:${background}">
      <div class="followup-card-top">
        <div><span class="cancer-tag">${item.cancer} · ${item.trial}</span><h4>${item.program}</h4><p class="company">${item.company}</p></div>
        <span class="status-chip">${item.statusLabel}</span>
      </div>
      <div class="milestone-path">
        <div class="milestone"><span>ASCO 2025 signal</span><strong>${item.ascoSignal}</strong></div>
        <div class="path-arrow">→</div>
        <div class="milestone"><span>Current milestone</span><strong>${item.currentMilestone}</strong></div>
      </div>
      <p class="followup-assessment">${item.assessment}</p>
      <div class="followup-links">
        <button class="dossier-button" data-followup-detail="${item.id}">Open full dossier</button>
        <a href="${item.conferenceSource}" target="_blank" rel="noreferrer">ASCO-era source ↗</a>
        <a href="${item.currentSource}" target="_blank" rel="noreferrer">Current-status source ↗</a>
        ${item.secondarySource ? `<a href="${item.secondarySource}" target="_blank" rel="noreferrer">Additional verification ↗</a>` : ""}
      </div>
    </article>`;
  }).join("") : `<div class="empty-state">No programs match these filters.</div>`;
  renderFollowupRegister(data);
}

function openFollowupMetric(status = "all", cancer = "all") {
  showView("followup");
  $("#followup-status-filter").value = status;
  $("#followup-cancer-filter").value = cancer;
  renderFollowup();
  window.setTimeout(() => {
    $("#followup-grid").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 140);
}

function openTreatmentMetric(indiaStatus = "all") {
  showView("treatments");
  ["#cancer-filter", "#phase-filter", "#impact-filter", "#india-filter"].forEach(selector => $(selector).value = "all");
  $("#india-filter").value = indiaStatus;
  renderTreatments();
  window.setTimeout(() => {
    $("#treatment-grid").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 140);
}

function openPortfolioMetric(lane = "all", scrollSelector = "#portfolio-results") {
  state.portfolioSearch = "";
  state.portfolioFilter = lane;
  showView("overview");
  renderPortfolio();
  window.setTimeout(() => {
    const target = $(scrollSelector);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 140);
}

function renderFollowupRegister(data = filteredFollowup()) {
  $("#followup-register").innerHTML = `<table>
    <thead><tr><th>Program</th><th>ASCO evidence</th><th>Effect</th><th>Current pathway</th><th>Regional status</th><th>Next catalyst</th><th></th></tr></thead>
    <tbody>${data.map(item => `<tr>
      <td class="register-program"><strong>${item.program}</strong><span>${item.trial} · ${item.company}</span></td>
      <td>${item.design}<br><span class="price-note">${item.population}</span></td>
      <td class="register-effect"><strong>${item.endpoint}</strong><span>${item.effect}</span></td>
      <td><span class="pill ${item.status === "approved" ? "available" : item.status === "review" ? "neutral" : item.status === "guideline" ? "moderate" : "early"}">${item.statusLabel}</span></td>
      <td><strong>US:</strong> ${item.us}<br><span class="price-note"><strong>India:</strong> ${item.india}</span></td>
      <td>${item.nextDecision}</td>
      <td><button class="dossier-button" data-followup-detail="${item.id}">Dossier</button></td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function openFollowupDetail(id) {
  const item = asco2025Followup.find(entry => entry.id === id);
  const sourceLinks = [
    ["ASCO-era evidence", item.conferenceSource],
    ["Current-status source", item.currentSource],
    item.secondarySource ? ["Additional verification", item.secondarySource] : null
  ].filter(Boolean);
  $("#followup-detail-content").innerHTML = `
    <div class="dossier-summary">
      <p class="eyebrow">${item.cancer} · ${item.trial}</p>
      <h2>${item.program}</h2>
      <p>${item.company}</p>
      <div class="dossier-status-row"><span>${item.statusLabel}</span><span>${item.presentation}</span><span>Verified to ${item.verifiedThrough || "9 June 2026"}</span></div>
    </div>
    <div class="modal-body">
      <div class="dossier-grid">
        ${dossierField("Trial design", item.design)}
        ${dossierField("Population / sample", item.population)}
        ${dossierField("Comparator", item.comparator)}
        ${dossierField("Primary endpoint", item.endpoint)}
        ${dossierField("Measured effect", item.effect, "wide")}
        ${dossierField("Safety and burden", item.safety, "full")}
        ${dossierField("What changed after ASCO", item.evidenceDelta, "wide")}
        ${dossierField("Evidence confidence", item.confidence)}
        ${dossierField("Adoption and commercialization constraint", item.adoption, "wide")}
        ${dossierField("Next verifiable decision point", item.nextDecision)}
      </div>
      <div class="regional-grid">
        <div class="region-card"><span>United States</span><p>${item.us}</p></div>
        <div class="region-card"><span>Europe</span><p>${item.eu}</p></div>
        <div class="region-card"><span>India</span><p>${item.india}</p></div>
      </div>
      <div class="evidence-ledger"><h3>Source ledger</h3>
        ${sourceLinks.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}: ${url} ↗</a>`).join("")}
      </div>
    </div>`;
  $("#followup-dialog").showModal();
}

function dossierField(label, value, extra = "") {
  return `<div class="dossier-field ${extra}"><span>${label}</span><p>${value || "Not verified"}</p></div>`;
}

function renderFollowupLessons() {
  const lessons = [
    ["01", "Six programs reached FDA approval; camizestrant reached EU and US accelerated approval", "KEYNOTE-689, MATTERHORN, DESTINY-Breast09, ASCENT-04, C-POST and AMPLITUDE moved from ASCO evidence to regimen-specific US authorization, while camizestrant reached EU authorization and a US accelerated approval."],
    ["02", "Regulators can diverge", "Camizestrant received a positive EU committee opinion while the US review questioned the clinical meaning of switching before imaging progression."],
    ["03", "Guidelines may precede labels", "ATOMIC influenced NCCN guidance, but a guideline recommendation does not itself create an FDA-approved indication."],
    ["04", "Maturation can become approval", "ASCENT-04 advanced from conference signal to NEJM publication and then FDA approval; NIVOPOSTOP produced additional analyses without a verified new label."],
    ["05", "Submission is not approval", "Rusfertide reached priority review, but remains investigational until the regulator issues a decision."]
  ];
  $("#followup-lessons").innerHTML = lessons.map(([number, title, text]) =>
    `<div class="lesson"><b>${number}</b><div><strong>${title}</strong><p>${text}</p></div></div>`
  ).join("");
}

function renderWatchlistMetrics() {
  const primaryPending = watchlistSignals.filter(item => item.verification.includes("pending")).length;
  const conference = watchlistSignals.filter(item => item.status === "conference").length;
  const cautionary = watchlistSignals.filter(item => item.status === "negative").length;
  $("#watchlist-metrics").innerHTML = [
    [watchlistSignals.length, "Material signals added", "Explicitly outside the routine treatment cards", "", "WL", { action: "watchlist-filter", title: "Open all watchlist signals" }],
    [conference, "Conference-only", "Important but not yet fully matured", "blue", "C", { action: "watchlist-filter", watchlistStatus: "conference", title: "Open the conference-only watchlist signals" }],
    [cautionary, "Negative or cautionary", "Non-adoption is also a decision", "coral", "!", { action: "watchlist-filter", watchlistStatus: "negative", title: "Open the negative or cautionary watchlist signals" }],
    [primaryPending, "Primary capture pending", "Direct abstract or full report still needed", "gold", "P", { action: "watchlist-filter", pendingOnly: true, title: "Open watchlist signals with primary capture still pending" }]
  ].map(([value, label, note, tone, icon, options]) => metricCard(value, label, note, tone, icon, options)).join("");
  $("#watchlist-count").textContent = watchlistSignals.length;
}

function populateWatchlistFilters() {
  const categories = [...new Set(watchlistSignals.map(item => item.category))].sort();
  $("#watchlist-type-filter").insertAdjacentHTML("beforeend", categories.map(category => `<option value="${category}">${category}</option>`).join(""));
}

function filteredWatchlist() {
  const type = $("#watchlist-type-filter").value;
  const status = $("#watchlist-status-filter").value;
  return watchlistSignals.filter(item =>
    (type === "all" || item.category === type) &&
    (status === "all" || item.status === status) &&
    (!state.watchlistPendingOnly || item.verification.includes("pending"))
  );
}

function renderWatchlist() {
  const statusColors = {
    regulatory: ["#6b4fc7", "#f0ebff"],
    conference: ["#3f70d8", "#eaf0ff"],
    negative: ["#d15f49", "#fff0eb"],
    systems: ["#007f7b", "#dff3ef"],
    neutral: ["#556980", "#edf2f6"]
  };
  const data = filteredWatchlist();
  $("#watchlist-grid").innerHTML = data.length ? data.map(item => {
    const [color, background] = statusColors[item.status];
    return `<article class="followup-card" style="--status-color:${color};--status-bg:${background}">
      <div class="followup-card-top">
        <div><span class="cancer-tag">${item.category} · ${item.date}</span><h4>${item.title}</h4><p class="company">${item.organization}</p></div>
        <span class="status-chip">${item.statusLabel}</span>
      </div>
      <div class="milestone-path">
        <div class="milestone"><span>What happened</span><strong>${item.issue}</strong></div>
        <div class="path-arrow">→</div>
        <div class="milestone"><span>Why it matters</span><strong>${item.decisionImpact}</strong></div>
      </div>
      <p class="followup-assessment">${item.whyMatters}</p>
      <div class="followup-links">
        <button class="dossier-button" data-watchlist-detail="${item.id}">Open full note</button>
        <a href="${item.source}" target="_blank" rel="noreferrer">Source ↗</a>
        ${item.secondarySource ? `<a href="${item.secondarySource}" target="_blank" rel="noreferrer">Secondary check ↗</a>` : ""}
      </div>
    </article>`;
  }).join("") : `<div class="empty-state">No watchlist signals match these filters.</div>`;
  renderWatchlistRegister(data);
}

function renderWatchlistRegister(data = filteredWatchlist()) {
  $("#watchlist-register").innerHTML = `<table>
    <thead><tr><th>Signal</th><th>Population / geography</th><th>Observed effect</th><th>Decision change</th><th>India relevance</th><th></th></tr></thead>
    <tbody>${data.map(item => `<tr>
      <td class="register-program"><strong>${item.title}</strong><span>${item.category} · ${item.statusLabel}</span></td>
      <td>${item.population}<br><span class="price-note">${item.geography}</span></td>
      <td class="register-effect"><strong>${item.endpoint}</strong><span>${item.effect}</span></td>
      <td>${item.decisionImpact}</td>
      <td>${item.indiaImpact}</td>
      <td><button class="dossier-button" data-watchlist-detail="${item.id}">Detail</button></td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function openWatchlistDetail(id) {
  const item = watchlistSignals.find(entry => entry.id === id);
  const sourceLinks = [
    ["Source", item.source],
    item.secondarySource ? ["Secondary check", item.secondarySource] : null
  ].filter(Boolean);
  $("#watchlist-detail-content").innerHTML = `
    <div class="dossier-summary">
      <p class="eyebrow">${item.category} · ${item.date}</p>
      <h2>${item.title}</h2>
      <p>${item.organization}</p>
      <div class="dossier-status-row"><span>${item.statusLabel}</span><span>${item.cancer}</span><span>${item.geography}</span></div>
    </div>
    <div class="modal-body">
      <div class="dossier-grid">
        ${dossierField("Issue", item.issue)}
        ${dossierField("Population / sample", item.population)}
        ${dossierField("Comparator", item.comparator)}
        ${dossierField("Endpoint or decision test", item.endpoint)}
        ${dossierField("Observed effect", item.effect, "wide")}
        ${dossierField("Why it matters to care", item.whyMatters, "wide")}
        ${dossierField("Who and where it affects", item.whoAffected, "wide")}
        ${dossierField("What decision could change", item.decisionImpact, "wide")}
        ${dossierField("Evidence strength", item.evidenceStrength)}
        ${dossierField("Current limitation", item.limitations, "wide")}
        ${dossierField("India relevance", item.indiaImpact, "wide")}
        ${dossierField("Cost / procurement", item.cost)}
        ${dossierField("Next verification milestone", item.nextMilestone)}
        ${dossierField("Verification note", item.verification, "full")}
      </div>
      <div class="evidence-ledger"><h3>Source ledger</h3>
        ${sourceLinks.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}: ${url} ↗</a>`).join("")}
      </div>
    </div>`;
  $("#watchlist-dialog").showModal();
}

function openWatchlistMetric({ status = "all", category = "all", pendingOnly = false } = {}) {
  state.watchlistPendingOnly = pendingOnly;
  showView("watchlist");
  $("#watchlist-type-filter").value = category;
  $("#watchlist-status-filter").value = status;
  renderWatchlist();
  window.setTimeout(() => {
    $("#watchlist-grid").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 140);
}

function openMetricAction(button) {
  const action = button.dataset.metricAction;
  if (action === "followup-filter") {
    openFollowupMetric(
      button.dataset.metricFollowupStatus || "all",
      button.dataset.metricFollowupCancer || "all"
    );
    return;
  }
  if (action === "treatments-india") {
    openTreatmentMetric(button.dataset.metricIndiaStatus || "all");
    return;
  }
  if (action === "portfolio-filter") {
    openPortfolioMetric(button.dataset.metricLane || "all", button.dataset.metricScroll || "#portfolio-results");
    return;
  }
  if (action === "watchlist-filter") {
    openWatchlistMetric({
      status: button.dataset.metricWatchlistStatus || "all",
      category: button.dataset.metricWatchlistCategory || "all",
      pendingOnly: button.dataset.metricPendingOnly === "true"
    });
    return;
  }
  if (action === "insight-target") {
    openInsightTarget(
      button.dataset.metricView,
      button.dataset.metricKind || "view",
      button.dataset.metricId || ""
    );
    return;
  }
  if (action === "view-anchor") {
    if (button.dataset.metricLane) state.portfolioFilter = button.dataset.metricLane;
    showView(button.dataset.metricView || "insights");
    if (state.view === "overview") renderPortfolio();
    window.setTimeout(() => {
      const target = $(button.dataset.metricScroll || "main");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 140);
  }
}

function openInsightTarget(view, kind, id) {
  showView(view);
  if (kind === "detail" && id) {
    window.setTimeout(() => openDetail(id), 120);
  }
  if (kind === "followup" && id) {
    window.setTimeout(() => openFollowupDetail(id), 120);
  }
  if (kind === "watchlist" && id) {
    window.setTimeout(() => openWatchlistDetail(id), 120);
  }
}

function showView(view) {
  state.view = view;
  $$(".view").forEach(el => el.classList.toggle("active", el.id === view));
  $$(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  $("#view-title").textContent = viewTitles[view];
  syncPortfolioSearchInputs();
  if (view === "overview") renderPortfolio();
  if (view === "archive") renderArchive();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDetail(id) {
  const t = treatments.find(item => item.id === id);
  $("#detail-content").innerHTML = `
    <div class="detail-hero"><p class="eyebrow">${t.cancer} · ${t.phase}</p><h2>${t.name}</h2><p>${t.company}</p></div>
    <div class="modal-body">
      <div class="detail-kpis">
        <div class="detail-kpi"><span>Headline result</span><strong>${t.headline}</strong></div>
        <div class="detail-kpi"><span>Impact assessment</span><strong>${t.impact}</strong></div>
        <div class="detail-kpi"><span>India status</span><strong>${t.indiaLabel}</strong></div>
      </div>
      ${detailSection("Clinical advancement", t.benefit)}
      ${detailSection("Safety and treatment burden", t.safety)}
      ${detailSection("Cost and India access", `${t.indiaPrice} ${t.indiaCaveat}`)}
      ${detailSection("Why caution remains", t.limitations)}
      <a class="source-link" href="${t.source}" target="_blank" rel="noreferrer">Open ${t.sourceLabel || "primary study"} ↗</a>
    </div>`;
  $("#detail-dialog").showModal();
}

function detailSection(title, text) {
  return `<section class="detail-section"><h3>${title}</h3><p>${text}</p></section>`;
}

function toggleCompare(id) {
  if (state.selected.includes(id)) {
    state.selected = state.selected.filter(item => item !== id);
  } else if (state.selected.length < 3) {
    state.selected.push(id);
  }
  renderTreatments();
  updateCompareTray();
}

function updateCompareTray() {
  const selected = state.selected.map(id => treatments.find(t => t.id === id));
  $("#compare-tray").classList.toggle("visible", selected.length > 0);
  $("#compare-names").textContent = selected.length ? selected.map(t => t.short).join(" · ") : "Select treatments";
  $("#open-compare").disabled = selected.length < 2;
}

function openComparison() {
  const selected = state.selected.map(id => treatments.find(t => t.id === id));
  const rows = [
    ["Cancer / setting", t => `${t.cancer}<br><span class="price-note">${t.setting}</span>`],
    ["Company", t => t.company],
    ["Evidence", t => t.phase],
    ["Measured result", t => `<strong>${t.headline}</strong><br><span class="price-note">${t.headlineNote}</span>`],
    ["Impact", t => `<span class="pill ${formatImpactClass(t.impactGroup)}">${t.impact}</span>`],
    ["Safety", t => t.safety],
    ["Cost", t => t.cost],
    ["India price", t => t.indiaPrice],
    ["India access", t => `<span class="pill ${t.indiaStatus}">${t.indiaLabel}</span><br><span class="price-note">${t.indiaCaveat}</span>`],
    ["Key limitation", t => t.limitations]
  ];
  $("#compare-content").innerHTML = `
    <div class="modal-header"><p class="eyebrow">Side-by-side assessment</p><h2>Treatment comparison</h2><p>Cross-trial comparisons are directional because populations, endpoints and follow-up differ.</p></div>
    <div class="modal-body table-wrap"><table class="compare-table">
      <thead><tr><th>Parameter</th>${selected.map(t => `<th>${t.short}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([label, render]) => `<tr><td><strong>${label}</strong></td>${selected.map(t => `<td>${render(t)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  $("#compare-dialog").showModal();
}

function handlePortfolioSearchChange(value) {
  state.portfolioSearch = value;
  if (state.portfolioSearch && state.view !== "overview") {
    showView("overview");
  } else {
    renderPortfolio();
  }
}

function bindEvents() {
  document.addEventListener("click", event => {
    const metricButton = event.target.closest("[data-metric-action]");
    const viewButton = event.target.closest("[data-view]");
    const goButton = event.target.closest("[data-go-view]");
    const insightTarget = event.target.closest("[data-insight-view]");
    const detailButton = event.target.closest("[data-detail]");
    const compareButton = event.target.closest("[data-compare]");
    const closeButton = event.target.closest("[data-close-dialog]");
    const followupDetail = event.target.closest("[data-followup-detail]");
    const watchlistDetail = event.target.closest("[data-watchlist-detail]");
    const portfolioSelect = event.target.closest("[data-portfolio-select]");
    const portfolioOpen = event.target.closest("[data-portfolio-open]");
    const editionSelect = event.target.closest("[data-edition-select]");
    const editionRoute = event.target.closest("[data-edition-route-view]");
    if (metricButton) {
      openMetricAction(metricButton);
      return;
    }
    if (editionSelect) {
      showView(editionSelect.dataset.view || "archive");
      openEdition(editionSelect.dataset.editionSelect);
      return;
    }
    if (editionRoute) {
      openInsightTarget(
        editionRoute.dataset.editionRouteView,
        editionRoute.dataset.editionRouteKind || "view",
        editionRoute.dataset.editionRouteId || ""
      );
      return;
    }
    if (insightTarget) {
      openInsightTarget(
        insightTarget.dataset.insightView,
        insightTarget.dataset.insightKind || "view",
        insightTarget.dataset.insightId || ""
      );
      return;
    }
    if (portfolioSelect) {
      state.portfolioActiveId = portfolioSelect.dataset.portfolioSelect;
      renderPortfolio();
      return;
    }
    if (portfolioOpen) {
      openPortfolioRoute(portfolioOpen.dataset.portfolioOpen);
      return;
    }
    if (viewButton) showView(viewButton.dataset.view);
    if (goButton) showView(goButton.dataset.goView);
    if (detailButton) openDetail(detailButton.dataset.detail);
    if (compareButton) toggleCompare(compareButton.dataset.compare);
    if (closeButton) closeButton.closest("dialog").close();
    if (followupDetail) openFollowupDetail(followupDetail.dataset.followupDetail);
    if (watchlistDetail) openWatchlistDetail(watchlistDetail.dataset.watchlistDetail);
  });

  document.addEventListener("dblclick", event => {
    const insightTarget = event.target.closest("[data-insight-view]");
    if (!insightTarget) return;
    openInsightTarget(
      insightTarget.dataset.insightView,
      insightTarget.dataset.insightKind || "view",
      insightTarget.dataset.insightId || ""
    );
  });

  ["#cancer-filter", "#phase-filter", "#impact-filter", "#india-filter"].forEach(selector => {
    $(selector).addEventListener("change", renderTreatments);
  });
  $("#clear-filters").addEventListener("click", () => {
    ["#cancer-filter", "#phase-filter", "#impact-filter", "#india-filter"].forEach(selector => $(selector).value = "all");
    renderTreatments();
  });
  ["#portfolio-search", "#global-search"].forEach(selector => {
    ["input", "change", "search"].forEach(eventName => {
      $(selector).addEventListener(eventName, event => {
        handlePortfolioSearchChange(event.target.value);
      });
    });
  });
  $("#portfolio-type-filter").addEventListener("change", event => {
    state.portfolioFilter = event.target.value;
    renderPortfolio();
  });
  $("#clear-portfolio-search").addEventListener("click", () => {
    state.portfolioSearch = "";
    state.portfolioFilter = "all";
    renderPortfolio();
  });
  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); $("#global-search").focus();
    }
    if (event.key === "Escape") $$("dialog[open]").forEach(dialog => dialog.close());
  });
  $("#clear-compare").addEventListener("click", () => { state.selected = []; renderTreatments(); updateCompareTray(); });
  $("#open-compare").addEventListener("click", openComparison);
  $("#methodology-button").addEventListener("click", () => $("#methodology-dialog").showModal());
  ["#followup-status-filter", "#followup-cancer-filter"].forEach(selector => {
    $(selector).addEventListener("change", renderFollowup);
  });
  $("#reset-followup").addEventListener("click", () => {
    $("#followup-status-filter").value = "all";
    $("#followup-cancer-filter").value = "all";
    renderFollowup();
  });
  ["#watchlist-type-filter", "#watchlist-status-filter"].forEach(selector => {
    $(selector).addEventListener("change", () => {
      state.watchlistPendingOnly = false;
      renderWatchlist();
    });
  });
  $("#reset-watchlist").addEventListener("click", () => {
    state.watchlistPendingOnly = false;
    $("#watchlist-type-filter").value = "all";
    $("#watchlist-status-filter").value = "all";
    renderWatchlist();
  });
}

function init() {
  renderInsights();
  renderMetrics();
  renderPortfolio();
  renderArchive();
  hydratePortfolioBackend();
  hydrateEditionArchive();
  populateFilters();
  renderTreatments();
  renderIndiaTable();
  renderSystems();
  renderFollowupMetrics();
  populateFollowupFilters();
  renderFollowup();
  renderFollowupLessons();
  renderWatchlistMetrics();
  populateWatchlistFilters();
  renderWatchlist();
  $("#rating-guide").innerHTML = ratings.map(([title, text]) => `<div class="rating-item"><h3>${title}</h3><p>${text}</p></div>`).join("");
  bindEvents();
  enableAutomaticReleaseRefresh();
}

init();
