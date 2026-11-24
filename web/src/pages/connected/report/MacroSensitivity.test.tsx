import { fireEvent, render, screen, within } from "@testing-library/react";
import type { OutputEntry, Section } from "../publishedReport";
import { MacroSensitivity, macroView } from "./MacroSensitivity";

function table(heading: string, headers: string[], rows: string[][], line: number): Section {
  return {
    heading,
    level: 3,
    line,
    blocks: [
      {
        type: "table",
        line: line + 1,
        headers,
        rows: rows.map((cells, i) => ({ line: line + 3 + i, cells })),
      },
    ],
  };
}

function dataset(currency: string, net: string): OutputEntry {
  return {
    output: { module: "CP-2E", id: "test", label: "Rates", sha256: "hash", href: "rates.md" },
    selected: true,
    sections: [
      table(
        "Sourced operands",
        ["Operand", "Value", "Basis"],
        [["Reporting currency", currency, "Filing p.1"]],
        1,
      ),
      table(
        "Interest rate shock",
        [
          "Shock",
          "Rate shock",
          "Added annual interest before hedges",
          "Added annual interest after hedges",
          "Cash interest after the shock",
          "Interest coverage after the shock",
          "Change in interest coverage",
          "Free cash flow after the shock",
          "Added interest as share of EBITDA",
        ],
        [["Reference rate up, first shock", "100", "USD 8.00m", net, "", "", "", "", ""]],
        10,
      ),
    ],
  };
}

it("uses the published reporting currency and retains a verified zero after hedging", () => {
  const data = macroView(dataset("USD", "0.00"));
  if (!data) throw new Error("scenario was rejected");
  const { container } = render(
    <MacroSensitivity data={data} href={(line) => `#evidence/1-${String(line)}`} />,
  );
  expect(container.querySelector('[data-zero][data-case="After hedges"]')).toBeInTheDocument();
  const tile = screen.getByRole("region", { name: "Added annual interest" });
  const figure = within(tile).getByRole("img");
  expect(figure).toHaveAccessibleName(/\+100 bp: before hedges USD 8\.00m, after hedges 0\.00/);
  expect(within(figure).getByText("USD 8.00m")).toBeInTheDocument();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("cell", { name: "0.00" })).toBeInTheDocument();
  expect(
    within(tile)
      .getAllByRole("link", { name: /^Source for / })
      .at(-1),
  ).toHaveAttribute("href", "#evidence/1-13");
});

it.each([
  ["USD", "EUR 5.00m"],
  ["Unspecified", "5.00"],
])(
  "keeps mismatched or unsupported currency data in the source table (%s, %s)",
  (currency, net) => {
    const data = macroView(dataset(currency, net));
    if (!data) throw new Error("scenario was rejected");
    render(<MacroSensitivity data={data} href={() => "#evidence"} />);
    const tile = screen.getByRole("region", { name: "Added annual interest" });
    expect(within(tile).queryByRole("img")).toBeNull();
    expect(
      within(tile).getByText(
        "The rate-shock table does not establish comparable cash-interest values.",
      ),
    ).toBeVisible();
    fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
    expect(within(tile).getByRole("cell", { name: net })).toBeInTheDocument();
  },
);

function fxDataset(moves: string[]): OutputEntry {
  const ordinal = ["first", "second", "third"];
  const base = dataset("USD", "5.00");
  base.sections = [
    base.sections[0] as Section,
    table(
      "Currency shock",
      [
        "Shock",
        "Currency move",
        "Change in debt",
        "Total debt after the move",
        "Change in EBITDA",
        "Total leverage after the move",
      ],
      moves.map((move, i) => [
        `Foreign currency strengthens, ${ordinal[i] ?? ""} move`,
        move,
        "0.00",
        String(800 + i),
        String(2 + i),
        `${String(3 + i / 100)}x`,
      ]),
      20,
    ),
  ];
  return base;
}

function drawFx(moves: string[]) {
  const data = macroView(fxDataset(moves));
  if (!data) throw new Error("scenario was rejected");
  render(<MacroSensitivity data={data} href={(line) => `#evidence/1-${String(line)}`} />);
}

it("states a comparison that has no alternative instead of drawing a selector with one option", () => {
  drawFx(["5%", "10%"]);
  expect(screen.queryByRole("group", { name: "Compare with the 5% move" })).toBeNull();
  expect(screen.getByText("Compared with the 5% move: 10%")).toBeInTheDocument();
  const tile = screen.getByRole("region", { name: "Foreign-currency strengthening" });
  expect(within(tile).getByRole("img")).toHaveAccessibleName(/Total debt after the move.*800.*801/);
});

it("offers the selector when there are two moves to choose between", () => {
  drawFx(["5%", "10%", "15%"]);
  const select = screen.getByRole("group", { name: "Compare with the 5% move" });
  expect(
    within(select)
      .getAllByRole("button")
      .map((option) => option.textContent),
  ).toEqual(["10%", "15%"]);
  expect(screen.queryByText(/Compared with the 5% move:/)).toBeNull();
  const tile = screen.getByRole("region", { name: "Foreign-currency strengthening" });
  fireEvent.click(within(select).getByRole("button", { name: "15%" }));
  expect(within(tile).getByRole("img")).toHaveAccessibleName(/802/);
});
