import { render, screen, within } from "@testing-library/react";
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

  it("marks each tone with a visible word and a shape, once, never sr-only", () => {
    const metric = (change: string) => ({
      value: "4.4",
      unit: "x",
      period: "FY2024",
      prior: { value: "4.2", period: "FY2023" },
      change,
    });
    render(
      <HeadlineFigures
        catalogue={run({
          net_leverage: metric("0.2"),
          coverage: metric("0.2"),
          cash: { ...metric("0"), unit: "USD millions" },
        })}
      />,
    );
    const line = (text: RegExp) => {
      const el = screen.getByText(text);
      expect(el.className).not.toContain("sr-only");
      expect(el.querySelector(".sr-only")).toBeNull();
      return el;
    };
    const count = (el: HTMLElement, word: string) => el.textContent.split(word).length - 1;
    const [lev, cov] = screen.getAllByText(/\+0\.2x vs FY2023/);
    if (!lev || !cov) throw new Error("both 0.2x comparators should be drawn");
    expect(within(lev).getByText("worse")).toBeVisible();
    expect(count(lev, "worse")).toBe(1);
    expect(lev.querySelector('[data-shape="diamond"]')).not.toBeNull();
    expect(within(cov).getByText("better")).toBeVisible();
    expect(count(cov, "better")).toBe(1);
    expect(cov.querySelector('[data-shape="filled circle"]')).not.toBeNull();
    for (const el of [lev, cov]) expect(el.querySelector(".sr-only")).toBeNull();
    const flat = line(/\$0m vs FY2023/);
    expect(count(flat, "unchanged")).toBe(1);
    expect(flat.querySelector('[data-shape="ring"]')).not.toBeNull();
  });
});
