"""Later publications of one process reuse what was parsed from unchanged bytes, and still read
and check every file. Synthetic runs (`library_fixtures`); no provider is called."""

from __future__ import annotations

import datetime
import hashlib
from contextlib import nullcontext
from pathlib import Path

import pytest
import update_library
from credit_os import cashflow, store
from library_fixtures import CITED, SOURCE_NAME, SOURCE_PAGES, inventory_text, make_run, method

import deploy_workflow.credit_os_catalogue as catalogue_module
import deploy_workflow.credit_os_chips as chips_module
import deploy_workflow.library_index as index
from deploy_workflow.derived import STORE, Derived, derived, reuse

SOURCE_SHA = hashlib.sha256(SOURCE_PAGES).hexdigest()


class FixedClock(datetime.datetime):
    """`built_at` is the one value of a publication that is not read from the workspace."""

    @classmethod
    def now(cls, tz=None):
        return cls(2026, 11, 18, 12, 0, 0, tzinfo=tz)


@pytest.fixture(autouse=True)
def fixed_inputs(monkeypatch):
    monkeypatch.setattr(index, "current_method", lambda: method())
    monkeypatch.setattr(catalogue_module, "datetime", FixedClock)


def cited_run(workspace: Path, folder: str, **spec) -> Path:
    """A run whose CP-1 cites a page of a source-text file its CP-0 inventory names."""
    run = make_run(workspace, folder, cp0_extra=inventory_text(SOURCE_SHA), cp1_extra=CITED, **spec)
    (run / "source-text").mkdir()
    (run / "source-text" / SOURCE_NAME).write_bytes(SOURCE_PAGES)
    return run


def tree(folder: Path) -> dict[str, bytes]:
    return {
        p.relative_to(folder).as_posix(): p.read_bytes()
        for p in sorted(folder.rglob("*"))
        if p.is_file()
    }


def published(workspace: Path) -> dict[str, bytes]:
    update_library.update_library(workspace)
    return tree(workspace / "library")


def published_without_reuse(workspace: Path, monkeypatch) -> dict[str, bytes]:
    with monkeypatch.context() as patch:
        patch.setattr(update_library, "reuse", nullcontext)
        return published(workspace)


def counted(monkeypatch) -> dict[str, int]:
    """Count each derivation the publisher keeps, and each file read and hash check it must not."""
    counts = {"parsed": 0, "chips": 0, "views": 0, "grids": 0, "pinned": 0, "copied": 0}

    def counting(name, real):
        def call(*args, **kwargs):
            counts[name] += 1
            return real(*args, **kwargs)

        return call

    for module, function, name in (
        (store, "handoff_parts", "parsed"),
        (chips_module, "chips_with", "chips"),
        (index, "view_fields", "views"),
        (store, "view_fields", "views"),
        (cashflow, "read_cashflow", "grids"),
        (index, "read_pinned", "pinned"),
        (update_library, "checked_bytes", "copied"),
    ):
        monkeypatch.setattr(module, function, counting(name, getattr(module, function)))
    return counts


DERIVED = ("parsed", "chips", "views", "grids")


def test_an_unchanged_run_is_checked_again_and_not_parsed_again(tmp_path, monkeypatch):
    cited_run(tmp_path, "run-a")
    counts = counted(monkeypatch)
    update_library.update_library(tmp_path)
    first = dict(counts)
    assert first["parsed"] == 2 and first["chips"] == 2 and first["views"] == 2
    update_library.update_library(tmp_path)
    # Nothing is parsed again; every pinned file is read and its hash compared again.
    assert {name: counts[name] - first[name] for name in DERIVED} == dict.fromkeys(DERIVED, 0)
    assert counts["pinned"] == 2 * first["pinned"] and counts["copied"] == 2 * first["copied"]
    assert first["pinned"] and first["copied"]


def test_a_new_run_is_parsed_and_the_runs_already_published_are_not(tmp_path, monkeypatch):
    cited_run(tmp_path, "run-a")
    update_library.update_library(tmp_path)
    counts = counted(monkeypatch)
    cited_run(tmp_path, "run-b", issuer_id="oak", issuer_name="Oakfield Synthetic plc")
    library = update_library.update_library(tmp_path)
    assert [run["id"] for run in library.runs] == ["run-a", "run-b"]
    assert {name: counts[name] for name in DERIVED} == {
        "parsed": 2,
        "chips": 2,
        "views": 2,
        "grids": 0,
    }


