# Run Credit OS through GitHub Copilot CLI

Every live CP-OS call uses the local GitHub Copilot CLI runtime through the
pinned Copilot SDK. The deployment seat must enable the models and reasoning
efforts it offers. The connected app can browse reports and prepare runs
offline.

| Connected choice | CLI config | Runtime model |
| --- | --- | --- |
| GPT Sol, Fast or Balanced | `copilot-sol-medium` | `gpt-6.1-sol` |
| GPT Sol, High | `copilot-sol-high` | `gpt-6.1-sol` |
| Claude Opus, Fast or Balanced | `copilot-opus-medium` | `claude-opus-5.5` |
| Claude Opus, High | `copilot-opus-high` | `claude-opus-5.5` |
| GPT-6 Luna, Extra high | `copilot-luna-xhigh` | `gpt-6-luna` |

Balanced applies high on the selected modules in CP-OS's effort map. The
seat must advertise medium and high for that choice.

## Set up the deployment seat

Enable Copilot CLI and the desired models in the enterprise's Copilot policy.
Use the approved pinned SDK and local runtime. From the checkout:

```bash
uv sync --locked
uv run python -m copilot download-runtime
```

Set `COPILOT_CLI_PATH` to the installed runtime executable. Provide
`COPILOT_GITHUB_TOKEN` in the launching environment, or explicitly set
`COPILOT_USE_GH_LOGIN=1` and use the active `gh` account. A supplied Copilot
token takes priority. The run records the authentication mode.

To start the connected app with the choices the deployment seat advertises:

```bash
uv run --locked python -m react_frontend --root /path/to/workflow-folder --copilot-preflight
```

Preflight lists model capabilities. It creates no inference session and sends
no issuer material. If verification fails, the app can still open and prepare
runs. The runtime checks the selected model and effort again at dispatch.

## Launch and review

For a prepared run use the chosen model configuration and the pathway cap:

```bash
uv run python -m deploy_workflow.owners.cpos_launch --context ... --sources ... \
  --config copilot-luna-xhigh --cap 25 --out runs/example
```

CP-OS keeps up to two independent modules in flight at once (owner, 2026-11-18),
each in its own Copilot session, so a run holds at most two sessions on the seat.
Modules still start and are accepted in plan order, and the run's cap covers both:
a call that would pass the cap only because the other module's hold is open waits
for that call to settle. `--parallel-modules 1`, or `CREDIT_OS_PARALLEL_MODULES=1`
in the launching environment (the run start service passes no flag), runs one
module at a time as before; the most is 4. Two sessions on one seat, the seat's
rate limits and a tool result that waits for an earlier module are not yet checked
on a live run.

Add `--live --ruling docs/rulings/<file>.md` only for a separately authorized
paid CLI run. The ruling must name the configuration. In the connected app,
Submit on the approved summary authorizes the run at the displayed pathway
cap.

Finish or stop pre-cutover direct-provider jobs before upgrading. Review
any pending legacy approval again before starting a run on Copilot.
Historical recordings remain readable with their original model and provider.

## Search and charging

CP-DR can use the approved public lookup tools when the launcher offers them.
Native Copilot web search is unavailable pending deployment proof of the
search query and source records, usage accounting, and a spending bound for
automatic follow-up calls. The SDK's session limit is a soft limit.

Copilot charges are settled from runtime usage. Credit OS reserves for the
runtime's possible output, including reasoning. The adapter disables background
compaction and autonomous continuations, and checks the session context against
limits returned by the seat. Check the intended seat,
reported usage, and the Windows runtime under separate paid authorization.
