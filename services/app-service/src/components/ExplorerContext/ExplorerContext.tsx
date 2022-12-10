import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { createContext, FC, useCallback, useEffect, useMemo } from 'react';
import UILoading from '../UILoading/UILoading';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import { useRouteSigla } from '../../hooks/useRouteSigla';
import { ExplorerDialogSelectInstituicaoContextProvider } from '../ExplorerDialogSelectInstituicaoContext/ExplorerDialogSelectInstituicaoContext';
import { INSTITUICAO_GENERAL_INFO } from '../../graphql/fragments/INSTITUICAO_GENERAL_INFO';

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

  const sigla = useRouteSigla();

  const hasSigla = typeof sigla === 'string';

  const instituicaoQuery = useQuery(INSTITUICAO_GENERAL_INFO, {
    skip: !hasSigla,
    variables: { sigla: sigla },
  });

  const selectedInstituicaoInfo = useMemo(() => {
    const { loading, called, error, data } = instituicaoQuery;

    if (!data && hasSigla && (loading || !called)) {
      return { isValid: false, reason: 'loading' };
    }

    if (error) {
      const { graphQLErrors } = error;

      const notFoundError = graphQLErrors.some(
        (graphQLError) =>
          (graphQLError.extensions?.exception as any)?.status === 404,
      );

      if (notFoundError) {
        return { isValid: false, reason: 'not-found' };
      }
    }

    return { isValid: true };
  }, [instituicaoQuery, hasSigla]);

  const { isValid, reason } = selectedInstituicaoInfo;

  const handleInvalidInstituicao = useCallback(
    () => void router.push('/'),
    [router],
  );

  useEffect(() => {
    if (!isValid && reason !== 'loading') {
      handleInvalidInstituicao();
    }
  }, [isValid, reason, handleInvalidInstituicao]);

  if (!isValid) {
    return (
      <>
        <ExplorerLayoutMain>
          <UILoading />
        </ExplorerLayoutMain>
      </>
    );
  }

  return (
    <ExplorerContext.Provider value={{ sigla: sigla }}>
      <ExplorerDialogSelectInstituicaoContextProvider>
        {children}
      </ExplorerDialogSelectInstituicaoContextProvider>
    </ExplorerContext.Provider>
  );
};
