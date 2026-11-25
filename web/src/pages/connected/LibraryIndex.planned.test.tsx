import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ReportLibrary } from "./LibraryIndex";

const run = {
  folder: "acme-run",
  issuer: "Acme",
  issuerKey: "acme",
  title: "Relative value",
  period: "FY2025",
  asOf: "2026-03-31",
  pathway: "relative_value",
  publicationVerified: true,
  modules: {},
  evidence: {
    sources: [],
    unused: [],
    unrecorded: [],
    noSourcesModules: [],
    handoffs: [],
    downloads: [],
    zip: null,
    record: { hashes: [], instructions: [], calls: [], cap: null },
  },
};
const real = [
  {
    id: "acme-run",
    issuer: "Acme",
    name: "Acme",
    title: "Relative value",
    date: "2026-03-31",
    period: "FY2025",
    sector: "Industrial",
    metrics: {},
  },
];
const planned = [
  {
    issuer_id: "zeta-co",
    name: "Zeta Holdings",
    ticker: "ZTA",
    status: "pending",
    status_text: "Planned: no run yet",
  },
  {
    issuer_id: "omega-9",
    name: "Omega Foods",
    ticker: "OMG",
    status: "pending",
    status_text: "Planned: no run yet",
  },
];

function serve(catalogue: { real: typeof real; planned: typeof planned }) {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve(Response.json({ catalogue, workspace: { runs: { "acme-run": run } } })),
    ),
  );
  render(<ReportLibrary />);
}

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/"); // The filters live in the address.
  vi.unstubAllGlobals();
});

const issuers = () => screen.findByRole("list", { name: "Issuers" });

it("lists planned issuers with no filter chosen", async () => {
  serve({ real, planned });
  const list = await issuers();
  expect(within(list).getByText("Zeta Holdings")).toBeTruthy();
  expect(within(list).getByText("ZTA · zeta-co")).toBeTruthy();
  expect(within(list).getByText("Omega Foods")).toBeTruthy();
  expect(within(list).getAllByText("Planned: no run yet")).toHaveLength(2);
});

it.each(["Sector", "Pathway", "State"])(
  "hides planned issuers once a %s is chosen",
  async (group) => {
    serve({ real, planned });
    await issuers();
    const chips = within(screen.getByRole("group", { name: group })).getAllByRole("button");
    const choice = chips.find((chip) => chip.textContent !== "All");
    expect(choice).toBeTruthy();
    fireEvent.click(choice as HTMLElement);
    expect(screen.queryByText("Zeta Holdings")).toBeNull();
    expect(screen.queryByText("Omega Foods")).toBeNull();
  },
);

it.each([
  ["zeta", "Zeta Holdings", "Omega Foods"],
  ["omg", "Omega Foods", "Zeta Holdings"],
  ["OMEGA-9", "Omega Foods", "Zeta Holdings"],
])(
  "search %s matches a planned issuer by name, ticker or issuer id",
  async (query, shown, hidden) => {
    serve({ real, planned });
    await issuers();
    fireEvent.change(screen.getByRole("searchbox", { name: "Search issuers" }), {
      target: { value: query },
    });
    expect(screen.getByText(shown)).toBeTruthy();
    expect(screen.queryByText(hidden)).toBeNull();
  },
);

it("shows the no-match text only when neither a run nor a planned issuer matches", async () => {
  serve({ real, planned });
  await issuers();
  const search = screen.getByRole("searchbox", { name: "Search issuers" });
  fireEvent.change(search, { target: { value: "nothing-like-this" } });
  expect(screen.getByRole("status").textContent).toBe("No issuers match these filters.");
  fireEvent.change(search, { target: { value: "zeta" } });
  expect(screen.queryByText("No issuers match these filters.")).toBeNull();
});

it("a library with only planned issuers is not empty", async () => {
  serve({ real: [], planned });
  const list = await issuers();
  expect(within(list).getByText("Zeta Holdings")).toBeTruthy();
  expect(screen.queryByText("No issuers match these filters.")).toBeNull();
});
