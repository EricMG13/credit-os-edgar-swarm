import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ArtifactDownloads } from "./ArtifactDownloads";

const LOADING = "Loading the model and calculation files…";
const NOT_LISTED = "The original model and calculation files could not be listed.";

function reply(body: unknown, status = 200) {
  return () => Promise.resolve(new Response(JSON.stringify(body), { status }));
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("says the files are loading, as a status, until the listing answers", async () => {
  let answer: (response: Response) => void = () => {};
  vi.stubGlobal(
    "fetch",
    () =>
      new Promise<Response>((resolve) => {
        answer = resolve;
      }),
  );
  render(<ArtifactDownloads folder="run" />);
  expect(screen.getByRole("status")).toHaveTextContent(LOADING);
  answer(
    new Response(JSON.stringify({ files: [{ label: "HTML Model", href: "/files/model.html" }] })),
  );
  expect(await screen.findByRole("link", { name: "HTML Model" })).toBeInTheDocument();
  expect(screen.queryByText(LOADING)).toBeNull();
  expect(screen.queryByRole("status")).toBeNull();
});

it.each([
  ["an empty object", {}],
  ["a null files value", { files: null }],
  ["a files value that is not a list", { files: "none" }],
  ["a bare list", []],
])(
  "says the files could not be listed when the reply is %s, not a files array",
  async (_name, body) => {
    vi.stubGlobal("fetch", reply(body));
    render(<ArtifactDownloads folder="run" />);
    expect(await screen.findByText(NOT_LISTED)).toBeInTheDocument();
    expect(screen.queryByText(LOADING)).toBeNull();
    expect(screen.getAllByRole("status")).toHaveLength(1);
  },
);

it("says the files could not be listed when the service answers an error", async () => {
  vi.stubGlobal("fetch", reply({ error: "failed" }, 500));
  render(<ArtifactDownloads folder="run" />);
  expect(await screen.findByText(NOT_LISTED)).toBeInTheDocument();
  expect(screen.queryByText(LOADING)).toBeNull();
});

it("keeps the two unavailable notes for an empty listing, with no loading line", async () => {
  vi.stubGlobal("fetch", reply({ files: [] }));
  render(<ArtifactDownloads folder="run" />);
  expect(
    await screen.findByText("The original calculation files are unavailable for this run."),
  ).toBeInTheDocument();
  expect(
    screen.getByText("The original HTML Model is unavailable for this run."),
  ).toBeInTheDocument();
  expect(screen.queryByText(LOADING)).toBeNull();
  expect(screen.queryByText(NOT_LISTED)).toBeNull();
});
