import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { ConnectedLoadBoundary } from "./ConnectedLoadBoundary";
import "./index.css";

const container = document.getElementById("root");
if (container === null) throw new Error("connected.html has no #root element");

const mode = document.querySelector<HTMLMetaElement>('meta[name="credit-os-mode"]');
const path = window.location.pathname;
const root = createRoot(container);

function draw(page: ReactNode) {
  root.render(
    <StrictMode>
      <ConnectedLoadBoundary>{page}</ConnectedLoadBoundary>
    </StrictMode>,
  );
}

function Unloaded({ failure }: { failure: unknown }): never {
  throw failure;
}

// The application and the page at this address are loaded before the application is drawn. Drawn
// as lazy components they would first show a loading state, which React keeps for 300 ms.
draw(
  <main className="mx-auto w-full max-w-[96rem] p-6">
    <p className="text-text-secondary" role="status" aria-live="polite">
      Loading Credit OS…
    </p>
  </main>,
);
import("./pages/connected/ConnectedApp").then(
  async ({ ConnectedApp, preloadPage }) => {
    // A page that could not be loaded is asked for again when drawn, and fails there.
    await preloadPage(path).catch(() => undefined);
    draw(
      <ConnectedApp
        path={path}
        readOnly={mode?.content === "preview"}
        mode={mode?.content === "synthetic" ? "synthetic" : "live"}
      />,
    );
  },
  (failure: unknown) => {
    draw(<Unloaded failure={failure} />);
  },
);
