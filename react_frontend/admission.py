"""Apply scheduler admission to every connected view of a native publication."""

from __future__ import annotations

from typing import Any

from deploy_workflow.inbox import runs
from deploy_workflow.inbox.layout import Layout


def admitted(snapshot: dict[str, Any], layout: Layout) -> dict[str, Any]:
    """Retain historical publications; hide managed runs until scheduler acceptance.

    Delivery writes the library before the scheduler decides the run's final status.
    A publication alone therefore cannot establish completion for a managed run.
    Historical library folders without a scheduler record retain native admission.
    """
    unfinished = {record.id for record in runs.load_all(layout) if record.status != "finished"}
    workspace = snapshot["workspace"]
    published = {
        key: run for key, run in workspace["runs"].items() if run["folder"] not in unfinished
    }
    if not unfinished:
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
            "real": [run for run in snapshot["catalogue"]["real"] if run["id"] not in unfinished],
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
                if model.get("runId") not in unfinished and model.get("runFolder") not in unfinished
            ],
        },
        "chips": {
            key: value
            for key, value in snapshot["chips"].items()
            if key.rpartition(":")[0] in outputs
        },
    }
