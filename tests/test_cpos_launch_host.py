"""`cpos_launch --config host`: the host session writes each module's answer; no provider call."""

import hashlib
import json
from pathlib import Path

import pytest
from test_cpos_launch import (
    RULING,
    answer,
    context_file,
    issuer_folder,
    prepare_routes,
)

from deploy_workflow.handoff_delivery import verify_delivery
from deploy_workflow.owners import cpos_launch
from deploy_workflow.owners.cpos_launch import (
    ANSWER_NEEDED,
    MODULE_SETS,
    expand_modules,
    main,
    prepare,
)

THROUGH_CP2 = ("CP-0", "CP-1", "CP-1A", "CP-2")  # Written by hand from the registry's rules.


def host_argv(tmp_path: Path, *extra: str, pathway: str = "credit_snapshot") -> list[str]:
    return [
        *("--context", str(context_file(tmp_path, pathway))),
        *("--sources", str(issuer_folder(tmp_path))),
        *("--config", "host", "--out", str(tmp_path / "out")),
        *extra,
    ]


def printed(out: str, label: str) -> list[str]:
    return [line.split(None, 1)[1] for line in out.splitlines() if line.startswith(label + ":")]


def asked_of(out: str) -> tuple[dict, Path]:
    """The request the launcher printed, and where its answer goes."""
    (request,) = map(Path, printed(out, "Request"))
    (answer_path,) = map(Path, printed(out, "Answer"))
    return json.loads(request.read_text()), answer_path


def answer_for(asked: dict, routes: list) -> str:
    handoffs = {n: {"sha256": h} for n, h in asked["handoffs"].items()}
    return answer({**asked, "handoffs": handoffs}, routes)


def snapshot(folder: Path) -> dict[str, str]:
    return {
        str(p.relative_to(folder)): hashlib.sha256(p.read_bytes()).hexdigest()
        for p in sorted(folder.rglob("*"))
        if p.is_file()
    }


@pytest.mark.parametrize(
    "extra",
    [
        ("--live",),
        ("--ruling", str(RULING)),
        ("--cap", "5"),
        ("--balanced",),
        ("--high-modules", "CP-2"),
        ("--web-lookup", "on"),
    ],
    ids=lambda e: e[0],
)
def test_host_refuses_every_provider_option_before_writing_anything(tmp_path, capsys, extra):
    assert main([*host_argv(tmp_path), *extra]) == 2
    assert f"--config host calls no provider: remove {extra[0]}" in capsys.readouterr().err
    assert not (tmp_path / "out").exists()


def test_host_is_a_config_choice_beside_the_provider_configs():
    parser = cpos_launch._parser()
    choices = next(a for a in parser._actions if a.dest == "config").choices
    assert "host" in choices and "sol-medium" in choices


def test_the_named_set_expands_in_place_once_each_and_combines():
    assert MODULE_SETS["through-cp2"] == THROUGH_CP2
    assert expand_modules(None) is None
    assert expand_modules(("CP-4", "through-cp2", "CP-1", "CP-2A")) == (
        "CP-4",
        *THROUGH_CP2,
        "CP-2A",
    )
    assert expand_modules(("CP-1",)) == ("CP-1",)


def test_through_cp2_is_launchable_and_needs_only_the_context_and_the_issuer_folder(tmp_path):
    context, folder = context_file(tmp_path, "credit_snapshot"), issuer_folder(tmp_path)
    prepared = prepare(
        context, folder, tmp_path / "a", config="host", cap=0, modules=("through-cp2",)
    )
    assert prepared.ordered == THROUGH_CP2
    assert prepared.plan.run.requested_modules == THROUGH_CP2
    assert (prepared.plan.execution, prepared.plan.max_attempts) == ("host-session", 3)
    assert prepared.plan.provider_cap_usd == 0
    assert set(prepared.plan.sources) == {"annual.txt", "filings/notes.md", "context"}
    more = prepare(
        context, folder, tmp_path / "b", config="host", cap=0, modules=("through-cp2", "CP-4")
    )
    assert set(more.ordered) == {*THROUGH_CP2, "CP-4"}


