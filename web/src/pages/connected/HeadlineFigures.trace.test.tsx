import {
  cleanup,
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";
import { HeadlineFigures } from "./HeadlineFigures";
import type { CatalogueRun, Snapshot } from "./publishedReport";

// The first render of the whole reader can pass the 1 s default on a busy machine, and a test
// that renders it and opens drawers can pass the 5 s one: the reader tests state their own limit.
configure({ asyncUtilTimeout: 5000 });
const READER = { timeout: 30000 };

const EVIDENCE = {
  sources: [],
  unused: [],
  unrecorded: [],
  noSourcesModules: [],
  handoffs: [],
  zip: null,
  downloads: [],
  record: { hashes: [], instructions: [], calls: [], cap: null },
};
const NOT_STATED = "Not supplied: the measure is not stated";
/** Delivery's own words for a tile whose figure is not quoted: they say nothing about the module. */
const NOT_SHOWN = "Not shown here";
const SHA = "e".repeat(64);

const chart = (title: string, line: number, headers: string[], rows: [number, ...string[]][]) => ({
  heading: `Chart data: ${title}`,
  level: 3,
  line,
  blocks: [
    {
      type: "table",
      line: line + 2,
      headers: ["Period", ...headers, "Reporting unit", "Basis and limitation"],
      rows: rows.map(([at, ...cells]) => ({ line: at, cells })),
    },
  ],
});

type Variant = {
  /** The Adjusted EBITDA FY2024 cell of the revenue chart. */
  adjusted?: string;
  /** The two Periods of the leverage, interest cover and liquidity charts (the latest second). */
  periods?: [string, string];
  /** Catalogue figures left out, as the builder leaves out one it could not quote. */
  omit?: string[];
};

/** A run whose CP-1 states the five headline figures and says Adjusted EBITDA FY2024 is not stated. */
function snapshot({
  adjusted = NOT_STATED,
  periods = ["FY2023", "FY2024"],
  omit = [],
}: Variant = {}) {
  const id = "northbridge-2026/outputs/CP-1.md";
  const figure = (value: string, unit: string) => ({ value, unit, period: periods[1] });
  const metrics: CatalogueRun["metrics"] = Object.fromEntries(
    Object.entries({
      net_leverage: figure("2.25", "x"),
      leverage: figure("2.80", "x"),
      coverage: figure("4.00", "x"),
      revenue: { value: "2,250", unit: "US$m", period: "FY2024" },
      cash: figure("275", "US$m"),
    }).filter(([key]) => !omit.includes(key)),
  );
  return {
    catalogue: {
      real: [
        {
          id: "northbridge-2026",
          name: "Northbridge",
          issuer: "Northbridge",
          title: "Full credit assessment",
          date: "2025-03-31",
          sector: "Industrials",
          period: "FY2024",
          metrics,
        },
      ],
    },
    workspace: {
      runs: {
        north: {
          folder: "northbridge-2026",
          issuer: "Northbridge",
          issuerKey: "northbridge-2026",
          title: "Full credit assessment",
          period: "FY2024",
          asOf: "2025-03-31",
          pathway: "credit_snapshot",
          modules: { "CP-1": { outputs: [id], default: id } },
          changes: { first_run: true },
          evidence: EVIDENCE,
        },
      },
      outputs: {
        [id]: {
          id,
          run: "north",
          module: "CP-1",
          label: "Financial foundation",
          href: id,
          sha256: SHA,
          state: { established: true, declared: null },
        },
      },
      handoffs: {
        [SHA]: [
          chart(
            "leverage",
            20,
            ["Total debt / EBITDA", "Net debt / EBITDA"],
            [
              [24, periods[0], "3.75", "3.00", "x", "Synthetic."],
              [25, periods[1], "2.80", "2.25", "x", "Synthetic."],
            ],
          ),
          chart(
            "interest cover",
            30,
            ["EBITDA / cash interest"],
            [
              [34, periods[0], "3.20", "x", "Synthetic."],
              [35, periods[1], "4.00", "x", "Synthetic."],
            ],
          ),
          chart(
            "liquidity",
            40,
            ["Cash"],
            [
              [44, periods[0], "300", "US$m", "Synthetic."],
              [45, periods[1], "275", "US$m", "Synthetic."],
            ],
          ),
          chart(
            "revenue and EBITDA",
            50,
            ["Revenue", "Adjusted EBITDA"],
            [
              [54, "FY2023", "2,100", "410", "US$m", "Synthetic."],
              [55, "FY2024", "2,250", adjusted, "US$m", "Synthetic."],
            ],
          ),
        ],
      },
      models: [],
    },
    chips: {},
  } as unknown as Snapshot;
}

function openOverview(variant?: Variant) {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve(Response.json(snapshot(variant)))),
  );
  window.history.replaceState(null, "", "/report/northbridge-2026#overview");
  render(<ConnectedApp path="/report/northbridge-2026" mode="synthetic" />);
}

