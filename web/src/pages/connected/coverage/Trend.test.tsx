import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Coverage, Fact, Issuer } from "../coverageData";
import { TrendView } from "./Trend";

const SHA = "c".repeat(64);

function issuer(key: string, name: string): Issuer {
  return {
    key,
    name,
    sector: null,
    runs: [
      {
        key: `${key}1`,
        folder: `${key}-run`,
        asOf: "2026-03-31",
        pathway: "credit_snapshot",
        pathwayTitle: "Full credit assessment",
        cells: {},
        other: [],
      },
    ],
  };
}

function fact(who: string, period: string, text: string, unit: string): Fact {
  return {
    field: "lev",
    issuer: who,
    run: `${who}1`,
    period,
    row: null,
    text,
    at: Number(text),
    unit,
    basis: "Issuer-adjusted EBITDA.",
    line: 3,
    output: `${who}-run/CP-1.md`,
    sha256: SHA,
  };
}

const issuers = [
  issuer("a", "Alpha plc"),
  issuer("b", "Beta SA"),
  issuer("c", "Gamma AG"),
  issuer("d", "Delta Ltd"),
];
const field = {
  id: "lev",
  module: "CP-1",
  group: "Leverage",
  label: "Net debt / EBITDA",
  kind: "number" as const,
  series: "period" as const,
};
const data: Coverage = {
  columns: [{ code: "CP-1", title: "Canonical data foundation" }],
  issuers,
  fields: [field],
  facts: [
    fact("a", "FY2023", "3.2", "x"),
    fact("a", "FY2024", "4.1", "x"),
    fact("a", "FY2025", "4.6", "x"),
    fact("b", "FY2024", "5.0", "x"),
    fact("b", "FY2025", "4.6", "x"),
    fact("c", "FY2025", "6.0", "x"),
    fact("d", "FY2025", "12", "%"),
  ],
};

function show(unit = "x") {
  const view = render(<TrendView data={data} issuers={issuers} field={field} />);
  fireEvent.click(screen.getByRole("button", { name: unit }));
  return view;
}

const panel = (name: string) => screen.getByRole("article", { name });
const dots = (name: string) => [...panel(name).querySelectorAll("circle")];

describe("TrendView small multiples", () => {
  it("draws one panel per issuer of the chosen unit, with its name", () => {
    show("x");
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(within(panel("Alpha plc")).getByRole("heading", { level: 3 }).textContent).toBe(
      "Alpha plc",
    );
    expect(screen.queryByRole("article", { name: "Delta Ltd" })).toBeNull();
  });

  it("describes each chart with the figures as written", () => {
    show("x");
    expect(
      within(panel("Alpha plc")).getByRole("img", {
        name: "Alpha plc: 3.2x, 4.1x, 4.6x across FY2023, FY2024, FY2025",
      }),
    ).toBeTruthy();
    expect(
      within(panel("Gamma AG")).getByRole("img", { name: "Gamma AG: 6.0x across FY2025" }),
    ).toBeTruthy();
  });

  it("draws a line only from three points, and writes the values of shorter series", () => {
    show("x");
    expect(panel("Alpha plc").querySelector("polyline")).not.toBeNull();
    expect(panel("Beta SA").querySelector("polyline")).toBeNull();
    expect(panel("Gamma AG").querySelector("polyline")).toBeNull();
    expect(dots("Alpha plc")).toHaveLength(3);
    expect(dots("Beta SA")).toHaveLength(2);
    expect(dots("Gamma AG")).toHaveLength(1);
    expect(
      within(within(panel("Beta SA")).getByRole("list"))
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["FY2024 5.0x", "FY2025 4.6x"]);
    expect(within(panel("Gamma AG")).getByText("6.0x")).toBeTruthy();
    // The last point of a line is labelled as text.
    expect(within(panel("Alpha plc")).getByText("4.6x")).toBeTruthy();
  });

  it("puts every panel on one scale and one period axis", () => {
    show("x");
    const at = (name: string, value: string) =>
      dots(name).find((dot) => dot.getAttribute("data-value") === value);
    const a = at("Alpha plc", "4.6");
    const b = at("Beta SA", "4.6");
    expect(a?.getAttribute("cy")).toBeTruthy();
    expect(a?.getAttribute("cy")).toBe(b?.getAttribute("cy"));
    expect(a?.getAttribute("cx")).toBe(b?.getAttribute("cx"));
    // The highest figure of any panel sits above one of a lower panel.
    const high = Number(at("Gamma AG", "6.0")?.getAttribute("cy"));
    expect(high).toBeLessThan(Number(a?.getAttribute("cy")));
  });

  it("shows a period an issuer does not state as Not stated, never as a point", () => {
    show("x");
    expect(within(panel("Beta SA")).getByText(/Not stated/)).toBeTruthy();
    const table = screen.getByRole("table", { name: "Net debt / EBITDA by period, x" });
    const row = within(table).getByRole("row", { name: /Beta SA/ });
    const cells = within(row).getAllByRole("cell");
    expect(cells.map((cell) => cell.textContent)).toEqual(["Not stated", "5.0x", "4.6x"]);
    expect(within(row).getByRole("rowheader").textContent).toBe("Beta SA");
    expect(
      within(table)
        .getAllByRole("columnheader")
        .map((cell) => cell.textContent),
    ).toEqual(["Issuer", "FY2023", "FY2024", "FY2025"]);
  });

  it("offers a reporting-unit chooser and never mixes units", () => {
    render(<TrendView data={data} issuers={issuers} field={field} />);
    const group = screen.getByRole("group", { name: "Reporting unit" });
    expect(within(group).getAllByRole("button")).toHaveLength(2);
    // The first unit is chosen by default.
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("article", { name: "Delta Ltd" })).toBeTruthy();
    fireEvent.click(within(group).getByRole("button", { name: "x" }));
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(within(group).getByRole("button", { name: "x" }).getAttribute("aria-pressed")).toBe(
      "true",
    );
    expect(screen.queryByRole("article", { name: "Delta Ltd" })).toBeNull();
  });

  it("draws no chooser for one unit", () => {
    render(
      <TrendView
        data={{ ...data, facts: data.facts.filter((item) => item.unit === "x") }}
        issuers={issuers}
        field={field}
      />,
    );
    expect(screen.queryByRole("group", { name: "Reporting unit" })).toBeNull();
  });

  it("says so when there is nothing to draw", () => {
    const text =
      "No newest run of these issuers states this figure, so there is no trend to draw.";
    const first = render(<TrendView data={data} issuers={issuers} field={undefined} />);
    expect(screen.getByRole("status").textContent).toBe(text);
    first.unmount();
    render(<TrendView data={{ ...data, facts: [] }} issuers={issuers} field={field} />);
    expect(screen.getByRole("status").textContent).toBe(text);
  });

  it("draws no module code, hash or file name", () => {
    const { container } = show("x");
    const text = container.textContent;
    expect(text).not.toMatch(/CP-\d|sha|\.md|c{16}/);
  });
});
