import {
  evidenceLink,
  fieldUnits,
  figure,
  groupKey,
  headline,
  matchIssuers,
  NO_FILTERS,
  rank,
  trend,
  type Coverage,
  type CoverageRun,
  type Fact,
} from "./coverageData";

const LEVERAGE = "cp-1/leverage/net";
const CONFIDENCE = "cp-2/reader-summary/confidence";
const FINDING = "cp-2/reader-summary/finding";

function run(key: string, asOf: string, pathwayTitle = "Full credit assessment"): CoverageRun {
  return {
    key,
    folder: `folder ${key}`,
    asOf,
    pathway: "credit_snapshot",
    pathwayTitle,
    cells: { "CP-1": { state: "assessed", gaps: 0 }, "CP-6": { state: "not-assessable" } },
    other: [],
  };
}

function fact(runKey: string, issuer: string, field: string, more: Partial<Fact>): Fact {
  return {
    field,
    issuer,
    run: runKey,
    period: null,
    row: null,
    text: "",
    at: null,
    line: 1,
    output: `${runKey}/CP-1.md`,
    sha256: "a".repeat(64),
    ...more,
  };
}

const data: Coverage = {
  columns: [
    { code: "CP-1", title: "Canonical data foundation" },
    { code: "CP-6", title: "Ic debate challenge" },
  ],
  issuers: [
    {
      key: "alpha",
      name: "Alpha",
      sector: "Aerospace",
      runs: [run("a2", "2026-03-31"), run("a1", "2025-03-31")],
    },
    { key: "beta", name: "Beta", sector: "Retail", runs: [run("b1", "2026-03-31")] },
    {
      key: "gamma",
      name: "Gamma",
      sector: null,
      runs: [run("g1", "2026-06-30", "Lite credit assessment")],
    },
    { key: "delta", name: "Delta", sector: "Retail", runs: [run("d1", "2026-03-31")] },
  ],
  fields: [
    {
      id: LEVERAGE,
      module: "CP-1",
      group: "Leverage",
      label: "Net debt / EBITDA",
      kind: "number",
      series: "period",
    },
    {
      id: CONFIDENCE,
      module: "CP-2",
      group: "Reader summary",
      label: "Confidence",
      kind: "choice",
    },
    { id: FINDING, module: "CP-2", group: "Reader summary", label: "Finding", kind: "text" },
  ],
  facts: [
    fact("a2", "alpha", LEVERAGE, { period: "FY2024", text: "5.1", at: 5.1, unit: "x" }),
    fact("a2", "alpha", LEVERAGE, { period: "FY2025", text: "4.6", at: 4.6, unit: "x" }),
    fact("a1", "alpha", LEVERAGE, { period: "FY2024", text: "5.3", at: 5.3, unit: "x" }),
    fact("b1", "beta", LEVERAGE, { period: "FY2025", text: "0.0", at: 0, unit: "x" }),
    fact("g1", "gamma", LEVERAGE, { period: "FY2025", text: "1,250", at: 1250, unit: "US$m" }),
    fact("d1", "delta", LEVERAGE, {
      period: "FY2025",
      text: "Not supplied: no cash",
      gap: true,
      unit: "x",
    }),
    fact("a2", "alpha", CONFIDENCE, { text: "High" }),
    fact("b1", "beta", CONFIDENCE, { text: "Low" }),
    fact("a2", "alpha", FINDING, { text: "Covenant headroom is thin.", impact: "Waiver risk" }),
  ],
};

const names = (issuers: readonly { name: string }[]) => issuers.map((issuer) => issuer.name);

test("a run is stood for by its last stated figure, or its last stated gap", () => {
  expect(headline(data.facts.filter((f) => f.run === "a2" && f.field === LEVERAGE))?.text).toBe(
    "4.6",
  );
  expect(headline(data.facts.filter((f) => f.run === "d1"))?.text).toBe("Not supplied: no cash");
  expect(headline([])).toBeUndefined();
});

