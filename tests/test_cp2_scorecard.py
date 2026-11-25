"""CP-2's credit scorecard registers (T2.13 Credit scorecard, T2.14 Credit assessment).

Scope: offline and synthetic. Every handoff here is hand-written for the test; no model wrote one.
Expected values are written by hand from the owner's ruling R9 (2026-11-25,
`docs/superpowers/specs/2026-11-25-deliverables-credit-snapshot.md` § 1 and § 4.2) and are never
read from the constants of the code under test.
"""

from pathlib import Path

import library_fixtures  # noqa: F401  (puts the issuer library's `credit_os` on the path)
import pytest
from credit_os import store

from deploy_workflow import cp2_scorecard, method_scripts
from deploy_workflow.cp2_scorecard import (
    Assessment,
    FactorScore,
    ScorecardError,
    parse_scorecard,
    scorecard_faults,
)
from deploy_workflow.owners import cpos_launch

ROOT = Path(__file__).resolve().parents[1]

# The ruling's 17 factors, in its order, typed by hand.
RULED_FACTORS = [
    "Scale",
    "Market position",
    "Regulatory exposure",
    "Technology",
    "Barriers to entry",
    "Leverage",
    "Free cash flow",
    "Liquidity",
    "Rating trend",
    "Geographic diversification",
    "Product diversification",
    "Market share",
    "Customer concentration",
    "Market access",
    "Maturity profile",
    "Interest cover",
    "Financial policy",
]
# Synthetic levels, one per factor in the ruling's order.
LEVELS = [2, 2, 3, 3, 2, 4, 3, 2, 3, 3, 2, 2, 4, 3, 5, 4, 1]
BASIS = "annual.txt, page 2: synthetic evidence for {}"
SCORECARD_HEAD = ["### T2.13 - Credit scorecard", "", "| Factor | Level | Basis |", "|---|---|---|"]
ASSESSMENT_HEAD = [
    "### T2.14 - Credit assessment",
    "",
    "| Assessment | View | Basis |",
    "|---|---|---|",
]
ASSESSMENT_ROWS = [
    "| Management | Positive | annual.txt, page 3: guidance met in each of three years |",
    "| Sector Outlook | Neutral | annual.txt, page 4: flat end-market volumes |",
    "| Sponsor Quality | Negative | Supplied ownership register: two debt-funded dividends |",
    "| Credit Direction | Deteriorating | annual.txt, page 2: leverage rose in each period |",
]


def scorecard_rows(levels=LEVELS, factors=RULED_FACTORS) -> list[str]:
    return [
        f"| {factor} | {level} | {BASIS.format(factor.lower())} |"
        for factor, level in zip(factors, levels, strict=True)
    ]


def handoff(scorecard: list[str] | None = None, assessment: list[str] | None = None) -> str:
    """A synthetic CP-2 handoff: the fixed sections, then whichever of the two registers."""
    lines = ["## Findings", "", "### Bottom line", "", "The synthetic issuer is leveraged.", ""]
    lines += ["### Limitations", "", "- Synthetic data only.", ""]
    for head, rows in ((SCORECARD_HEAD, scorecard), (ASSESSMENT_HEAD, assessment)):
        if rows is not None:
            lines += [*head, *rows, ""]
    lines += ["## Calculations", "", "None.", "", "## Gaps", "", "None.", ""]
    return "\n".join(lines)


COMPLETE = handoff(scorecard_rows(), ASSESSMENT_ROWS)
# Synthetic: a CP-2 handoff as written before the scorecard existed (the canned proof handoff's
# shape, T2.1, T2.10 and T2.12 only).
OLD_HANDOFF = "\n".join(
    [
        *("## Findings", "", "### Bottom line", "", "The synthetic issuer shows one item.", ""),
        *("### Limitations", "", "- Synthetic data only.", ""),
        *("### T2.1 - Register", "", "| Item | Value |", "| --- | --- |", "| Observed | 1 |", ""),
        *("### T2.10 - Register", "", "| Item | Value |", "| --- | --- |", "| Observed | 1 |", ""),
        "### T2.12 Monitoring triggers",
        "",
        "| Trigger | Threshold / Signal | Why It Matters | Credit Impact | Source / Limitation |",
        "| --- | --- | --- | --- | --- |",
        "| Interest cover | Below 3.1x | Lower cash cover | Less headroom | Filing p.1 |",
        "",
        *("## Calculations", "", "None.", "", "## Gaps", "", "None.", ""),
    ]
)


