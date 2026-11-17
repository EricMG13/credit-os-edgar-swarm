# Connected screens and offline replay

The baseline source is `2b881075e51459592bb629ed8abe7ee24e4fa1d9`. The executable final source is `a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f`. Both replays use the same native Linux Chrome `157.0.8103.78`, device scale factor 1, and the recorded 1440 and 390 px widths. The Stage 0 Chromium PNGs are ephemeral. The comparisons use fresh native retakes of the two pinned trees and the historical screen names as the inventory.

The scratch collector is derived from the original `connected-inventory.cjs`. It keeps the original screen and state conventions, the 16,000 px cap for full-page pictures, and the figure, first disclosure and first source-dialog screenshots. Report captures run in bounded phases against the preserved actual synthetic runs. A separate readiness check captures the carried documents only once the copied run is shown. In-flight status and activity are checked against their own readback. Generated run IDs, timestamps, elapsed times, and the precise moment a synthetic run transitions are fixture-dependent. R14 puts narrow-only defects outside desktop acceptance, while retaining the 390 px screenshots for comparison.

`connected-screen-manifest.json` contains every historical filename, route, state, exact width, paired or remaining screenshot hash, path, dimensions, measured RGB change where dimensions match, and the accepted finding or scoped disposition. `connected-screen-atlas.tsv` is the compact index. `before/` and `after/` contain the real PNGs, browser logs and probe hashes. `attempts/` retains administrative failures and incomplete comparisons. All artifacts are under `/workspace/scratch/stage7-connected-screens`.

## Runtime and scope

- Playwright routed all page and popup requests before opening pages, routed WebSockets, and disabled service workers. The dedicated loopback proxy denied HTTP and CONNECT without forwarding. The app's served CSP has `connect-src 'self'`. The denial log distinguishes native browser background requests from application context requests.
- Both compiled deliverables read local scripts, styles and fonts. The two entry references and all seven font URLs resolve to existing same-origin resources. No protocol-relative external reference, external stylesheet `@import`, WebSocket, EventSource or beacon loader was found in the connected entry or its bundles. The six other-host strings are a W3C namespace, Tailwind licence, and diagnostic text from React, Redux, Redux Toolkit and Immer. `connected-url-audit.json` records their locations and loading dispositions.
- `react_frontend` binds and prints loopback. Host-derived strings implement the origin check. `--signal-url` writes optional metadata outside the connected scope. The actual synthetic service uses a synthetic launcher and no Teams configuration. R8 permits CP-DR web lookups only in the excluded live-run path, and R10/R15 govern the separately configured Teams webhook. This run used the checked-in synthetic proof only.
- The original report's 31 timed-out control paths and second-level dialogs remain separate from this screenshot sample. The earlier native Stage 5 fidelity proof recorded 29 connected screens, 549 sourced drawers and zero failed screens, source errors or digit coverage gaps. The current screenshot collector samples the first drawer and first reachable disclosure per screen and exercises all detected figure alternates. The narrow module and forecast On this page controls are hidden by desktop CSS and the inherited baseline selector started at the desktop width. The screenshot collection preserves that historical comparison boundary.

## Build comparison

The fresh checkout and release ZIP each contain 36 files under `web/dist`. The JS, fonts, static assets and 34 of 36 file bytes match. The changed logical files are the connected CSS and the connected entry's stylesheet href. The archive CSS is 134,180 bytes and checkout CSS is 124,617 bytes. The packager omits `.gitignore`, so Tailwind auto-discovery in the second Vite pass can read the first pass's static dist. The release agent's controlled rebuild reproduces all 36 attached hashes in each arm by adding only the root `/web/dist/` ignore rule. This proves the build-byte difference. The separate native runtime comparisons below address its effect on the exercised UI.

## Screenshot results

Recreated 379 of 379 original filenames on the baseline. The final replay has 399 distinct screenshots and 359 exact historical names. The two arms retained 391 and 421 raw frames including focused retakes. The atlas uses the state-verified frame when a later retake improved readiness. Focused time-sensitive frames were captured directly from the native viewport.

| Screenshot disposition | Count |
| --- | ---: |
| Paired | 345 |
| Retired by approved repair | 4 |
| Paired retained failure | 4 |
| Waiting versus running timing | 2 |
| Relabelled chart slot | 24 |
| Final-only observed | 24 |

| Browser arm | Observed page/state visits | Outside app requests | Outside WebSockets | App page errors | Native proxy denials |
| --- | ---: | ---: | ---: | ---: | ---: |
| before | 51 | 0 | 0 | 0 | 289 |
| after | 60 | 0 | 0 | 0 | 499 |

