---
issuer_id: american-airlines-inc
module_id: CP-1A
analysis_date: 2026-11-05
run_id: american-airlines-inc-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
---

# CP-1A Business & governance for AMERICAN AIRLINES, INC.

## Request
Business, ownership, new debt and governance facts for AMERICAN AIRLINES, INC. (american-airlines-inc), as of 2026-11-05, under the credit_snapshot pathway. The scope is the issuer's own business and its relationship with its parent, using the annual report for 2025 and the third-quarter 2026 report.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_aal-20251231.htm.jsonl | Combined annual report on Form 10-K of American Airlines Group Inc. and American Airlines, Inc. for the year ended December 31, 2025 | 2026-02-18 | 241cb406125cf4a40a3dec4d315c7a8e709f73f5f12957d46a28f056de7b338c | Business description, fleet, labour, loyalty program, equity and dividend disclosure, guarantees, related-party note, omitted governance items. |
| 10-Q_2026-09-30_aal-20260930.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-22 | edb09356472b6a21c11979d0ace904761af85e302b5218542813aede49a0decc | Latest revenue mix, 2026 financing, related-party balances, litigation, commitments, exhibit list. |
| EX-99.2_2026-10-22_earningspresentation.htm.jsonl | Third-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-10-22 | ce6723a4b2e59ac217d38de9b2fa855bbf5fa9fd11b713b0732222688fa7865b | Parent-level management statements, used as context only. |

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-Q_2026-03-31_aal-20260331.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-23 | bd54f0ef7be7c4905b1acb2a15d1e60b5211836b6a174b954a6d8e979771d4f3 | Inventory information from Source readiness only; not used for facts. |
| 10-Q_2026-06-30_aal-20260630.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-23 | e590d34e327bfac4cc2a446c7444656df89c4b6aac523f8df741e9c71b1ace9a | Inventory information from Source readiness only; not used for facts. |
| EX-99.2_2026-04-23_earningspresentation.htm.jsonl | First-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-04-23 | 9a2e0cf77a5348cca76e4e1fa089b91044513dded2916dcf498cbc76a4f142fe | Inventory information from Source readiness only; not used for facts. |
| EX-99.2_2026-07-23_earningspresentation.htm.jsonl | Second-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-07-23 | 60d450333d317c8f5bcb2c0834ff53272fd96fa253d4a67d36813c30742d7ee9 | Inventory information from Source readiness only; not used for facts. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | ef9f4eb6c899bc40f69251d5b030a69569521b0da9a81ab880b7552fbcd7b445 | Accepted source inventory, reporting perimeter, document dates and the limitation that no executed debt documents or proxy statement were supplied. |

No external sources were used.

## Findings

### Bottom line
American is wholly owned by its parent with no sponsor, and creditors' main governance risk is cash lent upstream to the parent rather than retained: the net receivable from the parent reached USD 12,512 million.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9; calculation C05

The parent otherwise looks supportive: it guarantees the issuer's credit facilities and the AAdvantage financing, the issuer's equity statement shows no dividend, and 2026 financing refinanced and extended debt rather than restructuring it. Governance detail for the issuer itself is omitted from the annual report, so board control and related-party terms are not established.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 164–168; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–36

### Key findings
The issuer's cash is moving to its parent as loans, not dividends. The net receivable from the parent was USD 12,512 million at September 30, 2026 against USD 11,938 million at year-end, and the annual report says part of the earlier increase was American funding the parent's USD 1.0 billion cash settlement of its convertible notes in July 2025. Cash lent this way is no longer available to repay American's own debt until the parent repays it, so the parent's liquidity and refinancing ability matter to the issuer's creditors; repayment terms are not stated.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257; calculation C05

The parent supports the issuer's debt rather than extracting from it. It guarantees American's credit facilities as a senior unsecured obligation, guarantees the AAdvantage notes and term loans together with special-purpose guarantors, and has in certain cases guaranteed equipment notes, while the issuer's equity statement shows no dividend paid and the parent paid no cash dividend or share repurchase in 2025 or 2024. The guarantees are only as strong as the parent's own balance sheet, which carries separate debt outside the issuer.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 164; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 167–168; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 127; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 102; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 103; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 203

The loyalty program gives the business an unusually durable cash source. Loyalty revenue was 13.42% of operating revenues in the first nine months of 2026, and the group received USD 6.2 billion of cash from co-branded card and other partners in 2025, but the same program carries the largest customer-funded liability and also backs the AAdvantage secured financing, so a weaker partner relationship would hit liquidity and collateral together.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 13; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 167–168; calculation C02

Cost flexibility is limited and fuel is unhedged. Salaries, wages and benefits were 30.18% of operating expenses in the first nine months of 2026, about 86% of the group's employees are covered by labour contracts, and the group had no fuel hedges outstanding at the end of 2025 under a policy not to hedge. Margins therefore move with fuel prices and wage settlements and not with management cost actions.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 17; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 110; calculation C07