def replaced(old: str, new: str, text: str = COMPLETE) -> str:
    assert text.count(old) == 1, old
    return text.replace(old, new)


def faults_of(text: str) -> tuple[str, ...]:
    """The faults, which `parse_scorecard` must raise with exactly."""
    faults = scorecard_faults(text)
    assert faults, "expected a fault"
    with pytest.raises(ScorecardError) as raised:
        parse_scorecard(text)
    assert raised.value.faults == faults
    assert isinstance(raised.value, ValueError)
    return faults


# --- the three outcomes: absent, read (scored or not scored), malformed ----------------------


def test_complete_tables_are_read_in_the_rulings_order():
    assert scorecard_faults(COMPLETE) == ()
    card = parse_scorecard(COMPLETE)
    assert card is not None
    assert [f.factor for f in card.factors] == RULED_FACTORS
    assert [f.level for f in card.factors] == LEVELS
    assert card.factors[5] == FactorScore(
        "Leverage", 4, "annual.txt, page 2: synthetic evidence for leverage"
    )
    assert card.assessments == (
        Assessment(
            "Management", "Positive", "annual.txt, page 3: guidance met in each of three years"
        ),
        Assessment("Sector Outlook", "Neutral", "annual.txt, page 4: flat end-market volumes"),
        Assessment(
            "Sponsor Quality", "Negative", "Supplied ownership register: two debt-funded dividends"
        ),
        Assessment(
            "Credit Direction",
            "Deteriorating",
            "annual.txt, page 2: leverage rose in each period",
        ),
    )


def test_rows_written_in_another_order_are_returned_in_the_rulings_order():
    rows = scorecard_rows()
    text = handoff(list(reversed(rows)), list(reversed(ASSESSMENT_ROWS)))
    card = parse_scorecard(text)
    assert card is not None
    assert [f.factor for f in card.factors] == RULED_FACTORS
    assert [f.level for f in card.factors] == LEVELS
    assert [a.name for a in card.assessments] == [
        "Management",
        "Sector Outlook",
        "Sponsor Quality",
        "Credit Direction",
    ]


@pytest.mark.parametrize("words", ["Not scored", "not scored", "NOT SCORED", "**Not scored**"])
def test_an_unscored_factor_is_read_as_no_level_not_as_a_fault(words):
    rows = scorecard_rows()
    rows[2] = f"| Regulatory exposure | {words} | No evidence in this run |"
    rows[3] = f"| Technology | {words} | — |"  # an unscored row owes no Basis
    text = handoff(rows, ASSESSMENT_ROWS)
    assert scorecard_faults(text) == ()
    card = parse_scorecard(text)
    assert card is not None
    assert card.factors[2] == FactorScore("Regulatory exposure", None, "No evidence in this run")
    assert card.factors[3] == FactorScore("Technology", None, "")
    scored = [f.level for f in card.factors if f.level is not None]
    assert scored == LEVELS[:2] + LEVELS[4:]


def test_an_assessment_without_evidence_is_read_as_no_view():
    text = replaced(
        "| Sponsor Quality | Negative | Supplied ownership register: two debt-funded dividends |",
        "| Sponsor Quality | Not assessed | No sponsor: the issuer is listed and widely held |",
    )
    card = parse_scorecard(text)
    assert card is not None
    assert card.assessments[2] == Assessment(
        "Sponsor Quality", None, "No sponsor: the issuer is listed and widely held"
    )
    assert card.assessments[0].view == "Positive"


