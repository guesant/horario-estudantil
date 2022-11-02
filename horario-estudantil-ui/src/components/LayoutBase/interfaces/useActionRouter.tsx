import { useRouter } from "next/router";
import * as React from "react";
import { IActionItem } from "./IActionItem";

export const useActionRouter = () => {
  const router = useRouter();

  const { pathname, query } = router;

  const match = React.useCallback(
    (action: IActionItem) => {
      const route = action.route;
      if (route) {
        const { target, exact } = route;

        const isMatch =
          Boolean(target) && exact
            ? pathname === target
            : pathname.startsWith(target!);

        const realTarget = (Object.entries(query) as [string, string][]).reduce(
          (url, [k, v]) => url.replace(`[${k}]`, v),
          target
        );

        return { isMatch, realTarget };
      }

      return { isMatch: false, realTarget: null };
    },
    [pathname, query]
  );

  return { match };
};
