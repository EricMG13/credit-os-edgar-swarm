# Financial foundation for BAYTEX ENERGY CORP. (bte)

## Request
Financial foundation for BAYTEX ENERGY CORP. (bte), as of 2026-11-05, on the credit_snapshot pathway. Scope is Canadian continuing operations in Canadian dollars for Q1 2026, Q2 2026 and H1 2026, with balance sheets at 2025-12-31, 2026-03-31 and 2026-06-30 and debt at carrying value.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 40-F_2025-12-31_bte-20251231.htm.jsonl | Annual report on Form 40-F for the year ended December 31, 2025 (cover, controls and exhibit index only) | 2026-03-04 | 7928c3aee2847a067565e87aab941fb0fa693ec3a05da16abf228b0aca516096 | Confirmed that audited statements and MD&A are separate exhibits that are not supplied. |
| 6-K-EX-99.1_2025-09-30_a991-q32025fs.htm.jsonl | Condensed consolidated interim financial statements for the three and nine months ended September 30, 2025 (Exhibit 99.1 to Form 6-K), unaudited | 2025-10-30 | 88b3b8e7d8e11703b95eab9a12edb425d85ec75970d2d968e209a9c3a366a490 | Pre-sale facility, notes and covenant history only; a different perimeter. |
| 6-K-EX-99.1_2025-12-31_a991-2025yepressrelease.htm.jsonl | Fourth quarter and full year 2025 results press release (Exhibit 99.1 to Form 6-K) | 2026-03-04 | 3673c1a3e44baf8845d8213620919370a57219f3e6310c71f221c475210c6b47 | Year-end net cash, available facility capacity, total debt at principal and the sale closing. |
| 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl | Condensed consolidated interim financial statements for the three months ended March 31, 2026 (Exhibit 99.1 to Form 6-K), unaudited | 2026-05-07 | 792eab73e1363b4073690efb2135aa655fd77f770258c41719cb471c48ece251 | Q1 2026 statements, the 2026-03-31 balance sheet and the 2025-12-31 comparatives. |
| 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl | First quarter 2026 results press release with management's discussion and analysis (Exhibit 99.1 to Form 6-K) | 2026-05-07 | 9b4c8c62190d6a1b8a9c4e232069f5ad6fc7f4c944563935fd4bf5121d096095 | Credit-agreement EBITDA, covenants and capacity at 2026-03-31, contractual obligations, outlook. |
| 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Condensed consolidated interim financial statements for the three and six months ended June 30, 2026 (Exhibit 99.1 to Form 6-K), unaudited | 2026-07-30 | 16eeba2e704f92279ab76d18bdc0c26c8ff5c06bb58d42d66e8037ca77adddf4 | Controlling statements for Q2 and H1 2026, debt notes, covenants, leases and cash flow. |
| 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl | Second quarter 2026 results press release with management's discussion and analysis (Exhibit 99.1 to Form 6-K) | 2026-07-30 | 2da1f8d94e5a6b644192e34205faf74054d51d4cb86b7a7a5ff6f34cc5c6aa6a | Issuer measures, available capacity, contractual obligations, eight-quarter table, benchmark prices and post-period events. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | b9b8d94ef07c95ba0cc4221d1b096672dabe2cc8fe6a29a64a2eefd57fec6726 | Source set, perimeter, document dates and gaps; no figure is imported from it. |

## Findings

### Bottom line
Baytex has almost no financial debt after the Eagle Ford sale, so creditors face negligible leverage; the risk to watch is cash leaving through shareholder returns, not debt service.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 9–10; calculation C03; calculation C06

At 2026-06-30 the one remaining note has a carrying value of CAD 89.2 million against cash of CAD 720.3 million, so net debt is negative CAD 631.1 million, meaning net cash. On the issuer's credit-agreement EBITDA, total debt is 0.12x and interest cover is 9.3x; reported twelve-month EBITDA cannot be built from the set. In six months, shareholder returns of CAD 349.1 million exceeded issuer-defined free cash flow of CAD 129.8 million and cash fell by CAD 234.6 million.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 3; calculation C16; calculation C22; Source readiness (CP-0)

### Key findings
Leverage is negligible on every definition the sources allow. The only debt at carrying value is the CAD 89.2 million of notes due 2032, because the revolving facility was undrawn at 2026-06-30 and lease obligations of CAD 60.3 million are carried on their own lines. Cash of CAD 720.3 million therefore exceeds debt by CAD 631.1 million, against CAD 858.1 million at 2025-12-31 before the share repurchases and dividends of 2026. The issuer's own net cash figure is CAD 566.3 million because it also nets receivables, payables and inventory.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 8–9; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 18; calculation C03; calculation C06; calculation C27

On the issuer's credit-agreement EBITDA of CAD 758.9 million for the twelve months to 2026-06-30, total debt is 0.12x and net debt is negative 0.83x; the figures were 0.13x and negative 1.01x at 2026-03-31 on CAD 661.0 million. The issuer's own interest cover rose from 5.5x to 9.3x as the higher interest of the pre-sale debt rolled out of the twelve-month window. Reported EBITDA cannot be set against debt because the full-year 2025 continuing-operations figures are not in the set, and the derived quarterly figure swings from CAD 22.9 million in Q1 2026 to CAD 357.1 million in Q2 2026 largely on derivative gains and losses and the oil price rise, so the credit-agreement figures are the only available measure.
Basis: 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, pages 37–38; calculation C16; calculation C17; calculation C18; calculation C19; calculation C08; calculation C09

Operating cash flow of CAD 353.1 million in the first half of 2026 covered capital spending of CAD 267.9 million, leaving CAD 85.1 million, against issuer-defined free cash flow of CAD 129.8 million that adds back working capital movements. Shareholder returns of CAD 349.1 million, of which CAD 316.3 million was share repurchases, were 2.69x that free cash flow, so cash fell by CAD 234.6 million over the half-year. The issuer's three-year outlook maintains a net cash position, but cash is the main cushion because no principal falls due before 2032.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 3; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 58; 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 2; calculation C22; calculation C23; calculation C32

Liquidity is cash of CAD 720.3 million plus CAD 745.6 million of available revolving capacity, together CAD 1,465.9 million, against CAD 59.3 million of contractual obligations falling due within a year for note interest, leases, processing and transportation. The facility is undrawn and matures on 2030-06-27, so near-term funding does not depend on access to the debt market.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 8; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 14; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 50; calculation C15

Outside debt, lease obligations rose from CAD 23.0 million at 2025-12-31 to CAD 60.3 million after a 15-year take-or-pay agreement with Gibson Energy was recognised as a lease in February 2026; trade payables of CAD 275.0 million are ordinary, and no supplier finance, deposits or deferred revenue are disclosed. After the balance-sheet date, the dividend of CAD 16.1 million paid on 2026-07-02 lifts net debt to negative CAD 615.0 million pro forma, and July repurchases cut the share count further at a cost the sources do not state; neither is in the period figures.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 6; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 8; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 11; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, pages 49–50; calculation C26

### Contrary evidence and what would change the view
The strongest contrary evidence is that this cash is being returned to shareholders rather than held for creditors: first-half repurchases and dividends were 2.69x issuer-defined free cash flow, and the renewed buyback programme for the twelve months from 2026-07-02 allows purchases of up to a tenth of the public float. A second weakness is earnings quality: realized derivative losses of CAD 113.4 million in the first half came from oil contracts struck before the sale, and the issuer says no WTI hedges remain after the second quarter, so cash flow now follows the oil price directly.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 11; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 6; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 49; calculation C32

The view would change if cash fell toward the CAD 89.2 million of debt, if the revolver were drawn, or if the oil price fell back from the second-quarter average of US$92.79 per barrel; evidence of the audited 2025 statements or the credit-agreement EBITDA add-backs would also change how much weight the adjusted ratios can bear.
Basis: 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 3; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 6; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9

### Limitations
- Reported EBITDA for twelve months cannot be built, so the leverage and interest-cover charts carry no figures and the adjusted ratios rest on a credit-agreement EBITDA whose add-backs are not itemised.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 3; Source readiness (CP-0)
- No audited 2025 statements are in the set, so the 2025-12-31 balance sheet comes from interim comparatives and 2025 income and cash flow statements are not available on the continuing perimeter.
Basis: 40-F_2025-12-31_bte-20251231.htm.jsonl, page 2; 40-F_2025-12-31_bte-20251231.htm.jsonl, page 6; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; Source readiness (CP-0)
- Instrument terms come from interim notes only, so the rank, guarantors and security of the facility and the notes are not established.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 8–10

