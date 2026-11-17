# Stage 7 static screens and offline replay

**Complete.** Baseline `2b881075e51459592bb629ed8abe7ee24e4fa1d9` and packaged candidate `a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f` were rendered using native Chrome 157 with the same capture procedure and the matching fixture input for each revision.

## Screens

- The baseline captured 1,222 states. It retook all 1,218 entries of the Stage 0 static screenshot index and separately rendered the bare hash in both data variants and both widths. The Stage 0 PNGs were ephemeral.
- The candidate produced 1,986 PNGs. It included 1,218 changed comparable frames and 768 final-only states. These are 644 fixture-derived address captures across both data variants, six Table or Downside states, and 118 captures of 59 discovered Evidence Trace links. A second link pass found no new destinations. All 59 links resolved without an unknown-item warning. The final distribution and checkout build matched byte-for-byte across all 16 static assets.
- The four intentionally retired opener snapshots remain indexed without a final opener PNG. Two were the limitation Show all control, whose text is visible in the initial view under S3-017 and S3-018. Two were the Evidence Show sources switch at 1,440 px and 390 px, removed under S4-019 / T38 / OQ-03. The manifest names each default replacement frame.
- Three open states were recovered using exact control identity. The same FAQ summary moved on two Module addresses under S3-005 / T37. The saved run confirmation trigger uses the approved USD 25 cap under S1-007 / S6-004. The captured dialog includes the T25 sample explanation. The probe ended at the dialog.
- The shared rail and sample notice changes are recorded independently from section content. The observed Library progress includes Tessaly Foods moving from 6 of 6 to 2 of 2 and Ardenne Cable moving from 13 of 13 to 2 of 2. The matching saved reports open from the affected histories under J6-006 / S2-001, fixture commit `7f84b16e` and canonical closure `41c5580a`.
- Automated comparison found 0 unresolved identities and 0 changed frames without a finding or ruling. The 414 paired opener captures preserved their click-effect readback. Representative Library, Module and Evidence frames at both widths were inspected visually. No unexplained material difference surfaced in these checks.

| Data and width | Changed comparable images | Retired old images |
|---|---:|---:|
| shipped at 1440 px | 208 | 0 |
| shipped at 390 px | 199 | 0 |
| fixture at 1440 px | 606 | 3 |
| fixture at 390 px | 205 | 1 |

Each frame lists its address, opener, viewport, PNG path and SHA-256, decoded pixel bounds, observed text changes and finding IDs. The JSON also retains headings, selected state, overlay text, route identity, figure and table counts, and the earlier locator attempt when appropriate. [Per-frame TSV](screens-static-diff.tsv) · [Frame JSON](screens-static-diff.json) · [Proof summary](static-proof-summary.json)

The 1,440 × 900 and 390 × 844 viewports use scale 1 and the same full-page Playwright screenshot format as Stage 0. Chrome returned 1,440 × 900 and 390 × 845 PNGs on both arms. The app scrolls inside its content region, so each PNG records the visible state on capture while DOM readback also records text below that position. The viewport rerun includes 390 px under the desktop scope in R14. The scratch folder retains full PNGs.

## Offline

- Browser-context guards were installed before the first page and applied to every popup. Service workers were blocked. The WebSocket route refused outside hosts. Native Chrome used a local deny-only HTTP proxy that never forwarded a connection.
- Static baseline screenshot shards reported 0 outside requests, 0 outside WebSockets and 0 page, console or local file errors. Static candidate screenshot shards reported 0, 0 and 0, respectively. The proxy refused 2,691 baseline and 6,395 candidate browser background connections. Counts include 124 and 205 denials recorded before an application page. The proxy errors count excludes only the expected client reset or pipe close codes, which are independently counted.
- The historical first-level opener supplement replayed all 402 variant/address combinations. 323 had a distinct opener signature and 79 reused a tested signature under the Stage 0 rule. It clicked 1,123 openers. Both Kit variants record the clipped Files helper as 2 pointer timeouts in total and the Start run demo action as out of scope under R4. It recorded zero app outside-host requests, outside WebSockets or page, console and local-file errors. The deny-only proxy refused 1,663 browser background attempts. [Opener proof summary](offline-openers-summary.json)
- The only HTML dependencies are three relative script and stylesheet references. The stylesheet resolves seven local fonts and the JavaScript uses local SVG fragments. The other-host text is from XML namespaces, component and font licenses, and React, Redux and Immer diagnostics. The generated fixture data has 31 example.com strings, all in the Signal slice that the audit excludes. The shipped data file has none. There are no literal request API calls, CSS imports or remote runtime loaders in the scanned assets. The packaged CSP uses `connect-src 'none'`. [Input SHA-256 inventory](capture-inputs.json) · [Static asset scan](static-build-urls.json)

Not verified: Windows or Edge, real operator actions and production data, provider runs, seats, Teams, Signal, or controls revealed only inside a first-level action. The original Stage 0 PNG bytes remain unavailable.
