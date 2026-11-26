---
issuer_id: blco-1860742
module_id: CP-0
analysis_date: 2026-11-18
---

## Request

Bausch & Lomb Corp (reporting as Bausch + Lomb Corporation and its subsidiaries; issuer id blco-1860742), as of 2026-11-18, credit snapshot pathway. Scope: whether the five supplied filings can support the requested modules (Source readiness, Financial foundation, Business & governance and Fundamental credit) and what the wider pathway still lacks. The run settings are context, not evidence.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_blco_blco-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-19 | d1a818e6dae62c0569001be3adf70a8440ab09b135fbd8a8415d916f347ac944 | Audited statements for 2022 to 2024, year-end 2024 debt table and ratings, and the check of 2024 comparatives against the 2025 annual report |
| 10-K_2025-12-31_blco_blco-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-18 | f9be8b58ba08e3778eb7929adfd8e91c7937b14763b1612985a5ea40049fae96 | Audited statements for 2023 to 2025, year-end 2025 debt table, leases, pensions, commitments, market-risk sensitivity and the business description |
| 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-29 | b5fd820786b285fad91b4bbfc64c3e7e4ef0ef85e352ca3af624a2c65416917e | Unaudited first-quarter 2026 statements and the location of debt, covenant, liquidity and ratings text |
| 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-29 | 756a1d9122dd4fe39810dfb8ff6416d6377e3c912267a2effad38ff1ca21dc42 | Unaudited second-quarter and six-month 2026 statements and the location of debt, covenant, liquidity and ratings text |
| 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-28 | 846d19ab6fa76521b0c1971958df2b6423a7a62d000b6bf115cb56f37aff87b9 | Latest statements, debt table, maturities, covenant text, liquidity, ratings, events after the quarter and all arithmetic checks |

Supplied handoffs from other modules: none; this module is the entry point of the run.

## Findings

### Bottom line

The sources support a creditor view of Bausch + Lomb's debt, liquidity and operating results to 2026-09-30, but not of covenant headroom or security terms, so leverage must be computed from the statements and legal conclusions stay conditional.
Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 71

The debt table, the maturity schedule and the balance sheet reconcile, with USD 5,065 million of principal outstanding at 2026-09-30. The newest filing is dated 2026-10-28, 21 days before the as-of date, so later events are not established. The three requested modules are ready with limitations.
Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–38; calculation C1; calculation C2; calculation C4; calculation C10

### Key findings

- Coverage is sufficient for the requested work. Two audited annual reports and three unaudited quarterly reports of the issuer's own consolidated group give income statements and cash flows for 2022 to 2025 and for the nine months to 2026-09-30 with 2025 comparatives, so the last twelve months can be built from the filings and the fourth quarter of 2025 by subtraction.
  Basis: 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 225–227; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–237; 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl, page 15; 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl, page 15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17
- Debt and liquidity inputs are printed in full in the third-quarter report: a table by instrument showing USD 5,065 million of principal, a maturity schedule that sums to the same figure, and a revolver with USD 666 million of availability after USD 100 million of borrowings and USD 34 million of letters of credit.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36; calculation C1; calculation C2; calculation C5
- The reporting entity is the issuer's own consolidated group, not its parent. Bausch Health holds about 87% of the shares, but the statements supplied are the issuer's, so parent-level debt and support are not established by these sources.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 24
- Leverage and covenant headroom cannot be taken from the issuer. No filing prints a figure for EBITDA, adjusted EBITDA or free cash flow, the only adjusted measure being constant-currency revenue, and the revolver's springing first lien net leverage test is printed as thresholds of 5.75x stepping down to 5.00x that apply only when loans exceed 35% of commitments, with compliance stated but no ratio.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 71; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 39
- Claims outside the debt figure are only partly current. Operating lease liabilities of USD 163 million at 2025-12-31 sit outside the balance-sheet debt lines, USD 34 million of failed sale-leaseback obligations sit inside them and had grown to USD 78 million by 2026-09-30, and capital commitments were about USD 128 million at 2025-12-31. The quarterly reports carry no lease or pension note, so these items are nine months older than the debt table. A receivables sale arrangement raised USD 26 million in the nine months and nothing was outstanding at 2026-09-30.
  Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 319; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 37–38; calculation C4; calculation C7; calculation C8