The final legacy journey was stopped after its now-successful no-agreement run produced screenshots and a retained terminal record. Separate clean phases captured confirmed terminal, full agreement and archived-failure states. The JSON error at `/report/a%2Fb` is byte-identical at both widths. The direct app errors for an unknown run, unknown report and retained unpublished report have their own recorded addresses. Local 404s in the console come from those diagnostic fixtures.

| Screen or state | Observed explanation |
| --- | --- |
| Empty Library and populated Cards/List | C1-002 replaces the empty filters/layout with guidance. C1-008, C1-019, C1-022 and C1-023 account for full report cards, controls and dates. |
| Activity, progress and report errors | C1-003/C1-004/C1-013/C1-014/C1-018/C1-031 account for the reader-safe status and reasons. Later timing frames record the actual status in each viewport. |
| Start steps, confirmation and carry-forward | C2-015 validates the required name on Documents. C2-009 retires Standard and its two screenshots. The advanced rows, review and imported choices track the C2/approval repairs listed against each PNG. |
| Ordinary no-agreement run | Before failed at CP-4 and did not publish. T12/B0-003/J1-002/J1-014 produce a real `Finished` and published report on the supported final synthetic pathway. The final archived-failure screenshots use the genuine retained baseline run and are labelled separately. |
| Overview, Highlight source icons and History | C3-001/C3-020 adds sources and an explicit missing figure. C3-024 adds key chart cards and their Chart/Table variants. J3-019 labels the source-icon switch by effect. C1-007 accounts for the History heading and richer row metadata. SW-D05 changes retained state with equivalent rows and requests. |
| Changes and 14 modules | C3-017/C3-021/C3-011/C3-012/C3-008 explain Changes. C3-002/C3-005/C3-028 explain navigation and findings before figures. C4-020 switches period shapes from bars to lines. The CP-1 debt schedule still plots 500 and 1,250 US$m, with FY2027 recorded as missing. C3-029/C4-013/R2-002 give Tables their basis, units and overflow affordance. |
| Forecast and Calendar | C4-001/C4-002/C4-003/C4-020/C4-022/C4-029/R4-020 account for case, qualification, model and chart display. C4-007/C4-030 account for dated events and opening their source context. |
| Evidence and Record | C5-005/C5-008/C5-009/C5-010/C5-011/C5-012/C5-013/C5-014/C5-022/C5-024/C5-025/C5-028/C5-033/C5-035 account for links, labels, metadata, trace ranges, downloads, provenance, gaps and limits. |

The identified in-flight cases include the two original Waiting versus repeated Running Activity frames and any status transitions that crossed a screenshot. These are separate from settled presentation changes.

- `c1-run-activity-run2--running--1440.png`
- `c1-run-activity-run2--running--390.png`

PNG pair comparison counted 355 changed and 20 unchanged rendered frames. Timing, fixture values and changed dimensions remain explicit in individual entries.


## Native archive comparison

| Scope | Selected routes | Completed pairs | Text | Styles and geometry | Exact sentinel PNGs | Outside app requests and WebSockets |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1440 | 37 | 35 | 35/35 | 34/35 | 5/5 | 0 |
| 390 | 37 | 35 | 35/35 | 34/35 | 5/5 | 0 |
| activity | 1 | 2 | 2/2 | 2/2 | 2/2 | 0 |
| no-agreement | 2 | 4 | 4/4 | 4/4 | 0/0 | 0 |
| retained-failure | 2 | 4 | 4/4 | 4/4 | 0/0 | 0 |
| sample | 1 | 2 | 2/2 | 2/2 | 2/2 | 0 |
| supplement | 3 | 6 | 6/6 | 6/6 | 0/0 | 0 |

The combined native archive census covers 84 distinct route/width pairs. 84 match in text, title, CSP, styles and geometry. 12 of 12 unique sentinel PNG pairs are byte-identical.

The two primary-width commands returned 1 when their strict text locators included an accessibility prefix in the two error alerts. The corrected alert-role supplement observed both complete error states and the exact trace route at both widths, with exit 0.

The broad Run activity arms initially differed in geometry with a dynamic update clock on the page. The focused control captured the same renewal minute in both builds. Its raw text, every visible box, all 28 style values and PNG bytes matched at both widths. The raw broad digests and focused readbacks are retained.

The parity runs serve the same completed synthetic dataset through the checkout and the unmodified ZIP using their matching source trees. The raw JSON carries the route and viewport, settled body text, visible element geometry, 28 computed styles, the CSP and title, and the sentinel screenshot hashes. The packaged native Chrome and Edge proof is recorded separately in the release report.
