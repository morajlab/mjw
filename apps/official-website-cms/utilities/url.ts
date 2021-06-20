import { DEVELOPMENT_DOMAIN, PRODUCTION_DOMAIN } from '../lib/.';

export const resolveURL = (url: string) =>
  /^https?:\/\//.test(url)
    ? url
    : `${
        process.env.NODE_ENV === 'development'
          ? DEVELOPMENT_DOMAIN
          : PRODUCTION_DOMAIN
      }/${url}`;
