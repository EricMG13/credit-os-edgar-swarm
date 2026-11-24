import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { entry } from "../overview/rows.fixture";
import { DownsideLead } from "./cp2a";
import { bottomLine, leadProps } from "./lead.fixture";
import { fixtureEntry, retained } from "./markdown.fixture";

afterEach(cleanup);

// The synthetic proof handoff (proof/handoffs/CP-2A.md): written to the readers' exact shapes.
const proof = () => fixtureEntry("CP-2A", retained("..", "..", "proof", "handoffs", "CP-2A.md"));

it("draws the break-point ladder in authored order on the fall-in-EBITDA axis, with the basis choice", () => {
  render(<DownsideLead {...leadProps(proof())} />);
  const ladder = screen.getByRole("region", { name: "EBITDA break points" });
  expect(ladder.className).toMatch(/lg:col-span-8/);
  const figure = within(ladder).getByRole("img");
  expect(figure).toHaveAccessibleName(
    /FCF reaches zero 10%.*Cover reaches watch level 15%.*Net leverage watch level 32%/,
  );
  expect(figure.querySelector('[data-decline="0.32"]')).toHaveStyle({ width: "32%" });
  expect(within(figure).getByText("Analyst watch level, not a covenant")).toBeInTheDocument();
  fireEvent.click(within(ladder).getByRole("button", { name: "Cash-interest increase 5%" }));
  const shocked = within(ladder).getByRole("img");
  expect(shocked.querySelectorAll("[data-decline]")).toHaveLength(2);
  expect(within(shocked).getByText("Not calculated: net debt is missing")).toBeInTheDocument();
  expect(within(shocked.querySelector("ul") as HTMLElement).queryByText("0%")).toBeNull();
  expect(within(ladder).getByRole("link", { name: /^Source for / })).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
});

it("compares every case on each measure, lists the measure it cannot place, and keeps the table", () => {
  render(<DownsideLead {...leadProps(proof())} />);
  const tile = screen.getByRole("region", { name: "Downside scenarios" });
  expect(tile.className).toMatch(/lg:col-span-4/);
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(
    /All-in cover \(x\): Control \(unstressed\) \(control\) 3\.10, Cost shock 2\.00, Cost and rate shock 1\.40/,
  );
  expect(within(figure).getByText("-5.1250 (−USD 5.13 million)")).toBeInTheDocument();
  expect(within(figure).queryByText(/Net leverage/)).toBeNull();
  expect(
    within(tile).getByText(
      "Net leverage (x) is not drawn: Cost and rate shock: Not calculated: net debt is missing.",
    ),
  ).toBeVisible();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(
    within(tile).getByRole("cell", { name: "Not calculated: net debt is missing" }),
  ).toBeVisible();
  expect(within(tile).queryByRole("cell", { name: "Filing p.1" })).toBeNull();
});

it("draws the gaps truthfully on the retained real T2DS.1 tables, where the readers bind nothing", () => {
  // Outdated evidence: TransDigm as of 2024-09-30, runs sol-high-001-resume and sol-001-resume.
  for (const file of ["CP-2A-T2DS.1.md", "CP-2A-T2DS.1-sol-001.md"]) {
    const real = fixtureEntry("CP-2A", retained("tdg_sol_high_2026_11_13", file));
    render(<DownsideLead {...leadProps(real)} />);
    const ladder = screen.getByRole("region", { name: "EBITDA break points" });
    expect(
      within(ladder).getByText("The handoff writes its break points in prose, not as a table."),
    ).toBeVisible();
    expect(within(ladder).getByText(/methodology change/)).toBeVisible();
    const scenarios = screen.getByRole("region", { name: "Downside scenarios" });
    expect(
      within(scenarios).getByText(
        "The handoff has no stressed-metrics table with one column per scenario.",
      ),
    ).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
    expect(screen.queryByText("0")).toBeNull();
    expect(screen.queryByText("0%")).toBeNull();
    cleanup();
  }
});

it("draws a blocked module as Not assessable in place of both tiles", () => {
  const stopped = entry(
    "CP-2A",
    [],
    bottomLine("Not assessable: no financial base was supplied. Rest of the line."),
  );
  render(<DownsideLead {...leadProps(stopped)} />);
  const tile = screen.getByRole("region", { name: "EBITDA break points" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(within(tile).getByText("No financial base was supplied.")).toBeVisible();
  expect(screen.queryByRole("region", { name: "Downside scenarios" })).toBeNull();
});