Financing in 2026 was creditor-neutral to constructive, but it added secured debt. American extended its revolving facilities to 2031, refinanced and upsized its 2014 term loan to a 2033 maturity, repaid its short-term term loan, prepaid the 8.50% senior secured notes and issued three new aircraft and engine pass-through certificate series plus equipment loans. Cash-flow proceeds exceeded payments by USD 590 million for the nine months even after retirements of USD 1,939 million, so the effect is a longer, more secured maturity profile and not a smaller debt stock.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–36; calculation C06

Governance transparency for the issuer is thin. American omits the executive, director and ownership items of its annual report under the reduced-disclosure rules, the parent's proxy statement was not supplied, and the audit opinion and controls conclusions are clean, so the weakness is missing detail, not adverse findings. The parent's tax benefit preservation plan, which runs to October 2027, deters certain share acquisitions and so lowers the chance of a tax-driven ownership change during that period.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 199–201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 258; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 104

### Contrary evidence and what would change the view
The strongest evidence against concern is that lending to the parent is intragroup, the parent guarantees much of the issuer's debt, and the issuer reports USD 11,763 million of available liquidity with no dividend leakage. If the parent repays the receivable or discloses that it is repayable on demand, the governance risk would fall to low; if the receivable keeps growing while earnings weaken, or the parent funds distributions, buybacks or its own long-dated debt maturities from American's cash, the risk would rise to high.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257

### Limitations
- The repayment terms and security of the receivable from the parent are not stated, so the finding that cash is trapped upstream may overstate the risk if the balance is repayable on demand.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41
- Board, control, fee and sponsor-style disclosure for the issuer is omitted, so the medium governance risk level rests on observed behaviour, not on control rights.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3
- No executed agreements were supplied, so the finding that 2026 financing was creditor-neutral rests on the filings' descriptions of terms, and guarantee scope beyond those descriptions is not established.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 164–168; Source readiness (CP-0)
- Nothing dated after October 22, 2026 was supplied, so later financing, distributions or litigation outcomes could change the behaviour findings.
Basis: Source readiness (CP-0)

### Company and operating model

| Item | Detail | Source |
|---|---|---|
| Business | Major network air carrier operating scheduled passenger and cargo service through nine hubs and partner gateways, with wholly-owned and third-party regional carriers flying as American Eagle | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9 |
| Revenue model | Passenger travel 83.81% of revenue, loyalty revenue 13.42%, cargo 1.62% in the nine months to September 30, 2026; calculation C01 and C02 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29 |
| Geography | Domestic 70.89% of passenger revenue; Atlantic 13.83%; Latin America 12.46%; Pacific 2.83%; calculation C03 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29 |
| Network and fleet | 1013 operating mainline aircraft at 2025-12-31, 54.00% owned; 567 regional aircraft flown by American Eagle carriers; calculation C04 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 100 |
| Cost base | Salaries, wages and benefits 30.18% of operating expenses; about 86% of the group's employees are unionised; no fuel hedges at 2025 year-end | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 17; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 110 |
| Alliances | Founding member of the oneworld Alliance; joint businesses with British Airways, Aer Lingus, Iberia and Finnair, Japan Airlines and Qantas; strategic alliances with Alaska Airlines and Qatar Airways | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 9–12 |
| Seasonality | Summer travel demand creates seasonal revenue patterns; quarterly results are not indicative of the year | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 23 |

### Company profile

| Item | Detail | Source |
|---|---|---|
| Legal name | American Airlines, Inc. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 1 |
| Incorporation and offices | Delaware corporation; 1 Skyview Drive, Fort Worth, Texas | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 1 |
| Founded | American founded in 1934; parent formed in 1982 as AMR Corporation | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9 |
| Parent and ownership | Wholly-owned subsidiary of American Airlines Group Inc. (Nasdaq: AAL); 1,000 shares issued and outstanding, all held by the parent | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Filer status | Non-accelerated filer; co-registrant with its parent; reduced-disclosure format used for governance items | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 1–2; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3 |
| Auditor | KPMG LLP, auditor of American since 2014; report dated February 18, 2026 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 200–201 |
| Employees | About 139,100 active full-time equivalent employees of the group at 2025-12-31, about 86% unionised | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 17 |
| Ratings | Not supplied: no agency rating is printed; the group's corporate credit rating is described as non-investment grade | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 33 |

### Transaction summary and new debt issues
No acquisition, sponsor transaction or change of control is stated for the issuer, so the summary is of its 2026 debt activity. In February 2026 the 2025 AAdvantage term loan was amended to lower its margin, and in March 2026 the three revolving facilities were re-established with commitments to March 2031. In May 2026 the 2014 term loan was refinanced and increased to a May 2033 maturity, and aircraft and engine financing continued through three pass-through certificate programs in May, June and August 2026 and USD 705 million of new equipment loans.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–36

The issuer also retired debt: the short-term term loan, which was due in January 2026, was repaid in full, the 8.50% senior secured notes were prepaid in full, and USD 310 million of equipment notes under earlier pass-through certificates was prepaid. Of the August 2026 certificates, about USD 633 million of proceeds was still held in escrow at September 30, 2026 and is not reported as debt until further equipment notes are issued, so reported debt excludes that amount for now.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 35–36; calculation C06