- The third-quarter report discloses events after the period that its statements do not reflect: an acquisition agreement with about USD 85 million of upfront cash expected at closing, and a chief executive change with a lump-sum payment of about USD 75 million. It also states fourth-quarter 2026 cash needs, including about USD 130 million of interest. Nothing dated after 2026-10-28 is supplied, so the 21 days to the as-of date are not covered.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90; calculation C10
- The sources agree wherever they overlap. The 2024 comparatives in the 2025 annual report equal the 2024 annual report, and the December 2025 comparatives in the third-quarter report equal the 2025 annual report, so no restatement of totals or conflict was found. The differences found are presentation only: the debt line now reads "and other financial liabilities", a discounts-and-allowances line is folded into other accrued liabilities, and acquisition-related contingent consideration is split out of the cash-flow Other line with the subtotals unchanged.
  Basis: 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 225–227; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–237; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 280; calculation C6
- Legal and market inputs for structure and pricing are missing. No executed credit agreement or indenture was supplied, and the filings only summarise the financing documents. They give an aggregate fair value of debt of USD 5,091 million at 2026-09-30 and name an equity peer group, but no instrument-level quote, valuation or peer financials, so Legal & covenants, Security selection and Recovery & fulcrum would be conditional on those documents.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 30; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 157
- Ratings and outlooks of three agencies are printed as of 2026-10-28 although the run supplies none; the Moody's row shows one rating only, so whether it is the corporate or the secured rating is not established.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 88

### Contrary evidence and what would change the view

The strongest case against calling the requested work ready is that the missing items are the ones a credit committee relies on: the covenant ratio with its definition of earnings, and the lien, guarantee and call terms in the executed debt documents. The revolver test springs only when loans exceed 35% of the USD 800 million commitments, so the test binds only once borrowings pass that level, but the definition of earnings decides when that point is reached, and a filing's summary can omit baskets and definitions. Any covenant or security conclusion should therefore stay conditional.
Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37; calculation C5

The view would improve to ready for Legal & covenants and Covenant capacity if the credit agreement and the indentures were supplied, and for Earnings changes and Earnings quality if a third-quarter earnings release or lender presentation printing adjusted EBITDA were supplied. It would weaken if a filing dated after 2026-10-28 restated figures, closed the acquisition on different terms or changed the revolver.
Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37

### Limitations

- Page references are positions in the supplied text extractions, not printed page numbers, and the extractions flatten tables into text lines, so column alignment can be lost; the Moody's row of the ratings table is the instance found.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 88
- The checks made here are tie-outs of printed figures and searches of the five documents for terms such as EBITDA, free cash flow, supplier finance and guidance; an item found in no search is reported as not found, not as nonexistent.
- The annual reports are audited and the quarterly reports are unaudited, so figures from the two kinds of document carry different assurance.
  Basis: 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 231–232; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 14
