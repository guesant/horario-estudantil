import Link, { LinkProps } from 'next/link';
import React, {
  forwardRef,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import { ExplorerRoutingContext } from '../ExplorerRoutingContext/ExplorerRoutingContext';
import { getWantedQuery } from './getWantedQuery';
import { getUrlObjectFromHref } from './getUrlObjectFromHref';

type IExplorerUILinkBaseProps = PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
>;

export type IExplorerUILinkProps = IExplorerUILinkBaseProps & {
  keep?: string[];
  ignore?: string[];
};

const ExplorerUILink = forwardRef((props: IExplorerUILinkProps, ref) => {
  const { href, keep, ignore, ...otherProps } = props;

  const { query } = useContext(ExplorerRoutingContext);

  const urlObject = useMemo(() => getUrlObjectFromHref(href), [href]);

  const keepUE = !(urlObject.pathname ?? urlObject.href)!.includes('/painel');

  const targetQuery: any = useMemo(() => {
    const builtQuery = getWantedQuery(query, keep, ignore);

    const cleanQuery = Object.fromEntries(
      Object.entries(builtQuery).filter(([k, v]) => typeof v === 'string'),
    );

    return cleanQuery;
  }, [query, keep, ignore, keepUE]);

  return (
    <Link
      {...otherProps}
      href={{
        ...urlObject,
        query: targetQuery,
      }}
    />
  );
});

ExplorerUILink.displayName = 'AppLink';

export default ExplorerUILink;
