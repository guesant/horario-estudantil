import { useContext, useMemo } from 'react';
import { ExplorerContext } from '../ExplorerContext/ExplorerContext';
import { useQuery } from '@apollo/client';
import { INSTITUICAO_GENERAL_INFO } from '../../graphql/queries/INSTITUICAO_GENERAL_INFO';

export const ExplorerSelectInstituicaoButtonSelectedInfos = () => {
  const { sigla } = useContext(ExplorerContext);

  const { data, loading, error } = useQuery(INSTITUICAO_GENERAL_INFO, {
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
    return <>Erro ao carregar informações.</>;
  }

  return null;
};