def test_later_publications_write_the_bytes_a_first_one_writes(tmp_path, monkeypatch):
    cited_run(tmp_path, "run-a")
    cited_run(tmp_path, "run-b", issuer_id="oak", issuer_name="Oakfield Synthetic plc")
    plain = published_without_reuse(tmp_path, monkeypatch)
    assert STORE.hits == 0 and len(STORE) == 0
    cold = published(tmp_path)
    assert STORE.hits == 0 and len(STORE) > 0
    warm = published(tmp_path)
    assert STORE.hits > 0
    again = published(tmp_path)
    assert plain == cold == warm == again
    assert "downloads/run-a/handoffs.zip" in warm and "data.js" in warm


def test_a_removed_and_an_added_run_publish_as_a_first_publication_would(tmp_path, monkeypatch):
    cited_run(tmp_path, "run-a")
    cited_run(tmp_path, "run-b", issuer_id="oak", issuer_name="Oakfield Synthetic plc")
    published(tmp_path)
    (tmp_path / "runs/run-b").rename(tmp_path / "set-aside")
    cited_run(tmp_path, "run-c", issuer_id="elm", issuer_name="Elmstead Synthetic SA")
    warm = published(tmp_path)
    assert warm == published_without_reuse(tmp_path, monkeypatch)
    assert not [name for name in warm if name.startswith("downloads/run-b/")]
    assert [name for name in warm if name.startswith("downloads/run-c/")]


def test_a_handoff_changed_after_a_publication_is_refused_on_the_next(tmp_path, monkeypatch):
    run = cited_run(tmp_path, "run-a")
    cited_run(tmp_path, "run-b", issuer_id="oak", issuer_name="Oakfield Synthetic plc")
    before = published(tmp_path)
    (handoff,) = run.glob("deliveries/*/CP-1.md")
    original = handoff.read_bytes()
    handoff.write_bytes(original[:-2] + bytes([original[-2] ^ 1]) + original[-1:])

    library = update_library.update_library(tmp_path)
    warm = tree(tmp_path / "library")
    assert [r["id"] for r in library.runs] == ["run-b"]
    ((folder, reason),) = library.excluded
    assert folder == "run-a" and "CP-1.md no longer has its recorded sha256" in reason
    # Exactly what a publication that kept nothing writes, and nothing of the refused run.
    assert warm == published_without_reuse(tmp_path, monkeypatch)
    assert not [name for name in warm if name.startswith("downloads/run-a/")]
    kept = {name: raw for name, raw in before.items() if name.startswith("downloads/run-b/")}
    assert kept and kept == {n: r for n, r in warm.items() if n.startswith("downloads/run-b/")}

    handoff.write_bytes(original)
    assert published(tmp_path) == before


def test_a_view_changed_after_a_publication_is_refused_on_the_next(tmp_path):
    run = cited_run(tmp_path, "run-a")
    assert [r["id"] for r in update_library.update_library(tmp_path).runs] == ["run-a"]
    (view,) = run.glob("deliveries/*/view.json")
    view.write_bytes(view.read_bytes() + b" ")
    library = update_library.update_library(tmp_path)
    assert library.runs == []
    assert "view.json no longer has its recorded sha256" in library.excluded[0][1]


def test_a_handoff_changed_while_its_downloads_are_written_is_still_refused(tmp_path, monkeypatch):
    run = cited_run(tmp_path, "run-a")
    before = published(tmp_path)
    (handoff,) = run.glob("deliveries/*/CP-1.md")
    real = update_library.handoff_zips

    def changed_first(*args):
        handoff.write_bytes(handoff.read_bytes() + b"\n")
        return real(*args)

    monkeypatch.setattr(update_library, "handoff_zips", changed_first)
    with pytest.raises(index.Refused, match="changed during the build"):
        update_library.update_library(tmp_path)
    assert tree(tmp_path / "library") == before  # the previous publication stays


