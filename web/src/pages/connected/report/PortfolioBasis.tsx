import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useResource } from "../useResource";

export interface PortfolioBasis {
  folder: string;
  output: string;
  sha256: string;
  asOf: string;
  tableLines: number[];
}

const Context = createContext<PortfolioBasis | null>(null);

export function usePortfolioBasis() {
  return useContext(Context);
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
      if (!enabled) return null;
      const response = await fetch(`/connected/portfolio/${encodeURIComponent(folder)}`, {
        signal,
        cache: "no-store",
      });
      if (!response.ok) return null;
      return ((await response.json()) as { basis: PortfolioBasis | null }).basis;
    },
    [folder, enabled],
  );
  const { value } = useResource(load);
  return (
    <Context.Provider value={enabled && value?.folder === folder ? value : null}>
      {children}
    </Context.Provider>
  );
}
