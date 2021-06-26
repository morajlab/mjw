export const PATHS = {
  FAVICON: [
    (get: Function) => get('GLOBAL_ASSETS'),
    'morajlab',
    'images',
    'favicon',
  ],
  LOGO: [(get: Function) => get('GLOBAL_ASSETS'), 'morajlab', 'images', 'logo'],
  PROJECT: [
    (get: Function) => get('GLOBAL_ASSETS'),
    'morajlab',
    'images',
    'projects',
  ],
};
