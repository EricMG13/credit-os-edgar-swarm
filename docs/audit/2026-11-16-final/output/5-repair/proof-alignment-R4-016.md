# R4-016: negative-probe startup cleanup

Low finding from the independent frozen-harness review. The separate retained
`proof-alignment-evidence/network-guard-browser.mjs` started its local HTTP server
and denial proxy before entering `try/finally`. A missing browser executable
therefore left listeners active after the expected launch error.

Moved listener/proxy/browser startup into the existing cleanup scope. Browser
and proxy cleanup now handle resources that were never created, and the HTTP
server closes only when it is listening. No assertion, expected value, host
allowlist, timeout, retry or gate changes. Neither frozen harness code file at
`f251fbc79f418e7e06c652fd016d065490588c7f` changes.

Exact before/after command, from this worktree:

```sh
CHROME_PATH=/definitely-not-an-installed-browser timeout 5 node --test docs/audit/2026-11-16-final/output/5-repair/proof-alignment-evidence/network-guard-browser.mjs
```

| Check | Observed result |
| :--- | :--- |
| Same missing-browser command, before | Exit 124 at the five-second timeout; one cancelled test and live listeners after the launch error |
| Same command, after | Expected exit 1 in 0.38 seconds; the executable error remains, zero cancelled tests, process exits naturally |
| Native Chrome negative probe | Exit 0; 2 passed, 0 skipped, natural exit in 1.58 seconds |
| Native Edge negative probe | Exit 0; 2 passed, 0 skipped, natural exit in 1.67 seconds |
| Evidence-probe ESLint / Prettier | 0 / 0 with the existing web configuration |
| Frozen two-file harness comparison | No difference from `f251fbc7` |
| Whitespace check | 0 |

The natural process exits exercise cleanup of the local listeners; unlike the
RED case, none requires an external timeout. Native runs retain all four exact
blocked context attempts and require the redirected CONNECT at the denial proxy.
Raw logs remain in `/workspace/scratch/proof-alignment-R4-016-*`; portable copies
and their raw/copy hashes are retained in the evidence directory. The complete
independent harness review is retained there as `harness-independent-review.md`:
frozen code **PASS, 0 High / 0 Medium / 0 Low**, with this separate evidence Low.

Not verified: independent rereview of this artifact-only cleanup; the complete
connected journey remains blocked by separately assigned R4-015 until the lead
approves its product repair. No full proof, provider, paid/live run, real Submit,
seat or Teams action was performed for this Low.
