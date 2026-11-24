// Synthetic, built from the module contract (src/deploy_vii/methods/cpl10.md, the Key figures table
// `Measure | Value | Period | Source`; src/deploy_vii/bindings/cpl10.py); not a real handoff —
// unproven on a real run. CP-L10 has never run on a real case.
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { entry, section, table } from "../overview/rows.fixture";
import { leadProps } from "./fixtures/load";
import { readChangeScreen, readKeyFigures } from "./shortSnapshotData";
import { ShortSnapshotLead } from "./shortSnapshot";

afterEach(cleanup);

const HEAD = ["Measure", "Value", "Period", "Source"];
const SOURCE = "Canonical data foundation (CP-1)";
const FIGURES = [
  ["Total leverage", "6.1x", "FY2024", SOURCE],
  ["Total leverage", "5.6x", "FY2023", SOURCE],
  ["Net leverage", "5.0x", "FY2024", SOURCE],
  ["Interest coverage", "2.30x", "FY2024", SOURCE],
  ["Liquidity", "USD 1,200m", "FY2024", SOURCE],
  ["Liquidity", "USD 1,050m", "FY2023", SOURCE],
  ["Revenue", "Not supplied: not stated in the filing", "FY2024", SOURCE],
  ["Cash", "0", "FY2024", SOURCE],
  ["Gross debt", "USD 9,000m", "FY2024", SOURCE],
];

function snapshot(figures: string[][] | null = FIGURES, extra: unknown[] = []) {
  return entry(
    "CP-L10",
    [],
    [
      { heading: "Findings", level: 2, line: 3, blocks: [] },
      ...(figures ? [section("Key figures", 10, table(11, HEAD, figures))] : []),
      ...(extra as never[]),
    ],
  );
}

describe("shortSnapshotData", () => {
  it("joins one measure stated in two periods into prior and current, with the exact difference", () => {
    const read = readKeyFigures(snapshot());
    if (read.state !== "ready") throw new Error(read.reason);
    expect(read.figures.map((item) => item.measure)).toEqual([
      "Total leverage",
      "Net leverage",
      "Interest coverage",
      "Liquidity",
      "Revenue",
      "Cash",
      "Gross debt",
    ]);
    const [leverage, , , liquidity] = read.figures;
    expect(leverage).toMatchObject({
      current: { text: "6.1x", period: "FY2024" },
      prior: { text: "5.6x", period: "FY2023" },
      change: { text: "0.5", size: "0.5x", sign: 1, tone: "worse" },
      marks: { prior: 5.6, current: 6.1 },
    });
    expect(liquidity?.change).toMatchObject({ text: "150", size: "USD 150m", tone: "better" });
  });

  it("draws no change where the units differ, a period repeats, or the figure is not stated", () => {
    const read = readKeyFigures(
      snapshot([
        ["Total leverage", "6.1x", "FY2024", SOURCE],
        ["Total leverage", "5.6", "FY2023", SOURCE],
        ["Net leverage", "5.0x", "FY2024", SOURCE],
        ["Net leverage", "4.0x", "FY2024", SOURCE],
        ["Cash", "Not supplied: not stated", "FY2024", SOURCE],
        ["Cash", "10", "FY2023", SOURCE],
        ["Revenue", "5", "FY2024", SOURCE],
        ["Revenue", "6", "FY2023", SOURCE],
        ["Revenue", "7", "FY2022", SOURCE],
      ]),
    );
    if (read.state !== "ready") throw new Error(read.reason);
    expect(
      read.figures.map((item) => [
        item.measure,
        item.prior?.period ?? null,
        item.change?.text ?? null,
      ]),
    ).toEqual([
      ["Total leverage", "FY2023", null],
      ["Net leverage", null, null],
      ["Net leverage", null, null],
      ["Cash", "FY2023", null],
      ["Revenue", null, null],
      ["Revenue", null, null],
      ["Revenue", null, null],
    ]);
  });

  it("keeps a stated zero as a value and reads a zero change as unchanged", () => {
    const read = readKeyFigures(
      snapshot([
        ["Cash", "0", "FY2024", SOURCE],
        ["Cash", "0", "FY2023", SOURCE],
      ]),
    );
    if (read.state !== "ready") throw new Error(read.reason);
    expect(read.figures[0]).toMatchObject({
      current: { kind: "value", text: "0" },
      change: { text: "0", sign: 0 },
    });
  });

  it("says what was expected when the table is absent, repeated or empty", () => {
    expect(readKeyFigures(snapshot(null))).toMatchObject({ state: "gap" });
    const gap = readKeyFigures(snapshot(null));
    expect(gap.state === "gap" && gap.reason).toContain("Measure, Value, Period, Source");
    const twice = readKeyFigures(
      snapshot(FIGURES, [section("Key figures again", 30, table(31, HEAD, FIGURES))]),
    );
    expect(twice.state === "gap" && twice.reason).toContain("more than one table");
    expect(readKeyFigures(snapshot([]))).toEqual({
      state: "gap",
      reason: "The Key figures table has no rows.",
    });
  });

  it("reads a change screen only from Topic, Prior and Current, and says what was expected otherwise", () => {
    expect(readChangeScreen(snapshot())).toBeNull();
    const ok = readChangeScreen(
      snapshot(FIGURES, [
        section(
          "Change screen",
          40,
          table(
            41,
            ["Topic", "Prior", "Current", "Direction", "Change"],
            [["Liquidity", "1,050", "1,200", "Up", "Liquidity rose."]],
          ),
        ),
      ]),
    );
    expect(ok).toMatchObject({
      state: "ready",
      items: [
        {
          topic: "Liquidity",
          prior: "1,050",
          current: "1,200",
          direction: "Up",
          text: "Liquidity rose.",
        },
      ],
    });
    const odd = readChangeScreen(
      snapshot(FIGURES, [section("Screen", 40, table(41, ["Topic", "Notes"], [["A", "b"]]))]),
    );
    expect(odd).toMatchObject({ state: "gap" });
    const none = readChangeScreen(
      snapshot(FIGURES, [
        section("Screen", 40, table(41, ["Topic", "Prior", "Current"], [["A", "1", "2"]])),
      ]),
    );
    expect(none).toMatchObject({ state: "ready", items: [{ direction: null, text: null }] });
  });
});