### Events: Issuer history

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 1934 | year | 2026-02-18 | American Airlines, Inc. founded | Historical — American, which was founded in 1934 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9 | Long operating history as a major network carrier; the issuer is the original operating company. |
| 1982 | year | 2026-02-18 | Parent formed as AMR Corporation, now American Airlines Group Inc. | Historical — AAG was formed in 1982, under the name AMR Corporation | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9 | Establishes the parent and issuer structure in which cash and guarantees flow. |
| 2021-03-24 | day | 2026-02-18 | AAdvantage financing closed with notes and a term loan guaranteed by special-purpose guarantors and the parent | Historical — the 2021 AAdvantage Financing Closing Date | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 167 | Secures part of the debt on loyalty program assets with parent guarantees. |
| 2025-07-01 | day | 2026-02-18 | Parent's 6.50% convertible notes matured and were settled in cash, funded by American | Historical — cash settlement upon their maturity on July 1, 2025 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257 | Evidence that issuer cash supported parent debt service. |
| 2025-11 | month | 2026-10-22 | 2025-1 aircraft pass-through certificates issued | Historical — in November 2025 American created two pass-through trusts | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 34 | Adds secured aircraft debt maturing to 2038. |
| 2026-02-12 | day | 2026-02-18 | Fourth amendment to the AAdvantage term loan agreement lowers the margin on the 2025 term loan | Historical — subsequent event described in the annual report | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257 | Lower margin reduces interest cost on a loan secured on loyalty assets. |
| 2026-03 | month | 2026-10-22 | Revolving facilities re-established with maturities in March 2031 | Historical — in March 2026 American and AAG entered amendments | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–33; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 46 | Extends committed liquidity and removes a 2029 maturity. |
| 2026-03 | month | 2026-10-22 | Borrowing of USD 870 million on previously delivered aircraft, junior to existing equipment notes | Historical — in March 2026 American borrowed on these aircraft | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 34 | Raises secured debt on already-encumbered aircraft. |
| 2026-05 | month | 2026-10-22 | 2014 term loan refinanced and increased to a May 2033 maturity | Historical — in May 2026 American entered the Twelfth Amendment | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 32 | Removes a January 2027 maturity and adds USD 703 million of incremental term loans. |
| 2026-05 | month | 2026-10-22 | 2026-1 aircraft pass-through certificates issued | Historical — in May 2026 American created two pass-through trusts | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 34 | Adds secured aircraft debt maturing to 2038. |
| 2026-06 | month | 2026-10-22 | 2026 engine pass-through certificates issued to refinance the 2019-1 engine certificates | Historical — in June 2026 American created two pass-through trusts | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 35 | Refinances maturing engine debt and adds USD 339 million of new borrowing. |
| 2026-07 | month | 2026-10-22 | Plaintiff moved for class certification in the Northeast Alliance antitrust cases | Historical — in July 2026 the remaining private party plaintiff filed a motion | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Litigation exposure at the parent group with no stated amount. |
| 2026-08-10 | day | 2026-10-22 | Note purchase agreement dated for the 2026-2 aircraft pass-through certificates | Historical — agreement dated as of August 10, 2026 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 72 | Documents the third certificate program of 2026. |
| 2026-08 | month | 2026-10-22 | 2026-2 aircraft pass-through certificates issued; part of proceeds held in escrow | Historical — in August 2026 American created two pass-through trusts | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 35 | Committed secured borrowing not yet on the balance sheet. |
| 2026-Q3 | quarter | 2026-10-22 | Impairment charge on the equity investment in Republic Airways Holdings | Historical — in the third quarter of 2026 American recorded an impairment charge | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29 | A regional-capacity partner investment lost value; American holds a 20.8% interest. |
| 2026-10 | month | 2026-10-22 | Purchase options exercised for five Airbus A320 Family aircraft | Historical — subsequent to the quarter, exercise in October 2026 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 65 | Adds aircraft commitments after the balance sheet date; amount not stated. |
| 2026-12 | month | 2026-10-22 | Cargo receivables facility scheduled to expire | Scheduled — scheduled to expire in December 2026 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 | Small part of undrawn capacity ends within two months of the cutoff. |
| 2027-10-29 | day | 2026-02-18 | Parent's tax benefit preservation plan scheduled to expire | Scheduled — extended expiration date of October 29, 2027 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 104 | Protects tax attributes by deterring share acquisitions until that date. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 22 |
| Calculated | 6 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 44 |
| Fields total | 52 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

