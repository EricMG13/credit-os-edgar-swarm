import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { PublishedRun, Section, Snapshot, Table } from "../publishedReport";
import { buildReportView } from "../reportView";
import { specialistOverview } from "./purposeReport";
import { exportRoute, reportExports, type ExportId } from "./reportExport";

const folder = "verified-fixture";
const date = "2025-11-30";

function text(heading: string, value: string, line = 10): Section {
  return {
    heading,
    level: 3,
    line: line - 1,
    blocks: [{ type: "text", line, end: line, text: value }],
  };
}

function context(heading: string, line = 3): Section {
  return { level: 2, heading, line, blocks: [] };
}

function table(heading: string, headers: string[], cells: string[][], line = 20): Section {
  const block: Table = {
    type: "table",
    line,
    headers,
    rows: cells.map((values, index) => ({ line: line + index + 2, cells: values })),
  };
  return { heading, level: 3, line: line - 1, blocks: [block] };
}

function publication(pathway: string) {
  const run: PublishedRun = {
    issuer: "Example Issuer",
    pathway,
    folder,
    asOf: date,
    period: "",
    title: "",
    publicationVerified: true,
    assessmentScope: "partial",
    modules: {},
    evidence: {
      sources: [],
      unused: [],
      unrecorded: [],
      noSourcesModules: [],
      handoffs: [],
      zip: null,
      downloads: [],
      record: { hashes: [], instructions: [], calls: [], cap: null },
    },
  };
  const snapshot: Snapshot = {
    reportFolder: folder,
    catalogue: { real: [] },
    workspace: { runs: { [folder]: run }, outputs: {}, handoffs: {}, models: [] },
    chips: {},
  };
  function add(module: string, sections: Section[], key = "selected") {
    const id = `${folder}/${module}-${key}.md`;
    const sha256 = (Object.keys(snapshot.workspace.outputs).length + 1)
      .toString(16)
      .padStart(64, "a");
    snapshot.workspace.outputs[id] = { id, run: folder, module, sha256, label: "", href: "" };
    snapshot.workspace.handoffs[sha256] = sections;
    const slot = run.modules[module] ?? { outputs: [], default: id };
    slot.outputs.push(id);
    run.modules[module] = slot;
    return { id, sha256 };
  }
  return { snapshot, run, add };
}

function open(snapshot: Snapshot, id: ExportId) {
  const available = reportExports(snapshot, folder, "live");
  expect(exportRoute(`#export/${id}`)).toBe(id);
  expect(available.options.map((option) => option.id)).toEqual([id]);
  const report = available.resolve(id);
  if (report.state !== "ready") throw new Error(report.reason);
  return render(report.document.content);
}

