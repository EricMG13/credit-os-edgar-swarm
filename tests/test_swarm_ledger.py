"""tools/swarm ledger and run_issuer: claims, stale reclaim, done, fail, second pass, resume."""

import json
import sys
import threading
from datetime import UTC, datetime, timedelta
from pathlib import Path
from typing import Any

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools" / "swarm"))
import ledger
import run_issuer

T0 = datetime(2026, 11, 17, 9, 0, tzinfo=UTC)


def _plan(root: Path, count: int = 5) -> Path:
    path = root / "swarm" / "plan.json"
    path.parent.mkdir(parents=True)
    issuers = [
        {
            "issuer_id": f"co{i}",
            "name": f"Company {i}",
            "cik": str(1000 + i),
            "ticker": "",
            "pack": f"/packs/{1000 + i}",
            "context": f"/contexts/{1000 + i}.json",
            "run_folder": f"/runs/co{i}",
            "status": "pending",
            "attempts": 0,
        }
        for i in range(count)
    ]
    path.write_text(json.dumps({"schema": "swarm-plan/1", "issuers": issuers, "skipped": []}))
    return path


def _statuses(path: Path) -> dict[str, str]:
    return {i["issuer_id"]: i["status"] for i in json.loads(path.read_text())["issuers"]}


def test_claim_takes_first_pending_and_marks_running(tmp_path: Path) -> None:
    path = _plan(tmp_path)
    taken = ledger.claim(tmp_path, 2, clock=lambda: T0)
    assert [i["issuer_id"] for i in taken] == ["co0", "co1"]
    assert _statuses(path) == {
        "co0": "running",
        "co1": "running",
        "co2": "pending",
        "co3": "pending",
        "co4": "pending",
    }
    stored = json.loads(path.read_text())["issuers"][0]
    assert stored["claimed_at"] == "2026-11-17T09:00:00+00:00"
    assert ledger.claim(tmp_path, 10, clock=lambda: T0)[0]["issuer_id"] == "co2"
    assert ledger.status(tmp_path) == {
        "pending": 0,
        "running": 5,
        "published": 0,
        "failed": 0,
        "skipped": 0,
    }


def test_stale_claim_is_reclaimed_and_fresh_one_is_not(tmp_path: Path) -> None:
    path = _plan(tmp_path, 2)
    ledger.claim(tmp_path, 1, clock=lambda: T0)  # co0 at T0
    ledger.claim(tmp_path, 1, clock=lambda: T0 + timedelta(seconds=3000))  # co1
    later = T0 + timedelta(seconds=3700)  # co0 is 3700 s old, co1 700 s
    taken = ledger.claim(tmp_path, 5, stale_seconds=3600, clock=lambda: later)
    assert [i["issuer_id"] for i in taken] == ["co0"]
    assert _statuses(path) == {"co0": "running", "co1": "running"}
    stored = json.loads(path.read_text())["issuers"][0]
    assert stored["claims"] == 2
    assert stored["reclaimed"] == 1
    assert stored["claimed_at"] == "2026-11-17T10:01:40+00:00"


def test_running_entry_without_claim_time_is_reclaimed(tmp_path: Path) -> None:
    path = _plan(tmp_path, 1)
    plan = json.loads(path.read_text())
    plan["issuers"][0]["status"] = "running"  # As an older prepare run left it.
    path.write_text(json.dumps(plan))
    assert [i["issuer_id"] for i in ledger.claim(tmp_path, 1)] == ["co0"]


def test_done_records_attempts_exit_code_and_clears_claim(tmp_path: Path) -> None:
    path = _plan(tmp_path, 1)
    (claimed,) = ledger.claim(tmp_path, 1, clock=lambda: T0)
    ledger.done(
        tmp_path,
        "co0",
        {"CP-0": 1, "CP-1": 3, "CP-2": 2},
        claim=claimed["claims"],
        clock=lambda: T0,
    )
    stored = json.loads(path.read_text())["issuers"][0]
    assert stored["status"] == "published"
    assert stored["attempts_by_module"] == {"CP-0": 1, "CP-1": 3, "CP-2": 2}
    assert stored["attempts"] == 6
    assert stored["exit_code"] == 0
    assert "claimed_at" not in stored


