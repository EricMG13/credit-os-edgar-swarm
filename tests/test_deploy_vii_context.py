from pathlib import Path

import pytest

from deploy_vii.context import ContextRefused, load_context

ROOT = Path(__file__).resolve().parents[1]


def test_research_minimal_context_still_validates() -> None:
    context = load_context((ROOT / "cases/context/research-minimal.json").read_bytes())
    assert context.identity.issuer_id == "northbridge-group"
    assert context.run.pathway == "credit_snapshot"


@pytest.mark.parametrize(
    ("raw", "message"),
    [
        (b'{"schema":"context/1","schema":"context/1"}', "duplicate key"),
        (b'{"schema":"context/1","extra":true}', "extra"),
        (b"[]", "top level must be an object"),
    ],
)
def test_context_reader_rejects_malformed_or_unknown_input(raw: bytes, message: str) -> None:
    with pytest.raises(ContextRefused, match=message):
        load_context(raw)
