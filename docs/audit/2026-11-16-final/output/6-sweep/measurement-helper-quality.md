# Sweep measurement helper quality

The two measurement helpers first appeared on the sweep branch. The default
quality gate reported 62 findings across them. The findings concerned
formatting, input and output types, and line lengths. Code
`9c1dfd17423222ddf9cd818940f5ec81ea8fd1f6`, based on `541c994a`,
corrects the helpers in place.

The tree helper now uses one suppression scan over the existing distinction
between Python comment tokens and frontend text lines. The timing helper
uses typed records for the reported cases and durations. Both scripts keep
their original arguments, file selection, calculations, output fields and
ordering. The measured inputs and evidence are untouched.

| Check | Exit | Observed result |
| --- | ---: | --- |
| Default quality gate on the original tree | 1 | 62 findings in the two helpers. |
| Default quality gate with the correction | 0 | Zero findings across 48 changed files, including import contracts. |
| Quality gate with `--base audit/final-repairs` at `bb94ddce` | 0 | Zero findings across 3 changed Python files, including import contracts. |
| Replay both original tree measurements | 0 | Outputs match the tracked JSON and original stdout byte for byte. |
| Replay original pytest and Vitest evidence | 0 | Output matches the tracked test timing JSON and original stdout byte for byte. |
| Local fixture checks | 0 | Source scopes, suppression counts, missing build entry, test node selection, tied ordering and timing defaults match the independent expected results. |
| `git diff --check 541c994a..HEAD` | 0 | No whitespace findings. |

The gate used uv 0.12.5, Python 3.13.15, `--no-sync`, the isolated worktree
on `PYTHONPATH` and `timeout 300`. The replay also matched under Python
3.12.14. Replay inputs were the built discovery baseline at `5e1d98b3`,
the built stage 0 reference at `2b881075` and the retained original
pytest/Vitest shard evidence. The local fixture confirms that a Python
string resembling a directive is ignored, mixed-case Ruff directives still
count, and Signal paths stay excluded. It also confirms that missing test
durations and missing build entry points keep their original treatment.

| Reproduced result | SHA-256 |
| --- | --- |
| Discovery tree metrics | `2a0d86f38fa0ffdf55af27475b990e92f70ffd36e45d92b3cbb2b8e9720a9b45` |
| Stage 0 tree metrics | `32e126dbcc629cade1a315503c619aac8bc5e49709b5f4e1a987304508d1c5ac` |
| Test timing metrics | `8dc98f1fc359344906a11b0e9bd37f1c359023fa88ee14a8d063e8fde1b74aec` |

Raw checks and reproduced results are in
`/workspace/scratch/stage6-evidence-quality/`. The simplest alternative
was to annotate the old top-level timing variables directly. Keeping
report collection in two small functions makes the return types and
scope explicit without a second parser or changes to the JSON. The
protected application files, measured inputs and gate are unchanged.

Not verified: independent review and the combined sweep gates on the
integrated branch remain with the sweep lead.
