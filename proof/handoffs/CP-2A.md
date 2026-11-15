## Findings

### Bottom line

The synthetic issuer shows one observed item.

### Key findings

The synthetic issuer's cover is thin at 3.1x.
Basis: annual.txt, page 2

### Contrary evidence and what would change the view

Nothing supplied contradicts the view; a USD 1,250 million refinancing would.

### Limitations

- Synthetic data only in the cp two a case, so no conclusion carries weight.

### Map: stress scenario

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Synthetic A | Synthetic link | Assumption | Synthetic B | Synthetic p.1 |

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

### T2B.1 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2B.2 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2B.6 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2B.7 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T2B.9 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### Analytical appendix — complete canonical registers

<!-- table-id: T2DS.1 -->

#### T2DS.1 Scenarios

| Scenario ID | Name | EBITDA decline s | Cash-interest increase k | Anchor | What the assumption leaves out | Category | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| s00 | Control (unstressed) | 0 | 0 | LTM to 2025-03-31 as reported | Not applicable | Documentary Fact | High |
| s01 | Cost shock | 0.1 (10%) | 0 | Financing costs held | Working capital held | Analyst Interpretation | Medium |
| s02 | Cost and rate shock | 0.2 (20%) | 0.05 (5%) | Repricing scenario | Working capital held | Analyst Interpretation | Low |

<!-- table-id: T2DS.4 -->

#### T2DS.4 Stressed flows and metrics

| Metric | s00 | s01 | s02 | Source |
| --- | --- | --- | --- | --- |
| Stressed FCF (USD millions) | 10.00 | 0.00 | -5.1250 (−USD 5.13 million) | Filing p.2 |
| All-in cover (x) | 3.10 | 2.00 | 1.40 | Filing p.1 |
| Net leverage (x) | 1.25 | 1.30 | Not calculated: net debt is missing | Filing p.1 |

<!-- table-id: T2DS.6 -->

#### T2DS.6 Break points

| Break ID | Break | EBITDA decline at break (interest held) | EBITDA decline at break (k = 0.05) | Status | Source |
| --- | --- | --- | --- | --- | --- |
| B1 | FCF reaches zero | 0.10 (10%) | 0.20 (20%) | Calculated | Filing p.2 |
| B2 | Cover reaches watch level | 0.15 (15%) | 0.12 (12%) | Analyst watch level, not a covenant | Filing p.1 |
| B3 | Net leverage watch level | 0.32 (32%) | Not calculated: net debt is missing | Documentary gap | Filing p.1 |

#### T2B.7 Monitoring sensitivity flags

| Trigger ID | Indicator | Leading / Lagging | Threshold or Qualitative Signal | Linked Pathway Row | Escalation Consequence | Source Trace | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CP-2A-MON-001 | Financing costs | Leading | Increase of 100 bp | B1 | Review falling cash cover | Filing p.2 | Illustrative rate shock |
| CP-2A-MON-002 | Cash generation | Lagging | Below zero | B2 | Review cash deficit | Filing p.1 | Working capital held constant |

### T5.5 - Register

| Item | Value |
| --- | --- |
| Observed | Not supplied: nothing to report |

### T5.7 - Register

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
