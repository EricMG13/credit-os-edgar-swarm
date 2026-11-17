"""T22: display the score's accepted inputs without another score calculation."""

import pytest
from credit_os import store

from deploy_workflow import confidence

ROWS = [
    ("Directly Sourced", "8"),
    ("Calculated", "2"),
    ("Assumption-Based", "2"),
    ("Analyst Inference", "0"),
    ("Weak Lineage", "0"),
    ("Untraced", "0"),
    ("Conflicting", "0"),
    ("Insufficient Information", "0"),
    ("Fields present", "95"),
    ("Fields total", "100"),
    ("Source gate", "pass"),
    ("CRITICAL", "0"),
    ("MATERIAL", "0"),
    ("MINOR", "1"),
]


def handoff(separator=True, split=False):
    lines = ["## Findings", "### Confidence inputs", "| Input | Value |"]
    if separator:
        lines.append("| --- | --- |")
    for index, (label, value) in enumerate(ROWS):
        if split and index == 8:
            lines.extend(["", "These are required-field counts, not financial amounts.", ""])
        lines.append(f"| {label} | {value} |")
    return "\n".join(lines)


@pytest.mark.parametrize("separator,split", [(True, False), (False, False), (True, True)])
def test_projection_uses_all_inputs_the_score_parser_accepted(separator, split):
    text = handoff(separator, split)
    result = store.confidence_fields(text.encode())
    assert result["confidence"] == {"value": 89, "band": "High"}
    assert result["confidenceTrace"]["inputs"] == [
        {"label": label, "value": value} for label, value in ROWS
    ]
    # The independent accepted-input authority sees the same strings, in the same source order.
    assert list(confidence.inputs(text).items()) == ROWS


def test_projection_states_the_existing_method_caps_rounding_and_bands():
    method = store.confidence_fields(handoff().encode())["confidenceTrace"]["method"]
    rows = {item["label"]: item["value"] for item in method}
    assert (
        rows["Formula"] == "(0.6 × evidence quality + 0.4 × field coverage) × source-gate factor "
        "− finding penalties"
    )
    assert rows["Lineage weights"] == (
        "Directly Sourced 1.0; Calculated 0.9; Assumption-Based 0.5; Analyst Inference 0.4; "
        "Weak Lineage 0.3; Untraced 0.0; Conflicting 0.0; Insufficient Information 0.0"
    )
    assert rows["Source-gate factors"] == "pass 1.0; partial 0.7; fail 0.0"
    assert rows["Finding penalties"] == "CRITICAL 40; MATERIAL 15; MINOR 3 points per finding"
    assert "39" in rows["Caps and rounding"] and "59" in rows["Caps and rounding"]
    assert "half to even" in rows["Caps and rounding"]
    assert rows["Bands"] == "80–100 High; 60–79 Medium; 40–59 Low; 0–39 Insufficient Information"


def test_projection_preserves_zero_and_raw_count_spelling_and_does_not_score_twice(monkeypatch):
    text = handoff().replace("| Directly Sourced | 8 |", "| Directly Sourced | 0008 |")
    calls = []
    original = confidence.score

    def counted(*args, **kwargs):
        calls.append(True)
        return original(*args, **kwargs)

    monkeypatch.setattr(confidence, "score", counted)
    result = store.confidence_fields(text.encode())
    assert result["confidence"] == {"value": 89, "band": "High"}
    assert result["confidenceTrace"]["inputs"][0] == {"label": "Directly Sourced", "value": "0008"}
    assert result["confidenceTrace"]["inputs"][3] == {"label": "Analyst Inference", "value": "0"}
    assert len(calls) == 1


def test_projection_ignores_a_fenced_example_and_never_fills_missing_or_blocked_inputs():
    example = "## Findings\n```md\n### Confidence inputs\n| Input | Value |\n| MINOR | 999 |\n```\n"
    result = store.confidence_fields((example + handoff()).encode())
    assert result["confidenceTrace"]["inputs"][-1] == {"label": "MINOR", "value": "1"}
    missing = store.confidence_fields(handoff().replace("| MINOR | 1 |", "").encode())
    assert missing == {"confidence": {"missing": "the inputs table is missing rows"}}
    blocked = (
        "## Findings\n### Bottom line\nNot assessable: no source.\n"
        "### Confidence inputs\n| Input | Value |\n| --- | --- |\n"
        "| Not assessable | Not supplied: no source |\n"
    )
    assert store.confidence_fields(blocked.encode()) == {
        "confidence": {"missing": "the module was blocked, so no score is computed"}
    }
    assert store.confidence_fields(b"## Findings\n### Bottom line\nOlder handoff.") == {}