- No document later than 2026-10-28 was supplied, so the assessment cannot reflect anything from 2026-10-28 to 2026-11-18.
  Basis: 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 105

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-19 | day | 2025-02-19 | Annual report on Form 10-K for fiscal 2024 signed | Historical — "Date: February 19, 2025" | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 219 | Audited 2022 to 2024 statements and the year-end 2024 debt table; superseded for year-end 2025 by the next annual report. |
| 2026-02-18 | day | 2026-02-18 | Annual report on Form 10-K for fiscal 2025 signed | Historical — "Date: February 18, 2026" | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 230 | Latest audited statements and the only source for lease, pension and commitment notes at 2025-12-31. |
| 2026-04-29 | day | 2026-04-29 | Quarterly report on Form 10-Q for the first quarter of 2026 signed | Historical — "Date: April 29, 2026" | 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl, page 100 | Unaudited first-quarter 2026 statements; supports the quarterly series. |
| 2026-07-29 | day | 2026-07-29 | Quarterly report on Form 10-Q for the second quarter of 2026 signed | Historical — "Date: July 29, 2026" | 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl, page 104 | Unaudited second-quarter and six-month 2026 statements; supports the quarterly series. |
| 2026-09 | month | 2026-10-28 | Warning letter received from the FDA about the Tampa, Florida manufacturing facility; the company states that the letter requires no stop to manufacturing and no recall | Historical — "in September 2026, we received a warning letter from the FDA" | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 64–65 | A regulatory action at a manufacturing site; the filing states no amount, so any cash-flow effect is not established. |
| 2026-10-08 | day | 2026-10-28 | Agreement entered into to acquire certain ophthalmic surgical manufacturing businesses for about USD 85 million of upfront cash due at closing | Historical — "entered into an agreement to acquire" | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26 | Cash use after the quarter end that the 2026-09-30 statements do not reflect. |
| 2026-10-12 | day | 2026-10-28 | Thomas J. Appio appointed interim Chief Executive Officer; the former chief executive departs under a separation agreement dated 2026-10-11 with a lump-sum cash payment of about USD 75 million | Historical — "effective as of the Transition Date" | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56 | Leadership change and a cash payment that the 2026-09-30 statements do not reflect. |
| 2026-10-28 | day | 2026-10-28 | Quarterly report on Form 10-Q for the third quarter of 2026 signed | Historical — "Date: October 28, 2026" | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 105 | Latest filing in the set, 21 days before the as-of date; nothing later is supplied. |
| 2026-Q4 | quarter | 2026-10-28 | Expected closing of the surgical manufacturing acquisition | Scheduled — "expected to close during the fourth quarter of 2026" | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26 | The upfront cash of about USD 85 million falls due at closing, within the fourth-quarter cash needs the filing sets out. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 10 |
| Calculated | 6 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 1 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 5 |

### T1 - Input gate

| Field | Value | Source |
|---|---|---|
| Objective | The credit snapshot pathway's use case: a creditor view of the issuer's financial foundation, business and governance, and fundamental credit, with later modules for liquidity, covenants and security selection | Not supplied: the run settings state no objective, so the pathway's use case is recorded |
| Issuer and perimeter | Bausch & Lomb Corp, registered as Bausch + Lomb Corporation, a Canadian company consolidated with its subsidiaries; shares listed as BLCO on the New York and Toronto exchanges; reporting currency US dollars | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 3 |
| As-of date and cutoff | 2026-11-18 for both | Not supplied: set by the run settings, not by a filing |
| Current and prior period | Current period Q3 2026 (quarter ended 2026-09-30); prior period fiscal 2025 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 1; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 1 |
| Requested modules | Source readiness, Financial foundation, Business & governance, Fundamental credit | Not supplied: set by the run, not by a filing |
| Issuer documents | Five filings: annual reports for fiscal 2024 and fiscal 2025 and quarterly reports for the first, second and third quarters of 2026; no lender presentation, earnings release, current report, credit agreement or indenture | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl; 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl; 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl |
| Ratings | None in the run settings; the third-quarter report prints ratings and outlooks of three agencies as of 2026-10-28 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 88 |
| Deal terms, quotes, valuation and peers | None supplied in the run settings, left blank and not treated as zero; the filings give an aggregate fair value of long-term debt and name an equity performance peer group, but no instrument-level quotes, valuation or peer financials | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 30; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 157 |
| Portfolio, prior case and management bridge | None supplied; fund limits will be stated as not supplied | Not supplied: the run settings declare none |
| Legal documents | None declared; the filings summarise the credit agreement and notes only | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–37 |
| Research questions | None supplied | Not supplied: the run settings list none |
| Gate result | Source gate partial: ready with limitations for the requested modules; conditional for modules that need executed debt documents or market data | Not supplied: a result of this assessment, not a printed figure |

### T2 - Source register

