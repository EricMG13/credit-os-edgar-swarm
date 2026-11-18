"""CP-OS running independent modules at once: synthetic and offline, no provider is called.

Scope: the synthetic proof case (`proof/launcher.py`, canned handoffs, no model latency). These
tests show the schedule, the cap and the byte-identity of what a run retains and publishes; they
are not a measurement of a live run's time.
"""

import hashlib
import json
import re
import shutil
import threading
import time
from decimal import Decimal
from pathlib import Path

import pytest

from deploy_vii.registry import dependencies
from deploy_workflow.model.adapter import AdapterReply
from deploy_workflow.model.budget import Budget, BudgetExhausted, RunStopped
from deploy_workflow.model.handoff import HandoffExecutor
from deploy_workflow.model.run_lock import RunDirBusy, _single_writer
from deploy_workflow.model.turn import Compaction, ToolCall, Turn, Usage
from deploy_workflow.owners import cpos_launch
from deploy_workflow.owners.cpos import (
    MAX_MODULE_WIDTH,
    MODULE_WIDTH,
    HandoffTask,
    ModuleHalted,
    run_handoffs,
)
from deploy_workflow.run_events import EVENTS, progress, read_events
from proof import DUMMY_KEY, launcher
from proof.launcher import FILING, canned_handoff

PROJECT = Path(__file__).resolve().parents[1]
RULING = PROJECT / "docs/rulings/2026-11-11-run-start-submit.md"
CONFIG = "copilot-sol-medium"
WAIT = 30  # seconds a test waits for another thread before it fails


# ---------------------------------------------------------------- the synthetic case


def workspace(root: Path) -> tuple[Path, Path]:
    """The proof's context and upload under ``root``: (context file, sources folder)."""
    data = json.loads((PROJECT / "cases/context/research-minimal.json").read_text())
    data["run"].update(
        pathway="credit_snapshot", as_of="2025-04-30", cutoff="", case_kind="synthetic"
    )
    data["identity"].update(issuer_name="Example Synthetic Group", issuer_id="example")
    data["attachments"]["legal_documents"] = "none"
    drop = root / "drop"
    drop.mkdir(parents=True)
    shutil.copy(FILING, drop / FILING.name)
    context = root / "context.json"
    context.write_text(json.dumps(data))
    return context, drop


class Case:
    """The synthetic plan as a provider-free manifest, and the canned answer of each module."""

    def __init__(self, root: Path) -> None:
        context, drop = workspace(root)
        prepared = cpos_launch.prepare(
            context, drop, root / "prepared", config=CONFIG, cap="25", prior="none"
        )
        plan = json.loads(prepared.manifest.read_text())
        plan["execution"], plan["provider_cap_usd"] = "synthetic", "0"
        self.manifest = prepared.directory / "synthetic.json"
        self.manifest.write_text(json.dumps(plan))
        self.ordered = tuple(prepared.ordered)
        self.check = cpos_launch.checker(prepared.layout)
        self.case = f"{prepared.plan.run.issuer_name} as of {prepared.plan.run.as_of}."
        self.root = root

    def answer(self, task: HandoffTask) -> bytes:
        context = {
            "module_id": task.module_id,
            "sources": {n: hashlib.sha256(raw).hexdigest() for n, raw in task.sources.items()},
            "handoffs": {
                m: {"sha256": hashlib.sha256(raw).hexdigest()} for m, raw in task.handoffs.items()
            },
        }
        return canned_handoff(context, self.case, gated=True).encode()

    def run(self, name: str, execute, width: int, check=None) -> Path:
        out = self.root / name
        return run_handoffs(
            self.manifest,
            out,
            execute=execute,
            check=check or self.check,
            events=out,
            width=width,
        )

    def events(self, name: str, kind: str) -> list[str]:
        found = read_events(self.root / name / EVENTS)
        return [e["module"] for e in found if e["event"] == kind]


@pytest.fixture(scope="module")
def case(tmp_path_factory) -> Case:
    return Case(tmp_path_factory.mktemp("case"))


def _tree(root: Path) -> dict[str, str]:
    return {
        p.relative_to(root).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest()
        for p in sorted(root.rglob("*"))
        if p.is_file()
    }


# ---------------------------------------------------------------- the schedule


