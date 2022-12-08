import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useRouteSigla } from '../../hooks/useRouteSigla';

export const useNavigateToTurma = () => {
  const router = useRouter();

  const sigla = useRouteSigla();

  const navigateToTurma = useCallback(
    (turma: string | number) => {
      router.push({
        pathname: `/h/${sigla}/turmas/${turma}`,
      });
    },
    [router, sigla],
  );

  return navigateToTurma;
};
