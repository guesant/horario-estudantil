import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { AppRoutingContext } from "../AppRoutingContext/AppRoutingContext";

export const useNavigateToTurma = () => {
  const router = useRouter();

  const { query } = useContext(AppRoutingContext);

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
    [router, query]
  );

  return navigateToTurma;
};
