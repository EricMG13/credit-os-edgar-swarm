import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import { useResource } from "../useResource";

export interface PortfolioBasis {
  folder: string;
  output: string;
  sha256: string;
  asOf: string;
  tableLines: number[];
}

type Answer = { basis: PortfolioBasis | null; loading: boolean };

const NO_BASIS: Answer = { basis: null, loading: false };
const LOADING: Answer = { basis: null, loading: true };

const Context = createContext<Answer>(NO_BASIS);

export function usePortfolioBasis() {
  return useContext(Context).basis;
}

/** True from the request for the basis until it answers; no basis is claimed or denied meanwhile. */
export function usePortfolioBasisLoading() {
  return useContext(Context).loading;
}

export function PortfolioBasisProvider({
  folder,
  enabled,
  children,
}: {
  folder: string;
  enabled: boolean;
  children: ReactNode;
}) {
  const load = useCallback(
    async (signal: AbortSignal) => {
      if (!enabled) return { folder, basis: null };
      const response = await fetch(`/connected/portfolio/${encodeURIComponent(folder)}`, {
        signal,
        cache: "no-store",
      });
      if (!response.ok) return { folder, basis: null };
      const { basis } = (await response.json()) as { basis: PortfolioBasis | null };
      return { folder, basis };
    },
    [folder, enabled],
  );
  const { value, error } = useResource(load);
  const answer = useMemo<Answer>(() => {
    if (!enabled) return NO_BASIS;
    if (value?.folder === folder)
      return { basis: value.basis?.folder === folder ? value.basis : null, loading: false };
    return error ? NO_BASIS : LOADING;
  }, [enabled, value, folder, error]);
  return <Context.Provider value={answer}>{children}</Context.Provider>;
}
