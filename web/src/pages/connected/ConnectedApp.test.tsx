import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConnectedApp } from "./ConnectedApp";
import type { Summary } from "./api";

const context = {
  run: { as_of: "", pathway: "credit_snapshot", case_kind: "synthetic", reporting_currency: "USD" },
  identity: { issuer_name: "", issuer_id: "" },
};
const submissionCaps = {
  credit_snapshot: "25",
  lite_credit_assessment: "15",
  deep_credit_assessment: "40",
  earnings_update: "20",
  relative_value: "20",
  covenant_refinancing: "20",
  distressed_restructuring: "20",
  portfolio_decision: "20",
  short_snapshot: "20",
};
const file = new File(["sample input"], "Credit & facts.html", { type: "text/html" });
const plan = {
  digest: "server-approved",
  cap: "25",
  error: "",
  documents: [{ source: file.name, kind: "annual_report" }],
  modules: ["CP-0"],
  items: [] as { id: string; scope: string; outcome: string; reason: string }[],
  ignored: [],
  omitted: [],
  changes: "first run",
  model: "gpt",
  effort: "balanced",
};

function testingFetch(
  summary: typeof plan & { lookup?: string[]; prior?: Summary["prior"] } = plan,
  submitResponse?: Response | (() => Response),
  overrides: Record<string, unknown> = {},
) {
  const entries: Record<string, unknown> = {
    "/connected/context": { ...context, submission_caps_usd: submissionCaps },
    "/api/submissions": { id: "sub-1" },
    "/api/submissions/sub-1/files?name=Credit%20%26%20facts.html": { name: file.name },
    "/api/submissions/sub-1/reading": { documents: plan.documents, ignored: [], error: "" },
    "/api/submissions/sub-1/summary": summary,
    "/api/submissions/sub-1/submit": { run: "test-run", status: "queued" },
    ...overrides,
  };
  const fetchMock = vi.fn((...[path]: [string, RequestInit?]) => {
    if (path.endsWith("/submit") && submitResponse)
      return Promise.resolve(
        typeof submitResponse === "function" ? submitResponse() : submitResponse,
      );
    if (!Object.hasOwn(entries, path)) throw new Error(`Unexpected request ${path}`);
    const entry = entries[path];
    if (entry instanceof Response) return Promise.resolve(entry);
    if (typeof entry === "function") return (entry as () => Promise<Response>)();
    return Promise.resolve(Response.json(entry));
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

async function fillInputs() {
  const name = await screen.findByLabelText("Issuer name");
  fireEvent.change(name, { target: { value: "Synthetic Générale" } });
  fireEvent.change(screen.getByLabelText("As-of date"), { target: { value: "2026-10-31" } });
  fireEvent.change(screen.getByLabelText("Documents"), { target: { files: [file] } });
}

async function review() {
  await fillInputs();
  await advanceToPurpose();
  advanceToContext();
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
}

async function advanceToPurpose() {
  fireEvent.click(screen.getByRole("button", { name: "Continue to purpose" }));
  await screen.findByRole("heading", { name: "Purpose" });
}

function advanceToContext() {
  fireEvent.click(screen.getByRole("button", { name: "Continue to context" }));
}

function approve() {
  fireEvent.click(screen.getByRole("checkbox", { name: /Approve: I have read this summary/ }));
}

async function confirmSynthetic(submit: HTMLElement) {
  fireEvent.click(submit);
  fireEvent.click(await screen.findByRole("button", { name: "Start synthetic run" }));
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("connected run start", () => {
  it("has four steps and no approval before the review", async () => {
    testingFetch();
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await fillInputs();
    const steps = within(screen.getByRole("list", { name: "Steps in this run" }));
    expect(steps.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Step 1 of 4 · Documents")).toBeInTheDocument();
    await advanceToPurpose();
    expect(screen.queryByRole("button", { name: "Approve summary" })).toBeNull();
    advanceToContext();
    expect(screen.getByRole("heading", { name: "More context" })).toHaveFocus();
    expect(screen.queryByRole("button", { name: "Approve summary" })).toBeNull();
  });

  it("returns to a visited step from the stepper", async () => {
    testingFetch();
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await fillInputs();
    await advanceToPurpose();
    advanceToContext();
    expect(screen.queryByRole("button", { name: "Go back to More context" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Go back to Documents" }));
    expect(screen.getByRole("heading", { name: "Documents" })).toHaveFocus();
  });

  it("accepts a drop, displays actual reading progress, and keeps confirmation local", async () => {
    const fetchMock = testingFetch();
    const { container } = render(<ConnectedApp path="/start" mode="synthetic" />);
    const issuer = await screen.findByLabelText("Issuer name");
    fireEvent.change(issuer, { target: { value: "Synthetic Générale" } });
    const action = screen.getByRole("button", { name: "Continue to purpose" });
    expect(action).toBeDisabled();
    expect(screen.getByRole("progressbar", { name: "USD 0.00 of USD 25.00" })).toHaveAttribute(
      "aria-valuenow",
      "0",
    );
    const dropZone = container.querySelector("[data-dropzone]");
    if (!dropZone) throw new Error("Missing intake drop zone");
    fireEvent.drop(dropZone, { dataTransfer: { files: [file] } });
    expect(screen.getByText("Selected", { exact: true })).toBeInTheDocument();
    await advanceToPurpose();
    expect(screen.getByText("Documents inspected", { exact: true })).toBeInTheDocument();
    advanceToContext();
    expect(screen.getByRole("heading", { name: "More context" })).toHaveFocus();
    expect(fetchMock.mock.calls.some(([path]) => /\/(summary|submit)$/.test(path))).toBe(false);
  });

  it("sends the selected portfolio workbook with a full credit assessment", async () => {
    const fetchMock = testingFetch(plan, undefined, {
      "/connected/context": {
        ...context,
        submission_caps_usd: submissionCaps,
        attachments: { portfolio_workbook: false },
      },
    });
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await fillInputs();
    await advanceToPurpose();
    advanceToContext();
    fireEvent.change(screen.getByLabelText("Anything the analysis should know"), {
      target: { value: "Check the 2028 maturities.\nInclude refinancing risk." },
    });
    fireEvent.change(await screen.findByLabelText("Portfolio workbook"), {
      target: { value: file.name },
    });
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    await screen.findByRole("button", { name: "Submit run" });
    const body = fetchMock.mock.calls.find(([path]) => path.endsWith("/summary"))?.[1]?.body;
    expect(typeof body === "string" ? JSON.parse(body) : body).toMatchObject({
      context: {
        attachments: { portfolio_workbook: true },
        research_questions: [
          { text: "Check the 2028 maturities. Include refinancing risk.", focus_module: "" },
        ],
      },
    });
  });

  it("offers Deep in Lite/Full/Deep order and binds its 20 analytical modules to USD 40", async () => {
    const fetchMock = testingFetch({ ...plan, cap: "40" });
    render(<ConnectedApp path="/start" mode="live" />);
    await fillInputs();
    await advanceToPurpose();
    const pathways = screen.getByRole("radiogroup", { name: "Pathway" });
    expect(
      within(pathways)
        .getAllByRole("radio")
        .map((radio) => radio.getAttribute("value")),
    ).toEqual([
      "lite_credit_assessment",
      "credit_snapshot",
      "deep_credit_assessment",
      "earnings_update",
      "relative_value",
      "covenant_refinancing",
      "distressed_restructuring",
      "portfolio_decision",
    ]);
    fireEvent.click(within(pathways).getByRole("radio", { name: "Deep credit assessment" }));
    expect(screen.getByRole("progressbar", { name: "USD 0.00 of USD 40.00" })).toBeVisible();
    expect(screen.getByText("20 base modules", { exact: true })).toBeVisible();
    fireEvent.change(screen.getByLabelText("Run form level"), {
      target: { value: "advanced" },
    });
    advanceToContext();
    expect(screen.queryByRole("checkbox", { name: /CP-MODEL/ })).toBeNull();
    fireEvent.click(screen.getByRole("checkbox", { name: "Source readiness (CP-0)" }));
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    await screen.findByRole("button", { name: "Submit, spend up to USD 40.00" });
    const summaryRequest = fetchMock.mock.calls.find(([path]) => path.endsWith("/summary"));
    expect(summaryRequest?.[1]?.headers).toMatchObject({ "X-Shown-Cap": "40" });
    const rawAnswers = summaryRequest?.[1]?.body;
    const reviewedAnswers = JSON.parse(typeof rawAnswers === "string" ? rawAnswers : "null") as {
      context: { run: { pathway: string } };
      modules: string[];
    };
    expect(reviewedAnswers.context.run.pathway).toBe("deep_credit_assessment");
    expect(reviewedAnswers.modules).not.toContain("CP-MODEL");
    expect(reviewedAnswers.modules).not.toContain("CP-0");
  });

  it("rejects a summary with a missing or different cap before enabling submission", async () => {
    for (const cap of ["40", undefined]) {
      const mismatched = { ...plan, cap };
      const fetchMock = testingFetch(mismatched as typeof plan);
      render(<ConnectedApp path="/start" mode="live" />);
      await fillInputs();
      await advanceToPurpose();
      advanceToContext();
      fireEvent.click(screen.getByRole("button", { name: "Review run" }));
      expect(await screen.findByRole("alert")).toHaveTextContent("cap changed while preparing");
      expect(screen.queryByRole("button", { name: "Submit, spend up to USD 25.00" })).toBeNull();
      expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/submit"))).toBe(false);
      cleanup();
    }
  });

  it("locks pathway answers while summary cap approval is pending", async () => {
    let resolveSummary!: (response: Response) => void;
    const delayed = new Promise<Response>((resolve) => {
      resolveSummary = resolve;
    });
    const fetchMock = testingFetch(plan, undefined, {
      "/api/submissions/sub-1/summary": () => delayed,
    });
    render(<ConnectedApp path="/start" mode="live" />);
    await fillInputs();
    await advanceToPurpose();
    advanceToContext();
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    expect(await screen.findByRole("button", { name: "Preparing review…" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
    expect(screen.getByLabelText("Anything the analysis should know")).toBeDisabled();
    resolveSummary(Response.json(plan));
    await screen.findByRole("button", { name: "Submit, spend up to USD 25.00" });
    const summaryRequest = fetchMock.mock.calls.find(([path]) => path.endsWith("/summary"));
    expect(summaryRequest?.[1]?.headers).toMatchObject({ "X-Shown-Cap": "25" });
  });

  it("uploads raw bytes, reads the files, and submits only the reviewed answers and digest", async () => {
    const fetchMock = testingFetch();
    const navigate = vi.fn();
    render(<ConnectedApp path="/start" mode="synthetic" navigate={navigate} />);
    await review();
    const submit = await screen.findByRole("button", { name: "Submit run" });
    expect(screen.getByText("Step 4 of 4", { exact: true })).toBeInTheDocument();
    expect(screen.queryByText(/of 5/)).toBeNull();
    const paths = fetchMock.mock.calls.map(([path]) => path);
    expect(paths).toEqual([
      "/connected/context",
      "/api/submissions",
      "/api/submissions/sub-1/files?name=Credit%20%26%20facts.html",
      "/api/submissions/sub-1/reading",
      "/api/submissions/sub-1/reading",
      "/api/submissions/sub-1/summary",
    ]);
    expect(fetchMock.mock.calls[2]?.[1]).toMatchObject({ method: "POST", body: file });
    expect(fetchMock.mock.calls[5]?.[1]?.headers).toMatchObject({ "X-Shown-Cap": "25" });
    const rawAnswers = fetchMock.mock.calls[5]?.[1]?.body;
    expect(typeof rawAnswers).toBe("string");
    const body = JSON.parse(rawAnswers as string) as unknown;
    expect(body).toEqual({
      context: {
        run: { ...context.run, as_of: "2026-10-31", cutoff: "2026-10-31" },
        identity: { issuer_name: "Synthetic Générale", issuer_id: "synthetic-generale" },
      },
      modules: [],
      max_turns: 32,
      level: "basic",
      model: "gpt",
      effort: "balanced",
      submitted_by: "",
    });
    expect(submit).toBeDisabled();
    approve();
    await confirmSynthetic(submit);
    const rawSubmit = fetchMock.mock.calls[6]?.[1]?.body;
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
      const submit = await screen.findByRole("button", { name: "Submit run" });
      approve();
      await confirmSynthetic(submit);
      expect(await screen.findByRole("alert")).toHaveTextContent("Review the run again");
      expect(screen.queryByRole("button", { name: "Submit run" })).toBeNull();
      expect(navigate).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole("button", { name: "Review run" }));
      expect(await screen.findByRole("button", { name: "Submit run" })).toBeDisabled();
      expect(fetchMock.mock.calls.filter(([path]) => path === "/api/submissions")).toHaveLength(
        status === 404 ? 2 : 1,
      );
    },
  );

  it("retries an uncertain submission with the same stored answers and digest", async () => {
    let attempts = 0;
    const fetchMock = testingFetch(plan, () => {
      attempts += 1;
      return attempts === 1
        ? Response.json({ error: "Connection lost" }, { status: 500 })
        : Response.json({ run: "test-run", status: "queued" });
    });
    const navigate = vi.fn();
    render(<ConnectedApp path="/start" mode="synthetic" navigate={navigate} />);
    await review();
    const submit = await screen.findByRole("button", { name: "Submit run" });
    approve();
    await confirmSynthetic(submit);
    expect(await screen.findByRole("alert")).toHaveTextContent("Retrying Submit run is safe");
    expect(screen.getByRole("button", { name: "Edit issuer and documents" })).toBeDisabled();
    await confirmSynthetic(submit);
    await vi.waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/run/test-run");
    });
    const requests = fetchMock.mock.calls.filter(([path]) => path.endsWith("/submit"));
    expect(requests).toHaveLength(2);
    expect(requests[0]).toEqual(requests[1]);
    expect(requests[0]?.[1]?.headers).toMatchObject({ "X-Shown-Cap": "25" });
    expect(fetchMock.mock.calls.filter(([path]) => path.endsWith("/summary"))).toHaveLength(1);
  });

  it("discards a draft when two names store as one before accepting its summary", async () => {
    const renamed = new File(["another input"], "Credit & facts (revised).html");
    const fetchMock = testingFetch(plan, undefined, {
      "/api/submissions/sub-1/files?name=Credit%20%26%20facts%20(revised).html": {
        name: file.name,
      },
    });
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await fillInputs();
    fireEvent.change(screen.getByLabelText("Documents"), { target: { files: [renamed] } });
    fireEvent.click(screen.getByRole("button", { name: "Continue to purpose" }));
    expect(await screen.findByRole("alert")).toHaveTextContent("same stored name");
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/summary"))).toBe(false);
    const remove = screen.getByRole("button", { name: "Remove Credit & facts (revised).html" });
    fireEvent.click(remove);
    const continueButton = screen.getByRole("button", { name: "Continue to purpose" });
    await vi.waitFor(() => {
      expect(continueButton).toBeEnabled();
    });
    await advanceToPurpose();
    advanceToContext();
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    expect(await screen.findByRole("button", { name: "Submit run" })).toBeDisabled();
    expect(fetchMock.mock.calls.filter(([path]) => path === "/api/submissions")).toHaveLength(2);
    expect(fetchMock.mock.calls.filter(([, init]) => init?.body === file)).toHaveLength(2);
  });

  it("reviews what will run in plain language with an edit link per block", async () => {
    testingFetch({
      ...plan,
      modules: ["CP-0", "CP-4"],
      lookup: ["Lookup:   off: synthetic case (default); --web-lookup on forces it"],
      prior: { id: "20261116-083145-01", as_of: "2025-03-31", pathway: "credit_snapshot" },
      changes: "CP-8 compares with the credit_snapshot run (20261116-083145-01)",
    });
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await review();
    await screen.findByRole("button", { name: "Submit run" });
    const sheet = screen.getByRole("region", { name: "What will run" });
    expect(sheet).toHaveTextContent("Legal & covenants");
    expect(sheet).toHaveTextContent(
      "Compared with the Full credit assessment run as of 2025-03-31",
    );
    expect(sheet).toHaveTextContent("off: synthetic case (default)");
    expect(sheet).not.toHaveTextContent(/CP-\d|--web-lookup|20261116-083145-01/);
    expect(screen.queryByText("Reviewed inputs")).toBeNull();
    expect(screen.queryByText("Turns per module")).toBeNull();
    expect(screen.queryByText("Model and effort")).toBeNull();
    expect(screen.queryByRole("button", { name: "Edit inputs" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Edit purpose and modules" }));
    expect(screen.getByRole("heading", { name: "Purpose" })).toHaveFocus();
  });

  it("keeps the id of an unusable earlier run out of the review", async () => {
    testingFetch({
      ...plan,
      changes: "first run (not used: 20261116-083145-01: different pathway)",
    });
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await review();
    await screen.findByRole("button", { name: "Submit run" });
    const sheet = screen.getByRole("region", { name: "What will run" });
    expect(sheet).toHaveTextContent("An earlier run exists but could not be used for comparison.");
    expect(sheet).not.toHaveTextContent(/20261116-083145-01|not used/);
  });

  it("enforces primary facility input and forwards the reviewed Advanced choices", async () => {
    const fetchMock = testingFetch();
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await fillInputs();
    fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Dana Reyes" } });
    await advanceToPurpose();
    fireEvent.change(screen.getByLabelText("Run purpose"), { target: { value: "primary" } });
    fireEvent.change(screen.getByLabelText("Run form level"), { target: { value: "advanced" } });
    advanceToContext();
    fireEvent.change(screen.getByLabelText("Model"), { target: { value: "claude" } });
    fireEvent.change(screen.getByLabelText("Reasoning effort"), { target: { value: "high" } });
    fireEvent.change(screen.getByLabelText("Turns per module"), { target: { value: "64" } });
    fireEvent.click(screen.getByRole("checkbox", { name: "Committee decision (CP-6)" }));
    const reviewRun = screen.getByRole("button", { name: "Review run" });
    fireEvent.click(reviewRun);
    expect(await screen.findByRole("alert")).toHaveTextContent("Add at least one facility");
    const fields = screen.getByLabelText("Facilities and deal terms");
    fireEvent.change(fields, { target: { value: "[null]" } });
    fireEvent.click(reviewRun);
    expect(await screen.findByRole("alert")).toHaveTextContent("must be a list of objects");
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/summary"))).toBe(false);

    fireEvent.change(fields, { target: { value: '[{"facility_id":"TL-B"}]' } });
    fireEvent.click(reviewRun);
    await screen.findByRole("button", { name: "Submit run" });
    expect(screen.getByText("Model and effort")).toBeInTheDocument();
    const body = fetchMock.mock.calls.find(([path]) => path.endsWith("/summary"))?.[1]?.body;
    expect(JSON.parse(typeof body === "string" ? body : "null")).toMatchObject({
      context: { run: { run_type: "primary" }, deal_terms: [{ facility_id: "TL-B" }] },
      level: "advanced",
      model: "claude",
      effort: "high",
      max_turns: 64,
      submitted_by: "Dana Reyes",
    });
    expect(body).not.toContain("CP-6");
  });

  it("reviews an earnings update with periods and the chosen management bridge", async () => {
    const fetchMock = testingFetch({ ...plan, cap: "20" }, undefined, {
      "/connected/context": {
        ...context,
        submission_caps_usd: submissionCaps,
        attachments: {
          management_bridge: false,
          portfolio_workbook: false,
          prior_case: false,
          legal_documents: "none",
        },
      },
      "/api/submissions/sub-1/reading": {
        documents: [{ source: file.name, kind: "management_bridge" }],
        ignored: [],
        error: "",
      },
    });
    render(<ConnectedApp path="/start" mode="synthetic" />);
    await fillInputs();
    await advanceToPurpose();
    fireEvent.click(screen.getByRole("radio", { name: "Relative Value" }));
    expect(screen.getByLabelText("Run purpose")).toHaveValue("secondary");
    fireEvent.click(screen.getByRole("radio", { name: "Earnings Update" }));
    expect(screen.getByLabelText("Run purpose")).toHaveValue("earnings");
    advanceToContext();
    expect(screen.getByLabelText("Current period")).toBeRequired();
    expect(screen.getByLabelText("Prior period")).toBeRequired();
    fireEvent.change(screen.getByLabelText("Current period"), { target: { value: "q3-2026" } });
    fireEvent.change(screen.getByLabelText("Prior period"), { target: { value: "q2-2026" } });
    fireEvent.change(screen.getByLabelText("Management EBITDA bridge"), {
      target: { value: file.name },
    });
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    expect(await screen.findByRole("button", { name: "Submit run" })).toBeDisabled();
    const sent = fetchMock.mock.calls.find(([path]) => path.endsWith("/summary"))?.[1]?.body;
    expect(JSON.parse(typeof sent === "string" ? sent : "null")).toMatchObject({
      context: {
        run: {
          pathway: "earnings_update",
          run_type: "earnings",
          current_period: "q3-2026",
          prior_period: "q2-2026",
        },
        attachments: {
          management_bridge: true,
          portfolio_workbook: false,
          prior_case: false,
          legal_documents: "none",
        },
      },
    });
    expect(fetchMock.mock.calls.filter(([, options]) => options?.body === file)).toHaveLength(1);
  });

  it("carries a prior run's documents and answers, with a buffer for new dates", async () => {
    const prior = {
      issuer_id: "northbridge",
      issuer_name: "Northbridge",
      level: "advanced",
      max_turns: 24,
      modules: ["CP-0"],
      context: { ...context, identity: { ...context.identity, sector: "Gaming" } },
      files: [{ name: file.name, size: file.size }],
    };
    const fetchMock = testingFetch(plan, undefined, {
      "/api/runs/earlier/inputs": prior,
      "/api/submissions/sub-1/carry": { carried: [file.name], kept: [] },
      "/api/submissions/sub-1/reading": {
        documents: [{ source: file.name, kind: "annual_report", period_end: "2026-09-30" }],
        ignored: [],
        error: "",
      },
    });
    render(<ConnectedApp path="/start" search="?from=earlier" mode="synthetic" />);
    expect(await screen.findByLabelText("Issuer name")).toHaveValue("Northbridge");
    expect(screen.getByLabelText("Issuer ID")).toHaveAttribute("readonly");
    expect(screen.getByLabelText("Your name")).toHaveValue("");
    expect(screen.getByLabelText("As-of date").getAttribute("value")).toMatch(
      /^\d{4}-\d{2}-\d{2}$/,
    );
    fireEvent.change(screen.getByLabelText("As-of date"), { target: { value: "2026-09-29" } });
    await advanceToPurpose();
    advanceToContext();
    expect(screen.getByLabelText("Turns per module")).toHaveValue(24);
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    const limit = await screen.findByRole("checkbox", { name: "I accept this limit" });
    expect(screen.getByText(/before your newest document/)).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: /Approve:/ })).toBeDisabled();
    fireEvent.click(limit);
    expect(screen.getByRole("checkbox", { name: /Approve:/ })).toBeEnabled();
    fireEvent.click(screen.getByRole("button", { name: "Edit issuer and documents" }));
    fireEvent.change(screen.getByLabelText("As-of date"), { target: { value: "2026-09-30" } });
    await advanceToPurpose();
    advanceToContext();
    fireEvent.click(screen.getByRole("button", { name: "Review run" }));
    expect(await screen.findByRole("button", { name: "Submit run" })).toBeDisabled();
    const copy = fetchMock.mock.calls.filter(([path]) => path.endsWith("/carry"));
    expect(copy).toHaveLength(1);
    expect(copy[0]?.[1]?.body).toBe('{"run":"earlier"}');
    const body = fetchMock.mock.calls
      .filter(([path]) => path.endsWith("/summary"))
      .at(-1)?.[1]?.body;
    expect(JSON.parse(typeof body === "string" ? body : "null")).toMatchObject({
      context: {
        run: { as_of: "2026-09-30" },
        identity: { issuer_id: "northbridge", sector: "Gaming" },
      },
      level: "advanced",
      max_turns: 24,
      modules: ["CP-0"],
    });
  });

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
  };

  function activityFetch(body: unknown, status = 200) {
    vi.stubGlobal(
      "fetch",
      vi.fn((path: string) => {
        if (path !== "/connected/activity") throw new Error(`Unexpected request ${path}`);
        return Promise.resolve(Response.json(body, { status }));
      }),
    );
  }
  const waiting = {
    id: "harbour-2026-11",
    issuer_name: "Harbour Packaging",
    pathway: "credit_snapshot",
    status: "queued",
    reason: "3 runs are already running",
    submitted_by: "",
    started_at: "",
    name_differs: false,
    stalled: false,
    files: 2,
    modules: [
      ["CP-0", "waiting"],
      ["Report", "waiting"],
    ],
  };

  it("lists the runs in progress and waiting, with module progress and no run code", async () => {
    activityFetch({
      updated: "2026-11-16T14:32:10Z",
      held: "daily limit of 30 runs reached; waiting until tomorrow",
      runs: [
        {
          ...waiting,
          id: "meridian-2026-11",
          issuer_name: "Meridian Foods",
          status: "running",
          reason: "",
          submitted_by: "Dana Reyes",
          started_at: "2026-11-16T14:02:00Z",
          name_differs: true,
          stalled: true,
          files: 14,
          modules: [
            ["CP-0", "done"],
            ["CP-1", "running"],
            ["Report", "waiting"],
          ],
        },
        waiting,
      ],
    });
    render(<ConnectedApp path="/runs" mode="synthetic" />);
    expect(await screen.findByRole("link", { name: "Meridian Foods" })).toHaveAttribute(
      "href",
      "/run/meridian-2026-11",
    );
    expect(screen.getByRole("heading", { level: 1, name: "Run activity" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Run" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Run" })).toHaveAttribute("href", "/runs");
    expect(screen.getByRole("link", { name: "Start a run" })).toHaveAttribute("href", "/start");
    expect(screen.getByText("Updated 16 Nov 2026, 14:32 UTC")).toBeInTheDocument();
    for (const term of ["Running", "Waiting"])
      expect(screen.getByText(term, { selector: "dt" }).nextElementSibling).toHaveTextContent("1");
    expect(screen.getByRole("progressbar", { name: "1 of 2 modules" })).toHaveAttribute(
      "aria-valuenow",
      "1",
    );
    expect(screen.getByText("Source readiness (CP-0)").closest("li")).toHaveTextContent("Finished");
    expect(
      screen.getByText("submitted by Dana Reyes · started 16 Nov 2026, 14:02 UTC"),
    ).toBeInTheDocument();
    expect(screen.getByText("No activity in the last hour")).toBeInTheDocument();
    expect(screen.getByText("14 source files")).toBeInTheDocument();
    expect(screen.getByText("Issuer name differs from earlier runs")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Harbour Packaging" })).toHaveAttribute(
      "href",
      "/run/harbour-2026-11",
    );
    expect(screen.getByText("3 runs are already running")).toBeInTheDocument();
    expect(screen.getByText(/daily limit of 30 runs reached/)).toBeInTheDocument();
    expect(document.body).not.toHaveTextContent(/2026-11\b/);
  });

  it("says so when no run is in progress and when activity cannot be read", async () => {
    activityFetch({ updated: "2026-11-16T14:32:10Z", held: "", runs: [] });
    render(<ConnectedApp path="/runs" mode="synthetic" />);
    expect(await screen.findByText("No run in progress")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open the library" })).toHaveAttribute("href", "/");
    cleanup();
    activityFetch({ error: "run activity is unavailable" }, 500);
    render(<ConnectedApp path="/runs" mode="synthetic" />);
    expect(await screen.findByText("Run activity could not be read")).toBeInTheDocument();
    expect(screen.queryByText("No run in progress")).toBeNull();
  });

  it("waits for report publication after the run has finished", async () => {
    let reportRequests = 0;
    vi.stubGlobal(
      "fetch",
      vi.fn((path: string) => {
        if (path === "/connected/activity/test-run")
          return Promise.resolve(
            Response.json({
              id: "test-run",
              status: "finished",
              issuer_name: report.issuer,
              pathway: report.pathway,
              modules: [
                ["CP-0", "done"],
                ["Report", "done"],
              ],
              as_of: report.asOf,
              cap: "25",
              spent: "0",
              settled_spent: "0",
              held: "0",
              started_at: "2026-10-31T17:31:00Z",
              ended_at: "2026-10-31T17:32:14Z",
              observed_at: "2026-10-31T17:35:00Z",
              events: [{ kind: "delivered", at: "2026-10-31T17:32:01Z" }],
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
    expect(screen.getByRole("link", { name: "Run activity" })).toHaveAttribute("href", "/runs");
    expect(screen.getByText("Source readiness (CP-0)")).toBeInTheDocument();
    expect(
      screen.getByRole("progressbar", { name: /USD 0.00 of USD 25.00 cap usage/ }),
    ).toHaveAttribute("aria-valuenow", "0");
    expect(screen.getByRole("progressbar", { name: "1 of 1 modules" })).toBeInTheDocument();
    expect(screen.getByText("1 min 14 s")).toBeInTheDocument();
    expect(screen.getByText("Report delivered.")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Open report" })).toBeNull();
    expect(
      await screen.findByRole("link", { name: "Open report" }, { timeout: 3000 }),
    ).toHaveAttribute("href", "/report/test-run");
  });

  it("reads the published handoff, keeps citations in Evidence, and links the matching download", async () => {
    const folder = "Rapport Émetteur";
    const path = `/report/${encodeURIComponent(folder)}`;
    const download = `downloads/${encodeURIComponent(folder)}/CP-2.md`;
    const output = `${folder}/deliveries/published/CP-2.md`;
    const filing = "issuer-filing.pdf";
    const snapshot = {
      catalogue: {
        real: [
          {
            id: folder,
            name: report.issuer,
            issuer: "SG",
            title: "Full credit assessment",
            date: report.asOf,
            sector: "",
            period: "FY2026",
            metrics: {},
          },
        ],
      },
      workspace: {
        runs: {
          "legacy-route-alias": {
            folder,
            issuer: "SG",
            issuerHeading: report.issuer,
            asOf: report.asOf,
            pathway: report.pathway,
            period: "FY2026",
            changes: { first_run: true },
            modules: { "CP-2": { outputs: [output], default: output } },
            evidence: {
              sources: [
                {
                  name: filing,
                  type: "PDF",
                  documentDate: report.asOf,
                  readBy: ["CP-2"],
                  sha256: null,
                },
              ],
              unused: [],
              unrecorded: [],
              noSourcesModules: [],
              handoffs: [
                { module: "CP-2", name: "CP-2.md", href: download },
                { module: "CP-1", name: "CP-1.md", href: "downloads/other/CP-1.md" },
              ],
              zip: null,
              downloads: [],
              record: { hashes: [], instructions: [], calls: [], cap: null },
            },
          },
        },
        outputs: {
          [output]: {
            id: output,
            module: "CP-2",
            label: "Published output",
            sha256: "d".repeat(64),
            issue: "Chart data: risk exposure is not in its fixed table",
          },
        },
        handoffs: {
          ["d".repeat(64)]: [
            { heading: "Findings", level: 2, line: 1, blocks: [] },
            {
              heading: "Bottom line",
              level: 3,
              line: 2,
              blocks: [
                {
                  type: "text",
                  line: 3,
                  end: 4,
                  text: `The report read the filing.\nBasis: ${filing}, page 7.`,
                },
              ],
            },
            {
              heading: "Financial inputs",
              level: 3,
              line: 6,
              blocks: [
                {
                  type: "table",
                  line: 7,
                  headers: ["Year", "Cash", "Source"],
                  rows: [
                    { line: 9, cells: ["2026", "0", filing] },
                    { line: 10, cells: ["2025", "", "prior-filing.pdf"] },
                  ],
                },
              ],
            },
            {
              heading: "Next module",
              level: 2,
              line: 12,
              blocks: [{ type: "text", line: 13, end: 13, text: "Downstream-only instructions." }],
            },
          ],
        },
        models: [],
      },
      chips: {},
    };
    vi.stubGlobal(
      "fetch",
      vi.fn((path: string) => {
        if (path !== `/connected/snapshot?run=${encodeURIComponent(folder)}`)
          throw new Error(`Unexpected request ${path}`);
        return Promise.resolve(Response.json(snapshot));
      }),
    );
    window.history.replaceState(null, "", path);
    render(<ConnectedApp path={path} mode="synthetic" />);
    expect(await screen.findByRole("heading", { name: report.issuer })).toBeInTheDocument();
    expect(screen.getByText("The report read the filing.")).toBeInTheDocument();
    expect(screen.queryByText(filing, { exact: false })).toBeNull();
    expect(screen.queryByRole("link", { name: "Download Fundamental credit" })).toBeNull();
    window.location.hash = "evidence";
    await screen.findByRole("link", { name: "Download Fundamental credit" });
    expect(screen.getByRole("link", { name: "Download Fundamental credit" })).toHaveAttribute(
      "href",
      `/library/${download}`,
    );
    expect(screen.getByRole("link", { name: "Download Fundamental credit" })).toHaveAttribute(
      "download",
    );
    expect(screen.queryByRole("link", { name: "Download Financial foundation" })).toBeNull();
    expect(screen.getByRole("link", { name: /^Modules(?: \d+)?$/ })).toHaveAttribute(
      "href",
      "#modules",
    );
    window.location.hash = "modules/CP-2";
    expect(await screen.findByRole("cell", { name: "0" })).toBeInTheDocument();
    expect(screen.queryByRole("columnheader", { name: "Source" })).toBeNull();
    expect(screen.queryByText("Downstream-only instructions.")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Show sources for 2026" }));
    expect(await screen.findByRole("dialog")).toHaveTextContent(filing);
    expect(screen.getByRole("link", { name: "Open in Evidence" })).toHaveAttribute(
      "href",
      `${path}#evidence/${encodeURIComponent(output)}~${"d".repeat(64)}-9`,
    );
    window.location.hash = `evidence/${encodeURIComponent(output)}~${"d".repeat(64)}-9`;
    expect(
      await screen.findByRole("heading", { name: "Fundamental credit (CP-2) · Line 9" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: filing })).toBeInTheDocument();
    expect(screen.queryByRole("cell", { name: "prior-filing.pdf" })).toBeNull();
    expect(screen.queryByText("Downstream-only instructions.")).toBeNull();
    expect(screen.queryByText("Chart data: risk exposure is not in its fixed table")).toBeNull();
    window.location.hash = "evidence/0-9";
    expect(await screen.findByRole("alert")).toHaveTextContent("Evidence link unavailable");
    window.location.hash = "evidence/record/CP-2";
    expect(
      await screen.findByText("Chart data: risk exposure is not in its fixed table"),
    ).toBeInTheDocument();
    window.location.hash = "changes";
    expect(await screen.findByText("No earlier run to compare.")).toBeInTheDocument();
    window.history.replaceState(null, "", "/");
  });

  it.each(["%2F", "%5C", "%2e%2e", "demo%0a"])(
    "refuses an invalid published folder %s",
    (folder) => {
      render(<ConnectedApp path={`/report/${folder}`} mode="synthetic" />);
      expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
    },
  );

  it("uses the same reviewed submit in live mode with each limit accepted", async () => {
    const fetchMock = testingFetch({
      ...plan,
      items: [
        { id: "gap", scope: "run", outcome: "gap", reason: "Gap to review" },
        { id: "check", scope: "CP-0", outcome: "check", reason: "Check source" },
      ],
    });
    const navigate = vi.fn();
    render(<ConnectedApp path="/start" mode="live" navigate={navigate} />);
    await review();
    const submit = await screen.findByRole("button", { name: "Submit, spend up to USD 25.00" });
    expect(submit).toBeDisabled();
    const approval = screen.getByRole("checkbox", { name: /Approve: I have read this summary/ });
    expect(approval).toBeDisabled();
    fireEvent.click(screen.getByRole("checkbox", { name: "I accept this limit" }));
    expect(approval).toBeDisabled();
    fireEvent.click(screen.getByRole("checkbox", { name: "I have checked this" }));
    expect(approval).toBeEnabled();
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/submit"))).toBe(false);
    approve();
    expect(submit).toBeEnabled();
    fireEvent.click(submit);
    const dialog = await screen.findByRole("dialog", { name: "Start a paid run?" });
    expect(dialog).toHaveTextContent("spend up to USD 25.00");
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/submit"))).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/submit"))).toBe(false);
    fireEvent.click(submit);
    fireEvent.click(await screen.findByRole("button", { name: "Start run, up to USD 25.00" }));
    await vi.waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/run/test-run");
    });
  });
});
