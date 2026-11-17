# repair-1 worker notes

Read with `docs/audit/2026-11-16-final/stages/5-repair.md` (your brief) and your task in
`docs/audit/2026-11-16-final/output/4-register/tasks.md`. The controller gives you your task id,
your role (implementer or reviewer), your worktree and your port. These notes are the session's
environment facts and its rules for this group; `AGENTS.md` and the audit `README.md` govern.

## Rules for this group (from the lead's note and the rulings)

- Change only the files your task names in `tasks.md`, plus a test file, a `*.cases.json` table
  or a `*.fixture.ts` of those files, and new test files beside them. If the repair needs any
  other file, stop and report `NEEDS FILE: <path> because <reason>`; do not edit it.
- A ruling note in `tasks.md` is binding (R10). Do not change analytical methods, `prompts/`,
  calculations, canned handoffs under `proof/handoffs/`, or module-written text. Delivery adds
  no analysis. Signal (`web/src/pages/signal/`, `src/deploy_workflow/signal/`) is not touched.
- Test first: the new test fails before the repair and passes after. No test's expected values
  are edited, no test is skipped, no gate is loosened. An existing test that asserts the defective
  behaviour may be changed only to the behaviour the finding and its ruling require, and your
  report names each such change.
- Probes are the answer key: never edit them. An `exit` probe exits non-zero while the defect is
  present; an `output` probe prints the defect and exits 0 either way, so read its output before
  and after and quote the relevant lines in your report.
- No paid call, no `--live`, no real provider. The app must work offline (R8).
- Wrap every command in `timeout` (at most 600 s). Fast targeted tests only (`timeout 300`).
- No credential in any file. Cap loops at 1,000. Do not exhaust threads, processes or disk.

## Worktree set-up (implementer, once)

Your worktree is a separate checkout; the main checkout is `/home/user/credit-os2`.

```
cd <your worktree>
git log -1 --format=%H            # record this as BASE for the quality gate and your report
ln -s /home/user/credit-os2/web/node_modules web/node_modules
timeout 600 uv sync --locked      # uv 0.12.5 at ~/.local/bin; gives this worktree its own .venv
timeout 600 npm --prefix web run build   # proof.serve serves web/dist; rebuild after each web/ change before a probe
```

## Environment facts (stage 0)

- Playwright: launch Chromium with `executablePath:
  '/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell'`
  (the default launch hangs). The probes already do this.
- `proof.serve --root` must be at most 80 characters; probes use short roots under `/tmp`.
- A completed synthetic run needs `proof/northbridge-credit-agreement.txt` uploaded and chosen as
  the executed agreement.
- `test:file:gates` needs `CI=true` and `CHROME_PATH` set to the headless shell above.
- Run probes from the worktree root (they take the repository from the working directory), e.g.
  `timeout 600 node docs/audit/2026-11-16-final/output/2-sections/C1/probes/<probe>.cjs`.

## Ports (never run two probes on one port at once)

Each task has its own port for the probes that accept one; fixed-port probes are scheduled by
the controller so no two running tasks share them.

| Task | Set before C1 probes | Set before C2 probes | Fixed-port probes it uses |
| :--- | :--- | :--- | :--- |
| T01 | `C1_BASE=http://127.0.0.1:8741` | | C5 snapshot-path-leak (8735) |
| T02 | | | J1 (8761) |
| T03 | `C1_BASE=http://127.0.0.1:8743` | | |
| T04 | `C1_BASE=http://127.0.0.1:8744` | | J5 (8765) |
| T05 | `C1_BASE=http://127.0.0.1:8745` | | |
| T06 | | | J5 (8765) |
| T07 | | `C2_PORT=8747` | J2 (8762) |
| T08 | | `C2_PORT=8748` | J2 (8762), J1 (8761) |
| T09 | | `C2_PORT=8749` | J2 (8762), J5 (8765) |
| T10 | | `C2_PORT=8750` | |
| T11 | | `C2_PORT=8751` | |
| T12 | | | J1 (8761) |

A C1 probe reuses any service already answering at `C1_BASE`; make sure the one answering is
your own worktree's (stop stale services you started: `pkill -f "proof.serve.*--port <port>"`).

## Gates (stage 5 step 3, lead's note 5)

- `web/` changes: `npm --prefix web run lint`, `npm --prefix web run format:check`,
  `npm --prefix web run typecheck`, and the affected vitest files
  (`cd web && timeout 300 npx vitest run <files>`).
- Python changes: `timeout 600 uv run python tools/quality_gate.py --base <BASE>` and the affected
  tests (`timeout 300 uv run pytest -q <files>`).
- If a file you change is imported by anything under `web/src/pages/signal/` (check with grep),
  also run Signal's vitest files.

## Implementer output

1. Commit your change in your worktree on its branch, one commit, message
   `<task id>: <summary> (<finding ids>)`. Include your report.
2. Report at `docs/audit/2026-11-16-final/output/5-repair/<task id>.md`: findings, files changed,
   the test (name, path; failing output before, passing after), each probe's command and exit code
   before and after (and the quoted output lines for `output` probes), each gate's command and exit
   code, any existing test you changed and why, BASE commit, ending with a `Not verified:` line.
3. Reply to the controller with: worktree path, branch, commit, report path, and any
   `NEEDS FILE:` line.

## Reviewer output

Write `docs/audit/2026-11-16-final/output/5-repair/<task id>-review.md` (adversarial second read:
`<task id>-review-adversarial.md`) in the task's worktree, uncommitted, and reply with the verdict:
`PASS` or `CHANGES NEEDED`, each review finding with severity (High, Medium, Low), file and line,
and a one-line reason. Check: does it fix the cause, does it break a caller, did it weaken a test
or a gate, did it add anything not asked for, did it touch a file outside the task, does the
report's evidence hold when you re-run the new test and at least one probe yourself. End the file
with `Not verified:`.