def test_done_refuses_over_cap_and_unclaimed(tmp_path: Path) -> None:
    path = _plan(tmp_path, 2)
    with pytest.raises(ledger.LedgerError, match="not running"):
        ledger.done(tmp_path, "co0", {"CP-0": 1}, claim=1)
    (claimed,) = ledger.claim(tmp_path, 1)
    with pytest.raises(ledger.LedgerError, match="over the cap"):
        ledger.done(tmp_path, "co0", {"CP-1A": 4}, claim=claimed["claims"])
    with pytest.raises(ledger.LedgerError, match="at least 1"):
        ledger.done(tmp_path, "co0", {"CP-1A": 0}, claim=claimed["claims"])
    with pytest.raises(ledger.LedgerError, match="not in the plan"):
        ledger.done(tmp_path, "nope", {"CP-0": 1}, claim=claimed["claims"])
    assert _statuses(path)["co0"] == "running"


def test_done_refuses_empty_attempts_and_nonzero_exit(tmp_path: Path) -> None:
    _plan(tmp_path, 1)
    (claimed,) = ledger.claim(tmp_path, 1)
    with pytest.raises(ledger.LedgerError, match="at least one module"):
        ledger.done(tmp_path, "co0", {}, claim=claimed["claims"])
    with pytest.raises(ledger.LedgerError, match="exit code 0"):
        ledger.done(tmp_path, "co0", {"CP-0": 1}, claim=claimed["claims"], exit_code=3)
    assert _statuses(ledger.plan_path(tmp_path))["co0"] == "running"


def test_old_claim_cannot_finish_after_stale_claim_is_reclaimed(tmp_path: Path) -> None:
    path = _plan(tmp_path, 1)
    (old_claim,) = ledger.claim(tmp_path, 1, clock=lambda: T0)
    (new_claim,) = ledger.claim(
        tmp_path, 1, stale_seconds=1, clock=lambda: T0 + timedelta(seconds=2)
    )
    assert new_claim["claims"] == old_claim["claims"] + 1
    with pytest.raises(ledger.LedgerError, match="claim 1 was replaced"):
        ledger.done(tmp_path, "co0", {"CP-0": 1}, claim=old_claim["claims"])
    assert _statuses(path)["co0"] == "running"


def test_fail_keeps_reason_and_second_pass_claims_only_failed(tmp_path: Path) -> None:
    path = _plan(tmp_path, 3)
    claimed = ledger.claim(tmp_path, 3)
    ledger.fail(
        tmp_path,
        "co0",
        "CP-1A rejected 3 times",
        claim=claimed[0]["claims"],
        exit_code=1,
        attempts_by_module={"CP-1A": 4},
    )
    ledger.done(tmp_path, "co1", {"CP-0": 1}, claim=claimed[1]["claims"])
    ledger.skip(tmp_path, "co2", "no filings of interest", claim=claimed[2]["claims"])
    stored = json.loads(path.read_text())["issuers"][0]
    assert (stored["status"], stored["reason"], stored["exit_code"]) == (
        "failed",
        "CP-1A rejected 3 times",
        1,
    )
    assert ledger.claim(tmp_path, 5) == []  # The first pass leaves failed alone.
    second = ledger.claim(tmp_path, 5, failed=True)
    assert [i["issuer_id"] for i in second] == ["co0"]
    assert _statuses(path) == {"co0": "running", "co1": "published", "co2": "skipped"}


def test_fail_and_skip_need_a_reason(tmp_path: Path) -> None:
    _plan(tmp_path, 1)
    (claimed,) = ledger.claim(tmp_path, 1)
    with pytest.raises(ledger.LedgerError, match="reason"):
        ledger.fail(tmp_path, "co0", "  ", claim=claimed["claims"])
    with pytest.raises(ledger.LedgerError, match="reason"):
        ledger.skip(tmp_path, "co0", "", claim=claimed["claims"])


