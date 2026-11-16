import { expect, it } from "vitest";
import { serviceText } from "./api";
import cases from "./moduleCodes.cases.json";
import { plainModuleNames, readerText } from "./publishedReport";

const surfaces: Record<string, (text: string) => string> = {
  reader: readerText,
  evidence: plainModuleNames,
  service: serviceText,
};

it.each(cases.cases as [string, string, string][])("%s: %s", (surface, input, expected) => {
  expect(surfaces[surface]?.(input)).toBe(expected);
});
