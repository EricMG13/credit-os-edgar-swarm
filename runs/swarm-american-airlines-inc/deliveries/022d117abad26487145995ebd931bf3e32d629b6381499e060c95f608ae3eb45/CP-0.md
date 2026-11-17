---
issuer_id: american-airlines-inc
module_id: CP-0
analysis_date: 2026-11-05
run_id: american-airlines-inc-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
readiness_verdict: READY_WITH_LIMITATIONS
---

# CP-0 Source readiness for AMERICAN AIRLINES, INC.

## Request
Source readiness for AMERICAN AIRLINES, INC. (american-airlines-inc), as of 2026-11-05, under the credit_snapshot pathway. The scope is whether the seven supplied files can support the requested financial foundation, business and governance, and fundamental credit work, and what remains blocked.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_aal-20251231.htm.jsonl | Combined annual report on Form 10-K of American Airlines Group Inc. and American Airlines, Inc. for the year ended December 31, 2025 | 2026-02-18 | 241cb406125cf4a40a3dec4d315c7a8e709f73f5f12957d46a28f056de7b338c | Controlling audited annual statements of the issuer, business and risk disclosure, omitted governance items, exhibit list. |
| 10-Q_2026-03-31_aal-20260331.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-23 | bd54f0ef7be7c4905b1acb2a15d1e60b5211836b6a174b954a6d8e979771d4f3 | First-quarter 2026 issuer statements, debt and liquidity disclosure; signature date. |
| 10-Q_2026-06-30_aal-20260630.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-23 | e590d34e327bfac4cc2a446c7444656df89c4b6aac523f8df741e9c71b1ace9a | Second-quarter and first-half 2026 issuer statements, debt and liquidity disclosure; signature date. |
| 10-Q_2026-09-30_aal-20260930.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-22 | edb09356472b6a21c11979d0ace904761af85e302b5218542813aede49a0decc | Latest-period issuer statements, debt, liquidity, covenant summary, commitments, subsequent items, exhibit list. |
| EX-99.2_2026-04-23_earningspresentation.htm.jsonl | First-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-04-23 | 9a2e0cf77a5348cca76e4e1fa089b91044513dded2916dcf498cbc76a4f142fe | Parent-level management context and non-GAAP reconciliations; publication date. |
| EX-99.2_2026-07-23_earningspresentation.htm.jsonl | Second-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-07-23 | 60d450333d317c8f5bcb2c0834ff53272fd96fa253d4a67d36813c30742d7ee9 | Parent-level management context, outlook and non-GAAP reconciliations; publication date. |
| EX-99.2_2026-10-22_earningspresentation.htm.jsonl | Third-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-10-22 | ce6723a4b2e59ac217d38de9b2fa855bbf5fa9fd11b713b0732222688fa7865b | Parent-level management context, fourth-quarter and full-year 2026 outlook, non-GAAP reconciliations; publication date. |

No upstream analytical handoff was supplied to this module, and no external source was used. Document dates are the signature or presentation dates printed in each file.

## Findings

### Bottom line
The supplied filings support a credit snapshot of American Airlines, Inc. through September 30, 2026, but creditor protections cannot be confirmed because no executed debt documents, agency ratings or market prices were supplied.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 71–73; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61

The issuer files jointly with its parent, American Airlines Group Inc., and presents its own statements, debt notes and liquidity table in each annual and quarterly report, so issuer figures can be read apart from the parent's. The earnings presentations describe the parent only and are parent context. Governance disclosure for the issuer is omitted from the annual report, and nothing dated after October 22, 2026 was supplied for the period to the November 5, 2026 cutoff.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 25–27; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 1; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 73

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-02-18 | day | 2026-02-18 | Combined annual report on Form 10-K for the year ended December 31, 2025 signed for American Airlines Group Inc. and American Airlines, Inc. | Historical — Date: February 18, 2026 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 313 | Sets the audited FY2025 base year for the issuer's statements and debt notes. |
| 2026-04-23 | day | 2026-04-23 | First-quarter 2026 earnings presentation published | Historical — April 23, 2026 | EX-99.2_2026-04-23_earningspresentation.htm.jsonl, page 1 | Parent-level first-quarter context; not issuer-level. |
| 2026-04-23 | day | 2026-04-23 | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 signed | Historical — Date: April 23, 2026 | 10-Q_2026-03-31_aal-20260331.htm.jsonl, page 57 | Issuer first-quarter 2026 statements and financing disclosure. |
| 2026-07-23 | day | 2026-07-23 | Second-quarter 2026 earnings presentation published | Historical — July 23, 2026 | EX-99.2_2026-07-23_earningspresentation.htm.jsonl, page 1 | Parent-level second-quarter context and outlook; not issuer-level. |
| 2026-07-23 | day | 2026-07-23 | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 signed | Historical — Date: July 23, 2026 | 10-Q_2026-06-30_aal-20260630.htm.jsonl, page 71 | Issuer first-half 2026 statements and financing disclosure. |
| 2026-10-22 | day | 2026-10-22 | Third-quarter 2026 earnings presentation published | Historical — October 22, 2026 | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 1 | Parent-level third-quarter context and outlook; not issuer-level. |
| 2026-10-22 | day | 2026-10-22 | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 signed | Historical — Date: October 22, 2026 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 73 | Latest issuer-level evidence; fixes the information horizon 14 days before the cutoff. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 9 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 12 |
| Fields total | 16 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

