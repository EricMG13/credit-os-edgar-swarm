"""tools/swarm/prepare.py: registration, idempotence, skip reasons, resume (invented fixtures)."""

import json
import shutil
import sys
import tempfile
from collections.abc import Iterator
from pathlib import Path
from typing import Any

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools" / "swarm"))
import prepare

FIXTURES = Path(__file__).parent / "fixtures" / "swarm"
# Written out by hand from the fixture files; independent of prepare.py.
OK_IDS = {"1000001": "alph", "1000002": "beta"}
SKIP_WORDS = {
    "1000003": "no pack folder",
    "1000004": "invalid context",
    "1000005": "no context file",
    "1000006": "41 characters",
}


@pytest.fixture
def inputs(tmp_path: Path) -> Iterator[dict[str, Path]]:
    shutil.copytree(FIXTURES, tmp_path / "in")
    # The app's root may be at most 80 characters (inbox.layout.MAX_ROOT); pytest's is longer.
    with tempfile.TemporaryDirectory(prefix="sw", dir="/tmp") as short:
        yield {
            "approved": tmp_path / "in" / "approved-list.md",
            "packs": tmp_path / "in" / "packs",
            "contexts": tmp_path / "in" / "contexts",
            "root": Path(short).resolve(),
        }


def run(inputs: dict[str, Path]) -> dict[str, Any]:
    return prepare.prepare(**inputs)


def registry(root: Path) -> dict[str, str]:
    return json.loads((root / "_engine" / "state" / "issuers.json").read_text(encoding="utf-8"))


def test_valid_issuers_are_registered_and_planned(inputs):
    plan = run(inputs)
    assert {i["cik"]: i["issuer_id"] for i in plan["issuers"]} == OK_IDS
    assert set(registry(inputs["root"])) == set(OK_IDS.values())
    for item in plan["issuers"]:
        assert item["status"] == "pending"
        assert Path(item["pack"]).is_dir() and Path(item["context"]).is_file()
        # Hand-written: the library lists run folders under <root>/_engine/runs.
        wanted = inputs["root"] / "_engine" / "runs" / f"swarm-{item['issuer_id']}"
        assert Path(item["run_folder"]) == wanted.resolve()
    on_disk = json.loads((inputs["root"] / "swarm" / "plan.json").read_text(encoding="utf-8"))
    assert on_disk == plan


def test_every_refused_row_is_listed_with_its_reason(inputs):
    plan = run(inputs)
    reasons = {s["cik"]: s["reason"] for s in plan["skipped"]}
    assert set(reasons) == set(SKIP_WORDS)
    for cik, words in SKIP_WORDS.items():
        assert words in reasons[cik]
    assert len(registry(inputs["root"])) == len(OK_IDS)


def test_pack_with_only_underscore_files_is_refused(inputs):
    (inputs["packs"] / "1000002-beta-foods-corp" / "annual-10-k.txt").unlink()
    plan = run(inputs)
    assert "holds no filing files" in {s["cik"]: s["reason"] for s in plan["skipped"]}["1000002"]
    assert [i["cik"] for i in plan["issuers"]] == ["1000001"]


def test_rerun_changes_nothing(inputs):
    run(inputs)
    plan_file = inputs["root"] / "swarm" / "plan.json"
    registry_file = inputs["root"] / "_engine" / "state" / "issuers.json"
    before = (plan_file.read_bytes(), registry_file.read_bytes())
    mtimes = (plan_file.stat().st_mtime_ns, registry_file.stat().st_mtime_ns)
    run(inputs)
    assert (plan_file.read_bytes(), registry_file.read_bytes()) == before
    assert (plan_file.stat().st_mtime_ns, registry_file.stat().st_mtime_ns) == mtimes


def test_rerun_keeps_status_and_attempts(inputs):
    run(inputs)
    plan_file = inputs["root"] / "swarm" / "plan.json"
    plan = json.loads(plan_file.read_text(encoding="utf-8"))
    plan["issuers"][0].update(status="failed", attempts=2)
    plan["issuers"][1].update(status="done", attempts=1)
    plan_file.write_text(json.dumps(plan), encoding="utf-8")
    again = run(inputs)
    assert [(i["status"], i["attempts"]) for i in again["issuers"]] == [("failed", 2), ("done", 1)]


def test_cli_prints_counts_and_skips(inputs, capsys):
    argv = [f"--{k}={v}" for k, v in inputs.items()]
    assert prepare.main(argv) == 0
    out = capsys.readouterr().out
    assert out.splitlines()[0] == "registered 2, pending 2, skipped 4"
    assert "skipped CIK 1000003" in out


def test_a_plan_of_another_schema_is_refused(inputs, capsys):
    (inputs["root"] / "swarm").mkdir(parents=True)
    (inputs["root"] / "swarm" / "plan.json").write_text('{"schema": "other"}', encoding="utf-8")
    assert prepare.main([f"--{k}={v}" for k, v in inputs.items()]) == 2
    assert "not a swarm-plan/1 plan" in capsys.readouterr().err


def test_table_without_issuer_and_cik_columns_is_refused(tmp_path):
    with pytest.raises(ValueError, match="no table"):
        prepare.parse_approved("| a | b |\n| - | - |\n| 1 | 2 |\n")


def test_optional_rating_column_is_read_by_name():
    rows = prepare.parse_approved(
        "| # | Issuer | Ticker | CIK | Rating |\n| --- | --- | --- | --- | --- |\n"
        "| 1 | X Corp | XC | 0000042 | BB |\n"
    )
    assert rows == [
        {"#": "1", "Issuer": "X Corp", "Ticker": "XC", "CIK": "0000042", "Rating": "BB"}
    ]