| Source | Document | Period covered | Authority | Assurance | Representation in use | Perimeter and currency | Limitation |
|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_blco_blco-20241231.htm.jsonl | Annual report on Form 10-K, fiscal 2024 | Balance sheets at 2024-12-31 and 2023-12-31; income statements and cash flows for 2022 to 2024 | Tier 1, primary filing | Audited; auditor's report supplied | Text extraction in 314 numbered chunks | Bausch + Lomb Corporation and subsidiaries, consolidated; US dollars | Directors and pay incorporated by reference to a proxy statement not supplied; superseded by the next annual report for the latest year-end |
| 10-K_2025-12-31_blco_blco-20251231.htm.jsonl | Annual report on Form 10-K, fiscal 2025 | Balance sheets at 2025-12-31 and 2024-12-31; income statements and cash flows for 2023 to 2025 | Tier 1, primary filing | Audited; auditor's report supplied | Text extraction in 323 numbered chunks | Bausch + Lomb Corporation and subsidiaries, consolidated; US dollars | Directors and pay incorporated by reference to a proxy statement not supplied; leases, pensions and commitments are dated 2025-12-31 |
| 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl | Quarterly report on Form 10-Q, first quarter 2026 | Balance sheet at 2026-03-31; three months to 2026-03-31 with 2025 comparatives | Tier 1, primary filing | Unaudited | Text extraction in 101 numbered chunks | Bausch + Lomb Corporation and subsidiaries, consolidated; US dollars | Superseded for debt and liquidity by the third-quarter report; no lease or pension note |
| 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl | Quarterly report on Form 10-Q, second quarter 2026 | Balance sheet at 2026-06-30; three and six months to 2026-06-30 with 2025 comparatives | Tier 1, primary filing | Unaudited | Text extraction in 104 numbered chunks | Bausch + Lomb Corporation and subsidiaries, consolidated; US dollars | Superseded for debt and liquidity by the third-quarter report; no lease or pension note |
| 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | Quarterly report on Form 10-Q, third quarter 2026 | Balance sheet at 2026-09-30; three and nine months to 2026-09-30 with 2025 comparatives | Tier 1, primary filing | Unaudited | Text extraction in 105 numbered chunks | Bausch + Lomb Corporation and subsidiaries, consolidated; US dollars | Latest document in the set; no lease or pension note; market-risk text refers back to the annual report |

### P3 - Input inventory

| Item | Source | Form | Period end | Signed | Chunks | Bytes | Pinned sha256 | Original filing sha256 recited in the extraction | Version relationship |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl | 10-K | 2024-12-31 | 2025-02-19 | 314 | 765,060 | d1a818e6dae62c0569001be3adf70a8440ab09b135fbd8a8415d916f347ac944 | c615710928dcf2ae099c146b788b22487b71ae4ec6aeff871c880e1a2304fe9e | Earlier annual report; its 2024 figures are repeated as comparatives in the next annual report; no amendment supplied |
| 2 | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl | 10-K | 2025-12-31 | 2026-02-18 | 323 | 777,729 | f9be8b58ba08e3778eb7929adfd8e91c7937b14763b1612985a5ea40049fae96 | ade4c1fdb61e3fc7f72cc323d3b3f4f1789a522286ec449155c50fa593fe2521 | Current annual report; no amendment supplied |
| 3 | 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl | 10-Q | 2026-03-31 | 2026-04-29 | 101 | 244,414 | b5fd820786b285fad91b4bbfc64c3e7e4ef0ef85e352ca3af624a2c65416917e | 86d798455f45440a96afe8ac7f0bc406b4fcd0097cdf63c8ca70110c79496eaf | First quarterly report of 2026; no amendment supplied |
| 4 | 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl | 10-Q | 2026-06-30 | 2026-07-29 | 104 | 260,210 | 756a1d9122dd4fe39810dfb8ff6416d6377e3c912267a2effad38ff1ca21dc42 | 85633f4efa523fde0d2d15076e29fb940fcf8ed88eb7ccb43810359e7085140c | Second quarterly report of 2026; no amendment supplied |
| 5 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl | 10-Q | 2026-09-30 | 2026-10-28 | 105 | 269,816 | 846d19ab6fa76521b0c1971958df2b6423a7a62d000b6bf115cb56f37aff87b9 | 799efc87ddc9a62a52207f3528d307aef4130bc4b33f75bfb67d1ac4993655f5 | Third quarterly report of 2026 and the latest document; no amendment supplied |

