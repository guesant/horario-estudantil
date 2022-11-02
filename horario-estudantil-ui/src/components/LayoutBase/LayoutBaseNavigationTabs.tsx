import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import AppLayoutTab from "../AppLayoutTab/AppLayoutTab";
import AppLayoutTabs from "../AppLayoutTabs/AppLayoutTabs";
import { IAction } from "./interfaces/IAction";
import { IActionItem } from "./interfaces/IActionItem";
import { useActionRouter } from "./interfaces/useActionRouter";

export type ILayoutBaseNavigationTabsProps = {
  actions?: IAction[];
};

const LayoutBaseNavigationTabs = (props: ILayoutBaseNavigationTabsProps) => {
  const { pathname } = useRouter();

  const { match } = useActionRouter();

  const { actions = [] } = props;

  const tabActions = React.useMemo(
    () => actions.filter((i) => i.type === "item"),
    [actions]
  ) as IActionItem[];

  const currentTabIndex = React.useMemo(
    () => tabActions.findIndex((action) => match(action).isMatch),
    [pathname, match]
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
