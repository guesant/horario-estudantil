import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { createContext, useMemo } from 'react';
import { parseQueryData } from '../../etc/app/pages/shared/parseQueryData';

export type IExplorerRoutingContext = {
  query: any;
};

export const ExplorerRoutingContext = createContext(
  {} as IExplorerRoutingContext,
);

export type IExplorerRoutingContextProps = {
  children?: any;

  initialQuery?: ParsedUrlQuery;
};

export const ExplorerRoutingContextProvider = (
  props: IExplorerRoutingContextProps,
) => {
  const { children, initialQuery } = props;

  const { query: currentQuery } = useRouter();

  const finalQuery = useMemo(
    () => parseQueryData({ ...initialQuery, ...currentQuery }),
    [initialQuery, currentQuery],
  );

  return (
    <ExplorerRoutingContext.Provider value={{ query: finalQuery }}>
      {children}
    </ExplorerRoutingContext.Provider>
  );
};