def test_an_older_handoff_without_either_register_is_absent_not_an_error():
    assert parse_scorecard(OLD_HANDOFF) is None
    assert parse_scorecard("") is None
    # ... and still short of what a current CP-2 owes: both registers are named.
    faults = scorecard_faults(OLD_HANDOFF)
    assert len(faults) == 2
    assert "T2.13" in faults[0] and "T2.14" in faults[1]


@pytest.mark.parametrize(
    ("scorecard", "assessment", "missing"),
    [(scorecard_rows(), None, "T2.14"), (None, ASSESSMENT_ROWS, "T2.13")],
)
def test_one_register_without_the_other_is_malformed(scorecard, assessment, missing):
    faults = faults_of(handoff(scorecard, assessment))
    assert len(faults) == 1
    assert f"no {missing} register" in faults[0]


# --- shape faults ----------------------------------------------------------------------------


@pytest.mark.parametrize(
    "level", ["3 (Satisfactory)", "3/5", "2.5", "0", "6", "", "Satisfactory", "-1", "3.", "n/a"]
)
def test_a_level_that_is_not_one_to_five_or_not_scored_is_a_fault(level):
    rows = scorecard_rows()
    rows[5] = f"| Leverage | {level} | annual.txt, page 2 |"
    faults = faults_of(handoff(rows, ASSESSMENT_ROWS))
    assert len(faults) == 1
    assert "T2.13" in faults[0] and "Leverage" in faults[0]
    assert "1, 2, 3, 4, 5" in faults[0] and "`Not scored`" in faults[0]


@pytest.mark.parametrize("level", ["**3**", " 3 ", "`3`"])
def test_emphasis_and_spacing_around_a_level_are_not_wording(level):
    rows = scorecard_rows()
    rows[5] = f"| Leverage | {level} | annual.txt, page 2 |"
    card = parse_scorecard(handoff(rows, ASSESSMENT_ROWS))
    assert card is not None and card.factors[5].level == 3


def test_a_missing_factor_is_named():
    rows = scorecard_rows()
    del rows[7]  # Liquidity
    faults = faults_of(handoff(rows, ASSESSMENT_ROWS))
    assert len(faults) == 1
    assert "T2.13" in faults[0] and "Liquidity" in faults[0]
    assert "Maturity profile" not in faults[0]


def test_a_duplicate_factor_is_a_fault_even_when_both_rows_agree():
    rows = scorecard_rows()
    rows.append(rows[0])
    faults = faults_of(handoff(rows, ASSESSMENT_ROWS))
    assert len(faults) == 1
    assert "T2.13" in faults[0] and "Scale" in faults[0] and "more than once" in faults[0]


def test_an_extra_factor_is_a_fault_and_names_the_row():
    rows = [*scorecard_rows(), "| Probability of default | 3 | annual.txt, page 2 |"]
    faults = faults_of(handoff(rows, ASSESSMENT_ROWS))
    assert len(faults) == 1
    assert "T2.13" in faults[0] and "Probability of default" in faults[0]


def test_a_renamed_factor_is_both_an_unknown_row_and_a_missing_factor():
    rows = scorecard_rows()
    rows[6] = "| FCF | 3 | annual.txt, page 2 |"
    faults = faults_of(handoff(rows, ASSESSMENT_ROWS))
    assert len(faults) == 2
    assert any("`FCF`" in f for f in faults)
    assert any("Free cash flow" in f and "missing" in f.lower() for f in faults)


@pytest.mark.parametrize("written", ["**Scale**", "scale", "  SCALE ", "_Scale_", "`Scale`"])
def test_a_factor_name_is_matched_without_emphasis_case_or_spacing(written):
    rows = scorecard_rows()
    rows[0] = f"| {written} | 2 | annual.txt, page 2 |"
    card = parse_scorecard(handoff(rows, ASSESSMENT_ROWS))
    assert card is not None and card.factors[0] == FactorScore("Scale", 2, "annual.txt, page 2")


