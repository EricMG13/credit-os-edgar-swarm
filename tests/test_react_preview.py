"""Retained previews copy source inputs without changing their historical run."""

import json
from pathlib import Path

import pytest

from react_frontend.preview import stage


@pytest.mark.parametrize("linked_publication", [False, True])
def test_preview_copies_source_authority_and_preserves_originals(
    tmp_path: Path, linked_publication: bool
) -> None:
    engine = tmp_path / "original"
    run = engine / "runs/case"
    for child in (run / "inputs", run / "deliveries", engine / "library"):
        child.mkdir(parents=True)
    raw = b"Retained source\x0csecond page"
    (run / "inputs/digest").write_bytes(raw)
    (run / "workflow.json").write_text('{"sources":{}}')
    (run / "deliveries/CP-1.md").write_text("Original handoff")
    publication = tmp_path / "historical-data.js"
    publication.write_text("Original publication")
    if linked_publication:
        (engine / "library/data.js").symlink_to(publication)
    else:
        (engine / "library/data.js").write_text("Original publication")
    snapshot = tmp_path / "snapshot.json"
    data = {"preview": {"reason": "Retained method check"}, "workspace": {"runs": {"case": {}}}}
    snapshot.write_text(json.dumps(data))
    destination = tmp_path / "preview"
    stage(engine, snapshot, "case", destination)
    assert (destination / "_engine/runs/case/inputs/digest").read_bytes() == raw
    assert (destination / "_engine/runs/case/workflow.json").read_bytes() == (
        run / "workflow.json"
    ).read_bytes()
    assert (engine / "library/data.js").read_text() == "Original publication"
    assert publication.read_text() == "Original publication"
    assert not (destination / "_engine/library/data.js").is_symlink()
    assert "Retained method check" in (destination / "_engine/library/data.js").read_text()
    with pytest.raises(ValueError, match="empty"):
        stage(engine, snapshot, "case", destination)
    with pytest.raises(ValueError, match="invalid run"):
        stage(engine, snapshot, "../case", tmp_path / "bad")
    data["preview"] = {}
    snapshot.write_text(json.dumps(data))
    with pytest.raises(ValueError, match="qualification"):
        stage(engine, snapshot, "case", tmp_path / "unqualified")
