import { useContext, useMemo } from 'react';
import { ExplorerContext } from '../../ExplorerContext/ExplorerContext';
import { IExplorerLayoutBaseAction } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { ACTION_HOME } from './ACTION_HOME';
import { getActionsForInstituicao } from './getActionsForInstituicao';
import { ACTION_DIVIDER } from './ACTION_DIVIDER';
import { ACTION_SPACE } from './ACTION_SPACE';

export const useLayoutAppNavigationActions = () => {
  const { sigla } = useContext(ExplorerContext);

  const navigationActions: IExplorerLayoutBaseAction[] = useMemo(
    () =>
      [
        ACTION_HOME,

        ...getActionsForInstituicao(sigla),

        ACTION_DIVIDER,

        ACTION_SPACE,
      ] as IExplorerLayoutBaseAction[],
    [sigla],
  );

  return { navigationActions };
};