### Financials and credit metrics

| Metric | 2025-12-31 | 2026-03-31 | 2026-06-30 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash | 953.1 | 757.9 | 720.3 | CAD millions | Reported, rounded to one decimal; exact figures are in the net debt data | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Total debt at carrying value | 95.0 | 87.6 | 89.2 | CAD millions | Calculated from the statements, rounded to one decimal; credit facilities plus long-term notes, excluding lease obligations | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Net debt (gross debt less cash) | -858.1 | -670.3 | -631.1 | CAD millions | Calculated, rounded to one decimal; a negative figure is net cash on this definition | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Issuer-defined net cash | 765.8 | 591.2 | 566.3 | CAD millions | Reported by the issuer, rounded to one decimal; it also nets receivables, payables and inventory, so it differs from net debt above | 6-K-EX-99.1_2025-12-31_a991-2025yepressrelease.htm.jsonl, page 3; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 3 |
| Lease obligations (excluded from debt) | 23.0 | 58.2 | 60.3 | CAD millions | Reported on their own balance-sheet lines, rounded to one decimal; the 2026 increase follows a 15-year take-or-pay agreement recognised as a lease in February 2026 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 6; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 8; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Trade payables | 236.4 | 303.1 | 275.0 | CAD millions | Reported, rounded to one decimal; ordinary payables, no supplier finance, deposits or deferred revenue are disclosed | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Dividends payable (paid after the date) | 17.3 | 16.6 | 16.1 | CAD millions | Reported, rounded to one decimal; the 2026-06-30 amount was paid on 2026-07-02 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 11; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Available credit facility capacity | 744.2 | 745.6 | 745.6 | CAD millions | Reported by the issuer; commitments less drawings and letters of credit | 6-K-EX-99.1_2025-12-31_a991-2025yepressrelease.htm.jsonl, page 13; 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 13; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 14 |
| Cash plus available facility capacity | 1697.3 | 1503.5 | 1465.9 | CAD millions | Calculated, rounded to one decimal | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 14 |
| Contractual obligations due within one year | Not supplied: not applicable to this date | 58.2 | 59.3 | CAD millions | Reported obligations table (note interest, leases, processing and transportation), rounded to one decimal; excludes asset retirement obligations | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, pages 36–37; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 50 |
| Credit-agreement EBITDA, twelve months | Not supplied: not stated at 2025-12-31 | 661.0 | 758.9 | CAD millions | Issuer-adjusted (Bank EBITDA); pro forma for material dispositions as if at the start of the twelve months; add-backs not itemised | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9 |
| Total debt / credit-agreement EBITDA | Not supplied: EBITDA not stated at 2025-12-31 | 0.13 | 0.12 | x | Calculated from carrying-value debt over issuer-adjusted EBITDA; the issuer prints 0.1:1.0 on its own definition | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9; 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35 |
| Net debt / credit-agreement EBITDA | Not supplied: EBITDA not stated at 2025-12-31 | -1.01 | -0.83 | x | Calculated; negative because cash exceeds debt | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9; 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35 |
| Issuer interest coverage (credit-agreement EBITDA / financing and interest expense) | Not supplied: not stated at 2025-12-31 | 5.5 | 9.3 | x | Reported by the issuer as 5.5:1.0 and 9.3:1.0 against a 3.5:1.0 minimum; twelve-month financing and interest expense of 119.4 and 81.5 | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9 |
| EBITDA (Reported), derived, three months to the date | Not supplied: not applicable | 22.9 | 357.1 | CAD millions | Calculated, rounded to one decimal; includes derivative and foreign exchange gains and losses | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Operating cash flow, six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 353.1 | CAD millions | Reported, rounded to one decimal; the notes show no discontinued operating cash flow in 2026 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 7 |
| Capital spending, six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 267.9 | CAD millions | Calculated from additions to exploration and evaluation assets, oil and gas properties and other plant and equipment, rounded to one decimal | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3 |
| Operating cash flow less capital spending, six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 85.1 | CAD millions | Calculated, rounded to one decimal | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3 |
| Free cash flow as the issuer defines it, six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 129.8 | CAD millions | Reported by the issuer; adds back working capital changes and deducts lease payments, so it differs from operating cash flow less capital spending | 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 3; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 58 |
| Share repurchases (cash), six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 316.3 | CAD millions | Reported cash flow line, rounded to one decimal; includes the 2% federal tax on repurchases | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 11 |
| Shareholder returns (repurchases plus dividends), six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 349.1 | CAD millions | Calculated from the cash flow statement, rounded to one decimal | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3 |
| Shareholder returns as a multiple of issuer-defined free cash flow | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 2.69 | x | Calculated; six months to 2026-06-30 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 3 |
| Change in cash, six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | -234.6 | CAD millions | Reported, rounded to one decimal; from 954.9 after the IFRS 9 opening adjustment to 720.3 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3 |
| Realized financial derivatives loss, six months to 2026-06-30 | Not supplied: not applicable to this date | Not supplied: not applicable to this date | 113.4 | CAD millions | Reported, rounded to one decimal; oil contracts set before the sale of the U.S. operations | 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 4; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 6; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 17 |
| Pro forma net debt after the 2026-07-02 dividend payment | Not supplied: not applicable to this date | Not supplied: not applicable to this date | -615.0 | CAD millions | Calculated, rounded to one decimal; a post-balance-sheet event kept out of the period figures | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 11; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 50 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | Not supplied: reported EBITDA for the twelve months to the balance-sheet date is not calculable | Not supplied: reported EBITDA for the twelve months to the balance-sheet date is not calculable | x | Reported EBITDA is not printed and the full-year 2025 continuing-operations components are not in the set, so no twelve-month reported EBITDA can be built. Issuer-adjusted ratios are in the calculation register. |
| 2026-03-31 | Not supplied: reported EBITDA for the twelve months to the balance-sheet date is not calculable | Not supplied: reported EBITDA for the twelve months to the balance-sheet date is not calculable | x | Reported twelve-month EBITDA needs full-year 2025 continuing-operations components that the set lacks. The issuer-adjusted ratios (credit-agreement EBITDA) are in the calculation register, not here. |
| 2026-06-30 | Not supplied: reported EBITDA for the twelve months to the balance-sheet date is not calculable | Not supplied: reported EBITDA for the twelve months to the balance-sheet date is not calculable | x | Reported twelve-month EBITDA needs full-year 2025 continuing-operations components that the set lacks. The issuer-adjusted ratios (credit-agreement EBITDA) are in the calculation register, not here. |

Reported leverage cannot be charted because twelve-month reported EBITDA is not calculable; the issuer-adjusted ratios are in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2025 / 2025-12-31 | Not supplied: reported EBITDA and twelve-month cash interest paid are not calculable | x | Reported twelve-month EBITDA and twelve-month cash interest paid are both outside the set; only three-month and six-month figures exist. The issuer's own coverage ratio is on a different basis and is shown in the calculation register and the metrics table. |
| 2026-03-31 | Not supplied: reported EBITDA and twelve-month cash interest paid are not calculable | x | Reported twelve-month EBITDA and twelve-month cash interest paid are both outside the set; only three-month and six-month figures exist. The issuer's own coverage ratio is on a different basis and is shown in the calculation register and the metrics table. |
| 2026-06-30 | Not supplied: reported EBITDA and twelve-month cash interest paid are not calculable | x | Reported twelve-month EBITDA and twelve-month cash interest paid are both outside the set; only three-month and six-month figures exist. The issuer's own coverage ratio is on a different basis and is shown in the calculation register and the metrics table. |

Cash interest paid is printed only for quarters and the half-year, so no twelve-month cover ratio is stated.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 953.113 | 744.2 | CADm | Cash from the statement of financial position. Undrawn committed facilities is the issuer-stated available credit facility capacity (facility commitment less drawings and letters of credit); at 2025-12-31 the facilities were drawn 1.4 and carried letters of credit of 4.4. |
| 2026-03-31 | 757.869 | 745.6 | CADm | Cash from the statement of financial position. Undrawn committed facilities is the issuer-stated available capacity: 750.0 of commitments, nothing drawn, letters of credit of 4.4. |
| 2026-06-30 | 720.337 | 745.6 | CADm | Cash from the statement of financial position. Undrawn committed facilities is the issuer-stated available capacity: 750.0 of commitments, nothing drawn, letters of credit of 4.4; the facilities mature on 2030-06-27. |

