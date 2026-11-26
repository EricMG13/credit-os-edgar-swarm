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


def test_rerun_keeps_claim_and_publication_evidence(inputs):
    run(inputs)
    plan_file = inputs["root"] / "swarm" / "plan.json"
    plan = json.loads(plan_file.read_text(encoding="utf-8"))
    plan["issuers"][0].update(status="running", claims=3, claimed_at="2026-11-18T12:00:00+00:00")
    plan["issuers"][1].update(
        status="published",
        attempts=4,
        attempts_by_module={"CP-0": 1, "CP-1": 1, "CP-1A": 1, "CP-2": 1},
        exit_code=0,
        finished_at="2026-11-18T12:01:00+00:00",
    )
    plan["issuers"][0]["pack"] = "/other/session/pack"
    plan_file.write_text(json.dumps(plan), encoding="utf-8")
    plan["issuers"][0]["pack"] = str(inputs["packs"] / "1000001-alpha-industrial-holdings-inc")
    again = run(inputs)
    assert again == plan


def test_a_changed_issuer_id_gets_a_new_run(inputs):
    plan = run(inputs)
    plan["issuers"][0].update(status="published", attempts=4, claims=1)
    plan_file = inputs["root"] / "swarm" / "plan.json"
    plan_file.write_text(json.dumps(plan), encoding="utf-8")
    context = inputs["contexts"] / "1000001-alpha-industrial-holdings-inc.json"
    record = json.loads(context.read_text(encoding="utf-8"))
    record["identity"]["issuer_id"] = "alpha"
    context.write_text(json.dumps(record), encoding="utf-8")

    fresh = run(inputs)["issuers"][0]

    assert fresh["issuer_id"] == "alpha"
    assert Path(fresh["run_folder"]).name == "swarm-alpha"
    assert fresh["status"] == "pending" and fresh["attempts"] == 0
    assert "claims" not in fresh


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


def layer1(inputs: dict[str, Path]) -> dict[str, Any]:
    return prepare.prepare(**inputs, set_name="layer1-dr")


def test_layer1_dr_plan_has_its_own_run_folder_for_every_issuer(inputs):
    entries = {i["cik"]: i for i in layer1(inputs)["issuers"]}

    runs = inputs["root"] / "_engine" / "runs"
    assert {c: i["modules"] for c, i in entries.items()} == dict.fromkeys(OK_IDS, "layer1-dr")
    assert entries["1000001"]["run_folder"] == str(runs / "swarm-alph-l1")
    assert entries["1000002"]["run_folder"] == str(runs / "swarm-beta-l1")
    assert entries["1000001"]["status"] == "pending"
    on_disk = inputs["root"] / "swarm" / "plan.json"
    assert json.loads(on_disk.read_text(encoding="utf-8"))["issuers"][0] == entries["1000001"]


def test_the_default_set_adds_no_modules_key(inputs):
    assert all("modules" not in i for i in run(inputs)["issuers"])


def test_layer1_dr_cli_flag_plans_the_set(inputs, capsys):
    assert prepare.main([*[f"--{k}={v}" for k, v in inputs.items()], "--set", "layer1-dr"]) == 0
    plan = json.loads((inputs["root"] / "swarm" / "plan.json").read_text(encoding="utf-8"))
    assert {i["modules"] for i in plan["issuers"]} == {"layer1-dr"}


@pytest.mark.parametrize("first", ["through-cp2", "layer1-dr"])
def test_a_plan_of_the_other_set_is_refused_and_left_unchanged(inputs, capsys, first):
    prepare.prepare(**inputs, set_name=first)
    path = inputs["root"] / "swarm" / "plan.json"
    before = path.read_bytes()
    other = "through-cp2" if first == "layer1-dr" else "layer1-dr"
    with pytest.raises(ValueError, match=first):
        prepare.prepare(**inputs, set_name=other)
    argv = [f"--{k}={v}" for k, v in inputs.items()]
    assert prepare.main([*argv, "--set", other]) == 2
    assert first in capsys.readouterr().err
    assert path.read_bytes() == before