### T1 Input gate

| Gate item | Result | Detail | Source |
|---|---|---|---|
| Objective | Stated by pathway | No objective was entered, so the objective is the credit_snapshot pathway use case: an issuer-level credit snapshot from Source readiness, Financial foundation, Business & governance and Fundamental credit. | Run settings, not issuer evidence |
| Issuer identity | Confirmed | American Airlines, Inc. is a registrant under Commission file number 1-2691, Delaware, 1 Skyview Drive, Fort Worth, Texas; co-registrant American Airlines Group Inc. is 1-8400. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 1 |
| Reporting perimeter | Combined filing with issuer-level statements | The report is filed by American Airlines Group Inc. and its wholly-owned subsidiary American Airlines, Inc.; the issuer has its own condensed statements and notes in each 10-Q and its own Item 8B in the 10-K. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 3, 25–27 |
| As-of date and cutoff | 2026-11-05 | Latest document is dated 2026-10-22; no document dated between 2026-10-23 and 2026-11-05 was supplied. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 73 |
| Periods covered | FY2025 and Q1, H1 and 9M 2026 | Current period is Q3 2026 with nine months to September 30, 2026; prior period is FY2025; no restated FY2025 comparatives were found in the latest report. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 1 |
| Reporting currency and unit | USD, millions | Statements are headed "In millions"; the run settings state USD. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Executed legal documents | Not supplied | Run settings declare none; the exhibit lists name indentures, credit agreements, pass-through and note purchase agreements that are not in the file set. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 71–73 |
| Ratings, market quotes, portfolio | Not supplied | Run settings leave ratings, quotes and portfolio blank, and no agency rating or level is printed in the filings; blank is not treated as zero. The annual report states only that the group's corporate credit rating is non-investment grade. | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 33 |
| Source gate verdict | READY_WITH_LIMITATIONS | Filings and presentations cover the requested period and entity; debt-document, governance, ratings and post-October 22 evidence is missing. | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3 |

### P3 Input inventory

