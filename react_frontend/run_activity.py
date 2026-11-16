"""Project RBOT-HTML's run records and recorded milestones for the React activity pages."""

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
from deploy_workflow.model.budget import BudgetError, exact_sum, read_reservation_snapshot
from deploy_workflow.model.pricing import money_text
from deploy_workflow.owners.cpos_launch import METHODS
from deploy_workflow.run_events import EVENTS, read_events

_MODULE_EVENTS = frozenset({"module_started", "module_accepted", "draft_rejected"})
_RUN_EVENTS = frozenset(
    {"delivery_started", "delivered", "stopped", "changes_not_produced", "model_not_published"}
)
_FEED_LIMIT = 80
_PUBLISHED = "window.RUN_ACTIVITY="  # how deploy_workflow.inbox.activity.write opens the file
_EXECUTIONS = frozenset({"host-session", "retained-response-replay", "synthetic", "live-provider"})


def _usage(directory: Path) -> dict[str, str | None]:
    """Break cap usage into settled charges and unresolved holds from the same journal."""
    live = directory / "live"
    try:
        if not live.exists() and not live.is_symlink():
            settled = held = Decimal(0)
        else:
            if not live.is_dir():
                raise BudgetError("live is not a folder")
            rows = read_reservation_snapshot(live)
            settled = exact_sum(
                row.settled_usd
                for row in rows
                if row.status in ("settled", "overrun") and row.settled_usd is not None
            )
            held = exact_sum(row.usd for row in rows if row.status in ("unknown", None))
        return {
            "spent": money_text(exact_sum((settled, held))),
            "settled_spent": money_text(settled),
            "held": money_text(held),
        }
    except (BudgetError, OSError, RecursionError):
        return {"spent": None, "settled_spent": None, "held": None}


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


def _held(layout: Layout) -> str:
    """Why the scheduler holds the queue or the ended runs, from the activity file it writes."""
    try:
        text = (layout.engine / "activity.js").read_text(encoding="utf-8")
        if not text.startswith(_PUBLISHED):
            return ""
        held = json.JSONDecoder().raw_decode(text, len(_PUBLISHED))[0]["held"]
    except (OSError, ValueError, LookupError, TypeError):
        # Documented fail-open (display only): with no readable file (none is written before the
        # first poll) the note is left out; the runs themselves are read from their records.
        return ""
    return held if isinstance(held, str) else ""


def listing(layout: Layout, cap: Decimal) -> http_base.Reply:
    """The runs that are running or waiting. Spend, folders and file names are not sent."""
    records = [item for item in runs.load_all(layout) if item.status in ("running", "queued")]
    snapshot = activity.snapshot(
        layout, records, cap=cap, now=datetime.now(UTC), held=_held(layout)
    )
    root = layout.runs.resolve()
    return http_base.Reply(
        200,
        {
            "updated": snapshot["updated"],
            "held": snapshot["held"],
            "runs": [
                {
                    "id": shown["id"],
                    "issuer_name": shown["issuer_name"],
                    "pathway": shown["pathway"],
                    "status": shown["status"],
                    "reason": shown["reason"],
                    "submitted_by": shown["submitted_by"],
                    "started_at": shown["started_at"],
                    "name_differs": shown["name_differs"],
                    "stalled": shown.get("stalled", False),
                    "files": len(shown["files"]),
                    "modules": _planned(
                        _manifest(root / shown["id"]),
                        shown.get("modules", activity.module_states(shown["pathway"], [])),
                    ),
                }
                for shown in snapshot["runs"]
            ],
        },
        {"Cache-Control": "no-store"},
    )


def reply(layout: Layout, run_id: str, cap: Decimal) -> http_base.Reply:
    record = next((item for item in runs.load_all(layout) if item.id == run_id), None)
    if record is None:
        raise http_base.refuse(404, "unknown run")
    directory = layout.runs.resolve() / run_id
    if directory.resolve() != directory or (directory / EVENTS).is_symlink():
        raise http_base.refuse(404, "run activity is unavailable")
    snapshot = activity.snapshot(layout, [record], cap=cap, now=datetime.now(UTC))
    [shown] = snapshot["runs"]
    usage = _usage(directory)
    states = shown.get("modules", activity.module_states(record.pathway, []))
    manifest = _manifest(directory)
    modules = _planned(manifest, states)
    execution = manifest.get("execution")
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
            "execution": execution
            if isinstance(execution, str) and execution in _EXECUTIONS
            else None,
            "cap": _cap(manifest, cap),
            **usage,
            "stalled": shown.get("stalled", False),
            "modules": modules,
            "events": _feed(directory, {code for code, _ in modules}),
        },
        {"Cache-Control": "no-store"},
    )