def test_host_instructions_name_no_source_tool_and_keep_the_method(tmp_path):
    context, folder = context_file(tmp_path, "credit_snapshot"), issuer_folder(tmp_path)
    host = prepare(context, folder, tmp_path / "h", config="host", cap=0, modules=("CP-1",))
    live = prepare(
        context, folder, tmp_path / "l", config="sol-medium", cap="15", modules=("CP-1",)
    )
    host_text = (host.directory / host.plan.instructions["CP-1"].path).read_text()
    live_text = (live.directory / live.plan.instructions["CP-1"].path).read_text()
    assert cpos_launch.HOST_READING in host_text
    assert cpos_launch.LIVE_READING not in host_text
    assert "You have no `search_source` or `calculate` tool" in host_text
    assert cpos_launch.LIVE_READING in live_text
    # Only the reading paragraphs differ, and the method block is verbatim in both.
    assert host_text.replace(cpos_launch.HOST_READING, "") == live_text.replace(
        cpos_launch.LIVE_READING, ""
    )


def test_host_readiness_says_no_provider_call_and_nothing_is_charged(tmp_path, capsys):
    assert main([*host_argv(tmp_path), "--modules", "through-cp2"]) == ANSWER_NEEDED
    out = capsys.readouterr().out
    assert "host = this session writes each module's answer; no provider call" in out
    assert "Cap:      none; nothing is charged" in out
    assert "Modules:  CP-0, CP-1, CP-1A, CP-2" in out
    assert "Run:      nbg-2025-03-31-credit_snapshot-host" in out
    manifest = json.loads((tmp_path / "out/workflow.json").read_text())
    assert "a host session, with no provider call," in manifest["layout"]["scope"]
    assert (manifest["execution"], manifest["provider_cap_usd"]) == ("host-session", "0")


def test_host_run_asks_for_each_answer_then_publishes_and_relaunch_writes_nothing(
    tmp_path, capsys, monkeypatch
):
    argv = host_argv(tmp_path, "--modules", "through-cp2", "--no-library")
    # Any provider call would need a key; none is set, and the adapter must never be built.
    for key in ("OPENAI_API_KEY", "ANTHROPIC_API_KEY"):
        monkeypatch.delenv(key, raising=False)
    routes = prepare_routes(tmp_path, "host", modules=THROUGH_CP2)
    answered: list[str] = []
    while (code := main(argv)) == ANSWER_NEEDED:
        out = capsys.readouterr().out
        asked, answer_path = asked_of(out)
        assert asked["module_id"] == THROUGH_CP2[len(answered)]
        assert f"Answer needed: {asked['module_id']}, attempt 1/3" in out
        # Every file named for the host exists and holds the bytes the request pins.
        pins = {**asked["sources"], **asked["handoffs"]}
        named = printed(out, "Source") + printed(out, "Handoff")
        assert len(named) == len(pins)
        for line in named:
            name, _, digest, _, path = line.split(" ", 4)
            assert pins[name] == digest
            assert hashlib.sha256(Path(path).read_bytes()).hexdigest() == digest
        assert set(asked["handoffs"]) <= set(answered)
        answered.append(asked["module_id"])
        answer_path.write_text(answer_for(asked, routes))
    out = capsys.readouterr()
    assert code == 0, out.err
    assert tuple(answered) == THROUGH_CP2
    outdir = tmp_path / "out"
    assert not (outdir / "live").exists()
    report = next((outdir / "deliveries").glob("*/delivery.json"))
    assert verify_delivery(next(outdir.glob("delivery-*.json")), report.parent) == report
    assert f"Delivery: {report}" in out.out
    assert "no provider was called" in out.out
    completed = json.loads(next(outdir.glob("completed-*.json")).read_text())
    assert completed["execution"] == "host-session"
    assert set(completed["module_execution"].values()) == {"host-session"}
    before = snapshot(outdir)
    assert main(argv) == 0
    assert f"Delivery: {report}" in capsys.readouterr().out
    assert snapshot(outdir) == before
    response = next(outdir.glob("requests/CP-2/*/*.response.md"))
    response.write_text(response.read_text() + "\nTampered after delivery.\n")
    assert main(argv) == 1
    assert "cpos_response_changed: CP-2" in capsys.readouterr().err


def test_unanswered_relaunch_asks_again_and_writes_nothing(tmp_path, capsys):
    argv = host_argv(tmp_path, "--modules", "CP-1")
    assert main(argv) == ANSWER_NEEDED
    first = capsys.readouterr().out
    before = snapshot(tmp_path / "out")
    assert main(argv) == ANSWER_NEEDED
    assert printed(capsys.readouterr().out, "Request") == printed(first, "Request")
    assert snapshot(tmp_path / "out") == before


