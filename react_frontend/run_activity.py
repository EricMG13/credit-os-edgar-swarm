"""Project RBOT-HTML's run record and recorded milestones for the React activity page."""

from __future__ import annotations

import json
from datetime import UTC, datetime
from decimal import Decimal, InvalidOperation
from pathlib import Path
from typing import Any

from deploy_workflow import http_base
from deploy_workflow.inbox import activity, runs
from deploy_workflow.inbox.layout import Layout
from deploy_workflow.library_index import Refused, read_inside
from deploy_workflow.owners.cpos_launch import METHODS
from deploy_workflow.run_events import EVENTS, read_events

_MODULE_EVENTS = frozenset({"module_started", "module_accepted", "draft_rejected"})
_RUN_EVENTS = frozenset(
    {"delivery_started", "delivered", "stopped", "changes_not_produced", "model_not_published"}
)
_FEED_LIMIT = 80


def _milestone(raw: dict[str, Any], modules: set[str]) -> dict[str, str] | None:
    name, at = raw.get("event"), raw.get("at")
    if not isinstance(name, str) or not isinstance(at, str):
        return None
    try:
        datetime.strptime(at, "%Y-%m-%dT%H:%M:%SZ")
    except ValueError:
        return None
    if name in _RUN_EVENTS:
        return {"kind": name, "at": at}
    module = raw.get("module")
    if name in _MODULE_EVENTS and isinstance(module, str) and module in modules:
        return {"kind": name, "at": at, "module": module}
    return None


def _feed(directory: Path, modules: set[str]) -> list[dict[str, str]] | None:
    try:
        events = read_events(directory / EVENTS)
    except FileNotFoundError:
        return []
    except (OSError, ValueError):
        return None
    milestones = [
        item
        for raw in events
        if isinstance(raw, dict) and (item := _milestone(raw, modules)) is not None
    ]
    return milestones[-_FEED_LIMIT:]


def _manifest(directory: Path) -> dict[str, Any]:
    try:
        manifest = json.loads(read_inside(directory, "workflow.json"))
    except (Refused, OSError, ValueError, RecursionError):
        return {}
    return manifest if isinstance(manifest, dict) else {}


def _planned(manifest: dict[str, Any], fallback: list[list[str]]) -> list[list[str]]:
    instructions = manifest.get("instructions")
    if not isinstance(instructions, dict):
        return fallback
    codes = [code for code in instructions if code in METHODS]
    if not codes:
        return fallback
    states = dict(fallback)
    return [[code, states.get(code, "waiting")] for code in (*codes, "Report")]


def _cap(manifest: dict[str, Any], configured: Decimal) -> str:
    amount = manifest.get("provider_cap_usd")
    if isinstance(amount, str):
        try:
            pinned = Decimal(amount)
            if pinned.is_finite() and pinned >= 0:
                return str(pinned)
        except InvalidOperation:
            pass
    return str(configured)


def reply(layout: Layout, run_id: str, cap: Decimal) -> http_base.Reply:
    record = next((item for item in runs.load_all(layout) if item.id == run_id), None)
    if record is None:
        raise http_base.refuse(404, "unknown run")
    directory = layout.runs.resolve() / run_id
    if directory.resolve() != directory or (directory / EVENTS).is_symlink():
        raise http_base.refuse(404, "run activity is unavailable")
    snapshot = activity.snapshot(layout, [record], cap=cap, now=datetime.now(UTC))
    [shown] = snapshot["runs"]
    states = shown.get("modules", activity.module_states(record.pathway, []))
    manifest = _manifest(directory)
    modules = _planned(manifest, states)
    return http_base.Reply(
        200,
        {
            "id": record.id,
            "issuer_name": record.issuer_name,
            "as_of": record.as_of,
            "pathway": record.pathway,
            "status": record.status,
            "reason": record.reason,
            "claimed_at": record.claimed_at,
            "started_at": record.started_at,
            "ended_at": record.ended_at,
            "submitted_by": record.submitted_by,
            "observed_at": snapshot["updated"],
            "cap": _cap(manifest, cap),
            "spent": shown.get("spent"),
            "stalled": shown.get("stalled", False),
            "modules": modules,
            "events": _feed(directory, {code for code, _ in modules}),
        },
        {"Cache-Control": "no-store"},
    )