def test_two_independent_modules_are_in_flight_at_once(case, tmp_path_factory):
    """CP-1 and CP-1A each need CP-0 only. Each answer waits until the other has started: with one
    module at a time the second never starts, and the wait fails."""
    together = threading.Barrier(2, timeout=WAIT)
    threads = {}

    def execute(task: HandoffTask) -> bytes:
        threads[task.module_id] = threading.current_thread().name
        if task.module_id in ("CP-1", "CP-1A"):
            together.wait()
        return case.answer(task)

    assert case.run("overlap", execute, 2).is_file()
    assert threads["CP-1"] != threads["CP-1A"]
    assert case.events("overlap", "module_accepted") == list(case.ordered)

    alone = threading.Barrier(2, timeout=0.5)

    def serial(task: HandoffTask) -> bytes:
        if task.module_id in ("CP-1", "CP-1A"):
            alone.wait()
        return case.answer(task)

    with pytest.raises(threading.BrokenBarrierError):
        case.run("no-overlap", serial, 1)


@pytest.mark.parametrize("width", [2, MAX_MODULE_WIDTH])
def test_the_width_is_never_exceeded_and_a_module_starts_only_after_its_producers(case, width):
    lock = threading.Lock()
    flying: set[str] = set()
    most = 0
    done: list[str] = []
    seen: dict[str, set[str]] = {}

    def execute(task: HandoffTask) -> bytes:
        nonlocal most
        with lock:
            flying.add(task.module_id)
            most = max(most, len(flying))
            seen[task.module_id] = set(done)
        time.sleep(0.02)  # long enough for every free slot to be filled
        with lock:
            flying.discard(task.module_id)
            done.append(task.module_id)
        return case.answer(task)

    case.run(f"width-{width}", execute, width)
    assert 2 <= most <= width
    producers = dependencies(case.ordered)
    for module_id in case.ordered:
        assert producers[module_id] <= seen[module_id], module_id
    assert case.ordered[-1] == "CP-6" and seen["CP-6"] == set(case.ordered) - {"CP-6"}


def test_a_module_that_finishes_while_others_are_started_is_still_accepted(case, monkeypatch):
    """A module can finish between the scheduler's starts and its wait. The modules after it
    wait for it at their checks, so the scheduler must not wait for them alone: here CP-1
    finishes while the scheduler is still starting modules, and CP-1A's check waits for CP-1."""
    from deploy_workflow.owners import cpos

    take_off = cpos._ModuleLoop._take_off

    def slow_take_off(self, board, pool, width):
        take_off(self, board, pool, width)
        time.sleep(0.3)  # every module just started has answered by now

    monkeypatch.setattr(cpos._ModuleLoop, "_take_off", slow_take_off)
    done: list[Path | Exception] = []

    def run() -> None:
        try:
            done.append(case.run("lost-finish", case.answer, 2))
        except Exception as error:  # noqa: BLE001 -- asserted below
            done.append(error)

    thread = threading.Thread(target=run, daemon=True)
    thread.start()
    thread.join(60)
    assert not thread.is_alive(), "the scheduler waits for a module that waits for a finished one"
    assert isinstance(done[0], Path) and done[0].is_file(), done


def test_one_at_a_time_runs_on_the_calling_thread_in_plan_order(case):
    """Width 1 is the loop as it was: no worker thread, plan order, and each check is given
    exactly the handoffs accepted before its module."""
    calls: list[tuple[str, str]] = []
    given: dict[str, tuple[str, ...]] = {}

    def execute(task: HandoffTask) -> bytes:
        calls.append((task.module_id, threading.current_thread().name))
        assert type(task.accepted).__name__ == "mappingproxy"  # the snapshot, not a waiting view
        return case.answer(task)

    def check(task: HandoffTask, raw: bytes) -> tuple[str, ...]:
        given[task.module_id] = tuple(task.accepted)
        return case.check(task, raw)

    case.run("serial", execute, 1, check)
    here = threading.current_thread().name
    assert calls == [(m, here) for m in case.ordered]
    assert given == {m: case.ordered[:i] for i, m in enumerate(case.ordered)}


