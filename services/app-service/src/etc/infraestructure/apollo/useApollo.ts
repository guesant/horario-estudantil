import {useMemo} from "react";
import {initializeApollo} from "./initializeApollo";

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
