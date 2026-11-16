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
  const figure = screen.getByRole("figure", { name: "Added annual interest" });
  fireEvent.click(within(figure).getByRole("radio", { name: "Table" }));
  expect(within(figure).getByRole("cell", { name: "0.00" })).toBeInTheDocument();
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
    expect(screen.queryByRole("figure", { name: "Added annual interest" })).toBeNull();
    fireEvent.click(screen.getByText("All rate-shock results and limitations"));
    expect(screen.getByRole("cell", { name: net })).toBeInTheDocument();
  },
);
