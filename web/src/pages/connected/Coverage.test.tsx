import { fireEvent, render, screen, within } from "@testing-library/react";
import { Coverage } from "./Coverage";
import type { Coverage as Data } from "./coverageData";

const SHA = "b".repeat(64);
const data: Data = {
  columns: [
    { code: "CP-1", title: "Canonical data foundation" },
    { code: "CP-2", title: "Fundamental credit synthesizer" },
  ],
  issuers: [
    {
      key: "alpha",
      name: "Alpha plc",
      sector: "Aerospace",
      runs: [
        {
          key: "a1",
          folder: "alpha-run",
          asOf: "2026-03-31",
          pathway: "credit_snapshot",
          pathwayTitle: "Full credit assessment",
          cells: { "CP-1": { state: "assessed", gaps: 1 }, "CP-2": { state: "not-assessable" } },
          other: [],
        },
      ],
    },
    {
      key: "beta",
      name: "Beta SA",
      sector: "Retail",
      runs: [
        {
          key: "b1",
          folder: "beta-run",
          asOf: "2026-03-31",
          pathway: "short_snapshot",
          pathwayTitle: "Short Credit Snapshot",
          cells: { "CP-1": { state: "assessed", gaps: 0 }, "CP-2": { state: "not-in-pathway" } },
          other: [],
        },
      ],
    },
  ],
  fields: [
    {
      id: "lev",
      module: "CP-1",
      group: "Leverage",
      label: "Net debt / EBITDA",
      kind: "number",
      series: "period",
    },
    { id: "find", module: "CP-1", group: "Reader summary", label: "Finding", kind: "text" },
  ],
  facts: [
    {
      field: "lev",
      issuer: "alpha",
      run: "a1",
      period: "FY2025",
      row: null,
      text: "4.6",
      at: 4.6,
      unit: "x",
      basis: "Issuer-adjusted EBITDA.",
      line: 22,
      output: "alpha-run/CP-1.md",
      sha256: SHA,
    },
    {
      field: "lev",
      issuer: "beta",
      run: "b1",
      period: "FY2025",
      row: null,
      text: "Not supplied: cash not stated",
      at: null,
      gap: true,
      unit: "x",
      basis: "None.",
      line: 9,
      output: "beta-run/CP-1.md",
      sha256: SHA,
    },
    {
      field: "find",
      issuer: "alpha",
      run: "a1",
      period: null,
      row: null,
      text: "Covenant headroom is thin.",
      at: null,
      impact: "Waiver risk",
      confidence: "High",
      line: 12,
      output: "alpha-run/CP-1.md",
      sha256: SHA,
    },
  ],
};

function answer(body: unknown) {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve(new Response(JSON.stringify(body), { status: 200 }))),
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
  window.history.replaceState(null, "", "/coverage");
  window.localStorage.clear();
});

test("the matrix says each module's state in words and draws no code, hash or file name", async () => {
  answer(data);
  const { container } = render(<Coverage />);
  const table = await screen.findByRole("table");
  const alpha = within(table).getByRole("row", { name: /Alpha plc/ });
  expect(within(alpha).getByText("Delivered with gaps")).toBeInTheDocument();
  expect(within(alpha).getByText("Not assessable")).toBeInTheDocument();
  const beta = within(table).getByRole("row", { name: /Beta SA/ });
  expect(within(beta).getByText("Not asked for in this run")).toBeInTheDocument();
  expect(screen.getByText("2 of 2 issuers shown")).toBeInTheDocument();
  const drawn = container.textContent;
  for (const hidden of ["CP-1", "CP-2", SHA, ".md", "alpha-run", "credit_snapshot"])
    expect(drawn).not.toContain(hidden);
});

test("a rank shows the figure as written with period and basis, and missing apart", async () => {
  answer(data);
  window.history.replaceState(null, "", "/coverage?view=rank");
  render(<Coverage />);
  const table = await screen.findByRole("table");
  const row = within(table).getByRole("row", { name: /Alpha plc/ });
  expect(within(row).getByText("4.6x")).toBeInTheDocument();
  expect(within(row).getByText("FY2025")).toBeInTheDocument();
  expect(within(row).getByText("Issuer-adjusted EBITDA.")).toBeInTheDocument();
  expect(within(row).getByRole("link", { name: "View sources" })).toHaveAttribute(
    "href",
    `/report/alpha-run#evidence/alpha-run%2FCP-1.md~${SHA}-22`,
  );
  expect(within(table).queryByText(/Beta SA/)).not.toBeInTheDocument();
  expect(
    screen.getByText("Not ranked: no figure for FY2025 in the newest run"),
  ).toBeInTheDocument();
  expect(screen.getByRole("combobox", { name: "Period" })).toHaveValue("FY2025");
  expect(screen.getByText(/Not supplied: cash not stated/)).toBeInTheDocument();
});

