# Stage 5 connected proof alignment

Worktree `/workspace/audit-proof-alignment`, branch `audit/lead-proof-alignment`,
base `ff93a150`. This is a local review candidate only. No production, Signal,
method, prompt, calculation, canned handoff or module-written text changed.
No paid/provider run, seat check, live launcher, real Submit or Teams action ran.
The existing paid-dialog preview still uses `proof.serve`, intercepts its submit
URL and cancels; the actual submitted workflow is explicitly synthetic.

Frozen harness code pin: **`f251fbc79f418e7e06c652fd016d065490588c7f`**.
The two code files are `web/scripts/connected-proof.mjs` and its portable guard
unit test. This report/evidence commit is separate, and no branch is pushed.

## RED and finding-authorized expectations

The unchanged harness first failed in **both** native browsers on the duplicate
`Start a run` links after the approved empty-library repair. The lead's original
log is retained as [original-red.log](proof-alignment-evidence/original-red.log).
Original finding probes and their answer keys were not edited.
Portable log copies remove only line-end spaces and final blank log lines;
`log-hashes.json` retains raw/copy SHA-256 and byte counts. Original raw logs stay
under `/workspace/scratch`. No assertion/value/status text is changed. This fixes
the initial evidence-only whitespace check without excluding a path or rule.

Every final expectation change is authorized below. Numeric, sign, precision,
period, source-token, hash, missing-versus-zero and caller assertions remain.

| Finding / owner decision | Harness consequence |
| :--- | :--- |
| C1-002 / T05 | Choose the empty-library footer's exact `Start a run` link. Both the header and footer actions remain in the product. |
| S6-037 / connected shell batch | Locate the activity card by `Modules and report delivery`, retaining spend, cap, module count, elapsed time, delivery feed and side-by-side geometry checks. |
| J3-016 / report follow-ups | Locate `Stress case to compare with the unstressed control`. Check the same case, negative amount and geometry. Percentages are `10%` / `12%` instead of `0.10 (10%)` / `0.12 (12%)`; all authored values are pinned below. |
| C4-036 / batch a | The unranked T2DS.6 table remains a `ul` in authored B1/B2/B3 order for both bases. Independently pin initial `10%`, `15%`, `32%`, then `20%`, `12%` and the exact uncalculated net-debt reason. The original two plotted shocked rows and source/status checks remain. |
| C4-013 / report follow-ups | Only the formatted downside trace-control unit changes from `Stressed FCF ($m)` to `Stressed FCF (US$m)`. The authored negative amount stays `-5.1250 (−USD 5.13 million)`. |
| C4-020 / charts follow-ups | Period series now use lines. Replace the old missing-column glyph lookup with exact plotted-point counts (two debt-maturity points, one committed-resource point), then retain the exact missing-commitment table reason and independently assert the recorded `300` commitment. No missing value becomes zero. |
| J3-019 / report follow-ups | The existing source highlight switch has its approved `Highlight source icons` label; retain hover visibility, trace navigation and reload checks. |
| T18 C4-003 / C5-004 | A model row header now contains its own named source control. Match the same exact visible Revenue/EBITDA label separately from the source button's accessible name. Keep the original `1,050`, `315`, `252`, case selection and source-identity assertions. |
| J3-017 / report follow-ups | Navigate to the same Report history screen through the approved `History` link. |
| C5-011 / OQ-04, accepted by R10 | Replace opening a supplied file with the required listed-only behavior: all three uploaded file names and original SHA-256 hashes must appear, each has no link, and no source-opening/served-source link exists. Original handoff download, downloaded bytes and designated-output hash checks remain. |
| C5-014 / batch a, retained under R16 | Locate the script-check card by its retained register/figure heading rather than the removed region name; independently retain the exact status, reason, recomputed value, counts and script hash checks. |
| C5-028 / R4 | Wait for Record's actual `/connected/activity/<run>` response before asserting synthetic execution. Preserve the original exact `Synthetic test`, `Adapter status` and status `200` checks, so a pending service-mode fallback cannot falsely satisfy the synthetic-type check. |

The observed intermediate RED runs are retained as `iteration-1-red.log` through
`iteration-8-red.log` in the evidence directory. They successively expose the
activity-card name, stress-selector name, unauthorized automatic sorting and the
new model-row source control, period-line representation and a still-unresolved
Record call-table failure. Two implementation mistakes were corrected without
changing the product: the first strengthened break-point matrix omitted the
unchanged B3 row, and an over-broad currency expectation temporarily required
`US$88.12` for a verbatim market quote. The final quote assertion is the original
exact `$88.12`.

## R8 network guard

One browser context contains every proof page. Its request guard is installed
before the first page and covers initial popup requests, normal requests and
WebSockets. Service workers are blocked so they cannot bypass routing. The mock
routes are restricted to the synthetic loopback origin, and explicit harness API
reads/route fetches do not follow redirects. No external host is allowlisted.

Playwright routes alone miss redirected requests. A browser-level HTTP proxy
therefore binds only to `127.0.0.1` and permanently denies every proxied HTTP or
CONNECT request; it has no forwarding or upstream connection code. Loopback
application traffic bypasses that denial proxy. Context request events retain
redirect attempts too, and the zero-attempt assertion runs even after another
proof failure; simultaneous failures are reported together.

