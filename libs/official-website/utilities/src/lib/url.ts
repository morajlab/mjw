export class URL {
  constructor(private env: typeof process.env = process.env) {}

  resolveURL = (url: string) =>
    /^https?:\/\//.test(url) ? url : `${this.getAPIDomain()}/${url}`;

  getAPIDomain = () => {
    const {
      API_DEVELOPMENT_PORT,
      API_DEVELOPMENT_DOMAIN,
      API_PRODUCTION_DOMAIN,
      API_PRODUCTION_HTTPS_ENABLED,
    } = this.env;

    return this.getDomain({
      port: API_DEVELOPMENT_PORT,
      dev_domain: API_DEVELOPMENT_DOMAIN,
      prod_domain: API_PRODUCTION_DOMAIN,
      https: Boolean(API_PRODUCTION_HTTPS_ENABLED),
    });
  };

  getWebsiteDomain = () => {
    const {
      WEBSITE_DEVELOPMENT_PORT,
      WEBSITE_DEVELOPMENT_DOMAIN,
      WEBSITE_PRODUCTION_DOMAIN,
      WEBSITE_PRODUCTION_HTTPS_ENABLED,
    } = this.env;

    return this.getDomain({
      port: WEBSITE_DEVELOPMENT_PORT,
      dev_domain: WEBSITE_DEVELOPMENT_DOMAIN,
      prod_domain: WEBSITE_PRODUCTION_DOMAIN,
      https: Boolean(WEBSITE_PRODUCTION_HTTPS_ENABLED),
    });
  };

  getDomain = ({
    port,
    dev_domain,
    prod_domain,
    https,
  }: {
    port: string;
    dev_domain: string;
    prod_domain: string;
    https: boolean;
  }) => {
    const { NODE_ENV } = this.env;

    return NODE_ENV === 'development'
      ? `http://${dev_domain}:${port}`
      : `http${https ? 's' : ''}://${prod_domain}`;
  };

  getApiURL = (endpoint?: string) => {
    const { API_VERSION } = this.env;

    return `${this.getAPIDomain()}/api/v${API_VERSION}/${endpoint ?? ''}`;
  };
}