def test_a_check_reads_the_same_accepted_handoffs_whichever_module_finishes_first(case):
    """The determinism rule: with modules in flight at once, a module's check still reads every
    handoff the plan lists before it. Later modules answer first here, so each must wait."""
    given: dict[str, dict[str, str]] = {}
    lock = threading.Lock()

    def execute(task: HandoffTask) -> bytes:
        # the earlier a module is in the plan, the longer its answer takes
        time.sleep(0.01 * (len(case.ordered) - case.ordered.index(task.module_id)))
        return case.answer(task)

    def check(task: HandoffTask, raw: bytes) -> tuple[str, ...]:
        seen = {m: hashlib.sha256(v).hexdigest() for m, v in task.accepted.items()}
        with lock:
            assert given.setdefault(task.module_id, seen) == seen
        return case.check(task, raw)

    case.run("ordered-checks", execute, 2, check)
    assert {m: tuple(v) for m, v in given.items()} == {
        m: case.ordered[:i] for i, m in enumerate(case.ordered)
    }
    assert case.events("ordered-checks", "module_accepted") == list(case.ordered)


def test_serial_and_parallel_runs_retain_and_deliver_the_same_bytes(case):
    """Provider-free route: every file of the run folder is the same at width 1, 2 and the
    maximum, except the event log, whose times and order record what happened."""

    def slow_first(task: HandoffTask) -> bytes:
        time.sleep(0.01 * (len(case.ordered) - case.ordered.index(task.module_id)))
        return case.answer(task)

    trees = {}
    for width in (1, 2, MAX_MODULE_WIDTH):
        case.run(f"bytes-{width}", slow_first, width)
        trees[width] = _tree(case.root / f"bytes-{width}")
        assert any(name.startswith("deliveries/") for name in trees[width])
        del trees[width][EVENTS]
    assert trees[1] == trees[2] == trees[MAX_MODULE_WIDTH]


def test_a_failed_module_stops_new_starts_and_the_modules_after_it(case):
    """CP-1 fails while CP-1A is in flight beside it. Nothing else starts; CP-1A, which is after
    CP-1 in the plan, is halted at its check; the failure raised is CP-1's."""
    both = threading.Barrier(2, timeout=WAIT)
    halted = []

    def execute(task: HandoffTask) -> bytes:
        if task.module_id == "CP-1":
            both.wait()
            raise RuntimeError("cpos_live_stopped: the provider stopped CP-1")
        if task.module_id == "CP-1A":
            both.wait()
            try:
                case.check(task, case.answer(task))  # as the loop's write does: reads `accepted`
            except ModuleHalted:
                halted.append(task.module_id)
                raise
        return case.answer(task)

    with pytest.raises(RuntimeError, match="the provider stopped CP-1"):
        case.run("failed", execute, 2)
    assert halted == ["CP-1A"]
    assert case.events("failed", "module_started") == ["CP-0", "CP-1", "CP-1A"]
    assert case.events("failed", "module_accepted") == ["CP-0"]


def test_a_module_before_the_failed_one_still_finishes_and_is_accepted(case):
    """CP-1A fails first; CP-1, before it in the plan and already in flight, is accepted; then
    the run stops with CP-1A's failure and starts nothing more. A relaunch reuses the accepted
    answers without a call and stops at the module that was cut short, as a serial run does."""
    failed = threading.Event()
    calls = []

    def execute(task: HandoffTask) -> bytes:
        calls.append(task.module_id)
        if task.module_id == "CP-1A":
            failed.set()
            raise RuntimeError("cpos_live_stopped: the provider stopped CP-1A")
        if task.module_id == "CP-1":
            assert failed.wait(WAIT)
            time.sleep(0.05)
            task.proceed()  # a module before the failed one is not halted
        return case.answer(task)

    with pytest.raises(RuntimeError, match="the provider stopped CP-1A"):
        case.run("later-failed", execute, 2)
    assert case.events("later-failed", "module_accepted") == ["CP-0", "CP-1"]
    assert sorted(calls) == ["CP-0", "CP-1", "CP-1A"]

    calls.clear()
    with pytest.raises(ValueError, match="cpos_interrupted: response not retained for CP-1A"):
        case.run("later-failed", execute, 2)
    assert calls == []  # CP-0 and CP-1 were reused; CP-DR was not started after the stop


