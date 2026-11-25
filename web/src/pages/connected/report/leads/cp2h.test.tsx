import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { entry, table } from "../overview/rows.fixture";
import { RatingsLead } from "./cp2h";
import { bottomLine, leadProps, tableSection } from "./lead.fixture";

afterEach(cleanup);

// No CP-2H handoff is retained: both tables are built from the contract (chart-data header and T2R.1 columns).
const TRIGGERS = [
  "Agency",
  "Trigger",
  "Threshold",
  "Current",
  "Direction",
  "Reporting unit",
  "Basis and limitation",
];
const REGISTER = [
  "agency",
  "issuer/instrument",
  "rating",
  "outlook/watch",
  "effective date",
  "source",
  "locator",
  "status",
];

function ratings(options: { triggers?: string[][]; register?: string[][]; gap?: string } = {}) {
  const made = entry(
    "CP-2H",
    options.triggers
      ? [
          {
            title: "Rating triggers",
            table: 5,
            label: [0, 1],
            threshold: 2,
            current: 3,
            direction: 4,
          },
        ]
      : [],
    [
      ...(options.triggers
        ? [tableSection("Chart data: rating triggers", table(5, TRIGGERS, options.triggers))]
        : []),
      ...(options.register
        ? [
            {
              heading: "T2R.1 Rating evidence register",
              level: 4,
              line: 29,
              blocks: [table(30, REGISTER, options.register)],
            },
          ]
        : []),
    ],
  );
  if (options.gap)
    made.output.chartGaps = [{ title: "Rating triggers", table: 5, gap: options.gap }];
  return made;
}

const TRIGGER_ROWS = [
  ["Synthetic Agency A", "Net leverage", "6.5", "6.1", "Passes at or below", "x", "Synthetic."],
  [
    "Synthetic Agency A",
    "Interest cover",
    "Not supplied: cover not split",
    "3.2",
    "Passes at or above",
    "x",
    "Synthetic.",
  ],
  ["Synthetic Agency B", "FFO / debt", "10", "12", "Passes at or above", "%", "Synthetic."],
];
const REGISTER_ROWS = [
  [
    "Synthetic Agency A",
    "Synthetic Issuer",
    "BB-",
    "Negative watch",
    "2025-06-30",
    "Release",
    "p.1",
    "Current",
  ],
  [
    "Synthetic Agency B",
    "Synthetic Notes",
    "Ba3",
    "Stable",
    "2025-05-01",
    "Release",
    "p.2",
    "Current",
  ],
];

it("groups the trigger bullets by agency with each value as written, and gives a table view", () => {
  render(<RatingsLead {...leadProps(ratings({ triggers: TRIGGER_ROWS }))} />);
  const tile = screen.getByRole("region", { name: "Rating triggers" });
  const groupA = within(tile).getByRole("group", { name: "Synthetic Agency A" });
  expect(within(groupA).getByText("Net leverage")).toBeVisible();
  expect(
    within(groupA).getByRole("img", { name: /Net leverage: 6.1x against a threshold of 6.5x/ }),
  ).toBeVisible();
  expect(within(groupA).getByText("Passes at or below")).toBeVisible();
  expect(within(tile).getByRole("group", { name: "Synthetic Agency B" })).toBeVisible();
  expect(within(groupA).getAllByRole("link", { name: /Source for/ })[0]).toHaveAttribute(
    "href",
    expect.stringContaining("#evidence/"),
  );
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getAllByRole("cell", { name: "Passes at or above" })[0]).toBeVisible();
});

it("gives the reason, not a bar or a zero, for a trigger the module did not supply", () => {
  render(<RatingsLead {...leadProps(ratings({ triggers: TRIGGER_ROWS }))} />);
  const groupA = within(screen.getByRole("region", { name: "Rating triggers" })).getByRole(
    "group",
    {
      name: "Synthetic Agency A",
    },
  );
  expect(within(groupA).getByText("Interest cover")).toBeVisible();
  expect(within(groupA).getByText("Cover not split")).toBeVisible();
  expect(within(groupA).getAllByRole("img")).toHaveLength(1);
  expect(within(groupA).queryByText("0")).toBeNull();
});