def test_a_rejected_answer_is_asked_again_with_feedback_and_stops_after_three(tmp_path, capsys):
    argv = host_argv(tmp_path, "--modules", "CP-1")
    for attempt in (1, 2, 3):
        assert main(argv) == ANSWER_NEEDED
        out = capsys.readouterr().out
        asked, answer_path = asked_of(out)
        assert (asked["module_id"], asked["attempt"]) == ("CP-0", attempt)
        assert bool(printed(out, "Feedback")) == (attempt > 1)
        answer_path.write_text("## Request\n\nNot a handoff.")
    assert main(argv) == 1
    assert "cpos_module_failed: CP-0" in capsys.readouterr().err
    assert not (tmp_path / "out/deliveries").exists()


def test_host_request_resolves_cp8_generated_comparison_pack(tmp_path):
    prepared = prepare(
        context_file(tmp_path),
        issuer_folder(tmp_path),
        tmp_path / "out",
        config="host",
        cap="15",
        modules=("CP-1",),
    )
    pack = b"generated CP-8 comparison pack"
    digest = hashlib.sha256(pack).hexdigest()
    retained = prepared.directory / "inputs" / digest
    retained.parent.mkdir(parents=True, exist_ok=True)
    retained.write_bytes(pack)
    request = prepared.directory / "requests/CP-1/test/1.request.json"
    request.parent.mkdir(parents=True)
    request.write_text(
        json.dumps(
            {
                "module_id": "CP-1",
                "attempt": 1,
                "sources": {"changes.json": digest},
                "handoffs": {},
                "feedback": [],
            }
        )
    )
    text = cpos_launch._host_request(prepared, request)
    assert f"Source:   changes.json sha256 {digest} at {retained}" in text


def test_host_request_keeps_identical_handoffs_separate_by_module(tmp_path):
    prepared = prepare(
        context_file(tmp_path),
        issuer_folder(tmp_path),
        tmp_path / "out",
        config="host",
        cap=0,
        modules=("CP-1",),
    )
    body = b"identical retained handoff"
    digest = hashlib.sha256(body).hexdigest()
    paths = {}
    for module in ("CP-0", "CP-1"):
        response = prepared.directory / "requests" / module / "fingerprint" / "1.response.md"
        response.parent.mkdir(parents=True)
        response.write_bytes(body)
        paths[module] = response
    request = prepared.directory / "requests/CP-1/current/1.request.json"
    request.parent.mkdir(parents=True)
    request.write_text(
        json.dumps(
            {
                "module_id": "CP-1",
                "attempt": 1,
                "sources": {},
                "handoffs": {module: digest for module in paths},
                "feedback": [],
            }
        )
    )
    text = cpos_launch._host_request(prepared, request)
    for module, path in paths.items():
        assert f"Handoff:  {module} sha256 {digest} at {path}" in text


def test_an_accepted_answer_edited_later_is_refused(tmp_path, capsys):
    argv = host_argv(tmp_path, "--modules", "CP-1")
    routes = prepare_routes(tmp_path, "host", modules=("CP-1",))
    assert main(argv) == ANSWER_NEEDED
    asked, answer_path = asked_of(capsys.readouterr().out)
    text = answer_for(asked, routes)
    answer_path.write_text(text)
    assert main(argv) == ANSWER_NEEDED  # CP-0 accepted; CP-1 is asked
    capsys.readouterr()
    answer_path.write_text(text + "\nLater edit.\n")
    assert main(argv) == 1
    assert "cpos_response_changed: CP-0" in capsys.readouterr().err


def test_a_finished_host_run_is_published_to_the_library_unless_no_library(
    tmp_path, capsys, monkeypatch
):
    """The existing publish step, not stubbed, on a run folder inside a workspace's runs folder."""
    runs = tmp_path / "runs"
    runs.mkdir()
    argv = host_argv(tmp_path, "--modules", "CP-1")
    argv[argv.index("--out") + 1] = str(runs / "one")
    routes = prepare_routes(tmp_path, "host", modules=("CP-1",))
    while main(argv) == ANSWER_NEEDED:
        asked, answer_path = asked_of(capsys.readouterr().out)
        answer_path.write_text(answer_for(asked, routes))
    out = capsys.readouterr()
    assert "Library:" in out.out, out
    assert (tmp_path / "library/data.js").is_file()  # main's library publishes data.js