def test_a_module_already_halted_makes_no_further_call(case):
    """`proceed` is what the executor asks before each paid exchange: it raises for a module
    after the failed one as soon as the failure is known, not only at the module's check."""
    both = threading.Barrier(2, timeout=WAIT)
    outcome = []

    def execute(task: HandoffTask) -> bytes:
        if task.module_id == "CP-1":
            both.wait()
            raise RuntimeError("cpos_live_stopped: CP-1")
        if task.module_id == "CP-1A":
            both.wait()
            deadline = time.monotonic() + WAIT
            while time.monotonic() < deadline:
                try:
                    task.proceed()
                except ModuleHalted as error:
                    outcome.append(str(error))
                    raise
                time.sleep(0.01)
        return case.answer(task)

    with pytest.raises(RuntimeError, match="cpos_live_stopped: CP-1"):
        case.run("halted", execute, 2)
    assert outcome == ["cpos_halted: CP-1A: a module before it in the plan was not accepted"]


def test_an_observer_that_stops_the_run_stops_new_starts(case):
    def stop_at_cp1(task: HandoffTask, raw: bytes) -> None:
        if task.module_id == "CP-1":
            raise RuntimeError("evidence review")

    out = case.root / "observer"
    with pytest.raises(RuntimeError, match="evidence review"):
        run_handoffs(
            case.manifest,
            out,
            execute=case.answer,
            check=case.check,
            on_handoff=stop_at_cp1,
            events=out,
            width=2,
        )
    assert case.events("observer", "module_accepted") == ["CP-0", "CP-1"]
    assert set(case.events("observer", "module_started")) <= {"CP-0", "CP-1", "CP-1A"}


def test_a_width_outside_the_bound_is_refused(case):
    for width in (0, MAX_MODULE_WIDTH + 1):
        with pytest.raises(ValueError, match="cpos_width"):
            case.run("refused", case.answer, width)
    assert not (case.root / "refused").exists()


# ---------------------------------------------------------------- the event log


def test_progress_reads_two_running_modules():
    def read(*events: tuple[str, str]) -> dict[str, str]:
        return dict(progress({"event": e, "module": m} for e, m in events).modules)

    started = (("module_started", "CP-0"), ("module_accepted", "CP-0"), ("module_started", "CP-1"))
    assert read(*started, ("module_started", "CP-1A")) == {
        "CP-0": "done",
        "CP-1": "running",
        "CP-1A": "running",
    }
    assert read(*started, ("module_started", "CP-1A"), ("module_accepted", "CP-1A")) == {
        "CP-0": "done",
        "CP-1": "running",
        "CP-1A": "done",
    }
    stopped = progress(
        [
            *({"event": e, "module": m} for e, m in started),
            {"event": "module_started", "module": "CP-1A"},
            {"event": "stopped", "reason": "provider"},
        ]
    )
    assert dict(stopped.modules) == {"CP-0": "done", "CP-1": "stopped", "CP-1A": "stopped"}
    assert stopped.stop == "provider"


def test_progress_ends_what_a_killed_launch_left_running_when_the_run_is_relaunched():
    """A killed launch writes no `stopped`. The relaunch starts the first module again: that
    start of a module already started ends the two the first launch left running."""
    killed = [
        {"event": "module_started", "module": "CP-0"},
        {"event": "module_accepted", "module": "CP-0"},
        {"event": "module_started", "module": "CP-1"},
        {"event": "module_started", "module": "CP-1A"},
    ]
    relaunch = [*killed, {"event": "module_started", "module": "CP-0"}]
    assert dict(progress(relaunch).modules) == {
        "CP-0": "running",
        "CP-1": "stopped",
        "CP-1A": "stopped",
    }


def test_the_activity_page_states_show_both_running_modules():
    from deploy_workflow.inbox.activity import module_states

    events = [
        {"event": "module_started", "module": "CP-0"},
        {"event": "module_accepted", "module": "CP-0"},
        {"event": "module_started", "module": "CP-1"},
        {"event": "module_started", "module": "CP-1A"},
    ]
    states = dict(module_states("credit_snapshot", events))
    assert (states["CP-0"], states["CP-1"], states["CP-1A"]) == ("done", "running", "running")
    assert states["CP-DR"] == "waiting" and states["Report"] == "waiting"


# ---------------------------------------------------------------- the cap


def _committed(budget: Budget) -> Decimal:
    with budget._lock:  # one consistent reading of spend plus open holds
        return budget._reserved() + budget._spent()


