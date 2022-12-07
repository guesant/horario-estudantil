import { useRouter } from 'next/router';
import { useCallback, useContext } from 'react';
import { ExplorerRoutingContext } from '../ExplorerRoutingContext/ExplorerRoutingContext';

export const useNavigateToTurma = () => {
  const router = useRouter();

  const { query } = useContext(ExplorerRoutingContext);

  const navigateToTurma = useCallback(
    (turma: string | number) => {
      router.push({
        pathname: `/h/turmas/turma`,
        query: {
          ue: query.ue,
          turma: turma,
        },
      });
    },
    [router, query],
  );

  return navigateToTurma;
};