Undrawn committed facilities is the issuer's available capacity after letters of credit, and the figures precede the July 2026 dividend payment.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2030 | 0 | CADm | Revolving credit facilities mature on 2030-06-27; nothing was drawn at 2026-06-30, so no principal falls due (note 8 prints principal as a dash and the management discussion says undrawn). The 750.0 commitment is not counted as debt. |
| FY2032 | 91.107 | CADm | 7.375% notes due 2032-03-15, principal US$64.1 million printed as 91.107 in Canadian dollars; no call before 2027-03-15. Years with no maturity are not rows. |

Years without a maturity are not rows, and the facility maturity in 2030 carries no principal because the facility is undrawn.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 94.972 | 953.113 | -858.141 | CADm | Gross debt is credit facilities (1.138 carrying, 1.400 principal, 0.262 issue costs) plus long-term notes (93.834 carrying, 95.947 principal, 2.113 issue costs), at carrying value; principal total 97.347. Lease obligations of 23.019 are on their own lines and excluded. Reported; after the Eagle Ford sale closed on 2025-12-19. |
| 2026-03-31 | 87.598 | 757.869 | -670.271 | CADm | Gross debt is long-term notes only at carrying value (87.598; principal 89.507); the facility was undrawn. Lease obligations of 58.222 are on their own lines and excluded. Reported. |
| 2026-06-30 | 89.229 | 720.337 | -631.108 | CADm | Gross debt is long-term notes only at carrying value (89.229; principal 91.107); the facility was undrawn. Lease obligations of 60.256 are on their own lines and excluded. Reported; the issuer's own net cash of 566.286 uses a different definition. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-06-30 | 91.107 | -1.878 | 89.229 | CADm | Principal is the sum of the debt maturing rows; reconciling items is the unamortised debt issuance cost of the 7.375% notes (1.878), shown as a deduction in note 9; the undrawn facility has no issuance cost balance and no other debt is left out. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Quarterly dividend of $0.0225 per share (record date 2026-06-15) paid | 2026-07-02 | 16.144 | -614.964 | Not supplied: reported twelve-month EBITDA is not calculable | CADm | Paid on 2026-07-02 per the management discussion; the amount is the dividends payable of 16,144 (CAD thousands) at 2026-06-30. Raises net debt (gross debt less cash) by the cash paid. Not in the 2026-06-30 figures; other July 2026 cash movements are not reflected. |
| Common shares repurchased in July 2026 under the normal course issuer bid | Not supplied: the source states July 2026 only | Not supplied: the amount repurchased in July 2026 is not stated | Not supplied: the amount repurchased in July 2026 is not stated | Not supplied: reported twelve-month EBITDA is not calculable | CADm | Shares outstanding fell from 708.9 million at 2026-06-30 to 699.2 million at 2026-07-30; the cost of the July purchases is not stated, so net debt cannot be updated. |
| Quarterly dividend of $0.0225 per share declared on 2026-07-30 | 2026-10-01 | Not supplied: the total depends on the share count at the 2026-09-15 record date, which the source does not state | Not supplied: total dividend not stated | Not supplied: reported twelve-month EBITDA is not calculable | CADm | Scheduled payment date per the 2026-07-30 declaration; no document in the set confirms payment. Not in the 2026-06-30 figures. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2025-03-31 | 454.151 | 159.264 | CADm | Three months to 2025-03-31 revised to continuing operations. Revenue is petroleum and natural gas sales before royalties and blending. EBITDA identity: reported, calculated as net income before income taxes plus net financing and interest expense plus depletion and depreciation; includes derivative and foreign exchange items. Not issuer-adjusted. |
| 2025-06-30 | 411.036 | 291.573 | CADm | Three months to 2025-06-30 revised to continuing operations. Revenue is petroleum and natural gas sales before royalties and blending. EBITDA identity: reported, calculated as above; includes a foreign exchange gain of 100.586 and a derivatives gain of 18.663. |
| 2026-03-31 | 452.954 | 22.855 | CADm | Three months to 2026-03-31. Revenue is petroleum and natural gas sales before royalties and blending. EBITDA identity: reported, calculated as above; includes a derivatives loss of 150.756. |
| 2026-06-30 | 639.943 | 357.078 | CADm | Three months to 2026-06-30. Revenue is petroleum and natural gas sales before royalties and blending. EBITDA identity: reported, calculated as above; includes a derivatives gain of 21.443. |

EBITDA is derived and includes derivative and foreign exchange gains and losses, so quarter-to-quarter swings are not operating trend alone.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no source states the legal rank of the credit facilities or the notes | Not supplied: no source states legal rank | Not supplied: security is stated for the facilities but rank is not, so no ranked row is drawn | Not supplied: no ranked amount | Not supplied: no ranked amount | CADm | The credit facilities are stated secured and the notes are named senior notes, but no source states the legal rank, guarantors or collateral of either; security and rank are not inferred from names. Both instruments are listed in the debt instruments register. |

No ranked row is drawn because no source states legal rank.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), twelve months to 2026-06-30 | Not supplied: reported twelve-month EBITDA is not calculable | CADm | Opening step of the bridge; no twelve-month reported EBITDA can be built from the set. |
| EBITDA (Adjusted), twelve months to 2026-06-30 (credit-agreement basis) | Not supplied: the issuer states the 758.9 total but none of its add-backs | CADm | Closing step; the issuer states the measure and its definition, not the items between reported and adjusted, so no reconciling steps are written. |

The bridge cannot be stated because the issuer gives no add-backs.

### Period table

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Interim financial statements, Exhibit 99.1 to Form 6-K | Three and six months to 2026-06-30; balances 2026-06-30 and 2025-12-31 | CAD | thousands | Baytex Energy Corp. consolidated; Canada continuing, U.S. discontinued | IFRS, IAS 34 | Tier 2b unaudited without auditor review | Controlling source for the current period: Q2 and H1 statements, debt notes, covenants, leases, derivatives | Unaudited; 2025 comparatives revised to continuing operations |
| 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl | Results release with MD&A and interim statements, Exhibit 99.1 to Form 6-K | Three and six months to 2026-06-30; eight quarters Q3 2024 to Q2 2026 | CAD | thousands in tables, millions in text | Same as the statements | IFRS; non-GAAP and capital management measures | Tier 2b for the statements; issuer measures are management figures | Facility capacity, contractual obligations, quarterly table, issuer measures, post-period events | Statements repeat the standalone exhibit; two printing differences logged; liquidity capacity is an issuer figure |
| 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl | Interim financial statements, Exhibit 99.1 to Form 6-K | Three months to 2026-03-31; balances 2026-03-31 and 2025-12-31 | CAD | thousands | Baytex Energy Corp. consolidated; Canada continuing, U.S. discontinued | IFRS, IAS 34 | Tier 2b unaudited without auditor review | Q1 2026 statements and the 2025-12-31 balance sheet | Unaudited; opening cash adjusted by 1.803 for IFRS 9 amendments |
| 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl | Results release with MD&A and interim statements, Exhibit 99.1 to Form 6-K | Three months to 2026-03-31 | CAD | thousands in tables, millions in text | Same as the statements | IFRS; non-GAAP measures | Tier 2b for the statements; issuer measures are management figures | Credit-agreement EBITDA and covenants at 2026-03-31, facility capacity, contractual obligations | Superseded by the second quarter for the current period |
| 6-K-EX-99.1_2025-12-31_a991-2025yepressrelease.htm.jsonl | Fourth quarter and full year 2025 results release, Exhibit 99.1 to Form 6-K | Three months and year to 2025-12-31 | CAD | thousands in tables | Total Baytex with Canada continuing and Eagle Ford discontinued | IFRS; non-GAAP measures | Tier 2b issuer release; audited statements not included | Year-end net cash, facility capacity, full-year summary, sale closing | No full income statement, cash flow statement or balance sheet; no credit-agreement EBITDA |
| 6-K-EX-99.1_2025-09-30_a991-q32025fs.htm.jsonl | Interim financial statements, Exhibit 99.1 to Form 6-K | Three and nine months to 2025-09-30; balances 2025-09-30 and 2024-12-31 | CAD | thousands | Consolidated including the U.S. segment before the 2025-12-19 sale | IFRS, IAS 34 | Tier 2b unaudited without auditor review | Pre-sale debt stack and covenant history only | Different perimeter from the later statements; not restated |
| 40-F_2025-12-31_bte-20251231.htm.jsonl | Annual report on Form 40-F, cover and controls sections | Fiscal year ended 2025-12-31 | Not applicable: no statements in the text | Not applicable | Baytex Energy Corp. registrant | Not applicable | Tier 1 filed document with no financial content in the text | Confirms that audited statements and MD&A are separate exhibits not supplied | Annual statements absent, so no audited figure is available |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Baytex Energy Corp. | Issuer, registrant and borrower under the credit facilities | December 31 | CAD | thousands | Consolidated subsidiaries; Canadian operations continuing, Eagle Ford discontinued after 2025-12-19; one operating segment | IFRS | Q1 2026, Q2 2026, H1 2026 flows; balance sheets at 2025-12-31, 2026-03-31 and 2026-06-30; revised Q1 and Q2 2025 comparatives |
| Guarantors, restricted group and note issuer entity | Not supplied: no source names the note issuer entity, guarantors or restricted group | Not applicable | Not applicable | Not applicable | Not supplied: guarantee and collateral perimeter not stated | Not applicable | Not applicable |
| Baytex Energy USA, Inc. | Wholly-owned subsidiary named as borrower under the former U.S. credit facilities at 2025-09-30 and as U.S. agent for service | December 31 for consolidated reporting | USD facilities before the sale | thousands | Its role after the 2025-12-19 sale is not stated | IFRS (consolidated) | 2025-09-30 only |

