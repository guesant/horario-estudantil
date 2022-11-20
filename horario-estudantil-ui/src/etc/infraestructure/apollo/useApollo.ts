import { useMemo } from "react";
import { initializeApollo } from "./initializeApollo";

// utilizano um memorize para caso o initialState nao mudar nao ficar reinicializando

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