| Source ID | File | Supplied path | Bytes | Pages | sha256 | Original document sha256 stated on page 1 | Document family | Provisional entity | Period | Duplicate candidate | Accessible |
|---|---|---|---|---|---|---|---|---|---|---|---|
| S01 | 10-K_2025-12-31_aal-20251231.htm.jsonl | source-text/10-K_2025-12-31_aal-20251231.htm.jsonl | 800056 | 314 | 241cb406125cf4a40a3dec4d315c7a8e709f73f5f12957d46a28f056de7b338c | c665a78d53423061a9df951746c8a726ea65de985eb8e9238f290e16b2587508 | Annual report | American Airlines Group Inc. and American Airlines, Inc. | FY2025 | None | Yes |
| S02 | 10-Q_2026-03-31_aal-20260331.htm.jsonl | source-text/10-Q_2026-03-31_aal-20260331.htm.jsonl | 152395 | 57 | bd54f0ef7be7c4905b1acb2a15d1e60b5211836b6a174b954a6d8e979771d4f3 | f910bdbbde7abb8b6a7e69b629f3ad1730405ce72efd4b7cb34a4a9f8f6c546e | Quarterly report | American Airlines Group Inc. and American Airlines, Inc. | Q1 2026 | None | Yes |
| S03 | 10-Q_2026-06-30_aal-20260630.htm.jsonl | source-text/10-Q_2026-06-30_aal-20260630.htm.jsonl | 186621 | 71 | e590d34e327bfac4cc2a446c7444656df89c4b6aac523f8df741e9c71b1ace9a | f06505470a29163705f93809251a8226117c9bbac50790f48d87918dd45b1993 | Quarterly report | American Airlines Group Inc. and American Airlines, Inc. | Q2 and H1 2026 | None | Yes |
| S04 | 10-Q_2026-09-30_aal-20260930.htm.jsonl | source-text/10-Q_2026-09-30_aal-20260930.htm.jsonl | 190221 | 73 | edb09356472b6a21c11979d0ace904761af85e302b5218542813aede49a0decc | f6a87d433c897771e5351e55b14af13ae830eabec56bc7991432352594111465 | Quarterly report | American Airlines Group Inc. and American Airlines, Inc. | Q3 and 9M 2026 | None | Yes |
| S05 | EX-99.2_2026-04-23_earningspresentation.htm.jsonl | source-text/EX-99.2_2026-04-23_earningspresentation.htm.jsonl | 25759 | 11 | 9a2e0cf77a5348cca76e4e1fa089b91044513dded2916dcf498cbc76a4f142fe | e403f9238003e4fc84858c598792557f1707d608370d6152a0bd870012f8902f | Earnings presentation | American Airlines Group Inc. | Q1 2026 | None | Yes |
| S06 | EX-99.2_2026-07-23_earningspresentation.htm.jsonl | source-text/EX-99.2_2026-07-23_earningspresentation.htm.jsonl | 21325 | 9 | 60d450333d317c8f5bcb2c0834ff53272fd96fa253d4a67d36813c30742d7ee9 | 127346da1539fa467d205e2c3e8286818f6a961bbbf80a48abdda113d58a26e7 | Earnings presentation | American Airlines Group Inc. | Q2 2026 | None | Yes |
| S07 | EX-99.2_2026-10-22_earningspresentation.htm.jsonl | source-text/EX-99.2_2026-10-22_earningspresentation.htm.jsonl | 23186 | 10 | ce6723a4b2e59ac217d38de9b2fa855bbf5fa9fd11b713b0732222688fa7865b | 57eb6f8456ad48fe3d9702bc555f006d7720a371bc17644011cf2d56e7ec37f5 | Earnings presentation | American Airlines Group Inc. | Q3 2026 | None | Yes |

### T2 Source register

| Source ID | File | Hierarchy tier | Quality and authority | Entity perimeter | Period | Active representation | Limitation | Source |
|---|---|---|---|---|---|---|---|---|
| S01 | 10-K_2025-12-31_aal-20251231.htm.jsonl | 1, primary filing | Audited annual statements with auditor's report for the issuer | Group statements (Item 8A) and issuer statements (Item 8B) | FY2025 | Supplied page-text file | Items 10 to 13 omitted for the issuer; proxy statement not supplied | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 199–203 |
| S02 | 10-Q_2026-03-31_aal-20260331.htm.jsonl | 1, primary filing | Unaudited interim statements | Group and issuer | Q1 2026 | Supplied page-text file | Superseded for the latest balance sheet by the Q3 report | 10-Q_2026-03-31_aal-20260331.htm.jsonl, pages 21–24 |
| S03 | 10-Q_2026-06-30_aal-20260630.htm.jsonl | 1, primary filing | Unaudited interim statements | Group and issuer | Q2 and H1 2026 | Supplied page-text file | Superseded for the latest balance sheet by the Q3 report | 10-Q_2026-06-30_aal-20260630.htm.jsonl, pages 25–27 |
| S04 | 10-Q_2026-09-30_aal-20260930.htm.jsonl | 1, primary filing | Unaudited interim statements, latest period | Group and issuer | Q3 and 9M 2026 | Supplied page-text file | Covenant terms are summarised, not quoted from agreements | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 25–27 |
| S05 | EX-99.2_2026-04-23_earningspresentation.htm.jsonl | 2, issuer presentation | Management presentation; supporting only | Parent only | Q1 2026 | Supplied page-text file | Does not override the filings; no issuer-level figures | EX-99.2_2026-04-23_earningspresentation.htm.jsonl, page 1 |
| S06 | EX-99.2_2026-07-23_earningspresentation.htm.jsonl | 2, issuer presentation | Management presentation; supporting only | Parent only | Q2 2026 | Supplied page-text file | Does not override the filings; no issuer-level figures | EX-99.2_2026-07-23_earningspresentation.htm.jsonl, page 1 |
| S07 | EX-99.2_2026-10-22_earningspresentation.htm.jsonl | 2, issuer presentation | Management presentation; supporting only | Parent only | Q3 2026 | Supplied page-text file | Outlook is parent-level management guidance; does not override the filings | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 6 |

