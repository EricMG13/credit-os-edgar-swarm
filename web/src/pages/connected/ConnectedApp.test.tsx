import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";

const context = {
  run: { as_of: "", pathway: "credit_snapshot", case_kind: "synthetic", reporting_currency: "USD" },
  identity: { issuer_name: "", issuer_id: "" },
};
const file = new File(["sample input"], "Credit & facts.html", { type: "text/html" });
const plan = {
  digest: "server-approved",
  error: "",
  documents: [{ source: file.name, kind: "annual_report" }],
  modules: ["CP-0"],
  items: [],
  ignored: [],
  omitted: [],
  changes: "first run",
  model: "gpt",
  effort: "balanced",
};

function testingFetch(summary: typeof plan = plan, submitResponse?: Response) {
  const entries: Record<string, unknown> = {
    "/connected/context": context,
    "/api/submissions": { id: "sub-1" },
    "/api/submissions/sub-1/files?name=Credit%20%26%20facts.html": { name: file.name },
    "/api/submissions/sub-1/reading": { documents: plan.documents, error: "" },
    "/api/submissions/sub-1/summary": summary,
    "/api/submissions/sub-1/submit": { run: "test-run", status: "queued" },
  };
  const fetchMock = vi.fn((...[path]: [string, RequestInit?]) => {
    if (path.endsWith("/submit") && submitResponse) return Promise.resolve(submitResponse);
    if (!Object.hasOwn(entries, path)) throw new Error(`Unexpected request ${path}`);
    return Promise.resolve(Response.json(entries[path]));
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

async function review() {
  const name = await screen.findByLabelText("Issuer name");
  fireEvent.change(name, { target: { value: "Synthetic Générale" } });
  fireEvent.change(screen.getByLabelText("As-of date"), { target: { value: "2026-10-31" } });
  fireEvent.change(screen.getByLabelText("Documents"), { target: { files: [file] } });
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("connected run start", () => {
  it("uploads raw bytes, reads the files, and submits only the reviewed answers and digest", async () => {
    const fetchMock = testingFetch();
    const navigate = vi.fn();
    render(<ConnectedApp path="/start" mode="synthetic" navigate={navigate} />);
    await review();
    const submit = await screen.findByRole("button", { name: "Submit run" });
    const paths = fetchMock.mock.calls.map(([path]) => path);
    expect(paths).toEqual([
      "/connected/context",
      "/api/submissions",
      "/api/submissions/sub-1/files?name=Credit%20%26%20facts.html",
      "/api/submissions/sub-1/reading",
      "/api/submissions/sub-1/summary",
    ]);
    expect(fetchMock.mock.calls[2]?.[1]).toMatchObject({ method: "POST", body: file });
    const rawAnswers = fetchMock.mock.calls[4]?.[1]?.body;
    expect(typeof rawAnswers).toBe("string");
    const body = JSON.parse(rawAnswers as string) as unknown;
    expect(body).toEqual({
      context: {
        run: { ...context.run, as_of: "2026-10-31" },
        identity: { issuer_name: "Synthetic Générale", issuer_id: "synthetic-generale" },
      },
      modules: [],
      max_turns: 32,
      level: "basic",
      model: "gpt",
      effort: "balanced",
      submitted_by: "analyst",
    });
    fireEvent.click(submit);
    const rawSubmit = fetchMock.mock.calls[5]?.[1]?.body;
    expect(typeof rawSubmit).toBe("string");
    expect(JSON.parse(rawSubmit as string)).toEqual({
      answers: body,
      digest: plan.digest,
    });
    await vi.waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/run/test-run");
    });
  });

  it.each([400, 404])(
    "requires fresh review when the service rejects approval with %s",
    async (status) => {
      const response = Response.json({ error: "Approval no longer current" }, { status });
      const fetchMock = testingFetch(plan, response);
      const navigate = vi.fn();
      render(<ConnectedApp path="/start" mode="synthetic" navigate={navigate} />);
      await review();
      fireEvent.click(await screen.findByRole("button", { name: "Submit run" }));
      expect(await screen.findByRole("alert")).toHaveTextContent("Review the run again");
      expect(screen.queryByRole("button", { name: "Submit run" })).toBeNull();
      expect(navigate).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole("button", { name: "Review run" }));
      expect(await screen.findByRole("button", { name: "Submit run" })).toBeEnabled();
      expect(fetchMock.mock.calls.filter(([path]) => path === "/api/submissions")).toHaveLength(
        status === 404 ? 2 : 1,
      );
    },
  );

  it("shows refusals and cannot submit an unapproved draft", async () => {
    const fetchMock = testingFetch({ ...plan, error: "This context was refused", digest: "" });
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await review();
    expect(await screen.findByRole("alert")).toHaveTextContent("This context was refused");
    expect(screen.queryByRole("button", { name: "Submit run" })).toBeNull();
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/submit"))).toBe(false);
  });
});

describe("connected activity and reports", () => {
  const report = {
    id: "test-run",
    issuer: "Synthetic Générale",
    asOf: "2026-10-31",
    pathway: "credit_snapshot",
    modules: [
      {
        id: "CP-0",
        title: "Source readiness",
        sections: [
          {
            title: "Financial inputs",
            paragraphs: ["The report read the filing."],
            tables: [{ headers: ["Year"], rows: [["2026"]] }],
          },
        ],
        download: "/library/downloads/test-run/CP-0.md",
      },
      {
        id: "CP-1",
        title: "Financial foundation",
        sections: [],
        download: "/library/downloads/other/CP-1.md",
      },
    ],
  };

  it("waits for report publication after the run has finished", async () => {
    let reportRequests = 0;
    vi.stubGlobal(
      "fetch",
      vi.fn((path: string) => {
        if (path === "/api/runs/test-run")
          return Promise.resolve(
            Response.json({
              id: "test-run",
              status: "finished",
              issuer_name: report.issuer,
              pathway: report.pathway,
              modules: [["CP-0", "done"]],
              reason: "",
            }),
          );
        if (path !== "/connected/report/test-run") throw new Error(`Unexpected request ${path}`);
        reportRequests += 1;
        return Promise.resolve(
          reportRequests === 1
            ? Response.json({ error: "unknown report" }, { status: 404 })
            : Response.json(report),
        );
      }),
    );
    render(<ConnectedApp path="/run/test-run" mode="synthetic" />);
    expect(await screen.findByText(/Waiting for the report/)).toBeInTheDocument();
    expect(screen.getByText("Source readiness (CP-0)")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Open report" })).toBeNull();
    expect(
      await screen.findByRole("link", { name: "Open report" }, { timeout: 3000 }),
    ).toHaveAttribute("href", "/report/test-run");
  });

  it("renders delivered report text and tables and only links to the matching handoff", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve(Response.json(report))),
    );
    render(<ConnectedApp path="/report/test-run" mode="synthetic" />);
    expect(await screen.findByRole("heading", { name: report.issuer })).toBeInTheDocument();
    expect(screen.getByText("The report read the filing.")).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "2026" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download Source readiness" })).toHaveAttribute(
      "href",
      report.modules[0]?.download,
    );
    expect(screen.getByRole("link", { name: "Download Source readiness" })).toHaveAttribute(
      "download",
    );
    expect(screen.queryByRole("link", { name: "Download Financial foundation" })).toBeNull();
  });

  it("allows live review but disables paid submission", async () => {
    const fetchMock = testingFetch();
    render(<ConnectedApp path="/start" mode="live" />);
    await review();
    expect(await screen.findByRole("button", { name: "Submit run" })).toBeDisabled();
    expect(screen.getByText(/Live execution requires separate authorization/)).toBeInTheDocument();
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/submit"))).toBe(false);
  });
});