### Map: ownership and control

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| American Airlines Group Inc. | Owns all common stock | Ownership | American Airlines, Inc. | Wholly-owned subsidiary; 1,000 shares issued |
| Public holders of AAG stock | Hold AAG common stock; percentages not stated | Ownership | American Airlines Group Inc. | Nasdaq-listed; no holder percentages in sources |
| American Airlines Group Inc. | Owns regional carriers | Ownership | AAG regional subsidiaries (Envoy, PSA, Piedmont) | Principal wholly-owned subsidiaries of AAG |
| American Airlines, Inc. | Indirect owner of the AAdvantage vehicle | Ownership | AAdvantage Loyalty IP Ltd. | Indirect wholly-owned subsidiary of American |
| American Airlines, Inc. | Holds a minority equity interest | Ownership | Republic Airways Holdings Inc. | 20.8% equity interest in Republic Holdings |
| American Airlines Group Inc. | Guarantees credit facilities | Guarantee | American credit facilities | Guarantee is AAG's senior unsecured obligation |
| AAG and SPV Guarantors | Guarantee AAdvantage notes and loans | Guarantee | AAdvantage Financing | Fully and unconditionally guaranteed |
| American Airlines Group Inc. | Guarantees some equipment notes | Guarantee | American equipment notes | Guaranteed by AAG in certain instances |
| American Airlines Group Inc. | Owes American a net receivable | Other stated | American Airlines, Inc. | Net 12,512m at 2026-09-30; terms not stated |
| American Airlines, Inc. | Pays capacity fees and owes net payable | Other stated | AAG regional subsidiaries (Envoy, PSA, Piedmont) | Net payable 2,082m for capacity purchase |

### Map: operating model to credit

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Unhedged jet fuel | Moves operating cost directly | Documentary Fact | Operating margin | No fuel hedges at 2025 year-end; policy is not to hedge |
| AAdvantage co-brand cash | Funds liquidity and secures debt | Documentary Fact | Liquidity and secured debt | 6.2bn partner cash in 2025; AAdvantage Financing |
| Customer-funded balances | Rise before travel and unwind after | Analyst Interpretation | Operating cash flow | Air traffic and loyalty liabilities on balance sheet |
| Unionised workforce | Fixes labour cost through contracts | Documentary Fact | Cost base | 86% of group employees under labour contracts |
| Aircraft purchase commitments | Require continuing capex and financing | Documentary Fact | New secured debt | 24,056m of commitments in contractual table |
| Pass-through certificate financing | Pledges owned aircraft | Documentary Fact | Encumbered assets | Certificates of 9,332m at 2026-09-30 |
| Lending to the parent | Moves cash outside the issuer | Documentary Fact | Issuer liquidity | Net receivable from AAG 12,512m at 2026-09-30 |
| Regional capacity purchase | Fixes payments for contracted flying | Documentary Fact | Fixed cost base | Minimum payments 4,461m in contractual table |
| Customer concentration | Not stated for the issuer | Insufficient Information | Revenue durability | No concentration data in the sources |

### transaction_summary Transaction summary register

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| Acquisition, sponsor transaction or change of control | None stated for the issuer | No transaction-driven leverage or ownership change is in the sources; the summary is limited to debt activity | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–36 |
| Revolving facilities re-established to March 2031 (2013, 2014 and 2023 facilities) | Completed March 2026 | Extends committed liquidity; undrawn capacity USD 3,510 million at 2026-09-30 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–33 |
| 2014 term loan refinanced and increased by USD 703 million to May 2033 | Completed May 2026 | Removes a January 2027 maturity and lengthens the profile | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 32 |
| 2025 AAdvantage term loan amended to lower the margin | Completed February 2026 | Lower interest cost on loyalty-secured debt | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 33; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257 |
| 2026-1 Class (B)R borrowing of USD 870 million, junior to existing equipment notes | Completed March 2026 | More secured debt on already-financed aircraft | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 34 |
| 2026-1 aircraft pass-through certificates (Series A USD 905 million, Series B USD 236 million) | Completed May 2026 | New aircraft debt maturing 2035 and 2038 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 34 |
| 2026 engine pass-through certificates of USD 567 million | Completed June 2026 | Refinances USD 228 million and adds USD 339 million of borrowing | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 35 |
| 2026-2 aircraft pass-through certificates (about USD 1.3 billion) | Issued August 2026; USD 633 million still in escrow at 2026-09-30 | Committed secured debt not yet on the balance sheet | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 35 |
| Equipment loans of USD 705 million | Completed in the nine months to 2026-09-30 | Variable-rate aircraft debt averaging 5.87% maturing 2036 to 2038 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 36 |
| Retirements: USD 629 million short-term loan, USD 1,000 million 8.50% notes, USD 310 million equipment notes | Completed in the nine months to 2026-09-30 | Reduces higher-cost debt; calculation C06 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 36 |

### company_description Company description register

| Issuer | Business description | Country | Sector |
|---|---|---|---|
| American Airlines, Inc. | Operates a major network air carrier with nine hubs, regional partners flying as American Eagle, a cargo division and the AAdvantage loyalty program; wholly owned by American Airlines Group Inc. | United States; Delaware corporation with offices in Fort Worth, Texas | Scheduled passenger and cargo air transportation (major network carrier) |

### revenue_business_mix Revenue and business mix register

