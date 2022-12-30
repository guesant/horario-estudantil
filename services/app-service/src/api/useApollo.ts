import { useMemo } from 'react';
import { initializeApollo } from '../infrastructure/endpoint/apollo/initializeApollo';

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