def test_inner_spacing_of_a_factor_name_is_collapsed():
    rows = scorecard_rows()
    rows[1] = "| Market   position | 2 | annual.txt, page 2 |"
    card = parse_scorecard(handoff(rows, ASSESSMENT_ROWS))
    assert card is not None and card.factors[1].factor == "Market position"


@pytest.mark.parametrize("basis", ["", " ", "-", "—", "–", "n/a", "N/A", "**-**"])
def test_a_scored_row_without_a_basis_is_a_fault(basis):
    rows = scorecard_rows()
    rows[5] = f"| Leverage | 4 | {basis} |"
    faults = faults_of(handoff(rows, ASSESSMENT_ROWS))
    assert len(faults) == 1
    assert "T2.13" in faults[0] and "Leverage" in faults[0] and "Basis" in faults[0]


@pytest.mark.parametrize(
    ("name", "view"),
    [
        ("Management", "Stable"),
        ("Management", "Improving"),
        ("Sector Outlook", "Deteriorating"),
        ("Sponsor Quality", "Strong"),
        ("Credit Direction", "Positive"),
        ("Credit Direction", "Negative"),
        ("Credit Direction", "Neutral"),
        ("Management", ""),
        ("Management", "Positive / Neutral"),
        ("Management", "Not scored"),
    ],
)
def test_a_view_outside_the_rows_own_vocabulary_is_a_fault(name, view):
    rows = [r for r in ASSESSMENT_ROWS if not r.startswith(f"| {name} |")]
    rows.append(f"| {name} | {view} | annual.txt, page 2 |")
    faults = faults_of(handoff(scorecard_rows(), rows))
    assert len(faults) == 1
    assert "T2.14" in faults[0] and name in faults[0]
    allowed = (
        "Improving, Stable, Deteriorating"
        if name == "Credit Direction"
        else "Positive, Neutral, Negative"
    )
    assert allowed in faults[0] and "`Not assessed`" in faults[0]


@pytest.mark.parametrize(
    ("name", "views"),
    [
        ("Management", ["Positive", "Neutral", "Negative"]),
        ("Sector Outlook", ["Positive", "Neutral", "Negative"]),
        ("Sponsor Quality", ["Positive", "Neutral", "Negative"]),
        ("Credit Direction", ["Improving", "Stable", "Deteriorating"]),
    ],
)
def test_every_ruled_view_is_accepted_for_its_row(name, views):
    position = ["Management", "Sector Outlook", "Sponsor Quality", "Credit Direction"].index(name)
    for view in views:
        rows = list(ASSESSMENT_ROWS)
        rows[position] = f"| {name} | {view.upper()} | annual.txt, page 2 |"
        card = parse_scorecard(handoff(scorecard_rows(), rows))
        assert card is not None
        assert card.assessments[position] == Assessment(name, view, "annual.txt, page 2")


def test_assessment_rows_missing_duplicated_extra_or_without_basis_are_faults():
    rows = [
        ASSESSMENT_ROWS[0],
        ASSESSMENT_ROWS[0],
        "| Sector Outlook | Neutral | — |",
        "| Governance | Positive | annual.txt, page 2 |",
        ASSESSMENT_ROWS[3],
    ]
    faults = faults_of(handoff(scorecard_rows(), rows))
    assert len(faults) == 4
    text = " ".join(faults)
    assert "Management" in text and "more than once" in text
    assert "Sector Outlook" in text and "Basis" in text
    assert "`Governance`" in text
    assert "Sponsor Quality" in text
    assert all("T2.14" in f for f in faults)


def test_every_fault_of_both_registers_is_listed_at_once():
    rows = scorecard_rows()
    rows[5] = "| Leverage | 3/5 | annual.txt, page 2 |"
    del rows[0]
    assessment = [r.replace("| Negative |", "| Weak |") for r in ASSESSMENT_ROWS]
    faults = faults_of(handoff(rows, assessment))
    assert len(faults) == 3
    assert [f.split(" ")[0].strip(":'s") for f in faults] == ["T2.13", "T2.13", "T2.14"]


