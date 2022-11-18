import Link, { LinkProps } from "next/link";
import React, {
  forwardRef,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { UrlObject } from "url";
import { AppRoutingContext } from "../AppRoutingContext/AppRoutingContext";
import pick from "lodash/pick";
import omit from "lodash/omit";

type IAppLinkBaseProps = PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
>;

export type IAppLinkProps = IAppLinkBaseProps & {
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

const AppLink = forwardRef((props: IAppLinkProps, ref) => {
  const { href, keep, ignore, ...otherProps } = props;

  const { query } = useContext(AppRoutingContext);

  const urlObject = useMemo(() => getUrlObjectFromHref(href), [href]);

  const targetQuery: any = useMemo(() => {
    const builtQuery = omit(pick(query, ["ue", ...(keep ?? [])]), [
      ...(ignore ?? []),
    ]);

    const clearBuiltQuery = Object.fromEntries(
      Object.entries(builtQuery).filter(
        ([k, v]) => v !== undefined && v !== null
      )
    );

    return clearBuiltQuery;
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

AppLink.displayName = "AppLink";

export default AppLink;
