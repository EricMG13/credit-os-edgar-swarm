import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, PublishedRun } from "../publishedReport";
import { collectGaps, GapCounts, GapSummary, EvidenceGaps } from "./EvidenceGaps";

afterEach(cleanup);

const run = { folder: "case" } as unknown as PublishedRun;

function entry(module: string, rows: [string, string, string][], selected = true): OutputEntry {
  return {
    selected,
    output: {
      id: `${module}/h.md`,
      module,
      label: "Saved",
      href: "h.md",
      sha256: "a".repeat(64),
    },
    sections: [
      {
        heading: "Gaps",
        level: 2,
        line: 1,
        blocks: [
          {
            type: "table",
            line: 2,
            headers: ["Gap", "Severity", "Effect"],
            rows: rows.map((cells, index) => ({ line: 3 + index, cells })),
          },
        ],
      },
    ],
  };
}

const entries = [
  entry("CP-1", [
    ["Low gap", "Low", "x"],
    ["High gap", "High", "y"],
    ["Odd gap", "Critical", "z"],
  ]),
  entry("CP-2", [
    ["Another high", "High", "w"],
    ["Unstated gap", "", "v"],
  ]),
];

it("collects every gap row the handoffs wrote and filters by module", () => {
  expect(collectGaps(entries).length).toBe(5);
  expect(collectGaps(entries, "CP-2").map(({ gap }) => gap.title)).toEqual([
    "Another high",
    "Unstated gap",
  ]);
});

it("counts exactly by severity and adds Other or not stated only when something falls there", () => {
  const items = collectGaps(entries);
  render(<GapCounts items={items} />);
  const strip = within(screen.getByLabelText("Gaps by severity"));
  expect(strip.getByText("High").closest("div")).toHaveTextContent("2");
  expect(strip.getByText("Medium").closest("div")).toHaveTextContent("0");
  expect(strip.getByText("Low").closest("div")).toHaveTextContent("1");
  expect(strip.getByText("Other or not stated").closest("div")).toHaveTextContent("2");
});

it("leaves out Other or not stated when every gap is High, Medium or Low", () => {
  render(<GapCounts items={collectGaps([entry("CP-1", [["Only", "High", "x"]])])} />);
  expect(screen.queryByText("Other or not stated")).toBeNull();
});

it("lists most severe first on the Summary without the recorded detail", () => {
  render(<GapSummary run={run} entries={entries} />);
  const rows = [...document.querySelectorAll('th[scope="row"]')].map((cell) => cell.textContent);
  expect(rows).toEqual(["High gap", "Another high", "Low gap", "Odd gap", "Unstated gap"]);
  expect(screen.queryByText("Effect: y")).toBeNull();
  expect(screen.getAllByRole("link", { name: "Open handoff line" })).toHaveLength(5);
});

it("shows no counts, only the empty state, when no module wrote a gap", () => {
  render(<GapSummary run={run} entries={[]} />);
  expect(screen.queryByLabelText("Gaps by severity")).toBeNull();
  expect(screen.getByRole("heading", { name: "No gaps recorded" })).toBeVisible();
});

it("draws the recorded detail on the Gaps tab and labels an alternate handoff", () => {
  render(
    <EvidenceGaps run={run} entries={[entry("CP-1", [["G", "High", "Effect text"]], false)]} />,
  );
  expect(screen.getByText("Effect: Effect text")).toBeVisible();
  expect(screen.getByText("Financial foundation · Saved")).toBeVisible();
});