function unavailable(snapshot: Snapshot, id: ExportId) {
  const available = reportExports(snapshot, folder, "live");
  expect(available.options).toHaveLength(0);
  expect(available.resolve(id)).toEqual({ state: "unavailable", reason: available.reason });
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("uses only the designated comparative earnings owner even when the foundation has results", () => {
  const { snapshot, add } = publication("earnings_update");
  add("CP-1", [context("Findings"), text("Bottom line", "Revenue rose in the foundation.")]);
  add("CP-1B", [
    context("Findings"),
    text("Bottom line", "Not assessable: the periods do not match."),
  ]);
  add(
    "CP-1B",
    [context("Findings"), text("Bottom line", "Assessment from a non-designated attempt.")],
    "other",
  );
  unavailable(snapshot, "earnings-update");
});

it("preserves a qualified earnings lead and rejects a mixed private observation with the whole row", () => {
  const { snapshot, add } = publication("earnings_update");
  add("CP-1B", [
    context("Findings"),
    text("Bottom line", "Sales improved, while cash fell.\nBasis: private-evidence.pdf"),
    table(
      "Chart data: prior and current results",
      ["Measure", "Prior", "Current", "Basis and limitation"],
      [
        ["Safe measure", "0", "Not supplied: no current observation", "USD millions"],
        ["Private measure", "5.911", "9.117", "C:\\broker\\evidence"],
      ],
    ),
  ]);
  open(snapshot, "earnings-update");
  expect(screen.getByText("Sales improved, while cash fell.")).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
  expect(screen.getByText("Not supplied: no current observation")).toBeInTheDocument();
  expect(screen.queryByText("9.117")).toBeNull();
  expect(screen.queryByText(/private-evidence/)).toBeNull();
});

it.each(["Sources", "Next module", "Calculations"])(
  "does not draw an archived yield table from %s without the exact designated shape",
  (heading) => {
    const { snapshot, run, add } = publication("relative_value");
    run.assessmentScope = "unverified";
    run.methodChanges = ["Earlier methods"];
    const selection = text(
      "Security-selection view",
      "Both securities: Requires More Work; RV Unclear.",
    );
    selection.blocks.push({
      type: "text",
      line: 12,
      end: 12,
      text: "If both equivalents are dirty, the association remains conditional.",
    });
    const hidden = table(
      "Conditional yield observations",
      ["Instrument", "Maturity", "Price basis", "Yield, %"],
      heading === "Calculations" ? [] : [["March", "2029-03-01", "Assume clean", "6.000123456"]],
    );
    add("CP-3", [context("Findings"), selection, context(heading, 16), hidden]);
    add(
      "CP-3",
      [
        context("Findings"),
        selection,
        context("Calculations", 16),
        table(
          "Conditional yield observations",
          ["Instrument", "Maturity", "Price basis", "Yield, %"],
          [["Other", "2029-03-01", "Assume clean", "9.999999999"]],
        ),
      ],
      "other",
    );
    unavailable(snapshot, "relative-value");
  },
);

it("does not treat a blocked legal or recovery output as a printable finding", () => {
  const covenant = publication("covenant_refinancing");
  covenant.add("CP-4", [
    context("Findings"),
    text("Bottom line", "Not assessable: no test-date covenant inputs."),
  ]);
  unavailable(covenant.snapshot, "covenant-refinancing");
  const distressed = publication("distressed_restructuring");
  distressed.add("CP-4C", [
    context("Findings"),
    text("Bottom line", "Not assessable: the priority package is incomplete."),
  ]);
  unavailable(distressed.snapshot, "distressed-restructuring");
});

const datedExposure =
  "LQD reported 33,773,000 USD par of five ARCC notes at a combined 33,762,233.40 USD value, 0.109532894% of matching fund NAV. This measures the named issuer's held exposure; a small NAV share alone does not prove unused capacity, diversification compliance or easy exit. Two notes maturing in2029 account for 17,698,117.83 USD, 52.419866957% of this issuer holding's value; this is the fund's ARCC maturity grouping, not ARCC's total refinancing wall.";

it.each(["matched", "wrong table", "private basis", "proposal note"])(
  "prints current portfolio limits only with separable basis and matching attestation (%s)",
  async (kind) => {
    const matched = kind === "matched";
    const safeBasis = `Synthetic Compliance_Monitor snapshot as of ${date}.`;
    const { snapshot, run, add } = publication("portfolio_decision");
    add("CP-3", [
      context("Findings"),
      text("Portfolio view", datedExposure),
      table(
        "T3C.1 — Portfolio Input Gate",
        ["Input", "Available / Missing", "Source", "Limitation", "Portfolio Impact"],
        [
          [
            "Holdings and denominator",
            `Available for${date}`,
            "Synthetic fixture observations",
            "Historical fund report, not current trade inventory",
            "Dated observations only",
          ],
        ],
      ),
    ]);
    const selected = add("CP-6", [
      context("Findings"),
      text("Bottom line", "Evaluate the portfolio exposure."),
      table(
        "Chart data: portfolio limits",
        [
          "Limit",
          "Current exposure",
          "Proposed exposure",
          "Limit value",
          "Reporting unit",
          "Basis and limitation",
        ],
        [
          [
            "Single issuer",
            "2.37",
            "2.40",
            "2.50",
            "% NAV",
            kind === "private basis"
              ? "The analysis endorses 2.40% of NAV."
              : `${safeBasis} Proposal is illustrative.`,
          ],
          ["Unrated", "0", "Not supplied: no comparison", "5.00", "% NAV", safeBasis],
        ],
      ),
    ]);
    if (kind === "proposal note") {
      snapshot.workspace.handoffs[selected.sha256]?.at(-1)?.blocks.push({
        type: "text",
        line: 26,
        end: 26,
        text: "The analysis endorses 2.40% of NAV.",
      });
    }
    const committee = snapshot.workspace.outputs[selected.id];
    if (!committee) throw new Error("Missing committee fixture");
    committee.charts = [{ kind: "limits", title: "Portfolio limits", table: 20 }];
    run.actionTreatment = {
      "CP-6": {
        output: selected.id,
        sha256: selected.sha256,
        scope: "committee",
        state: "withheld",
        reason: "Committee action requires more work.",
      },
    };
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve(
          Response.json({
            basis: {
              folder,
              output: selected.id,
              sha256: selected.sha256,
              asOf: date,
              tableLines: [kind === "wrong table" ? 250 : 20],
            },
          }),
        ),
      ),
    );
    const { container } = open(snapshot, "portfolio-decision");
    expect(screen.getByText("Committee action requires more work.")).toBeInTheDocument();
    if (matched) {
      expect(
        await screen.findByRole("figure", { name: "Portfolio exposure and limits" }),
      ).toBeInTheDocument();
      expect(screen.getByText("2.37%")).toBeInTheDocument();
      expect(screen.getByText("0%")).toBeInTheDocument();
      expect(screen.getByText("limit 2.50%")).toBeInTheDocument();
    } else {
      expect(
        await screen.findByText(
          kind === "wrong table"
            ? /could not be verified against this run/
            : /Verified limit headroom .* unavailable/,
        ),
      ).toBeInTheDocument();
      expect(screen.queryByText("2.37%")).toBeNull();
    }
    expect(container.textContent).not.toContain("2.40");
    expect(container.querySelectorAll("a[href]")).toHaveLength(0);
  },
);