### T4 Content-to-module map

| Module | Evidence demand | Active sources | Disposition | Limitation | Source |
|---|---|---|---|---|---|
| CP-1 Financial foundation | Issuer statements, debt instruments and maturities, liquidity, cash flow, FY2025 and 9M 2026 | S01, S02, S03, S04 | Recommended; READY_WITH_LIMITATIONS | Debt read from filing notes, not executed agreements; parent presentation figures to be labelled as parent | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 25–27; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 31–36 |
| CP-1A Business & governance | Business model, fleet, loyalty, labour, risk factors, ownership and governance | S01, S04 | Recommended; READY_WITH_LIMITATIONS | Governance items omitted for the issuer; proxy statement not supplied | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 9–32 |
| CP-2 Fundamental credit | Synthesis of the financial foundation and the business view, with management discussion | S01, S04 | Recommended; READY_WITH_LIMITATIONS | Depends on the two modules above; legal protections unconfirmed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 43–64 |
| CP-1B Earnings changes | Quarter and nine-month comparison with prior year | S04, S07 | Not selected in this run; sources support | Presentation figures are parent only | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 6–7 |
| CP-1C Peer benchmark | Peer set and peer financials | None | Blocked | Run settings supply no peers and no peer filings are in the file set | Not supplied: no peer documents in the seven files |
| CP-1D Earnings quality | Special items and non-GAAP reconciliations | S04, S07 | Not selected in this run; sources support | Reconciliations are parent only | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, pages 7–10 |
| CP-2A Downside | Stress inputs from the financial foundation | S04 | Not selected in this run; sources support | Needs the financial foundation first | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 43–64 |
| CP-2D Liquidity | Cash, short-term investments, undrawn facilities, minimum liquidity covenant | S04 | Not selected in this run; sources support | Issuer and parent liquidity are printed side by side and differ | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–61 |
| CP-2E Rates, FX & hedging | Interest-rate, fuel and currency exposure | S04 | Not selected in this run; sources support | Fuel is stated as unhedged by policy | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 45; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 68–69 |
| CP-2G Forward credit model | Quarterly history and management outlook | S04, S07 | Not selected in this run; partly supported | Outlook covers the parent and the fourth quarter and full year 2026 only | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 6 |
| CP-2H Ratings & triggers | Agency ratings and rating-linked terms | None | Blocked | No agency ratings supplied; the annual report states only that the group's corporate credit rating is non-investment grade and that some margins depend on it | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 33; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 162 |
| CP-3 Security selection | Executed security and guarantee terms | None | Blocked | No executed governing documents supplied | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 71–73 |
| CP-3C Refinancing & LME | Maturity profile, new issuance, amendments | S04 | Not selected in this run; sources support | Maturities taken from filing notes | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 31–36 |
| CP-3D Market-implied risk | Dated bond or loan prices | None | Blocked | Run settings supply no quotes | Not supplied: no market data in the seven files |
| CP-4 Legal & covenants | Executed indentures and credit agreements | None | Blocked | A filing's summary of covenants is not an executed document | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61 |
| CP-4C Recovery & fulcrum | Collateral and priority terms | None | Blocked | Needs executed documents and collateral valuations | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 71–73 |
| CP-5 Evidence validation | Handoffs of the analytical modules | None | Not selected in this run | Needs the analytical handoffs, which this run does not include | Not supplied: not part of the requested modules |
| CP-6 Committee decision | Portfolio limits and prior analysis | None | Not selected in this run | No portfolio supplied | Not supplied: no portfolio in the run settings |
| CP-8 Changes since the last run | An earlier run of the same issuer and pathway | None | Inapplicable | First run of this pathway; no earlier handoff exists | Not supplied: no earlier run |
| CP-L10 Short credit snapshot | Financial foundation and fundamental credit | S01, S04 | Not selected in this run; sources support | Follows the three recommended modules | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 43–64 |
| CP-DR Research questions | Missing documents named as research needs | None | Not selected in this run | Candidate need: the executed debt agreements and the August 12, 2026 current report named in the exhibit list | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 72–73 |