def test_chips_follow_a_source_text_file_changed_after_a_publication(tmp_path, monkeypatch):
    run = cited_run(tmp_path, "run-a")
    source = run / "source-text" / SOURCE_NAME
    first = published(tmp_path)
    for change in (
        lambda: source.write_bytes(SOURCE_PAGES + b" "),  # no longer the inventory's hash
        lambda: source.write_bytes(b"not json\n"),
        source.unlink,
        lambda: source.write_bytes(SOURCE_PAGES),
    ):
        change()
        warm = published(tmp_path)
        assert warm == published_without_reuse(tmp_path, monkeypatch)
    assert warm == first
    assert b"hash_matches_inventory" in first["data.js"]


def test_a_kept_value_is_a_copy_and_a_failure_is_not_kept():
    kept = Derived()
    made = []

    def make() -> dict[str, list[int]]:
        made.append(1)
        return {"rows": [1, 2]}

    first = kept.get("key", make)
    first["rows"].append(3)  # what a later stage does to its copy stays its own
    assert kept.get("key", make) == {"rows": [1, 2]} and len(made) == 1
    assert kept.get("key", make, current=lambda value: False) == {"rows": [1, 2]}
    assert len(made) == 2  # a kept value that is no longer current is made again

    def fail() -> None:
        raise ValueError("unreadable")

    for _ in range(2):
        with pytest.raises(ValueError, match="unreadable"):
            kept.get("other", fail)
    assert len(kept) == 1


def test_the_store_is_bounded_and_drops_the_least_recently_used():
    kept = Derived(limit=400)
    for name in ("a", "b", "c"):
        kept.get(name, lambda: b"x" * 150)
    assert kept.size <= 400 and len(kept) == 2
    made = []
    kept.get("b", lambda: made.append("b"))  # still held, and now the most recently used
    kept.get("d", lambda: b"x" * 150)
    kept.get("b", lambda: made.append("b"))
    kept.get("c", lambda: made.append("c"))
    assert made == ["c"]
    assert kept.get("large", lambda: b"x" * 500) == b"x" * 500
    assert kept.size <= 400  # a value over the bound is computed and never held


def test_nothing_is_kept_outside_a_publication():
    made = []
    for _ in range(2):
        derived("key", lambda: made.append(1))
    assert len(made) == 2 and len(STORE) == 0
    with reuse(Derived()) as kept:
        for _ in range(2):
            derived("key", lambda: made.append(1))
    assert len(made) == 3 and kept.hits == 1 and len(STORE) == 0


def test_a_value_that_cannot_be_copied_is_returned_and_not_kept():
    store = Derived()
    deep: dict = {}
    inner = deep
    for _ in range(100_000):  # json.loads reads this depth; pickle cannot copy it
        inner["mode"] = {}
        inner = inner["mode"]
    calls = []

    def compute(value):
        calls.append(1)
        return value

    for value in (deep, lambda: None):
        calls.clear()
        with reuse(store):
            assert derived(("kind", id(value)), lambda v=value: compute(v)) is value
            assert derived(("kind", id(value)), lambda v=value: compute(v)) is value
        assert len(calls) == 2 and len(store) == 0


def test_a_grid_that_could_not_be_laid_out_is_tried_again(monkeypatch):
    """The same four files and handoff: a failure of the moment is not the answer for good."""
    inputs = {name: name.encode() for name in cashflow.CASHFLOW_FILES}
    files = dict.fromkeys(cashflow.CASHFLOW_FILES, "pinned")
    answers = [(None, ("layout", "MemoryError: ")), ({"rows": []}, None), "not asked again"]
    monkeypatch.setattr(cashflow, "read_cashflow", lambda *_: answers.pop(0))
    ask = cashflow.GridAsk(None, None)
    store = Derived()
    with reuse(store):
        issues: list[str] = []
        assert cashflow.cashflow_or_issues("run", files, inputs, ask, issues) is None
        assert issues == ["run: the cash flow model could not be laid out (MemoryError: )"]
        for _ in range(2):
            issues = []
            assert cashflow.cashflow_or_issues("run", files, inputs, ask, issues) == {"rows": []}
            assert issues == []
    assert answers == ["not asked again"]