it("binds a current grouped earnings figure to the selected output and preserves the paired measure", () => {
  const { snapshot, add } = publication("earnings_update");
  const owner = add("CP-1B", [
    context("Findings"),
    text("Bottom line", "Reported revenue rose on a comparable basis."),
    table(
      "Chart data: prior and current results",
      [
        "Measure",
        "Prior period",
        "Prior",
        "Current period",
        "Current",
        "Reporting unit",
        "Basis and limitation",
      ],
      [
        [
          "Revenue",
          "Q3-2024",
          "1789",
          "Q3-2025",
          "2006",
          "USDm",
          "Reported sales with the same basis",
        ],
      ],
    ),
  ]);
  const output = snapshot.workspace.outputs[owner.id];
  if (!output) throw new Error("Missing earnings fixture");
  output.charts = [
    {
      kind: "grouped",
      table: 20,
      title: "Prior and current results",
      label: 0,
      periods: [1, 3],
      prior: 2,
      current: 4,
      unit: "USDm",
    },
  ];
  open(snapshot, "earnings-update");
  expect(screen.getByRole("figure", { name: "Prior and current results" })).toBeInTheDocument();
  expect(screen.getAllByText("1789").length).toBeGreaterThan(0);
  expect(screen.getByText("Reported sales with the same basis")).toBeInTheDocument();
});

it("keeps supplied synthetic quote scenarios from qualifying a current market report", () => {
  const { snapshot, add } = publication("relative_value");
  add("CP-3", [context("Findings"), text("Bottom line", "The comparison remains limited.")]);
  add("CP-3D", [
    context("Findings"),
    text("Bottom line", "A hypothetical market scenario examines the curve."),
    table(
      "Chart data: yield against maturity",
      [
        "Instrument",
        "Maturity date",
        "Yield",
        "Spread",
        "Quote date",
        "Source class",
        "Reporting unit",
        "Basis and limitation",
      ],
      [
        [
          "Example security",
          "2030-01-01",
          "9.69",
          "Not supplied: no spread",
          date,
          "Synthetic scenario",
          "%",
          "Illustrative data",
        ],
      ],
    ),
  ]);
  unavailable(snapshot, "relative-value");
});

