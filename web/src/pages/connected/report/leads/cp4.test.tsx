import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { LegalLead } from "./cp4";
import { leadProps } from "./lead.fixture";
import { sectionsOf } from "./markdown.fixture";

afterEach(cleanup);

function handoff(markdown: string, output: Record<string, unknown> = {}): OutputEntry {
  return {
    output: {
      module: "CP-4",
      id: "run/CP-4",
      label: "CP-4",
      sha256: "h",
      href: "CP-4.md",
      ...output,
    },
    sections: sectionsOf(markdown),
    selected: true,
  };
}

function lineOf(markdown: string, heading: string) {
  const section = sectionsOf(markdown).find((item) => item.heading === heading);
  const block = section?.blocks.find((item) => item.type === "table");
  if (!block) throw new Error(`no table under ${heading}`);
  return block.line;
}

const GAP = "Not supplied: not assessable, no executed governing document available";
const ENTITY_GAP =
  "Not supplied: guarantor exhibit, guarantee and collateral agreement and indentures absent, so no edge with applicable document and jurisdiction can be drawn";
const RANK_GAP =
  "Not supplied: intercreditor agreement referenced but absent; no payment-rank, security-rank, enforcement-control, standstill or release edge can be drawn";

// The real blocked CP-4 of the TransDigm FY2024 reference run (outdated evidence, shape only:
// apps/issuer-library/fixtures/shape-key.json and reviews/2026-11-12-module-output-adversarial).
const BLOCKED = `## Findings

### Bottom line

Not assessable: no executed governing document available. The source set holds no executed credit agreement, amendment, guarantee or indenture, and the filing's summaries cannot be used in this transport.

The filing summarises 7.25x net leverage and 5.00x secured net debt incurrence conditions and a springing 7.50x revolver test above 40% usage of USD 364 million.

### Chart data: covenant headroom

| Test | Threshold | Current | Headroom | Direction | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| ${GAP} | ${GAP} | ${GAP} | ${GAP} | ${GAP} | x (net debt to trailing four-quarter EBITDA As Defined) | The filing summarises a springing 7.50x revolver test; not established for this run and not a compliance opinion |

### Map: legal entities

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| ${ENTITY_GAP} | ${ENTITY_GAP} | ${ENTITY_GAP} | ${ENTITY_GAP} | ${ENTITY_GAP} |

### Map: intercreditor

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| ${RANK_GAP} | ${RANK_GAP} | ${RANK_GAP} | ${RANK_GAP} | ${RANK_GAP} |
`;

const reasonOf = (cell: string) => cell.replace("Not supplied: ", "");

function blockedEntry() {
  return handoff(BLOCKED, {
    chartGaps: [
      {
        title: "Covenant headroom",
        table: lineOf(BLOCKED, "Chart data: covenant headroom"),
        gap: reasonOf(GAP),
      },
    ],
    maps: [
      {
        name: "legal entities",
        table: lineOf(BLOCKED, "Map: legal entities"),
        gap: reasonOf(ENTITY_GAP),
      },
      {
        name: "intercreditor",
        table: lineOf(BLOCKED, "Map: intercreditor"),
        gap: reasonOf(RANK_GAP),
      },
    ],
  });
}

// The synthetic proof handoff (proof/handoffs/CP-4.md), rows copied, with a T4C.5 built from the
// CP-4 method's header (docs/reuse/selected-methods/skills/CP-4).
const SYNTHETIC = `## Findings

### Bottom line

The synthetic issuer shows one observed item.

### Chart data: covenant headroom

| Test | Threshold | Current | Headroom | Direction | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Net leverage | 5.0 | 4.2 | 0.8x | Passes at or below | x | Synthetic. |
| Interest cover | 2.0 | 2.6 | 0.6x | Passes at or above | x | Synthetic. |
| Minimum liquidity | 100 | Not supplied: not stated | Not supplied: no current | Passes at or above | US$m | Synthetic. |

### Map: legal entities

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Synthetic A | Synthetic link | Ownership | Synthetic B | Synthetic p.1 |

### Map: intercreditor

| From | Relationship | Edge type | To | Evidence |
| --- | --- | --- | --- | --- |
| Synthetic A | Synthetic link | Payment rank | Synthetic B | Synthetic p.1 |

### T4C.5 — Baskets and capacity

| Capacity Type | Basket / Test | Formula | Conditions | Current Input | Usage | Estimated Capacity | Remaining Capacity | Status | Severity | Risk Mechanic | Credit Implication | Evidence ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Debt | General debt basket | Greater of USD 500 million and 50% of EBITDA | None | Not stated | Not stated | Greater of USD 500 million and 50% of EBITDA | Unclear | Available | Medium | Priming | Dilutes recovery | E-4 |
`;

