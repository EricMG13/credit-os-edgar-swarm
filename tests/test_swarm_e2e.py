"""The swarm path end to end, offline: prepare, claim, the real host launcher, verify, ledger,
library. No model is called and nothing is stubbed: the launcher, its checker and the library build
all run for real in subprocesses.

The canned answers are TEST FIXTURES: the shared answer builder of ``test_cpos_launch`` writes a
format-valid handoff over invented issuers so the real checker can accept it. They are not analysis
and say nothing about any issuer. Expected values below are written by hand.
"""

import json
import shlex
import shutil
import subprocess
import tempfile
from pathlib import Path

from test_cpos_launch import AS_OF, ISSUER
from test_cpos_launch_host import THROUGH_CP2, answer_for, asked_of

from deploy_workflow.library_index import build_library
from deploy_workflow.owners import cpos_launch

REPO = Path(__file__).resolve().parents[1]
FIXTURES = REPO / "tests/fixtures/swarm"
SWARM = REPO / "tools/swarm"
ANSWER_NEEDED = 3
# Hand-written: the two fixture issuers used, by CIK, with the ID their context carries.
ALPHA = ("1000001", "alph", "Alpha Industrial Holdings")
BETA = ("1000002", "beta", "Beta Foods")


def uv(*argv: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["uv", "run", "python", *argv], cwd=REPO, capture_output=True, text=True, check=False
    )


def two_issuer_root() -> Path:
    """Copy two valid fixture issuers under a short root and run prepare on them."""
    root = Path(tempfile.mkdtemp(prefix="swm", dir="/tmp"))
    for sub, keep in (("packs", ("1000001", "1000002")), ("contexts", ("1000001", "1000002"))):
        (root / "in" / sub).mkdir(parents=True)
        for entry in (FIXTURES / sub).iterdir():
            if entry.name.startswith(keep):
                target = root / "in" / sub / entry.name
                shutil.copytree(entry, target) if entry.is_dir() else shutil.copy(entry, target)
    approved = root / "in/approved.md"
    rows = [
        line
        for line in (FIXTURES / "approved-list.md").read_text().splitlines()
        if not line.startswith("| ") or "1000001" in line or "1000002" in line or "Issuer" in line
    ]
    approved.write_text("\n".join(rows) + "\n")
    done = uv(
        str(SWARM / "prepare.py"),
        *("--approved", str(approved), "--packs", str(root / "in/packs")),
        *("--contexts", str(root / "in/contexts"), "--root", str(root)),
    )
    assert done.returncode == 0, done.stderr
    assert done.stdout.splitlines()[0] == "registered 2, pending 2, skipped 0"
    return root


def ledger(root: Path, *argv: str) -> subprocess.CompletedProcess[str]:
    return uv(str(SWARM / "ledger.py"), "--root", str(root), *argv)


def plan_of(root: Path, plan_name: str = "plan.json") -> dict[str, dict]:
    plan = json.loads((root / "swarm" / plan_name).read_text())
    return {i["issuer_id"]: i for i in plan["issuers"]}


def launcher(
    root: Path, issuer_id: str, plan_name: str = "plan.json"
) -> subprocess.CompletedProcess[str]:
    """Run the command ``run_issuer.py`` prints for the issuer, exactly as an analyst would."""
    printed = uv(str(SWARM / "run_issuer.py"), issuer_id, "--root", str(root), "--plan", plan_name)
    assert printed.returncode == 0, printed.stderr
    argv = shlex.split(printed.stdout)
    return subprocess.run(argv, cwd=REPO, capture_output=True, text=True, check=False)


def routes_for(issuer: dict, scratch: Path, modules: str = "through-cp2") -> list:
    return list(
        cpos_launch.prepare(
            Path(issuer["context"]),
            Path(issuer["pack"]),
            scratch,
            config="host",
            cap=0,
            modules=(modules,),
        ).plan.layout.routes
    )