@pytest.mark.parametrize(
    "header",
    [
        "| Factor | Score | Basis |",
        "| Factor | Level |",
        "| Factor | Level | Basis | Source |",
        "| Level | Factor | Basis |",
    ],
)
def test_other_columns_are_a_fault_that_states_the_columns(header):
    width = header.count("|") - 1
    rows = ["| " + " | ".join(["x"] * width) + " |"]
    text = "\n".join(
        [
            *("### T2.13 - Credit scorecard", "", header, "|" + "---|" * width, *rows, ""),
            *ASSESSMENT_HEAD,
            *ASSESSMENT_ROWS,
            "",
        ]
    )
    faults = faults_of(text)
    assert len(faults) == 1
    assert "T2.13" in faults[0] and "`Factor | Level | Basis`" in faults[0]


def test_a_register_with_no_table_or_written_twice_is_a_fault():
    no_table = handoff(None, ASSESSMENT_ROWS) + "\n### T2.13 - Credit scorecard\n\nSee above.\n"
    (fault,) = faults_of(no_table)
    assert "T2.13" in fault and "no table" in fault
    twice = COMPLETE + "\n" + "\n".join([*SCORECARD_HEAD, *scorecard_rows(), ""])
    (fault,) = faults_of(twice)
    assert "2 T2.13 registers" in fault


def test_tables_inside_a_fenced_code_block_are_not_the_registers():
    fenced = "\n".join(
        [
            *("## Findings", "", "### Bottom line", "", "Synthetic.", "", "```markdown"),
            *SCORECARD_HEAD,
            *scorecard_rows(),
            "",
            *ASSESSMENT_HEAD,
            *ASSESSMENT_ROWS,
            *("```", "", "## Gaps", "", "None.", ""),
        ]
    )
    assert parse_scorecard(fenced) is None
    assert len(scorecard_faults(fenced)) == 2
    assert cpos_launch.scorecard_issues("CP-2", fenced) != ()


def test_a_table_id_tag_heads_a_register_as_a_heading_does():
    text = COMPLETE.replace(
        "### T2.13 - Credit scorecard", "### Credit scorecard\n\n<!-- table-id: T2.13 -->"
    ).replace("### T2.14 - Credit assessment", "### **T2.14** Credit assessment")
    card = parse_scorecard(text)
    assert card is not None and [f.level for f in card.factors] == LEVELS


def test_an_id_cited_in_a_cell_or_mid_heading_is_not_the_register():
    cited = OLD_HANDOFF.replace("| Observed | 1 |", "| T2.13 | T2.14 |", 1).replace(
        "### T2.12 Monitoring triggers", "### Triggers, see T2.13 and T2.14"
    )
    assert parse_scorecard(cited) is None


def test_a_fault_is_a_sentence_that_names_the_register_the_row_and_what_is_allowed():
    rows = scorecard_rows()
    rows[5] = "| Leverage | 3 (Satisfactory) | annual.txt, page 2 |"
    (fault,) = faults_of(handoff(rows, ASSESSMENT_ROWS))
    assert fault == (
        "T2.13 row `Leverage`: Level `3 (Satisfactory)` is not allowed; write exactly one of "
        "1, 2, 3, 4, 5 or `Not scored`."
    )


# --- the launcher's check ----------------------------------------------------------------------


def test_a_cp2_handoff_with_valid_registers_raises_no_scorecard_issue():
    assert cpos_launch.scorecard_issues("CP-2", COMPLETE) == ()


def test_a_cp2_handoff_without_the_registers_gets_one_repair_request_that_says_how_to_head_them():
    issues = cpos_launch.scorecard_issues("CP-2", OLD_HANDOFF)
    assert len(issues) == 1
    (issue,) = issues
    assert "no T2.13 register" in issue and "no T2.14 register" in issue
    assert "`### T2.13 - Credit scorecard`" in issue
    assert "`### T2.14 - Credit assessment`" in issue
    assert "`Factor | Level | Basis`" in issue and "`Assessment | View | Basis`" in issue
    assert "`## Findings`" in issue


