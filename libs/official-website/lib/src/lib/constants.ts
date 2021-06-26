export const PATHS = {
  FAVICON: [
    (get: Function) => get('GLOBAL_ASSETS_URL'),
    'morajlab',
    'images',
    'favicon',
  ],
  LOGO: [
    (get: Function) => get('GLOBAL_ASSETS_URL'),
    'morajlab',
    'images',
    'logo',
  ],
  PROJECT: [
    (get: Function) => get('GLOBAL_ASSETS_URL'),
    'morajlab',
    'images',
    'projects',
  ],
  POST: [(get: Function) => get('GLOBAL_ASSETS_URL'), 'morajlab', '_posts'],
  POST_URL: [(get: Function) => get('WEBSITE_URL'), 'projects'],
};