Three portable Node unit tests exercise local/remote classification (including
userinfo, misleading host prefixes, remote file shares and blob origins), route
abort/continuation, WebSockets, and actual HTTP/CONNECT denial over loopback.
They require no browser in `test:scripts`.

The separate retained
[browser negative probe](proof-alignment-evidence/network-guard-browser.mjs)
exercises actual fetch, navigation redirect, popup and WebSocket attempts through
the local denial proxy. It passes with four exact context attempts, the expected
failed zero-attempt assertion, and a proxy-denied redirected connection. These
are deliberate negative-test attempts, separate from application proof counts.

The initial route-only redirect test did not retain a redirect request event;
whether it attempted DNS is unknown. That initial tooling limitation is retained
truthfully in `route-only-redirect-red.log`; it is not an application finding.
Every subsequent negative browser test uses the denial proxy before navigation.

Native browser background traffic is counted separately from page/context
requests. Blank `about:blank` controls captured native time/accounts/search
requests at the denial proxy before app navigation, with zero context attempts;
this distinction is observed, not inferred from host names. All such traffic is
denied locally. No browser/OS configuration is modified.

At the retained `run-vq0vlS` product failure, Chrome/Edge page-and-context attempts
are **0 / 0**. Their separate native browser proxy-denial counts are **132 / 157**;
the before-navigation blank controls already show **6 / 7** denials with **0 / 0**
context attempts. The four JSON control/offline files are retained beside the
report. The negative probe passes independently in native Chrome and Edge and
explicitly requires the redirected `example.invalid:443` CONNECT at the local
denial proxy, rather than accepting unrelated background denials as evidence.

The final frozen-code RED (`run-kh73wd`) independently retains **0 / 0** context
attempts, **119 / 154** native proxy denials, and blank controls with **0 / 0**
context attempts plus **7 / 8** native denials. Those four files have the
`frozen-` prefix. Counts describe observed attempts, not successful outbound
connections: the denial proxy forwards none.

## Product blocker retained

After all aligned Forecast, responsive, refinancing, source-list and hash checks
pass, the original exact `Adapter status` assertion fails in both browsers.
The retained `chrome-record-diagnostic.json` and `msedge-record-diagnostic.json`
show the actual cause: the report header says `Synthetic test`, but the settled
Record says `Run type / Live provider`, `Model calls` and `HTTP status`. All 14
call records exist and CP-1 retains status `200`; no call is missing. The earlier
synthetic-type assertion could accept the transient mode fallback before Record's
metadata arrived. The new response await above closes that false-positive window.

This is **R4-015, Medium / T45**, registered by the lead and assigned to a separate
runtime implementer. The final settled-response assertion reproduces it directly
in both browsers: actual `live-provider`, expected `synthetic`; retain
`settled-execution-red.log`. The harness does not accept live-provider wording
for an explicitly synthetic proof. Neither that assertion nor the adapter/status
gate is relaxed. No production repair or dependency rebase is made in this task.

## Checks and remaining verification

All long commands use `timeout 300`. The original per-browser 120-second budget,
15-second lookup timeout, 60-second run wait and service-start timeout remain.
No retry, skip, threshold or gate changed. Existing mobile/keyboard checks remain
despite R14 narrowing new findings. The worktree has its own locked uv 0.12.5
environment so synthetic child imports use this candidate's issuer-library;
`node_modules` is a local symlink to the existing installation. Setup changes no
manifest or lockfile. The worktree was built before the first guarded proof.

| Check | Result |
| :--- | :--- |
| Own `uv sync --locked` with uv 0.12.5 | 0; own editable packages |
| Own `npm --prefix web run build` | 0; existing chunk-size advisory |
| Initial guard test | RED; missing exported guard |
| Route-only redirect guard | RED; redirect absent from attempts |
| Portable guard unit tests | 3 passed, zero skips |
| Retained native browser negative probe | 2 passed in Chrome and 2 in Edge, zero skips |
| Full frontend lint / format / typecheck | 0 / 0 / 0 |
| General Node script suite | 73 passed, zero skips |
| Connected native Chrome / Edge proof | RED: both fail the retained adapter-status gate; the frozen-code settled API assertion then reproduces actual `live-provider` vs expected `synthetic` in both browsers |
| Final changed-script format/lint, whitespace and protected-path check | 0; no forbidden/protected-path change |

Direct confidence/simplification review checks the redirect escape, popup first
request, worker routing, paid-preview interception, API redirects, source-file
hashes, exact numbers and authored order. One guarded context plus a denial proxy
is smaller and preserves browser navigation better than fetching and rewriting
every response/redirect. Guard exports plus script-only registration allow the
portable tests to import the actual functions without launching the full proof.
The named historical confidence-review/rewrite-tournament tools are unavailable;
fresh independent review remains the lead's next step after the stable commit.

Not verified: a complete green connected journey is blocked by the separately
reported synthetic execution classification defect, so the later Record,
script-check, download/hash, paired Changes and final library assertions have
not yet completed; fresh review and accepted runtime/T22/R4-012 integration,
original finding probes, full combined fidelity/frontend/Python/weekly/Windows
gates, release packaging, real providers, paid/live runs, real Submit, seats and
Teams remain outside this harness task.