Subsequent events after the 2026-06-30 balance sheet are kept out of the period figures: the second-quarter dividend of CAD 16.1 million paid on 2026-07-02, share repurchases through 2026-07-29 that cut the share count, and a quarterly dividend declared on 2026-07-30 and payable on 2026-10-01.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 11; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, pages 49–50

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Thousands of Canadian dollars restated in millions for the money tables | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Unit conversion | CAD thousands as printed | CAD millions with three decimals | The money tables use one unit; no rounding is applied | All balance-sheet dates |
| Opening cash for 2026 includes the IFRS 9 amendment adjustment | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Opening balance restatement | 953,113 | 954,916 | The issuer adds 1,803 of outstanding cheques at 2026-01-01; the roll-forward uses the adjusted figure, the balance sheet at 2025-12-31 keeps 953,113 | Q1 2026, H1 2026 |
| EBITDA (Reported) derived from statement lines | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Derived measure | Not printed | Q1 2026 22,855; Q2 2026 357,078; H1 2026 379,933 | The issuer prints no EBITDA; derived as net income before income taxes plus net financing and interest plus depletion and depreciation; Analyst Judgement on what counts as interest | Q1 2026, Q2 2026, H1 2026 |
| Total Debt excludes lease obligations | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Definition | Lease obligations 60,256 | Not added to debt | Lease liabilities on their own balance-sheet lines are not part of Total Debt; they are listed in the definition conflict register | 2026-06-30, 2026-03-31, 2025-12-31 |
| Undrawn facility counted as nil debt | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Definition | Credit facilities line prints a dash | 0 | Note 8 prints principal as a dash and the management discussion states the facilities were undrawn | 2026-03-31, 2026-06-30 |
| 2025 comparatives taken from the revised columns | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl | Perimeter | Consolidated 2025 including Eagle Ford | Continuing operations only | Later documents revise 2025 to continuing operations; the revised Q1 and Q2 2025 columns are used for the revenue and EBITDA chart | Q1 2025, Q2 2025 |

### T4.4 Income statement

| Line item | Q1 2026 | Q2 2026 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Petroleum and natural gas sales | 452,954 | 639,943 | 1,092,897 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Royalties | -51,589 | -90,378 | -141,967 | CAD thousands | Reported; royalties are negative and expenses below are printed as positive amounts | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Revenue, net of royalties | 401,365 | 549,565 | 950,930 | CAD thousands | Reported subtotal | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Operating | 81,244 | 89,843 | 171,087 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Transportation | 23,134 | 25,932 | 49,066 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Blending and other | 75,921 | 75,068 | 150,989 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| General and administrative | 22,299 | 16,480 | 38,779 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Exploration and evaluation | 665 | 810 | 1,475 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Depletion and depreciation | 123,690 | 128,945 | 252,635 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Share-based compensation | 22,870 | 4,317 | 27,187 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Net financing and interest expense | 3,097 | 4,516 | 7,613 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Financial derivatives (gain) loss | 150,756 | -21,443 | 129,313 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Foreign exchange loss (gain) | 1,934 | -316 | 1,618 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| (Gain) loss on dispositions | -2,017 | -261 | -2,278 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Other expense | 1,704 | 2,057 | 3,761 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Total expenses | 505,297 | 325,948 | 831,245 | CAD thousands | Reported subtotal | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Net income (loss) before income taxes from continuing operations | -103,932 | 223,617 | 119,685 | CAD thousands | Reported subtotal | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Current income tax expense | 0 | 0 | 0 | CAD thousands | The management discussion states no current income tax was recorded for continuing operations; the statement prints a dash | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 31; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 42 |
| Deferred income tax expense (recovery) | -24,253 | 55,029 | 30,776 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Net income (loss) from continuing operations | -79,679 | 168,588 | 88,909 | CAD thousands | Reported subtotal | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Net income from discontinued operations | 12,353 | 6,281 | 18,634 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| Net income (loss) | -67,326 | 174,869 | 107,543 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |
| EBITDA (Reported) | 22,855 | 357,078 | 379,933 | CAD thousands | Calculated: net income before income taxes from continuing operations plus net financing and interest expense plus depletion and depreciation; not printed by the issuer; includes derivative, foreign exchange, share-based and other non-operating items | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 |

### T4.5 Cash flow statement

| Line item | Q1 2026 | Q2 2026 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net income (loss) | -67,326 | 174,869 | 107,543 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Non-cash share-based compensation | 4,857 | Not supplied: the source prints a dash | 4,857 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Unrealized foreign exchange loss (gain) | 1,630 | 1,693 | 3,323 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Exploration and evaluation | 665 | 810 | 1,475 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Depletion and depreciation | 123,690 | 128,945 | 252,635 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Non-cash financing and interest | 5,851 | 5,218 | 11,069 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Unrealized financial derivatives loss (gain) | 121,467 | -105,589 | 15,878 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| (Gain) loss on dispositions | -15,456 | -6,542 | -21,998 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Deferred income tax expense (recovery) | -24,253 | 55,029 | 30,776 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Asset retirement obligations settled | -2,619 | -1,933 | -4,552 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Change in non-cash working capital (operating) | -26,303 | -21,648 | -47,951 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Net Cash from Operating Activities | 122,203 | 230,852 | 353,055 | CAD thousands | Reported subtotal; the notes show no discontinued operating cash flow in 2026 | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 7–8 |
| (Decrease) increase in credit facilities | -1,400 | Not supplied: the source prints a dash | -1,400 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Payments on lease obligations | -1,789 | -2,213 | -4,002 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Redemption of long-term notes | -8,270 | Not supplied: the source prints a dash | -8,270 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Repurchase of common shares | -177,715 | -138,603 | -316,318 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Dividends declared | -16,606 | -16,144 | -32,750 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Change in non-cash working capital (financing) | 1,817 | 3,440 | 5,257 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Net Cash from Financing Activities | -203,963 | -153,520 | -357,483 | CAD thousands | Reported subtotal | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Additions to exploration and evaluation assets | -1,737 | Not supplied: the source prints a dash | -1,737 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Additions to oil and gas properties | -143,275 | -122,242 | -265,517 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Additions to other plant and equipment | -320 | -346 | -666 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Consideration related to assets held for sale | 14,407 | Not supplied: the source prints a dash | 14,407 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Property acquisitions | -8,127 | -226 | -8,353 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Proceeds from dispositions | 13,113 | 6,119 | 19,232 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Change in non-cash working capital (investing) | 10,652 | 1,831 | 12,483 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Net Cash from Investing Activities | -115,287 | -114,864 | -230,151 | CAD thousands | Reported subtotal; includes cash from discontinued operations (post-closing items) shown in note 6 | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 7–8 |
| Net Cash Change | -197,047 | -37,532 | -234,579 | CAD thousands | Reported; operating plus investing plus financing, no foreign exchange line printed | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Opening Cash | 954,916 | 757,869 | 954,916 | CAD thousands | Reported; H1 and Q1 opening cash is 954,916 after a 1,803 adjustment on adopting IFRS 9 amendments to the 953,113 printed at 2025-12-31 | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Closing Cash | 757,869 | 720,337 | 720,337 | CAD thousands | Reported | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Cash Interest Paid | 4,453 | 842 | 5,295 | CAD thousands | Reported supplementary information; interest paid, a positive amount | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Interest received | 5,445 | 4,884 | 10,329 | CAD thousands | Reported supplementary information | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |
| Income taxes paid | Not supplied: the source prints a dash | 29,770 | 29,770 | CAD thousands | Reported supplementary information; Q1 prints a dash | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 2–3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 2–3 |

