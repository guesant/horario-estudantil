import {useRouter} from "next/router";
import {useCallback} from "react";
import {IActionItem} from "./IActionItem";

export const useActionRouter = () => {
  const router = useRouter();

  const {asPath} = router;

  const currentPathname = new URL(`http://hostname${asPath}`).pathname;

  const match = useCallback(
    (action: IActionItem) => {
      const route = action.route;

      if (route) {
        const {target, exact} = route;

        const isMatch =
          Boolean(target) &&
          (exact
            ? currentPathname === target
            : currentPathname.startsWith(target));

        const realTarget = target;

        return {isMatch, realTarget};
      }

      return {isMatch: false, realTarget: null};
    },
    [currentPathname]
  );

  return {match};
};
