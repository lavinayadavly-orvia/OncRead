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
    id: "intismeran", short: "Intismeran", name: "Personalized mRNA Neoantigen Therapy", cancer: "Melanoma",
    setting: "Resected high-risk", company: "Moderna + Merck / MSD", phase: "Phase IIb",
    impact: "Potentially transformative", impactGroup: "high", maturity: 73, impactScore: 96,
    headline: "+19.7 points 5-year RFS", headlineNote: "68.8% vs 49.1%; RFS HR 0.51",
    benefit: "A large and durable recurrence-free survival signal from patient-specific tumor neoantigens. Five-year distant metastasis-free survival also favored combination treatment.",
    safety: "No new signal reported; injection-related symptoms and pembrolizumab immune toxicity remain relevant. Tissue adequacy and manufacturing delay add nonmedical burden.",
    cost: "Unknown; likely very high initially", indiaPrice: "No commercial price.",
    indiaStatus: "not-launched", indiaLabel: "Not launched", launch: "No announced date; late-2020s at earliest is an inference",
    indiaCaveat: "Requires positive phase III results, global filing, individualized manufacturing validation and CDSCO review.",
    limitations: "Phase IIb sample size, small control group and nondefinitive overall survival. Phase III confirmation is ongoing.",
    source: "https://ascopubs.org/doi/10.1200/JCO-26-00835"
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
    company: "AstraZeneca", status: "review", statusLabel: "Regulatory divergence",
    ascoSignal: "ctDNA-guided switch at emergent ESR1 mutation improved median PFS from 9.2 to 16.0 months.",
    currentMilestone: "EU CHMP positive · 21 May 2026; US review unresolved",
    assessment: "Europe's CHMP recommended approval, while FDA convened ODAC over uncertainty about whether switching before radiographic progression provides clinically meaningful benefit. No final US approval was verified by 9 June 2026.",
    conferenceSource: "https://ascopost.com/issues/july-25-2025/plenary-highlights-across-tumor-types-reflect-advances-in-research-improvements-in-care-and-changes-in-practice/",
    currentSource: "https://www.ema.europa.eu/en/medicines/human/EPAR/etcamah",
    secondarySource: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/april-30-2026-meeting-oncologic-drugs-advisory-committee-meeting-announcement-04302026"
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
    safety: "Oral SERD safety must be considered alongside long-term CDK4/6 inhibition; final label-specific safety is pending.",
    us: "NDA under review; FDA ODAC discussed uncertainty on 30 April 2026. No final approval verified by 9 June 2026.", eu: "CHMP positive opinion on 21 May 2026; European Commission decision pending at review date.", india: "No verified approval or launch.",
    evidenceDelta: "Strong PFS signal produced regulatory divergence rather than a uniform global conclusion.", adoption: "Requires serial ctDNA testing, validated ESR1 assay access and proof that pre-progression switching adds patient-relevant value.", nextDecision: "US FDA decision and European Commission authorization.", confidence: "High for trial and committee status; final decisions pending."
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
  editionArchive: null,
  editionDetails: {},
  activeEditionId: ""
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
  { match: /gedatolisib|revtorpyk/i, aliases: ["Revtorpyk"] },
  { match: /enfortumab vedotin|padcev/i, aliases: ["Padcev"] },
  { match: /durvalumab/i, aliases: ["Imfinzi"] },
  { match: /atezolizumab/i, aliases: ["Tecentriq"] },
  { match: /cemiplimab/i, aliases: ["Libtayo"] },
  { match: /isatuximab|sarclisa/i, aliases: ["Sarclisa", "Sarclisa Escena"] },
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
  { match: /camizestrant/i, aliases: ["AZD9833"] },
  { match: /can-2409/i, aliases: ["aglatimagene besadenovec"] },
  { match: /intismeran autogene cevumeran|personalized mrna neoantigen therapy/i, aliases: ["mRNA-4157", "V940"] }
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
    [sourceCount, sourceCardLabel, sourceCardNote, "coral", sourceCardIcon, { action: state.backendStatus === "ready" || state.backendStatus === "snapshot" ? "view-anchor" : "portfolio-filter", view: "overview", lane: "watchlist", scroll: state.backendStatus === "ready" || state.backendStatus === "snapshot" ? "#portfolio-backend-state" : "#portfolio-results", title: "Open the source-coverage context for the portfolio" }]
  ].map(([value, label, note, tone, icon, options]) => metricCard(value, label, note, tone, icon, options)).join("");
  $("#portfolio-count").textContent = entries.length;
  $("#portfolio-result-count").textContent = data.length;
  const backendState = $("#portfolio-backend-state");
  if (backendState) {
    backendState.textContent = state.backendStatus === "ready"
      ? `Verified source coverage · ${state.backendSourceSummary?.sourcesChecked || 0} sources checked`
      : state.backendStatus === "snapshot"
        ? `Verified source record set · ${state.backendSourceSummary?.sourcesChecked || 0} source records attached`
      : state.backendStatus === "error"
        ? "Verified source feed unavailable · using local records"
        : "Refreshing verified source coverage";
  }

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

