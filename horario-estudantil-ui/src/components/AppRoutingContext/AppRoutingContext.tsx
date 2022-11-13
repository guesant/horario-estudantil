import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { createContext, useMemo } from "react";
import { parseQueryData } from "../../etc/domain/app/pages/shared/parseQueryData";

export type IAppRoutingContext = {
  query: any;
};

export const AppRoutingContext = createContext({} as IAppRoutingContext);

export type IAppRoutingContextProviderProps = {
  children?: any;

  initialQuery?: ParsedUrlQuery;
};

export const AppRoutingContextProvider = (
  props: IAppRoutingContextProviderProps
) => {
  const { children, initialQuery } = props;

  const { query: currentQuery } = useRouter();

  const finalQuery = useMemo(
    () => parseQueryData({ ...initialQuery, ...currentQuery }),
    [initialQuery, currentQuery]
  );

  return (
    <AppRoutingContext.Provider value={{ query: finalQuery }}>
      {children}
    </AppRoutingContext.Provider>
  );
};
