import { Callout } from "@/components/alert/Alert";

/**
 * The static app is a design reference fed by saved samples (OQ-01), so a page that draws them says
 * so, once, ahead of the page. App draws it for the other groups, and a model frame draws it as its
 * own first child. It lives here, not in App, because App imports the model routes: a model page
 * that imported App for it would make a cycle.
 */
export function DesignReferenceNote() {
  return (
    <Callout title="Design reference with sample data">
      This page shows a saved example. Its names and figures are samples, and it is not connected to
      the run service, so nothing here starts a run or spends money.
    </Callout>
  );
}