it("withholds a whole chart observation when its attached qualification is private", () => {
  const { snapshot, add } = publication("earnings_update");
  const observations = table(
    "Chart data: prior and current results",
    [
      "Measure",
      "Prior period",
      "Prior",
      "Current period",
      "Current",
      "Reporting unit",
      "Basis and limitation",
    ],
    [
      [
        "Revenue",
        "Q3-2024",
        "123.456",
        "Q3-2025",
        "789.123",
        "USDm",
        "Requires the qualification below",
      ],
    ],
  );
  observations.blocks.push({
    type: "text",
    line: 24,
    end: 24,
    text: "Use the qualification in private-methodology.pdf.",
  });
  const owner = add("CP-1B", [
    context("Findings"),
    text("Bottom line", "Reported revenue changed."),
    observations,
  ]);
  const output = snapshot.workspace.outputs[owner.id];
  if (!output) throw new Error("Missing earnings fixture");
  output.charts = [
    {
      kind: "grouped",
      table: 20,
      title: "Prior and current results",
      label: 0,
      periods: [1, 3],
      prior: 2,
      current: 4,
      unit: "USDm",
    },
  ];
  open(snapshot, "earnings-update");
  expect(screen.getByText(/observation qualifications are only available/)).toBeInTheDocument();
  expect(screen.queryByRole("figure")).toBeNull();
  expect(screen.queryByText("789.123")).toBeNull();
  expect(screen.queryByText("123.456")).toBeNull();
});

it("keeps typed dated yields with the hold and excludes preferred-at-98 lead prose", () => {
  const { snapshot, run, add } = publication("relative_value");
  const decision = add("CP-3", [
    context("Findings"),
    text("Bottom line", "The practical call is held."),
  ]);
  run.actionTreatment = {
    "CP-3": {
      output: decision.id,
      sha256: decision.sha256,
      scope: "instrument",
      state: "withheld",
      reason: "The market depth is unavailable.",
    },
  };
  const market = add("CP-3D", [
    context("Findings"),
    text("Bottom line", "The 2029 note is our preferred instrument at 98."),
    table(
      "Chart data: yield against maturity",
      [
        "Instrument",
        "Maturity date",
        "Yield",
        "Spread",
        "Quote date",
        "Source class",
        "Reporting unit",
        "Basis and limitation",
      ],
      [
        [
          "US04010LBF94",
          "2029-03-01",
          "5.200",
          "Not supplied: no spread",
          date,
          "Issuer reported quote",
          "%",
          "Yield to maturity",
        ],
        [
          "US04010LBG77",
          "2029-07-15",
          "6.125",
          "This is our entry at 98.",
          date,
          "Issuer reported quote",
          "%",
          "Yield to maturity",
        ],
        [
          "US04010LBB80",
          "2028-06-15",
          "7.999",
          "Not supplied: no spread",
          date,
          "Issuer reported quote",
          "%",
          "Yield to maturity. Size at 98.",
        ],
      ],
    ),
  ]);
  const output = snapshot.workspace.outputs[market.id];
  if (!output) throw new Error("Missing market fixture");
  output.charts = [
    {
      table: 20,
      kind: "scatter",
      title: "Preferred instrument at 98",
      label: 0,
      date: 1,
      yield: 2,
      spread: 3,
      quoted: 4,
      source: 5,
      unit: "%",
    },
  ];
  const { container } = open(snapshot, "relative-value");
  expect(screen.getByText("The market depth is unavailable.")).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "5.200" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "6.125" })).toBeInTheDocument();
  expect(screen.getByRole("figure", { name: "Dated yields against maturity" })).toBeInTheDocument();
  const projection = specialistOverview(
    buildReportView(snapshot, folder, run),
    run,
    (text) => text,
  );
  expect(projection?.findings).toEqual([
    {
      owner: { id: market.id, sha256: market.sha256, module: "CP-3D" },
      line: 22,
      body: "US04010LBF94 · 5.200% · Yield to maturity · 2025-11-30 · Matures 2029-03-01 · Issuer reported quote",
    },
    {
      owner: { id: market.id, sha256: market.sha256, module: "CP-3D" },
      line: 23,
      body: "US04010LBG77 · 6.125% · Yield to maturity · 2025-11-30 · Matures 2029-07-15 · Issuer reported quote",
    },
  ]);
  expect(projection?.restriction.reason).toBe("The market depth is unavailable.");
  expect(container.textContent).not.toMatch(
    /preferred instrument at 98|entry at 98|size at 98|7\.999/i,
  );
});

