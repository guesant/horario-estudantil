import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import AppLayoutTab from "../AppLayoutTab/AppLayoutTab";
import AppLayoutTabs from "../AppLayoutTabs/AppLayoutTabs";
import {
  ActionDisplay,
  getActions,
  IActionItem,
  useActionRouter,
} from "./LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS";

const TABS_ACTIONS: IActionItem[] = getActions(ActionDisplay.MOBILE).filter(
  (i) => i.type === "item"
) as any;

const LayoutUnidadeEstudantilNavigationTabs = () => {
  const { pathname } = useRouter();

  const { match } = useActionRouter();

  const currentTabIndex = React.useMemo(
    () => TABS_ACTIONS.findIndex((action) => match(action).isMatch),
    [pathname, match]
  );

  return (
    <>
      <AppLayoutTabs variant="fullWidth" value={currentTabIndex}>
        {TABS_ACTIONS.map((action) => {
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

export default React.memo(LayoutUnidadeEstudantilNavigationTabs);