| Business line | Revenue mix | Period | Status | Limitation |
|---|---|---|---|---|
| Passenger travel | 83.81% of operating revenues | 9M 2026 | Reported amount USD 39,372 million; share calculated, calculation C01 | No customer concentration disclosed |
| Loyalty revenue, travel (in passenger revenue) | 6.89% | 9M 2026 | Reported amount USD 3,237 million; share calculated | Redemptions of miles earned from travel and partners |
| Cargo | 1.62% | 9M 2026 | Reported amount USD 761 million; share calculated | Small contribution |
| Loyalty revenue, marketing services (in other revenue) | 6.53% | 9M 2026 | Reported amount USD 3,068 million; share calculated | Depends on co-branded card and partner agreements |
| Other revenue | 1.15% | 9M 2026 | Reported amount USD 541 million; share calculated | Composition not detailed |
| Passenger revenue by region: Domestic | 70.89% of passenger revenue | 9M 2026 | Reported amount USD 30,205 million; share calculated, calculation C03 | Attributed by flight origin and destination |
| Passenger revenue by region: Atlantic, Latin America, Pacific | 13.83%; 12.46%; 2.83% | 9M 2026 | Reported amounts USD 5,893 million; USD 5,307 million; USD 1,204 million | Fuel and demand exposure differs by region; no segment profit is disclosed |
| Passenger, cargo and other revenue | 90.88%; 1.54%; 7.59% | FY2025 | Reported amounts USD 49,643 million; USD 839 million; USD 4,144 million | Loyalty split by line not read for the full year |

### ownership_register Ownership register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| American Airlines Group Inc. | Sole stockholder; the issuer's 1,000 shares are all held by the parent | 100% of common equity | Cash and guarantee support runs between the two; the parent also carries its own debt | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Public holders of AAG common stock | Hold the parent's common stock; the issuer's board and officers are not described | Not stated: holder percentages are not in the sources | No sponsor or controlling holder identified; extraction incentives of public holders not evidenced | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 1 |
| AAG's regional subsidiaries (Envoy, PSA, Piedmont) | Sister companies owned by the parent | Owned by the parent, not the issuer | American pays them capacity fees; net payable USD 2,082 million | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 9; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 41 |
| Republic Airways Holdings Inc. | Minority interest held by American | 20.8% equity interest | Impaired in the third quarter of 2026; capacity supplier to American | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 24; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29 |

### operating_model Operating model register

| Operating driver | Measure | Period | Status | Credit relevance |
|---|---|---|---|---|
| Mainline fleet | 1,013 aircraft; average age 14.3 years; 547 owned and 466 leased | 2025-12-31 | Reported; ownership share calculated, calculation C04 | Owned aircraft support secured financing; leased aircraft add rent commitments |
| Regional network | 567 regional aircraft; 42% of regional passengers connected to mainline flights | FY2025 | Reported by the group | Feeds hub traffic; capacity purchase fees are fixed regardless of passengers |
| Loyalty program | Cash from co-branded card and other partners USD 6.2 billion in 2025 and USD 6.1 billion in 2024 | FY2025; FY2024 | Reported by the group | Large recurring cash source; also secures the AAdvantage financing |
| Labour | About 139,100 group employees, 86% unionised; salaries, wages and benefits 38% of group operating expenses | FY2025 | Reported by the group | Contractual wage increases limit cost flexibility |
| Fuel | Average price per gallon USD 2.39 in 2025 against USD 2.60 in 2024; no hedges outstanding | FY2025 | Reported by the group | Earnings are exposed to fuel price swings |
| Seasonality | Summer-weighted demand | Annual | Reported qualitatively | Working capital and liquidity move with the season |
| Aircraft commitments | Aircraft and engine purchase commitments of USD 24,056 million at 2026-09-30 | To 2031 and thereafter | Reported | Continuing capex that is financed with new secured debt |
| Customer concentration and other operating KPIs | — | — | Not stated for the issuer | Revenue durability by customer cannot be assessed |

### events_timeline Events timeline register

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| March 2021 | AAdvantage financing closed; guaranteed by special-purpose guarantors and the parent | Loyalty-secured debt with parent support | Historical | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 167 |
| July 1, 2025 | Parent's convertible notes settled in cash with funding from American | Issuer cash supported parent debt | Historical | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257 |
| February to August 2026 | Amendments, refinancing, new certificates and retirements | Longer but more secured maturity profile | Historical | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–36 |
| After September 30, 2026 | Purchase options exercised for five aircraft | Added aircraft commitments; amount not stated | Subsequent event, kept out of period figures | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 65 |
| October 29, 2027 | Parent's tax benefit preservation plan expires | Share-acquisition deterrent ends | Scheduled | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 104 |

### conflict_log Conflict log

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| Run settings give the Cayman Islands as the issuer's country while the filings say Delaware | Run settings; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 33 | Minor: the Cayman Islands is the home of the AAdvantage financing vehicle only | Filings control; the settings are not evidence | Company description and profile use Delaware |
| Related-party funding: the annual report says the receivable from the parent rose partly because American funded the parent's convertible settlement, while the cash-flow line and balance-sheet movement differ slightly | 10-K pages 202 and 257 | Minor: balance-sheet net receivable rose 1,709 million in 2025 and the cash-flow outflow was 1,701 million | Both figures retained; no reconciliation asserted | Related-party flag uses the balance-sheet figures |
| Parent and issuer liquidity differ: parent total available liquidity USD 11,797 million against issuer USD 11,763 million | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60 | Minor | Issuer figure used for the issuer; parent figure is context | Liquidity wording |