def drive(
    root: Path, issuer_id: str, reject: dict[str, int], plan_name: str = "plan.json"
) -> tuple[int, dict[str, int]]:
    """Answer the launcher until it exits 0 or 1; ``reject[module]`` junk answers go first.

    Returns the final exit code and the launcher attempts each module took.
    """
    issuer = plan_of(root, plan_name)[issuer_id]
    routes = routes_for(
        issuer, root / f"preview-{issuer_id}-{plan_name}", issuer.get("modules", "through-cp2")
    )
    attempts: dict[str, int] = {}
    while True:
        run = launcher(root, issuer_id, plan_name)
        if run.returncode != ANSWER_NEEDED:
            return run.returncode, attempts
        asked, answer_path = asked_of(run.stdout)
        module = asked["module_id"]
        attempts[module] = asked["attempt"]
        if asked["attempt"] <= reject.get(module, 0):
            answer_path.write_text("## Request\n\nCanned junk: not a handoff.")  # Test fixture.
        else:
            answer_path.write_text(
                canned_answer(asked, routes, issuer)
            )  # Test fixture, not analysis.


def canned_answer(asked: dict, routes: list, issuer: dict) -> str:
    """``test_cpos_launch.answer`` names its own invented issuer and date in the Request section;
    the real checker wants this issuer's name and the context's as-of date there, so swap them."""
    text = answer_for(asked, routes)
    own = json.loads(Path(issuer["context"]).read_text())
    old = f"{ISSUER} as of {AS_OF}."
    assert old in text
    return text.replace(old, f"{issuer['name']} as of {own['run']['as_of']}.")


def files_under(folder: Path) -> set[str]:
    return {str(p.relative_to(folder)) for p in folder.rglob("*") if p.is_file()}


def test_two_issuers_run_through_cp2_verify_publish_and_list_in_the_library():
    root = two_issuer_root()
    try:
        claimed = ledger(root, "next", "--n", "2")
        assert claimed.returncode == 0, claimed.stderr
        claims = {i["issuer_id"]: i["claims"] for i in json.loads(claimed.stdout)}
        assert list(claims) == ["alph", "beta"]
        for issuer_id in ("alph", "beta"):
            code, attempts = drive(root, issuer_id, reject={})
            assert code == 0
            assert attempts == dict.fromkeys(THROUGH_CP2, 1)  # Written by hand: 4 modules, once.
            before = files_under(Path(plan_of(root)[issuer_id]["run_folder"]))
            check = uv(str(SWARM / "run_issuer.py"), issuer_id, "--root", str(root), "verify")
            assert check.returncode == 0, check.stderr
            assert files_under(Path(plan_of(root)[issuer_id]["run_folder"])) == before
            done = ledger(
                root,
                "done",
                issuer_id,
                "--claim",
                str(claims[issuer_id]),
                "--attempts-by-module",
                json.dumps(attempts),
            )
            assert done.returncode == 0, done.stderr
        final = plan_of(root)
        assert {k: v["status"] for k, v in final.items()} == {
            "alph": "published",
            "beta": "published",
        }
        assert final["alph"]["attempts_by_module"] == {"CP-0": 1, "CP-1": 1, "CP-1A": 1, "CP-2": 1}
        assert final["alph"]["attempts"] == 4
        assert json.loads(ledger(root, "status").stdout) == {
            "pending": 0,
            "running": 0,
            "published": 2,
            "failed": 0,
            "skipped": 0,
        }

        built = uv(
            str(REPO / "apps/issuer-library/update_library.py"),
            "--workspace",
            str(root / "_engine"),
        )
        assert built.returncode == 0, built.stderr
        data = (root / "_engine/library/data.js").read_text()
        for _, issuer_id, name in (ALPHA, BETA):
            assert f'"{issuer_id}"' in data and name in data
        assert "No runs yet" not in data
        library = build_library(root / "_engine", root / "_engine/library")
        assert sorted(r["issuer_id"] for r in library.runs) == ["alph", "beta"]
        assert library.planned == []  # Published runs replace the planned entries.
    finally:
        shutil.rmtree(root, ignore_errors=True)


