"""Delivery's own reader wording (T16): the sentences the service writes beside module text name
no module code, no tool and no pipeline word. Expected sentences are written here, not read from
the code. Module-written text is not touched by any of these."""

import re

from deploy_workflow.credit_os_chips import MODULE_NAMES, basis_locators, parse_locators
from deploy_workflow.owners import cpos_forecast

READER_BARRED = re.compile(r"\bCP-[A-Z0-9]+\b|\bPython\b|\bhandoffs?\b", re.IGNORECASE)


def test_a_basis_file_missing_from_the_inventory_names_the_inventory_by_its_module_name():
    (got,) = basis_locators("Basis: Other file.pdf, page 3.", {"K.pdf": "K"})
    assert got["kind"] == "gap"
    assert got["note"] == "the Basis file is not in the Source readiness inventory"


ALIASES = ("March filing", "June filing", "Annual filing", "Annual PDF", "Settings")


def test_an_alias_note_names_the_inventory_module_by_its_name_in_both_forms():
    (chosen,) = parse_locators("Annual page:71", ALIASES, ("Annual PDF",))
    assert chosen["note"] == (
        "alias 'Annual' → 'Annual filing' (Annual PDF marked alternate in Source readiness)"
    )
    (ambiguous,) = parse_locators("Annual page:71", ALIASES, ())
    assert ambiguous["note"] == (
        "alias 'Annual' fits 'Annual filing', 'Annual PDF'; Source readiness roles leave "
        "'Annual filing', 'Annual PDF'"
    )


def test_the_forecast_qualifications_name_modules_as_the_library_names_them():
    # cpos_forecast sits below the library in the import layers, so it writes the names out.
    assert MODULE_NAMES["CP-2G"] == "Forward credit model"
    assert MODULE_NAMES["CP-1"] == "Financial foundation"


def test_the_forecast_qualifications_keep_their_meaning_and_name_no_tool_or_pipeline_step():
    layer2 = cpos_forecast.LIMIT
    layer1 = cpos_forecast.LAYER1_LIMIT
    facility = cpos_forecast.FACILITY_LIMIT
    for text in (layer2, layer1, facility, cpos_forecast.scale_limit("USD")):
        assert not READER_BARRED.search(text), text
    # The qualification itself is unchanged: the inputs, not the arithmetic, are unreviewed.
    for text in (layer2, layer1):
        assert "the inputs, not the arithmetic, are unreviewed" in text.lower()
        assert text.endswith("Not analytical review.")
    assert "inputs the Forward credit model stated" in layer2
    assert "run-rate inputs Financial foundation stated" in layer1
    assert "no Forward credit model, case or shock was run" in layer1
    assert facility.endswith(
        "from the facility terms the Forward credit model stated; "
        "the analyst's repayment assumption is not used."
    )


def test_the_scale_qualification_keeps_its_currency_scale_and_divisor():
    text = cpos_forecast.scale_limit("GBP")
    assert "in GBP thousands" in text
    assert "(scale 1000)" in text
    assert "each was divided by 1,000 before any calculation" in text
    assert text.endswith("Every figure here is GBP millions.")
