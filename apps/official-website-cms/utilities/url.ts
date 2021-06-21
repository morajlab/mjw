const {
  DEVELOPMENT_DOMAIN,
  PRODUCTION_DOMAIN,
  DEVELOPMENT_PORT,
  PRODUCTION_HTTPS_ENABLED,
  NODE_ENV,
} = process.env;

export const resolveURL = (url: string) => {
  return /^https?:\/\//.test(url) ? url : `${getDomain()}/${url}`;
};

export const getDomain = () =>
  NODE_ENV === 'development'
    ? `http://${DEVELOPMENT_DOMAIN}:${DEVELOPMENT_PORT}`
    : `http${PRODUCTION_HTTPS_ENABLED ? 's' : ''}://${PRODUCTION_DOMAIN}`;
