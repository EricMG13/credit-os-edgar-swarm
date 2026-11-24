import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { OutputEntry, PublishedRun, Snapshot } from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { DatesRow } from "./DatesRow";
import { LimitsRow } from "./LimitsRow";
import { PipelineRow } from "./PipelineRow";

const mocks = vi.hoisted(() => ({
  lines: [] as unknown[],
  limitations: [] as unknown[],
  calendar: [] as unknown[],
  upcoming: [] as unknown[] | null,
  gaps: [] as unknown[],
}));

vi.mock("../../reportView", () => ({
  moduleBottomLines: () => mocks.lines,
  runLimitations: () => mocks.limitations,
  moduleState: () => "Delivered",
}));
vi.mock("../Calendar", () => ({
  buildCalendar: () => ({ rows: mocks.calendar, gaps: mocks.gaps }),
  upcomingCalendarRows: () => mocks.upcoming,
}));

const entry = (module: string): OutputEntry => ({
  output: {
    id: `${module}-1`,
    module,
    label: module,
    href: `${module}.md`,
    sha256: "a".repeat(64),
  },
  sections: [],
  selected: true,
});
const line = (
  id: string,
  name: string,
  state: string,
  text: string | null,
  referenced = false,
) => ({
  id,
  name,
  state,
  entry: entry(id),
  text,
  referenced,
  line: text === null && !referenced ? null : 4,
});
const run = { folder: "run", asOf: "2025-03-31" } as PublishedRun;
const snapshot = {} as Snapshot;
const view = { lead: entry("CP-6"), entries: [] } as unknown as ReportView;
const props = { snapshot, run, view };
const day = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
const event = (iso: string, name: string) => ({
  cells: [iso, "", "", name, "Scheduled", "", "Maturity wall"],
  from: day(iso),
  to: day(iso),
  href: `/report/run#evidence/${name}`,
  owner: "Liquidity",
  timingWithinRecordedPeriod: false,
});

afterEach(() => {
  cleanup();
  mocks.lines = [];
  mocks.limitations = [];
  mocks.calendar = [];
  mocks.gaps = [];
  mocks.upcoming = [];
});

it("draws every module as a linked node under its stage, the lead included", () => {
  mocks.lines = [
    line("CP-0", "Source readiness", "Delivered", "Sources are complete."),
    line("CP-2", "Fundamental credit", "Delivered", "Credit is stable."),
    line("CP-4", "Legal & covenants", "Not assessable", null),
  ];
  render(<PipelineRow {...props} />);
  const tile = screen.getByRole("region", { name: "Bottom line by module" });
  const stages = within(tile).getByRole("list", { name: "Stages" });
  expect(
    within(stages)
      .getAllByRole("heading", { level: 3 })
      .map((h) => h.textContent),
  ).toEqual(["Sources1", "Credit1", "Structure and market1", "Validation and decision1"]);
  expect(within(stages).getByRole("link", { name: /Legal & covenants/ })).toHaveAttribute(
    "href",
    "#modules/CP-4",
  );
  expect(within(stages).getByRole("link", { name: /Committee decision|CP-6/ })).toHaveAttribute(
    "href",
    "#modules/CP-6",
  );
  expect(within(stages).getAllByRole("link")).toHaveLength(4);
});

it("passes nothing on from a blocked module and animates only delivered edges", () => {
  mocks.lines = [
    line("CP-0", "Source readiness", "Delivered", "Sources are complete."),
    line("CP-4", "Legal & covenants", "Not assessable", null),
  ];
  render(<PipelineRow {...props} />);
  const stages = within(screen.getByRole("list", { name: "Stages" }));
  const blocked = stages.getByRole("link", { name: /Legal & covenants/ });
  expect(blocked).toHaveClass("border-dashed", "border-warning-mark");
  expect(within(blocked).getByText("Not assessable")).toBeInTheDocument();
  expect(blocked.closest("li")?.querySelector("[data-edge]")).toBeNull();
  const delivered = stages.getByRole("link", { name: /Source readiness/ }).closest("li");
  expect(delivered?.querySelector("[data-edge]")).toHaveClass("pipeline-flow");
});