test("a rank keeps units apart, keeps zero as a figure and lists missing separately", () => {
  const ranking = rank(data, data.issuers, LEVERAGE, "low");
  expect(
    ranking.units.map((u) => [u.unit, u.rows.map((r) => [r.issuer.name, r.fact.text])]),
  ).toEqual([
    [
      "x",
      [
        ["Beta", "0.0"],
        ["Alpha", "4.6"],
      ],
    ],
    ["US$m", [["Gamma", "1,250"]]],
  ]);
  expect(ranking.missing.map((m) => [m.issuer.name, m.fact?.text])).toEqual([
    ["Delta", "Not supplied: no cash"],
  ]);
  expect(
    names(rank(data, data.issuers, LEVERAGE, "high").units[0]?.rows.map((r) => r.issuer) ?? []),
  ).toEqual(["Alpha", "Beta"]);
});

test("filters read the newest run only, and a missing figure passes no numeric bound", () => {
  expect(names(matchIssuers(data, NO_FILTERS, LEVERAGE))).toEqual([
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
  ]);
  expect(names(matchIssuers(data, { ...NO_FILTERS, max: "5" }, LEVERAGE))).toEqual([
    "Alpha",
    "Beta",
  ]);
  expect(names(matchIssuers(data, { ...NO_FILTERS, min: "5" }, LEVERAGE))).toEqual(["Gamma"]);
  expect(names(matchIssuers(data, { ...NO_FILTERS, min: "0", max: "0" }, LEVERAGE))).toEqual([
    "Beta",
  ]);
  expect(names(matchIssuers(data, { ...NO_FILTERS, sector: "Retail" }, null))).toEqual([
    "Beta",
    "Delta",
  ]);
  expect(
    names(matchIssuers(data, { ...NO_FILTERS, pathway: "Lite credit assessment" }, null)),
  ).toEqual(["Gamma"]);
  expect(
    names(matchIssuers(data, { ...NO_FILTERS, choice: CONFIDENCE, word: "High" }, null)),
  ).toEqual(["Alpha"]);
  expect(names(matchIssuers(data, { ...NO_FILTERS, query: "waiver" }, null))).toEqual(["Alpha"]);
  expect(names(matchIssuers(data, { ...NO_FILTERS, query: "headroom IS thin" }, null))).toEqual([
    "Alpha",
  ]);
  expect(
    names(matchIssuers(data, { ...NO_FILTERS, module: "CP-6", state: "assessed" }, null)),
  ).toEqual([]);
  expect(
    matchIssuers(data, { ...NO_FILTERS, module: "CP-6", state: "not-assessable" }, null),
  ).toHaveLength(4);
});

test("groups are the delivered word, the sector or the pathway", () => {
  const [alpha, , gamma] = data.issuers;
  if (!alpha || !gamma) throw new Error("fixture");
  expect(groupKey(data, alpha, CONFIDENCE)).toBe("High");
  expect(groupKey(data, gamma, CONFIDENCE)).toBe("Not stated");
  expect(groupKey(data, gamma, "sector")).toBe("Sector not recorded");
  expect(groupKey(data, gamma, "pathway")).toBe("Lite credit assessment");
  expect(groupKey(data, alpha, "none")).toBe("");
});

test("a trend is one point per run in one unit, each issuer and pathway its own series", () => {
  expect(fieldUnits(data, LEVERAGE)).toEqual(["US$m", "x"]);
  const { dates, series } = trend(data, data.issuers, LEVERAGE, "x");
  expect(dates).toEqual(["2025-03-31", "2026-03-31"]);
  expect(series.map((s) => [s.name, s.points.map((p) => p?.text ?? null)])).toEqual([
    ["Alpha · Full credit assessment", ["5.3", "4.6"]],
    ["Beta · Full credit assessment", [null, "0.0"]],
  ]);
});

test("a figure is drawn as written and links to its own line of evidence", () => {
  const [first, , , , money, gap] = data.facts;
  const [alpha] = data.issuers;
  if (!first || !money || !gap || !alpha?.runs[0]) throw new Error("fixture");
  expect(figure(first)).toBe("5.1x");
  expect(figure(money)).toBe("1,250 US$m");
  expect(figure(gap)).toBe("Not supplied: no cash");
  expect(evidenceLink(alpha.runs[0], first)).toBe(
    `/report/folder%20a2#evidence/a2%2FCP-1.md~${"a".repeat(64)}-1`,
  );
});
