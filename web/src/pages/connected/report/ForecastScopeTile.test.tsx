import { render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { PublishedModelTile, ScopeTile } from "./ForecastScopeTile";

const MODEL = "d5c93ecb";

afterEach(() => {
  vi.unstubAllGlobals();
});

function tiles(files: unknown, ok = true) {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve({ ok, json: () => Promise.resolve(files) })),
  );
  const model = {
    id: MODEL,
    cashflow: { notes: ["Base case is a conditional illustration."] },
  } as never;
  render(
    <>
      <ScopeTile model={model} register={false} />
      <PublishedModelTile model={model} folder="run-1" />
    </>,
  );
}

it("offers the selected model's calculation JSON as listed for the run", async () => {
  tiles({
    files: [
      { label: "Calculation JSON", href: "/connected/artifacts/run-1/other/calculation.json" },
      { label: "Calculation JSON", href: `/connected/artifacts/run-1/${MODEL}/calculation.json` },
    ],
  });
  expect(await screen.findByRole("link", { name: "Download calculation" })).toHaveAttribute(
    "href",
    `/connected/artifacts/run-1/${MODEL}/calculation.json`,
  );
  expect(screen.getByRole("region", { name: "Scope and limits" })).toHaveTextContent(
    "Base case is a conditional illustration.",
  );
});

it("says so when no calculation file is listed for this model", async () => {
  tiles({ files: [{ label: "Annual model handoff", href: `/x/${MODEL}/annual.md` }] });
  expect(
    await screen.findByText("No calculation file is listed for this model."),
  ).toBeInTheDocument();
});

it("words a failed listing without the failure's detail", async () => {
  tiles({}, false);
  expect(await screen.findByText("The calculation file could not be listed.")).toBeInTheDocument();
});