it("keeps each bottom line's three text states and its source control", () => {
  mocks.lines = [
    line("CP-1", "Financial foundation", "Delivered", "Leverage is high."),
    line("CP-3", "Security selection", "Delivered", null, true),
    line("CP-2D", "Liquidity", "Delivered", null),
  ];
  render(<PipelineRow {...props} />);
  const lines = screen.getByRole("list", { name: "Bottom lines" });
  expect(within(lines).getByText("Leverage is high.")).toBeInTheDocument();
  expect(
    within(lines).getByRole("link", { name: "Read this bottom line in Evidence" }),
  ).toBeInTheDocument();
  expect(within(lines).getByText(/has no bottom line/)).toBeInTheDocument();
  expect(within(lines).getAllByRole("link", { name: /^Source for / })).toHaveLength(3);
});

it("groups limitations into one well per module and keeps the in-page anchor", () => {
  mocks.limitations = [
    {
      id: "CP-2",
      name: "Fundamental credit",
      entry: entry("CP-2"),
      text: "Two periods only.",
      line: 7,
    },
    {
      id: "CP-2",
      name: "Fundamental credit",
      entry: entry("CP-2"),
      text: "See debt.xlsx.",
      line: 8,
    },
    { id: "CP-3", name: "Security selection", entry: entry("CP-3"), text: "No yields.", line: 9 },
  ];
  mocks.lines = [
    line("CP-4", "Legal & covenants", "Not assessable", "Not assessable: no document."),
  ];
  render(<LimitsRow {...props} />);
  const tile = screen.getByRole("region", { name: "What this run could not do" });
  const heading = within(tile).getByRole("heading", {
    level: 3,
    name: "What this run could not do",
  });
  expect(heading).toHaveAttribute("id", "overview-limitations");
  expect(heading).toHaveAttribute("tabindex", "-1");
  const wells = within(tile)
    .getAllByRole("listitem")
    .filter((li) => li.className.includes("border-dashed"));
  expect(wells).toHaveLength(3);
  expect(wells[0]).toHaveClass("border-warning-mark", "gap-hatch");
  expect(wells[0]?.className).not.toMatch(/repeating-linear-gradient/);
  for (const link of within(tile).getAllByRole("link", { name: /^(Legal|Fundamental|Security)/ }))
    expect(link).toHaveClass("min-h-8", "max-[480px]:min-h-11");
  expect(within(wells[0] as HTMLElement).getByText("Not assessable")).toBeInTheDocument();
  expect(within(wells[1] as HTMLElement).getByText("2 recorded")).toBeInTheDocument();
  expect(
    within(tile).getByRole("link", { name: "Read this limitation in Evidence" }),
  ).toBeInTheDocument();
});

it("says so when no limitation is listed", () => {
  render(<LimitsRow {...props} />);
  expect(screen.getByText(/No limitation is listed on this page for this run/)).toBeInTheDocument();
});

it("keeps the dates tile and its anchor for a run with no recorded dates, and says so", () => {
  render(<DatesRow {...props} />);
  const tile = screen.getByRole("region", { name: "Dates to watch" });
  expect(within(tile).getByRole("heading", { level: 3 })).toHaveAttribute("id", "overview-dates");
  expect(within(tile).getByRole("status")).toHaveTextContent(
    "No dated events were recorded in this run.",
  );
  expect(within(tile).queryByRole("listitem")).toBeNull();
});

it("keeps the invalid as-of and nothing-upcoming sentences", () => {
  mocks.calendar = [event("2025-01-01", "Past")];
  mocks.upcoming = null;
  const { rerender } = render(<DatesRow {...props} />);
  expect(screen.getByRole("status")).toHaveTextContent(
    "This run needs a valid as-of date to identify upcoming events.",
  );
  mocks.upcoming = [];
  rerender(<DatesRow {...props} />);
  expect(screen.getByRole("status")).toHaveTextContent(
    "No recorded event dates fall on or after this run’s as-of date.",
  );
});

