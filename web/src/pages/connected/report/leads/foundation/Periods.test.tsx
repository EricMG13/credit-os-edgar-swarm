// The first case reads the retained TransDigm FY2024 CP-1 handoff (outdated evidence: shape and
// scope only). The other cases are synthetic, built from the module contract (the CP-1
// `Chart data: revenue and EBITDA` table); not a real handoff.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { entry, section, table } from "../../overview/rows.fixture";
import { cp1Entry, leadProps } from "../fixtures/load";
import { PeriodsGapTile } from "./Periods";

afterEach(cleanup);

const HEADERS = ["Period", "Revenue", "Adjusted EBITDA", "Reporting unit", "Basis and limitation"];
const periods = (labels: string[]) =>
  entry(
    "CP-1",
    [],
    [
      section(
        "Chart data: revenue and EBITDA",
        30,
        table(
          32,
          HEADERS,
          labels.map((label) => [label, "100", "40", "US$m", "Annual."]),
        ),
      ),
    ],
  );
const draw = (data: ReturnType<typeof periods>) =>
  render(<PeriodsGapTile lead={leadProps(data)} />).container;

const TWO =
  "This handoff states two annual periods. A longer trend, last twelve months and a full debt stack need a methodology change; until then they are not drawn.";

it("states the two annual periods of the retained handoff as the designed gap", () => {
  draw(cp1Entry());
  const tile = screen.getByRole("region", { name: "More than two periods" });
  expect(within(tile).getByText("Trend beyond two periods")).toBeVisible();
  expect(within(tile).getByRole("heading", { name: "Two annual periods stated" })).toBeVisible();
  expect(within(tile).getByText(TWO)).toBeVisible();
  expect(within(tile).queryByRole("link")).toBeNull();
});

it("draws nothing when the period table carries three or more periods", () => {
  const container = draw(periods(["FY2022", "FY2023", "FY2024 / 2024-09-30"]));
  expect(container).toBeEmptyDOMElement();
});

it("counts a period stated twice once", () => {
  draw(periods(["FY2023", "FY2024", "FY2024 / 2024-09-30"]));
  expect(screen.getByText(TWO)).toBeVisible();
  cleanup();
  draw(periods(["FY2024", "FY2024"]));
  expect(
    screen.getByText(
      "This handoff states one period. A longer trend, last twelve months and a full debt stack need a methodology change; until then they are not drawn.",
    ),
  ).toBeVisible();
  expect(screen.queryByText(/two annual periods/)).toBeNull();
});

it("does not call two periods annual unless both read as years", () => {
  draw(periods(["H1 2024", "H2 2024"]));
  expect(screen.getByText(/^This handoff states two periods\./)).toBeVisible();
});

it("says so when the handoff has no period table", () => {
  draw(entry("CP-1", [], []));
  const tile = screen.getByRole("region", { name: "More than two periods" });
  expect(within(tile).getByText("The handoff has no period table.")).toBeVisible();
});
