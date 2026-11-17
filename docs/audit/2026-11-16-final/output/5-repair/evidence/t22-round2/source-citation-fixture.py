"""Actual store/chip projection for an offline malformed-handoff drawer probe."""

import hashlib
import json
import sys
from pathlib import Path
from tempfile import TemporaryDirectory

from credit_os import store

from deploy_workflow.credit_os_chips import chips
from react_frontend import sources

rows = [
    ("Directly Sourced", "0008"),
    ("Calculated", "2"),
    ("Assumption-Based", "2"),
    ("Analyst Inference", "0"),
    ("Weak Lineage", "0"),
    ("Untraced", "0"),
    ("Conflicting", "0"),
    ("Insufficient Information", "0"),
    ("Fields present", "95"),
    ("Fields total", "100"),
    ("Source gate", "pass"),
    ("CRITICAL", "0"),
    ("MATERIAL", "0"),
    ("MINOR", "1"),
]
qualification = (
    "Counts cover FY2025 audited standalone evidence only; overseas subsidiaries are excluded."
)
text = "\n".join(
    [
        "## Findings",
        "### Earlier supporting table",
        "| Claim | Value |",
        "| --- | --- |",
        "| Malformed earlier row |",
        "Basis: Earlier.pdf, page 2.",
        "```md",
        "### Confidence inputs",
        "Unrelated fenced qualification.",
        "```",
        "### Confidence inputs",
        qualification,
        "Basis: Annual.txt, page 7.",
        "| Input | Value |",
        "| --- | --- |",
        *[f"| {label} | {value} |" for label, value in rows],
        "### Limitations",
        "Unrelated next-section limitation.",
    ]
)
raw = text.encode()
sections, problem = store.structured(raw, False)
output_hash = hashlib.sha256(raw).hexdigest()
output = dict(
    id="run-a/CP-1.md",
    module="CP-1",
    label="Retained output",
    href="",
    sha256=output_hash,
    parseError=problem,
    **store.confidence_fields(raw),
)
source_text = b'{"page": 7, "text": "Exact annual source excerpt."}\n'
source_original = b"A" * 72000 + b"Exact annual source excerpt."
source_hash = hashlib.sha256(source_original).hexdigest()
inventory_text = (
    "### Complete supplied inventory and provenance\n"
    "| Label | Exact supplied source name | Exact sha256 |\n| --- | --- | --- |\n"
    f"| K | Annual.txt | {source_hash} |\n"
)
snapshot = {
    "outputs": {
        "run-a/CP-0.md": {"module": "CP-0", "sha256": "inventory"},
        output["id"]: output,
    },
    "handoffs": {output_hash: sections, "inventory": store.parse_source(inventory_text)},
}
with TemporaryDirectory(prefix="t22-source-citation-") as temporary:
    root = Path(temporary)
    source_dir = root / "runs" / "run-a" / "source-text"
    source_dir.mkdir(parents=True)
    (source_dir / "Annual.txt").write_bytes(source_text)
    original_dir = source_dir.parent / "inputs"
    original_dir.mkdir()
    (original_dir / source_hash).write_bytes(source_original)
    (source_dir.parent / "workflow.json").write_text(
        json.dumps({"sources": {"Annual.txt": {"sha256": source_hash}}})
    )
    record = {
        "folder": "run-a",
        "modules": {
            "CP-0": {"outputs": ["run-a/CP-0.md"]},
            "CP-1": {"outputs": [output["id"]]},
        },
        "evidence": {
            "sources": [{"name": "Annual.txt", "sha256": source_hash}],
            "unused": [],
            "unrecorded": [],
        },
    }
    snapshot = sources.enrich(
        {"workspace": {**snapshot, "runs": {"run-key": record}}, "chips": chips(root, snapshot)},
        root / "runs",
    )

result = {
    "qualification": qualification,
    "sourceText": text,
    "sourceHash": source_hash,
    "parseError": problem,
    "entry": {"selected": True, "output": output, "sections": sections},
    "snapshot": snapshot,
}
Path(sys.argv[1]).write_text(json.dumps(result, indent=2) + "\n")
print(json.dumps({"parseError": problem, "confidence": output["confidence"]}))
