import { UrlObject } from 'url';

export const getUrlObjectFromHref = (href: string | UrlObject): UrlObject =>
  typeof href === 'string'
    ? {
        pathname: href,
      }
    : {
        ...href,
      };