def test_spend_plus_holds_never_passes_the_cap_under_concurrent_reserves(tmp_path):
    """Eight threads each make 25 calls that hold 4 and settle at 0.01 against a cap of 10: at
    most two holds fit at once, so the others wait for a settlement, and none is refused."""
    budget = Budget(Decimal(10), tmp_path)
    worst = Decimal(0)
    errors = []

    def calls(thread: int) -> None:
        nonlocal worst
        try:
            for index in range(25):
                call_id = f"call-{thread}-{index}"
                budget.reserve(call_id, Decimal(4), config_id=CONFIG)
                worst = max(worst, _committed(budget))
                budget.settle(call_id, Decimal("0.01"))
        except Exception as error:  # noqa: BLE001 -- reported below
            errors.append(error)

    threads = [threading.Thread(target=calls, args=(n,)) for n in range(8)]
    for thread in threads:
        thread.start()
    for thread in threads:
        thread.join(WAIT)
    assert not errors and not any(thread.is_alive() for thread in threads)
    assert Decimal(4) <= worst <= Decimal(10)
    assert budget.spent == Decimal(2) and budget.reserved == 0
    markers = sorted(p.name for p in (tmp_path / "owner-run-audit/reservations").iterdir())
    assert len(markers) == 400  # every reservation and settlement journaled once
    assert json.loads((tmp_path / "owner-run-audit/reservations/call-0-0").read_text()) == {
        "config_id": CONFIG,
        "retry_of": None,
        "usd": "4",
    }


def _in_thread(function) -> tuple[threading.Thread, list]:
    result: list = []

    def run() -> None:
        try:
            result.append(function())
        except Exception as error:  # noqa: BLE001 -- the caller asserts on it
            result.append(error)

    thread = threading.Thread(target=run)
    thread.start()
    return thread, result


def test_a_reserve_blocked_only_by_another_modules_hold_waits_for_its_settlement(tmp_path):
    budget = Budget(Decimal(10), tmp_path)
    budget.reserve("first", Decimal(6), config_id=CONFIG)
    thread, result = _in_thread(lambda: budget.reserve("second", Decimal(6), config_id=CONFIG))
    thread.join(0.3)
    assert thread.is_alive() and not result  # waiting: neither refused nor held
    assert budget.reserved == Decimal(6)
    assert not (tmp_path / "owner-run-audit/reservations/second").exists()
    budget.settle("first", Decimal(1))
    thread.join(WAIT)
    assert result == [None]
    assert (budget.spent, budget.reserved) == (Decimal(1), Decimal(6))


def test_a_reserve_that_passes_the_cap_on_settled_spend_is_refused_at_once(tmp_path):
    """Spend 5 is settled and another thread holds 4. A hold of 6 would pass the cap of 10 even
    with that hold gone, so it is refused as it always was, without waiting."""
    budget = Budget(Decimal(10), tmp_path)
    budget.reserve("spent", Decimal(5), config_id=CONFIG)
    budget.settle("spent", Decimal(5))
    budget.reserve("open", Decimal(4), config_id=CONFIG)
    thread, result = _in_thread(lambda: budget.reserve("late", Decimal(6), config_id=CONFIG))
    thread.join(WAIT)
    assert not thread.is_alive()
    assert isinstance(result[0], BudgetExhausted) and "passes the cap" in str(result[0])
    assert budget.unsettled == ("open",)


def test_a_thread_never_waits_for_its_own_hold(tmp_path):
    budget = Budget(Decimal(10), tmp_path)
    budget.reserve("mine", Decimal(6), config_id=CONFIG)
    with pytest.raises(BudgetExhausted):
        budget.reserve("mine-too", Decimal(6), config_id=CONFIG)


@pytest.mark.parametrize("ending", ["unknown", "abandoned", "overrun"])
def test_a_waiting_reserve_stops_when_the_hold_it_waits_for_stops_the_run(tmp_path, ending):
    budget = Budget(Decimal(10), tmp_path)
    budget.reserve("first", Decimal(6), config_id=CONFIG)
    thread, result = _in_thread(lambda: budget.reserve("second", Decimal(6), config_id=CONFIG))
    thread.join(0.2)
    assert thread.is_alive()
    if ending == "unknown":
        budget.settle("first", None)
    elif ending == "abandoned":
        budget.abandon()  # this thread's module ended without settling its hold
    else:
        with pytest.raises(RunStopped):
            budget.settle("first", Decimal(7))
    thread.join(WAIT)
    assert isinstance(result[0], RunStopped) and not isinstance(result[0], BudgetExhausted)
    assert not (tmp_path / "owner-run-audit/reservations/second").exists()
    if ending == "abandoned":
        assert budget.stop_kind == "crash_left"
        assert Budget(Decimal(10), tmp_path).stop_kind == "crash_left"  # as a reload reads it


