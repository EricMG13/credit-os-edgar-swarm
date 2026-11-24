import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { CatalogueRun, LibraryIndex } from "../publishedReport";
import { groupIssuers } from "./group";
import { IssuerRow } from "./IssuerRow";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const run = (id: string, date: string, extra: Partial<CatalogueRun> = {}): CatalogueRun => ({
  id,
  name: "Acme",
  issuer: "Acme",
  title: "Full credit assessment",
  date,
  sector: "Industrial",
  period: "FY2025",
  metrics: {},
  ...extra,
});

function index(entries: CatalogueRun[], published: string[], preview = false): LibraryIndex {
  return {
    catalogue: { real: entries },
    workspace: {
      runs: Object.fromEntries(
        published.map((id) => [id, { folder: id, issuerKey: "acme", pathway: "credit_snapshot" }]),
      ),
    },
    ...(preview ? { preview: { reason: "Retained." } } : {}),
  };
}

const METRICS: CatalogueRun["metrics"] = {
  net_leverage: {
    value: "2.25",
    unit: "x",
    period: "FY2025",
    prior: { value: "3.00", period: "FY2024" },
    change: "-0.75",
  },
  coverage: { value: "4.19", unit: "x", period: "FY2025" },
  cash: { value: "100", unit: "US$m", period: "FY2025" },
  undrawn: { value: "250", unit: "US$m", period: "FY2025" },
};

function draw(entries: CatalogueRun[], published: string[]) {
  const [group] = groupIssuers(index(entries, published));
  if (!group) throw new Error("no group");
  return render(
    <ul>
      <IssuerRow group={group} />
    </ul>,
  );
}

it("draws one row for an issuer with the three figures, a stance gap, chips and no zero", () => {
  draw([run("acme-2026", "2026-03-31", { metrics: METRICS })], ["acme-2026"]);
  const row = screen.getByRole("listitem");
  expect(within(row).getByRole("heading", { name: "Acme" })).toBeVisible();
  expect(within(row).getByText("Stance not stated")).toBeVisible();
  expect(within(row).getByText("2.25x")).toHaveClass("font-mono");
  expect(within(row).getByText("better")).toBeVisible();
  expect(within(row).getByText("4.19x")).toBeVisible();
  expect(within(row).getAllByText("No prior period stated")).toHaveLength(2);
  expect(within(row).getByText("US$100m")).toBeVisible();
  expect(within(row).getByText("Undrawn:")).toBeVisible();
  expect(within(row).getByText("Full credit assessment")).toBeVisible();
  expect(within(row).getByText("31 March 2026")).toBeVisible();
  expect(within(row).getByText("Delivered")).toBeVisible();
  expect(within(row).getByRole("link", { name: "Open Calendar" })).toHaveAttribute(
    "href",
    "/report/acme-2026#calendar",
  );
});

it("draws a figure the catalogue does not state as n.a. with its reason", () => {
  draw([run("acme-2026", "2026-03-31")], ["acme-2026"]);
  expect(screen.getAllByText("n.a.")).toHaveLength(3);
  expect(screen.getAllByText("Not supplied")).toHaveLength(3);
});

it("opens to every run newest first, each with its report", () => {
  draw(
    [
      run("acme-2025", "2025-03-31"),
      run("acme-2026", "2026-03-31"),
      run("acme-2024", "2024-03-31"),
    ],
    ["acme-2026", "acme-2025", "acme-2024"],
  );
  expect(screen.getByRole("link", { name: "3 runs" })).toHaveAttribute(
    "href",
    "/report/acme-2026#history",
  );
  const toggle = screen.getByRole("button", { name: "Show runs and detail for Acme" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  const runs = within(screen.getByRole("region", { name: "Runs, Acme" })).getAllByRole("listitem");
  expect(runs.map((item) => item.textContent)).toEqual([
    expect.stringContaining("31 March 2026"),
    expect.stringContaining("31 March 2025"),
    expect.stringContaining("31 March 2024"),
  ]);
  expect(within(runs[0] as HTMLElement).getByText("Latest")).toBeVisible();
  expect(
    within(runs[1] as HTMLElement).getByRole("link", { name: /^Open report of / }),
  ).toHaveAttribute("href", "/report/acme-2025");
  expect(
    within(runs[2] as HTMLElement).getByRole("link", { name: /^Open report of / }),
  ).toHaveAttribute("href", "/report/acme-2024");
});

it("says a run without a report has none, and offers no link to it", () => {
  draw([run("acme-2026", "2026-03-31")], []);
  expect(screen.getByText("No report published")).toBeVisible();
  expect(screen.queryByRole("link", { name: "Acme" })).toBeNull();
  expect(screen.queryByRole("link", { name: /Calendar/ })).toBeNull();
  expect(screen.getByText("Needs a published report")).toBeVisible();
});

it("draws the stance gap's reason in the opened row, not a guessed stance", () => {
  draw([run("acme-2026", "2026-03-31")], ["acme-2026"]);
  fireEvent.click(screen.getByRole("button", { name: /Show runs and detail/ }));
  expect(screen.getByText(/does not yet state its stance as a field/)).toBeVisible();
});