function synthetic() {
  return handoff(SYNTHETIC, {
    charts: [
      {
        title: "Covenant headroom",
        table: lineOf(SYNTHETIC, "Chart data: covenant headroom"),
        kind: "bullet",
        label: [0],
        threshold: 1,
        current: 2,
        headroom: 3,
        direction: 4,
        unit: "",
        columns: [1, 2],
      },
    ],
    maps: [
      { name: "legal entities", table: lineOf(SYNTHETIC, "Map: legal entities"), gap: null },
      { name: "intercreditor", table: lineOf(SYNTHETIC, "Map: intercreditor"), gap: null },
    ],
  });
}

it("draws the real blocked module as Not assessable with the headroom table's own reason", () => {
  render(<LegalLead {...leadProps(blockedEntry())} />);
  const tile = screen.getByRole("region", { name: "Covenant headroom" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(
    within(tile).getByText("Not assessable, no executed governing document available"),
  ).toBeVisible();
  expect(
    within(tile).getByText(
      "Covenant headroom needs the executed credit agreement and indentures supplied at run start.",
    ),
  ).toBeVisible();
  expect(within(tile).queryByRole("img")).toBeNull();
  expect(within(tile).queryByText(/7\.50x|transport/)).toBeNull();
  expect(
    within(screen.getByRole("region", { name: "Legal entities" })).getByText(
      /^Guarantor exhibit, guarantee and collateral agreement and indentures absent/,
    ),
  ).toBeVisible();
  expect(
    within(screen.getByRole("region", { name: "Intercreditor" })).getByText(
      /^Intercreditor agreement referenced but absent/,
    ),
  ).toBeVisible();
  expect(screen.queryByRole("region", { name: "Baskets and capacity" })).toBeNull();
});

it("falls back to the bottom line's reason when the headroom table states no gap", () => {
  const made = blockedEntry();
  made.output.chartGaps = [];
  render(<LegalLead {...leadProps(made)} />);
  expect(
    within(screen.getByRole("region", { name: "Covenant headroom" })).getByText(
      "No executed governing document available.",
    ),
  ).toBeVisible();
});

it("draws a headroom bullet per test, each on its own scale, a gap row with its reason", () => {
  render(<LegalLead {...leadProps(synthetic())} />);
  const tile = screen.getByRole("region", { name: "Covenant headroom" });
  expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
    "Net leverage 4.2x against a threshold of 5.0x, headroom 0.8x",
  );
  const rows = within(within(tile).getByRole("list", { name: "Covenant tests" })).getAllByRole(
    "listitem",
  );
  expect(rows).toHaveLength(3);
  expect(within(tile).getAllByRole("img")).toHaveLength(2);
  const liquidity = rows[2];
  if (!liquidity) throw new Error("gap row");
  expect(within(liquidity).getByText("Not supplied")).toBeVisible();
  expect(within(liquidity).getByText("Not stated")).toBeVisible();
  expect(within(liquidity).queryByText(/^0/)).toBeNull();
  expect(within(tile).getByText("Synthetic.")).toBeVisible();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "Not supplied: not stated" })).toBeVisible();
  expect(
    within(tile)
      .getAllByRole("link", { name: /Source for/ })
      .at(-1),
  ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
});

it("draws the legal entity and intercreditor maps as lists, and the baskets as written", () => {
  render(<LegalLead {...leadProps(synthetic())} />);
  const entities = screen.getByRole("region", { name: "Legal entities" });
  const list = within(entities).getByRole("list", { name: "Legal entities" });
  expect(within(list).getByText("Synthetic A")).toBeVisible();
  expect(within(list).getByText("Ownership")).toBeVisible();
  expect(within(entities).queryByText("Synthetic p.1")).toBeNull();
  expect(
    within(screen.getByRole("region", { name: "Intercreditor" })).getByText("Payment rank"),
  ).toBeVisible();
  const baskets = screen.getByRole("region", { name: "Baskets and capacity" });
  expect(within(baskets).getByText("General debt basket")).toBeVisible();
  expect(within(baskets).getByText("Greater of USD 500 million and 50% of EBITDA")).toBeVisible();
  expect(within(baskets).getByText("Unclear")).toBeVisible();
  expect(within(baskets).getByText("Available")).toBeVisible();
  expect(within(baskets).queryByText("E-4")).toBeNull();
});

it("states the gaps when the module wrote no headroom table, map or basket register", () => {
  render(<LegalLead {...leadProps(handoff("## Findings\n\n### Bottom line\n\nThin.\n"))} />);
  expect(
    within(screen.getByRole("region", { name: "Covenant headroom" })).getByText(
      "The module wrote no covenant headroom table.",
    ),
  ).toBeVisible();
  for (const name of ["Legal entities", "Intercreditor", "Baskets and capacity"])
    expect(
      within(screen.getByRole("region", { name })).getByText(
        "Needs executed documents supplied at run start.",
      ),
    ).toBeVisible();
});
