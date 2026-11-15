import { useEffect, useState } from "react";

export function errorText(error: unknown) {
  return error instanceof Error ? error.message : "The request failed. Try again.";
}

export function useResource<T>(load: (signal: AbortSignal) => Promise<T>) {
  const [value, setValue] = useState<T>();
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal).then(
      (result) => {
        if (!controller.signal.aborted) setValue(result);
      },
      (failure: unknown) => {
        if (!controller.signal.aborted) setError(errorText(failure));
      },
    );
    return () => {
      controller.abort();
    };
  }, [load]);
  return { value, error };
}
