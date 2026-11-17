# Work-PC initialisation rehearsal

The acceptance behavior was a complete read-only inventory and a stop for
approval. Two fresh assistants were given the finished prompt and local
locations for the download, proposed adapted copy and approved sources.
Neither was told which versions were missing. Both read the same prompt
bytes from a clean source archive. All package queries were to loopback
metadata indexes with no upstream forwarding.

The first assistant correctly stopped but found that the test index covered
direct requirements only. Its requested transitive lookup exposed a harness
gap. The lead rebuilt the index from all lock entries and reran the same
prompt with a new assistant. There was no change to the prompt between the
two rehearsals. The raw first inventory is retained in
`/workspace/scratch/stage7-dry-run/agent/`.

The complete control index covers all 37 registry Python pins and 592 unique
npm package/version pairs (597 lock entries, including duplicate or bundled
entries). The filtered index removes exactly `pydantic==2.14.1` and
`react@19.3.0`. All other version records and their represented metadata
remain byte-equivalent. The inventory checked both editable Python projects,
the external build metadata, browsers and toolchain, and the archive
baseline. The clean archive passed the baseline check with exit 0.

| Required | Available in rehearsal | Proposed substitute | Files to change before approval | Risk |
| --- | --- | --- | --- | --- |
| Python `pydantic==2.14.1` | Exact version absent from the approved metadata | None advertised; blocked | None | Analysis and service imports need the validated dependency. |
| npm `react@19.3.0` | Exact version absent from the approved metadata | None advertised; blocked | None | The React graph and offline UI need the audited version. |
| Development Git context | Git installed; clean archive has no `.git` and no approved bundle or checkout was supplied | Approved upstream checkout with the comparison ref when available | None | A same-tree baseline would make the code diff vacuous. |
| Windows runtime and native installed browsers | Linux rehearsal and only the Chromium executable found by this inventory | Actual approved work-PC toolchain | None | This check cannot establish Windows compatibility. |

The assistant reported metadata-only artifact limits separately. Among the
other locked Python pins, three build-related versions were advertised
without artifact listings. The remaining declared build tools had only the
observed build metadata. The standalone `tslib@2.8.1` lock entry did not carry an integrity value.
Six bundled npm entries were recorded as such. The indexes served no actual
artifacts, so advertised availability and installability were recorded
separately. No substitutes were guessed.

The approval table gave R1-009 and C2-025 separate work-PC rows. The
assistant ended at the approval stop without creating an adapted copy,
installing anything, running a gate or proof, configuring credentials, or
editing the download, prompt or locks. Complete source-file SHA-256
manifests compare equal before and after both runs. The verified launcher
has CRLF in the exported archive, as directed by its Git attributes. Its
standalone manifest hashes the exported bytes.

Evidence: [index delta](evidence/rehearsal/index-delta.json),
[provenance and request counts](evidence/rehearsal/provenance.json) and
[baseline result](evidence/rehearsal/source-baseline.log). Full package
inventory and table are retained under
`/workspace/scratch/stage7-dry-run-v2/agent/`, with hashes in provenance.

Not verified: actual work-PC or Windows installation, approval of any
adaptation, approved artifact supply, Git availability on the real PC,
browser proof or live/paid/Teams behavior. The metadata rehearsal proves
the inventory and stop only.
