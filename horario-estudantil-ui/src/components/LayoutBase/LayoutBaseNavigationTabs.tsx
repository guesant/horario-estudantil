import { useMemo } from "react";
import AppLayoutTab from "../AppLayoutTab/AppLayoutTab";
import AppLayoutTabs from "../AppLayoutTabs/AppLayoutTabs";
import Link from "../AppLink";
import { IAction } from "./interfaces/IAction";
import { IActionItem } from "./interfaces/IActionItem";
import { useActionRouter } from "./interfaces/useActionRouter";

export type ILayoutBaseNavigationTabsProps = {
  actions?: IAction[];
};

const LayoutBaseNavigationTabs = (props: ILayoutBaseNavigationTabsProps) => {
  const { match } = useActionRouter();

  const { actions = [] } = props;

  const tabActions = useMemo(
    () => actions.filter((i) => i.type === "item"),
    [actions]
  ) as IActionItem[];

  const currentTabIndex = useMemo(
    () => tabActions.findIndex((action) => match(action).isMatch),
    [match, tabActions]
  );

  return (
    <>
      <AppLayoutTabs variant="fullWidth" value={currentTabIndex}>
        {tabActions.map((action) => {
          if (action.type === "item") {
            const { realTarget } = match(action);

            return (
              <AppLayoutTab
                key={action.label}
                icon={action.icon}
                label={action.label}
                LinkComponent={Link}
                {...{ href: realTarget ?? "#" }}
              />
            );
          }

          return null;
        })}
      </AppLayoutTabs>
    </>
  );
};

export default LayoutBaseNavigationTabs;
