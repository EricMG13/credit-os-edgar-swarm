import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry } from "../../publishedReport";
import { RestructuringLead } from "./cp4c";
import { leadProps } from "./lead.fixture";
import { sectionsOf } from "./markdown.fixture";

afterEach(cleanup);

function handoff(markdown: string, output: Record<string, unknown> = {}): OutputEntry {
  return {
    output: {
      module: "CP-4C",
      id: "run/CP-4C",
      label: "CP-4C",
      sha256: "h",
      href: "CP-4C.md",
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

const STEPS =
  "| Step | Amount | Reporting unit | Basis and limitation |\n| --- | --- | --- | --- |";
const step = (label: string, amount: string) => `| ${label} | ${amount} | US$m | Synthetic. |`;

// No CP-4C handoff exists, real or synthetic: built from the launcher's owner tables
// (src/deploy_workflow/owners/cpos_launch_tables.py, CP-4C) and the method's T4E.4 header
// (docs/reuse/selected-methods/skills/CP-4C). Synthetic values.
const RESTRUCTURING = `## Findings

### Bottom line

Synthetic: the unsecured notes are impaired in both scenarios.

### Chart data: value allocation — scenario 1

${STEPS}
${step("Enterprise value", "1,000")}
${step("Administrative claims", "-50")}
${step("First lien term loan", "-700")}
${step("Senior unsecured notes", "-250")}
${step("Value not distributed", "0")}

### Chart data: value allocation — scenario 2

${STEPS}
${step("Enterprise value", "800")}
${step("Administrative claims", "-50")}
${step("First lien term loan", "-700")}
${step("Senior unsecured notes", "-50")}
${step("Value not distributed", "0")}

### Chart data: recovery by class

| Class | Scenario | Claim | Recovery | Recovery % | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| First lien term loan | Scenario 1 | 700 | 700 | 100 | US$m | Single enterprise value slice. |
| Senior unsecured notes | Scenario 1 | 600 | 250 | 41.7 | US$m | Single enterprise value slice. |
| First lien term loan | Scenario 2 | 700 | 700 | 100 | US$m | Single enterprise value slice. |
| Senior unsecured notes | Scenario 2 | 600 | Not supplied: distribution not settled | Not supplied: recovery not settled | US$m | Single enterprise value slice. |

### T4E.4 — Restructuring paths

| path | process/jurisdiction | consent/vote | new money | currency and scale | class treatment | milestones | blockers | probability class |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Prepackaged plan | Chapter 11, Delaware | Two-thirds of unsecured notes | USD 100 million | USD millions | Term loan reinstated; notes exchanged for equity | Filing in 60 days | None | Plausible |
`;

const allocation = (n: number) => ({
  title: `Value allocation — scenario ${String(n)}`,
  table: lineOf(RESTRUCTURING, `Chart data: value allocation — scenario ${String(n)}`),
  unit: "US$m",
  columns: [1],
  kind: "waterfall",
  amount: 1,
});

function restructuring(markdown = RESTRUCTURING, charts = [allocation(1), allocation(2)]) {
  return handoff(markdown, {
    charts: [
      ...charts,
      {
        title: "Recovery by class",
        table: lineOf(markdown, "Chart data: recovery by class"),
        kind: "recovery",
        label: 0,
        scenario: 1,
        claim: 2,
        recovery: 3,
        percent: 4,
        unit: "US$m",
        columns: [2, 3, 4],
      },
    ],
  });
}

it("draws the value allocation of the first scenario as a waterfall, steps as written", () => {
  render(<RestructuringLead {...leadProps(restructuring())} />);
  const tile = screen.getByRole("region", { name: "Value allocation" });
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    "Value allocation — scenario 1 in US$m: Enterprise value 1,000, Administrative claims -50, First lien term loan -700, Senior unsecured notes -250, Value not distributed 0.",
  );
  for (const text of ["1,000", "-50", "-700", "-250"])
    expect(within(figure).getAllByText(text).length).toBeGreaterThan(0);
  expect(within(tile).getByText("The handoff does not state the fulcrum class.")).toBeVisible();
  expect(within(tile).getByText(/methodology change/)).toBeVisible();
  expect(within(tile).queryByText(/fulcrum is|fulcrum:/i)).toBeNull();
});

it("switches scenarios with a pressed button group, the table following", () => {
  render(<RestructuringLead {...leadProps(restructuring())} />);
  const tile = screen.getByRole("region", { name: "Value allocation" });
  const second = within(tile).getByRole("button", { name: "Scenario 2" });
  expect(within(tile).getByRole("button", { name: "Scenario 1" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  fireEvent.click(second);
  expect(second).toHaveAttribute("aria-pressed", "true");
  expect(within(tile).getByRole("img")).toHaveAccessibleName(/Enterprise value 800/);
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "800" })).toBeVisible();
  expect(
    within(tile)
      .getAllByRole("link", { name: /Source for/ })
      .at(-1),
  ).toHaveAttribute("href", expect.stringContaining("#evidence/"));
});

it("keeps a value allocation that does not reconcile out of the figure, with the reason", () => {
  const broken = RESTRUCTURING.replace(
    step("Senior unsecured notes", "-250"),
    step("Senior unsecured notes", "-200"),
  );
  render(
    <RestructuringLead
      {...leadProps(
        restructuring(broken, [
          { ...allocation(1), table: lineOf(broken, "Chart data: value allocation — scenario 1") },
        ]),
      )}
    />,
  );
  const tile = screen.getByRole("region", { name: "Value allocation" });
  expect(within(tile).queryByRole("img")).toBeNull();
  expect(within(tile).getByText(/does not reconcile/)).toBeVisible();
  expect(within(tile).queryByRole("button", { name: "Scenario 1" })).toBeNull();
});

it("draws claim against recovery per class and scenario, the stated recovery % and gaps", () => {
  render(<RestructuringLead {...leadProps(restructuring())} />);
  const tile = screen.getByRole("region", { name: "Recovery by class" });
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    "Recovery by class in US$m. First lien term loan, Scenario 1: claim 700, recovery 700, recovery 100%. First lien term loan, Scenario 2: claim 700, recovery 700, recovery 100%. Senior unsecured notes, Scenario 1: claim 600, recovery 250, recovery 41.7%. Senior unsecured notes, Scenario 2: claim 600, recovery not supplied (distribution not settled), recovery % not supplied (recovery not settled).",
  );
  expect(within(figure).getByText("41.7%")).toBeInTheDocument();
  expect(within(figure).getByText("Not supplied: distribution not settled")).toBeInTheDocument();
  expect(figure.querySelectorAll("[data-gap]").length).toBeGreaterThan(0);
  expect(within(figure).queryByText("0")).toBeNull();
  const bars = [...figure.querySelectorAll<HTMLElement>("[data-bar]")].map(
    (bar) => bar.style.width,
  );
  // One scale from zero for every class: its top is the scale tick at or above 700, 800.
  expect(bars.slice(3)).toEqual(["87.5%", "75%", `${String((250 / 800) * 100)}%`, "75%"]);
});

it("draws the plan treatment as written, and the gaps when the module wrote none", () => {
  render(<RestructuringLead {...leadProps(restructuring())} />);
  const plan = screen.getByRole("region", { name: "Plan treatment" });
  expect(within(plan).getByText("Prepackaged plan")).toBeVisible();
  expect(within(plan).getByText("Term loan reinstated; notes exchanged for equity")).toBeVisible();
  cleanup();
  render(
    <RestructuringLead {...leadProps(handoff("## Findings\n\n### Bottom line\n\nThin.\n"))} />,
  );
  for (const [name, text] of [
    ["Value allocation", "The module wrote no value allocation table."],
    ["Recovery by class", "The module wrote no recovery by class table."],
    ["Plan treatment", "The module wrote no plan treatment register."],
  ] as const)
    expect(within(screen.getByRole("region", { name })).getByText(text)).toBeVisible();
  expect(screen.getAllByText("Not yet produced by a real run of this module.")).toHaveLength(3);
});

it("draws a blocked module as Not assessable with its reason", () => {
  render(
    <RestructuringLead
      {...leadProps(
        handoff(
          "## Findings\n\n### Bottom line\n\nNot assessable: the distress gate is not met.\n",
        ),
      )}
    />,
  );
  const tile = screen.getByRole("region", { name: "Value allocation" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(within(tile).getByText("The distress gate is not met.")).toBeVisible();
});