### T4.6 Balance sheet

| Line item | FY2025 | Q1 2026 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash | 953,113 | 757,869 | 720,337 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Trade receivables | 135,230 | 194,985 | 188,260 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Prepaids and other assets (current) | 35,008 | 32,637 | 36,050 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Inventory | Not supplied: the source prints a dash | 14,174 | 8,756 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Financial derivatives (asset) | 28,898 | 1,901 | 10,614 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Assets held for sale | 38,117 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Total current assets | 1,190,366 | 1,001,566 | 964,017 | CAD thousands | Reported subtotal | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Exploration and evaluation assets | 133,585 | 141,444 | 140,301 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Oil and gas properties | 1,918,435 | 1,949,916 | 1,961,679 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Other plant and equipment | 7,648 | 7,476 | 7,265 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Lease assets | 20,812 | 55,229 | 56,430 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Prepaids and other assets (non-current) | 28,224 | 26,454 | 24,664 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Deferred income tax asset | 46,344 | 70,607 | 15,587 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Total Assets | 3,345,414 | 3,252,692 | 3,169,943 | CAD thousands | Reported total | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Trade payables | 236,373 | 303,107 | 275,032 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Share-based compensation liability (current) | 26,108 | 22,467 | 23,406 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Dividends payable | 17,268 | 16,606 | 16,144 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Financial derivatives (liability) | 2,406 | 96,876 | Not supplied: the source prints a dash | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Liabilities related to assets held for sale | 23,710 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Lease obligations (current) | 7,175 | 9,439 | 10,449 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Asset retirement obligations (current) | 17,138 | 17,165 | 17,346 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Total current liabilities | 330,178 | 465,660 | 342,377 | CAD thousands | Reported subtotal | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Share-based compensation liability (non-current) | 8,694 | 3,281 | 6,092 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Credit facilities | 1,138 | 0 | 0 | CAD thousands | Reported as a dash for 2026-03-31 and 2026-06-30; the notes state the facility was undrawn, so nil is stated; 1,138 at 2025-12-31 is net of issuance costs | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Long-term notes | 93,834 | 87,598 | 89,229 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Lease obligations (non-current) | 15,844 | 48,783 | 49,807 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Asset retirement obligations (non-current) | 506,677 | 514,613 | 529,154 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Total Liabilities | 956,365 | 1,119,935 | 1,016,659 | CAD thousands | Reported total of current and non-current liabilities | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Shareholders' capital | 6,072,562 | 5,786,747 | 5,611,565 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Contributed surplus | 397,681 | 511,326 | 547,905 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Accumulated other comprehensive income | 13,356 | 13,166 | 13,571 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Deficit | -4,094,550 | -4,178,482 | -4,019,757 | CAD thousands | Reported | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Total Equity | 2,389,049 | 2,132,757 | 2,153,284 | CAD thousands | Reported total | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |
| Total Debt | 94,972 | 87,598 | 89,229 | CAD thousands | Calculated: credit facilities plus long-term notes at balance-sheet carrying value, net of issuance costs; lease obligations on their own lines are excluded; the facility is stated undrawn so it counts as nil | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 8–9; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 37 |
| Cash & Equivalents | 953,113 | 757,869 | 720,337 | CAD thousands | Reported cash | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Operating loan (part of the credit facilities) | Revolving operating loan | 0 | 0 | 0 | 50,000 | Secured (the credit facilities are stated secured) | Not supplied: no source states legal ranking | CAD | 0 | Not applicable | Not supplied: applicable margins are not stated; a standby fee rate of 0.5% applies while undrawn | Floating | Bank prime rate, Canadian Overnight Repo Rate Average or Secured Overnight Financing Rate | Not supplied: margins are not stated | Not applicable | 2030-06-27 | 0 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 8–9; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 38; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 48 |
| Syndicated revolving loan (part of the credit facilities) | Syndicated revolving loan | 0 | 0 | 0 | 700,000 | Secured (the credit facilities are stated secured) | Not supplied: no source states legal ranking | CAD | 0 | Not applicable | Not supplied: applicable margins are not stated; a standby fee rate of 0.5% applies while undrawn | Floating | Bank prime rate, Canadian Overnight Repo Rate Average or Secured Overnight Financing Rate | Not supplied: margins are not stated | Not applicable | 2030-06-27 | 0 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 8–9; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 38; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 48 |
| 7.375% Senior Notes due 2032-03-15 | Senior notes, fixed rate | Not supplied: the filing prints the carrying value in Canadian dollars only (89,229 thousand) | 64,100 | Not applicable | Not applicable | Not supplied: the filing does not state security | Not supplied: no source states legal ranking; the name is not evidence | USD | 89,229 | Not applicable | 7.375% | Fixed | Not applicable | Not applicable | Not applicable | 2032-03-15 | 0 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 9–10; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, pages 49–50 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue (petroleum and natural gas sales) | LTM to 2026-06-30 | Not supplied: full-year 2025 continuing-operations figure is not in the set | CAD 1,092.897m | CAD 865.187m | Not calculable: full-year component missing | Not Calculable | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | Current stub is H1 2026 and prior-year stub is H1 2025 revised. The audited full-year 2025 statements are absent, so no twelve-month figure can be built. |
| EBITDA (Reported) | LTM to 2026-06-30 | Not supplied: full-year 2025 continuing-operations figure is not in the set | CAD 379.933m | CAD 450.837m | Not calculable: full-year component missing | Not Calculable | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 | Current stub is H1 2026 and prior-year stub is H1 2025 revised, both calculated as net income before income taxes plus net financing and interest expense plus depletion and depreciation; H1 2025 includes a foreign exchange gain of 104.464. |
| Cash interest paid | LTM to 2026-06-30 | Not supplied: full-year 2025 continuing-operations figure is not in the set | CAD 5.295m | CAD 90.632m | Not calculable: full-year component missing and prior-year stub on a different perimeter | Not Calculable | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3 | Current stub is H1 2026; the H1 2025 stub is the consolidated figure including the Eagle Ford business, so it is not comparable. |
| EBITDA (Reported) | Quarter, reported discretely (Q2 2026) and half-year (H1 2026) | Not applicable: not a full-year build | CAD 357.078m (Q2 2026) | CAD 22.855m (Q1 2026) | CAD 379.933m = Q1 2026 plus Q2 2026 | Calculated | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, pages 1–2; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2 | Q2 is a reported discrete quarter, not H1 less Q1; the sum is shown to prove the half-year ties. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt at carrying value / EBITDA (Reported), twelve months | 94.972 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no denominator | FY2025 / 2025-12-31 | CAD | CADm | Not calculable: twelve-month reported EBITDA is not calculable | Not Calculable | Tier 2b unaudited interim statements | Reported EBITDA for the twelve months to the balance-sheet date is not calculable: the full-year 2025 continuing-operations components are not in the set. |
| Net debt / EBITDA | Net debt (gross debt less cash) / EBITDA (Reported), twelve months | -858.141 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no denominator | FY2025 / 2025-12-31 | CAD | CADm | Not calculable: twelve-month reported EBITDA is not calculable | Not Calculable | Tier 2b unaudited interim statements | Reported EBITDA for the twelve months to the balance-sheet date is not calculable: the full-year 2025 continuing-operations components are not in the set. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid, twelve months | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no numerator | Not calculable: twelve-month cash interest paid is not supplied; only three-month and six-month figures are printed | Not applicable: no denominator | FY2025 / 2025-12-31 | CAD | CADm | Not calculable: neither twelve-month operand is available | Not Calculable | Tier 2b unaudited interim statements | Cash interest paid is 4.453 for Q1 2026, 0.842 for Q2 2026 and 5.295 for H1 2026; no twelve-month figure is printed. |
| Total debt / adjusted EBITDA | Total debt at carrying value / credit-agreement EBITDA, twelve months | 94.972 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | Not supplied: credit-agreement EBITDA is not stated at 2025-12-31 | Not applicable: no denominator | FY2025 / 2025-12-31 | CAD | CADm | Not calculable: adjusted EBITDA is not stated for this date | Not Calculable | Tier 2b unaudited interim statements | The sources state credit-agreement EBITDA for 2025-09-30 (about 1.9 billion, before the sale) and from 2026-03-31, not at 2025-12-31. |
| Net debt / adjusted EBITDA | Net debt (gross debt less cash) / credit-agreement EBITDA, twelve months | -858.141 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | Not supplied: credit-agreement EBITDA is not stated at 2025-12-31 | Not applicable: no denominator | FY2025 / 2025-12-31 | CAD | CADm | Not calculable: adjusted EBITDA is not stated for this date | Not Calculable | Tier 2b unaudited interim statements | The sources state credit-agreement EBITDA for 2025-09-30 (about 1.9 billion, before the sale) and from 2026-03-31, not at 2025-12-31. |
| Adjusted EBITDA / cash interest | Credit-agreement EBITDA / cash interest paid, twelve months | Not supplied: credit-agreement EBITDA is not stated at 2025-12-31 | Not applicable: no numerator | Not calculable: twelve-month cash interest paid is not supplied | Not applicable: no denominator | FY2025 / 2025-12-31 | CAD | CADm | Not calculable: adjusted EBITDA is not stated for this date | Not Calculable | Tier 2b unaudited interim statements | Twelve-month cash interest paid is not printed. The issuer's own coverage ratio uses financing and interest expense (see the next rows). |
| Total debt / EBITDA | Total debt at carrying value / EBITDA (Reported), twelve months | 87.598 | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no denominator | 2026-03-31 | CAD | CADm | Not calculable: twelve-month reported EBITDA is not calculable | Not Calculable | Tier 2b unaudited interim statements | Reported EBITDA for the twelve months to the balance-sheet date is not calculable: the full-year 2025 continuing-operations components are not in the set. |
| Net debt / EBITDA | Net debt (gross debt less cash) / EBITDA (Reported), twelve months | -670.271 | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no denominator | 2026-03-31 | CAD | CADm | Not calculable: twelve-month reported EBITDA is not calculable | Not Calculable | Tier 2b unaudited interim statements | Reported EBITDA for the twelve months to the balance-sheet date is not calculable: the full-year 2025 continuing-operations components are not in the set. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid, twelve months | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no numerator | Not calculable: twelve-month cash interest paid is not supplied; only three-month and six-month figures are printed | Not applicable: no denominator | 2026-03-31 | CAD | CADm | Not calculable: neither twelve-month operand is available | Not Calculable | Tier 2b unaudited interim statements | Cash interest paid is 4.453 for Q1 2026, 0.842 for Q2 2026 and 5.295 for H1 2026; no twelve-month figure is printed. |
| Total debt / adjusted EBITDA | Total debt at carrying value / credit-agreement EBITDA, twelve months | 87.598 | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 | 661.0 | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35 | 2026-03-31 | CAD | CADm | 0.13 | Calculated | Tier 2b unaudited interim statements | Issuer-adjusted: credit-agreement EBITDA for the twelve months to the date, pro forma for material dispositions; add-backs are not itemised. Debt is balance-sheet carrying value. |
| Net debt / adjusted EBITDA | Net debt (gross debt less cash) / credit-agreement EBITDA, twelve months | -670.271 | 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1 | 661.0 | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35 | 2026-03-31 | CAD | CADm | -1.01 | Calculated | Tier 2b unaudited interim statements | Issuer-adjusted: credit-agreement EBITDA for the twelve months to the date, pro forma for material dispositions; add-backs are not itemised. Debt is balance-sheet carrying value. |
| Adjusted EBITDA / cash interest | Credit-agreement EBITDA / cash interest paid, twelve months | 661.0 | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35 | Not calculable: twelve-month cash interest paid is not supplied | Not applicable: no denominator | 2026-03-31 | CAD | CADm | Not calculable: twelve-month cash interest paid is not supplied | Not Calculable | Tier 2b unaudited interim statements | Twelve-month cash interest paid is not printed. The issuer's own coverage ratio uses financing and interest expense (see the next rows). |
| Total debt / EBITDA | Total debt at carrying value / EBITDA (Reported), twelve months | 89.229 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no denominator | 2026-06-30 | CAD | CADm | Not calculable: twelve-month reported EBITDA is not calculable | Not Calculable | Tier 2b unaudited interim statements | Reported EBITDA for the twelve months to the balance-sheet date is not calculable: the full-year 2025 continuing-operations components are not in the set. |
| Net debt / EBITDA | Net debt (gross debt less cash) / EBITDA (Reported), twelve months | -631.108 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no denominator | 2026-06-30 | CAD | CADm | Not calculable: twelve-month reported EBITDA is not calculable | Not Calculable | Tier 2b unaudited interim statements | Reported EBITDA for the twelve months to the balance-sheet date is not calculable: the full-year 2025 continuing-operations components are not in the set. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid, twelve months | Not calculable: twelve-month reported EBITDA is not calculable | Not applicable: no numerator | Not calculable: twelve-month cash interest paid is not supplied; only three-month and six-month figures are printed | Not applicable: no denominator | 2026-06-30 | CAD | CADm | Not calculable: neither twelve-month operand is available | Not Calculable | Tier 2b unaudited interim statements | Cash interest paid is 4.453 for Q1 2026, 0.842 for Q2 2026 and 5.295 for H1 2026; no twelve-month figure is printed. |
| Total debt / adjusted EBITDA | Total debt at carrying value / credit-agreement EBITDA, twelve months | 89.229 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | 758.9 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9 | 2026-06-30 | CAD | CADm | 0.12 | Calculated | Tier 2b unaudited interim statements | Issuer-adjusted: credit-agreement EBITDA for the twelve months to the date, pro forma for material dispositions; add-backs are not itemised. Debt is balance-sheet carrying value. |
| Net debt / adjusted EBITDA | Net debt (gross debt less cash) / credit-agreement EBITDA, twelve months | -631.108 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1 | 758.9 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9 | 2026-06-30 | CAD | CADm | -0.83 | Calculated | Tier 2b unaudited interim statements | Issuer-adjusted: credit-agreement EBITDA for the twelve months to the date, pro forma for material dispositions; add-backs are not itemised. Debt is balance-sheet carrying value. |
| Adjusted EBITDA / cash interest | Credit-agreement EBITDA / cash interest paid, twelve months | 758.9 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9 | Not calculable: twelve-month cash interest paid is not supplied | Not applicable: no denominator | 2026-06-30 | CAD | CADm | Not calculable: twelve-month cash interest paid is not supplied | Not Calculable | Tier 2b unaudited interim statements | Twelve-month cash interest paid is not printed. The issuer's own coverage ratio uses financing and interest expense (see the next rows). |
| Credit-agreement EBITDA / financing and interest expense | Numerator / Denominator | 661.0 | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35 | 119.4 | 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35 | 2026-03-31 | CAD | CADm | 5.54 | Calculated | Tier 2b unaudited interim statements | Issuer definition of interest coverage (financing and interest expense excluding certain non-cash items); the issuer prints 5.5:1.0. Not cash interest. |
| Credit-agreement EBITDA / financing and interest expense | Numerator / Denominator | 758.9 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9 | 81.5 | 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9 | 2026-06-30 | CAD | CADm | 9.31 | Calculated | Tier 2b unaudited interim statements | Issuer definition of interest coverage; the issuer prints 9.3:1.0. Not cash interest. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q1 2026 | Q2 2026 | H1 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Operating | Daily production, continuing operations (boe/d, period rate) | 69,478 | 71,243 | 70,366 | Rising from Q1 to Q2 | Issuer-reported; a rate, not summed; Q2 production was 11% above Q2 2025 per the issuer |
| Operating | Total sales net of blending and other expense (CAD per boe) | 60.30 | 87.13 | 73.96 | Rising from Q1 to Q2 | Issuer-reported specified measure; moves with benchmark oil prices |
| Operating | Operating netback (CAD per boe) | 35.36 | 55.33 | 45.53 | Rising from Q1 to Q2 | Issuer-reported specified measure; before realized derivative losses |
| Operating | Average royalty rate (%) | 13.7 | 16.0 | 15.1 | Rising from Q1 to Q2 | Issuer-reported; guidance about 15% |
| Cash flow | Adjusted funds flow (CAD thousands) | 151,125 | 254,433 | 405,558 | Rising from Q1 to Q2 | Issuer capital management measure; after realized derivative losses of 29,289 in Q1 and 84,146 in Q2 |
| Cash flow | Free cash flow as the issuer defines it (CAD thousands) | 1,705 | 128,045 | 129,750 | Rising from Q1 to Q2 | Issuer specified measure; differs from operating cash flow less capital spending |
| Margin | EBITDA (Reported) as a percentage of petroleum and natural gas sales | 5.05 | 55.80 | 34.76 | Rising from Q1 to Q2 | Calculated; swings with derivative and foreign exchange items, so it is a poor trend measure |
| Growth | Petroleum and natural gas sales against the same quarter of 2025 revised (%) | -0.26 | 55.69 | 26.32 | Rising | Calculated from the revised 2025 columns; both periods are continuing operations |
| Market | WTI benchmark average (US$ per barrel) | 71.93 | 92.79 | 82.36 | Rising from Q1 to Q2 | Issuer-reported benchmark; oil prices rose sharply from March 2026 and the issuer calls them volatile |
| Market | WCS heavy oil differential to WTI (US$ per barrel) | -14.13 | -14.62 | -14.37 | Widening | Issuer-reported benchmark |
| Cash flow | Realized financial derivatives loss (CAD thousands) | 29,289 | 84,146 | 113,435 | Rising from Q1 to Q2 | Issuer-reported; oil contracts set before the sale; no WTI hedges are stated after Q2 2026 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA derived from statement lines (net income before income taxes plus net financing and interest plus depletion and depreciation), unadjusted | Credit-agreement (Bank) EBITDA: net income adjusted for financing and interest, income taxes, non-recurring losses and certain unrealized and non-cash items, over twelve months and pro forma for material dispositions | Reported EBITDA is not printed and no twelve-month figure can be built; the issuer states 758.9 and 661.0 for twelve months to 2026-06-30 and 2026-03-31 while derived quarterly EBITDA was 22.855 in Q1 2026 and 357.078 in Q2 2026 | 2026-03-31, 2026-06-30 | High: a 334.223 swing between quarters, of which 172.199 is the swing in the financial derivatives line (Q1 loss 150.756, Q2 gain 21.443) and the rest operating and other items | Financial foundation; Earnings quality; Fundamental credit | Ratios on issuer-adjusted EBITDA are stated and labelled; reported ratios are Not calculable; no silent choice between them |
| Net debt | Gross debt at carrying value less cash | Net cash: credit facilities and long-term notes adjusted for issuance costs, plus payables, share-based compensation liability and dividends payable, less cash, receivables, prepaids and inventory | At 2026-06-30 gross debt less cash is -631.108 while the issuer's net cash is 566.286 (shown as net debt -566.286) | 2025-12-31, 2026-03-31, 2026-06-30 | Medium: difference of 64.822 at 2026-06-30 (calculation C27) | Financial foundation; Liquidity; Fundamental credit | Both are shown with their definitions; leverage ratios use the method definition; the issuer figure is a labelled reference |
| Total debt | Balance-sheet carrying value of credit facilities and long-term notes: 89.229 at 2026-06-30 | Credit-agreement Total Debt of 95.5 (principal outstanding); contractual principal is 91.107 | Carrying value 89.229, principal 91.107, credit-agreement figure 95.5; the 4.4 of letters of credit under the facilities and 91.107 of principal sum to 95.507, which fits the issuer's figure (Analyst Judgement) | 2026-06-30 | Low: 6.271 between carrying value and the credit-agreement figure | Financial foundation; Covenant capacity | Carrying value is the ratio numerator; principal and the covenant figure are shown beside it |
| Lease obligations | Lease liabilities on their own balance-sheet lines are not added to Total Debt | The credit-agreement Total Debt definition also excludes lease obligations | Lease obligations were 23.019 at 2025-12-31 and 60.256 at 2026-06-30 after a 15-year take-or-pay agreement was recognised as a lease | 2025-12-31 to 2026-06-30 | Medium: 60.256 of fixed commitments outside debt | Financial foundation; Liquidity; Fundamental credit | Excluded from debt and shown separately in the metrics table |
| Interest basis | Cash interest paid as the cover denominator | Net financing and interest expense, and the issuer's coverage ratio uses twelve-month financing and interest expense excluding certain non-cash items | H1 2026 cash interest paid 5.295 against net financing and interest expense 7.613 (includes accretion and non-cash items) and net cash interest income of 3.456 after interest income of 11.078 (note 16) | H1 2026, 2026-03-31, 2026-06-30 | Medium: three different interest figures; the 9.3x cover uses a twelve-month expense of 81.5 | Financial foundation; Fundamental credit | Issuer cover is shown as a labelled free-name ratio; cash-interest cover is Not calculable |
| Free cash flow | Operating cash flow less capital spending | Cash flows from operating activities adjusted for changes in non-cash working capital, less additions to exploration and evaluation assets and oil and gas properties and lease payments | H1 2026 issuer free cash flow 129.750 against 85.135 on the method definition (difference 44.615: working capital 47.951, lease payments -4.002, other plant and equipment 0.666) | H1 2026, Q2 2026, Q1 2026 | Medium: 44.615 in six months | Financial foundation; Fundamental credit | Both are shown; shareholder returns are compared with the issuer figure and the method figure is stated beside it |
| Share repurchases in Q2 2026 | Cash paid in the cash flow statement | Release: consideration of 136; management discussion: 138.6 | One event with three figures: 136 consideration (release), 138.6 including the 2% federal tax (management discussion) and 138.603 in the cash flow statement; the 2.8 between consideration and the cash figure is the federal tax on repurchases (calculation C33) | Q2 2026 | Low: 2.8 is the federal tax | Financial foundation | The cash flow figure is used for cash; the release figure is consideration only |
| Cash at the start of 2026 | Balance sheet cash at 2025-12-31 of 953.113 | Opening cash for the cash flow statement of 954.916 after the IFRS 9 amendments adjustment of 1.803 | The 2025-12-31 balance sheet and the 2026 opening balance differ by the adjustment | Q1 2026, H1 2026 | Low: 1.803 | Financial foundation | Balance sheet figures stay as printed; the roll-forward uses the adjusted opening |
| Perimeter of 2025 comparatives | Continuing Canadian operations | Consolidated figures including Eagle Ford in the third-quarter 2025 statements and in the cash flow statement comparatives | Q2 2025 petroleum and natural gas sales are 411.036 continuing and 886.579 consolidated in the eight-quarter table | Q1 2025, Q2 2025, H1 2025 | High: the consolidated figure more than doubles continuing sales | Financial foundation; Earnings changes; Fundamental credit | Only the revised continuing columns are used; the consolidated 2025 cash flow comparatives are not used |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Balance sheet, debt at carrying value, net debt and liquidity at 2026-06-30 | Ready with Limitations | Unaudited interim statements; 98 days old at the cutoff; instrument terms from interim notes | Add the third-quarter 2026 statements if published before the cutoff |
| Leverage and interest cover on reported EBITDA | Not Ready | Twelve-month reported EBITDA and twelve-month cash interest paid cannot be built | Obtain the audited 2025 statements and revised 2025 quarters |
| Leverage and interest cover on issuer-adjusted EBITDA | Ready with Limitations | Credit-agreement EBITDA is stated without add-backs; interest cover uses financing and interest expense | Obtain the credit-agreement EBITDA reconciliation |
| Debt instrument terms, ranking and priority | Not Ready | Rank, security and guarantors are not stated for any instrument | Obtain the credit agreement and note indenture |
| Quarter and half-year comparison on the continuing perimeter | Ready with Limitations | Only Q1 and Q2 2025 revised columns exist; derived EBITDA includes derivative and foreign exchange items | Use the revised columns only |
| Full-year 2025 income and cash flow analysis | Not Ready | No full-year 2025 statement on the continuing perimeter is in the set | Obtain the audited 2025 statements |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 21 |
| Calculated | 25 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 21 |
| Fields total | 25 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 6 |