def test_every_fault_is_in_the_one_repair_request():
    rows = scorecard_rows()
    rows[5] = "| Leverage | 3/5 | annual.txt, page 2 |"
    rows[7] = "| Liquidity | 2 | n/a |"
    text = handoff(rows, [r.replace("| Neutral |", "| Stable |") for r in ASSESSMENT_ROWS])
    (issue,) = cpos_launch.scorecard_issues("CP-2", text)
    for fault in scorecard_faults(text):
        assert fault in issue
    assert issue.count("T2.13 row") == 2 and issue.count("T2.14 row") == 1


def test_a_blocked_cp2_is_not_asked_for_the_registers():
    blocked = "---\nmodule_id: CP-2\nmodule_status: Blocked\n---\n" + OLD_HANDOFF
    assert cpos_launch.scorecard_issues("CP-2", blocked) == ()
    assert cpos_launch.scorecard_issues("CP-2", blocked.replace("Blocked", "Complete")) != ()


def test_only_cp2_is_asked_for_the_registers():
    for module in cpos_launch.METHODS:
        if module != "CP-2":
            assert cpos_launch.scorecard_issues(module, OLD_HANDOFF) == (), module


def test_the_methods_own_checks_do_not_refuse_the_two_added_registers():
    """The presence check and the method's completeness check judge the registers the method
    lists (T2.1, T2.10, T2.12); two more registers change neither result."""
    with_old = OLD_HANDOFF
    added = "\n".join([*SCORECARD_HEAD, *scorecard_rows(), "", *ASSESSMENT_HEAD, *ASSESSMENT_ROWS])
    with_new = OLD_HANDOFF.replace("## Calculations", added + "\n\n## Calculations")
    assert parse_scorecard(with_new) is not None
    assert cpos_launch.register_issues("CP-2", with_old) == ()
    assert cpos_launch.register_issues("CP-2", with_new) == ()
    assert method_scripts.shared_issues("CP-2", with_new) == method_scripts.shared_issues(
        "CP-2", with_old
    )
    assert method_scripts.issues("CP-2", with_new, {}) == method_scripts.issues(
        "CP-2", with_old, {}
    )


def test_the_scope_section_still_cuts_only_the_methods_scorecard_and_matrix():
    # Hand-copied from CPOS_REGISTER_SCOPE.md § CP-2: T2.13 is not the cut T2.7.
    assert cpos_launch.register_scope("CP-2") == (
        "T2.7 Financial Profile Scorecard; T2.11 Issuer Matrix"
    )
    assert cpos_launch.required_registers("CP-2") == ("T2.1", "T2.10", "T2.12")


# --- the constants a later reader (the Credit Snapshot) relies on --------------------------------


def test_the_constants_are_the_rulings():
    assert list(cp2_scorecard.FACTORS) == RULED_FACTORS
    assert len(set(RULED_FACTORS)) == 17
    assert cp2_scorecard.LEVEL_NAMES == {
        1: "Excellent",
        2: "Strong",
        3: "Satisfactory",
        4: "Weak",
        5: "Poor",
    }
    assert cp2_scorecard.ASSESSMENTS == {
        "Management": ("Positive", "Neutral", "Negative"),
        "Sector Outlook": ("Positive", "Neutral", "Negative"),
        "Sponsor Quality": ("Positive", "Neutral", "Negative"),
        "Credit Direction": ("Improving", "Stable", "Deteriorating"),
    }
    assert (cp2_scorecard.SCORECARD_ID, cp2_scorecard.ASSESSMENT_ID) == ("T2.13", "T2.14")
    assert cp2_scorecard.NOT_SCORED == "Not scored"
    assert cp2_scorecard.NOT_ASSESSED == "Not assessed"


# --- the Risk Rubric table CP-2 is sent --------------------------------------------------------