### T4 - Content-to-module map

| Module | Disposition | Readiness | Evidence located | Limitation | Source |
|---|---|---|---|---|---|
| CP-1 Financial foundation | Recommended; requested in this run | READY_WITH_LIMITATIONS | Income statements, balance sheets and cash flows for 2022 to 2025 and nine months 2026; debt table, maturities and covenant text; segment note | No issuer-reported EBITDA; leases, pensions and commitments dated 2025-12-31; fourth quarter 2025 only by subtraction | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 225–227; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–237; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 280–287; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–17; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 54–56 |
| CP-1A Business & governance | Recommended; requested in this run | READY_WITH_LIMITATIONS | Business description and risk factors in the annual report; ownership and agreements with Bausch Health holding about 87%; legal proceedings; events after the period | Directors, pay and ownership detail incorporated by reference to a proxy statement not supplied | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 17–56; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 222; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 24–25; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 43–54; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56 |
| CP-1B Earnings changes | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Three-month and nine-month results against the prior year by segment | No earnings release, presentation or management guidance found | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 70–83 |
| CP-1C Peer benchmark | Conditional; not requested in this run | CONDITIONAL | Names of the fifteen companies in the equity performance peer group | No credit peer set, peer financials or multiples supplied | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 157 |
| CP-1D Earnings quality | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Cash-flow adjustments, segment profit reconciliation, and other expense detail covering restructuring, litigation and acquisition items | The issuer defines no adjusted EBITDA, so add-backs are not reconciled by the issuer | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 55–56; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 81 |
| CP-2 Fundamental credit | Recommended; requested in this run | READY_WITH_LIMITATIONS | Management's discussion of results, liquidity and near-term cash needs, read with the Financial foundation and Business & governance outputs | Inherits the limits of both modules | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 57–62; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 83–90 |
| CP-2A Downside | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Baseline statements, interest cost and maturity schedule | No stress assumptions in the run settings, so the method's safe default applies | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–17; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36 |
| CP-2D Liquidity | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Cash and restricted cash, revolver commitments, borrowings and letters of credit, maturity schedule, receivables sale arrangement, fourth-quarter 2026 cash needs | No cash forecast beyond 2026-12-31 | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 37–38; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90 |
| CP-2E Rates, FX & hedging | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Variable and fixed debt split and the 100 bp sensitivity at 2025-12-31; cross-currency swaps and foreign exchange contracts at 2026-09-30; facility rate terms | Sensitivity not updated at 2026-09-30 | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 219; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 28–29; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 34–35; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 102 |
| CP-2G Forward credit model | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Historical statements for drivers; capital expenditure, interest and amortization needs for the fourth quarter of 2026 | No management guidance or case supplied | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–237; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 15–17; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90 |
| CP-2H Ratings & triggers | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Ratings and outlooks of three agencies at 2026-10-28; revolver margin tied to total net leverage | Moody's row shows one rating only; rating triggers in executed documents not supplied | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 34; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 88 |
| CP-3 Security selection | Conditional; not requested in this run | CONDITIONAL | Summaries of the facilities and secured notes; aggregate fair value of long-term debt | Executed terms and instrument-level prices not supplied | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 30; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–37 |
| CP-3C Refinancing & LME | Recommended; not requested in this run | READY_WITH_LIMITATIONS | Maturity schedule, amendments from 2023 to 2026, redemption terms of the secured notes | No market prices and no indenture text | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–36; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 191–194 |
| CP-3D Market-implied risk | Conditional; not requested in this run | CONDITIONAL | Aggregate fair value of long-term debt of USD 5,091 million at 2026-09-30 and USD 5,201 million at 2025-12-31, estimated from quoted prices for the same or similar debt | No instrument-level quotes, spreads or yields supplied | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 30 |
| CP-4 Legal & covenants | Conditional; not requested in this run | CONDITIONAL | Covenant summary and compliance statement | Executed credit agreement and indentures not supplied; the module stops at its own gate without them | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 289–290 |
| CP-4C Recovery & fulcrum | Conditional; not requested in this run | CONDITIONAL | Statement that the facilities are secured by substantially all assets of the issuer and its material subsidiaries; guarantee and ranking description of the notes | No collateral schedule, guarantor list, valuation or intercreditor terms | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 34; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 191–194 |
| CP-5 Evidence validation | Recommended after the analytical modules; not requested in this run | READY | Audits earlier module outputs against the filings already listed | None of its own | Not supplied: it reads module outputs and the sources already listed |
| CP-6 Committee decision | Recommended after the analytical modules; not requested in this run | READY_WITH_LIMITATIONS | Reads module outputs | No portfolio or fund limits supplied; they are stated as not supplied | Not supplied: the run settings declare no portfolio |
| CP-8 Changes since the last run | Inapplicable | Not applicable | None | First run of this pathway for the issuer, so there is no earlier run to compare | Not supplied: no earlier run exists |
| CP-L10 Short credit snapshot | Inapplicable | Not applicable | None | Belongs to a different pathway from the credit snapshot | Not supplied: not a module of this pathway |
| CP-DR Research questions | Inapplicable in this run | Not applicable | None | No research questions in the run settings; the missing documents in the gaps are the candidate questions | Not supplied: the run settings list no research questions |