## Calculations

| Calculation ID | Calculation | Inputs (CAD millions unless stated) | Result |
|---|---|---|---|
| C01 | Total debt at carrying value, 2025-12-31 | Credit facilities 1.138 plus long-term notes 93.834 | 94.972 |
| C02 | Total debt at carrying value, 2026-03-31 | Credit facilities 0 (undrawn) plus long-term notes 87.598 | 87.598 |
| C03 | Total debt at carrying value, 2026-06-30 | Credit facilities 0 (undrawn) plus long-term notes 89.229 | 89.229 |
| C04 | Net debt, 2025-12-31 | Gross debt 94.972 less cash 953.113 | -858.141 |
| C05 | Net debt, 2026-03-31 | Gross debt 87.598 less cash 757.869 | -670.271 |
| C06 | Net debt, 2026-06-30 | Gross debt 89.229 less cash 720.337 | -631.108 |
| C07 | Reconciling items, 2026-06-30 | Carrying value 89.229 less contractual principal 91.107; equals the unamortised issuance cost shown in note 9 | -1.878 |
| C08 | EBITDA (Reported), Q1 2026 | Net income before income taxes -103.932 plus net financing and interest 3.097 plus depletion and depreciation 123.690 | 22.855 |
| C09 | EBITDA (Reported), Q2 2026 | 223.617 plus 4.516 plus 128.945 | 357.078 |
| C10 | EBITDA (Reported), H1 2026 | 119.685 plus 7.613 plus 252.635; equals Q1 2026 plus Q2 2026 (22.855 plus 357.078) | 379.933 |
| C11 | EBITDA (Reported), Q1 2025 revised | -8.046 plus 50.567 plus 116.743 | 159.264 |
| C12 | EBITDA (Reported), Q2 2025 revised | 126.700 plus 46.869 plus 118.004 | 291.573 |
| C13 | Cash plus available facility capacity, 2025-12-31 | Cash 953.113 plus capacity 744.2 | 1697.313 |
| C14 | Cash plus available facility capacity, 2026-03-31 | Cash 757.869 plus capacity 745.6 | 1503.469 |
| C15 | Cash plus available facility capacity, 2026-06-30 | Cash 720.337 plus capacity 745.6 | 1465.937 |
| C16 | Total debt / issuer-adjusted EBITDA, 2026-06-30 | Total debt 89.229 divided by credit-agreement EBITDA 758.9 | 0.1176x |
| C17 | Net debt / issuer-adjusted EBITDA, 2026-06-30 | Net debt -631.108 divided by 758.9 | -0.8316x |
| C18 | Total debt / issuer-adjusted EBITDA, 2026-03-31 | 87.598 divided by 661.0 | 0.1325x |
| C19 | Net debt / issuer-adjusted EBITDA, 2026-03-31 | -670.271 divided by 661.0 | -1.0140x |
| C20 | Credit-agreement EBITDA / financing and interest expense, 2026-06-30 | 758.9 divided by 81.5 | 9.3117x |
| C21 | Credit-agreement EBITDA / financing and interest expense, 2026-03-31 | 661.0 divided by 119.4 | 5.5360x |
| C22 | Shareholder returns, H1 2026 | Share repurchases 316.318 plus dividends declared 32.750 | 349.068 |
| C23 | Operating cash flow less capital spending, H1 2026 | Operating cash flow 353.055 less additions to exploration and evaluation assets 1.737, oil and gas properties 265.517 and other plant and equipment 0.666 | 85.135 |
| C24 | Operating cash flow less capital spending, Q2 2026 | 230.852 less 122.242 and 0.346 | 108.264 |
| C25 | Operating cash flow less capital spending, Q1 2026 | 122.203 less 1.737, 143.275 and 0.320 | -23.129 |
| C26 | Pro forma net debt after the 2026-07-02 dividend payment | Net debt -631.108 plus dividend paid 16.144 | -614.964 |
| C27 | Difference between issuer net cash and net debt, 2026-06-30 | Net cash on the method definition 631.108 (net debt -631.108) less issuer net cash 566.286 | 64.822 |
| C28 | Opening cash, H1 2026 | Cash at 2025-12-31 953.113 plus IFRS 9 adjustment 1.803 | 954.916 |
| C29 | Cash roll-forward, H1 2026 | Opening 954.916 plus change -234.579 | 720.337 |
| C30 | Reported EBITDA margin, Q1 2026 / Q2 2026 / H1 2026 | 22.855/452.954; 357.078/639.943; 379.933/1,092.897 (percent) | 5.05%; 55.80%; 34.76% |
| C31 | Second-quarter 2026 revenue change against second-quarter 2025 revised | Petroleum and natural gas sales 639.943 divided by 411.036, less 1 | 55.69% |
| C32 | Shareholder returns as a multiple of issuer-defined free cash flow, H1 2026 | 349.068 divided by 129.750 | 2.69x |
| C33 | Second-quarter share repurchase consideration, federal tax and cash paid | Consideration 310.1 less 174.3; federal tax 6.2 less 3.4; cash paid 135.8 plus 2.8 | 135.8; 2.8; 138.6 (the cash flow statement shows 138.603) |

