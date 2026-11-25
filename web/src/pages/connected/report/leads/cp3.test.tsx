import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, PublishedRun } from "../../publishedReport";
import { SecurityLead } from "./cp3";
import { leadProps } from "./lead.fixture";
import { sectionsOf } from "./markdown.fixture";

afterEach(cleanup);

function handoff(markdown: string): OutputEntry {
  return {
    output: { module: "CP-3", id: "run/CP-3", label: "CP-3", sha256: "h", href: "CP-3.md" },
    sections: sectionsOf(markdown),
    selected: true,
  };
}

const props = (made: OutputEntry, asOf = "2025-03-31") => ({
  ...leadProps(made),
  run: { folder: "run", asOf } as PublishedRun,
});

const row = (name: string) => {
  const found = screen.getByRole("rowheader", { name }).closest("tr");
  if (!found) throw new Error(`missing row ${name}`);
  return found;
};

// The real run's section chain and Recommendation table, copied from the TransDigm FY2024 reference
// run (outdated evidence, shape only: apps/issuer-library/fixtures/shape-key.json and the review).
const REAL = `## Findings

### Bottom line

Requires more work: the secured paper is fairly priced against the subordinated notes.

### Recommendation

| Security group | Market level at 2024-09-30 (fair value, % of par) | Structural position | Recovery sensitivity | Relative value | Recommendation |
|---|---|---|---|---|---|
| Term loans (Tranches I, J, K, L) | 99.91% | Senior secured, pari passu with secured notes per filing labels | Moderate | Unclear | Requires More Work |
| Secured notes 2028–2033 (six series) | 101.40% to 105.80%; 103.50% aggregate | Senior secured | Moderate | Unclear | Requires More Work |
| 5.50% 2027 subordinated notes | 99.51% | Senior subordinated | High | Unclear | Requires More Work |
| 2029 subordinated notes (two series) | 96.67% and 97.20% | Senior subordinated | High | Unclear | Requires More Work |

### Relative value

The secured notes trade above par while the subordinated notes trade below it.

### Portfolio Fit

No mandate was supplied, so fit cannot be tested.

## Calculations

None.
`;

// The synthetic proof handoff's summary (proof/handoffs/CP-3.md).
const SYNTHETIC = `## Findings

### Bottom line

Neutral on the secured notes.

### Security decision summary

| Instrument | Market level (31 Mar 2025) | Rank | Relative value | Recommendation | Source |
| --- | --- | --- | --- | --- | --- |
| Synthetic secured notes | $93.80; yield 7.0100%, 7.01% rounded | First lien | Fair | Neutral | Filing p.1 |
| Synthetic unsecured notes | $88.10; yield 9.40% | Unsecured | Cheap | Preferred | Filing p.2 |
| Synthetic term loan | Not supplied: no loan observation | First lien | Unclear | Requires More Work | Filing p.3 |

## Calculations

All amounts USD millions unless stated; yields are percentages from last trades on 2025-03-31; differences in yield are percentage points, shown in bp.
`;

it("draws the real run's recommendation table as text: prices, not yields, so no bar", () => {
  render(<SecurityLead {...props(handoff(REAL))} />);
  const tile = screen.getByRole("region", { name: "Instrument decisions" });
  // F3: every column the module wrote, in its order, Recovery sensitivity included.
  expect(
    within(within(tile).getByRole("table"))
      .getAllByRole("columnheader")
      .map((cell) => cell.textContent),
  ).toEqual([
    "Security group",
    "Market level at 2024-09-30 (fair value, % of par)",
    "Structural position",
    "Recovery sensitivity",
    "Relative value",
    "Recommendation",
    "Source",
  ]);
  const secured = row("Secured notes 2028–2033 (six series)");
  expect(within(secured).getByText("101.40% to 105.80%; 103.50% aggregate")).toBeInTheDocument();
  expect(within(secured).getByText("Senior secured")).toBeInTheDocument();
  expect(within(secured).getByText("Moderate")).toBeInTheDocument();
  expect(within(row("5.50% 2027 subordinated notes")).getByText("High")).toBeInTheDocument();
  expect(within(secured).getByText("Requires More Work")).toBeInTheDocument();
  // Stated values are never labelled Not supplied; no column the module did not write is added.
  expect(within(secured).queryByText("Not supplied")).toBeNull();
  expect(within(tile).getByText("This page could not read a spread.")).toBeVisible();
  expect(within(row("Term loans (Tranches I, J, K, L)")).getByText("99.91%")).toBeInTheDocument();
  expect(tile.querySelectorAll("[data-bar]")).toHaveLength(0);
  expect(within(secured).getByRole("link", { name: /Source for Secured notes/ })).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
  expect(within(tile).queryByRole("note")).toBeNull();
});

