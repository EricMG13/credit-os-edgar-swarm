import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ConnectedLoadBoundary } from "./ConnectedLoadBoundary";
import "./index.css";

const ConnectedApp = lazy(() =>
  import("./pages/connected/ConnectedApp").then(({ ConnectedApp }) => ({
    default: ConnectedApp,
  })),
);

const container = document.getElementById("root");
if (container === null) throw new Error("connected.html has no #root element");

const mode = document.querySelector<HTMLMetaElement>('meta[name="credit-os-mode"]');

createRoot(container).render(
  <StrictMode>
    <ConnectedLoadBoundary>
      <Suspense
        fallback={
          <main className="mx-auto w-full max-w-[96rem] p-6">
            <p className="text-text-secondary" role="status" aria-live="polite">
              Loading Credit OS…
            </p>
          </main>
        }
      >
        <ConnectedApp
          path={window.location.pathname}
          mode={mode?.content === "synthetic" ? "synthetic" : "live"}
        />
      </Suspense>
    </ConnectedLoadBoundary>
  </StrictMode>,
);
