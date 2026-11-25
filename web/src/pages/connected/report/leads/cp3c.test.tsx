import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { RefinancingLead } from "./cp3c";
import { leadProps } from "./lead.fixture";
import { sectionsOf } from "./markdown.fixture";

afterEach(cleanup);

/** A handoff as the store publishes it: its owner tables' descriptors point at their table lines. */
function handoff(markdown: string, output: Partial<OutputEntry["output"]> = {}): OutputEntry {
  return {
    output: {
      module: "CP-3C",
      id: "run/CP-3C",
      label: "CP-3C",
      sha256: "h",
      href: "CP-3C.md",
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

// The synthetic proof handoff (proof/handoffs/CP-3C.md), rows copied; no real CP-3C has run.
const NEED = `### Chart data: refinancing need

| Period | Debt maturing | Committed resources | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2026 | 500 | 300 | US$m | Synthetic. |
| FY2027 | 1,250 | Not supplied: no commitment is stated | US$m | Synthetic. |
`;

const EVENTS = `### Events: Refinancing

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-03-31 | day | 2024-11-07 | Synthetic note | Scheduled — matures | Filing p.1 | Wall |
| 2026 | year | 2024-11-07 | Synthetic maturity | Scheduled — maturity | Filing p.2 | Wall |
`;

// Built from the CP-3C method's T3D.6 header (docs/reuse/selected-methods/skills/CP-3C).
const PATHS = `### T3D.6 — Liability-management paths

| Path Type | Feasibility | Likelihood Direction | Evidence Supporting | Evidence Against | Legal Capacity Required | Creditor Impact | Source Trace |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amend and extend | Feasible with consent | Rising | Lenders engaged | None | Majority lenders | Neutral | Filing p.4 |
| Drop-down financing | Insufficient Information | Unclear | None | Documents absent | Unrestricted subsidiary capacity | Priming risk | Filing p.5 |
`;

const MARKDOWN = `## Findings\n\n### Bottom line\n\nThe synthetic issuer shows one observed item.\n\n${NEED}\n${EVENTS}\n${PATHS}`;

function made(markdown = MARKDOWN) {
  return handoff(markdown, {
    charts: [
      {
        title: "Refinancing need",
        table: lineOf(markdown, "Chart data: refinancing need"),
        unit: "US$m",
        columns: [1, 2],
      },
    ],
    events: [{ lane: "Refinancing", table: lineOf(markdown, "Events: Refinancing"), gap: null }],
  });
}

it("pairs debt maturing with committed resources per period, as written, on one scale", () => {
  render(<RefinancingLead {...leadProps(made())} />);
  const tile = screen.getByRole("region", { name: "Refinancing need" });
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    "Debt maturing against committed resources in US$m. FY2026: debt maturing 500, committed resources 300. FY2027: debt maturing 1,250, committed resources not supplied (no commitment is stated).",
  );
  for (const text of ["FY2026", "500", "300", "FY2027", "1,250"])
    expect(within(figure).getByText(text)).toBeInTheDocument();
  const widths = [...figure.querySelectorAll<HTMLElement>("[data-bar]")].map((bar) => [
    bar.dataset.bar,
    bar.style.width,
  ]);
  // One scale from zero for both series: its top is the scale tick at or above 1,250.
  expect(widths).toEqual([
    ["500", `${String((500 / 1250) * 100)}%`],
    ["300", `${String((300 / 1250) * 100)}%`],
    ["1,250", "100%"],
  ]);
  expect(within(tile).getByText("US$m")).toBeVisible();
  expect(within(tile).getByText("Synthetic.")).toBeVisible();
});

it("draws a stated gap as a hatched mark with its reason, never zero, and no shortfall", () => {
  render(<RefinancingLead {...leadProps(made())} />);
  const figure = within(screen.getByRole("region", { name: "Refinancing need" })).getByRole("img");
  expect(figure.querySelectorAll("[data-gap]")).toHaveLength(1);
  expect(within(figure).getByText("Not supplied: no commitment is stated")).toBeInTheDocument();
  expect(within(figure).queryByText("0")).toBeNull();
  expect(within(figure).queryByText(/950|200|shortfall/i)).toBeNull();
});

it("has a table view with each cell as written and one trace per row", () => {
  render(<RefinancingLead {...leadProps(made())} />);
  const tile = screen.getByRole("region", { name: "Refinancing need" });
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "1,250" })).toBeVisible();
  expect(
    within(tile).getByRole("cell", { name: "Not supplied: no commitment is stated" }),
  ).toBeVisible();
  const links = within(tile).getAllByRole("link", { name: /Source for/ });
  expect(links.at(-1)).toHaveAttribute("href", expect.stringContaining("#evidence/"));
});