it("draws a stated yield-to-worst and spread as written, and no spread gap", () => {
  const stated = REAL.replace(
    "| Recovery sensitivity | Relative value | Recommendation |\n|---|---|---|---|---|---|",
    "| Recovery sensitivity | Yield to worst | Spread | Relative value | Recommendation |\n|---|---|---|---|---|---|---|---|",
  )
    .replace(
      "| Moderate | Unclear | Requires More Work |\n| Secured",
      "| Moderate | 6.4% | 250 bp | Unclear | Requires More Work |\n| Secured",
    )
    .replaceAll("| Moderate | Unclear |", "| Moderate | 6.1% | 220 bp | Unclear |")
    .replaceAll("| High | Unclear |", "| High | 8.2% | 410 bp | Unclear |");
  render(<SecurityLead {...props(handoff(stated))} />);
  const tile = screen.getByRole("region", { name: "Instrument decisions" });
  const loans = row("Term loans (Tranches I, J, K, L)");
  expect(within(loans).getByText("6.4%")).toBeInTheDocument();
  expect(within(loans).getByText("250 bp")).toBeInTheDocument();
  expect(
    within(row("Secured notes 2028–2033 (six series)")).getByText("220 bp"),
  ).toBeInTheDocument();
  expect(within(tile).getByRole("columnheader", { name: "Yield to worst" })).toBeInTheDocument();
  expect(within(tile).getByRole("columnheader", { name: "Spread" })).toBeInTheDocument();
  expect(within(tile).queryByText("Not supplied")).toBeNull();
  expect(within(tile).queryByText(/could not read a spread/)).toBeNull();
  // The card on a phone draws them too.
  const card = within(within(tile).getByRole("list", { name: "Instruments" }))
    .getAllByRole("listitem")
    .find((item) =>
      within(item).queryByRole("heading", { name: "Term loans (Tranches I, J, K, L)" }),
    );
  if (!card) throw new Error("missing card");
  expect(within(card).getByText("6.4%")).toBeInTheDocument();
  expect(within(card).getByText("250 bp")).toBeInTheDocument();
});

it("draws the yield bars where a last-trade yield reads, each against the largest", () => {
  render(<SecurityLead {...props(handoff(SYNTHETIC))} />);
  const secured = row("Synthetic secured notes");
  expect(within(secured).getByText("7.0100%")).toBeInTheDocument();
  expect(within(secured).getByText("Neutral")).toBeInTheDocument();
  expect(within(row("Synthetic unsecured notes")).getByText("Preferred")).toBeInTheDocument();
  const tile = screen.getByRole("region", { name: "Instrument decisions" });
  expect(tile.querySelectorAll("[data-bar]")).toHaveLength(2);
  const loan = row("Synthetic term loan");
  expect(loan.querySelector("[data-bar]")).toBeNull();
  expect(within(loan).getByText("No loan observation")).toBeInTheDocument();
  expect(within(loan).queryByText(/Not supplied: /)).toBeNull();
  // A source cell is for the trace only.
  expect(within(tile).queryByText("Filing p.1")).toBeNull();
});

