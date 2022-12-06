import {useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import {createContext, FC, useCallback, useEffect, useMemo, useState,} from "react";
import {QUERY_INSTITUICAO_INFO} from "../../etc/domain/app/queries/InstituicaoQueries";
import AppLoading from "../UIExplorerLoading/AppLoading";
import ExplorerMainLayout from "../ExplorerMainLayout/ExplorerMainLayout";
import {useRouteSigla} from "./useRouteSigla";
import {useRouteRequiresSigla} from "./useRouteRequiresSigla";

export type IExplorerContext = {
  sigla: string | null;
};

export const ExplorerContext = createContext({} as IExplorerContext);

export type IExplorerContextProviderProps = {
  children: any;
};

export const ExplorerContextProvider: FC<IExplorerContextProviderProps> = ({
                                                                   children,
                                                                 }) => {
  const router = useRouter();
  const routeUE = useRouteSigla();
  const isSiglaRequired = useRouteRequiresSigla();

  const [selectedSigla, setSelectedSigla] = useState<string | null>(routeUE);

  const hasSigla = typeof selectedSigla === "string";

  const instituicaoQuery = useQuery(QUERY_INSTITUICAO_INFO, {
    skip: !hasSigla,
    variables: { sigla: selectedSigla },
  });

  useEffect(() => void setSelectedSigla(routeUE), [routeUE]);

  const selectedUEInfo = useMemo(() => {
    const {loading, called, error} = instituicaoQuery;

    if (isSiglaRequired && !hasSigla) {
      return {isValid: false, reason: "required"};
    }

    if (loading || ((isSiglaRequired || hasSigla) && !called)) {
      return {isValid: false, reason: "loading"};
    }

    if (error) {
      const {graphQLErrors} = error;

      const notFoundError = graphQLErrors.some(
        (graphQLError) =>
          (graphQLError.extensions?.exception as any)?.status === 404
      );

      if (notFoundError) {
        return {isValid: false, reason: "not-found"};
      }
    }

    return {isValid: true};
  }, [instituicaoQuery, isSiglaRequired, hasSigla]);

  const {isValid, reason} = selectedUEInfo;

  const handleInvalidUE = useCallback(() => void router.push("/"), [router]);

  useEffect(() => {
    if (!isValid && reason !== "loading") {
      handleInvalidUE();
    }
  }, [isValid, reason, handleInvalidUE]);

  if (!isValid) {
    return (
      <>
        <ExplorerMainLayout>
          <AppLoading/>
        </ExplorerMainLayout>
      </>
    );
  }

  return (
    <ExplorerContext.Provider value={{sigla: selectedSigla}}>
      {children}
    </ExplorerContext.Provider>
  );
};
