# Stage 6 sweep report

The accepted repair base is `ba3df7d5af3f895b9eebd3ded6ab150acfffd874`
with application source `bb94ddce`. The sweep's application and test inputs
were sealed at `e40eabe1bcf13591bdae7899b5e0a65038a7f926`. The final
measurement-helper code and quality-gate pin is
`22926bd1982c8847a9913459587d3003bb7986df`. Later commits retain reports,
measurements and stage 5 evidence using those same application inputs.

Sweep PR: [#59](https://github.com/EricMG13/credit-os2/pull/59) into `audit/final-repairs`.

## Accepted changes

| Item | Result |
| --- | --- |
| [SW-01](SW-01.md) | Removed the unread intake `capText` field, with the live cap data and display kept. |
| [SW-02](SW-02.md) | Removed two shared component imports of a page module. The trace classes and both stylesheets matched in the isolated check. |
| [SW-03](SW-03.md) | Used the existing chart wrapper without repeating five forwarding props. Both measured duplicate blocks disappeared, with the same chart and table behavior. |
| [SW-D05](SW-D05.md) | Projected History row details in its existing loader. The earlier-row serialized fixture state fell from 2,168 to 109 bytes with the same markup and requests. |
| [S6-036](S6-036.md) | Removed the unreachable static readiness cap fallback and unused title override. The validated static cap still draws the same panel. |
| [SW-D01](SW-D01.md) | Dropped the unused submissions `Decimal` import. Ruff F401 cleared and the existing callers passed unchanged. |

The [register](register.md) accounts for the 17 inherited sweep rows and
nine related observations. The other 20 retain their documented callers,
contracts or evidence limits. The separate
[measurement helper repair](measurement-helper-quality.md) cleared 62
quality findings without changing the retained output bytes. Independent
reports are under [reviews](reviews/).

The [matched measurements](measurements.md) show 45 fewer net source lines,
two fewer web clones, 20 fewer duplicate web lines and zero new
suppressions or unused exports. The complete build is 458 raw bytes
smaller and 13 gzip bytes larger under the stated per-file method. Both
paired synthetic render runs reached all 26 routes in each of three
fresh-context rounds. Variable load limits the timing comparison.

## Combined review and gates

The final diff retains the shared trace class and the exactly selected
chart table, title, action and default view. The existing chart wrapper
has a closed set of props. The History loader preserves the request and
abort handling and retains only the data used by a row. Its paired probe
covers pending, absent, error and abort states. Moving the projection
into the loader uses the same details function and avoids a second
cache or a separate shared abstraction. The two dead branches have
caller and type evidence. The Python deletion has no dynamic reader.
Every production change has its own fresh reviewer and before/after
proof record. No test or golden expectation changed during the sweep.
Protected Signal, prompts, canned handoffs, calculation paths, legacy
pages and public routes remain covered by the original contract.

| Command or group | Exit and result |
| --- | --- |
| `npm --prefix web run lint`, `format:check`, `typecheck` | 0 each |
| `npm --prefix web run test`, original native selection in eight bounded shards | Native merge 0. All 5,259 cases in 308 files passed, including 630 Signal cases. No missing, extra or duplicate identities or skips. Unchanged 80% threshold passed at 97.69%. |
| `npm --prefix web run audit`, `unused`, `duplication` | 0 each. Zero production vulnerabilities, Knip issues or new clone pairs. |
| `npm --prefix web run build`, `test:scripts` | 0 each. Both build entries, 73 script cases. |
| `npm --prefix web run test:file:gates` | 0 on retry with the local deny proxy, 138 passing checks and the violation canary. |
| `npm --prefix web run proof:connected` | 0. Chrome 157 and Edge 155 both completed the native synthetic proof. |
| Fast Python | 0 for all 13 original CI and supplemental shards, 6,285 passes and one pre-existing conditional skip. All 6,286 node identities matched. |
| Workflow Node scripts | 0, 573 passed on the original five scripts. |
| `uv run --no-sync python tools/quality_gate.py` | 0. Default base, 49 files and 6,538 owned lines with zero findings. |
| `uv run --no-sync python tools/quality_gate.py --base audit/final-repairs` | 0. Original gate and imports, 3 files and 266 owned lines with zero findings. Verified repair source `bb94ddce`; the later repair evidence commit contains no change in the gate inputs. |

Commands used Node 24.22.1, npm 11.9.0, Python 3.13.15, uv 0.12.5, the
locked installed dependencies and `timeout 300` per long command. The
strictly bounded suite decomposition preserves each frontend gate,
the complete test selection and the original global coverage threshold.
The first single-run shard 2 title assertion failed before its passive
effect reached the expected title. The exact unchanged file passed on
both revisions and the exact full shard retry passed without test changes.
The original file-gate attempt exited 1 because the local wrapping proxy
received an unhandled connection reset. The repeat preserved the browser
assertions and handled that socket close in the local wrapper, while
recording every denial. This did not require a change to the repository
gate or app. See the [integrated evidence](evidence/integrated/) for the
exact logs and selections.

Not verified: release ZIP and Windows or work-PC behavior, actual memory
use or a render speed improvement, live or paid execution, real Submit,
seat access, or Teams behavior. The release checks follow in stage 7.