### T6 - Evidence trace

| Claim ID | Claim | Lineage class | Check made | Source |
|---|---|---|---|---|
| E1 | The perimeter is Bausch + Lomb Corporation and its subsidiaries, consolidated, in US dollars; the parent holds about 87% of the shares (310,449,643 shares at 2026-10-21) | Directly Sourced | Read the introductory note, the business note and the related-party note | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 24 |
| E2 | Five filings supplied, two annual and three quarterly; the newest was signed 2026-10-28 | Directly Sourced | Read each signature page | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, page 219; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 230; 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl, page 100; 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl, page 104; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 105 |
| E3 | Principal outstanding at 2026-09-30 is USD 5,065 million across five lines | Calculated | Footed the instrument table (C1) | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32 |
| E4 | The maturity schedule sums to the same USD 5,065 million, with USD 7 million due in the rest of 2026, USD 28 million in 2027 and USD 1,440 million in 2028; nothing falls due before 2028 except term-loan amortization, and USD 3,434 million falls in 2031 | Calculated | Footed the schedule (C2) | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36 |
| E5 | The balance-sheet debt lines equal the table's carrying value plus USD 78 million of other financial liabilities | Calculated | Compared the lines (C3, C4) | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38 |
| E6 | Revolver availability is USD 666 million after USD 100 million of borrowings and USD 34 million of letters of credit on USD 800 million of commitments | Calculated | Subtracted (C5) | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34 |
| E7 | The year-end 2025 debt table is identical in the 2025 annual report and the third-quarter comparatives, at USD 5,107 million of principal | Calculated | Footed both and compared (C6) | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 280; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32 |
| E8 | The revolver covenant is tested only if loans exceed 35% of commitments, at a maximum first lien net leverage of 5.75:1.00 through the eighth full fiscal quarter after the June 2025 amendment, 5.50:1.00 for the ninth to twelfth, 5.25:1.00 for the thirteenth to sixteenth and 5.00:1.00 after; compliance is stated and no ratio is printed | Directly Sourced | Read the covenant text | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37 |
| E9 | No EBITDA, adjusted EBITDA or free cash flow figure is printed by the issuer in any of the five documents; EBITDA appears only as a share-award target, and the only non-GAAP measure is constant-currency revenue | Analyst Inference | Searched all five documents for EBITDA, free cash flow and non-GAAP | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 71; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 178; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 299 |
| E10 | Operating lease liabilities of USD 163 million sit outside the balance-sheet debt lines and USD 34 million of failed sale-leaseback obligations sit inside them at 2025-12-31; capital commitments are about USD 128 million; the quarterly reports carry no lease or pension note | Directly Sourced | Split the lease table (C7, C8); searched the quarterly reports for lease and pension notes | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 319; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38 |
| E11 | A receivables sale arrangement entered into on 2026-01-09 raised USD 26 million in the nine months, with nothing outstanding at 2026-09-30 | Directly Sourced | Read the other financing arrangements text | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 37–38 |
| E12 | Events after the period: an acquisition agreement of about USD 85 million upfront and a chief executive change with a lump-sum payment of about USD 75 million, neither in the period statements; a warning letter in September 2026 | Directly Sourced | Read the acquisition, subsequent events and regulatory text | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 56; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 64–65 |
| E13 | Cash needs stated for 2026-10-01 to 2026-12-31: interest about USD 130 million, mandatory amortization USD 7 million and capital expenditure about USD 60 million | Directly Sourced | Read the near-term cash needs text | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 89–90 |
| E14 | Ratings and outlooks of three agencies are printed as of 2026-10-28; the Moody's row shows one rating only | Directly Sourced | Read the ratings table in all four filings that print it | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 88; 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl, page 87; 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl, page 82; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 194–195 |
| E15 | Comparatives agree: 2024 operating income of USD 162 million, interest expense of USD 399 million, net loss of USD 305 million, total assets of USD 13,469 million and operating cash flow of USD 232 million are the same in both annual reports, and total assets of USD 14,022 million at 2025-12-31 are the same in the 2025 annual report and the third-quarter report; the only change is presentation, with USD 9 million of 2024 contingent consideration moved out of the cash-flow Other line (USD 19 million before, USD 10 million after) | Directly Sourced | Compared the statements line by line | 10-K_2024-12-31_blco_blco-20241231.htm.jsonl, pages 225–227; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–237; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15 |
| E16 | Market-risk sensitivity is dated 2025-12-31: variable debt USD 3,695 million, fixed debt USD 1,412 million and a 100 bp move worth about USD 37 million a year; the third-quarter report refers back to it | Directly Sourced | Read both market-risk sections and footed the debt split (C9) | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 219; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 102 |
| E17 | The last twelve months and the last four quarters can be built from the filings, the fourth quarter of 2025 by subtraction | Analyst Inference | Confirmed the statements and comparatives are present in each filing | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 235–237; 10-Q_2026-03-31_blco_blco-20260331.htm.jsonl, page 15; 10-Q_2026-06-30_blco_blco-20260630.htm.jsonl, page 15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 15–17 |
| E18 | No executed credit agreement or indenture, instrument-level quote, valuation or credit peer set is in the set; the filings summarise the financing documents, give an aggregate fair value of long-term debt of USD 5,091 million at 2026-09-30 (USD 5,201 million at 2025-12-31) and name a fifteen-company equity peer group without financials | Analyst Inference | Listed the contents of the five documents, searched them for peer, price and valuation terms, and read the financing note | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 32–37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 30; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 157 |
| E19 | Covenant headroom cannot be established because the reported ratio and the definition of earnings are not printed | Insufficient Information (gap claim) | Read the covenant text and searched for the ratio | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37 |
| E20 | The latest filing is 21 days before the as-of date | Calculated | Counted the days (C10) | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 105 |

