import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useQuery } from "@apollo/client";
import { QUERY_UNIDADE_DE_ENSINO_INFO } from "../../etc/domain/app/pages/UnidadeDeEnsino/UnidadeDeEnsinoQueries";

export const ButtonSelectUnidadeDeEnsinoSelectedInfo = () => {
  const { selectedUE } = useContext(AppContext);

  const { data, loading, error } = useQuery(QUERY_UNIDADE_DE_ENSINO_INFO, {
    variables: { sigla: selectedUE },
  });

  const apelido = useMemo(() => data?.unidadeEstudantil.apelido, [data]);

  if (!selectedUE) {
    return null;
  }

  if (apelido) {
    return <>{apelido}</>;
  }

  if (loading) {
    return <>Carregando...</>;
  }

  if (error) {
    return (
      <>Não foi possível carregar as informações sobre a unidade selecionada.</>
    );
  }

  return null;
};