## Gaps

- High: Reported EBITDA for the twelve months to 2026-03-31 and 2026-06-30 cannot be calculated because the full-year 2025 continuing-operations statements are not in the set; the leverage and interest-cover charts therefore carry no reported figure and only the issuer-adjusted ratios exist. Obtaining the audited 2025 statements and the revised 2025 quarters would close it.
Basis: 40-F_2025-12-31_bte-20251231.htm.jsonl, page 2; 40-F_2025-12-31_bte-20251231.htm.jsonl, page 6; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 1–2
- High: The issuer's credit-agreement EBITDA of CAD 661.0 million and CAD 758.9 million is stated without its add-backs, so the bridge from reported to adjusted EBITDA cannot be built and the quality of the adjustment cannot be tested. The compliance reconciliation under the credit agreement would close it.
Basis: 6-K-EX-99.1_2026-03-31_tm2613640d2_ex99-1.htm.jsonl, page 35; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9
- Medium: Twelve-month cash interest paid is not printed, only quarterly and half-year amounts, so cover on cash interest is not calculable; the issuer's cover uses financing and interest expense instead. A twelve-month interest paid figure would close it.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 9
- Medium: The rank, security, guarantors and obligor scope of the revolving facilities and the notes are not stated, so the debt stack cannot be drawn and no instrument is placed in a secured or senior subtotal. The executed credit agreement and note indenture would close it.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 8–10
- Medium: The audited 2025 balance sheet and notes are not in the set, so the 2025-12-31 balances come from interim comparatives and the year-end debt activity is not itemised. The audited annual statements would close it.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2025-12-31_a991-2025yepressrelease.htm.jsonl, page 3
- Low: Source dashes are not read as zero: Q2 2026 non-cash share-based compensation, credit facility repayment, exploration and evaluation additions and consideration for assets held for sale; Q1 2026 income taxes paid; and the balance-sheet lines for inventory at 2025-12-31, assets and liabilities held for sale and the derivative liability at 2026-06-30. Each is shown as not supplied, and the issuer's tax narrative is used only where it states no current tax.
Basis: 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-03-31_a991-q12026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 1; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3
- Low: The dates, amounts and prices of the fourth-quarter 2025 note redemptions and facility repayment, and the date of the facility amendment, are not stated, so the path from the 2025-09-30 debt to the 2025-12-31 debt is not itemised; the balances at both dates are stated.
Basis: 6-K-EX-99.1_2025-09-30_a991-q32025fs.htm.jsonl, pages 8–10; 6-K-EX-99.1_2026-08-05_tm2619297d2_ex99-1.htm.jsonl, page 38; Source readiness (CP-0)
- Low: The first-half 2026 investing cash flow includes CAD 12.4 million from discontinued operations for post-closing items, while the income statement shows continuing operations only, so investing cash flow and income lines are not on an identical perimeter; operating and financing flows show no discontinued amount.
Basis: 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, page 3; 6-K-EX-99.1_2026-06-30_a991-q22026fs.htm.jsonl, pages 7–8

## Next module
The orchestrator selects the next module.
