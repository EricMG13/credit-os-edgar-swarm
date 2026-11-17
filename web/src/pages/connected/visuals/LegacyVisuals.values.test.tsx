import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import { LegacyVisuals } from ".";

function table(headers: string[], rows: string[][]) {
  return [
    { blocks: [{ type: "table", line: 20, headers, rows: rows.map((cells) => ({ cells })) }] },
  ];
}

function drawn(title: string, chart: Record<string, unknown>, sections: unknown) {
  render(
    <LegacyVisuals
      output={{ charts: [{ title, table: 20, unit: "x", ...chart }] }}
      sections={sections}
      evidenceHref={(line) => `#line-${String(line)}`}
    />,
  );
  return within(screen.getByRole("figure", { name: title }));
}

it("draws a value written with a decimal comma at that value, not at 375", () => {
  const figure = drawn(
    "Leverage",
    { columns: [1] },
    table(
      ["Period", "Total debt / EBITDA", "Reporting unit", "Basis and limitation"],
      [
        ["FY2023", "3,75", "x", "Gross debt includes finance leases."],
        ["FY2024", "2.80", "x", "Synthetic."],
      ],
    ),
  );
  const numbers = [...document.querySelectorAll("svg text")]
    .map((node) => node.textContent)
    .filter((text) => /^\d+(?:\.\d+)?$/.test(text))
    .map(Number);
  expect(numbers.length).toBeGreaterThan(2);
  expect(Math.max(...numbers)).toBeLessThan(10);
  expect(figure.getAllByText("3,75").length).toBeGreaterThan(0);
});

it("shows each period's unit and Basis and limitation in the Table form of a period chart", () => {
  const figure = drawn(
    "Leverage",
    { columns: [1] },
    table(
      ["Period", "Total debt / EBITDA", "Reporting unit", "Basis and limitation"],
      [
        ["FY2023", "3.75", "x", "Gross debt includes finance leases."],
        ["FY2024", "2.80", "x", "Synthetic."],
      ],
    ),
  );
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  const grid = figure.getByRole("table", { name: "Leverage" });
  expect(within(grid).getByRole("columnheader", { name: "Basis and limitation" })).toBeVisible();
  expect(within(grid).getByRole("columnheader", { name: "Reporting unit" })).toBeVisible();
  expect(
    within(grid).getByRole("cell", { name: "Gross debt includes finance leases." }),
  ).toBeVisible();
  expect(within(grid).getByRole("cell", { name: "Synthetic." })).toBeVisible();
});

it("shows each row's Basis and limitation in the Table form beside its figures", () => {
  const figure = drawn(
    "EBITDA bridge",
    { kind: "waterfall", amount: 1, unit: "US$m" },
    table(
      ["Step", "Amount", "Reporting unit", "Basis and limitation"],
      [
        ["Opening EBITDA", "400", "US$m", "Reported, before leases."],
        ["Disposal", "-10", "US$m", "Synthetic."],
        ["Closing EBITDA", "390", "US$m", "Reported, before leases."],
      ],
    ),
  );
  fireEvent.click(figure.getByRole("radio", { name: "Table" }));
  const grid = figure.getByRole("table", { name: "EBITDA bridge" });
  expect(within(grid).getByRole("columnheader", { name: "Basis and limitation" })).toBeVisible();
  expect(within(grid).getAllByRole("cell", { name: "Reported, before leases." })).toHaveLength(2);
  expect(within(grid).getByRole("cell", { name: "Synthetic." })).toBeVisible();
});