it("draws the rating register as written, with outlook as a word", () => {
  render(
    <RatingsLead {...leadProps(ratings({ triggers: TRIGGER_ROWS, register: REGISTER_ROWS }))} />,
  );
  const tile = screen.getByRole("region", { name: "Rating register" });
  expect(within(tile).getByText("BB-")).toBeVisible();
  expect(within(tile).getByText("Negative watch")).toBeVisible();
  expect(within(tile).getByText("Synthetic Issuer")).toBeVisible();
  expect(within(tile).getByText("Ba3")).toBeVisible();
  expect(within(tile).getAllByRole("link", { name: /Source for/ })).toHaveLength(2);
});

it("says why when the triggers are a stated gap or the tables are absent", () => {
  render(<RatingsLead {...leadProps(ratings({ gap: "no agency trigger stated" }))} />);
  expect(
    within(screen.getByRole("region", { name: "Rating triggers" })).getByText(
      "No agency trigger stated",
    ),
  ).toBeVisible();
  const register = screen.getByRole("region", { name: "Rating register" });
  expect(within(register).getByText("This page could not read a rating register.")).toBeVisible();
  expect(register.textContent).not.toMatch(/Built from the module's contract/);
  cleanup();
  render(<RatingsLead {...leadProps(ratings())} />);
  expect(
    within(screen.getByRole("region", { name: "Rating triggers" })).getByText(
      "This page could not read rating triggers.",
    ),
  ).toBeVisible();
});

it("draws nothing for a blocked module", () => {
  const { container } = render(
    <RatingsLead
      {...leadProps(
        entry("CP-2H", [], bottomLine("Not assessable: no agency rating was supplied.")),
      )}
    />,
  );
  expect(container).toBeEmptyDOMElement();
});

it("shows an empty trigger cell as missing in the table view, not a crash", () => {
  render(
    <RatingsLead
      {...leadProps(
        ratings({
          triggers: [["Synthetic Agency A", "Net leverage", "6.5", "6.1", "", "x", "Synthetic."]],
        }),
      )}
    />,
  );
  const tile = screen.getByRole("region", { name: "Rating triggers" });
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("row", { name: /^Net leverage/ })).toBeVisible();
});

it("draws a trigger's texts without source references and names a register row without an agency", () => {
  render(
    <RatingsLead
      {...leadProps(
        ratings({
          triggers: [
            [
              "Synthetic Agency A",
              "Leverage per rating_report.pdf p. 2",
              "6.5",
              "6.1",
              "Per CP-2 view",
              "x",
              "Synthetic.",
            ],
          ],
          register: [
            ["", "Synthetic Issuer", "BB-", "Stable", "2025-06-30", "Release", "p.1", "Current"],
          ],
        }),
      )}
    />,
  );
  const tile = screen.getByRole("region", { name: "Rating triggers" });
  expect(tile.textContent).not.toMatch(/rating_report|CP-2/);
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(tile.textContent).not.toMatch(/rating_report|CP-2/);
  const register = screen.getByRole("region", { name: "Rating register" });
  expect(within(register).getByRole("link", { name: "Source for Row 1" })).toBeVisible();
});

it("keeps each trigger's unit and basis in the table view, and one shared basis under the figure", () => {
  render(<RatingsLead {...leadProps(ratings({ triggers: TRIGGER_ROWS }))} />);
  const tile = screen.getByRole("region", { name: "Rating triggers" });
  expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(/^Rating triggers$/);
  expect(within(tile).getByText("Synthetic.")).toBeVisible();
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  const row = within(tile).getByRole("row", { name: /^FFO \/ debt/ });
  expect(
    within(row)
      .getAllByRole("cell")
      .map((item) => item.textContent)
      .slice(0, 6),
  ).toEqual(["Synthetic Agency B", "10%", "12%", "Passes at or above", "%", "Synthetic."]);
});
