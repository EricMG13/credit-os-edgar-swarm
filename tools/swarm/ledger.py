"""The swarm ledger: status updates on ``<root>/swarm/plan.json`` (written by ``prepare.py``).

    uv run python tools/swarm/ledger.py --root DIR next --n 10 [--failed] [--stale-seconds 3600]
    uv run python tools/swarm/ledger.py --root DIR done ISSUER_ID --claim N \
        --attempts-by-module '{"CP-0":1}'
    uv run python tools/swarm/ledger.py --root DIR fail ISSUER_ID --claim N --reason TEXT
    uv run python tools/swarm/ledger.py --root DIR skip ISSUER_ID --claim N --reason TEXT
    uv run python tools/swarm/ledger.py --root DIR status
    uv run python tools/swarm/ledger.py --root DIR shard --index K --of N

Statuses: ``pending`` (not started), ``running`` (claimed, with ``claimed_at``), ``published``
(launcher exit 0 and the relaunch check passed), ``failed`` (stopped or over the retry cap; kept
with its reason, claimed again only by ``next --failed``),
``skipped`` (set aside by
the controller).

The controller is the only writer; analysts never touch the ledger. Each change is read, edited
and written back under a lock file, and the file is replaced atomically, so a reader never sees a
part-written plan and two controller processes cannot lose each other's claims.

Retry rule: an analyst may resubmit a module at most ``MAX_RESUBMISSIONS`` times, so a module
whose launcher attempt count is above ``MAX_MODULE_ATTEMPTS`` cannot be recorded as done.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import time
from collections.abc import Callable, Iterator, Sequence
from contextlib import contextmanager
from datetime import UTC, datetime
from pathlib import Path
from typing import Any, cast

from deploy_workflow import platform_io

SCHEMA = "swarm-plan/1"
PLAN_RELATIVE = Path("swarm") / "plan.json"
STATUSES = ("pending", "running", "published", "failed", "skipped")
MAX_RESUBMISSIONS = 2
MAX_MODULE_ATTEMPTS = 1 + MAX_RESUBMISSIONS  # The first submission and the resubmissions.
DEFAULT_STALE_SECONDS = 3600
LOCK_WAIT_SECONDS = 10.0

Clock = Callable[[], datetime]


class LedgerError(Exception):
    """A request the ledger refuses; the message says what to change."""


def _utc_now() -> datetime:
    return datetime.now(UTC)


def plan_path(root: Path) -> Path:
    return root / PLAN_RELATIVE


@contextmanager
def _locked(path: Path) -> Iterator[None]:
    """Hold ``<plan>.lock`` (created exclusively) while the plan is read, edited and written."""
    lock = path.with_name(path.name + ".lock")
    deadline = time.monotonic() + LOCK_WAIT_SECONDS
    while True:
        try:
            os.close(os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY))
            break
        except FileExistsError:
            if time.monotonic() > deadline:
                raise LedgerError(
                    f"{lock} has been held for {LOCK_WAIT_SECONDS:.0f} s; if no ledger command "
                    "is running, delete it"
                ) from None
            time.sleep(0.02)
    try:
        yield
    finally:
        lock.unlink(missing_ok=True)


def _read(path: Path) -> dict[str, Any]:
    try:
        plan = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        raise LedgerError(f"{path} does not exist; run tools/swarm/prepare.py first") from None
    if not isinstance(plan, dict) or plan.get("schema") != SCHEMA:
        raise LedgerError(f"{path} is not a {SCHEMA} plan")
    return plan


def _write(path: Path, plan: dict[str, Any]) -> None:
    text = json.dumps(plan, ensure_ascii=False, indent=2) + "\n"
    platform_io.write_atomic(path, text, sync=True)


def _find(plan: dict[str, Any], issuer_id: str) -> dict[str, Any]:
    for issuer in plan["issuers"]:
        if issuer["issuer_id"] == issuer_id:
            return cast(dict[str, Any], issuer)
    raise LedgerError(f"issuer {issuer_id!r} is not in the plan")


def _stamp(now: datetime) -> str:
    return now.isoformat(timespec="seconds")


def _is_stale(issuer: dict[str, Any], now: datetime, stale_seconds: float) -> bool:
    claimed = issuer.get("claimed_at")
    if claimed is None:
        return True  # A running entry with no claim time cannot be shown to be alive.
    return (now - datetime.fromisoformat(claimed)).total_seconds() > stale_seconds


def claim(
    root: Path,
    n: int,
    *,
    failed: bool = False,
    stale_seconds: float = DEFAULT_STALE_SECONDS,
    clock: Clock = _utc_now,
) -> list[dict[str, Any]]:
    """Mark up to ``n`` issuers ``running`` and return them.

    Normally the ``pending`` ones; with ``failed`` (the explicit second pass) the ``failed``
    ones. ``running`` claims older than ``stale_seconds`` return to ``pending`` first (the
    session that held them stopped) and count in ``claims``.
    """
    if n < 1:
        raise LedgerError("--n must be at least 1")
    path = plan_path(root)
    with _locked(path):
        plan = _read(path)
        now = clock()
        for issuer in plan["issuers"]:
            if issuer["status"] == "running" and _is_stale(issuer, now, stale_seconds):
                issuer["status"] = "pending"
                issuer["reclaimed"] = issuer.get("reclaimed", 0) + 1
        wanted = "failed" if failed else "pending"
        taken = [i for i in plan["issuers"] if i["status"] == wanted][:n]
        for issuer in taken:
            issuer["status"] = "running"
            issuer["claimed_at"] = _stamp(now)
            issuer["claims"] = issuer.get("claims", 0) + 1
        _write(path, plan)
    return taken


def _finish(  # noqa: PLR0913 -- claim generation and clock are required finish invariants.
    root: Path,
    issuer_id: str,
    status: str,
    changes: dict[str, Any],
    claim: int,
    clock: Clock,
) -> dict[str, Any]:
    path = plan_path(root)
    with _locked(path):
        plan = _read(path)
        issuer = _find(plan, issuer_id)
        if issuer["status"] != "running":
            raise LedgerError(
                f"issuer {issuer_id!r} is {issuer['status']}, not running; claim it with `next`"
            )
        if issuer.get("claims") != claim:
            raise LedgerError(
                f"issuer {issuer_id!r} claim {claim} was replaced; current claim is "
                f"{issuer.get('claims')}"
            )
        issuer.update(changes)
        issuer["status"] = status
        issuer["finished_at"] = _stamp(clock())
        issuer.pop("claimed_at", None)
        _write(path, plan)
        return issuer


def done(  # noqa: PLR0913 -- run record and claim/exit evidence are separate inputs.
    root: Path,
    issuer_id: str,
    attempts_by_module: dict[str, int],
    *,
    claim: int,
    exit_code: int = 0,
    clock: Clock = _utc_now,
) -> dict[str, Any]:
    """Record the issuer ``published`` with the launcher attempts of each module."""
    if exit_code != 0:
        raise LedgerError(f"a published issuer must have launcher exit code 0, got {exit_code}")
    if not attempts_by_module:
        raise LedgerError("a published issuer needs at least one module attempt")
    for module, attempts in attempts_by_module.items():
        if attempts < 1:
            raise LedgerError(f"{module}: attempts must be at least 1, got {attempts}")
        if attempts > MAX_MODULE_ATTEMPTS:
            raise LedgerError(
                f"{module}: {attempts} attempts is over the cap of {MAX_RESUBMISSIONS} "
                f"resubmissions ({MAX_MODULE_ATTEMPTS} attempts); record it with `fail`"
            )
    return _finish(
        root,
        issuer_id,
        "published",
        {
            "attempts_by_module": attempts_by_module,
            "attempts": sum(attempts_by_module.values()),
            "exit_code": exit_code,
            "reason": None,
        },
        claim,
        clock,
    )


def fail(  # noqa: PLR0913 -- failure record keeps claim and execution evidence explicit.
    root: Path,
    issuer_id: str,
    reason: str,
    *,
    claim: int,
    attempts_by_module: dict[str, int] | None = None,
    exit_code: int | None = None,
) -> dict[str, Any]:
    """Record the issuer ``failed`` with its reason."""
    if not reason.strip():
        raise LedgerError("a failure needs a reason")
    changes: dict[str, Any] = {"reason": reason, "exit_code": exit_code}
    if attempts_by_module is not None:
        changes["attempts_by_module"] = attempts_by_module
        changes["attempts"] = sum(attempts_by_module.values())
    return _finish(root, issuer_id, "failed", changes, claim, _utc_now)


def skip(
    root: Path, issuer_id: str, reason: str, *, claim: int, clock: Clock = _utc_now
) -> dict[str, Any]:
    """Record the issuer ``skipped`` with its reason."""
    if not reason.strip():
        raise LedgerError("a skip needs a reason")
    return _finish(root, issuer_id, "skipped", {"reason": reason}, claim, clock)


def shard(root: Path, index: int, of: int) -> list[str]:
    """Keep shard ``index`` of ``of`` (a contiguous slice in plan order) and return its ids.

    Every ``pending`` or ``running`` issuer outside the slice becomes ``skipped`` with a reason
    naming the shard that keeps it, so sessions sharing one plan's ids never run the same issuer.
    Issuers inside the slice and finished issuers are left as they are.
    """
    if of < 1 or not 0 <= index < of:
        raise LedgerError(f"--index must be from 0 to {of - 1} and --of at least 1")
    path = plan_path(root)
    with _locked(path):
        plan = _read(path)
        issuers = plan["issuers"]
        base, extra = divmod(len(issuers), of)
        starts = [k * base + min(k, extra) for k in range(of + 1)]
        for k in range(of):
            for issuer in issuers[starts[k] : starts[k + 1]]:
                if k != index and issuer["status"] in ("pending", "running"):
                    issuer["status"] = "skipped"
                    issuer["reason"] = f"shard {k} of {of}: run by another session"
                    issuer.pop("claimed_at", None)
        _write(path, plan)
    return [i["issuer_id"] for i in issuers[starts[index] : starts[index + 1]]]


def status(root: Path) -> dict[str, int]:
    """The number of issuers in each status (every status listed, zero included)."""
    plan = _read(plan_path(root))
    counts = dict.fromkeys(STATUSES, 0)
    for issuer in plan["issuers"]:
        counts[issuer["status"]] += 1
    return counts


def _attempts_arg(text: str) -> dict[str, int]:
    try:
        value = json.loads(text)
    except json.JSONDecodeError as error:
        raise LedgerError(f"--attempts-by-module is not JSON: {error}") from None
    if not isinstance(value, dict) or not all(
        isinstance(k, str) and isinstance(v, int) and not isinstance(v, bool)
        for k, v in value.items()
    ):
        raise LedgerError('--attempts-by-module must be an object such as {"CP-0": 1, "CP-2": 2}')
    return value


def _parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--root", type=Path, required=True)
    sub = parser.add_subparsers(dest="command", required=True)
    nxt = sub.add_parser("next", help="claim pending issuers")
    nxt.add_argument("--n", type=int, required=True)
    nxt.add_argument("--failed", action="store_true", help="second pass: claim failed issuers")
    nxt.add_argument("--stale-seconds", type=float, default=DEFAULT_STALE_SECONDS)
    finish = sub.add_parser("done", help="record a published issuer")
    finish.add_argument("issuer_id")
    finish.add_argument("--claim", type=int, required=True)
    finish.add_argument("--attempts-by-module", required=True)
    finish.add_argument("--exit-code", type=int, default=0)
    bad = sub.add_parser("fail", help="record a failed issuer")
    bad.add_argument("issuer_id")
    bad.add_argument("--claim", type=int, required=True)
    bad.add_argument("--reason", required=True)
    bad.add_argument("--attempts-by-module")
    bad.add_argument("--exit-code", type=int)
    skp = sub.add_parser("skip", help="set an issuer aside")
    skp.add_argument("issuer_id")
    skp.add_argument("--claim", type=int, required=True)
    skp.add_argument("--reason", required=True)
    sub.add_parser("status", help="count issuers by status")
    part = sub.add_parser("shard", help="keep one contiguous shard; skip the rest")
    part.add_argument("--index", type=int, required=True)
    part.add_argument("--of", type=int, required=True)
    return parser


def main(argv: Sequence[str] | None = None) -> int:
    args = _parser().parse_args(argv)
    try:
        if args.command == "next":
            taken = claim(args.root, args.n, failed=args.failed, stale_seconds=args.stale_seconds)
            keys = ("issuer_id", "name", "run_folder", "status", "claims")
            print(json.dumps([{k: i[k] for k in keys} for i in taken], indent=2))
        elif args.command == "done":
            done(
                args.root,
                args.issuer_id,
                _attempts_arg(args.attempts_by_module),
                claim=args.claim,
                exit_code=args.exit_code,
            )
            print(f"{args.issuer_id}: published")
        elif args.command == "fail":
            by_module = _attempts_arg(args.attempts_by_module) if args.attempts_by_module else None
            fail(
                args.root,
                args.issuer_id,
                args.reason,
                claim=args.claim,
                attempts_by_module=by_module,
                exit_code=args.exit_code,
            )
            print(f"{args.issuer_id}: failed")
        elif args.command == "skip":
            skip(args.root, args.issuer_id, args.reason, claim=args.claim)
            print(f"{args.issuer_id}: skipped")
        elif args.command == "shard":
            kept = shard(args.root, args.index, args.of)
            print(json.dumps({"kept": kept, "status": status(args.root)}, indent=2))
        else:
            print(json.dumps(status(args.root)))
    except (LedgerError, OSError) as error:
        print(f"ledger: {error}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
