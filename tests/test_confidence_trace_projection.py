"""T22: display the score's accepted inputs without another score calculation."""

import hashlib

import pytest
from credit_os import store

from deploy_workflow import confidence
from deploy_workflow.credit_os_chips import chips

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


def test_projection_keeps_the_exact_source_qualification_when_other_markdown_is_unstructured():
    qualification = (
        "Counts cover FY2025 audited standalone evidence only; overseas subsidiaries are excluded."
    )
    text = (
        "## Findings\n### Earlier supporting table\n| Claim | Value |\n| --- | --- |\n"
        "| Malformed earlier row |\n"
        + handoff().replace("| Input | Value |", qualification + "\n| Input | Value |")
    )
    sections, error = store.structured(text.encode(), False)
    assert error == "Malformed table at line 5"
    assert sections[0]["heading"] == "Unstructured handoff"
    output = store.confidence_fields(text.encode())
    assert output["confidence"] == {"value": 89, "band": "High"}
    assert output["confidenceTrace"]["section"] == {
        "heading": "Confidence inputs",
        "level": 3,
        "line": 7,
        "blocks": [{"type": "text", "line": 8, "end": 8, "text": qualification}],
    }


def test_source_projection_uses_the_scorers_fence_and_heading_rules_for_windows_text():
    text = handoff().replace(
        "### Confidence inputs",
        "### Confidence inputs   \nExact qualification before the table.",
    )
    text += (
        "\n```md\n### Fenced example\nExample qualification, not the recorded scope.\n```\n"
        "Exact qualification after the table.\n# Next section\nUnrelated next-section prose.\n"
    )
    output = store.confidence_fields(text.replace("\n", "\r\n").encode("utf-8-sig"))
    assert output["confidence"] == {"value": 89, "band": "High"}
    section = output["confidenceTrace"]["section"]
    assert section["heading"] == "Confidence inputs"
    assert [block["text"] for block in section["blocks"]] == [
        "Exact qualification before the table.",
        "Exact qualification after the table.",
    ]


def test_projection_keeps_only_the_authoritative_sections_prose_and_its_citation_chips(tmp_path):
    before = (
        "## Findings\n### Earlier supporting table\n"
        "| Claim | Value |\n| --- | --- |\n| Malformed earlier row |\n"
        "Basis: Earlier.pdf, page 2.\n"
        "```md\n### Confidence inputs\nFenced example qualification.\n```\n"
    )
    text = before + handoff().replace(
        "| Input | Value |",
        "Exact standalone qualification.\nBasis: Annual.pdf, page 7.\n\n| Input | Value |",
    )
    text += "\n\nLater input qualification.\n### Limitations\nUnrelated limitation.\n"
    sections, error = store.structured(text.encode(), False)
    assert error
    output = store.confidence_fields(text.encode())
    projected = output["confidenceTrace"]["section"]
    assert [block["text"] for block in projected["blocks"]] == [
        "Exact standalone qualification.\nBasis: Annual.pdf, page 7.",
        "Later input qualification.",
    ]
    source_text = b'{"page": 7, "text": "Exact annual source excerpt."}\n'
    source_hash = hashlib.sha256(source_text).hexdigest()
    source_dir = tmp_path / "runs" / "run-a" / "source-text"
    source_dir.mkdir(parents=True)
    (source_dir / "Annual.pdf").write_bytes(source_text)
    inventory = store.parse_source(
        "### Complete supplied inventory and provenance\n"
        "| Label | Exact supplied source name | Exact sha256 |\n| --- | --- | --- |\n"
        f"| K | Annual.pdf | {source_hash} |\n"
    )
    snapshot = {
        "outputs": {
            "run-a/CP-0.md": {"module": "CP-0", "sha256": "b"},
            "run-a/CP-1.md": {
                "module": "CP-1",
                "sha256": "a",
                **output,
                "parseError": error,
            },
        },
        "handoffs": {"a": sections, "b": inventory},
    }
    citations = chips(tmp_path, snapshot)
    key = f"run-a/CP-1.md:{projected['blocks'][0]['line']}"
    assert key in citations
    (citation,) = citations[key]
    assert citation["file"] == "Annual.pdf"
    assert citation["sha256"] == source_hash
    assert citation["source"] == "K"
    assert citation["page"] == 7
    assert citation["excerpt"] == "Exact annual source excerpt."