# ---------------------------------------------------------------- the executor


GOOD = (
    b"## Request\nx\n## Sources\nx\n## Findings\nx\n## Calculations\nx\n## Gaps\nx\n"
    b"## Next module\nx\n"
)


def _task(module_id: str, proceed=None) -> HandoffTask:
    from datetime import date

    from deploy_vii.contracts import Run

    run = Run(
        run_id="parallel-test",
        issuer_id="TDG",
        issuer_name="TransDigm Group Incorporated",
        as_of=date(2024, 9, 30),
        case_kind="synthetic",
        pathway="credit_snapshot",
        requested_modules=("CP-1", "CP-1A"),
    )
    extra = {} if proceed is None else {"proceed": proceed}
    return HandoffTask(run, module_id, b"Write.", {"S1.txt": b"Revenue 100"}, {}, 1, (), **extra)


def _reply(compactions=()) -> AdapterReply:
    usage = Usage(input_tokens=100, output_tokens=50)
    call = ToolCall("w", "write_handoff", {"markdown": GOOD.decode()})
    turn = Turn("", (call,), usage, "tool_use", "gpt-6.1-sol", "test", 200)
    return AdapterReply("ok", turn, None, 200, None, None, 1, 2, usage, compactions=compactions)


class TogetherAdapter:
    """Each module's call waits until both modules are inside a call, holding their reservations."""

    config_id = "sol-medium"
    ruling = None

    def __init__(self, compacted: str) -> None:
        self.together = threading.Barrier(2, timeout=WAIT)
        self.compacted = compacted
        self.digests: dict[str, str] = {}

    def complete(self, request, *, invocation_digest, **_identity):
        module_id = json.loads(request.messages[1].text)["module_id"]
        self.digests[module_id] = invocation_digest
        self.together.wait()
        found = (
            (Compaction("complete", "attempt-1", 9, 4, 20, True, usd=Decimal(0)),)
            if module_id == self.compacted
            else ()
        )
        return _reply(found)


def test_two_module_runs_share_one_executor_one_lock_and_one_budget(tmp_path):
    """Both calls are in flight at once through one executor: neither is refused as a second
    writer, both holds are in the one budget, each run's compaction flag is its own thread's, and
    a second process is still excluded while they run."""
    adapter = TogetherAdapter(compacted="CP-1A")
    executor = HandoffExecutor(
        tmp_path, adapter=adapter, cap_usd=Decimal(20), check=lambda task, raw: ()
    )
    budgets, flags, busy = [], {}, []
    wait = adapter.together.wait

    def both_inside() -> None:
        wait()
        budgets.append((executor.budget, executor.budget.reserved))
        try:
            with _single_writer(tmp_path):
                busy.append(False)
        except RunDirBusy:
            busy.append(True)

    adapter.together.wait = both_inside

    def run(module_id: str) -> bytes:
        raw = executor(_task(module_id))
        flags[module_id] = executor.written_after_compaction
        return raw

    first, one = _in_thread(lambda: run("CP-1"))
    second, two = _in_thread(lambda: run("CP-1A"))
    first.join(WAIT)
    second.join(WAIT)
    assert one == [GOOD] and two == [GOOD]
    assert busy == [True, True]
    (budget_a, held_a), (budget_b, held_b) = budgets
    assert budget_a is budget_b is executor.budget
    hold = Decimal(executor.log.records()[0]["reserved_usd"])
    assert max(held_a, held_b) == 2 * hold  # both holds open at once, in the one budget
    assert flags["CP-1"] is None and flags["CP-1A"].attempt_id == "attempt-1"
    assert executor.written_after_compaction is None  # this thread ran no module
    assert executor.budget.reserved == 0 and len(executor.budget.settled_calls) == 2
    with _single_writer(tmp_path):  # the last run out let the lock go
        pass
    assert len({s.digest for s in executor._sessions}) == 2


