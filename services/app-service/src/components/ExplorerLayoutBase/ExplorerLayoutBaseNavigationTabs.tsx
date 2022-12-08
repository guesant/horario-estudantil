import { createElement, useMemo } from 'react';
import AppLayoutTab from '../UILayoutTab/AppLayoutTab';
import AppLayoutTabs from '../UILayoutTabs/AppLayoutTabs';
import Link from '../UILink';
import { IExplorerLayoutBaseAction } from '../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { IExplorerLayoutBaseActionItem } from '../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionItem';
import { useRouteMatch } from '../../hooks/useRouteMatch';

export type IExplorerLayoutBaseNavigationTabsProps = {
  actions?: IExplorerLayoutBaseAction[];
};

const ExplorerLayoutBaseNavigationTabs = (
  props: IExplorerLayoutBaseNavigationTabsProps,
) => {
  const { match } = useRouteMatch();

  const { actions = [] } = props;

  const tabActions = useMemo(
    () => actions.filter((i) => i.type === 'item'),
    [actions],
  ) as IExplorerLayoutBaseActionItem[];

  const activeTabIndex = useMemo(
    () =>
      tabActions.findIndex(
        (action) => match(action?.route?.target ?? null).isMatched,
      ),
    [match, tabActions],
  );

  const activeTabAction = useMemo(
    () => tabActions[activeTabIndex],
    [tabActions, activeTabIndex],
  );

  if (!activeTabAction) {
    return null;
  }

  if (activeTabAction.tabOptions?.hideTabsOnActive) {
    return null;
  }

  return (
    <>
      <AppLayoutTabs variant="fullWidth" value={activeTabIndex}>
        {tabActions.map((action) => {
          if (action.type === 'item') {
            const { realTarget } = match(action?.route?.target);

            return (
              <AppLayoutTab
                key={action.label}
                label={action.label}
                LinkComponent={Link}
                icon={createElement(action.icon)}
                {...{ href: realTarget ?? '#' }}
              />
            );
          }

          return null;
        })}
      </AppLayoutTabs>
    </>
  );
};

export default ExplorerLayoutBaseNavigationTabs;