## Calculations

| ID | Calculation | Inputs | Result | Period and unit | Source |
|---|---|---|---|---|---|
| C1 | Principal outstanding by instrument | Revolver 100 + refinancing term facility 2,788 + 2028 secured notes 1,400 + 2031 secured notes 765 + other 12 | 5,065, equal to the printed total | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32 |
| C2 | Maturity schedule total | 7 + 28 + 1,440 + 28 + 128 + 3,434 | 5,065, equal to C1 and to the printed total gross maturities | Remainder of 2026 to 2031, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36 |
| C3 | Carrying value of the debt table | 5,065 − 48 unamortized discounts | 5,017, equal to the printed total long-term debt and other | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 36 |
| C4 | Balance-sheet debt lines | 5,017 + 78 other financial liabilities; 45 current + 5,050 long-term | 5,095 both ways; difference 0 | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 14–15; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 38 |
| C5 | Revolver availability | 800 commitments − 100 borrowings − 34 letters of credit | 666, equal to the printed availability | 2026-09-30, USD million | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–34 |
| C6 | Year-end 2025 debt table | 489 + 100 + 2,313 + 1,400 + 793 + 12 | 5,107, equal to the printed total in the annual report and the third-quarter comparatives | 2025-12-31, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 280; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 32 |
| C7 | Year-end 2025 balance-sheet debt lines | 5,048 carrying value + 34 other financial liabilities; 39 current + 5,043 long-term | 5,082 both ways; difference 0 | 2025-12-31, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 235; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 280; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297 |
| C8 | Lease liabilities at year-end 2025 | Operating 38 + 125 = 163; other financial liabilities 11 + 23 = 34; 163 + 34 | 197, equal to the printed total lease liabilities | 2025-12-31, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297 |
| C9 | Variable and fixed debt at year-end 2025 | 3,695 variable + 1,412 fixed | 5,107, equal to C6 | 2025-12-31, USD million | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 219 |
| C10 | Days from the latest signature to the as-of date | 2026-10-28 to 2026-11-18: 3 days left in October + 18 days in November | 21 | Days | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 105 |