const tile = (name: string) => {
  const term = screen.getByText(name, { selector: "dt" });
  if (!term.parentElement) throw new Error(`${name} has no tile`);
  return term.parentElement;
};

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState(null, "", "/");
});

describe("the headline figures on Overview", () => {
  it(
    "give each figure one trace control that opens the handoff row it is read from",
    READER,
    async () => {
      openOverview();
      await screen.findByRole("heading", { name: "Overview", level: 2 });
      const rows = {
        "Net leverage": 25,
        "Gross leverage": 25,
        "Interest coverage": 35,
        Revenue: 55,
        Cash: 45,
      };
      for (const [name, line] of Object.entries(rows)) {
        const controls = within(tile(name)).getAllByRole("button");
        expect(controls).toHaveLength(1);
        expect(controls[0]).toHaveAccessibleName(`Show sources for ${name}`);
        fireEvent.click(controls[0] as HTMLElement);
        const drawer = await screen.findByRole("dialog");
        expect(drawer).toHaveTextContent(`Handoff line ${String(line)}`);
        fireEvent.click(within(drawer).getAllByRole("button", { name: "Close" })[0] as HTMLElement);
        await waitFor(() => {
          expect(screen.queryByRole("dialog")).toBeNull();
        });
      }
    },
  );

  it(
    "state a figure the module did not supply, with its reason and its source row",
    READER,
    async () => {
      openOverview();
      await screen.findByRole("heading", { name: "Overview", level: 2 });
      const gap = tile("Adjusted EBITDA");
      expect(gap).toHaveTextContent("n.a.");
      expect(gap).toHaveTextContent(NOT_STATED);
      expect(gap).toHaveTextContent("FY2024");
      expect(gap).not.toHaveTextContent(/\$0m|\b0\b/);
      const control = within(gap).getByRole("button", { name: "Show sources for Adjusted EBITDA" });
      fireEvent.click(control);
      expect(await screen.findByRole("dialog")).toHaveTextContent("Handoff line 55");
    },
  );

  it(
    "find the gap on the real period forms, a dated period beside a fiscal year",
    READER,
    async () => {
      openOverview({ periods: ["FY2023 / 2023-09-30", "FY2024 / 2024-09-30"] });
      await screen.findByRole("heading", { name: "Overview", level: 2 });
      const gap = tile("Adjusted EBITDA");
      expect(gap).toHaveTextContent(NOT_STATED);
      expect(gap).toHaveTextContent("FY2024");
      fireEvent.click(
        within(gap).getByRole("button", { name: "Show sources for Adjusted EBITDA" }),
      );
      expect(await screen.findByRole("dialog")).toHaveTextContent("Handoff line 55");
      fireEvent.click(screen.getAllByRole("button", { name: "Close" })[0] as HTMLElement);
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeNull();
      });
      fireEvent.click(
        within(tile("Net leverage")).getByRole("button", { name: "Show sources for Net leverage" }),
      );
      expect(await screen.findByRole("dialog")).toHaveTextContent("Handoff line 25");
    },
  );

  it(
    "do not say the module did not supply a figure it supplied but the catalogue could not quote",
    READER,
    async () => {
      openOverview({ adjusted: "approximately 410", omit: ["adjusted_ebitda"] });
      await screen.findByRole("heading", { name: "Overview", level: 2 });
      const gap = tile("Adjusted EBITDA");
      expect(gap).toHaveTextContent("n.a.");
      expect(gap).toHaveTextContent(NOT_SHOWN);
      expect(gap).toHaveTextContent("FY2024");
      expect(gap).not.toHaveTextContent("Not supplied");
      fireEvent.click(
        within(gap).getByRole("button", { name: "Show sources for Adjusted EBITDA" }),
      );
      expect(await screen.findByRole("dialog")).toHaveTextContent("Handoff line 55");
    },
  );

  it(
    "draw a neutral gap, with no control, where the chart cannot give a latest row",
    READER,
    async () => {
      openOverview({ periods: ["Q3 FY2023", "Q3 FY2024"], omit: ["net_leverage", "leverage"] });
      await screen.findByRole("heading", { name: "Overview", level: 2 });
      for (const name of ["Net leverage", "Gross leverage"]) {
        const gap = tile(name);
        expect(gap).toHaveTextContent("n.a.");
        expect(gap).toHaveTextContent(NOT_SHOWN);
        expect(gap).not.toHaveTextContent("Not supplied");
        expect(within(gap).queryByRole("button")).toBeNull();
      }
    },
  );

  it(
    "draw Not supplied, not the reason, when the reason carries a source reference",
    READER,
    async () => {
      const reference =
        "Not supplied: not stated in northbridge-filing.txt page 4 [E3] CP-1-GAP-12 " +
        "0123456789abcdef0123456789abcdef01234567";
      openOverview({ adjusted: reference });
      await screen.findByRole("heading", { name: "Overview", level: 2 });
      const gap = tile("Adjusted EBITDA");
      expect(gap).toHaveTextContent("Not supplied");
      expect(gap).toHaveTextContent("FY2024");
      expect(gap).not.toHaveTextContent(/northbridge-filing|CP-1|GAP-12|0123456789abcdef/);
      fireEvent.click(
        within(gap).getByRole("button", { name: "Show sources for Adjusted EBITDA" }),
      );
      expect(await screen.findByRole("dialog")).toHaveTextContent("Handoff line 55");
    },
  );
});