it("does not accept Relative Value on prose identity, missing quote date or untyped yield basis", () => {
  const { snapshot, add } = publication("relative_value");
  add("CP-3", [context("Findings"), text("Bottom line", "Instrument preference withheld.")]);
  add("CP-3D", [
    context("Findings"),
    text("Bottom line", "The 2029 note is preferred at 98."),
    table(
      "Chart data: yield against maturity",
      [
        "Instrument",
        "Maturity date",
        "Yield",
        "Spread",
        "Quote date",
        "Source class",
        "Reporting unit",
        "Basis and limitation",
      ],
      [
        [
          "Preferred at 98",
          "2029-03-01",
          "5.200",
          "",
          date,
          "Issuer reported quote",
          "%",
          "Yield to maturity",
        ],
        [
          "US04010LBG77",
          "2029-07-15",
          "6.125",
          "",
          "",
          "Issuer reported quote",
          "%",
          "Yield to maturity",
        ],
        [
          "US04010LBB80",
          "2028-06-15",
          "7.999",
          "",
          date,
          "Issuer reported quote",
          "bp",
          "Yield to maturity",
        ],
      ],
    ),
  ]);
  unavailable(snapshot, "relative-value");
});

it("shows only the exact archived disposition and typed marks when the owner paragraph mixes in a recommendation", () => {
  const { snapshot, run, add } = publication("relative_value");
  run.assessmentScope = "unverified";
  run.methodChanges = ["Earlier methods"];
  add("CP-3", [
    context("Findings"),
    text(
      "Security-selection view",
      "Both securities: Requires More Work; RV Unclear. Positive comparative work now establishes what the apparent compensation difference actually depends on. If both annual equivalents are clean, July's maturity yield exceeds March's by 2.210154bp, but the same-date Treasury-tenor adjustment leaves only 0.160839bp of simple residual difference. Source fair values are rounded to USDm: an analyst nearest-million display-precision sensitivity, varying each value independently by±0.5USDm, makes the yield gap range from −0.616287 to5.036816bp. A precise ordering is not supported in that case.",
    ),
    text(
      "Security-selection view",
      "If both equivalents are dirty, July's extra yield is18.522010bp and simple residual difference16.472695bp; rounding alone leaves that yield ordering positive. That is the strongest compensation countercase for July, but neither price basis nor executable depth is established. The 2029 note is our preferred instrument at 98.",
      15,
    ),
    table(
      "T3.5 — Relative value table",
      ["Security", "Market Level", "Market Date", "Quote Quality", "Seniority / Security"],
      [
        [
          "March2029 US04010LBF94",
          "Evaluated101.000000 per100; text at 98.",
          date,
          "Issuer mark",
          "Parent senior unsecured; effective/structural subordination per A95",
        ],
        [
          "July2029 US04010LBG77",
          "Evaluated101.294118 per100; text at 98.",
          date,
          "Issuer mark",
          "Parent senior unsecured; no equal-covenant/guarantee assumption",
        ],
      ],
    ),
    table(
      "T3.9 — Observable monitoring triggers",
      ["Trigger", "Threshold / Signal", "Why It Matters", "Credit / RV Impact", "Evidence ID"],
      [
        [
          "RV01 Both actual price bases and precise values resolved",
          "Explicit accrued/clean/dirty convention plus unrounded same-time two-way levels",
          "Preferred at 98",
          "Take the trade",
          "C1–5",
        ],
      ],
      26,
    ),
    context("Calculations", 31),
    table(
      "Conditional yield observations",
      ["Instrument", "Maturity", "Price basis", "Yield, %"],
      [
        ["US04010LBF94", "2029-03-01", "Assume clean", "5.600264521"],
        ["US04010LBF94", "2029-03-01", "Assume dirty", "6.131728905"],
        ["US04010LBG77", "2029-07-15", "Assume clean", "5.622366058"],
        ["US04010LBG77", "2029-07-15", "Assume dirty", "6.316949000"],
      ],
      35,
    ),
  ]);
  const { container } = open(snapshot, "relative-value");
  expect(screen.getByText(/^Both securities: Requires More Work; RV Unclear/)).toBeInTheDocument();
  const projection = specialistOverview(
    buildReportView(snapshot, folder, run),
    run,
    (text) => text,
  );
  expect(projection?.findings.map(({ line }) => line)).toEqual([10, 15]);
  expect(screen.getByText("5.600264521")).toBeInTheDocument();
  expect(screen.getByText("101.000000")).toBeInTheDocument();
  expect(screen.getByText(/0\.160839bp/)).toBeInTheDocument();
  expect(screen.getByText(/16\.472695bp/)).toBeInTheDocument();
  expect(screen.getByText(/A precise ordering is not supported/)).toBeInTheDocument();
  expect(screen.getByText(/unrounded same-time two-way levels/)).toBeInTheDocument();
  expect(container.textContent).not.toMatch(
    /preferred (?:instrument )?at 98|text at 98|take the trade/i,
  );
});

