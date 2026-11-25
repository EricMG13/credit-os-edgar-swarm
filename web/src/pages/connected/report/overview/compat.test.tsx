import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { OutputEntry, Section } from "../../publishedReport";
import { FigureNotes } from "./figureParts";
import { DeltaBar, MiniSlope, type Mark } from "./marks";
import { lastTwo, passageParagraphs, periodSeries } from "./read";

afterEach(cleanup);

/** Exports other sessions call with their earlier arguments keep working. */
const section = (heading: string, headers: string[], ...rows: string[][]): Section => ({
  heading,
  level: 3,
  line: 1,
  blocks: [
    {
      type: "table",
      line: 2,
      headers,
      rows: rows.map((cells, at) => ({ line: 4 + at, cells })),
    },
  ],
});

const entry = (sections: Section[]): OutputEntry => ({
  output: { id: "CP-1-1", module: "CP-1", label: "CP-1", href: "CP-1.md", sha256: "a" },
  sections,
  selected: true,
});

const LEVERAGE = section(
  "Chart data: leverage",
  ["Period", "Total debt / EBITDA", "Reporting unit"],
  ["FY2024", "4.00", "x"],
  ["FY2023", "5.00", "x"],
);
const PERIODS = section(
  "Period table",
  ["Period", "Start", "End"],
  ["FY2023", "2023-01-01", "2023-12-31"],
  ["FY2024", "2024-01-01", "2024-12-31"],
);

it("reads a period series with the earlier three arguments, and nothing without an entry", () => {
  expect(periodSeries(undefined, "leverage", /^Total debt/)).toBeNull();
  const series = periodSeries(entry([LEVERAGE]), "leverage", /^Total debt/);
  expect(series?.name).toBe("Total debt / EBITDA");
  expect(series?.unit).toBe("x");
  expect(
    series?.points.map(({ period, cell, value, line }) => [period, cell, value, line]),
  ).toEqual([
    ["FY2024", "4.00", 4, 4],
    ["FY2023", "5.00", 5, 5],
  ]);
  expect(periodSeries(entry([]), "leverage", /^Total debt/)).toBeNull();
});

it("gives the latest by period, and a prior only a year earlier by the period table", () => {
  const series = periodSeries(entry([LEVERAGE]), "leverage", /^Total debt/);
  if (!series) throw new Error("fixture");
  expect(lastTwo(series).latest?.period).toBe("FY2024");
  expect(lastTwo(series).prior).toBeUndefined();
  expect(lastTwo(series, entry([PERIODS, LEVERAGE])).prior?.period).toBe("FY2023");
});

it("reads a passage's paragraphs with the earlier arguments", () => {
  const written = entry([
    { heading: "Findings", level: 2, line: 1, blocks: [] },
    {
      heading: "Key findings",
      level: 3,
      line: 2,
      blocks: [{ type: "text", line: 3, end: 3, text: "Distributions exceed free cash flow." }],
    },
  ]);
  expect(passageParagraphs(written, "Key findings")).toEqual([
    { line: 3, text: "Distributions exceed free cash flow." },
  ]);
});

it("draws figure notes and the earlier marks with their earlier props", () => {
  render(<FigureNotes notes={["Per CP-1C.", "As in notes_2024.pdf page 88."]} />);
  expect(screen.getByText("Per Peer benchmark.")).toBeVisible();
  expect(document.body).not.toHaveTextContent(/notes_2024/);
  cleanup();
  const marks: Mark[] = [
    { label: "FY2023", value: 5, text: "5.00x" },
    { label: "FY2024", value: 4, text: "4.00x" },
  ];
  render(<MiniSlope marks={marks} tone="better" label="Mini" />);
  render(<DeltaBar from={marks[0] as Mark} to={marks[1] as Mark} tone="better" label="Delta" />);
  expect(screen.getByRole("img", { name: "Mini" })).toBeVisible();
  expect(screen.getByRole("img", { name: "Delta" })).toBeVisible();
});
