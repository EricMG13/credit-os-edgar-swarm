// EDGAR swarm: batches of Sonnet analysts take planned issuers through CP-OS host mode to CP-2.
//
// args: { root, repo, concurrency = 10, limit, secondPass = false }
//   root         the shared root holding swarm/plan.json (written by tools/swarm/prepare.py)
//   repo         the repository checkout to run uv in
//   concurrency  analysts at a time (default 10)
//   limit        stop after this many issuers have been claimed (pilot: 5); default no limit
//   secondPass   claim `failed` issuers instead of `pending` ones
//
// ASSUMED host API (the workflow-authoring skill was not available when this was written):
// the default export receives { args, agent, shell }; agent(prompt, opts) resolves to the
// analyst's final text; shell(command) resolves to { code, stdout, stderr }. Adjust the three
// names below if the Workflow tool differs. The controller (this script) is the only ledger writer.
export const meta = {
  name: 'edgar-swarm',
  description: 'Run planned issuers through cpos_launch host mode to CP-2 in batches of Sonnet analysts',
  args: ['root', 'repo', 'concurrency', 'limit', 'secondPass'],
}

const q = (s) => `'${String(s).replace(/'/g, `'\\''`)}'`

const BRIEF = (c) => `You answer CP-OS modules for one issuer, ${c.name} (issuer id ${c.issuer_id}).
No provider is called; you are the model. Follow this order exactly.

1. Read ${c.repo}/docs/templates/host-analyst-checklist.md and follow it for every answer.
2. From ${c.repo} run this command (it prints; run it as given):
   ${c.command}
   Exit 3 means a module needs your answer: read the files named on its Source: and Handoff:
   lines, write your draft under ${c.drafts}/ , work the checklist's "Before you submit" on the draft,
   copy it to the Answer: path printed, and run the same command again. Exit 0 = finished.
   Exit 1 = stopped. Exit 2 = refused. Stop on 0, 1 or 2.
3. Count the launcher attempts for each module (the first submission is 1). You may resubmit a
   module at most 2 times (3 attempts); if a module is rejected a third time, stop and report.
4. Rules: no web, no network; no edits to the repository; write drafts only in ${c.drafts}/;
   do not read any other issuer's folder or draft; do not touch ${c.root}/swarm/plan.json
   (the ledger; the controller writes it). An accepted answer cannot be replaced.
5. Final reply, last line exactly this JSON and nothing after it:
   {"issuer_id":"${c.issuer_id}","exit_code":<last launcher exit code>,"attempts_by_module":{"CP-0":<n>,"CP-1":<n>,"CP-1A":<n>,"CP-2":<n>},"notes":"<one sentence, defects you could not fix>"}
   Before it, one line each for any answer defect you saw after acceptance.`

function parseReport(text, issuerId) {
  const lines = String(text).trim().split('\n').reverse()
  for (const line of lines) {
    const t = line.trim()
    if (!t.startsWith('{')) continue
    let r
    try { r = JSON.parse(t) } catch (e) { continue }
    if (r.issuer_id === issuerId && Number.isInteger(r.exit_code) && r.attempts_by_module) return r
  }
  return null
}

export default async function main({ args, agent, shell }) {
  const { root, repo } = args
  if (!root || !repo) throw new Error('args.root and args.repo are required')
  const concurrency = Number(args.concurrency ?? 10)
  const limit = args.limit === undefined ? Infinity : Number(args.limit)
  const py = (script, rest) => shell(`cd ${q(repo)} && uv run python tools/swarm/${script} ${rest}`)
  const ledger = (rest) => py('ledger.py', `--root ${q(root)} ${rest}`)
  const must = (r, what) => {
    if (r.code !== 0) throw new Error(`${what} failed (exit ${r.code}): ${r.stderr || r.stdout}`)
    return r.stdout
  }

  let claimed = 0
  const tally = { published: 0, failed: 0, batches: 0 }
  while (claimed < limit) {
    const n = Math.min(concurrency, limit - claimed)
    const batch = JSON.parse(must(await ledger(`next --n ${n}${args.secondPass ? ' --failed' : ''}`), 'ledger next'))
    if (batch.length === 0) break
    claimed += batch.length
    tally.batches += 1

    const outcomes = await Promise.all(batch.map(async (issuer) => {
      const id = issuer.issuer_id
      const command = must(await py('run_issuer.py', `${q(id)} --root ${q(root)}`), 'run_issuer')
      const drafts = `${root}/swarm/drafts/${id}`
      let text = ''
      try {
        text = await agent(
          BRIEF({ name: issuer.name, issuer_id: id, repo, root, drafts, command: command.trim() }),
          { model: 'sonnet', effort: 'medium' },
        )
      } catch (e) {
        return { id, fail: `analyst agent failed: ${e && e.message ? e.message : e}` }
      }
      const report = parseReport(text, id)
      if (report === null) return { id, fail: 'analyst gave no parseable final report' }
      if (report.exit_code !== 0) {
        return { id, fail: `launcher stopped, exit ${report.exit_code}: ${report.notes || ''}`, report }
      }
      const check = await py('run_issuer.py', `${q(id)} --root ${q(root)} verify`)
      if (check.code !== 0) return { id, fail: `relaunch check failed: ${check.stderr.trim()}`, report }
      return { id, report }
    }))

    // The controller records every outcome; analysts never write the ledger.
    for (const o of outcomes) {
      const by = o.report ? q(JSON.stringify(o.report.attempts_by_module)) : null
      if (!o.fail) {
        const r = await ledger(`done ${q(o.id)} --attempts-by-module ${by}`)
        if (r.code === 0) { tally.published += 1; continue }
        o.fail = `ledger refused done: ${r.stderr.trim()}` // for example over the retry cap
      }
      must(
        await ledger(
          `fail ${q(o.id)} --reason ${q(o.fail)}` +
            (by ? ` --attempts-by-module ${by} --exit-code ${o.report.exit_code}` : ''),
        ),
        'ledger fail',
      )
      tally.failed += 1
    }

    must(
      await shell(`cd ${q(repo)} && uv run python apps/issuer-library/update_library.py --workspace ${q(root)}/_engine`),
      'update_library',
    )
  }
  const counts = must(await ledger('status'), 'ledger status')
  return { ...tally, claimed, ledger: JSON.parse(counts) }
}