### gaps_ledger Gaps ledger

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Repayment terms, interest and security of the receivable from the parent are not stated | Ownership and governance risk level; Liquidity | High | Obtain the related-party agreements or parent disclosure | Open |
| Board, committee, consent and fee arrangements of the issuer omitted; parent proxy statement not supplied | Governance register; risk level | Medium | Obtain the 2026 proxy statement | Open |
| Executed guarantee, credit and indenture documents not supplied | Legal & covenants; Covenant capacity; Structural priority | Medium | Obtain the agreements named in the exhibit list | Open |
| Customer concentration, issuer-only operating statistics and full-year loyalty split not stated | Operating model; revenue durability | Low | Request from the issuer or parent filings | Open |
| No ratings, market prices, portfolio limits or documents after October 22, 2026 | Ratings & triggers; Market-implied risk; later events | Low | Supply if those analyses are wanted | Open |

### T2D.1 Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| S01 | 10-K_2025-12-31_aal-20251231.htm.jsonl | High | FY2025 | Parent and issuer | Business, fleet, labour, loyalty, equity, dividends, guarantees, related-party note | Items 10 to 13 omitted for the issuer; proxy statement not supplied | Ownership, governance and operating facts |
| S04 | 10-Q_2026-09-30_aal-20260930.htm.jsonl | Medium | Q3 and 9M 2026 | Parent and issuer | Revenue mix, 2026 financing, related-party balances, commitments, litigation | Unaudited; terms summarised | Transaction, behaviour and capital allocation facts |
| S07 | EX-99.2_2026-10-22_earningspresentation.htm.jsonl | Low | Q3 2026 | Parent only | Management statements and outlook | Management language; parent-level | Context only |
| S02 | 10-Q_2026-03-31_aal-20260331.htm.jsonl | Medium | Q1 2026 | Parent and issuer | Not used for facts | Superseded by the third-quarter report | None |
| S03 | 10-Q_2026-06-30_aal-20260630.htm.jsonl | Medium | Q2 and H1 2026 | Parent and issuer | Not used for facts | Superseded by the third-quarter report | None |
| S05 | EX-99.2_2026-04-23_earningspresentation.htm.jsonl | Low | Q1 2026 | Parent only | Not used for facts | Parent-level presentation | None |
| S06 | EX-99.2_2026-07-23_earningspresentation.htm.jsonl | Low | Q2 2026 | Parent only | Not used for facts | Parent-level presentation | None |


### T2D.3 Governance register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Board and control rights | The issuer omits the executive, director and ownership items under General Instruction I; the parent's proxy statement is incorporated by reference | Insufficient Information | Without board, committee or consent-right detail, creditor visibility into control is limited | Control rights that could protect or hurt creditors cannot be assessed | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3 | Proxy statement not supplied |
| Related-party transactions | Net receivable from the parent USD 12,512 million and net payable to the parent's regional subsidiaries USD 2,082 million at 2026-09-30 | Mixed | Cash is lent to the group and capacity is bought from sister companies, which moves value outside the issuer's own balance sheet | Creditors rely on the parent's repayment capacity and on arm's-length capacity pricing | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41 | Repayment terms and pricing basis not stated |
| Fees and distributions | Equity statements show no dividends; the parent paid no cash dividend in 2025 or 2024; no management or monitoring fees are described | Supportive | No scheduled leakage to shareholders is evidenced | Supports retention of cash, offset by lending to the parent | Medium | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 203; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 | Absence of fee disclosure is not proof of none |
| Reporting cadence and audit | Annual and quarterly combined filings; audit by KPMG LLP with an unqualified opinion on the issuer's statements and effective internal control | Supportive | Regular, audited reporting lets creditors monitor the issuer | Visibility is good for financial data and weak for governance | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 199–201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 258 | Covenant certificates not supplied |
| Covenant reporting | Debt agreements contain minimum-liquidity, collateral-value and debt-service-coverage tests; compliance is stated at the latest measurement dates | Neutral | Tests limit the borrower but no headroom is printed | Covenant capacity cannot be assessed from the filings | Medium | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61 | No executed agreements or headroom |
| Shareholder and creditor alignment | Parent guarantees American's credit facilities and the AAdvantage financing; the parent's tax benefit preservation plan deters certain share acquisitions to October 2027 | Supportive | Guarantees align the parent with the issuer's creditors; the plan reduces the chance of a tax-driven ownership change | Support is real but depends on the parent's own balance sheet | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 164; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 167–168; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 104 | Parent-level debt sits outside the issuer |

