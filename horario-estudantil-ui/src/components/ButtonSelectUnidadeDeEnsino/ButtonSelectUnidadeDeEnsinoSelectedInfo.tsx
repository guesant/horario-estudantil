import { useContext, useMemo } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useQuery } from "@apollo/client";
import { QUERY_UNIDADE_DE_ENSINO_INFO } from "../../etc/domain/app/pages/UnidadeDeEnsino/UnidadeDeEnsinoQueries";

export const ButtonSelectUnidadeDeEnsinoSelectedInfo = () => {
  const { selectedUE } = useContext(AppContext);

  const { data, loading, error } = useQuery(QUERY_UNIDADE_DE_ENSINO_INFO, {
    variables: { sigla: selectedUE },
  });

  const apelido = useMemo(() => data?.unidadeEstudantil.apelido, [data]);

  if (loading) {
    return <>Carregando...</>;
  }

  if (error) {
    return (
      <>Não foi possível carregar as informações sobre a unidade selecionada.</>
    );
  }

  if (data) {
    return <>{apelido}</>;
  }

  return <></>;
};