def test_resubmissions_within_the_cap_publish_and_beyond_it_fail_then_second_pass_reclaims():
    root = two_issuer_root()
    try:
        first_claims = ledger(root, "next", "--n", "2")
        assert first_claims.returncode == 0
        claims = {i["issuer_id"]: i["claims"] for i in json.loads(first_claims.stdout)}
        # alph: CP-1 rejected twice (the 2 resubmissions the rule allows), accepted on attempt 3.
        code, attempts = drive(root, "alph", reject={"CP-1": 2})
        assert code == 0
        assert attempts == {"CP-0": 1, "CP-1": 3, "CP-1A": 1, "CP-2": 1}
        done = ledger(
            root,
            "done",
            "alph",
            "--claim",
            str(claims["alph"]),
            "--attempts-by-module",
            json.dumps(attempts),
        )
        assert done.returncode == 0, done.stderr
        # beta: CP-0 rejected three times, beyond the cap; the launcher stops with exit 1.
        code, attempts = drive(root, "beta", reject={"CP-0": 3})
        assert code == 1
        assert attempts == {"CP-0": 3}
        failed = ledger(
            root,
            *(
                "fail",
                "beta",
                "--claim",
                str(claims["beta"]),
                "--reason",
                "CP-0 rejected 3 times",
            ),
            *("--attempts-by-module", json.dumps(attempts), "--exit-code", "1"),
        )
        assert failed.returncode == 0, failed.stderr
        final = plan_of(root)
        assert (final["alph"]["status"], final["alph"]["attempts"]) == ("published", 6)
        assert (final["beta"]["status"], final["beta"]["reason"]) == (
            "failed",
            "CP-0 rejected 3 times",
        )
        # The first pass never reclaims it; the explicit second pass does.
        assert json.loads(ledger(root, "next", "--n", "5").stdout) == []
        second = json.loads(ledger(root, "next", "--n", "5", "--failed").stdout)
        assert [i["issuer_id"] for i in second] == ["beta"]
        assert (second[0]["status"], second[0]["claims"]) == ("running", 2)
        assert plan_of(root)["alph"]["status"] == "published"
    finally:
        shutil.rmtree(root, ignore_errors=True)


def test_layer1_dr_plan_retains_a_published_issuer_and_asks_every_module_of_another():
    root = two_issuer_root()
    second = "plan-layer1-dr.json"
    try:
        claimed = json.loads(ledger(root, "next", "--n", "1").stdout)
        code, attempts = drive(root, "alph", reject={})
        assert code == 0
        done = ledger(
            root, "done", "alph", "--claim", str(claimed[0]["claims"]),
            "--attempts-by-module", json.dumps(attempts),
        )  # fmt: skip
        assert done.returncode == 0, done.stderr
        again = uv(
            str(SWARM / "prepare.py"),
            *("--approved", str(root / "in/approved.md"), "--packs", str(root / "in/packs")),
            *("--contexts", str(root / "in/contexts"), "--root", str(root)),
            *("--set", "layer1-dr", "--plan", second),
        )
        assert again.returncode == 0, again.stderr
        issuers = plan_of(root, second)
        assert "retain_from" in issuers["alph"] and "retain_from" not in issuers["beta"]
        # Written by hand: what each asks. alph keeps CP-0, CP-1 and CP-1A; beta asks all eight.
        asked = {
            "alph": ["CP-1B", "CP-DR", "CP-1C", "CP-1D", "CP-2"],
            "beta": ["CP-0", "CP-1", "CP-1A", "CP-1B", "CP-DR", "CP-1C", "CP-1D", "CP-2"],
        }
        for issuer_id, modules in asked.items():
            code, attempts = drive(root, issuer_id, {}, second)
            assert code == 0 and list(attempts) == modules
            folder = Path(issuers[issuer_id]["run_folder"])
            before = files_under(folder)
            check = uv(
                *(str(SWARM / "run_issuer.py"), issuer_id, "--root", str(root)),
                *("--plan", second, "verify"),
            )
            assert check.returncode == 0, check.stderr
            assert files_under(folder) == before
        assert plan_of(root)["alph"]["status"] == "published"  # plan.json is left alone.
    finally:
        shutil.rmtree(root, ignore_errors=True)
