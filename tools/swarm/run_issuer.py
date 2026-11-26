"""The CP-OS host-mode launcher command for one planned issuer, and the relaunch check.

    uv run python tools/swarm/run_issuer.py ISSUER_ID --root DIR           # prints the command
    uv run python tools/swarm/run_issuer.py ISSUER_ID --root DIR verify    # reruns it, checks

The command is printed, not run: the analyst runs it from the repository root, answers at the
``Answer:`` path when it exits 3, and reruns the same command until it exits 0 or 1.

``verify`` reruns that command and succeeds (exit 0) only if the launcher exits 0 and writes no
new file in the run folder: a finished run has nothing left to write.
"""

from __future__ import annotations

import argparse
import json
import shlex
import subprocess
import sys
from collections.abc import Callable, Sequence
from pathlib import Path
from typing import Any, cast

SCHEMA = "swarm-plan/1"
PLAN_RELATIVE = Path("swarm") / "plan.json"
LAUNCHER = ("uv", "run", "python", "-m", "deploy_workflow.owners.cpos_launch")
REPO = Path(__file__).resolve().parents[2]
Runner = Callable[[Sequence[str], Path], int]


def load_issuer(root: Path, issuer_id: str) -> dict[str, Any]:
    path = root / PLAN_RELATIVE
    plan = json.loads(path.read_text(encoding="utf-8"))
    if plan.get("schema") != SCHEMA:
        raise ValueError(f"{path} is not a {SCHEMA} plan")
    for issuer in plan["issuers"]:
        if issuer["issuer_id"] == issuer_id:
            return cast(dict[str, Any], issuer)
    raise ValueError(f"issuer {issuer_id!r} is not in {path}")


def command(issuer: dict[str, Any]) -> list[str]:
    """The launcher argument vector for one plan entry: `through-cp2` unless it names a set."""
    return [
        *LAUNCHER,
        "--context",
        issuer["context"],
        "--sources",
        issuer["pack"],
        "--config",
        "host",
        "--modules",
        issuer.get("modules", "through-cp2"),
        "--prior",
        "none",
        "--no-library",
        "--out",
        issuer["run_folder"],
    ]


def _files(folder: Path) -> set[str]:
    return {str(p.relative_to(folder)) for p in folder.rglob("*") if p.is_file()}


def _run(argv: Sequence[str], cwd: Path) -> int:
    return subprocess.run(argv, cwd=cwd, check=False).returncode


def verify(issuer: dict[str, Any], repo: Path = REPO, runner: Runner = _run) -> str | None:
    """Rerun the launcher; None when it exited 0 and wrote no new file, else the reason."""
    folder = Path(issuer["run_folder"])
    before = _files(folder) if folder.is_dir() else set()
    code = runner(command(issuer), repo)
    if code != 0:
        return f"relaunch exited {code}, not 0"
    new = sorted((_files(folder) if folder.is_dir() else set()) - before)
    if new:
        return f"relaunch wrote {len(new)} new file(s), first {new[0]}"
    return None


def main(argv: Sequence[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("issuer_id")
    parser.add_argument("action", nargs="?", choices=("verify",))
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--repo", type=Path, default=REPO, help="the repository root to run in")
    args = parser.parse_args(argv)
    try:
        issuer = load_issuer(args.root, args.issuer_id)
    except (ValueError, OSError) as error:
        print(f"run_issuer: {error}", file=sys.stderr)
        return 2
    if args.action is None:
        print(shlex.join(command(issuer)))
        return 0
    reason = verify(issuer, args.repo)
    if reason is not None:
        print(f"verify {args.issuer_id}: FAILED, {reason}", file=sys.stderr)
        return 1
    print(f"verify {args.issuer_id}: ok")
    return 0


if __name__ == "__main__":
    sys.exit(main())
