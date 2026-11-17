import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type {
  PublishedRun,
  ScriptCheckOutcome,
  ScriptCheckRecord,
  Snapshot,
} from "../publishedReport";
import { ReportEvidence } from "./Evidence";

const outcome: ScriptCheckOutcome = {
  figure: "Net debt",
  register: "T2.1",
  row: "R1",
  status: "disagreed",
  reason: "Net debt = gross debt - cash",
  script: "scripts/check.py",
  stated: "0.00",
  recomputed: 0,
  recomputedLabel: "exact",
  tolerance: 0,
  unit: "US$m",
};
const record: ScriptCheckRecord = {
  module: "CP-1",
  attempt: 2,
  response: "a".repeat(64),
  counts: [{ status: "disagreed", n: 1 }],
  scripts: [{ name: "scripts/check.py", sha256: "b".repeat(64) }],
  outcomes: [outcome],
};

/** A check card is named by its heading (C5-015: a card is not a landmark). */
function cardOf(name: string) {
  const card = screen.getByRole("heading", { name }).closest("section");
  if (!card) throw new Error(`no card headed ${name}`);
  return card;
}

function show(records?: ScriptCheckRecord[], target = "checks/CP-1") {
  const run = {
    folder: "run",
    evidence: {
      scriptChecks: records,
      sources: [],
      unused: [],
      unrecorded: [],
      handoffs: [],
      downloads: [],
      zip: null,
    },
  } as unknown as PublishedRun;
  const snapshot = { workspace: { runs: {} }, chips: {} } as unknown as Snapshot;
  return render(
    <ReportEvidence snapshot={snapshot} run={run} entries={[]} target={target} mode="synthetic" />,
  );
}
afterEach(cleanup);

it.each([undefined, []])(
  "has no tab or panel for missing records and falls back from checks to Summary",
  (records) => {
    show(records);
    expect(screen.queryByText("Script checks")).toBeNull();
    expect(screen.getByRole("heading", { name: "Run evidence" })).toBeInTheDocument();
    expect(screen.queryByRole("alert")).toBeNull();
  },
);

it("renders accepted record identity, exact figures, zero tolerance and status without rounding", () => {
  show([record]);
  const group = cardOf("T2.1 \u00b7 Net debt");
  expect(within(group).getByText("disagreed")).toBeVisible();
  expect(within(group).getByText("0.00")).toBeVisible();
  expect(within(group).getByText("0 exact US$m")).toBeVisible();
  expect(within(group).getByText("0")).toBeVisible();
  expect(within(group).getByText("Net debt = gross debt - cash")).toBeVisible();
  expect(screen.getByText("a".repeat(64))).toBeVisible();
  expect(screen.getByText("b".repeat(64))).toBeVisible();
  expect(screen.getByText("1 disagreed")).toBeVisible();
  expect(screen.getByRole("link", { name: /Script checks/ })).toHaveAttribute(
    "href",
    "#evidence/checks/CP-1",
  );
  expect(screen.getByRole("option", { name: "Financial foundation" })).toBeInTheDocument();
});

it("groups repeated register checks but keeps different numeric and missing values separate", () => {
  const common = {
    ...outcome,
    figure: "all",
    row: "all",
    status: "not checked",
    stated: null,
    recomputed: null,
    recomputedLabel: null,
    tolerance: null,
  };
  show([
    {
      ...record,
      outcomes: [
        { ...common, register: "T1" },
        { ...common, register: "T2" },
        { ...outcome, recomputed: null },
        outcome,
        { ...outcome, recomputed: 0.125 },
      ],
    },
  ]);
  const group = cardOf("2 registers");
  expect(within(group).getByText("not checked")).toBeVisible();
  expect(within(group).getByText("T1")).toBeVisible();
  expect(within(group).getByText("T2")).toBeVisible();
  expect(within(group).queryByText("Recomputed")).toBeNull();
  expect(screen.getAllByRole("heading", { name: "T2.1 \u00b7 Net debt" })).toHaveLength(3);
  expect(screen.getByText("0.125 exact US$m")).toBeVisible();
});

it("keeps unknown statuses and hostile text literal, and filters modules without leaking outcomes", () => {
  const other = {
    ...record,
    module: "CP-2",
    outcomes: [{ ...outcome, status: "unrecognised", reason: "<img src=x onerror=alert(1)>" }],
    scripts: [{ name: "other.py", sha256: null }],
  };
  const shown = show([record, other], "checks/CP-2");
  expect(screen.getByText("unrecognised")).toBeVisible();
  expect(screen.getByText("<img src=x onerror=alert(1)>")).toBeVisible();
  expect(screen.queryByRole("img")).toBeNull();
  expect(screen.queryByText("Net debt = gross debt - cash")).toBeNull();
  expect(screen.getByText("Not recorded")).toBeVisible();
  shown.unmount();
  show([record], "checks/CP-6");
  expect(
    screen.getByText("No script-check record is held for Committee decision."),
  ).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /Net debt/ })).toBeNull();
});

it("heads a check by its register and the figure checked, not by the figure alone", () => {
  show([
    {
      ...record,
      outcomes: [
        { ...outcome, figure: "columns", row: "all", register: "T4.10", status: "not checked" },
        { ...outcome, figure: "Headroom: all", register: "T4C.4", status: "not checked" },
        { ...outcome, figure: "all", row: "all", register: "T4.11", status: "not checked" },
      ],
    },
  ]);
  const titles = screen.getAllByRole("heading", { level: 4 }).map((node) => node.textContent);
  expect(titles).toEqual(["T4.10 \u00b7 columns", "T4C.4 \u00b7 Headroom: all", "T4.11"]);
});

it("draws no markdown marks in a register or a reason", () => {
  show([
    {
      ...record,
      outcomes: [
        {
          ...outcome,
          figure: "all",
          row: "all",
          register: "`### Recovery waterfall`",
          reason: "CP-3 states no value for Low: `Not supplied: not stated`",
          status: "not checked",
        },
      ],
    },
  ]);
  const card = cardOf("Recovery waterfall");
  expect(
    within(card).getByText("CP-3 states no value for Low: Not supplied: not stated"),
  ).toBeVisible();
  expect(document.body.textContent).not.toMatch(/[`#]/);
});

it("makes no landmark of a check card", () => {
  show([
    {
      ...record,
      outcomes: [
        outcome,
        { ...outcome, figure: "columns", register: "T4.10", status: "not checked" },
      ],
    },
  ]);
  expect(screen.queryByRole("region", { name: /not checked|disagreed/ })).toBeNull();
});