def test_resume_keeps_statuses_and_claims_what_is_left(tmp_path: Path) -> None:
    path = _plan(tmp_path, 4)
    claimed = ledger.claim(tmp_path, 2, clock=lambda: T0)
    ledger.done(tmp_path, "co0", {"CP-0": 1}, claim=claimed[0]["claims"], clock=lambda: T0)
    # The session stops here: co1 stays running. A new session claims after the stale limit.
    resumed = ledger.claim(tmp_path, 10, stale_seconds=60, clock=lambda: T0 + timedelta(hours=2))
    assert [i["issuer_id"] for i in resumed] == ["co1", "co2", "co3"]
    assert _statuses(path)["co0"] == "published"


def test_concurrent_claims_never_hand_out_an_issuer_twice(tmp_path: Path) -> None:
    path = _plan(tmp_path, 24)
    taken: list[str] = []
    errors: list[BaseException] = []

    def worker() -> None:
        try:
            for _ in range(3):
                taken.extend(i["issuer_id"] for i in ledger.claim(tmp_path, 1))
        except BaseException as error:  # noqa: BLE001 - re-raised below, in the main thread
            errors.append(error)

    threads = [threading.Thread(target=worker) for _ in range(8)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    assert errors == []
    assert sorted(taken) == sorted(f"co{i}" for i in range(24))
    assert set(_statuses(path).values()) == {"running"}
    assert not path.with_name("plan.json.lock").exists()
    assert [p.name for p in path.parent.iterdir()] == ["plan.json"]


def test_stale_lock_file_is_reported(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    path = _plan(tmp_path, 1)
    path.with_name("plan.json.lock").write_text("")
    monkeypatch.setattr(ledger, "LOCK_WAIT_SECONDS", 0.1)
    with pytest.raises(ledger.LedgerError, match="delete it"):
        ledger.claim(tmp_path, 1)


def test_cli_round_trip(tmp_path: Path, capsys: pytest.CaptureFixture[str]) -> None:
    _plan(tmp_path, 2)
    root = ["--root", str(tmp_path)]
    assert ledger.main([*root, "next", "--n", "1"]) == 0
    claimed = json.loads(capsys.readouterr().out)
    assert [c["issuer_id"] for c in claimed] == ["co0"]
    assert (
        ledger.main([*root, "done", "co0", "--claim", "1", "--attempts-by-module", '{"CP-0": 1}'])
        == 0
    )
    assert ledger.main([*root, "status"]) == 0
    assert json.loads(capsys.readouterr().out.splitlines()[-1])["published"] == 1
    assert ledger.main([*root, "done", "co1", "--claim", "1", "--attempts-by-module", "[1]"]) == 2
    assert ledger.main([*root, "fail", "co1", "--claim", "1", "--reason", "x"]) == 2  # Not running.


def test_missing_plan_is_refused(tmp_path: Path) -> None:
    with pytest.raises(ledger.LedgerError, match="prepare.py"):
        ledger.status(tmp_path)


def _entry(tmp_path: Path) -> dict[str, Any]:
    folder = tmp_path / "run"
    folder.mkdir()
    return {
        "issuer_id": "co0",
        "context": "/c/ctx.json",
        "pack": "/p/pack",
        "run_folder": str(folder),
    }


def test_command_is_the_host_through_cp2_launch(
    tmp_path: Path, capsys: pytest.CaptureFixture[str]
) -> None:
    _plan(tmp_path, 1)
    assert run_issuer.main(["co0", "--root", str(tmp_path)]) == 0
    assert capsys.readouterr().out.strip() == (
        "uv run python -m deploy_workflow.owners.cpos_launch --context /contexts/1000.json "
        "--sources /packs/1000 --config host --modules through-cp2 --prior none --no-library "
        "--out /runs/co0"
    )
    assert run_issuer.main(["nope", "--root", str(tmp_path)]) == 2


def test_verify_passes_only_on_exit_zero_and_no_new_file(tmp_path: Path) -> None:
    entry = _entry(tmp_path)
    folder = Path(entry["run_folder"])
    (folder / "delivery.md").write_text("x")

    def quiet(argv: Any, cwd: Path) -> int:
        return 0

    def writes(argv: Any, cwd: Path) -> int:
        (folder / "requests").mkdir(exist_ok=True)
        (folder / "requests" / "CP-1.request.md").write_text("q")
        return 0

    def stops(argv: Any, cwd: Path) -> int:
        return 3

    assert run_issuer.verify(entry, tmp_path, quiet) is None
    assert "exited 3" in str(run_issuer.verify(entry, tmp_path, stops))
    assert "1 new file" in str(run_issuer.verify(entry, tmp_path, writes))


def test_shard_keeps_one_contiguous_slice_and_skips_the_rest(tmp_path: Path) -> None:
    path = _plan(tmp_path, count=7)
    ledger.claim(tmp_path, 1, clock=lambda: T0)  # co0 running: outside shard 1, so skipped
    assert ledger.shard(tmp_path, 1, 3) == ["co3", "co4"]  # sizes 3, 2, 2
    assert _statuses(path) == {
        "co0": "skipped",
        "co1": "skipped",
        "co2": "skipped",
        "co3": "pending",
        "co4": "pending",
        "co5": "skipped",
        "co6": "skipped",
    }
    stored = json.loads(path.read_text())["issuers"]
    assert stored[0]["reason"] == "shard 0 of 3: run by another session"
    assert "claimed_at" not in stored[0]
    assert stored[5]["reason"] == "shard 2 of 3: run by another session"


def test_shards_cover_every_issuer_once(tmp_path: Path) -> None:
    kept: list[str] = []
    for k in range(4):
        root = tmp_path / str(k)
        _plan(root, count=10)
        kept += ledger.shard(root, k, 4)
    assert kept == [f"co{i}" for i in range(10)]


def test_shard_leaves_finished_issuers_and_refuses_a_bad_index(tmp_path: Path) -> None:
    path = _plan(tmp_path, count=4)
    taken = ledger.claim(tmp_path, 1, clock=lambda: T0)[0]
    ledger.done(tmp_path, "co0", {"CP-0": 1}, claim=taken["claims"], clock=lambda: T0)
    ledger.shard(tmp_path, 1, 2)
    assert _statuses(path)["co0"] == "published"
    with pytest.raises(ledger.LedgerError):
        ledger.shard(tmp_path, 2, 2)


THROUGH_CP2_ARGV = [
    *("uv", "run", "python", "-m", "deploy_workflow.owners.cpos_launch"),
    *("--context", "C", "--sources", "P", "--config", "host", "--modules", "through-cp2"),
    *("--prior", "none", "--no-library", "--out", "R"),
]  # Written out by hand: the answer key for an entry without `modules`.


def test_an_entry_without_modules_keeps_the_through_cp2_argv_byte_for_byte() -> None:
    assert run_issuer.command({"context": "C", "pack": "P", "run_folder": "R"}) == THROUGH_CP2_ARGV


def test_a_layer1_dr_entry_names_the_set_and_retains_only_when_it_has_a_source() -> None:
    entry = {"context": "C", "pack": "P", "run_folder": "R", "modules": "layer1-dr"}
    swapped = [("layer1-dr" if a == "through-cp2" else a) for a in THROUGH_CP2_ARGV]
    assert run_issuer.command(entry) == swapped
    assert run_issuer.command({**entry, "retain_from": "E"}) == [*swapped, "--retain-from", "E"]


def test_a_named_plan_is_read_and_claimed_apart_from_plan_json(
    tmp_path: Path, capsys: pytest.CaptureFixture[str]
) -> None:
    plan = _plan(tmp_path, 1)
    other = plan.with_name("plan-layer1-dr.json")
    other.write_text(plan.read_text().replace("/runs/co0", "/runs/co0-l1"))
    assert run_issuer.main(["co0", "--root", str(tmp_path), "--plan", other.name]) == 0
    assert capsys.readouterr().out.strip().endswith("--out /runs/co0-l1")
    assert ledger.main(["--root", str(tmp_path), "--plan", other.name, "next", "--n", "1"]) == 0
    assert _statuses(other) == {"co0": "running"} and _statuses(plan) == {"co0": "pending"}
    assert ledger.main(["--root", str(tmp_path), "--plan", other.name, "status"]) == 0
    assert json.loads(capsys.readouterr().out.splitlines()[-1])["running"] == 1