it("retains an authored non-USD runway basis and never supplies a default date or scale", () => {
  const { snapshot, add } = publication("covenant_refinancing");
  const liquidity = table(
    "Liquidity and cash runway",
    [
      "Decision driver",
      "Evidence-supported base",
      "12-month assessment",
      "18-month assessment",
      "Credit consequence",
    ],
    [
      [
        "Reported cash",
        "123.456",
        "March period",
        "Unestablished",
        "Availability remains conditional",
      ],
    ],
  );
  liquidity.blocks.unshift({
    type: "text",
    line: 19,
    end: 19,
    text: "Amounts are EUR millions unless stated otherwise. Opening liquidity is published March availability.",
  });
  add("CP-2D", [
    context("Findings"),
    text("Liquidity view", "Reported cash is conditional."),
    liquidity,
  ]);
  const { container } = open(snapshot, "covenant-refinancing");
  expect(screen.getByText(/EUR millions.*March availability/)).toBeInTheDocument();
  expect(screen.getByText("123.456")).toBeInTheDocument();
  expect(container.textContent).not.toMatch(/USD thousands|June availability/);
});

it("uses the same traced held portfolio facts in Overview and PDF and rejects positive archive tails", () => {
  const { snapshot, run, add } = publication("portfolio_decision");
  run.assessmentScope = "unverified";
  run.methodChanges = ["Earlier methods"];
  const committee = add("CP-6", [
    context("Findings"),
    text(
      "Final Sizing Posture",
      "Final Sizing Posture: Requires More Work. Increase the position to 3% NAV.",
    ),
    table(
      "CIO Final Memo",
      ["Required element", "Terminal portfolio view for separate delivery"],
      [
        ["Winner / why", "Increase the position to 3% NAV."],
        [
          "Most important Compliance evidence",
          "No dated governing cap/budget or executable evidence supports turning those measurements into permissible capacity",
        ],
      ],
    ),
  ]);

  const position = add("CP-3", [
    context("Findings"),
    text("Portfolio view", datedExposure + " Increase the position to 3% NAV.", 19),
    text(
      "Portfolio view",
      "A purely conditional40%-of-par recovery assumption implies a20,253,033.40 USD loss against the held market value, 6.570576451 fund-NAV basis points. No fund loss budget is supplied, so this is loss transmission, not risk-budget utilization or an actual recovery forecast. Increase the position to 3% NAV.",
      21,
    ),
    table(
      "T3C.0 — Actual held-instrument evidence",
      [
        "XML ordinal / CUSIP",
        "ISIN",
        "Maturity",
        "Reported coupon %",
        "Par USD",
        "Value USD",
        "Reported %NAV",
        "Value on loan USD",
      ],
      [
        [
          "888 / 04010LBK8",
          "US04010LBK89",
          "2030-09-01",
          "5.50000000",
          "4430000.00000000",
          "Increase the position to 3% NAV.",
          "0.014252072815",
          "0; source reports not on loan",
        ],
      ],
      31,
    ),
  ]);
  const { container } = open(snapshot, "portfolio-decision");
  expect(screen.getByText("Final Sizing Posture: Requires More Work.")).toBeInTheDocument();
  expect(screen.getByText("Portfolio action and size withheld")).toBeInTheDocument();
  expect(screen.getByText(/20,253,033.40 USD/)).toBeInTheDocument();
  expect(screen.getByText(/No dated governing cap/)).toBeInTheDocument();
  expect(screen.queryByText("US04010LBK89")).toBeNull();
  expect(container.textContent).not.toContain("Increase the position to 3%");
  const projection = specialistOverview(
    buildReportView(snapshot, folder, run),
    run,
    (text) => text,
  );
  expect(projection?.findings).toEqual([
    {
      line: 10,
      owner: { id: committee.id, sha256: committee.sha256, module: "CP-6" },
      body: "Final Sizing Posture: Requires More Work.",
    },
    {
      line: 19,
      owner: { id: position.id, sha256: position.sha256, module: "CP-3" },
      body: datedExposure,
    },
  ]);
  expect(projection?.restriction.label).toBe("Portfolio action and size withheld");
});