### T2D.4 Behavior flags

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| CP-2C-FLAG-001 | Support | American funded the parent's cash settlement of its convertible notes in July 2025 | Mixed | USD 1.0 billion; issuer cash | Insufficient Information | Issuer cash services parent debt | Issuer liquidity depends on parent repayment | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257 | Repayment terms not stated |
| CP-2C-FLAG-002 | Other | Net receivable from the parent rose to USD 12,512 million at 2026-09-30 | Mixed | Operating cash and financing proceeds of the issuer | Insufficient Information | Lending to the group removes cash from the issuer | Raises reliance on parent credit | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41 | Terms and security not stated |
| CP-2C-FLAG-003 | Distribution | No dividend appears in the issuer's equity statements for 2023 to 2025 or 2026 to date; the parent paid none in 2025 or 2024 | Supportive | Not applicable | Insufficient Information | No scheduled shareholder leakage | Supports retention of cash | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 203; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 102; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 | Does not cover lending to the parent |
| CP-2C-FLAG-004 | Other | Prepaid the 8.50% senior secured notes in full, repaid the short-term term loan and prepaid USD 310 million of equipment notes | Supportive | Funded by new debt and cash | Insufficient Information | Retires higher-cost and nearer-dated debt | Lowers interest cost and near-term maturities | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 36 | Funded partly by new secured debt |
| CP-2C-FLAG-005 | Amendment | Extended revolvers to March 2031, refinanced the 2014 term loan to May 2033 and lowered the 2025 AAdvantage margin | Supportive | Lender consents; no fees stated | Insufficient Information | Lengthens maturities at lower cost | Reduces refinancing pressure | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–33 | Terms read from filing summaries |
| CP-2C-FLAG-006 | Other | Issued three aircraft and engine certificate series and equipment loans, with USD 633 million still in escrow at 2026-09-30 | Neutral | Secured aircraft financing | Insufficient Information | More debt secured on aircraft | Adds secured claims ahead of other creditors on those assets | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 34–36 | Collateral valuation not supplied |
| CP-2C-FLAG-007 | Disposal | Recorded an impairment on the equity investment in Republic Airways Holdings | Neutral | American's 20.8% interest | Insufficient Information | Partner investment lost value | Small non-cash hit; partner health matters for capacity supply | Medium | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 24; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29 | Impairment amount not separately stated |

### T2D.5 Capital allocation risk table

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Organic investment | Capital expenditures of USD 2,660 million in the nine months to 2026-09-30 and aircraft purchase commitments of USD 24,056 million | Mixed | Fleet renewal consumes cash and needs new secured financing | Supports operations but keeps debt high | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 65–66 | Delivery timing may change |
| M&A and roll-up | No acquisition is stated for the issuer | Neutral | No integration or acquisition-funding risk | No transaction leverage to assess | Medium | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–36 | Equity investments are minority stakes |
| Dividends and distributions | No cash dividends by the parent in 2025 or 2024; none in the issuer's equity statements | Supportive | No scheduled leakage | Cash retained, apart from lending to the parent | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 102; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 203 | Future policy is discretionary |
| Debt paydown | Retirements of USD 1,939 million set against net issuance of USD 590 million in 2026 | Mixed | Repays higher-cost debt but refinances with new secured debt | Stock of debt is not falling | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 36; calculation C06 | Net issuance is for nine months |
| Refinancing and amend-and-extend | Revolvers to 2031, 2014 term loan to 2033, new certificates to 2039 | Supportive | Pushes maturities out | Reduces refinancing pressure but encumbers more assets | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 32–36 | Executed terms not supplied |
| Equity support | Intercompany equity transfers to American of USD 8 million, USD 4 million and USD 2 million in 2023, 2024 and 2025 | Neutral | Parent support is small relative to debt | No material equity cure evidenced | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 203 | Not a commitment to support |
| Asset sales | Proceeds from sale-leaseback transactions and sales of property of USD 77 million in the nine months to 2026-09-30 | Neutral | Small source of cash | Not a material deleveraging source | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Disposal detail not read |
| Liquidity preservation | Short-term investments of USD 7,159 million and undrawn facilities of USD 3,510 million at 2026-09-30 | Supportive | Holds large liquid reserves | Covers near-term principal; lending to the parent partly offsets | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60 | Not all investments shown as unrestricted |

### T2D.9 Sponsor and governance risk level

Sponsor / Governance Risk Level: Medium.

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Cash lent to the parent | Net receivable from the parent USD 12,512 million at 2026-09-30, up USD 574 million in nine months; funded the parent's USD 1.0 billion note settlement in 2025 | Issuer cash is deployed to the group instead of repaying issuer debt | Dependence on parent repayment; a parent liquidity problem would reach the issuer | High | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257 | Parent guarantees issuer debt and no dividend is evidenced | Repayment terms not stated |
| Thin governance disclosure | Executive, director and ownership items omitted; proxy not supplied | Creditors cannot see board control or fee arrangements | Governance cannot be scored beyond behaviour | High | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3 | Clean audit opinion and effective controls | Documents not supplied |
| No sponsor extraction | No dividends, fees or recaps evidenced; parent bought back no shares | No leakage channel besides lending | Supports a medium rather than high level | Medium | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 102; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 103; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 203 | Lending to the parent could be a leakage channel | Absence of disclosure is not proof of none |

The risk level is driven by cash lent to the parent and by thin governance disclosure, because both reduce what creditors can see and recover from the issuer's own cash, which implies reliance on the parent's credit. Countervailing evidence is the parent's guarantees, the absence of dividends and a clean audit. Further analysis requires the terms of the receivable and the parent's proxy statement.