const dt = (strip: Element | null | undefined, label: string) =>
  [...(strip?.querySelectorAll("dt") ?? [])].find((item) => item.textContent === label)
    ?.parentElement;

describe("ShortSnapshotLead", () => {
  it("draws the first six figures as the strip, prior to current where both periods are stated", () => {
    render(<ShortSnapshotLead {...leadProps(snapshot())} />);
    const tile = screen.getByRole("region", { name: "Key figures" });
    const strip = tile.querySelector("dl");
    expect(strip?.querySelectorAll("dt")).toHaveLength(6);
    const leverage = dt(strip, "Total leverage, FY2024");
    expect(leverage).toHaveTextContent("6.1x");
    expect(leverage).toHaveTextContent("up 0.5x (derived) worse");
    expect(leverage).toHaveTextContent("from 5.6x in FY2023");
    expect(within(leverage as HTMLElement).getByRole("img")).toHaveAccessibleName(
      "Total leverage: 5.6x in FY2023, 6.1x in FY2024",
    );
    const liquidity = dt(strip, "Liquidity, FY2024");
    expect(liquidity).toHaveTextContent("up USD 150m (derived) better");
    expect(within(tile).getByText("1 more figure is in the table view.")).toBeVisible();
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent("7 key figures");
  });

  it("a single-period figure shows its period and no prior, no slope and no change", () => {
    render(<ShortSnapshotLead {...leadProps(snapshot())} />);
    const net = dt(
      screen.getByRole("region", { name: "Key figures" }).querySelector("dl"),
      "Net leverage, FY2024",
    );
    expect(net).toHaveTextContent("5.0x");
    expect(net).not.toHaveTextContent("from");
    expect(net?.querySelector("svg")).toBeNull();
  });

  it("draws a missing figure as the handoff's own reason and a stated zero as a value", () => {
    render(<ShortSnapshotLead {...leadProps(snapshot())} />);
    const strip = screen.getByRole("region", { name: "Key figures" }).querySelector("dl");
    expect(dt(strip, "Revenue, FY2024")).toHaveTextContent("not stated in the filing");
    expect(dt(strip, "Revenue, FY2024")).not.toHaveTextContent(/^Revenue, FY2024\s*0/);
    expect(dt(strip, "Cash, FY2024")).toHaveTextContent("0");
  });

  it("does not put better or worse on a measure the owner's table does not know", () => {
    render(
      <ShortSnapshotLead
        {...leadProps(
          snapshot([
            ["Cash", "5", "FY2024", SOURCE],
            ["Cash", "9", "FY2023", SOURCE],
          ]),
        )}
      />,
    );
    const cash = dt(
      screen.getByRole("region", { name: "Key figures" }).querySelector("dl"),
      "Cash, FY2024",
    );
    expect(cash).toHaveTextContent("down 4 (derived)");
    expect(cash).not.toHaveTextContent(/better|worse/);
  });

  it("gives the figure one trace control and a table view, and draws no source column or reference", () => {
    render(<ShortSnapshotLead {...leadProps(snapshot())} />);
    expect(screen.getAllByRole("link", { name: "Source for the key figures" })).toHaveLength(1);
    expect(screen.getByText("Table view")).toBeVisible();
    expect(document.body.textContent).not.toMatch(/Canonical data foundation|CP-1|CP-L10/);
  });

  it("draws the gap, saying what was expected, when there is no Key figures table", () => {
    render(<ShortSnapshotLead {...leadProps(snapshot(null))} />);
    expect(
      screen.getByText(/No key figures are in this handoff\. Expected a Key figures table/),
    ).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("draws one figure from a one-row table", () => {
    render(<ShortSnapshotLead {...leadProps(snapshot([["Cash", "5", "FY2024", SOURCE]]))} />);
    const tile = screen.getByRole("region", { name: "Key figures" });
    expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent("1 key figure");
    expect(tile.querySelectorAll("dt")).toHaveLength(1);
  });

  it("lists the change screen with a direction word only where the table states one", () => {
    render(
      <ShortSnapshotLead
        {...leadProps(
          snapshot(FIGURES, [
            section(
              "Change screen",
              40,
              table(
                41,
                ["Topic", "Prior", "Current", "Direction", "Change"],
                [
                  ["Liquidity", "1,050", "1,200", "Up", "Liquidity rose."],
                  ["Maturities", "2026", "2027", "", ""],
                ],
              ),
            ),
          ]),
        )}
      />,
    );
    const tile = screen.getByRole("region", { name: "Change screen" });
    const items = within(tile).getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Liquidity");
    expect(items[0]).toHaveTextContent("1,050");
    expect(items[0]).toHaveTextContent("Up");
    expect(items[0]).toHaveTextContent("Liquidity rose.");
    expect(items[1]).toHaveTextContent("2026");
    expect(items[1]).not.toHaveTextContent(/Up|Down/);
  });

  it("says what was expected for a change screen in another shape, and draws none when there is none", () => {
    const { unmount } = render(
      <ShortSnapshotLead
        {...leadProps(
          snapshot(FIGURES, [section("Screen", 40, table(41, ["Topic", "Notes"], [["A", "b"]]))]),
        )}
      />,
    );
    expect(
      screen.getByText(/Expected a change screen with the columns Topic, Prior and Current/),
    ).toBeVisible();
    unmount();
    render(<ShortSnapshotLead {...leadProps(snapshot())} />);
    expect(screen.queryByRole("region", { name: "Change screen" })).toBeNull();
  });

  it("a blocked module is the frame's one gap", () => {
    const blocked = entry(
      "CP-L10",
      [],
      [
        { heading: "Findings", level: 2, line: 3, blocks: [] },
        {
          heading: "Bottom line",
          level: 3,
          line: 4,
          blocks: [
            {
              type: "text",
              line: 5,
              end: 5,
              text: "Not assessable: the financial foundation states no figure.",
            },
          ],
        },
      ],
    );
    render(<ShortSnapshotLead {...leadProps(blocked)} />);
    expect(
      screen.getByText("Not assessable: the financial foundation states no figure."),
    ).toBeVisible();
    expect(screen.queryByRole("region", { name: "Key figures" })).toBeNull();
  });
});
