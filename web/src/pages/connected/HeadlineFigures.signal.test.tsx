import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeadlineFigures } from "./HeadlineFigures";
import type { CatalogueRun } from "./publishedReport";

const run = (metrics: CatalogueRun["metrics"]): CatalogueRun => ({
  id: "r",
  name: "r",
  issuer: "A",
  title: "",
  date: "2025-01-01",
  sector: "",
  period: "",
  metrics,
});

describe("headline year comparator", () => {
  it("draws sign, words and colour for each metric", () => {
    render(
      <HeadlineFigures
        catalogue={run({
          net_leverage: {
            value: "4.4",
            unit: "x",
            period: "FY2024",
            prior: { value: "4.2", period: "FY2023" },
            change: "0.2",
          },
          coverage: {
            value: "4.00",
            unit: "x",
            period: "FY2024",
            prior: { value: "4.50", period: "FY2023" },
            change: "-0.50",
          },
          cash: {
            value: "275",
            unit: "USD millions",
            period: "FY2024",
            prior: { value: "300", period: "FY2023" },
            change: "-25",
          },
          undrawn: {
            value: "100",
            unit: "USD millions",
            period: "FY2024",
            prior: { value: "100", period: "FY2023" },
            change: "0",
          },
          leverage: { value: "5.0", unit: "x", period: "FY2024" },
        })}
      />,
    );
    const lev = screen.getByText(/\+0\.2x vs FY2023/);
    expect(lev.textContent).toContain("worse");
    expect(lev.className).toContain("text-error-text");
    const cov = screen.getByText(/-0\.50x vs FY2023/);
    expect(cov.textContent).toContain("worse");
    const cash = screen.getByText(/-\$25m vs FY2023/);
    expect(cash.textContent).toContain("worse");
    const flat = screen.getByText(/\$0m vs FY2023/);
    expect(flat.textContent).toContain("unchanged");
    expect(flat.className).toContain("text-text-secondary");
    expect(screen.getAllByText(/ vs /)).toHaveLength(4);
  });
});