RUBRIC_HEADING = "9. Risk Rubric level text (transcribed from the owner's rubric image, 2026-11-25)"
RUBRIC_HEAD = "| Factor | 1 | 2 | 3 | 4 | 5 |"


def rubric_document(rows: list[str], head: str = RUBRIC_HEAD) -> str:
    """Synthetic: a document with the rubric section between two others, as the spec holds it."""
    return "\n".join(
        [
            *("# Synthetic", "", "## 8. Before", "", "| A | B |", "|---|---|", "| 1 | 2 |", ""),
            *(f"## {RUBRIC_HEADING}", "", "Levels: 1 Excellent to 5 Poor.", ""),
            *(head, "|---|---|---|---|---|---|", *rows, ""),
            *("Gaps in the rubric as written, for the owner: synthetic.", ""),
            *("## 10. After", "", "| Factor | 1 |", "|---|---|", "| Scale | x |", ""),
        ]
    )


def rubric_rows() -> list[str]:
    return [f"| {factor} | one — a | two | $3–$4 | >four | <five |" for factor in RULED_FACTORS]


def test_the_rubric_table_is_returned_line_for_line_without_its_surroundings():
    table = cp2_scorecard.rubric_table(rubric_document(rubric_rows()))
    assert table.split("\n") == [RUBRIC_HEAD, *rubric_rows()]
    assert "Gaps in the rubric" not in table and "|---" not in table


def tampered(change) -> str:
    rows = rubric_rows()
    change(rows)
    return rubric_document(rows)


@pytest.mark.parametrize(
    ("document", "complaint"),
    [
        (tampered(lambda rows: rows.pop(7)), "17 factors in order"),
        (tampered(lambda rows: rows.append(rows[0])), "17 factors in order"),
        (tampered(lambda rows: rows.reverse()), "17 factors in order"),
        (
            tampered(lambda rows: rows.__setitem__(6, rows[6].replace("Free cash flow", "FCF"))),
            "17 factors in order",
        ),
        (
            tampered(lambda rows: rows.__setitem__(0, rows[0].replace("| Scale |", "| scale |"))),
            "17 factors in order",
        ),
        (
            tampered(lambda rows: rows.__setitem__(5, rows[5].replace("| two |", "|  |"))),
            "`Leverage` must have 5 level cells, none empty",
        ),
        (
            tampered(lambda rows: rows.__setitem__(5, rows[5].replace(" | <five |", " |"))),
            "`Leverage` must have 5 level cells, none empty",
        ),
        (
            tampered(lambda rows: rows.__setitem__(5, rows[5] + " six |")),
            "`Leverage` must have 5 level cells, none empty",
        ),
        (rubric_document(rubric_rows(), "| Factor | 1 | 2 | 3 | 4 |"), "header must be"),
        (rubric_document(rubric_rows(), "| Factor | 5 | 4 | 3 | 2 | 1 |"), "header must be"),
        (rubric_document([]), "17 factors in order"),
        (
            rubric_document(rubric_rows()).replace(RUBRIC_HEADING, "9. Rubric"),
            "expected one section",
        ),
        (rubric_document(rubric_rows()) + f"\n## {RUBRIC_HEADING}\n", "expected one section"),
        ("", "expected one section"),
    ],
)
def test_a_tampered_rubric_is_refused_never_sent_in_part(document, complaint):
    with pytest.raises(ValueError, match="Risk Rubric: ") as raised:
        cp2_scorecard.rubric_table(document)
    assert complaint in str(raised.value)


