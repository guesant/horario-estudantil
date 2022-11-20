import { useContext, useMemo } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useQuery } from "@apollo/client";
import { QUERY_INSTITUICAO_INFO } from "../../etc/domain/app/queries/InstituicaoQueries";

export const AppBotaoSelecionarInstituicaoSelecionadoInformacoes = () => {
  const { sigla } = useContext(AppContext);

  const { data, loading, error } = useQuery(QUERY_INSTITUICAO_INFO, {
    variables: { sigla: sigla },
  });

  const apelido = useMemo(() => data?.instituicao.apelido, [data]);

  if (!sigla) {
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
      <>Não foi possível carregar as informações sobre a instituição selecionada.</>
    );
  }

  return null;
};
