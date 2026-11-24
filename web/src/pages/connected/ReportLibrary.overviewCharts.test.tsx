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
const SHA1 = "a".repeat(64);
const SHA3 = "c".repeat(64);
const LEAD = "Leverage is high but liquidity covers two years.";
const CP2_LIMIT = "Covenant headroom was not established.";
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

type Options = {
  pathway: string;
  foundation?: boolean;
  maps?: boolean;
  lead?: boolean;
  cp3?: string;
};

/** A verified run; the handoffs are written to the shapes the Overview reads. */
function fullSnapshot({ pathway, foundation, maps, lead, cp3 }: Options) {
  const base = snapshot() as unknown as {
    workspace: {
      runs: Record<string, Record<string, unknown>>;
      outputs: Record<string, Record<string, unknown>>;
      handoffs: Record<string, Section[]>;
    };
  };
  const { runs, outputs, handoffs } = base.workspace;
  const run = runs.acme as { modules: Record<string, unknown> };
  runs.acme = {
    ...run,
    pathway,
    ...(lead
      ? { lead: { module: "CP-2", output: "acme/cp2", sha256: SHA2, line: 4, text: LEAD } }
      : {}),
  };
  if (!maps) outputs["acme/cp2"] = { ...outputs["acme/cp2"], maps: [] };
  handoffs[SHA2] = [
    h("Findings", 2, 1),
    h("Bottom line", 3, 3, [text(4, LEAD)]),
    h("Limitations", 3, 6, [text(7, CP2_LIMIT)]),
    ...(maps ? (handoffs[SHA2] ?? []).filter(({ heading }) => heading.startsWith("Map:")) : []),
  ];
  if (foundation) {
    run.modules["CP-1"] = { outputs: ["acme/cp1"], default: "acme/cp1" };
    outputs["acme/cp1"] = {
      id: "acme/cp1",
      run: "acme",
      module: "CP-1",
      sha256: SHA1,
      label: "CP-1",
      href: "",
      charts: [{ title: "Leverage", table: 11, columns: [1], unit: "x" }],
    };
    handoffs[SHA1] = [
      h("Findings", 2, 1),
      h("Chart data: leverage", 3, 10, [
        {
          type: "table",
          line: 11,
          headers: ["Period", "Net debt / EBITDA", "Reporting unit", "Basis and limitation"],
          rows: [{ line: 13, cells: ["FY 2025", "3.40", "x", "Published balance"] }],
        },
      ]),
    ];
  }
  if (cp3) {
    run.modules["CP-3"] = { outputs: ["acme/cp3"], default: "acme/cp3" };
    outputs["acme/cp3"] = {
      id: "acme/cp3",
      run: "acme",
      module: "CP-3",
      sha256: SHA3,
      label: "CP-3",
      href: "",
    };
    handoffs[SHA3] = [h("Findings", 2, 1), h("Limitations", 3, 6, [text(7, cp3)])];
  }
  return base as unknown as Snapshot;
}

async function overview(options: Options) {
  vi.stubGlobal("fetch", () => Promise.resolve(Response.json(fullSnapshot(options))));
  window.history.replaceState(null, "", "/#overview");
  render(<ReportReader id="acme" mode="synthetic" />);
  await screen.findByRole("heading", { name: "Overview" });
  await screen.findByText(LEAD);
}

it("shows Key charts once on a Full run whose front page has figures of its own", async () => {
  await overview({ pathway: "credit_snapshot", foundation: true, maps: true, lead: true });
  expect(screen.getAllByRole("heading", { name: "Key charts" })).toHaveLength(1);
  expect(screen.getAllByRole("link", { name: "Key charts" })).toHaveLength(1);
  expect(document.getElementById("overview-key-charts")).not.toBeNull();
});

it("shows a limitation once when the front page and an action module both state it", async () => {
  await overview({
    pathway: "credit_snapshot",
    foundation: true,
    maps: true,
    lead: true,
    cp3: CP2_LIMIT,
  });
  expect(screen.getAllByText(CP2_LIMIT)).toHaveLength(1);
  expect(screen.getByText(CP6_LIMIT)).toBeInTheDocument();
});

it("shows neither a Key charts link nor a section for a verified front page with no charts", async () => {
  await overview({ pathway: "earnings_update", lead: true });
  expect(screen.queryByRole("link", { name: "Key charts" })).toBeNull();
  expect(screen.queryByRole("heading", { name: "Key charts" })).toBeNull();
});

it("points the Key charts link at a heading that exists wherever it is shown", async () => {
  await overview({ pathway: "earnings_update", maps: true, lead: true });
  expect(screen.getAllByRole("link", { name: "Key charts" })).toHaveLength(1);
  expect(document.getElementById("overview-key-charts")).not.toBeNull();
});