describe("a headline figure the catalogue does not carry", () => {
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
  const FIGURES = { value: "2.25", unit: "x", period: "FY2024" };

  it("is drawn as n.a. in the owner's order, claiming nothing of the module, with no trace of its own", () => {
    render(<HeadlineFigures catalogue={run({ net_leverage: FIGURES })} />);
    expect(screen.getAllByRole("term").map((el) => el.textContent)).toEqual([
      "Net leverage",
      "Gross leverage",
      "Interest coverage",
      "Revenue",
      "Adjusted EBITDA",
      "Cash",
    ]);
    const gap = tile("Adjusted EBITDA");
    expect(gap).toHaveTextContent("n.a.");
    expect(gap).toHaveTextContent(NOT_SHOWN);
    expect(gap).not.toHaveTextContent("Not supplied");
    expect(within(gap).queryByRole("button")).toBeNull();
    expect(within(gap).queryByRole("link")).toBeNull();
    expect(screen.queryByText("Undrawn facilities")).toBeNull();
  });

  it("is a gap when its value is an empty string, and a zero stays a figure", () => {
    render(
      <HeadlineFigures
        catalogue={run({
          net_leverage: FIGURES,
          revenue: { value: "", unit: "USD millions", period: "FY2024" },
          cash: { value: "0", unit: "USD millions", period: "FY2024" },
        })}
      />,
    );
    const revenue = tile("Revenue");
    expect(revenue).toHaveTextContent("n.a.");
    expect(revenue).toHaveTextContent(NOT_SHOWN);
    expect(revenue).not.toHaveTextContent("$m");
    const cash = tile("Cash");
    expect(cash).toHaveTextContent("$0m");
    expect(cash).not.toHaveTextContent(NOT_SHOWN);
  });

  it("lets a long reason wrap inside its tile", () => {
    const reason =
      "Not supplied: adjusted_EBITDA_is_not_separately_disclosed_in_consolidated_statements";
    render(
      <HeadlineFigures
        catalogue={run({ net_leverage: FIGURES })}
        sources={{
          adjusted_ebitda: { href: "/report/run#evidence/x-5", period: "FY2024", reason },
        }}
      />,
    );
    expect(screen.getByText(reason)).toHaveClass("wrap-anywhere");
  });

  it("draws nothing when the catalogue carries none of the six", () => {
    const { container } = render(<HeadlineFigures catalogue={run({})} />);
    expect(container).toBeEmptyDOMElement();
  });
});