it("places marks by date, keeps marks clear of each other, and lists at most five events", () => {
  const rows = [
    event("2025-07-01", "Securitization matures"),
    event("2025-07-01", "Coupon"),
    event("2026-07-01", "Notes mature"),
    event("2027-07-01", "Loan matures"),
    event("2027-08-01", "Second loan"),
    event("2028-01-01", "Sixth"),
  ];
  mocks.calendar = rows;
  mocks.upcoming = rows;
  const { container } = render(<DatesRow {...props} />);
  const tile = screen.getByRole("region", { name: "Dates to watch" });
  expect(within(tile).getByRole("heading", { level: 3 })).toHaveAttribute("id", "overview-dates");
  expect(within(within(tile).getByRole("list")).getAllByRole("listitem")).toHaveLength(5);
  expect(within(tile).queryByText("Sixth")).toBeNull();
  const marks = [...container.querySelectorAll<HTMLElement>("[data-mark]")];
  expect(marks.map((mark) => mark.style.left)).toEqual([
    "0%",
    "0%",
    expect.any(String),
    expect.any(String),
    "100%",
  ]);
  const tops = (at: number) => marks[at]?.style.top;
  expect(tops(0)).not.toBe(tops(1));
  expect(tops(3)).not.toBe(tops(4));
  expect(within(tile).getByText("2026")).toBeInTheDocument();
});

it("collapses one event recorded by several modules into one mark that names them", () => {
  const twice = [
    { ...event("2025-03-31", "Synthetic note"), owner: "Source readiness" },
    { ...event("2025-03-31", "Synthetic note"), owner: "Legal & covenants" },
    { ...event("2025-03-31", "Synthetic note"), owner: "Liquidity" },
    event("2026-07-01", "Notes mature"),
  ];
  mocks.calendar = twice;
  mocks.upcoming = twice;
  const { container } = render(<DatesRow {...props} />);
  const tile = screen.getByRole("region", { name: "Dates to watch" });
  const items = within(within(tile).getByRole("list")).getAllByRole("listitem");
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent("Source readiness, Legal & covenants, Liquidity");
  expect(container.querySelectorAll("[data-mark]")).toHaveLength(2);
  expect(within(within(tile).getByRole("list")).getByText("Notes mature")).toBeVisible();
});

it("prints dates as the header does, labels the axis ends, and names each trace distinctly", () => {
  const rows = [event("2025-03-31", "Coupon"), event("2026-07-01", "Notes mature")];
  mocks.calendar = rows;
  mocks.upcoming = rows;
  render(<DatesRow {...props} />);
  const tile = screen.getByRole("region", { name: "Dates to watch" });
  expect(tile).not.toHaveTextContent("2025-03-31");
  expect(within(tile).getAllByText("31 March 2025").length).toBeGreaterThan(0);
  expect(within(tile).getAllByText("1 July 2026").length).toBeGreaterThan(0);
  expect(within(tile).queryByRole("link", { name: "Evidence" })).toBeNull();
  expect(
    within(tile).getByRole("link", { name: "Source for Coupon on 31 March 2025" }),
  ).toHaveAttribute("href", "/report/run#evidence/Coupon");
});

it("draws one date with its tick and label in the middle of the axis", () => {
  const rows = [event("2025-03-31", "Coupon")];
  mocks.calendar = rows;
  mocks.upcoming = rows;
  const { container } = render(<DatesRow {...props} />);
  expect(container.querySelector<HTMLElement>("[data-mark]")?.style.left).toBe("50%");
  expect(container.querySelector("[data-axis-label]")).toHaveTextContent("31 March 2025");
});

it("says the recorded events could not be placed, not that none were recorded, when only gaps exist", () => {
  mocks.gaps = [{ owner: "Legal & covenants", reason: "No date stated." }];
  render(<DatesRow {...props} />);
  const tile = screen.getByRole("region", { name: "Dates to watch" });
  expect(
    within(tile).getByText(
      "No recorded event could be placed on the time axis. The issuer calendar lists the recorded gaps.",
    ),
  ).toBeVisible();
  expect(within(tile).queryByText("No dated events were recorded in this run.")).toBeNull();
  expect(within(tile).getByRole("link", { name: "Open issuer calendar" })).toHaveAttribute(
    "href",
    "#calendar",
  );
});
