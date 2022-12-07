import { useContext, useMemo } from 'react';
import { ExplorerContext } from '../ExplorerContext/ExplorerContext';
import { useQuery } from '@apollo/client';
import { QUERY_INSTITUICAO_INFO } from '../../etc/domain/app/queries/InstituicaoQueries';

export const ExplorerSelectInstituicaoButtonSelectedInfos = () => {
  const { sigla } = useContext(ExplorerContext);

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
    return <>Erro ao carregar informações.</>;
  }

  return null;
};
