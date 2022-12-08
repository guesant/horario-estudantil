import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Route from 'route-parser';

export const useRouteMatch = () => {
  const router = useRouter();

  const { query } = router;

  const pathname = router.asPath;

  const match = useCallback(
    (target: string | null | undefined) => {
      if (typeof target === 'string') {
        const route = new Route(target);

        const matchedParams = route.match(pathname);

        const isMatched = matchedParams !== false;

        const realTarget =
          route.reverse({ ...query, ...matchedParams }) || null;

        return { isMatched, realTarget };
      }

      return { isMatched: false, realTarget: null };
    },
    [query, pathname],
  );

  return { match };
};
