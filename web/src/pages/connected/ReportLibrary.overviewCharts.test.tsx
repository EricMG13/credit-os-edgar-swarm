import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ReportReader } from "./ReportLibrary";
import type { Block, Section, Snapshot } from "./publishedReport";

const text = (line: number, value: string): Block => ({
  type: "text",
  line,
  end: line,
  text: value,
});
const h = (heading: string, level: number, line: number, blocks: Block[] = []): Section => ({
  heading,
  level,
  line,
  blocks,
});
const SHA2 = "b".repeat(64);
const SHA6 = "d".repeat(64);
const CP6_LIMIT = "The committee size rests on one unaudited quarter.";

function snapshot() {
  const run = {
    folder: "acme",
    issuer: "Acme",
    issuerKey: "acme",
    asOf: "2026-03-31",
    period: "FY2025",
    pathway: "earnings_update",
    publicationVerified: true,
    assessmentScope: "standard",
    modules: {
      "CP-2": { outputs: ["acme/cp2"], default: "acme/cp2" },
      "CP-6": { outputs: ["acme/cp6"], default: "acme/cp6" },
    },
    evidence: { sources: [], unused: [], unrecorded: [], handoffs: [], downloads: [], zip: null },
  };
  const output = (module: string, sha256: string, extra = {}) => ({
    id: `acme/${module.toLowerCase().replace("-", "")}`,
    run: "acme",
    module,
    sha256,
    label: module,
    href: "",
    ...extra,
  });
  return {
    catalogue: {
      real: [
        {
          id: "acme",
          name: "Acme",
          issuer: "Acme",
          title: "",
          date: "",
          period: "FY2025",
          sector: "",
          metrics: {},
        },
      ],
    },
    workspace: {
      runs: { acme: run },
      outputs: {
        "acme/cp2": output("CP-2", SHA2, {
          maps: [{ title: "credit-risk transmission", table: 12 }],
        }),
        "acme/cp6": output("CP-6", SHA6),
      },
      handoffs: {
        [SHA2]: [
          h("Findings", 2, 1),
          h("Bottom line", 3, 3, [text(4, "Leverage is high but liquidity covers two years.")]),
          h("Map: credit-risk transmission", 3, 10, [
            {
              type: "table",
              line: 12,
              headers: ["From", "Relationship", "Edge type", "To", "Evidence"],
              rows: [
                {
                  line: 14,
                  cells: ["Rates", "raise", "Analyst Interpretation", "Interest", "Note 4"],
                },
              ],
            },
          ]),
        ],
        [SHA6]: [
          h("Findings", 2, 1),
          h("Bottom line", 3, 3, [text(4, "Add one percent of NAV.")]),
          h("Limitations", 3, 6, [text(7, CP6_LIMIT)]),
        ],
      },
      models: [],
    },
    chips: {},
  } as unknown as Snapshot;
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState(null, "", "/");
});

it("keeps Key charts and every module's limitations on an Overview with a front page", async () => {
  vi.stubGlobal("fetch", () => Promise.resolve(Response.json(snapshot())));
  window.history.replaceState(null, "", "/#overview");
  render(<ReportReader id="acme" mode="synthetic" />);
  const title = await screen.findByRole("heading", { name: "Key charts" });
  expect(
    within(title.closest("section") as HTMLElement).getByRole("figure", {
      name: "credit-risk transmission",
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Key charts" })).toBeInTheDocument();
  expect(screen.getByText(CP6_LIMIT)).toBeInTheDocument();
  expect(screen.queryByText("Add one percent of NAV.")).toBeNull();
});
