import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ConnectedApp } from "./pages/connected/ConnectedApp";
import { readLibraryData } from "./data";
import "./index.css";

const container = document.getElementById("root");
if (container === null) throw new Error("index.html has no #root element");

const backend = document.querySelector<HTMLMetaElement>('meta[name="credit-os-backend"]');
const mode = document.querySelector<HTMLMetaElement>('meta[name="credit-os-mode"]');

createRoot(container).render(
  <StrictMode>
    {backend?.content === "legacy" ? (
      <ConnectedApp
        path={window.location.pathname}
        mode={mode?.content === "synthetic" ? "synthetic" : "live"}
      />
    ) : (
      <App result={readLibraryData(window.CREDIT_OS_DATA)} />
    )}
  </StrictMode>,
);