def test_the_rubric_is_read_from_the_one_source_and_is_not_typed_in_code():
    path, heading = cp2_scorecard.LEVEL_TEXT_SOURCE
    assert path == "docs/superpowers/specs/2026-11-25-deliverables-credit-snapshot.md"
    assert heading == RUBRIC_HEADING
    assert cp2_scorecard.LEVEL_TEXT_DOCUMENT == "docs/methodology/portfolio-recommendation.md"
    document = (ROOT / path).read_text(encoding="utf-8")
    table = cp2_scorecard.level_text()
    lines = table.split("\n")
    assert lines[0] == RUBRIC_HEAD and len(lines) == 18
    for line in lines:
        assert f"\n{line}\n" in document  # each line is the document's, byte for byte
    # Cells typed by hand from the spec's table.
    assert "| Scale | EBITDA > $1bn — large, diversified issuer with global reach | " in table
    assert " | <1.0x (interest not covered) |" in lines[16]
    for name in ("cp2_scorecard.py", "owners/cpos_launch_prompts.py", "owners/cpos_launch.py"):
        code = (ROOT / "src/deploy_workflow" / name).read_text(encoding="utf-8")
        for words in ("diversified issuer", "interest not covered", "shareholder bias"):
            assert words not in code, (name, words)


def test_both_packagers_ship_the_file_the_rubric_is_read_from():
    """The launcher reads the rubric relative to the repository root, as it reads the method
    files; a package without the file could not build CP-2's instructions."""
    path = cp2_scorecard.LEVEL_TEXT_SOURCE[0]
    from tools.package_react_windows import SOURCE_PATHS

    assert any(path == kept or path.startswith(kept + "/") for kept in SOURCE_PATHS)
    packager = (ROOT / "apps/issuer-library/packaging/runtime.py").read_text(encoding="utf-8")
    assert f'RUBRIC_SOURCE = "{path}"' in packager


def test_the_registry_lists_both_registers_for_cp2():
    from deploy_vii.registry import modules

    (cp2,) = [m for m in modules() if m.module_id == "CP-2"]
    assert cp2.table_ids == ("T2.1", "T2.10", "T2.11", "T2.12", "T2.13", "T2.14", "T2.7")


# --- the issuer library reads the registers as it reads any handoff table ----------------------


def test_the_canned_proof_handoff_carries_valid_registers():
    """Synthetic: the canned CP-2 reply of the browser proof (`proof/handoffs/CP-2.md`)."""
    text = (ROOT / "proof/handoffs/CP-2.md").read_text(encoding="utf-8")
    card = parse_scorecard(text)
    assert card is not None
    assert [f.factor for f in card.factors] == RULED_FACTORS
    assert len(card.assessments) == 4
    assert cpos_launch.scorecard_issues("CP-2", text) == ()


def test_the_library_store_keeps_both_tables_whole_under_findings():
    """The library's parser (`credit_os.store.parse_source`) hands the module page every table
    of a handoff as headers and rows; the page's generic rules decide what is drawn
    (web/src/pages/connected/report/ModuleRecords.scorecard.test.tsx)."""
    sections = store.parse_source(COMPLETE)
    by_heading = {s["heading"]: s for s in sections}
    assert next(s["heading"] for s in sections if s["level"] == 2) == "Findings"
    card = by_heading["T2.13 - Credit scorecard"]
    assert card["level"] == 3
    (table,) = card["blocks"]
    assert table["type"] == "table" and table["headers"] == ["Factor", "Level", "Basis"]
    assert [row["cells"][0] for row in table["rows"]] == RULED_FACTORS
    assert [row["cells"][1] for row in table["rows"]] == [str(level) for level in LEVELS]
    assert table["rows"][5]["cells"][2] == "annual.txt, page 2: synthetic evidence for leverage"
    view = by_heading["T2.14 - Credit assessment"]
    (table,) = view["blocks"]
    assert table["headers"] == ["Assessment", "View", "Basis"]
    assert [row["cells"][:2] for row in table["rows"]] == [
        ["Management", "Positive"],
        ["Sector Outlook", "Neutral"],
        ["Sponsor Quality", "Negative"],
        ["Credit Direction", "Deteriorating"],
    ]
    # Both sections sit after `## Findings` and before the next H2.
    order = [s["heading"] for s in sections]
    assert order.index("Findings") < order.index("T2.13 - Credit scorecard")
    assert order.index("T2.14 - Credit assessment") < order.index("Calculations")
