from decimal import Decimal

from deploy_workflow.inbox import runs
from deploy_workflow.inbox.layout import Layout
from deploy_workflow.model.budget import Budget
from react_frontend.run_activity import _cap, _usage, reply


def test_usage_separates_settled_charges_and_unknown_or_open_holds(tmp_path):
    budget = Budget(Decimal(20), tmp_path / "live")
    budget.reserve("settled", Decimal(2), config_id="sol-medium")
    budget.settle("settled", Decimal("1.25"))
    budget.reserve("unknown", Decimal(3), config_id="sol-medium")
    budget.settle("unknown", None)
    assert _usage(tmp_path) == {
        "spent": "4.25",
        "settled_spent": "1.25",
        "held": "3",
    }


def test_usage_counts_a_crash_left_reservation_as_held(tmp_path):
    budget = Budget(Decimal(20), tmp_path / "live")
    budget.reserve("open", Decimal(4), config_id="sol-medium")

    assert _usage(tmp_path) == {"spent": "4", "settled_spent": "0", "held": "4"}


def test_usage_is_unavailable_when_journal_cannot_be_read(tmp_path):
    (tmp_path / "live").mkdir()
    (tmp_path / "live" / "owner-run-audit").mkdir()
    (tmp_path / "live" / "owner-run-audit" / "reservations").write_text("bad")

    assert _usage(tmp_path) == {"spent": None, "settled_spent": None, "held": None}


def test_usage_does_not_report_zero_when_live_path_is_not_a_directory(tmp_path):
    (tmp_path / "live").write_text("unreadable", encoding="utf-8")

    assert _usage(tmp_path) == {"spent": None, "settled_spent": None, "held": None}


def test_activity_uses_recorded_selected_or_legacy_pathway_cap(tmp_path):
    layout = Layout(tmp_path)
    layout.state.mkdir(parents=True)
    cases = (
        ("legacy-full", "credit_snapshot", "", "20"),
        ("legacy-lite", "lite_credit_assessment", "", "15"),
        ("selected-full", "credit_snapshot", "23", "23"),
    )
    for run_id, pathway, cap, expected in cases:
        record = runs.Record(
            id=run_id,
            pathway=pathway,
            folder=run_id,
            status="finished",
            claimed_at="2026-11-16T12:00:00Z",
            cap=cap,
        )
        runs.save(layout, record)
        (layout.runs / run_id).mkdir(parents=True)
        response = reply(layout, run_id)
        assert response.body["cap"] == expected


def test_activity_cap_missing_and_pinned_legacy_workflow_cap():
    assert _cap({}, None) is None
    assert _cap({"provider_cap_usd": "50.00"}, "25") == "50.00"
