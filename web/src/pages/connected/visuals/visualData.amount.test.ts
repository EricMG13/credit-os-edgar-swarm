import { expect, it } from "vitest";
import { amount } from "./visualData";

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
  "1,23,456",
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
