export const PATHS = {
  FAVICON: [
    (get: Function) => get('GLOBAL_ASSETS_URL'),
    'assets',
    'morajlab',
    'images',
    'favicon',
  ],
  LOGO: [
    (get: Function) => get('GLOBAL_ASSETS_URL'),
    'assets',
    'morajlab',
    'images',
    'logo',
  ],
  PROJECT: [
    (get: Function) => get('GLOBAL_ASSETS_URL'),
    'assets',
    'morajlab',
    'images',
    'projects',
  ],
  POST: [
    (get: Function) => get('GLOBAL_ASSETS_URL'),
    'assets',
    'morajlab',
    '_posts',
  ],
  POST_URL: [(get: Function) => get('WEBSITE_URL'), 'projects'],
  GLOBAL_ASSETS_API: [(get: Function) => get('GLOBAL_ASSETS_URL'), 'api'],
};