### T6 Evidence trace

| Ref | Claim | Evidence observed | Source | Result |
|---|---|---|---|---|
| E1 | American is a co-registrant with its parent | Cover lists American Airlines Group Inc. (1-8400) and American Airlines, Inc. (1-2691), both Delaware | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 1 | Directly sourced |
| E2 | Issuer statements exist in the latest quarter | American's condensed statements of operations, balance sheet and cash flows are presented separately from the parent's | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 25–27 | Directly sourced |
| E3 | Issuer statements exist for the prior year | Item 8B holds the issuer's consolidated statements with the auditor's report dated February 18, 2026 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 199–203 | Directly sourced |
| E4 | Issuer and parent liquidity differ | Total available liquidity at September 30, 2026: parent USD 11,797 million; issuer USD 11,763 million | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60 | Directly sourced; both perimeters to be kept apart |
| E5 | Issuer governance items are omitted | American omitted Items 10 to 13 under General Instruction I; parent proxy statement is incorporated by reference | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3 | Directly sourced |
| E6 | Covenants are summarised only | Debt agreements contain a minimum of USD 2.0 billion of unrestricted cash and undrawn revolver availability, loan-to-value tests and a peak debt service coverage test; compliance stated at latest measurement dates | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61 | Directly sourced; thresholds other than the liquidity minimum not printed |
| E7 | Executed debt documents are outside the file set | Exhibit list incorporates agreements by reference to earlier filings, including a current report filed August 12, 2026 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 72–73 | Directly sourced; documents themselves not supplied |
| E8 | Presentations are parent-level | Title page reads American Airlines Group Inc. third-quarter 2026 financial results | EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 1 | Directly sourced |
| E9 | Items after the quarter appear in the latest report | Purchase options for five Airbus A320 Family aircraft exercised in October 2026; two Boeing 777-200ER aircraft committed for the fourth quarter of 2026 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 65 | Directly sourced; dated by month only; belongs to later analysis |
| E10 | Run settings place the issuer in the Cayman Islands | Filings state Delaware incorporation; the Cayman Islands is named for the AAdvantage Loyalty IP Ltd. financing vehicle | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 1, 17 | Conflicting; filings control, settings are not evidence |
| E11 | Source gate is partial | No executed legal documents, agency ratings, quotes or portfolio supplied | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 71–73 | Analyst inference from the missing-document pattern |
| E12 | Information horizon is 14 days before the cutoff | Latest dated document is October 22, 2026; cutoff is November 5, 2026 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 73 | Analyst inference; no later document supplied |

## Calculations
No calculation is made in this module. Counts of files, pages and bytes in the inventory are tallies read from the supplied files.

## Gaps

| Gap | Severity | Affected analysis | Remediation |
|---|---|---|---|
| Executed indentures, credit agreements, pass-through and note purchase agreements are not supplied; the filings only summarise covenants and security | MATERIAL | Legal & covenants, Covenant capacity, Structural priority, Recovery & fulcrum, Security selection | Supply the executed agreements named in the exhibit list, or accept that creditor protections stay unconfirmed |
| Issuer governance items are omitted from the annual report and the parent proxy statement is not supplied | MINOR | Business & governance | Supply the 2026 proxy statement as parent context |
| Earnings presentations cover American Airlines Group Inc. only; no issuer-level earnings release was supplied | MINOR | Financial foundation, Earnings changes | Use the issuer's own statements; label presentation figures as parent context |
| Nothing dated after October 22, 2026 was supplied; the August 12, 2026 current report named in the exhibit list is not in the file set | MINOR | Financial foundation, Refinancing & LME | Supply later filings up to the November 5, 2026 cutoff |
| Agency ratings and levels, market quotes, peers and portfolio limits are not supplied (the filings say only that the group's corporate credit rating is non-investment grade); blank settings are not zero | MINOR | Ratings & triggers, Market-implied risk, Peer benchmark, Committee decision | Supply them if those analyses are wanted |
| Conflict: run settings state the Cayman Islands as the issuer's country, while the filings state Delaware; filings control and the settings are not evidence | MINOR | Business & governance | Correct the run settings |

## Next module
The orchestrator selects the next module.
