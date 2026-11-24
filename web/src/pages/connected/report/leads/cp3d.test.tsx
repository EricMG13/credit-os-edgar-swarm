import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { MarketLead } from "./cp3d";
import { leadProps } from "./lead.fixture";
import { sectionsOf } from "./markdown.fixture";

afterEach(cleanup);

function handoff(markdown: string, output: Record<string, unknown> = {}): OutputEntry {
  return {
    output: {
      module: "CP-3D",
      id: "run/CP-3D",
      label: "CP-3D",
      sha256: "h",
      href: "CP-3D.md",
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

// No CP-3D handoff exists, real or synthetic: built from the launcher's owner table
// (src/deploy_workflow/owners/cpos_launch_tables.py, `Chart data: yield against maturity`) and the
// CP-3D method's T3E.5 header (docs/reuse/selected-methods/skills/CP-3D). Synthetic values.
const MARKET = `## Findings

### Bottom line

Synthetic: the market prices the subordinated notes wider than the secured notes.

### Chart data: yield against maturity

| Instrument | Maturity date | Yield | Spread | Quote date | Source class | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Synthetic secured notes 2028 | 2028-08-15 | 6.12 | 185 bp | 2025-03-31 | Last trade | % | Yield to maturity from last trades. |
| Synthetic subordinated notes 2027 | 2027-11-15 | 6.80 | Not supplied: no benchmark stated | 2025-03-28 | Last trade | % | Yield to maturity from last trades. |
| Synthetic term loan 2030 | 2030-03-22 | Not supplied: no loan quote in the files | Not supplied: no loan quote | 2025-03-31 | Evaluated price | % | Yield to maturity from last trades. |

### T3E.5 — Implied risk calculations

| security_id | model | horizon | recovery | discount/benchmark | implied default/loss/break-even | formula ID | limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Synthetic subordinated notes 2027 | Credit triangle | 3 years | 40% | Treasury curve | 4.2% a year break-even default | F-7 | A model-dependent break-even, not a probability |
`;

function market() {
  return handoff(MARKET, {
    charts: [
      {
        title: "Yield against maturity",
        table: lineOf(MARKET, "Chart data: yield against maturity"),
        kind: "scatter",
        label: 0,
        date: 1,
        yield: 2,
        spread: 3,
        quoted: 4,
        source: 5,
        unit: "%",
        columns: [2],
      },
    ],
  });
}

it("draws each quoted instrument as a point on a true maturity-date axis, labelled as written", () => {
  render(<MarketLead {...leadProps(market())} />);
  const tile = screen.getByRole("region", { name: "Yield against maturity" });
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    "Yield against maturity date, in %. Synthetic subordinated notes 2027 matures 2027-11-15 at 6.80%. Synthetic secured notes 2028 matures 2028-08-15 at 6.12%.",
  );
  const points = [...figure.querySelectorAll("[data-point]")];
  expect(points.map((point) => point.getAttribute("data-point"))).toEqual([
    "Synthetic subordinated notes 2027",
    "Synthetic secured notes 2028",
  ]);
  const [early, late] = points.map((point) => Number(point.getAttribute("cx")));
  expect(early).toBeLessThan(late ?? 0);
  const key = within(tile).getByRole("list", { name: "Instruments by maturity" });
  expect(
    within(key)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual([
    "1Synthetic subordinated notes 20272027-11-156.80%",
    "2Synthetic secured notes 20282028-08-156.12%",
  ]);
  expect(within(key).queryByText(/term loan/)).toBeNull();
  expect(within(figure).getByText("2028")).toBeInTheDocument();
  expect(within(figure).getByText("0")).toBeInTheDocument();
  expect(within(figure).queryByText(/term loan/)).toBeNull();
  expect(figure.querySelector("path, polyline")).toBeNull();
});

it("lists an unquoted instrument under the figure with its reason and draws no curve", () => {
  render(<MarketLead {...leadProps(market())} />);
  const tile = screen.getByRole("region", { name: "Yield against maturity" });
  expect(
    within(tile).getByText("Synthetic term loan 2030: Not supplied: no loan quote in the files"),
  ).toBeVisible();
  expect(
    within(tile).getByText("No curve is drawn: the handoff states observed points only."),
  ).toBeVisible();
  expect(within(tile).getByText(/methodology change/)).toBeVisible();
});

it("gives spread and quote date in the table view, as written", () => {
  render(<MarketLead {...leadProps(market())} />);
  const tile = screen.getByRole("region", { name: "Yield against maturity" });
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "185 bp" })).toBeVisible();
  expect(within(tile).getByRole("cell", { name: "2025-03-28" })).toBeVisible();
  expect(
    within(tile).getByRole("cell", { name: "Not supplied: no loan quote in the files" }),
  ).toBeVisible();
  expect(
    within(tile)
      .getAllByRole("link", { name: /Source for/ })
      .at(-1),
  ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
});

it("draws the market-implied default as written with its model and horizon", () => {
  render(<MarketLead {...leadProps(market())} />);
  const tile = screen.getByRole("region", { name: "Market-implied default" });
  expect(within(tile).getByText("Synthetic subordinated notes 2027")).toBeVisible();
  expect(within(tile).getByText("Credit triangle")).toBeVisible();
  expect(within(tile).getByText("3 years")).toBeVisible();
  expect(within(tile).getByText("4.2% a year break-even default")).toBeVisible();
  expect(within(tile).queryByText("F-7")).toBeNull();
});

it("states the gaps when the module wrote neither table, and draws a blocked module", () => {
  render(<MarketLead {...leadProps(handoff("## Findings\n\n### Bottom line\n\nThin.\n"))} />);
  const figure = screen.getByRole("region", { name: "Yield against maturity" });
  expect(
    within(figure).getByText("The module wrote no yield against maturity table."),
  ).toBeVisible();
  expect(within(figure).getByText("Needs market data supplied at run start.")).toBeVisible();
  const implied = screen.getByRole("region", { name: "Market-implied default" });
  expect(within(implied).getByText("Needs market data supplied at run start.")).toBeVisible();
  cleanup();
  render(
    <MarketLead
      {...leadProps(
        handoff(
          "## Findings\n\n### Bottom line\n\nNot assessable: no market quotes were supplied.\n",
        ),
      )}
    />,
  );
  const tile = screen.getByRole("region", { name: "Yield against maturity" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(within(tile).getByText("No market quotes were supplied.")).toBeVisible();
});

it("labels the earliest and latest maturity dates when the points fall within one year", () => {
  const near = MARKET.replace("| 2028-08-15 |", "| 2027-06-01 |").replace(
    "| 2027-11-15 |",
    "| 2027-08-01 |",
  );
  const made = market();
  made.sections = sectionsOf(near);
  render(<MarketLead {...leadProps(made)} />);
  const figure = within(screen.getByRole("region", { name: "Yield against maturity" })).getByRole(
    "img",
  );
  expect(within(figure).getByText("2027-06-01")).toBeInTheDocument();
  expect(within(figure).getByText("2027-08-01")).toBeInTheDocument();
  expect(within(figure).queryByText("2027")).toBeNull();
});

it("places no point when the yields are in more than one unit, and says so", () => {
  const mixed = MARKET.replace(
    "| 6.80 | Not supplied: no benchmark stated | 2025-03-28 | Last trade | % |",
    "| 680 | Not supplied: no benchmark stated | 2025-03-28 | Last trade | bp |",
  );
  const made = market();
  made.sections = sectionsOf(mixed);
  render(<MarketLead {...leadProps(made)} />);
  const tile = screen.getByRole("region", { name: "Yield against maturity" });
  expect(tile.querySelectorAll("[data-point]")).toHaveLength(0);
  expect(within(tile).getByText("The yields are stated in more than one unit.")).toBeVisible();
  expect(within(tile).queryByText(/^Yield in/)).toBeNull();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "680" })).toBeVisible();
  expect(within(tile).getByRole("cell", { name: "6.12" })).toBeVisible();
});

it("gives a yield below zero its own reason, and draws no source reference in a reason line", () => {
  const made = market();
  made.sections = sectionsOf(
    MARKET.replace("| 6.80 |", "| -0.2 |").replace(
      "Not supplied: no loan quote in the files",
      "Not supplied: see loan_tape.xlsx row 4",
    ),
  );
  render(<MarketLead {...leadProps(made)} />);
  const tile = screen.getByRole("region", { name: "Yield against maturity" });
  expect(
    within(tile).getByText(
      "Synthetic subordinated notes 2027: Stated yield below zero; not placed.",
    ),
  ).toBeVisible();
  expect(tile.textContent).not.toMatch(/loan_tape/);
});

it("names an implied-risk row without a security by its place", () => {
  const made = market();
  made.sections = sectionsOf(
    MARKET.replace(
      "| Synthetic subordinated notes 2027 | Credit triangle |",
      "|  | Credit triangle |",
    ),
  );
  render(<MarketLead {...leadProps(made)} />);
  const tile = screen.getByRole("region", { name: "Market-implied default" });
  expect(within(tile).getByText("Row 1")).toBeVisible();
  expect(within(tile).getByRole("link", { name: "Source for Row 1" })).toBeVisible();
});
