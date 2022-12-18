import { useContext, useMemo } from 'react';
import { ExplorerContext } from '../ExplorerContext/ExplorerContext';
import { useQuery } from '@apollo/client';
import { INSTITUICAO_GENERAL_INFO_BY_SIGLA } from '../../graphql/queries/INSTITUICAO_GENERAL_INFO_BY_SIGLA';
import { InstituicaoGeneralInfoBySiglaQuery } from '../../graphql/__generated__/graphql';

export const ExplorerSelectInstituicaoButtonSelectedInfos = () => {
  const { sigla } = useContext(ExplorerContext);

  const { data, loading, error } = useQuery<InstituicaoGeneralInfoBySiglaQuery>(
    INSTITUICAO_GENERAL_INFO_BY_SIGLA,
    {
      variables: { sigla: sigla },
    },
  );

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