it("withholds the bars when the run's date is before the last trades", () => {
  render(<SecurityLead {...props(handoff(SYNTHETIC), "2025-03-30")} />);
  const tile = screen.getByRole("region", { name: "Instrument decisions" });
  expect(tile.querySelectorAll("[data-bar]")).toHaveLength(0);
  expect(within(row("Synthetic secured notes")).getByText("7.0100%")).toBeInTheDocument();
  expect(
    within(tile).getByText("No pair of comparable last trades is supplied for this run."),
  ).toBeInTheDocument();
});

it("draws the relative value and portfolio fit passages and the peer gap", () => {
  render(<SecurityLead {...props(handoff(REAL))} />);
  expect(
    within(screen.getByRole("region", { name: "Relative value" })).getByText(
      "The secured notes trade above par while the subordinated notes trade below it.",
    ),
  ).toBeVisible();
  expect(
    within(screen.getByRole("region", { name: "Portfolio fit" })).getByText(
      "No mandate was supplied, so fit cannot be tested.",
    ),
  ).toBeVisible();
  const peers = screen.getByRole("region", { name: "Relative value against peers" });
  // F1: the page says only what it checked.
  expect(within(peers).getByText("This page could not read peer levels.")).toBeVisible();
  expect(peers.textContent).not.toMatch(/has no peer levels/);
  expect(peers.textContent).not.toMatch(/supplied at run start/);
});

it("states each gap when the module wrote neither table nor passage", () => {
  render(<SecurityLead {...props(handoff("## Findings\n\n### Bottom line\n\nNeutral.\n"))} />);
  const tile = screen.getByRole("region", { name: "Instrument decisions" });
  // Review 4, Q8: the gap names the thing in the reader's words.
  expect(
    within(tile).getByText("This page could not read the instrument decisions."),
  ).toBeVisible();
  expect(
    within(screen.getByRole("region", { name: "Relative value" })).getByText(
      "This page could not read the relative value.",
    ),
  ).toBeVisible();
  expect(
    within(screen.getByRole("region", { name: "Portfolio fit" })).getByText(
      "This page could not read the portfolio fit.",
    ),
  ).toBeVisible();
  expect(document.body.textContent).not.toMatch(/passage|register|table\./);
  expect(document.body.textContent).not.toMatch(/The module wrote no/);
});

it("draws nothing for a blocked module", () => {
  const { container } = render(
    <SecurityLead
      {...props(
        handoff(
          "## Findings\n\n### Bottom line\n\nNot assessable: no market quotes were supplied. More.\n",
        ),
      )}
    />,
  );
  expect(container).toBeEmptyDOMElement();
});

// Review 4, Q5: no hole beside the relative value: the shorter tiles stack in one column beside it.
it("stacks the portfolio fit over the peer gap in one column beside the relative value", () => {
  render(<SecurityLead {...props(handoff(REAL))} />);
  const value = screen.getByRole("region", { name: "Relative value" });
  const fit = screen.getByRole("region", { name: "Portfolio fit" });
  const peers = screen.getByRole("region", { name: "Relative value against peers" });
  expect(value).toHaveClass("lg:col-span-6");
  const column = fit.parentElement;
  expect(peers.parentElement).toBe(column);
  expect(column).toHaveClass("lg:col-span-6", "self-start", "flex-col");
  expect(column?.firstElementChild).toBe(fit);
});

// Review 4, Q7: a last trade the page cannot read is the one gap cell, with its reason.
it("gives a last-trade gap its reason, never a bare chip", () => {
  render(<SecurityLead {...props(handoff(SYNTHETIC))} />);
  const loan = row("Synthetic term loan");
  expect(within(loan).getByText("This page could not read a last trade.")).toBeInTheDocument();
  // The market level's own reason stays once.
  expect(within(loan).getAllByText("No loan observation")).toHaveLength(1);
});
