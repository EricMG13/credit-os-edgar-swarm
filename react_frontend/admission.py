"""Apply scheduler admission to every connected view of a native publication."""

from __future__ import annotations

import json
import os
import time
from pathlib import Path
from typing import Any

from deploy_workflow import http_base
from deploy_workflow.inbox import runs
from deploy_workflow.inbox.layout import Layout

EXPORT_PREFIX = "window.CREDIT_OS_DATA="
EXPORT_KEYS = ("catalogue", "workspace", "activity", "chips")
# A file changed again within its timestamp's resolution keeps the same identity, so a publication
# is kept only once it has been unchanged for longer than the coarsest resolution (FAT: 2 s).
_SETTLED_NS = 2_000_000_000
Identity = tuple[int, int, int, int]
# The last publication parsed, with the file and the identity it was read under. One service
# reads one publication, and parsing it on every request grew with every run it lists
# (VERIFICATION.md 2026-11-18).
_kept: tuple[Path, Identity, dict[str, Any]] | None = None


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


def _identity(path: Path) -> Identity | None:
    try:
        found = os.stat(path, follow_symlinks=False)
    except OSError:
        return None
    return found.st_ino, found.st_size, found.st_mtime_ns, found.st_ctime_ns


def published(layout: Layout) -> dict[str, Any] | None:
    """The service's publication as its JSON object; None when there is none.

    The object is shared between requests until the file changes: callers read it and build their
    replies from copies. The publisher replaces the library folder, so a new publication is a new
    file; a file rewritten in place is read again until it has settled."""
    global _kept
    path = layout.engine / "library" / "data.js"
    before = _identity(path)
    kept = _kept
    if kept is not None and before is not None and kept[:2] == (path, before):
        return kept[2]
    raw = http_base.read_regular(path)
    if raw is None:
        return None
    snapshot = _decoded(raw)
    if (
        before is not None
        and before == _identity(path)  # the bytes read are the ones this identity names
        and time.time_ns() - max(before[2], before[3]) > _SETTLED_NS
    ):
        _kept = (path, before, snapshot)
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