### T2D.11 Governance gaps ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| CP-2C-GAP-001 | Repayment terms, interest and security of the receivable from the parent | Determines whether cash lent upstream can be recalled | CP-2C-FLAG-001; CP-2C-FLAG-002 | High impact | Related-party agreements and parent filings |
| CP-2C-GAP-002 | Board, committee, consent and veto rights of the issuer; the parent's proxy statement | Shows who controls financing and distribution decisions | Governance register; risk level | Medium impact | Parent proxy statement |
| CP-2C-GAP-003 | Executed guarantee, credit and indenture documents and basket usage | Defines guarantee scope, covenant capacity and restricted payments | Governance register; flags 004 to 006 | High impact | Executed agreements named in the exhibit list |
| CP-2C-GAP-004 | Management, monitoring or advisory fees between the issuer and the parent | Possible leakage channel | Governance register | Low impact | Related-party disclosure |
| CP-2C-GAP-005 | Filings after October 22, 2026 | Later financing or distributions could change behaviour findings | All flags | Medium impact | Later quarterly or current reports |


<!-- table-id: cp1a.cp_model_snapshot_fields -->

| field_id | value | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|
| issuer_name | American Airlines, Inc. | READY | S04 | page 1 | 2026-09-30 |
| sector | Scheduled passenger and cargo air transportation (major network carrier) | READY | S01 | page 9 | 2025-12-31 |
| country | United States (Delaware corporation; offices in Fort Worth, Texas) | READY | S04 | page 1 | 2026-09-30 |
| shareholders | American Airlines Group Inc. holds all 1,000 shares | READY | S04 | page 26 | 2026-09-30 |
| transaction_summary | No acquisition or sponsor transaction; 2026 debt refinancing, new aircraft certificates and prepayments | READY | S04 | pages 32 to 36 | 2026-09-30 |
| business_description | Major network air carrier with nine hubs, regional partners and the AAdvantage loyalty program | READY | S01 | page 9 | 2025-12-31 |

## Calculations

All shares are calculated from amounts printed for American Airlines, Inc. and are rounded half up to two decimals.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Revenue mix, nine months 2026 and FY2025 | 9M 2026 over 46979: passenger travel 39372; loyalty travel 3237; cargo 761; loyalty marketing services 3068; other 541; passenger total 42609. FY2025 over 54626: passenger 49643; cargo 839; other 4144 | 9M 2026: passenger travel 83.81%; loyalty travel 6.89%; cargo 1.62%; loyalty marketing services 6.53%; other 1.15%; passenger total 90.70%. FY2025: passenger 90.88%; cargo 1.54%; other 7.59% | % | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201 | Shares of reported operating revenues; loyalty lines are as the issuer classifies them. |
| C02 | Loyalty revenue share, nine months 2026 | (3237 + 3068) / 46979 | 6305 USD millions; 13.42% | USD millions; % | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29 | Loyalty revenue in passenger revenue plus loyalty marketing services revenue in other revenue. |
| C03 | Passenger revenue by region, nine months 2026 | Domestic 30205 / 42609; Latin America 5307 / 42609; Atlantic 5893 / 42609; Pacific 1204 / 42609 | Domestic 70.89%; Latin America 12.46%; Atlantic 13.83%; Pacific 2.83% | % | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29 | Attributed by origin and destination of each flight segment. |
| C04 | Mainline fleet ownership at 2025-12-31 | 547 / 1013; 466 / 1013 | owned 54.00%; leased 46.00% | % | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 100 | Operating mainline aircraft only; three stored aircraft excluded by the issuer. |
| C05 | Related-party position, 2026-09-30 and 2025-12-31 | 12512 - 2082 = 10430; 11938 - 2042 = 9896; AAG net receivable change 12512 - 11938; total change 10430 - 9896; 2025 AAG change 11938 - 10258 | net total 10430 and 9896; AAG change 574; total change 534; 2025 AAG change 1680 | USD millions | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257 | Net balances as printed; terms are not stated. |
| C06 | Debt retired and net issuance in 2026 | Retired: 629 + 1000 + 310 = 1939; net debt issuance 5933 - 5343 = 590 | 1939; 590 | USD millions | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 36; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 | Retirements are the short-term term loan, the 8.50% notes and EETC equipment notes prepaid; net issuance is cash-flow proceeds less payments for nine months. |
| C07 | Salaries, wages and benefits share of operating expenses, nine months 2026 | 14019 / 46444 | 30.18% | % | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Issuer mainline and regional expense lines as printed; the group's annual share is stated separately as 38%. |

## Gaps

- High: The repayment terms, interest and security of the receivable from the parent are not stated, so how much of the issuer's cash can be recalled is not established. The parent's own filings or the related-party agreements would close this.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 40–41; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 257
- Medium: The issuer's board, committee, consent and fee arrangements are omitted from the annual report and the parent's proxy statement was not supplied, so governance is judged on behaviour alone.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 3
- Medium: Executed guarantee, credit and indenture documents were not supplied, so guarantee scope, covenant capacity and restricted-payment limits are taken from filing descriptions only.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 164–168; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 71–73
- Low: Customer concentration, operating statistics for the issuer alone and the loyalty revenue split for the full year are not stated, so revenue durability by customer is not established.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 29
- Low: No ratings, market prices or portfolio limits were supplied and nothing dated after October 22, 2026 is available, so market perception and later events are not established.
Basis: Source readiness (CP-0)

## Next module
The orchestrator selects the next module.
