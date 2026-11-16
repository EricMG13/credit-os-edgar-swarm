import { Component, type ReactNode } from "react";

type Props = { children: ReactNode; reload?: () => void };

export class ConnectedLoadBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <main className="mx-auto w-full max-w-[96rem] p-6">
          <h1 className="font-display text-h1">Credit OS</h1>
          <p className="mt-4 text-text-secondary" role="alert">
            This page could not be loaded. Reload to try again.
          </p>
          <button
            className="mt-3 min-h-11 rounded-ds-sm bg-action px-4 py-2 text-sm font-semibold text-text-on-action hover:bg-action-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            onClick={this.props.reload ?? (() => window.location.reload())}
            type="button"
          >
            Reload page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
