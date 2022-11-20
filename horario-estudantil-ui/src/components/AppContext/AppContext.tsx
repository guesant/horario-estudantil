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

const useRouteSigla = () => {
  const { query } = useContext(AppRoutingContext);

  return query.ue;
};

const useRouteRequiresSigla = () => {
  const router = useRouter();
  const { pathname } = router;

  return pathname.startsWith("/h/");
};

export const AppContextProvider: FC<IAppContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const routeUE = useRouteSigla();
  const isSiglaRequired = useRouteRequiresSigla();

  const [selectedSigla, setSelectedSigla] = useState<string | null>(routeUE);

  const hasSigla = typeof selectedSigla === "string";

  const unidadeDeEnsinoInfoQuery = useQuery(QUERY_UNIDADE_DE_ENSINO_INFO, {
    skip: !hasSigla,
    variables: { sigla: selectedSigla },
  });

  useEffect(() => void setSelectedSigla(routeUE), [routeUE]);

  const selectedUEInfo = useMemo(() => {
    const { loading, called, error } = unidadeDeEnsinoInfoQuery;

    if (isSiglaRequired && !hasSigla) {
      return { isValid: false, reason: "required" };
    }

    if (loading || ((isSiglaRequired || hasSigla) && !called)) {
      return { isValid: false, reason: "loading" };
    }

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

    return { isValid: true };
  }, [unidadeDeEnsinoInfoQuery, isSiglaRequired, hasSigla]);

  const { isValid, reason } = selectedUEInfo;

  const handleInvalidUE = useCallback(() => void router.push("/"), [router]);

  useEffect(() => {
    if (!isValid && reason !== "loading") {
      handleInvalidUE();
    }
  }, [isValid, reason, handleInvalidUE]);

  if (!isValid) {
    return (
      <>
        <LayoutApp>
          <AppLoading />
        </LayoutApp>
      </>
    );
  }

  return (
    <AppContext.Provider value={{ selectedUE: selectedSigla }}>
      {children}
    </AppContext.Provider>
  );
};
