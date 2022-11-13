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

type IAppLinkProps = PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      keep?: string[];
    }
>;

const getUrlObjectFromHref = (href: string | UrlObject) =>
  typeof href === "string"
    ? {
        pathname: href,
      }
    : {
        ...href,
      };

const AppLink = forwardRef((props: IAppLinkProps, ref) => {
  const { href, keep, ...otherProps } = props;

  const { query } = useContext(AppRoutingContext);

  const urlObject = useMemo(() => getUrlObjectFromHref(href), [href]);

  const targetQuery = useMemo(
    () => pick(query, ["ue", ...(keep ?? [])]),
    [query, keep]
  );

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
