# Stage 7 screen comparison

The baseline was `2b881075e51459592bb629ed8abe7ee24e4fa1d9`. The final
application was `a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f`. Both
capture sets use native Chrome 157.0.8103.78 on Linux, the original 1440
and 390 px viewports and the original fixture paths. Stage 0's PNGs were
scratch artifacts. The paired images here were captured again from the
pinned baseline and final builds. Per-frame evidence includes the original
state, any equivalent final state, and the ruling, repair or fixture
change that explains the result.

## Connected React

| Measure | Result |
| --- | ---: |
| Recreated historical frames | 379 |
| Distinct final frames | 399 |
| Paired frames | 375 |
| Pairs with pixel changes | 355 |
| Approved retirements | 4 |
| Final-only frames | 24 |

The 375 pairs comprise 345 same-name comparisons, 24 chart-title or caption
matches, four retained failure states and two Waiting versus Running
Activity timing frames. The approved retirements are two empty Library
layout controls (C1-002) and two Standard selection frames (C2-009).
The no-agreement synthetic path now finishes and publishes after T12.
The final replay also opened the genuine retained unsuccessful record
to preserve the historical error screens. The atlas records each filename,
hash, comparison outcome and applicable finding.

The checkout and extracted ZIP matched in 84 distinct route and width
comparisons, including the corrected error and trace captures. The
comparison checked text, title, CSP, geometry and 28 computed style
values. All 12 unique sentinel screenshots matched byte for byte. Two
initial Run Activity geometry differences resolved when both builds were
captured in the same clock minute. All 1,400 extracted members retained
their original hashes.

[Connected report](evidence/screens/connected/connected-screens-report.md) ·
[Frame atlas](evidence/screens/connected/connected-screen-atlas.tsv) ·
[Archive comparison](evidence/screens/connected/archive-parity-summary.json)

## Static React from disk

The shipped and fixture builds were read from disk at both widths. The
checkout and extracted ZIP static distributions have the same entry and
asset bytes. Fixture runs used a scratch copy with the source fixture
data. The original packaged members were left intact.

| Measure | Result |
| --- | ---: |
| Historical frames replayed on the baseline | 1,222 |
| Matched final frames with pixel changes | 1,218 |
| Approved retirements | 4 |
| Final-only frames | 768 |
| Distinct final frames | 1,986 |

The historical total includes 1,218 saved screenshot names and four
bare-hash baseline addresses. The four retirements are the unnecessary
limitations clamps (S3-017/S3-018) and the inert Evidence Show sources
switch at both widths (S4-019/T38). Two moved FAQ controls and the
renamed USD 25 offline fixture dialog were matched again. The recapture
opened the dialog without confirming it.

T25's static sample notice and Kit rail change affect the matched
screens. T31 adds a designed empty Library. J6-006/S2-001 aligns four
Library cards and their histories with the sample reports. Tessaly's
progress reflects the two supplied modules in the matching report.
The per-frame atlas also records the changes tied to Overview, module
navigation, Model, Evidence and the saved Run start and Activity states.

The 768 additional frames cover 644 fixture views, six Model Table or
Downside states, and 118 route and width pairs from 59 followed Evidence
Trace links. Those links resolved without missing-item warnings. A
subsequent link pass found zero new destinations. There were no
unresolved screenshot identities or unexplained pixel differences.
The final screenshot pass saw zero outside app requests, WebSockets,
page or console errors, or local file errors.

[Static report](evidence/screens/static/static-report.md) ·
[Frame atlas](evidence/screens/static/screens-static-diff.tsv) ·
[Static counts](evidence/screens/static/static-proof-summary.json)

## Scope remaining

The packaged static opener sweep passed 14 batches across 402 route
visits. It found 323 distinct route and opener signatures and reused an
already tested signature on 79 visits under the Stage 0 rule. It clicked
1,123 first-level openers. Two Kit demo Start run buttons were outside
the action scope. The visually clipped raw Files input could not be
clicked directly in either Kit variant. The route states and those four
dispositions are retained. The sweep observed zero outside app requests,
WebSockets, page or console errors, or local file errors. Its native
proxy denied 1,663 background attempts without forwarding them.
[Opener proof](evidence/screens/static/offline-openers-summary.json)

The connected sample covers the recorded routes, all detected figure
alternates and the first reachable disclosure and source drawer per
screen. Stage 0's 31 timed-out connected control paths and deeper
dialogues remain separately scoped. The earlier Stage 5 proof checked
549 connected source drawers. [Stage 5 fidelity](../5-repair/fidelity/after-report.md)

Not verified: the original ephemeral Stage 0 PNG bytes, Windows
presentation or platform file interactions, uncaptured second-level
controls and real provider, seat, Submit or Teams behavior. The full
static atlas used native Chrome. Both native browsers ran the synthetic
connected proof on checkout and ZIP. Signal is outside the screenshot
audit under R2. [Final limits](../SUMMARY.md#not-verified)