## Gaps

| Gap | Type | Severity | Affected modules | Readiness effect | What would close it | Source |
|---|---|---|---|---|---|---|
| Executed credit agreement, its amendments and the indentures for the 2028 and 2031 secured notes are not supplied; the filings summarise them | Source gap | MATERIAL | Legal & covenants; Security selection; Recovery & fulcrum | Those modules are conditional; Legal & covenants stops at its own gate without executed documents | Supply the credit agreement with its amendments and both indentures | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, pages 33–37 |
| No issuer-reported EBITDA, adjusted EBITDA or free cash flow; the covenant ratio and its definition of earnings are not printed | Source gap | MATERIAL | Financial foundation; Fundamental credit; Covenant capacity | Leverage is computed from statement lines and labelled as computed; covenant headroom is not established | Supply a lender presentation or earnings release with adjusted EBITDA, and the credit agreement's definition | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 71 |
| No instrument-level market quotes, valuation or credit peer set; the filings give only an aggregate fair value of debt, the names of an equity performance peer group and a non-affiliate share value dated mid-2025 | Source gap | MATERIAL | Peer benchmark; Market-implied risk; Security selection | Those modules are conditional on market data | Supply dated quotes and a peer set with financials | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 30; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 157; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 2 |
| Nothing is dated after 2026-10-28, 21 days before the as-of date; no earnings release, lender presentation or current report is supplied | Staleness | MINOR | All modules | Events from 2026-10-28 to 2026-11-18, including any closing of the acquisition, are not established | Supply any later filing, release or current report | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 105 |
| Lease, pension and commitment notes exist only in the annual reports, dated 2025-12-31 | Period mismatch | MINOR | Financial foundation; Liquidity; Fundamental credit | These items are labelled as year-end 2025 beside debt at 2026-09-30 | Supply management's quarterly figures for these items | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, pages 296–297; 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 319 |
| Market-risk sensitivities are dated 2025-12-31; the third-quarter report refers back to the annual report | Period mismatch | MINOR | Rates, FX & hedging | Sensitivity is labelled year-end 2025 and any update is a calculation | Supply a current sensitivity | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 219; 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 102 |
| Directors, executive pay and share-ownership detail are incorporated by reference to a proxy statement that is not supplied | Source gap | MINOR | Business & governance | Governance rests on the filings' notes, signature pages and the parent-ownership facts | Supply the proxy statement | 10-K_2025-12-31_blco_blco-20251231.htm.jsonl, page 222 |
| The text extraction flattens tables, and the Moody's row of the ratings table shows one rating only | Representation limit | MINOR | Ratings & triggers; Fundamental credit | Whether the Moody's rating is the corporate or the secured one is not established; the other two agencies' two ratings read clearly | Open the original filing table | 10-Q_2026-09-30_blco_blco-20260930.htm.jsonl, page 88 |

## Next module

The orchestrator selects the next module.
