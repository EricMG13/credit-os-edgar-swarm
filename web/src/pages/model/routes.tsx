// The model page group. Add a page as a route object below with a literal `path: "/…"` property
// written in this file; every path starts with /model/. scripts/route-paths.mjs reads these paths
// to visit each in a browser, and a test fails if it cannot see one. A page reads its data with
// `readSlice(useSource().model)`. Edit only this folder and fixtures/model.json.
import type { Route } from "../route-table";
import { AnalysisPage } from "./AnalysisPage";
import { ForecastPage } from "./ForecastPage";
import { FrontPage } from "./FrontPage";
import { LimitationsPage } from "./LimitationsPage";
import { PortfolioFitPage } from "./PortfolioFitPage";
import { RunsIndexPage } from "./RunsIndexPage";
import { StatementsPage } from "./StatementsPage";
import { readSlice } from "./slice/read";

export { readSlice } from "./slice/read";

/** A run's page is about its issuer and the date the run covers: `header.asOf` is the whole badge text. */
const runSubject: NonNullable<Route["subject"]> = (params, data) => {
  const slice = readSlice(data.model);
  const run =
    slice.kind === "ok"
      ? slice.data.runs.find(
          (item) => item.issuer === params["issuer"] && item.run === params["run"],
        )
      : undefined;
  return run === undefined ? undefined : `${run.header.issuerName} — ${run.header.asOf}`;
};

export const modelRoutes: readonly Route[] = [
  {
    path: "/model/runs",
    home: "/model/runs",
    layout: "bleed",
    title: "Financial models",
    render: () => <RunsIndexPage />,
  },
  {
    path: "/model/:issuer/:run/front",
    layout: "bleed",
    title: "Front page",
    subject: runSubject,
    render: (params) => <FrontPage params={params} />,
  },
  {
    path: "/model/:issuer/:run/analysis",
    layout: "bleed",
    title: "Analysis",
    subject: runSubject,
    render: (params) => <AnalysisPage params={params} />,
  },
  {
    path: "/model/:issuer/:run/statements",
    layout: "bleed",
    title: "Model",
    subject: runSubject,
    render: (params) => <StatementsPage params={params} />,
  },
  {
    path: "/model/:issuer/:run/portfolio-fit",
    layout: "bleed",
    title: "Portfolio fit",
    subject: runSubject,
    render: (params) => <PortfolioFitPage params={params} />,
  },
  {
    path: "/model/:issuer/:run/limitations",
    layout: "bleed",
    title: "Limitations",
    subject: runSubject,
    render: (params) => <LimitationsPage params={params} />,
  },
  {
    path: "/model/:issuer/:run/forecast",
    layout: "bleed",
    title: "Forecast",
    subject: runSubject,
    render: (params) => <ForecastPage params={params} />,
  },
];