test("searching module text narrows the issuers and Find lists the passage", async () => {
  answer(data);
  window.history.replaceState(null, "", "/coverage?view=find");
  render(<Coverage />);
  fireEvent.change(await screen.findByRole("searchbox"), { target: { value: "headroom" } });
  expect(screen.getByText("1 of 2 issuers shown")).toBeInTheDocument();
  expect(screen.getByText("Covenant headroom is thin.")).toBeInTheDocument();
  expect(screen.getByText("Waiver risk")).toBeInTheDocument();
  expect(window.location.search).toContain("q=headroom");
});

test("ticked issuers can be saved as a group kept in this browser", async () => {
  answer(data);
  render(<Coverage />);
  fireEvent.click(await screen.findByRole("checkbox", { name: "Compare Alpha plc" }));
  fireEvent.change(screen.getByRole("textbox", { name: "Save ticked issuers as" }), {
    target: { value: "Watch" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Save group" }));
  expect(JSON.parse(window.localStorage.getItem("credit-os-coverage-groups") ?? "")).toEqual([
    { name: "Watch", issuers: ["alpha"] },
  ]);
  fireEvent.change(screen.getByRole("combobox", { name: "Saved group" }), {
    target: { value: "Watch" },
  });
  expect(screen.getByText("1 of 2 issuers shown")).toBeInTheDocument();
});

test("module text is drawn by the reader's rule: references stay in Evidence, codes are named", async () => {
  const [figure, gap, finding] = data.facts;
  if (!figure || !gap || !finding) throw new Error("fixture");
  answer({
    ...data,
    facts: [
      {
        ...figure,
        basis: "Carrying debt; calculated C3; annual filing pages 71 and 120.",
        heading: "Net debt / adjusted EBITDA",
      },
      gap,
      { ...finding, text: "Headroom is **thin** per CP-4.", impact: "See filing.pdf, page 12" },
    ],
  });
  window.history.replaceState(null, "", "/coverage?view=rank");
  const { container } = render(<Coverage />);
  expect(await screen.findByText("Qualification recorded in Evidence.")).toBeInTheDocument();
  expect(screen.getByText("Stated as Net debt / adjusted EBITDA")).toBeInTheDocument();
  expect(container.textContent).not.toContain("pages 71");
  fireEvent.click(screen.getByRole("radio", { name: "Find" }));
  expect(await screen.findByText("Headroom is thin per Legal & covenants.")).toBeInTheDocument();
  expect(container.textContent).not.toContain("filing.pdf");
});

test("searching an issuer's name in Find lists that issuer's passages", async () => {
  answer(data);
  window.history.replaceState(null, "", "/coverage?view=find&q=alpha");
  render(<Coverage />);
  expect(await screen.findByText("Covenant headroom is thin.")).toBeInTheDocument();
  expect(screen.getByText("1 of 2 issuers shown")).toBeInTheDocument();
});

test("a sector in the link that no issuer has is shown as unavailable, not hidden", async () => {
  answer(data);
  window.history.replaceState(null, "", "/coverage?sector=Chemicals");
  render(<Coverage />);
  expect(await screen.findByRole("combobox", { name: "Sector" })).toHaveValue("Chemicals");
  expect(screen.getByRole("option", { name: "Chemicals (unavailable)" })).toBeInTheDocument();
});

test("an unreadable bound is marked, and the detail closes when its issuer is filtered out", async () => {
  answer(data);
  render(<Coverage />);
  fireEvent.click(await screen.findByRole("button", { name: "Alpha plc" }));
  expect(screen.getByRole("heading", { name: "Alpha plc" })).toBeInTheDocument();
  fireEvent.change(screen.getByRole("textbox", { name: /At most/ }), { target: { value: "5x" } });
  expect(screen.getByRole("textbox", { name: /At most/ })).toBeInvalid();
  fireEvent.change(screen.getByRole("combobox", { name: "Sector" }), {
    target: { value: "Retail" },
  });
  expect(screen.queryByRole("heading", { name: "Alpha plc" })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("radio", { name: "Trend" }));
  expect(screen.queryByRole("textbox", { name: /At most/ })).not.toBeInTheDocument();
});

test("a retained test preview says so, as the Library does", async () => {
  answer({ ...data, preview: { reason: "Retained preview of one run." } });
  render(<Coverage />);
  expect(await screen.findByText("Retained preview of one run.")).toBeInTheDocument();
});

test("nothing published is said plainly", async () => {
  answer(null);
  render(<Coverage />);
  expect(await screen.findByText("No published runs yet")).toBeInTheDocument();
});

test("the module, confidence, pathway, order, grouping and clear controls act on the dashboard", async () => {
  const [figure, gap, finding] = data.facts;
  if (!figure || !gap || !finding) throw new Error("fixture");
  answer({
    ...data,
    fields: [
      ...data.fields,
      { id: "conf", module: "CP-1", group: "Reader summary", label: "Confidence", kind: "choice" },
    ],
    facts: [
      figure,
      gap,
      finding,
      { ...finding, field: "conf", text: "High", impact: undefined, confidence: undefined },
    ],
  });
  window.history.replaceState(null, "", "/coverage?view=rank");
  render(<Coverage />);
  await screen.findByRole("table");
  expect(screen.getByRole("combobox", { name: "Order" })).toHaveValue("high");
  fireEvent.change(screen.getByRole("combobox", { name: "Order" }), { target: { value: "low" } });
  expect(screen.getByRole("combobox", { name: "Order" })).toHaveValue("low");
  fireEvent.change(screen.getByRole("combobox", { name: "Group by" }), {
    target: { value: "sector" },
  });
  expect(screen.getByRole("combobox", { name: "Group by" })).toHaveValue("sector");

  expect(screen.queryByRole("combobox", { name: "Module state" })).not.toBeInTheDocument();
  fireEvent.change(screen.getByRole("combobox", { name: "Module" }), { target: { value: "CP-2" } });
  fireEvent.change(screen.getByRole("combobox", { name: "Module state" }), {
    target: { value: "not-assessable" },
  });
  expect(screen.getByText("1 of 2 issuers shown")).toBeInTheDocument();

  fireEvent.change(screen.getByRole("combobox", { name: "Module" }), { target: { value: "all" } });
  fireEvent.change(screen.getByRole("combobox", { name: "Module confidence" }), {
    target: { value: "conf" },
  });
  expect(screen.getByRole("combobox", { name: "Is" })).toHaveValue("all");
  expect(screen.getByRole("option", { name: "High" })).toBeInTheDocument();
  fireEvent.change(screen.getByRole("combobox", { name: "Is" }), { target: { value: "High" } });
  expect(screen.getByText("1 of 2 issuers shown")).toBeInTheDocument();

  fireEvent.change(screen.getByRole("combobox", { name: "Pathway" }), {
    target: { value: "Short Credit Snapshot" },
  });
  expect(screen.getByText("0 of 2 issuers shown")).toBeInTheDocument();
  expect(screen.getByText("No issuers match these filters.")).toBeInTheDocument();
  expect(window.location.search).toContain("pathway=Short+Credit+Snapshot");
  fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
  expect(screen.getByText("2 of 2 issuers shown")).toBeInTheDocument();
});

test("the trend view draws the figure by period, and only ticked issuers can be kept", async () => {
  answer(data);
  window.history.replaceState(null, "", "/coverage?view=trend");
  render(<Coverage />);
  expect(await screen.findByText("Net debt / EBITDA by period")).toBeInTheDocument();
  expect(window.location.search).toContain("field=lev");
  fireEvent.click(screen.getByRole("radio", { name: "Modules" }));
  fireEvent.click(screen.getByRole("checkbox", { name: "Compare Beta SA" }));
  fireEvent.click(screen.getByRole("checkbox", { name: /Only the 1 issuers ticked/ }));
  expect(screen.getByText("1 of 2 issuers shown")).toBeInTheDocument();
  expect(window.location.search).not.toContain("view=");
});
