import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { forwardRef, PropsWithChildren } from "react";
import { UrlObject } from "url";

type IAppLinkProps = PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
>;

const AppLink = forwardRef((props: IAppLinkProps, ref) => {
  const { href: baseHref, ...otherProps } = props;

  const { query } = useRouter();

  const baseHrefAsObject: UrlObject =
    typeof baseHref === "string"
      ? {
          pathname: baseHref,
        }
      : {
          ...baseHref,
        };

  return (
    <Link
      {...otherProps}
      href={{
        ...baseHrefAsObject,
        query: { ue: query.ue },
      }}
    />
  );
});

export default AppLink;