def test_two_modules_under_a_cap_that_fits_one_hold_take_turns_and_both_finish(tmp_path):
    """The cap fits one call's hold, not two. Through the executor the second module's call
    waits for the first to settle instead of stopping the run at the cap, and the two calls
    are never both open."""

    class OneAtATime:
        config_id = "sol-medium"
        ruling = None
        inside = 0
        most = 0
        gate = threading.Lock()

        def complete(self, request, **_identity):
            with self.gate:
                self.inside += 1
                self.most = max(self.most, self.inside)
            time.sleep(0.1)
            with self.gate:
                self.inside -= 1
            return _reply()

    adapter = OneAtATime()
    executor = HandoffExecutor(
        tmp_path, adapter=adapter, cap_usd=Decimal(8), check=lambda task, raw: ()
    )
    first, one = _in_thread(lambda: executor(_task("CP-1")))
    second, two = _in_thread(lambda: executor(_task("CP-1A")))
    first.join(WAIT)
    second.join(WAIT)
    assert one == [GOOD] and two == [GOOD]
    hold = Decimal(executor.log.records()[0]["reserved_usd"])
    assert hold <= Decimal(8) < 2 * hold  # the premise: one hold fits, two do not
    assert adapter.most == 1
    assert executor.budget.reserved == 0 and executor.budget.spent < Decimal(1)


def test_a_halted_module_reserves_nothing_and_sends_nothing(tmp_path):
    class Refusing:
        config_id = "sol-medium"
        ruling = None

        def complete(self, request, **_identity):
            pytest.fail("a halted module made a call")

    def halted() -> None:
        raise ModuleHalted("cpos_halted: CP-1A")

    executor = HandoffExecutor(
        tmp_path, adapter=Refusing(), cap_usd=Decimal(20), check=lambda task, raw: ()
    )
    with pytest.raises(ModuleHalted):
        executor(_task("CP-1A", halted))
    assert list((tmp_path / "owner-run-audit/reservations").iterdir()) == []
    assert executor.budget.stop_reason is None


def test_a_module_halted_while_it_waited_for_the_cap_releases_its_hold_unsent(tmp_path):
    asked = []

    def halted_second_time() -> None:
        asked.append(1)
        if len(asked) > 1:
            raise ModuleHalted("cpos_halted: CP-1A")

    class Refusing:
        config_id = "sol-medium"
        ruling = None

        def complete(self, request, **_identity):
            pytest.fail("a halted module made a call")

    executor = HandoffExecutor(
        tmp_path, adapter=Refusing(), cap_usd=Decimal(20), check=lambda task, raw: ()
    )
    with pytest.raises(ModuleHalted):
        executor(_task("CP-1A", halted_second_time))
    snapshot = executor.budget
    assert (snapshot.spent, snapshot.reserved, snapshot.stop_reason) == (0, 0, None)
    settled = list((tmp_path / "owner-run-audit/reservations").glob("*.settled"))
    assert [json.loads(p.read_text())["status"] for p in settled] == ["released"]


# ---------------------------------------------------------------- the launcher's setting


def test_the_launcher_default_is_two_and_the_environment_or_the_flag_sets_it():
    width = cpos_launch.module_width
    assert MODULE_WIDTH == 2
    assert width(None, {}) == 2
    assert width(None, {cpos_launch.PARALLEL_VARIABLE: "1"}) == 1
    assert width(3, {cpos_launch.PARALLEL_VARIABLE: "1"}) == 3
    for bad in ("0", "5", "two", "-1", "1.5"):
        with pytest.raises(cpos_launch.LaunchRefused, match="whole number from 1 to 4"):
            width(None, {cpos_launch.PARALLEL_VARIABLE: bad})
    parser = cpos_launch._parser()
    base = ["--context", "c", "--sources", "s", "--config", CONFIG]
    assert parser.parse_args(base).parallel_modules is None
    assert parser.parse_args([*base, "--parallel-modules", "1"]).parallel_modules == 1
    with pytest.raises(SystemExit):
        parser.parse_args([*base, "--parallel-modules", "5"])


# ---------------------------------------------------------------- end to end, synthetic