it("lists the liability-management paths as written and the refinancing dates", () => {
  render(<RefinancingLead {...leadProps(made())} />);
  const paths = screen.getByRole("list", { name: "Liability-management paths" });
  const [extend, drop] = within(paths).getAllByRole("listitem");
  if (!extend || !drop) throw new Error("two paths");
  expect(within(extend).getByText("Amend and extend")).toBeVisible();
  expect(within(extend).getByText("Feasible with consent")).toBeVisible();
  expect(within(extend).getByText("Rising")).toBeVisible();
  expect(within(drop).getByText("Insufficient Information")).toBeVisible();
  expect(within(paths).queryByText("Filing p.4")).toBeNull();
  const dates = screen.getByRole("list", { name: "Refinancing dates" });
  expect(
    within(dates)
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual([expect.stringContaining("2025-03-31"), expect.stringContaining("2026")]);
});

it("states the gaps when the module wrote neither table, and draws nothing when blocked", () => {
  render(<RefinancingLead {...leadProps(handoff("## Findings\n\n### Bottom line\n\nThin.\n"))} />);
  expect(
    within(screen.getByRole("region", { name: "Refinancing need" })).getByText(
      "The module wrote no refinancing need table.",
    ),
  ).toBeVisible();
  const paths = screen.getByRole("region", { name: "Liability-management paths" });
  expect(
    within(paths).getByText("The module wrote no liability-management path register."),
  ).toBeVisible();
  expect(paths.textContent).not.toMatch(/Built from the module's contract/);
  expect(screen.queryByRole("list", { name: "Refinancing dates" })).toBeNull();
  cleanup();
  const { container } = render(
    <RefinancingLead
      {...leadProps(
        handoff(
          "## Findings\n\n### Bottom line\n\nNot assessable: no debt schedule was supplied.\n",
        ),
      )}
    />,
  );
  expect(container).toBeEmptyDOMElement();
});

it("draws the module's stated reason when the whole table is a gap", () => {
  const gap = handoff("## Findings\n\n### Bottom line\n\nThin.\n", {
    chartGaps: [{ title: "Refinancing need", table: 9, gap: "no maturity schedule in the files" }],
  });
  render(<RefinancingLead {...leadProps(gap)} />);
  expect(
    within(screen.getByRole("region", { name: "Refinancing need" })).getByText(
      "No maturity schedule in the files",
    ),
  ).toBeVisible();
});

it("puts amounts in more than one unit in the table view with the reason, not on one scale", () => {
  render(
    <RefinancingLead
      {...leadProps(
        made(MARKDOWN.replace("| FY2026 | 500 | 300 | US$m |", "| FY2026 | 500 | 300 | EUR m |")),
      )}
    />,
  );
  const tile = screen.getByRole("region", { name: "Refinancing need" });
  expect(tile.querySelectorAll("[data-bar]")).toHaveLength(0);
  expect(within(tile).getByText("The amounts are stated in more than one unit.")).toBeVisible();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "500" })).toBeVisible();
});

it("draws no source reference in a period or a cell of the need table", () => {
  render(
    <RefinancingLead
      {...leadProps(
        made(
          MARKDOWN.replace("| FY2026 | 500 |", "| FY2026 (CP-3C) | 500 |").replace(
            "Not supplied: no commitment is stated",
            "Not supplied: see facility_agreement.pdf p. 9",
          ),
        ),
      )}
    />,
  );
  const tile = screen.getByRole("region", { name: "Refinancing need" });
  expect(tile.textContent).not.toMatch(/facility_agreement|CP-3C/);
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(tile.textContent).not.toMatch(/facility_agreement|CP-3C/);
});
