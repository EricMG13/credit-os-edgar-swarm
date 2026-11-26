"""Apply scheduler admission to every connected view of a native publication."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path
from typing import Any

from deploy_workflow import http_base
from deploy_workflow.inbox import runs
from deploy_workflow.inbox.layout import Layout

EXPORT_PREFIX = "window.CREDIT_OS_DATA="
EXPORT_KEYS = ("catalogue", "workspace", "activity", "chips")
# The last publication parsed, with the sha256 of the bytes it was parsed from. One service reads
# one publication, and parsing it on every request grew with every run it lists
# (VERIFICATION.md 2026-11-18). The file is read and hashed on every request: its timestamps do
# not show every change (a rewrite in place under a restored time, a write through a mapping).
_kept: tuple[str, dict[str, Any]] | None = None


def _invalid_json(constant: str) -> None:
    raise ValueError(f"invalid JSON constant {constant}")


def _decoded(raw: bytes) -> dict[str, Any]:
    """The assignment's JSON object; anything else is refused."""
    assignment = raw.decode("utf-8").rstrip()
    if not assignment.startswith(EXPORT_PREFIX) or not assignment.endswith(";"):
        raise ValueError("invalid issuer library export")
    snapshot = json.loads(assignment[len(EXPORT_PREFIX) : -1], parse_constant=_invalid_json)
    if not isinstance(snapshot, dict):
        raise TypeError("invalid issuer library snapshot")
    if any(not isinstance(snapshot.get(key), dict) for key in EXPORT_KEYS):
        raise ValueError("invalid issuer library snapshot")
    return snapshot


def published(layout: Layout, *, limit: int | None = None) -> dict[str, Any] | None:
    """The service's publication as its JSON object; None when there is none.

    The object is shared between requests while the file's bytes stay the same: callers read it
    and build their replies from copies. ``limit`` refuses a publication of more bytes."""
    global _kept
    path = layout.engine / "library" / "data.js"
    raw = http_base.read_regular(path, limit=None if limit is None else limit + 1)
    if raw is None:
        return None
    if limit is not None and len(raw) > limit:
        raise ValueError("issuer library export is over the size limit")
    digest = hashlib.sha256(raw).hexdigest()
    kept = _kept
    if kept is not None and kept[0] == digest:
        return kept[1]
    snapshot = _decoded(raw)
    _kept = (digest, snapshot)
    return snapshot


def admitted(snapshot: dict[str, Any], layout: Layout) -> dict[str, Any]:
    """Retain historical publications; hide managed runs until scheduler acceptance.

    Delivery writes the library before the scheduler decides the run's final status.
    A publication alone therefore cannot establish completion for a managed run.
    Historical library folders without a scheduler record retain native admission.
    """
    readable, unreadable = runs.load_readable(layout)
    # Fail closed for the run of an unreadable record file: its stem is the run ID, and a run whose
    # acceptance cannot be read is not shown. Every other publication stays visible.
    unfinished = {record.id for record in readable if record.status != "finished"}
    unreadable_stems = {runs.name_key(Path(name).stem) for name in unreadable}

    def hidden(name: Any) -> bool:
        # A library folder is the run ID; a file system may fold its case, so an unreadable file's
        # stem hides a folder of any case. Readable records' IDs are compared as stored.
        return name in unfinished or (
            isinstance(name, str) and runs.name_key(name) in unreadable_stems
        )

    workspace = snapshot["workspace"]
    published = {key: run for key, run in workspace["runs"].items() if not hidden(run["folder"])}
    if not unfinished and not unreadable_stems:
        return snapshot
    output_ids = {
        output
        for run in published.values()
        for module in run.get("modules", {}).values()
        for output in module["outputs"]
    }
    outputs = {
        key: output
        for key, output in workspace.get("outputs", {}).items()
        if key in output_ids and (not output.get("run") or output["run"] in published)
    }
    hashes = {output["sha256"] for output in outputs.values()}
    return {
        **snapshot,
        "catalogue": {
            **snapshot["catalogue"],
            "real": [run for run in snapshot["catalogue"]["real"] if not hidden(run["id"])],
        },
        "workspace": {
            **workspace,
            "runs": published,
            "outputs": outputs,
            "handoffs": {
                key: value for key, value in workspace.get("handoffs", {}).items() if key in hashes
            },
            "models": [
                model
                for model in workspace.get("models", [])
                if not hidden(model.get("runId")) and not hidden(model.get("runFolder"))
            ],
        },
        "chips": {
            key: value
            for key, value in snapshot["chips"].items()
            if key.rpartition(":")[0] in outputs
        },
    }
