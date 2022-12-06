import {createElement, useMemo} from "react";
import AppLayoutTab from "../UILayoutTab/AppLayoutTab";
import AppLayoutTabs from "../UILayoutTabs/AppLayoutTabs";
import Link from "../UIExplorerLink";
import {IAction} from "./interfaces/IAction";
import {IActionItem} from "./interfaces/IActionItem";
import {useActionRouter} from "./interfaces/useActionRouter";

export type ILayoutBaseNavigationTabsProps = {
  actions?: IAction[];
};

const ExplorerBaseLayoutNavigationTabs = (props: ILayoutBaseNavigationTabsProps) => {
  const {match} = useActionRouter();

  const {actions = []} = props;

  const tabActions = useMemo(
    () => actions.filter((i) => i.type === "item"),
    [actions]
  ) as IActionItem[];

  const activeTabIndex = useMemo(
    () => tabActions.findIndex((action) => match(action).isMatch),
    [match, tabActions]
  );

  const activeTabAction = useMemo(() => tabActions[activeTabIndex], [tabActions, activeTabIndex])

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
          if (action.type === "item") {
            const {realTarget} = match(action);

            return (
              <AppLayoutTab
                key={action.label}
                icon={createElement(action.icon)}
                label={action.label}
                LinkComponent={Link}
                {...{href: realTarget ?? "#"}}
              />
            );
          }

          return null;
        })}
      </AppLayoutTabs>
    </>
  );
};

export default ExplorerBaseLayoutNavigationTabs;