it.each([false, true])(
  "does not admit a hold-only portfolio PDF even with a potential limits exhibit (%s)",
  (withLimits) => {
    const { snapshot, run, add } = publication("portfolio_decision");
    const committee = add("CP-6", [
      context("Findings"),
      text("Bottom line", "Committee action requires more work."),
      ...(withLimits
        ? [
            table(
              "Chart data: portfolio limits",
              [
                "Limit",
                "Current exposure",
                "Proposed exposure",
                "Limit value",
                "Reporting unit",
                "Basis and limitation",
              ],
              [
                [
                  "Single issuer",
                  "2.37",
                  "2.40",
                  "2.50",
                  "% NAV",
                  `Synthetic Compliance_Monitor snapshot as of ${date}.`,
                ],
              ],
            ),
          ]
        : []),
    ]);
    const selected = snapshot.workspace.outputs[committee.id];
    if (!selected) throw new Error("Missing portfolio fixture");
    if (withLimits) selected.charts = [{ table: 20, kind: "limits", title: "Portfolio limits" }];
    run.actionTreatment = {
      "CP-6": {
        state: "withheld",
        scope: "committee",
        output: committee.id,
        sha256: committee.sha256,
        reason: "Committee action requires more work.",
      },
    };
    unavailable(snapshot, "portfolio-decision");
    expect(
      specialistOverview(buildReportView(snapshot, folder, run), run, (text) => text),
    ).toBeNull();
  },
);

it("rejects hold-only eligibility when the independent portfolio observations have a different date", () => {
  const { snapshot, run, add } = publication("portfolio_decision");
  const committee = add("CP-6", [
    context("Findings"),
    text("Bottom line", "Committee action requires more work."),
  ]);
  add("CP-3", [
    context("Findings"),
    text("Portfolio view", datedExposure),
    table(
      "T3C.1 — Portfolio Input Gate",
      ["Input", "Available / Missing", "Source", "Limitation", "Portfolio Impact"],
      [
        [
          "Holdings and denominator",
          "Available for2025-05-31",
          "Synthetic fixture observations",
          "Historical fund report, not current trade inventory",
          "Dated observations only",
        ],
      ],
    ),
  ]);
  run.actionTreatment = {
    "CP-6": {
      state: "withheld",
      scope: "committee",
      output: committee.id,
      sha256: committee.sha256,
      reason: "Committee action requires more work.",
    },
  };
  unavailable(snapshot, "portfolio-decision");
});