LAYER1_DR = ("CP-0", "CP-1", "CP-1A", "CP-1B", "CP-DR", "CP-1C", "CP-1D", "CP-2")
# Written by hand: what a layer1-dr run asks when CP-0, CP-1 and CP-1A are retained.
ASKED_AFTER_RETAINING = ("CP-1B", "CP-DR", "CP-1C", "CP-1D", "CP-2")


def drive(tmp_path: Path, capsys, argv: list[str], modules: tuple[str, ...]) -> list[str]:
    """Answer the launcher until it stops asking; returns the modules it asked, in order."""
    routes = prepare(
        tmp_path / "context.json",
        tmp_path / "issuer",
        tmp_path / f"preview-{len(modules)}",
        config="host",
        cap=0,
        modules=modules,
    ).plan.layout.routes
    asked_modules: list[str] = []
    while (code := main(argv)) == ANSWER_NEEDED:
        asked, answer_path = asked_of(capsys.readouterr().out)
        asked_modules.append(asked["module_id"])
        answer_path.write_text(answer_for(asked, routes))
    assert code == 0, capsys.readouterr().err
    capsys.readouterr()
    return asked_modules


def args_of(tmp_path: Path, *extra: str) -> list[str]:
    """`host_argv` without an `--out`; the issuer files are written once."""
    if not (tmp_path / "issuer").exists():
        context_file(tmp_path, "credit_snapshot"), issuer_folder(tmp_path)
    return [
        *("--context", str(tmp_path / "context.json"), "--sources", str(tmp_path / "issuer")),
        *("--config", "host", *extra),
    ]


def finished_first_run(tmp_path: Path, capsys) -> Path:
    first = tmp_path / "first"
    argv = args_of(
        tmp_path,
        *("--modules", "through-cp2", "--no-library", "--prior", "none"),
        "--out",
        str(first),
    )
    assert drive(tmp_path, capsys, argv, THROUGH_CP2) == list(THROUGH_CP2)
    return first


def layer1_argv(tmp_path: Path, first: Path, out: str = "second") -> list[str]:
    return args_of(
        tmp_path,
        *("--modules", "layer1-dr", "--no-library", "--prior", "none"),
        *("--retain-from", str(first), "--out", str(tmp_path / out)),
    )


def delivered(folder: Path, module: str) -> bytes:
    return next(folder.glob(f"deliveries/*/{module}.md")).read_bytes()


def test_layer1_dr_is_a_named_set_in_the_priority_order():
    assert MODULE_SETS["layer1-dr"] == LAYER1_DR


def test_retained_layer1_dr_asks_only_the_new_modules_and_delivers_the_old_bytes(tmp_path, capsys):
    first = finished_first_run(tmp_path, capsys)
    argv = layer1_argv(tmp_path, first)
    asked = drive(tmp_path, capsys, argv, LAYER1_DR)
    second = tmp_path / "second"
    assert tuple(asked) == ASKED_AFTER_RETAINING
    for module in ("CP-0", "CP-1", "CP-1A"):
        assert delivered(second, module) == delivered(first, module)
        # CP-OS keeps its own record of a retained dispatch; the answer in it is the old one.
        (kept,) = second.glob(f"requests/{module}/*/*.response.md")
        assert kept.read_bytes() == delivered(first, module)
    assert delivered(second, "CP-2") != delivered(first, "CP-2")
    before = snapshot(second)
    assert main(argv) == 0
    assert snapshot(second) == before


def test_a_changed_earlier_source_is_refused_before_any_request(tmp_path, capsys):
    first = finished_first_run(tmp_path, capsys)
    (tmp_path / "issuer" / "annual.txt").write_text("Net sales were 101.")
    assert main(layer1_argv(tmp_path, first)) == 1
    assert "cpos_retained_sources" in capsys.readouterr().err
    assert not list((tmp_path / "second").glob("requests/*/*/*.request.json"))


@pytest.mark.parametrize("kind", ["missing", "not-a-run", "unfinished"])
def test_retain_from_that_is_not_a_finished_run_exits_2_with_one_line(tmp_path, capsys, kind):
    folder = tmp_path / "earlier"
    if kind != "missing":
        folder.mkdir()
    if kind == "unfinished":
        argv = args_of(
            tmp_path, "--modules", "through-cp2", "--prior", "none", "--out", str(folder)
        )
        assert main(argv) == 3
        capsys.readouterr()
    assert main(layer1_argv(tmp_path, folder)) == 2
    err = capsys.readouterr().err.strip().splitlines()
    assert len(err) == 1 and "--retain-from" in err[0]
    assert not (tmp_path / "second").exists()
