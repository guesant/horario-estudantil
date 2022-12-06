import Link, {LinkProps} from "next/link";
import React, {forwardRef, PropsWithChildren, useContext, useMemo,} from "react";
import {UrlObject} from "url";
import {ExplorerRoutingContext} from "../ExplorerRoutingContext/ExplorerRoutingContext";
import pick from "lodash/pick";
import omit from "lodash/omit";

type IUIExplorerLinkBaseProps = PropsWithChildren<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps>;

export type IUIExplorerLinkProps = IUIExplorerLinkBaseProps & {
  keep?: string[];
  ignore?: string[];
};

const getUrlObjectFromHref = (href: string | UrlObject) =>
  typeof href === "string"
    ? {
      pathname: href,
    }
    : {
      ...href,
    };

const UIExplorerLink = forwardRef((props: IUIExplorerLinkProps, ref) => {
  const {href, keep, ignore, ...otherProps} = props;

  const {query} = useContext(ExplorerRoutingContext);

  const urlObject = useMemo(() => getUrlObjectFromHref(href), [href]);

  const targetQuery: any = useMemo(() => {
    const builtQuery = omit(pick(query, ["ue", ...(keep ?? [])]), [
      ...(ignore ?? []),
    ]);

    const cleanQuery = Object.fromEntries(
      Object.entries(builtQuery).filter(
        ([k, v]) => v !== undefined && v !== null
      )
    );

    return cleanQuery;
  }, [query, keep, ignore]);

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

UIExplorerLink.displayName = "AppLink";

export default UIExplorerLink;
