import Link, { LinkProps } from 'next/link';
import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import { useRouter } from 'next/router';
import Route from 'route-parser';

type IUILinkBaseProps = PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
>;

export type IUILinkProps = IUILinkBaseProps & {
  href?: string;
};

const UILink = forwardRef((props: IUILinkProps, ref) => {
  const { href, ...otherProps } = props;

  const { query } = useRouter();

  const route = useMemo(() => new Route(href), [href]);

  const targetHref = useMemo(
    () => route.reverse({ ...query, rest: '' }) || href,
    [route, query, href],
  );

  return <Link {...otherProps} href={targetHref} />;
});

UILink.displayName = 'AppLink';

export default UILink;
