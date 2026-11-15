## Findings

### Bottom line

The synthetic issuer shows one observed item.

### Key findings

The synthetic issuer's cover is thin at 3.1x.
Basis: annual.txt, page 2

### Contrary evidence and what would change the view

Nothing supplied contradicts the view; a USD 1,250 million refinancing would.

### Limitations

- Synthetic data only in the cp two e case, so no conclusion carries weight.

### Events: Hedges

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-03-31 | day | 2024-11-07 | Synthetic note | Scheduled — matures | Filing p.1 | Wall |
| 2025-06 | month | 2025-05-01 | Synthetic call | Historical — noted | Memo | Cost |
| 2025-Q3 | quarter | 2024-11-07 | Synthetic review | Scenario — modelled | Memo | Rating |
| 2026 | year | 2024-11-07 | Synthetic maturity | Scheduled — maturity | Filing p.2 | Wall |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 8 |
| Calculated | 2 |
| Assumption-Based | 2 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 0 |
| Fields present | 95 |
| Fields total | 100 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 1 |

### Sourced operands

| Operand | Value | Basis |
| --- | --- | --- |
| Reporting currency | USD | Filing p.1 |

### Interest rate shock

| Shock | Rate shock | Added annual interest before hedges | Added annual interest after hedges | Cash interest after the shock | Interest coverage after the shock | Change in interest coverage | Free cash flow after the shock | Added interest as share of EBITDA | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Reference rate up, first shock | 100 bp | 8.00 | 5.00 | 88.00 | 2.95x | -0.30x | 42.00 | 3.08% | Filing p.1 |
| Reference rate up, second shock | 200 bp | 16.00 | Not supplied: no hedge sensitivity retained | 96.00 | 2.71x | -0.54x | 34.00 | 6.15% | Filing p.2 |

### Currency shock

| Shock | Currency move | Change in debt | Total debt after the move | Change in EBITDA | Total leverage after the move | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Foreign currency strengthens, first move | 5% | 0.00 | 800.00 | 2.00 | 3.05x | Filing p.1 |
| Foreign currency strengthens, second move | 10% | 0.00 | 800.00 | 4.00 | 3.03x | Filing p.2 |

### T2F.1 - Source inventory

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation |
| --- | --- | --- | --- | --- | --- | --- |
| SYN-FILING | northbridge-filing.txt | Synthetic | FY2025 | Synthetic issuer | Filing context | Rates and FX inputs are fictional |

### T2F.3 - Hedge schedule

| Hedge Type | Notional | Instrument Covered | Rate / Strike | Maturity | Coverage Status | Source Trace | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rate swap | USD 300m | Synthetic term loan | 4.00% | 2026 | Partial | Filing p.1 | Synthetic illustration |

### T2F.4 - Floating-rate exposure

| Metric | Amount | Formula / Source | Status | Credit Implication | Source Trace |
| --- | --- | --- | --- | --- | --- |
| Total debt | USD 800m | Synthetic debt schedule | Synthetic | Exposure denominator | Filing p.1 |
| Gross floating-rate debt | USD 800m | Synthetic debt schedule | Synthetic | Debt reprices with rates | Filing p.1 |
| Hedged floating-rate debt | USD 300m | Synthetic rate swap | Synthetic | Part of the debt is hedged | Filing p.1 |
| Unhedged floating-rate debt | USD 500m | Gross less hedged debt | Calculated | Remaining debt reprices | Filing p.1 |
| Unhedged debt percentage | 62.50% | Unhedged debt divided by total debt | Calculated | Share exposed to rate increases | Filing p.1 |

### T2F.5 - Rate sensitivity

| Sensitivity | Formula | Source Inputs | Estimated Cash Impact | FCF / Liquidity Implication | Status | Source Trace |
| --- | --- | --- | --- | --- | --- | --- |
| +100 bps cash-interest impact | Unhedged floating debt times shock | USD 500m at 1.00% | USD 5m | Additional annual cash interest | Calculated | Filing p.1 |

### T2F.6 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2F.7 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.1 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.2 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.3 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.4 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.5 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.6 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.7 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2G.8 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

## Calculations

| Item | Value |
| --- | --- |
| Cover | 3.1x |
| Refinancing | USD 1,250 million |

## Gaps

None.

## Next module

None.