_TIME = re.compile(r"\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:Z|\+00:00)")
_BUILT = re.compile(r'"built_at": "[^"]*"')
_CALL = re.compile(r"call-[0-9a-f]{32}")
_CALLS = re.compile(r'"calls": \[(\{[^\[\]]*\})\]')  # the library's copy of the call log


def _library_data(text: str) -> str:
    """The library's data with its times left out and its call rows, which it lists in the call
    log's order, sorted."""
    text = _BUILT.sub("built", _TIME.sub("time", text))
    return _CALLS.sub(lambda rows: "calls:" + "".join(sorted(rows[1].split("}, {"))), text)


def _launched(root: Path, width: str | None, monkeypatch) -> dict[str, str]:
    """Launch the synthetic proof through the real launcher and loop (canned Copilot replies),
    rebuild the library, and return the workspace tree. Left out of the comparison, and nothing
    else: the times in the event log, the call log and the library's run record, and the time
    the library was built (`built_at`); the random
    call ids (the reservation markers' names and each response's `reservation_id`); and the order
    of the event and call log lines, and of the library's copy of the call log, which is the
    order things happened in."""
    context, drop = workspace(root)
    out = root / "runs" / "example-run"
    argv = [
        *("--context", str(context), "--sources", str(drop), "--config", CONFIG, "--cap", "25"),
        *("--out", str(out), "--no-library", "--prior", "none", "--live", "--ruling", str(RULING)),
        *(() if width is None else ("--parallel-modules", width)),
    ]
    monkeypatch.setenv("COPILOT_GITHUB_TOKEN", DUMMY_KEY)
    monkeypatch.setenv("COPILOT_CLI_PATH", str(Path(__file__)))
    assert launcher.run_engine(argv) == 0
    cpos_launch.update_library_at(root)
    tree = {}
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        name = path.relative_to(root).as_posix()
        text = path.read_bytes()
        if name.endswith((EVENTS, "live/calls.jsonl")):
            lines = _CALL.sub("call-id", _TIME.sub("time", text.decode())).splitlines()
            text = "\n".join(sorted(lines)).encode()
        elif name == "library/data.js":
            assert _CALLS.search(text.decode())
            text = _library_data(text.decode()).encode()
        elif "/live/modules/" in name and name.endswith(".response.json"):
            text = _CALL.sub("call-id", text.decode()).encode()
        elif "/owner-run-audit/reservations/" in name:
            name = _CALL.sub("call-id", name)
            tree[name] = tree.get(name, "") + hashlib.sha256(text).hexdigest()
            continue
        tree[name] = hashlib.sha256(text).hexdigest()
    return tree


def test_the_synthetic_run_is_the_same_tree_one_at_a_time_and_in_parallel(tmp_path, monkeypatch):
    """Scope: the synthetic proof case through the launcher, `HandoffExecutor`, the budget, the
    delivery and the library build, with canned replies (no model, no latency). The earlier a
    module is in the plan, the longer its canned reply takes here, so modules after it finish
    their model work first and must wait for it."""
    reply = launcher.canned_handoff
    order = Case(tmp_path / "plan").ordered

    def slow_first(context, case, *, gated=False):
        time.sleep(0.01 * (len(order) - order.index(context["module_id"])))
        return reply(context, case, gated=gated)

    monkeypatch.setattr(launcher, "canned_handoff", slow_first)
    monkeypatch.delenv(cpos_launch.PARALLEL_VARIABLE, raising=False)
    serial = _launched(tmp_path / "serial", "1", monkeypatch)
    default = _launched(tmp_path / "default", None, monkeypatch)
    widest = _launched(tmp_path / "widest", str(MAX_MODULE_WIDTH), monkeypatch)
    assert any(name.startswith("runs/example-run/deliveries/") for name in serial)
    assert "library/data.js" in serial and len(serial) > 200
    assert serial == default
    assert serial == widest
    # and the default run did overlap: CP-1A started before CP-1 was accepted
    events = read_events(tmp_path / "default" / "runs" / "example-run" / EVENTS)
    names = [(e["event"], e.get("module")) for e in events]
    assert names.index(("module_started", "CP-1A")) < names.index(("module_accepted", "CP-1"))
    assert [m for e, m in names if e == "module_accepted"] == list(order)
    states = progress(events)
    assert set(states.modules.values()) == {"done"} and states.delivered
