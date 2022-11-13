import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

export type IAppContext = {
  selectedUnidadeDeEnsino: string | null;
};

export const AppContext = createContext({} as IAppContext);

const useRouterQuery = (initialQuery?: ParsedUrlQuery) => {
  const { query } = useRouter();

  const finalQuery = {
    ue: initialQuery?.ue ?? query.ue,
  };

  return finalQuery;
};

export type IAppContextProviderProps = {
  initialQuery?: ParsedUrlQuery;
  children: any;
};

export const AppContextProvider: FC<IAppContextProviderProps> = ({
  children,
  initialQuery,
}) => {
  const query = useRouterQuery(initialQuery);

  const ue = typeof query.ue === "string" ? query.ue : null;

  const [selectedUE, setSelectedUE] = useState<string | null>(ue);

  useEffect(() => {
    setSelectedUE(ue);
  }, [ue]);

  return (
    <AppContext.Provider value={{ selectedUnidadeDeEnsino: selectedUE }}>
      {children}
    </AppContext.Provider>
  );
};