function formatDisplayDate(dateValue) {
  if (!dateValue) return "Not dated";
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.valueOf())) return dateValue;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function formatCompactDate(dateValue) {
  if (!dateValue) return "Live";
  const parsed = new Date(dateValue);
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
      ${metricLine("FDA-approved follow-up programs", selected.metrics.followupApprovals)}
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
  const newestTreatmentApproval = treatments
    .filter(item => item.eventDate)
    .sort((a, b) => (Date.parse(b.eventDate) || 0) - (Date.parse(a.eventDate) || 0))[0];
  const routeApproval = currentDetail?.routeSummary?.approval || null;
  const featuredRoute = routeApproval?.route || {
    view: "treatments",
    kind: "detail",
    targetId: newestTreatmentApproval?.id || "tucatinib"
  };
  const featuredTreatment = treatments.find(item => item.id === featuredRoute.targetId) || newestTreatmentApproval || treatments[0];
  const featuredHeadline = currentDetail?.headlines?.[0] || null;
  const featuredLabel = routeApproval?.title || featuredTreatment.name;
  const featuredNote = routeApproval?.subtitle || featuredTreatment.launch;
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
  const featuredDecision = featuredTreatment.id === "tregzi"
    ? "Whether transplant programs should treat this GVHD-reducing graft platform as a real referral, procurement, and center-readiness decision in matched-donor myeloablative HSCT."
    : "Whether the newest verified change is strong enough to alter treatment planning rather than remain a tracked signal.";
  const featuredConstraint = featuredTreatment.indiaCaveat || featuredTreatment.limitations;

  const cards = [
    {
      tone: "teal",
      eyebrow: "Newest verified move",
      title: featuredTreatment.name,
      summary: featuredHeadline?.summary || featuredTreatment.benefit,
      signal: `${featuredTreatment.headline} · ${featuredTreatment.headlineNote}`,
      why: featuredTreatment.benefit,
      decision: featuredDecision,
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
      decision: regulatoryLead.nextDecision,
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
      decision: "Whether the signal is actionable locally or remains an access-constrained imported precision option.",
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
      decision: cautionLead.decisionImpact,
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

  $("#briefing-headline").textContent = featuredHeadline?.title
    || `${featuredLabel} leads this morning's oncology briefing`;
  $("#briefing-summary").textContent = currentEdition?.summary
    || "Start with the move most likely to change care today, the decision still under review, and the signal that still needs restraint.";
  $("#briefing-date-label").textContent = currentEdition?.preparedLabel || "Current briefing";
  const sidebarPreparedDate = $("#sidebar-prepared-date");
  if (sidebarPreparedDate) {
    sidebarPreparedDate.textContent = currentEdition?.preparedLabel || "Prepared date loading";
  }
  $("#briefing-pulse-summary").textContent = currentMonth
    ? `${currentMonth.monthLabel} stays visible as the monthly headline view, and ${currentEdition?.editionLabel || "today's edition"} remains available as the dated weekly briefing.`
    : "Current edition continuity and monthly headline retention will appear here once the archive is loaded.";
  $("#briefing-tag-row").innerHTML = [
    ["Live edition", currentEdition?.editionLabel || "Current state"],
    ["Lead headline", featuredLabel],
    ["Decision line", regulatoryLead.program],
    ["Caution line", cautionLead.title]
  ].map(([label, value]) => `<span class="briefing-tag"><strong>${label}</strong>${value}</span>`).join("");

  const primaryAction = $("#briefing-primary-action");
  if (primaryAction) {
    primaryAction.dataset.insightView = featuredRoute.view;
    primaryAction.dataset.insightKind = featuredRoute.kind;
    primaryAction.dataset.insightId = featuredRoute.targetId || "";
    primaryAction.textContent = `Open ${featuredTreatment?.name || featuredHeadline?.title || featuredLabel || "lead dossier"}`;
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
          <strong>${featuredTreatment.benefit}</strong>
        </div>
        <div>
          <span>Decision it can change</span>
          <strong>${featuredDecision}</strong>
        </div>
        <div>
          <span>What still blocks confidence</span>
          <strong>${featuredConstraint}</strong>
        </div>
      </div>
      <div class="briefing-feature-foot">
        <em>${featuredTreatment.headline} · ${featuredTreatment.headlineNote}</em>
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
    [formatCompactDate(featuredTreatment.eventDate), "Newest dated move", featuredLabel, "", "NEW", { action: "insight-target", view: featuredRoute.view, kind: featuredRoute.kind, id: featuredRoute.targetId, title: `Open the latest move: ${featuredLabel}` }],
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
          <span>Decision this could change</span>
          <p>${card.decision}</p>
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
      <td class="therapy-cell"><strong>${t.short}</strong><span>${t.company}</span></td>
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
      <td class="therapy-cell"><strong>${t.short}</strong><span>${t.company}</span></td>
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
    [counts.approved || 0, "Reached FDA approval", "Verified regimen-specific authorization", "", "✓", { action: "followup-filter", followupStatus: "approved", view: "followup", title: "Open the FDA-approved ASCO 2025 follow-up dossiers" }],
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
    ["01", "Six programs reached FDA approval", "KEYNOTE-689, MATTERHORN, DESTINY-Breast09, ASCENT-04, C-POST and AMPLITUDE moved from ASCO evidence to regimen-specific US authorization."],
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
    conference: ["#3f70d8", "#eaf0ff"],
    negative: ["#d15f49", "#fff0eb"],
    systems: ["#007f7b", "#dff3ef"]
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
}

init();
