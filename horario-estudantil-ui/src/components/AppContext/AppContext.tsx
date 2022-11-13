import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { QUERY_UNIDADE_DE_ENSINO_INFO } from "../../etc/domain/app/pages/UnidadeDeEnsino/UnidadeDeEnsinoQueries";
import AppLoading from "../AppLoading/AppLoading";
import { AppRoutingContext } from "../AppRoutingContext/AppRoutingContext";
import LayoutApp from "../LayoutApp/LayoutApp";

export type IAppContext = {
  selectedUE: string | null;
};

export const AppContext = createContext({} as IAppContext);

export type IAppContextProviderProps = {
  children: any;
};

const useRouteUE = () => {
  const { query } = useContext(AppRoutingContext);
  return query.ue;
};

export const AppContextProvider: FC<IAppContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const { pathname } = router;

  const routeUE = useRouteUE();

  const [selectedUE, setSelectedUE] = useState<string | null>(routeUE);

  const loadCheckQuery = useQuery(QUERY_UNIDADE_DE_ENSINO_INFO, {
    variables: { sigla: selectedUE },
  });

  useEffect(() => void setSelectedUE(routeUE), [routeUE]);

  const selectedUEInfo = useMemo(() => {
    if (pathname.startsWith("/h/") && typeof selectedUE !== "string") {
      return { isValid: false, reason: "required" };
    }

    if (selectedUE) {
      const { error } = loadCheckQuery;

      if (error) {
        const { graphQLErrors } = error;

        const notFoundError = graphQLErrors.some(
          (graphQLError) =>
            (graphQLError.extensions?.exception as any)?.status === 404
        );

        if (notFoundError) {
          return { isValid: false, reason: "not-found" };
        }
      }
    }

    return { isValid: true };
  }, [loadCheckQuery, pathname, selectedUE]);

  const handleInvalidUE = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    if (!selectedUEInfo.isValid) {
      handleInvalidUE();
    }
  }, [selectedUEInfo, handleInvalidUE]);

  if (loadCheckQuery.loading || !selectedUEInfo.isValid) {
    return (
      <>
        <LayoutApp>
          <AppLoading />
        </LayoutApp>
      </>
    );
  }

  return (
    <AppContext.Provider value={{ selectedUE: selectedUE }}>
      {children}
    </AppContext.Provider>
  );
};
