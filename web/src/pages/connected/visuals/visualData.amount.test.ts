import { expect, it } from "vitest";
import { amount, cellAmount, decimalCommaColumns, type SourceTable } from "./visualData";

/** A cell of a column that the table's other cells prove is written with decimal commas. */
const decimalColumn: SourceTable = {
  line: 1,
  headers: ["Period", "Total debt / EBITDA"],
  rows: [],
  decimalComma: new Set([1]),
};
const inDecimalColumn = (cell: string) => cellAmount(decimalColumn, ["FY2023", cell], 1);
const inPlainColumn = (cell: string) =>
  cellAmount({ ...decimalColumn, decimalComma: undefined }, ["FY2023", cell], 1);

it.each([
  ["2.80", 2.8],
  ["1250", 1250],
  ["-0.5", -0.5],
  ["1,250", 1250],
  ["-1,250", -1250],
  ["12,345,678", 12345678],
  ["1,250.5", 1250.5],
])("reads %s as %d, a comma-grouped or plain number", (cell, value) => {
  expect(amount(cell)).toBe(value);
});

it.each([
  ["3,75", 3.75],
  ["-3,75", -3.75],
  ["12,5", 12.5],
  ["0,375", 0.375],
  ["1234,5", 1234.5],
  ["1,2345", 1.2345],
])("reads %s as the decimal comma it is, %d", (cell, value) => {
  expect(amount(cell)).toBe(value);
});

it.each([
  "1,2,3",
  "1,23,4567",
  "123,45,678",
  "1.234,56",
  "1,250,5",
  "12,34,5",
  "1,,000",
  "1,",
  ",5",
  "3,",
  "3,75x",
  "3,7 5",
  "3,75%",
  "-",
  "",
  "n/a",
  "9".repeat(400),
])("does not place %s on an axis", (cell) => {
  expect(amount(cell)).toBeNull();
});

it.each([
  ["21,00,000", 2100000],
  ["1,23,456", 123456],
  ["-1,23,456", -123456],
  ["12,34,567.5", 1234567.5],
  ["1,23,45,678", 12345678],
])("reads the Indian lakh and crore grouping %s as %d", (cell, value) => {
  expect(amount(cell)).toBe(value);
  expect(inDecimalColumn(cell)).toBe(value);
});

it.each([
  ["2,800", 2.8],
  ["1,250", 1.25],
  ["3,75", 3.75],
  ["0,375", 0.375],
  ["-2,800", -2.8],
])(
  "reads %s as a decimal comma when its column is written with decimal commas, %d",
  (cell, value) => {
    expect(inDecimalColumn(cell)).toBe(value);
  },
);

it.each([
  ["1,250,000", 1250000],
  ["2,800.5", 2800.5],
  ["12,345,678", 12345678],
  ["2.80", 2.8],
  ["2800", 2800],
])("reads %s as written even in a column of decimal commas, %d", (cell, value) => {
  expect(inDecimalColumn(cell)).toBe(value);
});

it.each(["1.234,56", "1,2,3", "3,", ",5", "3,75x", "n/a", ""])(
  "still does not place %s on an axis in a column of decimal commas",
  (cell) => {
    expect(inDecimalColumn(cell)).toBeNull();
  },
);

it("reads a cell with no column evidence as it always did, three digits after the comma as thousands", () => {
  expect(amount("2,800")).toBe(2800);
  expect(inPlainColumn("2,800")).toBe(2800);
  expect(cellAmount({ ...decimalColumn, decimalComma: new Set([2]) }, ["FY2023", "2,800"], 1)).toBe(
    2800,
  );
});

it("is not taken for a column flag when mapped over cells, which passes the index second", () => {
  expect(["2,800", "3,75", "1,250"].map(amount)).toEqual([2800, 3.75, 1250]);
});

it.each([
  [
    [
      ["FY2023", "3,75"],
      ["FY2024", "2,800"],
    ],
    [1],
  ],
  [
    [
      ["FY2023", "2,800"],
      ["FY2024", "0,375"],
    ],
    [1],
  ],
  [
    [
      ["FY2023", "12,5"],
      ["FY2024", "1,250"],
    ],
    [1],
  ],
  [
    [
      ["FY2023", "3,750"],
      ["FY2024", "2,800"],
    ],
    [],
  ],
  [
    [
      ["FY2023", "1,250"],
      ["FY2024", "12,345"],
    ],
    [],
  ],
  [
    [
      ["FY2023", "1,250,000"],
      ["FY2024", "3.75"],
    ],
    [],
  ],
  [
    [
      ["FY2023", "21,00,000"],
      ["FY2024", "1,23,456"],
    ],
    [],
  ],
  [
    [
      ["FY2023", "3.75"],
      ["FY2024", "2.80"],
    ],
    [],
  ],
  [
    [
      ["FY2023", "3,75", "1,250"],
      ["FY2024", "2,800", "2,800"],
    ],
    [1],
  ],
] as const)("finds the columns that prove the decimal comma in %j: %j", (rows, expected) => {
  expect([...decimalCommaColumns(rows.map((row) => [...row]))]).toEqual(expected);
});
