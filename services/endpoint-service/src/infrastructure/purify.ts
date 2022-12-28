import { sanitize } from 'isomorphic-dompurify';

export const purify = (source: string) => sanitize(source);
